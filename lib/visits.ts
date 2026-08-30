/**
 * Visitor counts backed by a Redis-compatible REST store (Vercel KV / Upstash).
 *
 * Talks to the REST endpoint over plain fetch so the site picks up no new
 * dependency. When the env vars are absent every helper reports "not
 * configured" rather than throwing, mirroring the contact route's behaviour.
 */

const TOTAL_KEY = "visits:total";
const COUNTRY_KEY = "visits:countries";
const LOCATION_KEY = "visits:locations";
const UNIQUE_KEY = "visits:unique";
const GEO_KEY = "visits:geo";
const LOG_KEY = "visits:log";
const LOG_MAX = 200;

type StoreConfig = { url: string; token: string };

function getConfig(): StoreConfig | null {
  const url = process.env.KV_REST_API_URL?.trim();
  const token = process.env.KV_REST_API_TOKEN?.trim();
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

export function isConfigured() {
  return getConfig() !== null;
}

async function pipeline(commands: string[][]): Promise<unknown[] | null> {
  const config = getConfig();
  if (!config) return null;

  const response = await fetch(`${config.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as Array<{ result?: unknown; error?: string }>;
  if (!Array.isArray(payload)) return null;
  return payload.map((entry) => entry?.result ?? null);
}

/**
 * location: "country|region|city" with empty segments allowed, e.g. "US|MO|St. Louis".
 * visitorHash: salted hash of the visitor IP (never the raw IP) — fed to a
 * HyperLogLog so unique-visitor counts cost ~12KB total regardless of traffic.
 */
export async function recordVisit(
  country: string,
  location?: string,
  visitorHash?: string,
  geo?: string,
) {
  const commands = [
    ["INCR", TOTAL_KEY],
    ["HINCRBY", COUNTRY_KEY, country, "1"],
  ];
  if (location) {
    commands.push(["HINCRBY", LOCATION_KEY, location, "1"]);
    if (geo) {
      // "lat,lon" rounded to ~11km; last write wins, which is fine for a pin.
      commands.push(["HSET", GEO_KEY, location, geo]);
    }
  }
  if (visitorHash) {
    commands.push(["PFADD", UNIQUE_KEY, visitorHash]);
  }
  // Rolling event log: when + where, never who. Capped so it self-expires.
  commands.push(["LPUSH", LOG_KEY, `${Date.now()}|${location ?? `${country}||`}`]);
  commands.push(["LTRIM", LOG_KEY, "0", String(LOG_MAX - 1)]);
  return pipeline(commands);
}

export type VisitLocation = {
  country: string;
  region: string;
  city: string;
  count: number;
  lat?: number;
  lon?: number;
};

export type VisitEvent = {
  ts: number;
  country: string;
  region: string;
  city: string;
};

export type VisitStats = {
  total: number;
  uniques: number;
  countries: Array<{ code: string; count: number }>;
  locations: VisitLocation[];
  events: VisitEvent[];
};

export async function readStats(): Promise<VisitStats | null> {
  const results = await pipeline([
    ["GET", TOTAL_KEY],
    ["HGETALL", COUNTRY_KEY],
    ["HGETALL", LOCATION_KEY],
    ["PFCOUNT", UNIQUE_KEY],
    ["HGETALL", GEO_KEY],
    ["LRANGE", LOG_KEY, "0", "24"],
  ]);
  if (!results) return null;

  const total = Number(results[0] ?? 0) || 0;
  const uniques = Number(results[3] ?? 0) || 0;

  // HGETALL comes back as a flat [field, value, field, value, ...] array.
  const flat = Array.isArray(results[1]) ? (results[1] as unknown[]) : [];
  const countries: Array<{ code: string; count: number }> = [];
  for (let i = 0; i < flat.length - 1; i += 2) {
    const code = String(flat[i]);
    const count = Number(flat[i + 1]) || 0;
    if (code && count > 0) countries.push({ code, count });
  }
  countries.sort((a, b) => b.count - a.count);

  const geoFlat = Array.isArray(results[4]) ? (results[4] as unknown[]) : [];
  const geoByLocation = new Map<string, string>();
  for (let i = 0; i < geoFlat.length - 1; i += 2) {
    geoByLocation.set(String(geoFlat[i]), String(geoFlat[i + 1]));
  }

  const locFlat = Array.isArray(results[2]) ? (results[2] as unknown[]) : [];
  const locations: VisitLocation[] = [];
  for (let i = 0; i < locFlat.length - 1; i += 2) {
    const field = String(locFlat[i]);
    const [country = "", region = "", city = ""] = field.split("|");
    const count = Number(locFlat[i + 1]) || 0;
    if (!country || count <= 0) continue;
    const entry: VisitLocation = { country, region, city, count };
    const geo = geoByLocation.get(field);
    if (geo) {
      const [lat, lon] = geo.split(",").map(Number);
      if (Number.isFinite(lat) && Number.isFinite(lon)) {
        entry.lat = lat;
        entry.lon = lon;
      }
    }
    locations.push(entry);
  }
  locations.sort((a, b) => b.count - a.count);

  const logRaw = Array.isArray(results[5]) ? (results[5] as unknown[]) : [];
  const events: VisitEvent[] = [];
  for (const raw of logRaw) {
    const [ts, country = "", region = "", city = ""] = String(raw).split("|");
    const time = Number(ts);
    if (Number.isFinite(time) && country) events.push({ ts: time, country, region, city });
  }

  return { total, uniques, countries, locations, events };
}

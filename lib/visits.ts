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

/** location: "country|region|city" with empty segments allowed, e.g. "US|MO|St. Louis". */
export async function recordVisit(country: string, location?: string) {
  const commands = [
    ["INCR", TOTAL_KEY],
    ["HINCRBY", COUNTRY_KEY, country, "1"],
  ];
  if (location) {
    commands.push(["HINCRBY", LOCATION_KEY, location, "1"]);
  }
  return pipeline(commands);
}

export type VisitLocation = {
  country: string;
  region: string;
  city: string;
  count: number;
};

export type VisitStats = {
  total: number;
  countries: Array<{ code: string; count: number }>;
  locations: VisitLocation[];
};

export async function readStats(): Promise<VisitStats | null> {
  const results = await pipeline([
    ["GET", TOTAL_KEY],
    ["HGETALL", COUNTRY_KEY],
    ["HGETALL", LOCATION_KEY],
  ]);
  if (!results) return null;

  const total = Number(results[0] ?? 0) || 0;

  // HGETALL comes back as a flat [field, value, field, value, ...] array.
  const flat = Array.isArray(results[1]) ? (results[1] as unknown[]) : [];
  const countries: Array<{ code: string; count: number }> = [];
  for (let i = 0; i < flat.length - 1; i += 2) {
    const code = String(flat[i]);
    const count = Number(flat[i + 1]) || 0;
    if (code && count > 0) countries.push({ code, count });
  }
  countries.sort((a, b) => b.count - a.count);

  const locFlat = Array.isArray(results[2]) ? (results[2] as unknown[]) : [];
  const locations: VisitLocation[] = [];
  for (let i = 0; i < locFlat.length - 1; i += 2) {
    const [country = "", region = "", city = ""] = String(locFlat[i]).split("|");
    const count = Number(locFlat[i + 1]) || 0;
    if (country && count > 0) locations.push({ country, region, city, count });
  }
  locations.sort((a, b) => b.count - a.count);

  return { total, countries, locations };
}

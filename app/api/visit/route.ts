import { NextResponse } from "next/server";

import { isConfigured, readStats, recordVisit } from "@/lib/visits";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const NOT_CONFIGURED = {
  error: "Visitor analytics is not configured. Set KV_REST_API_URL and KV_REST_API_TOKEN.",
};

/** ISO 3166-1 alpha-2, or "ZZ" when Vercel could not resolve the edge location. */
function resolveCountry(request: Request): string {
  const header = request.headers.get("x-vercel-ip-country")?.trim().toUpperCase();
  if (header && /^[A-Z]{2}$/.test(header)) return header;
  return "ZZ";
}

/** Strip the "|" separator and cap length so header values stay safe as hash-field segments. */
function segment(value: string | null, max: number): string {
  if (!value) return "";
  try {
    value = decodeURIComponent(value);
  } catch {
    // keep the raw value if it is not URI-encoded
  }
  return value.replaceAll("|", "/").trim().slice(0, max);
}

/**
 * "country|region|city" from Vercel's edge geo headers (x-vercel-ip-country-region
 * is the ISO 3166-2 subdivision, e.g. MO; x-vercel-ip-city is URL-encoded).
 * Returns undefined when nothing beyond the bare country is known.
 */
function resolveLocation(request: Request, country: string): string | undefined {
  const region = segment(request.headers.get("x-vercel-ip-country-region"), 8);
  const city = segment(request.headers.get("x-vercel-ip-city"), 64);
  if (!region && !city) return undefined;
  return `${country}|${region}|${city}`;
}

/**
 * Salted SHA-256 of the visitor IP, truncated for HyperLogLog membership.
 * The raw IP is never stored; without the salt the hash cannot be reversed
 * to an address by rainbow table.
 */
async function visitorHash(request: Request): Promise<string | undefined> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim();
  if (!ip) return undefined;
  const salt = process.env.VISIT_HASH_SALT?.trim() || "ravindrassk-visit-salt";
  const data = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest).slice(0, 12)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** "lat,lon" from Vercel's edge, rounded to 1 decimal (~11km) so exact positions are never stored. */
function resolveGeo(request: Request): string | undefined {
  const lat = Number(request.headers.get("x-vercel-ip-latitude"));
  const lon = Number(request.headers.get("x-vercel-ip-longitude"));
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return undefined;
  if (Math.abs(lat) > 85 || Math.abs(lon) > 180) return undefined;
  return `${lat.toFixed(1)},${lon.toFixed(1)}`;
}

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json(NOT_CONFIGURED, { status: 503 });
  }

  const country = resolveCountry(request);
  const result = await recordVisit(
    country,
    resolveLocation(request, country),
    await visitorHash(request),
    resolveGeo(request),
  );
  if (!result) {
    return NextResponse.json({ error: "Unable to record visit." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { headers: { "cache-control": "no-store" } });
}

export async function GET() {
  if (!isConfigured()) {
    return NextResponse.json(NOT_CONFIGURED, { status: 503 });
  }

  const stats = await readStats();
  if (!stats) {
    return NextResponse.json({ error: "Unable to read visitor stats." }, { status: 502 });
  }

  return NextResponse.json(stats, { headers: { "cache-control": "no-store" } });
}

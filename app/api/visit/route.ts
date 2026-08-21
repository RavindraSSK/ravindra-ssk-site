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

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json(NOT_CONFIGURED, { status: 503 });
  }

  const country = resolveCountry(request);
  const result = await recordVisit(country, resolveLocation(request, country));
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

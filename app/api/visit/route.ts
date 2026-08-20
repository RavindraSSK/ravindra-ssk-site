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

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json(NOT_CONFIGURED, { status: 503 });
  }

  const result = await recordVisit(resolveCountry(request));
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

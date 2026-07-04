import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_SITE_URL, getSiteHostname, getSiteUrl, LEGACY_VERCEL_HOSTS } from "@/lib/site-url";

export function middleware(request: NextRequest) {
  const siteUrl = getSiteUrl();
  const primaryHost = getSiteHostname();
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === primaryHost) {
    return NextResponse.next();
  }

  const defaultVercelHost = new URL(DEFAULT_SITE_URL).hostname;
  const isLegacyVercelHost = (LEGACY_VERCEL_HOSTS as readonly string[]).includes(host);
  const isDefaultVercelWithCustomPrimary = host === defaultVercelHost && primaryHost !== defaultVercelHost;

  if (isLegacyVercelHost || isDefaultVercelWithCustomPrimary) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, siteUrl);
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|images/).*)"],
};

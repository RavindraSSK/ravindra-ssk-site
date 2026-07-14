import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_SITE_URL, getSiteHostname, getSiteUrl, LEGACY_HOSTS } from "@/lib/site-url";

export function proxy(request: NextRequest) {
  const siteUrl = getSiteUrl();
  const primaryHost = getSiteHostname();
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === primaryHost) {
    return NextResponse.next();
  }

  const defaultHost = new URL(DEFAULT_SITE_URL).hostname;
  const isLegacyHost = (LEGACY_HOSTS as readonly string[]).includes(host);
  const isDefaultHostWithCustomPrimary = host === defaultHost && primaryHost !== defaultHost;

  if (isLegacyHost || isDefaultHostWithCustomPrimary) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, siteUrl);
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|branding/).*)"],
};

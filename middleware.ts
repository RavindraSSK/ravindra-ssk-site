import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getSiteHostname, getSiteUrl } from "@/lib/site-url";

const VERCEL_HOST = "ravindra-ssk.vercel.app";

export function middleware(request: NextRequest) {
  const primaryHost = getSiteHostname();
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === VERCEL_HOST && primaryHost !== VERCEL_HOST) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, getSiteUrl());
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|images/).*)"],
};

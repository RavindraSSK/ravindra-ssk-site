import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { buildPageMetadata, pageMetadata } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata(pageMetadata.portfolio, "/portfolio");

export default function PortfolioPage() {
  return <StaticPage page="portfolio" />;
}

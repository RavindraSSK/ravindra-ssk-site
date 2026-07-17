import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { pageMetadata } from "@/lib/content";

export const metadata: Metadata = {
  ...pageMetadata.portfolio,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <StaticPage page="portfolio" />;
}

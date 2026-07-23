import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { buildPageMetadata, pageMetadata } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata(pageMetadata.about, "/about");

export default function AboutPage() {
  return <StaticPage page="about" />;
}

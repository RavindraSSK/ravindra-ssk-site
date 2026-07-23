import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { buildPageMetadata, pageMetadata } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata(pageMetadata.explore, "/explore");

export default function ExplorePage() {
  return <StaticPage page="explore" />;
}

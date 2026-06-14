import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { pageMetadata } from "@/lib/content";

export const metadata: Metadata = pageMetadata.explore;

export default function ExplorePage() {
  return <StaticPage page="explore" />;
}

import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { pageMetadata } from "@/lib/content";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return <StaticPage page="about" />;
}

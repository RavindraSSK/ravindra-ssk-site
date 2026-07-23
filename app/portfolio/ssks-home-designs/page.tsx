import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { buildPageMetadata } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata(
  {
    title: "SSKS Home Designs",
    description:
      "SSKS Home Designs case study: sustainable residential design decisions, project gallery, and MITx-informed building design principles.",
  },
  "/portfolio/ssks-home-designs",
);

export default function SSKSHomeDesignsPage() {
  return <StaticPage page="ssks-home-designs" />;
}

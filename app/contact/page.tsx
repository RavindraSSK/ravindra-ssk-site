import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { buildPageMetadata, pageMetadata } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata(pageMetadata.contact, "/contact");

export default function ContactPage() {
  return <StaticPage page="contact" />;
}

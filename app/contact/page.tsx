import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";
import { pageMetadata } from "@/lib/content";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return <StaticPage page="contact" />;
}

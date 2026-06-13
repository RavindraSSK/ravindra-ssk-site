import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ravindra for research collaborations, internships, and interesting technical problems.",
};

export default function ContactPage() {
  return <StaticPage page="contact" />;
}

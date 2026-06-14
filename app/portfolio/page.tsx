import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";

export const metadata: Metadata = {
  title: "Portfolio & Credentials",
  description: "Projects, experience, education, technical skills, and certifications from Ravindra.",
};

export default function PortfolioPage() {
  return <StaticPage page="portfolio" />;
}

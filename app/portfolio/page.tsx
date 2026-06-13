import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected AI research, machine learning projects, experience, education, skills, and certifications from Ravindra.",
};

export default function PortfolioPage() {
  return <StaticPage page="portfolio" />;
}

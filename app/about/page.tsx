import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";

export const metadata: Metadata = {
  title: "About",
  description: "About Ravindra, an AI-focused researcher and builder working across machine learning, deep learning, explainability, and software development.",
};

export default function AboutPage() {
  return <StaticPage page="about" />;
}

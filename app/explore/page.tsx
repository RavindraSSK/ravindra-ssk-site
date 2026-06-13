import type { Metadata } from "next";

import { StaticPage } from "@/components/static-page";

export const metadata: Metadata = {
  title: "Explore",
  description: "Writing, photography, fitness, health, and music from Ravindra.",
};

export default function ExplorePage() {
  return <StaticPage page="explore" />;
}

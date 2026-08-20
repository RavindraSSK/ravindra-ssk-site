import type { Metadata } from "next";

import { VisitorMap } from "@/components/visitor-map";
import { buildPageMetadata } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata(
  {
    title: "Live Visitor Analytics",
    description: "Live visitor counts and a world map of where readers of ravindrassk.com are browsing from.",
  },
  "/analytics",
);

export default function AnalyticsPage() {
  return (
    <main id="main-content" className="page-shell">
      <section className="section">
        <h1>Live Visitor Analytics</h1>
        <p>
          Real visitor counts for ravindrassk.com, resolved at the edge and grouped by country. Updates without a
          page reload.
        </p>
        <VisitorMap />
      </section>
    </main>
  );
}

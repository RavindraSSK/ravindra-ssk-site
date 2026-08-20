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
    <main id="main-content" className="page-shell analytics-shell">
      <section className="section vmap-console">
        <header className="vmap-console__masthead">
          <div>
            <p className="vmap-console__eyebrow" aria-hidden="true">
              {"/// SSK · NETWORK OPERATIONS"}
            </p>
            <h1 className="vmap-console__title">Global Visitor Uplink</h1>
            <p className="vmap-console__sub">
              Real visitors to ravindrassk.com, resolved at the edge and traced by country. Live — no page reload.
            </p>
          </div>
          <p className="vmap-console__status">
            <span className="vmap__blip" aria-hidden="true" /> LIVE · SYNC 15S
          </p>
        </header>
        <VisitorMap />
      </section>
    </main>
  );
}

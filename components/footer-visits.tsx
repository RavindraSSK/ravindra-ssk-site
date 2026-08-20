"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Stats = { total: number; countries: Array<{ code: string; count: number }> };
type View =
  | { kind: "loading" }
  | { kind: "ready"; total: number; countries: number }
  | { kind: "plain" }; // store not configured or unreachable — show the link without numbers

async function fetchView(): Promise<View> {
  try {
    const response = await fetch("/api/visit", { cache: "no-store" });
    if (!response.ok) return { kind: "plain" };
    const stats = (await response.json()) as Stats;
    return { kind: "ready", total: stats.total, countries: stats.countries.length };
  } catch {
    return { kind: "plain" };
  }
}

/**
 * Full-width live stat bar at the very bottom of the footer: the running
 * page-visit total on the left, a "view world map" action on the right.
 * The whole bar is one link to /analytics.
 */
export function FooterVisits() {
  const [view, setView] = useState<View>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    void fetchView().then((next) => {
      if (!cancelled) setView(next);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Link className="footer-visits" href="/analytics" aria-label="Open the live visitor analytics map">
      <span className="footer-visits__stat">
        <svg className="footer-visits__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        {view.kind === "ready" ? (
          <>
            <span className="footer-visits__number">{view.total.toLocaleString()}</span>
            <span className="footer-visits__label">
              page visits{view.countries > 0 ? ` · ${view.countries} ${view.countries === 1 ? "country" : "countries"}` : ""}
            </span>
          </>
        ) : (
          <span className="footer-visits__label">
            {view.kind === "loading" ? "Counting page visits…" : "Live visitor analytics"}
          </span>
        )}
      </span>
      <span className="footer-visits__action">
        View world map <span className="footer-visits__arrow" aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}

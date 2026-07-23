import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main-content" className="page-shell">
      <section className="section">
        <div className="container">
          <div className="card card--glass stack">
            <span className="eyebrow">404</span>
            <h1 className="page-title">Page not found</h1>
            <p className="page-copy">This page doesn&apos;t exist or has moved.</p>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <Link className="button button--primary" href="/">Go home</Link>
              <Link className="button button--secondary" href="/portfolio">View work</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

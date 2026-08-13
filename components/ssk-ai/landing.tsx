import Link from "next/link";

import { SskAiPoster } from "@/components/ssk-ai/poster";
import { getIssuePath, SSK_AI } from "@/lib/ssk-ai";
import type { SskAiIssue } from "@/lib/ssk-ai/types";

export function IssueArchiveCard({ issue, featured = false }: { issue: SskAiIssue; featured?: boolean }) {
  const href = getIssuePath(issue);

  return (
    <article className={featured ? "card ssk-issue-card ssk-issue-card--latest" : "card ssk-issue-card"}>
      <div className="ssk-issue-card__meta">
        {featured ? <span className="meta-pill">Latest issue</span> : <span className="meta-pill">Issue</span>}
        <time dateTime={issue.datePublished}>{issue.dateLabel}</time>
      </div>
      <h3 className="ssk-issue-card__title">{issue.cardTitle}</h3>
      <p className="ssk-issue-card__theme">{issue.theme}</p>
      <SskAiPoster poster={issue.poster} datePublished={issue.datePublished} className="ssk-poster--card" />
      <Link className="button button--primary" href={href}>
        <span>Read Briefing</span>
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export function SskAiLanding({ issues }: { issues: readonly SskAiIssue[] }) {
  const [latest, ...previous] = issues;

  return (
    <main id="main-content" className="page-shell ssk-page">
      <section className="section section--tight">
        <div className="container ssk-landing-hero">
          <div className="ssk-landing-hero__copy">
            <h1 className="page-title">{SSK_AI.name}</h1>
            <p className="ssk-landing-hero__tagline">{SSK_AI.tagline}</p>
            <p className="page-copy">{SSK_AI.seoDescription}</p>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="ssk-latest-title">
        <div className="container ssk-archive">
          <div className="ssk-archive__intro">
            <h2 id="ssk-latest-title" className="section-title">
              Latest issue
            </h2>
            <p className="section-copy">
              New briefings will appear here as they are published. This archive currently holds the first issue.
            </p>
          </div>
          {latest ? <IssueArchiveCard issue={latest} featured /> : null}
          {previous.length > 0 ? (
            <div className="ssk-archive__past" aria-labelledby="ssk-past-title">
              <h2 id="ssk-past-title" className="ssk-archive__past-title">
                Earlier issues
              </h2>
              <div className="ssk-archive__grid">
                {previous.map((issue) => (
                  <IssueArchiveCard key={issue.slug} issue={issue} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

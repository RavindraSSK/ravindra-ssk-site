import Link from "next/link";

import {
  getIssuePath,
  SSK_AI_HUB,
  TECH_CONTENT,
  TECH_NEWS,
  type SskAiIssue,
  type TechContentArticle,
} from "@/lib/ssk-ai";
import { formatLongDate } from "@/lib/ssk-ai/schedule";

function SectionIcon({ id }: { id: "tech-content" | "tech-news" }) {
  if (id === "tech-content") {
    return (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
        <path d="M4 5.5h6a2 2 0 0 1 2 2V19a2 2 0 0 0-2-2H4V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M20 5.5h-6a2 2 0 0 0-2 2V19a2 2 0 0 1 2-2h6V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
      <path d="M4 6h12v13H5.5A1.5 1.5 0 0 1 4 17.5V6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 9h2.5A1.5 1.5 0 0 1 20 10.5v7a1.5 1.5 0 0 1-1.5 1.5H16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 9.5h6M7 12.5h6M7 15.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HubMasthead({ latest }: { latest?: SskAiIssue }) {
  return (
    <div className="ssk-masthead">
      <p className="ssk-masthead__rule">
        <span>Independent AI publication</span>
        <span aria-hidden="true">·</span>
        <span>Founded &amp; edited by Ravindra SSK</span>
        {latest ? (
          <>
            <span aria-hidden="true">·</span>
            <span>
              Latest edition <time dateTime={latest.datePublished}>{formatLongDate(latest.datePublished)}</time>
            </span>
          </>
        ) : null}
      </p>
      <h1 className="ssk-masthead__title">
        {SSK_AI_HUB.name}
        <span className="ssk-masthead__tm" aria-hidden="true">
          ™
        </span>
      </h1>
      <p className="ssk-masthead__tagline">{SSK_AI_HUB.tagline}</p>
    </div>
  );
}

function SectionCard({
  section,
  count,
  countLabel,
  cadence,
  latestLabel,
  latestHref,
  latestTitle,
}: {
  section: typeof TECH_CONTENT | typeof TECH_NEWS;
  count: number;
  countLabel: string;
  cadence: string;
  latestLabel: string;
  latestHref?: string;
  latestTitle?: string;
}) {
  return (
    <article className={`card ssk-folder ssk-folder--${section.id}`}>
      <div className="ssk-folder__head">
        <span className="ssk-folder__icon" aria-hidden="true">
          <SectionIcon id={section.id} />
        </span>
        <span className="meta-pill">{cadence}</span>
      </div>
      <h2 className="ssk-folder__title">
        <Link href={section.path}>{section.name}</Link>
      </h2>
      <p className="ssk-folder__tagline">{section.tagline}</p>
      <p className="ssk-folder__blurb">{section.blurb}</p>
      <dl className="ssk-folder__stats">
        <div>
          <dt>{countLabel}</dt>
          <dd>{count}</dd>
        </div>
        <div>
          <dt>{latestLabel}</dt>
          <dd className="ssk-folder__stat-text">{latestTitle ?? "—"}</dd>
        </div>
      </dl>
      <div className="ssk-folder__actions">
        <Link className="button button--primary" href={section.path}>
          <span>Open {section.name}</span>
          <span aria-hidden="true">→</span>
        </Link>
        {latestHref ? (
          <Link className="inline-link" href={latestHref}>
            Read the latest <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function SskAiHubLanding({
  issues,
  articles,
}: {
  issues: readonly SskAiIssue[];
  articles: readonly TechContentArticle[];
}) {
  const latestIssue = issues[0];
  const latestArticle = articles[0];

  return (
    <main id="main-content" className="page-shell ssk-page ssk-hub">
      <section className="section section--tight">
        <div className="container">
          <HubMasthead latest={latestIssue} />
          <p className="ssk-hub__intro">{SSK_AI_HUB.seoDescription}</p>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="ssk-folders-title">
        <div className="container">
          <h2 id="ssk-folders-title" className="ssk-hub__section-title">
            Two desks, one hub
          </h2>
          <div className="ssk-folder-grid">
            <SectionCard
              section={TECH_CONTENT}
              count={articles.length}
              countLabel="Articles"
              cadence="Long-form"
              latestLabel="Most recent"
              latestHref={latestArticle ? `${TECH_CONTENT.path}/${latestArticle.slug}` : undefined}
              latestTitle={latestArticle?.cardTitle}
            />
            <SectionCard
              section={TECH_NEWS}
              count={issues.length}
              countLabel="Editions"
              cadence="Weekly + monthly"
              latestLabel="Current edition"
              latestHref={latestIssue ? getIssuePath(latestIssue) : undefined}
              latestTitle={latestIssue?.cardTitle}
            />
          </div>
        </div>
      </section>

      {latestIssue ? (
        <section className="section section--tight" aria-labelledby="ssk-hub-front">
          <div className="container">
            <h2 id="ssk-hub-front" className="ssk-hub__section-title">
              On the front page
            </h2>
            <Link className="card card--hover ssk-front-strip" href={getIssuePath(latestIssue)}>
              <div className="ssk-front-strip__meta">
                <span className="meta-pill">{TECH_NEWS.name}</span>
                <span className="ssk-front-strip__edition">
                  {latestIssue.edition.kind === "monthly" ? "Month in review" : `Weekly No. ${latestIssue.edition.number}`}
                  <span aria-hidden="true"> · </span>
                  {latestIssue.edition.periodLabel}
                </span>
              </div>
              <p className="ssk-front-strip__title">{latestIssue.cardTitle}</p>
              <p className="ssk-front-strip__theme">{latestIssue.theme}</p>
              <span className="inline-link">
                Read the edition <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}

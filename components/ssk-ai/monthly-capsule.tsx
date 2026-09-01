import Link from "next/link";

import { AmieVisual } from "@/components/ssk-ai/amie-visual";
import { getIssuePath, getIssuesByKind, SSK_AI_HUB, TECH_NEWS } from "@/lib/ssk-ai";
import type { MonthlyCapsule, SskAiIssue } from "@/lib/ssk-ai/types";

/**
 * The month-in-review layout: a visual, plain-language recap for readers who
 * did not follow every weekly edition. The weeklies remain the technical
 * record — every card links back into one of them.
 */
export function MonthlyCapsulePage({ issue, monthly }: { issue: SskAiIssue; monthly: MonthlyCapsule }) {
  const month = issue.edition.periodStart.slice(0, 7);
  const weeklies = getIssuesByKind("weekly")
    .filter((weekly) => weekly.edition.periodStart.slice(0, 7) === month)
    .sort((a, b) => a.edition.number - b.edition.number);

  return (
    <main id="main-content" className="page-shell ssk-page">
      <article>
        <header className="section section--tight">
          <div className="container ssk-issue-hero">
            <p className="ssk-kicker">
              <Link href={SSK_AI_HUB.path}>{SSK_AI_HUB.name}</Link>
              <span aria-hidden="true"> · </span>
              <Link href={TECH_NEWS.path}>{TECH_NEWS.name}</Link>
              <span aria-hidden="true"> · </span>
              <time dateTime={issue.datePublished}>{issue.dateLabel}</time>
            </p>
            <h1 className="page-title ssk-issue-h1">{issue.title}</h1>
            <p className="ssk-edition-rule">
              <span>Vol. {issue.edition.volume}</span>
              <span aria-hidden="true">·</span>
              <span>Month in Review</span>
              <span aria-hidden="true">·</span>
              <span>Covering {issue.edition.periodLabel}</span>
            </p>
            <p className="ssk-issue-theme">{issue.theme}</p>
            {issue.hero ? (
              <AmieVisual visual={issue.hero} sizes="(max-width: 1100px) 100vw, 1100px" />
            ) : null}
            <ul className="ssk-glance" aria-label="August at a glance">
              {monthly.atAGlance.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="section section--tight" aria-label="Introduction">
          <div className="container ssk-measure">
            {monthly.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="ssk-lede">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {monthly.capsule ? (
          <section className="section section--tight" aria-label="The month at a glance, as one graphic">
            <div className="container ssk-issue-hero">
              <AmieVisual visual={monthly.capsule} sizes="(max-width: 1100px) 100vw, 1100px" />
            </div>
          </section>
        ) : null}

        <section className="section section--tight" aria-labelledby="ssk-monthly-devs">
          <div className="container">
            <span className="eyebrow">The month, distilled</span>
            <h2 id="ssk-monthly-devs" className="section-title">
              The 10 developments that defined August
            </h2>
            <ol className="ssk-mdev-grid">
              {monthly.developments.map((dev, index) => (
                <li className="card ssk-mdev" key={dev.name}>
                  <p className="ssk-mdev__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="ssk-mdev__name">{dev.name}</h3>
                  <p className="ssk-mdev__label">What happened</p>
                  <p className="ssk-mdev__body">{dev.whatHappened}</p>
                  <p className="ssk-mdev__label">Why it matters</p>
                  <p className="ssk-mdev__body">{dev.whyItMatters}</p>
                  <p className="ssk-mdev__simple">
                    <span className="ssk-mdev__label">In simple words</span>
                    {dev.inSimpleWords}
                  </p>
                  <p className="ssk-mdev__read">
                    <Link className="inline-link" href={dev.read.href}>
                      {dev.read.label} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" aria-labelledby="ssk-monthly-big">
          <div className="container ssk-measure">
            <span className="eyebrow">The big picture</span>
            <h2 id="ssk-monthly-big" className="section-title">
              What August added up to
            </h2>
            <p className="ssk-bigger-lede">{monthly.bigPicture.thesis}</p>
            <p className="ssk-prose">{monthly.bigPicture.body}</p>
          </div>
        </section>

        <section className="section section--tight" aria-labelledby="ssk-monthly-watch">
          <div className="container">
            <span className="eyebrow">Looking ahead</span>
            <h2 id="ssk-monthly-watch" className="section-title">
              What to watch in September
            </h2>
            <div className="ssk-bigger-grid">
              {monthly.watchlist.map((item) => (
                <article className="card" key={item.theme}>
                  <h3 className="ssk-bigger-title">{item.theme}</h3>
                  <p className="ssk-prose">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tight" aria-labelledby="ssk-monthly-weeks">
          <div className="container">
            <span className="eyebrow">The full record</span>
            <h2 id="ssk-monthly-weeks" className="section-title">
              Explore August week by week
            </h2>
            <div className="ssk-bigger-grid">
              {weeklies.map((weekly) => (
                <article className="card ssk-mweek" key={weekly.slug}>
                  <p className="ssk-mweek__rule">
                    <span className="meta-pill">Week {weekly.edition.number}</span>
                    <span className="ssk-edition__period">{weekly.edition.periodLabel}</span>
                  </p>
                  <h3 className="ssk-mweek__title">
                    <Link href={getIssuePath(weekly)}>{weekly.cardTitle}</Link>
                  </h3>
                  <p className="ssk-prose">{weekly.theme}</p>
                  <p>
                    <Link className="inline-link" href={getIssuePath(weekly)}>
                      Read edition <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </article>
              ))}
            </div>
            <p className="ssk-back">
              <Link className="inline-link" href={TECH_NEWS.path}>
                Back to the {TECH_NEWS.name} archive <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

import Link from "next/link";

import { AmieVisual } from "@/components/ssk-ai/amie-visual";
import { LinkedInSubscribe } from "@/components/ssk-ai/linkedin-subscribe";
import { WhatWeCanBuild } from "@/components/ssk-ai/projects";
import { getIssuePath, getIssuesByKind, SSK_AI_HUB, TECH_NEWS } from "@/lib/ssk-ai";
import type { MonthlyCapsule, SskAiIssue } from "@/lib/ssk-ai/types";

/**
 * The month-in-review layout: a visual, plain-language recap for readers who
 * did not follow every weekly edition. The weeklies remain the technical
 * record — a card links back into one of them, or to its primary source when
 * the development fell outside the weekly windows.
 */
function monthName(isoDate: string, offset = 0) {
  const date = new Date(`${isoDate.slice(0, 7)}-01T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() + offset);
  return date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
}

export function MonthlyCapsulePage({ issue, monthly }: { issue: SskAiIssue; monthly: MonthlyCapsule }) {
  const month = issue.edition.periodStart.slice(0, 7);
  const weeklies = getIssuesByKind("weekly")
    .filter((weekly) => weekly.edition.periodStart.slice(0, 7) === month)
    .sort((a, b) => a.edition.number - b.edition.number);
  const previousMonthly = getIssuesByKind("monthly").find(
    (other) => other.edition.periodEnd < issue.edition.periodStart,
  );
  const thisMonth = monthName(issue.edition.periodStart);
  const nextMonth = monthName(issue.edition.periodStart, 1);

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
            <ul className="ssk-glance" aria-label={`${thisMonth} at a glance`}>
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

        {monthly.lanes || monthly.flow || monthly.readThree ? (
          <section className="section section--tight" aria-label="How to read this review">
            <div className="container ssk-measure">
              {monthly.lanes ? (
                <ul className="ssk-lanes" aria-label="Reader lanes">
                  {monthly.lanes.map((lane) => (
                    <li key={lane.label}>
                      <span className="ssk-lane">{lane.label}</span>
                      <span>{lane.text}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {monthly.flow ? (
                <div className="ssk-flow-wrap">
                  <p className="ssk-mdev__label">{monthly.flow.heading}</p>
                  <ol className="ssk-flow">
                    {monthly.flow.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ) : null}
              {monthly.readThree ? (
                <div className="card ssk-readthree">
                  <h2 className="ssk-bigger-title">{monthly.readThree.heading}</h2>
                  <ul>
                    {monthly.readThree.items.map((item) => (
                      <li key={item.audience}>
                        <p className="ssk-mdev__label">{item.audience}</p>
                        <p className="ssk-mdev__body">
                          <strong>{item.name}</strong> — {item.why}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

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
              The {monthly.developments.length} developments that defined {thisMonth}
            </h2>
            <ol className="ssk-mdev-grid">
              {monthly.developments.map((dev, index) => (
                <li className="card ssk-mdev" key={dev.name}>
                  <p className="ssk-mdev__num">
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    {dev.lane ? <span className="ssk-lane">{dev.lane}</span> : null}
                  </p>
                  <h3 className="ssk-mdev__name">{dev.name}</h3>
                  <p className="ssk-mdev__label">What happened</p>
                  <p className="ssk-mdev__body">{dev.whatHappened}</p>
                  <p className="ssk-mdev__label">Why it matters</p>
                  <p className="ssk-mdev__body">{dev.whyItMatters}</p>
                  {dev.pictureThis ? (
                    <>
                      <p className="ssk-mdev__label">Picture this — a proposed example</p>
                      <p className="ssk-mdev__body">{dev.pictureThis}</p>
                    </>
                  ) : null}
                  {dev.take ? (
                    <p className="ssk-mdev__simple">
                      <span className="ssk-mdev__label">SSK AI Hub take</span>
                      {dev.take}
                    </p>
                  ) : null}
                  {dev.tryThis ? (
                    <p className="ssk-mdev__body">
                      <strong>Try this (a proposal):</strong> {dev.tryThis}
                    </p>
                  ) : null}
                  {dev.inSimpleWords ? (
                    <p className="ssk-mdev__simple">
                      <span className="ssk-mdev__label">In simple words</span>
                      {dev.inSimpleWords}
                    </p>
                  ) : null}
                  <p className="ssk-mdev__read">
                    {dev.read.href.startsWith("/") ? (
                      <Link className="inline-link" href={dev.read.href}>
                        {dev.read.label} <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <a className="inline-link" href={dev.read.href} rel="noopener noreferrer">
                        {dev.read.label} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {monthly.scorecard ? (
          <section className="section section--tight" aria-labelledby="ssk-monthly-score">
            <div className="container">
              <h2 id="ssk-monthly-score" className="section-title">
                {monthly.scorecard.heading}
              </h2>
              <div className="ssk-scorecard-wrap" tabIndex={0} role="region" aria-labelledby="ssk-monthly-score">
                <table className="ssk-scorecard">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Pick</th>
                      <th scope="col">Why it stood out</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthly.scorecard.rows.map((row) => (
                      <tr key={row.category}>
                        <th scope="row">{row.category}</th>
                        <td>{row.pick}</td>
                        <td>{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        {monthly.weekendTests ? (
          <section className="section section--tight" aria-labelledby="ssk-monthly-weekend">
            <div className="container">
              <h2 id="ssk-monthly-weekend" className="section-title">
                {monthly.weekendTests.heading}
              </h2>
              <div className="ssk-bigger-grid">
                {monthly.weekendTests.items.map((item, index) => (
                  <article className="card" key={item.title}>
                    <p className="ssk-mdev__num">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="ssk-bigger-title">{item.title}</h3>
                    <p className="ssk-prose">{item.body}</p>
                  </article>
                ))}
              </div>
              <p className="ssk-prose ssk-measure">These are proposed exercises, not tests we ran or results we are claiming.</p>
            </div>
          </section>
        ) : null}

        {monthly.noise ? (
          <section className="section section--tight" aria-labelledby="ssk-monthly-noise">
            <div className="container ssk-measure">
              <h2 id="ssk-monthly-noise" className="section-title">
                {monthly.noise.heading}
              </h2>
              {monthly.noise.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="ssk-prose">
                  {paragraph}
                </p>
              ))}
              <ul className="ssk-prose">
                {monthly.noise.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="ssk-bigger-lede">{monthly.noise.closing}</p>
            </div>
          </section>
        ) : null}

        {monthly.lateSignal ? (
          <section className="section section--tight" aria-labelledby="ssk-monthly-late">
            <div className="container ssk-measure">
              <span className="eyebrow">Late-month signal</span>
              <h2 id="ssk-monthly-late" className="section-title">
                {monthly.lateSignal.heading}
              </h2>
              {monthly.lateSignal.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="ssk-prose">
                  {paragraph}
                </p>
              ))}
              <p className="ssk-prose">
                <strong>{monthly.lateSignal.watch}</strong>
              </p>
              {monthly.lateSignal.source ? (
                <p className="ssk-prose">
                  <a className="inline-link" href={monthly.lateSignal.source.href} rel="noopener noreferrer">
                    {monthly.lateSignal.source.label} <span aria-hidden="true">→</span>
                  </a>
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="section" aria-labelledby="ssk-monthly-big">
          <div className="container ssk-measure">
            <span className="eyebrow">The big picture</span>
            <h2 id="ssk-monthly-big" className="section-title">
              What {thisMonth} added up to
            </h2>
            <p className="ssk-bigger-lede">{monthly.bigPicture.thesis}</p>
            <p className="ssk-prose">{monthly.bigPicture.body}</p>
          </div>
        </section>

        {monthly.watchlist && monthly.watchlist.length > 0 ? (
        <section className="section section--tight" aria-labelledby="ssk-monthly-watch">
          <div className="container">
            <span className="eyebrow">Looking ahead</span>
            <h2 id="ssk-monthly-watch" className="section-title">
              What to watch in {nextMonth}
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
        ) : null}

        {monthly.readerQuestion ? (
          <section className="section section--tight" aria-labelledby="ssk-monthly-question">
            <div className="container ssk-measure">
              <span className="eyebrow">Your turn</span>
              <h2 id="ssk-monthly-question" className="section-title">
                {monthly.readerQuestion.heading}
              </h2>
              <p className="ssk-prose">{monthly.readerQuestion.intro}</p>
              <ul className="ssk-prose ssk-options">
                {monthly.readerQuestion.options.map((option) => (
                  <li key={option.label}>
                    <strong>{option.label}</strong> {option.text}
                  </li>
                ))}
              </ul>
              <p className="ssk-prose">{monthly.readerQuestion.after}</p>
            </div>
          </section>
        ) : null}

        {issue.projects && issue.projects.length > 0 ? (
          <section className="section section--tight">
            <div className="container">
              <WhatWeCanBuild issue={issue} />
            </div>
          </section>
        ) : null}

        <section className="section section--tight" aria-labelledby="ssk-monthly-weeks">
          <div className="container">
            <span className="eyebrow">The full record</span>
            <h2 id="ssk-monthly-weeks" className="section-title">
              Explore {thisMonth} week by week
            </h2>
            <div className="ssk-bigger-grid">
              {weeklies.map((weekly, index) => (
                <article className="card ssk-mweek" key={weekly.slug}>
                  <p className="ssk-mweek__rule">
                    <span className="meta-pill">Week {index + 1}</span>
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
            {previousMonthly ? (
              <p className="ssk-back">
                <Link className="inline-link" href={getIssuePath(previousMonthly)}>
                  Previous month in review: {previousMonthly.cardTitle} <span aria-hidden="true">→</span>
                </Link>
              </p>
            ) : null}
            <LinkedInSubscribe />
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

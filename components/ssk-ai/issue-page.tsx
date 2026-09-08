import Link from "next/link";

import { AmieVisual } from "@/components/ssk-ai/amie-visual";
import { LinkedInSubscribe } from "@/components/ssk-ai/linkedin-subscribe";
import { MonthlyCapsulePage } from "@/components/ssk-ai/monthly-capsule";
import { SskAiPoster } from "@/components/ssk-ai/poster";
import { WhatWeCanBuild } from "@/components/ssk-ai/projects";
import { RichText, richText } from "@/components/ssk-ai/rich-text";
import { SourceLinks, StorySection } from "@/components/ssk-ai/story";
import { SSK_AI_HUB, TECH_NEWS } from "@/lib/ssk-ai";
import type { ReadingListRow, SskAiIssue, SskAiStory } from "@/lib/ssk-ai/types";

function ReadingList({ rows, stories }: { rows: ReadingListRow[]; stories: SskAiStory[] }) {
  const byId = new Map(stories.map((story) => [story.id, story] as const));

  return (
    <section className="section section--tight" aria-labelledby="ssk-reading-list-title">
      <div className="container ssk-measure">
        <h2 id="ssk-reading-list-title" className="ssk-reading-list__title">
          This week&apos;s reading list
        </h2>
        {/* The table has a hard minimum width and scrolls horizontally on a phone.
            A scroll container that only a mouse or finger can move is a keyboard
            trap for its content (WCAG 2.1.1), so it takes focus and announces itself
            as a region — the same pattern as the desk's cadence table. */}
        <div className="card ssk-reading-list" tabIndex={0} role="region" aria-label="This week's reading list">
          <table className="ssk-reading-list__table">
            <thead>
              <tr>
                <th scope="col">Development</th>
                <th scope="col">Announcement date</th>
                <th scope="col">The question for builders</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const story = byId.get(row.storyId);
                return (
                  <tr key={row.storyId}>
                    <th scope="row">
                      {story ? <a href={`#${story.id}`}>{row.development}</a> : row.development}
                    </th>
                    <td>{row.announced}</td>
                    <td>{row.question}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function SskAiIssuePage({ issue }: { issue: SskAiIssue }) {
  // Monthly editions are visual recaps, not weekly deep dives — they render
  // through their own layout while sharing the edition data model.
  if (issue.monthly) {
    return <MonthlyCapsulePage issue={issue} monthly={issue.monthly} />;
  }

  const opening = issue.opening ?? [];
  const stories = issue.stories ?? [];
  const readingList = issue.readingList ?? [];

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
              <span>
                {issue.edition.kind === "monthly" ? "Month in review" : `Weekly No. ${issue.edition.number}`}
              </span>
              <span aria-hidden="true">·</span>
              <span>Covering {issue.edition.periodLabel}</span>
            </p>
            <p className="ssk-issue-theme">{issue.theme}</p>
            <SskAiPoster poster={issue.poster} datePublished={issue.datePublished} />
            {issue.hero ? (
              <AmieVisual visual={issue.hero} sizes="(max-width: 1100px) 100vw, 1100px" />
            ) : null}
            <nav className="ssk-toc" aria-label="Stories in this issue">
              <ol>
                {stories.map((story) => (
                  <li key={story.id}>
                    <a href={`#${story.id}`}>
                      <span aria-hidden="true">{String(story.rank).padStart(2, "0")}</span>
                      {story.headline}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </header>

        <section className="section section--tight" aria-label="Opening">
          <div className="container ssk-measure">
            {opening.map((paragraph) => (
              <RichText key={paragraph.slice(0, 40)} className="ssk-lede" text={paragraph} />
            ))}
          </div>
        </section>

        {readingList.length > 0 ? <ReadingList rows={readingList} stories={stories} /> : null}

        {stories.map((story) => (
          <div className="section section--tight" key={story.id}>
            <div className="container">
              <StorySection story={story} labels={issue.storyLabels} visualPlacement={issue.visualPlacement} />
            </div>
          </div>
        ))}

        {issue.biggerPicture ? (
        <section className="section" aria-labelledby="ssk-bigger-picture">
          <div className="container ssk-measure">
            <span className="eyebrow">Bigger picture</span>
            <h2 id="ssk-bigger-picture" className="section-title">
              {issue.biggerPicture.heading}
            </h2>
            <p className="ssk-bigger-lede">{issue.biggerPicture.lede}</p>
            <div className="ssk-bigger-grid">
              {issue.biggerPicture.sections.map((section) => (
                <article className="card" key={section.title}>
                  <h3 className="ssk-bigger-title">{section.title}</h3>
                  <p className="ssk-prose">{richText(section.body)}</p>
                </article>
              ))}
            </div>
            <p className="ssk-prose ssk-watch-next">{richText(issue.biggerPicture.watchNext)}</p>
          </div>
        </section>
        ) : null}

        <section className="section section--tight">
          <div className="container">
            <WhatWeCanBuild issue={issue} />
          </div>
        </section>

        <section className="section section--tight" aria-labelledby="ssk-sources">
          <div className="container ssk-measure">
            <h2 id="ssk-sources" className="section-title">
              Sources &amp; Verification
            </h2>
            <div className="ssk-sources">
              {stories.map((story) => (
                <details className="ssk-source" key={story.id}>
                  <summary>{story.source.heading}</summary>
                  <p>{richText(story.source.body)}</p>
                  <SourceLinks links={story.source.links} />
                </details>
              ))}
              {issue.generalSourceNote ? <p className="ssk-prose">{richText(issue.generalSourceNote)}</p> : null}
            </div>
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

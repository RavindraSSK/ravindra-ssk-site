import Link from "next/link";

import { SskAiPoster } from "@/components/ssk-ai/poster";
import { WhatWeCanBuild } from "@/components/ssk-ai/projects";
import { RichText, richText } from "@/components/ssk-ai/rich-text";
import { StorySection } from "@/components/ssk-ai/story";
import { SSK_AI_HUB, TECH_NEWS } from "@/lib/ssk-ai";
import type { SskAiIssue } from "@/lib/ssk-ai/types";

export function SskAiIssuePage({ issue }: { issue: SskAiIssue }) {
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
            <nav className="ssk-toc" aria-label="Stories in this issue">
              <ol>
                {issue.stories.map((story) => (
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
            {issue.opening.map((paragraph) => (
              <RichText key={paragraph.slice(0, 40)} className="ssk-lede" text={paragraph} />
            ))}
          </div>
        </section>

        {issue.stories.map((story) => (
          <div className="section section--tight" key={story.id}>
            <div className="container">
              <StorySection story={story} />
            </div>
          </div>
        ))}

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
            <p className="ssk-prose ssk-watch-next">{issue.biggerPicture.watchNext}</p>
          </div>
        </section>

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
              {issue.stories.map((story) => (
                <details className="ssk-source" key={story.id}>
                  <summary>{story.source.heading}</summary>
                  <p>{richText(story.source.body)}</p>
                </details>
              ))}
              <p className="ssk-prose">{issue.generalSourceNote}</p>
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

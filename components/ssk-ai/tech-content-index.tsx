import Link from "next/link";

import { SSK_AI_HUB, TECH_CONTENT, techContentTopics, type TechContentArticle } from "@/lib/ssk-ai";

/**
 * The card markup mirrors explore.css's `.blog-entry-card--visual` treatment that the
 * old hand-written explore/blog.html used, so the visual language carries over intact —
 * it is driven from `techContentArticles` now instead of being duplicated per entry.
 */
function ArticleCard({ article }: { article: TechContentArticle }) {
  const href = `${TECH_CONTENT.path}/${article.slug}`;
  const cardClass = article.featured
    ? "blog-entry-card blog-entry-card--visual card card--hover"
    : "blog-entry-card blog-entry-card--visual blog-entry-card--compact card card--hover";

  return (
    <article className={article.featured ? "blog-entry blog-entry--featured" : "blog-entry"}>
      <Link className={cardClass} href={href} aria-label={`Read ${article.title}`}>
        <div className="blog-entry-card__media">
          {/* Every other image on the site is a pre-sized, pre-converted .webp served
              as a plain <img> from the static HTML pages. Routing these five through
              next/image would add an optimizer round-trip (and its per-image cost) for
              assets that are already optimized, and would make this index the only
              inconsistent one. Dimensions are explicit, so there is no layout shift. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            loading={article.featured ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={article.featured ? "high" : undefined}
          />
          <span className="blog-entry-card__media-pill">{article.kind}</span>
        </div>
        <div className="blog-entry-card__content">
          <div className="blog-feature-card__top">
            <span className="meta-pill">{article.topic}</span>
            <span className="blog-feature-card__source">{article.meta}</span>
          </div>
          <div className="blog-entry-card__main">
            <div className="stack">
              <h2 className="card-heading">{article.cardTitle}</h2>
              <p className="card-copy">{article.cardCopy}</p>
            </div>
            <div className="blog-entry-card__facts" aria-label="Article details">
              {article.facts.map((fact) => (
                <span key={fact.label}>
                  <strong>{fact.label}</strong> {fact.value}
                </span>
              ))}
            </div>
          </div>
          {article.skills ? (
            <div className="blog-entry-card__skills" aria-label="Topics covered">
              {article.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          ) : null}
          <div className="blog-entry-card__footer">
            <div>
              <span className="blog-entry-card__label">Inside the article</span>
              <p>{article.inside}</p>
            </div>
            <span className="blog-entry-card__action">{article.action}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function TechContentIndex({ articles }: { articles: readonly TechContentArticle[] }) {
  return (
    <main id="main-content" className="page-shell ssk-page ssk-hub">
      <section className="section section--tight">
        <div className="container">
          <p className="ssk-kicker">
            <Link href={SSK_AI_HUB.path}>{SSK_AI_HUB.name}</Link>
            <span aria-hidden="true"> · </span>
            {TECH_CONTENT.name}
          </p>
          <div className="ssk-desk-head">
            <div>
              <h1 className="page-title ssk-desk-head__title">{TECH_CONTENT.tagline}</h1>
              <p className="page-copy">{TECH_CONTENT.blurb}</p>
            </div>
            <div className="card ssk-desk-head__aside">
              <span className="eyebrow">Topics</span>
              <div className="meta-row">
                {techContentTopics.map((topic) => (
                  <span className="tag" key={topic}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight content-list content-list--blog" aria-label="Articles">
        <div className="container content-grid content-grid--blog-visual">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

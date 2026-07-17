import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { StaticPage } from "@/components/static-page";
import {
  buildArticleJsonLd,
  exploreArticles,
  exploreCategories,
  getExploreArticle,
  getExploreCategory,
} from "@/lib/content";
import type { SiteContentKey } from "@/lib/site-content";

const pages = {
  blog: "blog",
  photography: "photography",
  "fitness-health": "fitness-health",
  music: "music",
  ...Object.fromEntries(exploreArticles.map((article) => [article.slug, article.slug])),
} satisfies Record<string, SiteContentKey>;

export function generateStaticParams() {
  return [
    ...exploreCategories.map(({ slug }) => ({ slug })),
    ...exploreArticles.map(({ slug }) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getExploreCategory(slug);
  if (category) {
    return {
      title: category.title,
      description: category.description,
      alternates: { canonical: `/explore/${category.slug}` },
    };
  }

  const article = getExploreArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/explore/${article.slug}` },
  };
}

export default async function ExploreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();

  const article = getExploreArticle(slug);

  return (
    <>
      {article ? <JsonLd data={buildArticleJsonLd(article)} /> : null}
      <StaticPage page={page} />
    </>
  );
}

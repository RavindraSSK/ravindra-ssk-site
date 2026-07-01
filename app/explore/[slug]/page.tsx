import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StaticPage } from "@/components/static-page";
import { blogArticles, exploreCategories, getBlogArticle, getExploreCategory } from "@/lib/content";
import type { SiteContentKey } from "@/lib/site-content";

const pages = {
  blog: "blog",
  photography: "photography",
  "fitness-health": "fitness-health",
  music: "music",
  ...Object.fromEntries(blogArticles.map((article) => [article.slug, article.slug])),
} satisfies Record<string, SiteContentKey>;

const articleMetadata = Object.fromEntries(
  blogArticles.map((article) => [
    article.slug,
    { title: article.title, description: article.description },
  ]),
) satisfies Record<string, Metadata>;

export function generateStaticParams() {
  return [
    ...exploreCategories.map(({ slug }) => ({ slug })),
    ...blogArticles.map(({ slug }) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getExploreCategory(slug);
  if (category) {
    return { title: category.title, description: category.description };
  }

  const article = getBlogArticle(slug);
  return article ? articleMetadata[article.slug] : {};
}

export default async function ExploreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();
  return <StaticPage page={page} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { StaticPage } from "@/components/static-page";
import { buildPageMetadata } from "@/lib/content";
import { buildTechContentArticleJsonLd, getTechContentArticle, techContentArticles, TECH_CONTENT } from "@/lib/ssk-ai";
import type { SiteContentKey } from "@/lib/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return techContentArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getTechContentArticle(slug);
  if (!article) return {};

  return buildPageMetadata(article, `${TECH_CONTENT.path}/${article.slug}`);
}

export default async function TechContentArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getTechContentArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd data={buildTechContentArticleJsonLd(article)} />
      <StaticPage page={article.slug as SiteContentKey} />
    </>
  );
}

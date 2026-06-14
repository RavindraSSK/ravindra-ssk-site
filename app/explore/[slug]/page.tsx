import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StaticPage } from "@/components/static-page";
import { exploreCategories, getExploreCategory } from "@/lib/content";
import type { SiteContentKey } from "@/lib/site-content";

const pages = {
  blog: "blog",
  photography: "photography",
  "fitness-health": "fitness-health",
  music: "music",
} satisfies Record<string, SiteContentKey>;

export function generateStaticParams() {
  return exploreCategories.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getExploreCategory(params.slug);
  return category ? { title: category.title, description: category.description } : {};
}

export default function ExploreDetailPage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug as keyof typeof pages];
  if (!page) notFound();
  return <StaticPage page={page} />;
}

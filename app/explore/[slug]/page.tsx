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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getExploreCategory(slug);
  return category ? { title: category.title, description: category.description } : {};
}

export default async function ExploreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();
  return <StaticPage page={page} />;
}

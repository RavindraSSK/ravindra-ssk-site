import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StaticPage } from "@/components/static-page";
import type { SiteContentKey } from "@/lib/site-content";

const pages = {
  blog: { page: "blog", title: "R · Writes", description: "Writing, notes, and essays from Ravindra on AI, research, and technology." },
  photography: { page: "photography", title: "R · Frames", description: "Photography, visual studies, and image collections from Ravindra." },
  "fitness-health": { page: "fitness-health", title: "R · Moves", description: "Fitness, health, discipline, and athletic mindset from Ravindra." },
  music: { page: "music", title: "R · Plays", description: "Music, listening habits, and playlists from Ravindra." },
} satisfies Record<string, { page: SiteContentKey; title: string; description: string }>;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = pages[params.slug as keyof typeof pages];
  return entry ? { title: entry.title, description: entry.description } : {};
}

export default function ExploreDetailPage({ params }: { params: { slug: string } }) {
  const entry = pages[params.slug as keyof typeof pages];
  if (!entry) notFound();
  return <StaticPage page={entry.page} />;
}

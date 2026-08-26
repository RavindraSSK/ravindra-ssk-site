import type { Metadata } from "next";

import { DEFAULT_SITE_URL } from "@/lib/site-url";

/**
 * Every non-home route previously spread only {title, description} into its metadata export,
 * so it inherited the root layout's openGraph/twitter objects verbatim (Next only merges metadata
 * shallowly) — every page's social share preview showed the home page's title/description/url.
 *
 * Defining openGraph/twitter here also opts the route out of Next's automatic inheritance of the
 * app/opengraph-image.tsx file-convention image (that only auto-attaches when a segment doesn't
 * define its own openGraph object), so the image is repeated explicitly below.
 */
const SHARE_IMAGE = { url: "/opengraph-image", width: 1200, height: 630 };

export function buildPageMetadata(entry: { title: string; description: string }, path: string): Metadata {
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: path },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: path,
      images: [{ ...SHARE_IMAGE, alt: entry.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [{ ...SHARE_IMAGE, alt: entry.title }],
    },
  };
}

export const pageMetadata = {
  home: {
    title: "Ravindra SSK — AI/ML Engineer | Computer Vision & LLMs",
    description:
      "ML & AI Engineer and graduate researcher building production machine learning systems across computer vision, generative AI, and LLM evaluation.",
  },
  about: {
    title: "About — AI/ML Engineer & Researcher",
    description:
      "About Ravindra SSK's ML & AI work, current research, technical interests, and professional profiles.",
  },
  explore: {
    title: "Insights",
    description:
      "Photography, fitness and health, and music from Ravindra SSK — the personal side of the site. AI writing lives in SSK AI Hub.",
  },
  portfolio: {
    title: "Portfolio & Credentials",
    description:
      "Projects, experience, education, technical skills, achievements, and certifications from Ravindra SSK.",
  },
  contact: {
    title: "Contact — AI/ML Roles & Collaboration",
    description:
      "Contact Ravindra SSK for ML & AI roles, research collaborations, internships, and interesting technical problems.",
  },
} as const;

/** Fixed lastModified dates for static routes (ISO date strings). */
export const staticPageDates = {
  home: "2026-07-17",
  about: "2026-06-01",
  portfolio: "2026-07-17",
  "ssks-home-designs": "2026-05-01",
  explore: "2026-08-20",
  contact: "2026-05-01",
  photography: "2026-04-01",
  "fitness-health": "2026-07-28",
  music: "2026-04-01",
} as const;

export const exploreCategories = [
  {
    id: "photography",
    slug: "photography",
    href: "/explore/photography",
    title: "Photography & Visual Studies",
    description:
      "Photography and visual studies — light, structure, and geometry from morning walks, roadside stops, and built environments.",
  },
  {
    id: "fitness-health",
    slug: "fitness-health",
    href: "/explore/fitness-health",
    title: "Fitness, Strength & Human Performance",
    description:
      "A visual exploration of structured strength, movement quality, recovery, handball, and NASM-informed fitness programming.",
  },
  {
    id: "music",
    slug: "music",
    href: "/explore/music",
    title: "Music, Playlists & Listening Notes",
    description:
      "Playlists, listening notes, and ongoing discovery — the rotations behind focused work, records that carry weight, and new finds.",
  },
] as const;

export type ExploreCategory = (typeof exploreCategories)[number];
export type ExploreSlug = ExploreCategory["slug"];

export function getExploreCategory(slug: string) {
  return exploreCategories.find((category) => category.slug === slug);
}

export const fitnessArticles = [
  {
    slug: "handball-my-favorite-sport",
    title: "Handball — My Favorite Sport",
    description:
      "Vel Tech captain, jersey 13, All India University South Zone 2018 — rules, the court, and what the game still teaches.",
    datePublished: "2026-06-01",
  },
  {
    slug: "weekly-training-structure",
    title: "Weekly Training Structure",
    description: "A compact weekly rhythm built around strength, mobility, and recovery for long research weeks.",
    datePublished: "2026-03-01",
  },
  {
    slug: "sport-consistency-mindset",
    title: "Sport & Consistency",
    description: "What handball and shot-put taught about discipline, feedback, and steady progress in technical work.",
    datePublished: "2026-02-01",
  },
  {
    slug: "recovery-system-design",
    title: "Recovery as System Design",
    description: "Treating sleep, fuel, and reset days as performance inputs rather than afterthoughts.",
    datePublished: "2026-01-15",
  },
] as const;

export const musicArticles = [
  {
    slug: "focused-work-playlist",
    title: "Focused Work Rotation",
    description: "Low-friction tracks for coding, reading papers, and staying inside difficult problems.",
    datePublished: "2026-04-01",
  },
  {
    slug: "records-with-weight",
    title: "Records with Weight",
    description: "Albums that carry a memory, a season, or a way of thinking that stays after the last track.",
    datePublished: "2026-03-15",
  },
  {
    slug: "listening-discovery",
    title: "Discovery Shelf",
    description: "New finds, reliable repeats, and songs that become part of the workday atmosphere.",
    datePublished: "2026-02-15",
  },
] as const;

export const exploreArticles = [...fitnessArticles, ...musicArticles] as const;

export type ExploreArticleSlug = (typeof exploreArticles)[number]["slug"];

export function getExploreArticle(slug: string) {
  return exploreArticles.find((article) => article.slug === slug);
}

export const personSchema = {
  "@type": "Person",
  "@id": `${DEFAULT_SITE_URL}/#person`,
  name: "Ravindra Siva Sai Kumar Medicharla",
  alternateName: "Ravindra SSK",
  url: DEFAULT_SITE_URL,
  jobTitle: "ML & AI Engineer · AI Trainer",
  worksFor: {
    "@type": "Organization",
    name: "Handshake AI",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Saint Louis University" },
    { "@type": "CollegeOrUniversity", name: "Vel Tech R&D Institute of Science and Technology" },
  ],
  knowsAbout: [
    "Machine Learning",
    "Computer Vision",
    "Generative AI",
    "LLM Evaluation",
    "GeoAI",
    "Healthcare AI",
  ],
  sameAs: [
    "https://github.com/RavindraSSK",
    "https://www.linkedin.com/in/ravindra-ssk-medicharla-45ba44123/",
    "https://www.researchgate.net/profile/Ravindra-Ssk-Medicharla",
  ],
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${DEFAULT_SITE_URL}/#website`,
  name: "Ravindra SSK",
  url: DEFAULT_SITE_URL,
  description: pageMetadata.home.description,
  publisher: { "@id": `${DEFAULT_SITE_URL}/#person` },
} as const;

export function buildRootJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema],
  };
}

/** Insights articles only (photography, fitness, music). SSK AI Hub builds its own. */
export function buildArticleJsonLd(article: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: { "@id": `${DEFAULT_SITE_URL}/#person` },
    mainEntityOfPage: `${DEFAULT_SITE_URL}/explore/${article.slug}`,
    url: `${DEFAULT_SITE_URL}/explore/${article.slug}`,
  };
}

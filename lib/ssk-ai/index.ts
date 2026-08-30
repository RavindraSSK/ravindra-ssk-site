import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";

import { DEFAULT_SITE_URL } from "@/lib/site-url";

import { issueAugust08_2026 } from "./issue-2026-08-08";
import { issueAugust12_2026 } from "./issue-2026-08-12";
import { issueAugust22_2026 } from "./issue-2026-08-22";
import { issueAugust29_2026 } from "./issue-2026-08-29";
import { buildMonthPlan } from "./schedule";
import type { SskAiIssue, SskAiPublication, SskAiSection } from "./types";

export type { SskAiIssue, SskAiPublication, SskAiStory, ProjectConcept, SskAiEdition } from "./types";
export { techContentArticles, techContentTopics, getTechContentArticle, getTechContentArticlesByDate } from "./tech-content";
export type { TechContentArticle } from "./tech-content";

export const SSK_AI_HUB: SskAiPublication = {
  name: "SSK AI Hub",
  tagline: "What Changed in AI & What You Can Build",
  path: "/ssk-ai",
  seoTitle: "SSK AI Hub — AI Tech Content & Weekly Tech News",
  seoDescription:
    "SSK AI Hub is an independent AI publication in two parts: Tech Content, long-form guides and research notes, and Tech News, a weekly and monthly briefing on what changed in AI and what you can build with it.",
};

export const TECH_CONTENT: SskAiSection = {
  id: "tech-content",
  name: "Tech Content",
  path: "/ssk-ai/tech-content",
  tagline: "Learn • Build • Innovate",
  blurb:
    "Long-form work that stays useful after the news cycle moves on — career guides, technical tutorials, research notes, and field notes from applied machine learning.",
  seoTitle: "Tech Content — SSK AI Hub",
  seoDescription:
    "Career guides, technical tutorials, research articles, and machine learning field notes from SSK AI Hub — independent, long-form, and written to stay useful.",
};

export const TECH_NEWS: SskAiSection = {
  id: "tech-news",
  name: "Tech News",
  path: "/ssk-ai/tech-news",
  tagline: "The week in AI, published like a newspaper",
  blurb:
    "A dated edition rather than a rolling feed. Each week's developments are gathered while the week runs and published the morning after it closes, and every month closes with a single recap.",
  seoTitle: "Tech News — Weekly AI Briefings from SSK AI Hub",
  seoDescription:
    "Weekly and monthly AI news editions from SSK AI Hub: what changed technically, why it matters, real-world applications, and what developers can build with it.",
};

export const SSK_AI_SECTIONS = [TECH_CONTENT, TECH_NEWS] as const;

/**
 * @deprecated The publication is "SSK AI Hub" now; kept as an alias so nothing that
 * still imports the old name silently resolves to undefined.
 */
export const SSK_AI = SSK_AI_HUB;

const ISSUES: readonly SskAiIssue[] = [
  issueAugust08_2026,
  issueAugust12_2026,
  issueAugust22_2026,
  issueAugust29_2026,
];

export function getAllIssues(): readonly SskAiIssue[] {
  return [...ISSUES].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export function getLatestIssue(): SskAiIssue {
  return getAllIssues()[0];
}

export function getIssueBySlug(slug: string): SskAiIssue | undefined {
  return ISSUES.find((issue) => issue.slug === slug);
}

export function getIssuePath(issue: Pick<SskAiIssue, "slug">) {
  return `${TECH_NEWS.path}/${issue.slug}`;
}

/**
 * The publishing calendar for the month the newest edition covers, with each window
 * marked published or scheduled. Derived from the archive rather than from the current
 * date, so the desk view is deterministic across builds.
 */
export function getCurrentMonthPlan() {
  const latest = getLatestIssue();
  const [year, month] = latest.edition.periodEnd.split("-").map(Number);
  return { year, month, windows: buildMonthPlan(year, month, getAllIssues()) };
}

export function getIssuesByKind(kind: SskAiIssue["edition"]["kind"]) {
  return getAllIssues().filter((issue) => issue.edition.kind === kind);
}

export function isEditorialImageAvailable(src: string) {
  const relative = src.replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}

const SHARE_SIZE = { width: 1200, height: 630 };

function shareImage(url: string, alt: string) {
  return { url, width: SHARE_SIZE.width, height: SHARE_SIZE.height, alt };
}

function collectionMetadata(entry: {
  path: string;
  seoTitle: string;
  seoDescription: string;
  imageUrl: string;
  imageAlt: string;
}): Metadata {
  const image = shareImage(entry.imageUrl, entry.imageAlt);

  return {
    title: { absolute: entry.seoTitle },
    description: entry.seoDescription,
    alternates: { canonical: entry.path },
    openGraph: {
      type: "website",
      title: entry.seoTitle,
      description: entry.seoDescription,
      url: entry.path,
      siteName: "Ravindra SSK",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.seoTitle,
      description: entry.seoDescription,
      images: [image],
    },
  };
}

export function buildSskAiLandingMetadata(): Metadata {
  return collectionMetadata({
    path: SSK_AI_HUB.path,
    seoTitle: SSK_AI_HUB.seoTitle,
    seoDescription: SSK_AI_HUB.seoDescription,
    imageUrl: `${SSK_AI_HUB.path}/opengraph-image`,
    imageAlt: `${SSK_AI_HUB.name} — ${SSK_AI_HUB.tagline}`,
  });
}

export function buildSectionMetadata(section: SskAiSection): Metadata {
  return collectionMetadata({
    path: section.path,
    seoTitle: section.seoTitle,
    seoDescription: section.seoDescription,
    // Both sections share the hub's share card; neither has artwork of its own yet.
    imageUrl: `${SSK_AI_HUB.path}/opengraph-image`,
    imageAlt: `${SSK_AI_HUB.name} — ${section.name}`,
  });
}

export function buildSskAiIssueMetadata(issue: SskAiIssue): Metadata {
  const canonical = getIssuePath(issue);
  const image = shareImage(`${canonical}/opengraph-image`, issue.cardTitle);

  return {
    title: { absolute: issue.seoTitle },
    description: issue.seoDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: issue.seoTitle,
      description: issue.seoDescription,
      url: canonical,
      siteName: "Ravindra SSK",
      publishedTime: issue.datePublished,
      authors: ["Ravindra SSK"],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: issue.seoTitle,
      description: issue.seoDescription,
      images: [image],
    },
  };
}

export function buildSskAiLandingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: SSK_AI_HUB.name,
    description: SSK_AI_HUB.seoDescription,
    url: `${DEFAULT_SITE_URL}${SSK_AI_HUB.path}`,
    isPartOf: { "@id": `${DEFAULT_SITE_URL}/#website` },
    about: SSK_AI_HUB.tagline,
    hasPart: SSK_AI_SECTIONS.map((section) => ({
      "@type": "CollectionPage",
      name: `${SSK_AI_HUB.name} — ${section.name}`,
      description: section.seoDescription,
      url: `${DEFAULT_SITE_URL}${section.path}`,
    })),
  };
}

export function buildTechNewsJsonLd() {
  const latest = getLatestIssue();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SSK_AI_HUB.name} — ${TECH_NEWS.name}`,
    description: TECH_NEWS.seoDescription,
    url: `${DEFAULT_SITE_URL}${TECH_NEWS.path}`,
    isPartOf: { "@id": `${DEFAULT_SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: getAllIssues().map((issue, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${DEFAULT_SITE_URL}${getIssuePath(issue)}`,
        name: issue.cardTitle,
      })),
    },
    hasPart: {
      "@type": "Article",
      headline: latest.title,
      url: `${DEFAULT_SITE_URL}${getIssuePath(latest)}`,
      datePublished: latest.datePublished,
    },
  };
}

export function buildTechContentJsonLd(articles: readonly { slug: string; title: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SSK_AI_HUB.name} — ${TECH_CONTENT.name}`,
    description: TECH_CONTENT.seoDescription,
    url: `${DEFAULT_SITE_URL}${TECH_CONTENT.path}`,
    isPartOf: { "@id": `${DEFAULT_SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${DEFAULT_SITE_URL}${TECH_CONTENT.path}/${article.slug}`,
        name: article.title,
      })),
    },
  };
}

export function buildTechContentArticleJsonLd(article: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
}) {
  const url = `${DEFAULT_SITE_URL}${TECH_CONTENT.path}/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: { "@id": `${DEFAULT_SITE_URL}/#person` },
    mainEntityOfPage: url,
    url,
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: `${SSK_AI_HUB.name} — ${TECH_CONTENT.name}`,
      url: `${DEFAULT_SITE_URL}${TECH_CONTENT.path}`,
    },
  };
}

export function buildSskAiArticleJsonLd(issue: SskAiIssue) {
  const url = `${DEFAULT_SITE_URL}${getIssuePath(issue)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: issue.title,
    alternativeHeadline: issue.cardTitle,
    description: issue.seoDescription,
    datePublished: issue.datePublished,
    author: { "@id": `${DEFAULT_SITE_URL}/#person` },
    mainEntityOfPage: url,
    url,
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: `${SSK_AI_HUB.name} — ${TECH_NEWS.name}`,
      url: `${DEFAULT_SITE_URL}${TECH_NEWS.path}`,
    },
    image: `${DEFAULT_SITE_URL}${getIssuePath(issue)}/opengraph-image`,
  };
}

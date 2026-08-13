import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";

import { DEFAULT_SITE_URL } from "@/lib/site-url";

import { issueAugust12_2026 } from "./issue-2026-08-12";
import type { SskAiIssue, SskAiPublication } from "./types";

export type { SskAiIssue, SskAiPublication, SskAiStory, ProjectConcept } from "./types";

export const SSK_AI: SskAiPublication = {
  name: "SSK AI",
  tagline: "What Changed in AI & What You Can Build",
  path: "/ssk-ai",
  seoTitle: "SSK AI — AI Technology Briefings & Practical Applications",
  seoDescription:
    "SSK AI explains important AI technology developments, what changed technically, why they matter, real-world applications, and what developers can build.",
};

const ISSUES: readonly SskAiIssue[] = [issueAugust12_2026];

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
  return `${SSK_AI.path}/${issue.slug}`;
}

export function isEditorialImageAvailable(src: string) {
  const relative = src.replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}

const SHARE_SIZE = { width: 1200, height: 630 };

export function buildSskAiLandingMetadata(): Metadata {
  const canonical = SSK_AI.path;
  const image = {
    url: `${SSK_AI.path}/opengraph-image`,
    width: SHARE_SIZE.width,
    height: SHARE_SIZE.height,
    alt: `${SSK_AI.name} — ${SSK_AI.tagline}`,
  };

  return {
    title: { absolute: SSK_AI.seoTitle },
    description: SSK_AI.seoDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: SSK_AI.seoTitle,
      description: SSK_AI.seoDescription,
      url: canonical,
      siteName: "Ravindra SSK",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: SSK_AI.seoTitle,
      description: SSK_AI.seoDescription,
      images: [image],
    },
  };
}

export function buildSskAiIssueMetadata(issue: SskAiIssue): Metadata {
  const canonical = getIssuePath(issue);
  const image = {
    url: `${canonical}/opengraph-image`,
    width: SHARE_SIZE.width,
    height: SHARE_SIZE.height,
    alt: issue.cardTitle,
  };

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
  const latest = getLatestIssue();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: SSK_AI.name,
    description: SSK_AI.seoDescription,
    url: `${DEFAULT_SITE_URL}${SSK_AI.path}`,
    isPartOf: { "@id": `${DEFAULT_SITE_URL}/#website` },
    about: SSK_AI.tagline,
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
      name: SSK_AI.name,
      url: `${DEFAULT_SITE_URL}${SSK_AI.path}`,
    },
    image: `${DEFAULT_SITE_URL}${getIssuePath(issue)}/opengraph-image`,
  };
}

import type { MetadataRoute } from "next";

import { exploreArticles, exploreCategories, staticPageDates } from "@/lib/content";
import { DEFAULT_SITE_URL } from "@/lib/site-url";

function toDate(iso: string) {
  return new Date(`${iso}T12:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = DEFAULT_SITE_URL;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: toDate(staticPageDates.home), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: toDate(staticPageDates.about), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio`, lastModified: toDate(staticPageDates.portfolio), changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteUrl}/portfolio/ssks-home-designs`,
      lastModified: toDate(staticPageDates["ssks-home-designs"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${siteUrl}/explore`, lastModified: toDate(staticPageDates.explore), changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: toDate(staticPageDates.contact), changeFrequency: "yearly", priority: 0.5 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = exploreCategories.map((category) => ({
    url: `${siteUrl}/explore/${category.slug}`,
    lastModified: toDate(staticPageDates[category.slug as keyof typeof staticPageDates] ?? staticPageDates.explore),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = exploreArticles.map((article) => ({
    url: `${siteUrl}/explore/${article.slug}`,
    lastModified: toDate(article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}

import type { MetadataRoute } from "next";

import { exploreArticles, exploreCategories } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio/meditrust`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/portfolio/campus-objects`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/portfolio/snaptune`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/ssks-home-designs`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/explore`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = exploreCategories.map((category) => ({
    url: `${siteUrl}/explore/${category.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = exploreArticles.map((article) => ({
    url: `${siteUrl}/explore/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}

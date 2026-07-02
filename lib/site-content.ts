import fs from "node:fs";
import path from "node:path";

import { exploreArticles } from "@/lib/content";

const routeFiles = {
  home: "index.html",
  about: "about.html",
  portfolio: "portfolio.html",
  contact: "contact.html",
  explore: "explore.html",
  blog: path.join("explore", "blog.html"),
  photography: path.join("explore", "photography.html"),
  "fitness-health": path.join("explore", "fitness-health.html"),
  music: path.join("explore", "music.html"),
  ...Object.fromEntries(
    exploreArticles.map((article) => [article.slug, path.join("explore", `${article.slug}.html`)]),
  ),
} as const;

export type SiteContentKey = keyof typeof routeFiles;

function normalizeLinks(html: string) {
  return html
    .replaceAll('href="index.html"', 'href="/"')
    .replaceAll('href="portfolio.html', 'href="/portfolio')
    .replaceAll('href="about.html"', 'href="/about"')
    .replaceAll('href="contact.html"', 'href="/contact"')
    .replaceAll('href="explore.html"', 'href="/explore"')
    .replaceAll('href="explore/blog.html"', 'href="/explore/blog"')
    .replaceAll('href="explore/photography.html"', 'href="/explore/photography"')
    .replaceAll('href="explore/fitness-health.html"', 'href="/explore/fitness-health"')
    .replaceAll('href="explore/music.html"', 'href="/explore/music"')
    .replaceAll('href="../index.html"', 'href="/"')
    .replaceAll('href="../portfolio.html', 'href="/portfolio')
    .replaceAll('href="../about.html"', 'href="/about"')
    .replaceAll('href="../contact.html"', 'href="/contact"')
    .replaceAll('href="../explore.html"', 'href="/explore"')
    .replaceAll('href="../explore/blog.html"', 'href="/explore/blog"')
    .replaceAll('href="../explore/fitness-health.html"', 'href="/explore/fitness-health"')
    .replaceAll('href="../explore/music.html"', 'href="/explore/music"')
    .replaceAll(
      /href="(?:\.\.\/)?explore\/([a-z0-9-]+)\.html"/g,
      'href="/explore/$1"',
    )
    .replaceAll('src="images/', 'src="/images/');
}

export function getPageContent(key: SiteContentKey) {
  const file = path.join(/* turbopackIgnore: true */ process.cwd(), routeFiles[key]);
  const source = fs.readFileSync(file, "utf8");
  const match = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);

  if (!match) {
    throw new Error(`Could not find page content in ${routeFiles[key]}`);
  }

  return normalizeLinks(match[1]);
}

/**
 * Tech Content — the long-form half of SSK AI Hub.
 *
 * These articles used to live under /explore (the "SSK AI Hub™" card on Insights) and
 * were listed by a hand-written explore/blog.html. The card metadata that page carried
 * inline (media, pills, facts, skills, "inside the article") is data now, so the index
 * can be rendered from one source instead of being kept in sync by hand.
 *
 * The article bodies themselves are still static HTML, in ssk-ai/tech-content/*.html.
 */

export type TechContentArticle = {
  slug: string;
  /** Long title used on the article page and in metadata. */
  title: string;
  /** Shorter title for the index card, when the full one is unwieldy. */
  cardTitle: string;
  description: string;
  /** Index-card summary. Longer and more concrete than the SEO description. */
  cardCopy: string;
  datePublished: string;
  /** Editorial category shown on the card media. */
  kind: string;
  /** Small pill above the card title. */
  topic: string;
  /** Right-hand meta on the card: date, reading time, or both. */
  meta: string;
  image: { src: string; alt: string; width: number; height: number };
  facts: { label: string; value: string }[];
  skills?: string[];
  inside: string;
  action: string;
  featured?: boolean;
};

export const techContentArticles: readonly TechContentArticle[] = [
  {
    slug: "us-ai-job-market-guide",
    title: "The U.S. AI Job Market: A Complete Career Guide",
    cardTitle: "The U.S. AI Job Market: A Complete Career Guide",
    description:
      "Roles, salaries, in-demand skills, and the gap between what universities teach and what employers actually hire for in the U.S. AI job market.",
    cardCopy:
      "Roles, salaries, in-demand skills, and the gap between what universities teach and what employers actually hire for — with data from BLS, Indeed, Levels.fyi, and more.",
    datePublished: "2026-07-09",
    kind: "Career guide",
    topic: "SSK AI Hub™",
    meta: "Jul 2026 · 15 min",
    image: {
      src: "/images/blog/us-ai-job-market.webp",
      alt: "U.S. AI job market career guide cover",
      width: 1280,
      height: 720,
    },
    facts: [
      { label: "Type", value: "Career guide" },
      { label: "Focus", value: "Roles, pay, skills" },
      { label: "PDF", value: "Downloadable" },
    ],
    skills: ["AI Engineer", "MLOps", "Salaries", "FDE", "RAG", "Hiring"],
    inside: "Market state, career paths, salary bands, skill gap, hiring channels, and a stage-based roadmap.",
    action: "Read full guide",
    featured: true,
  },
  {
    slug: "web-scraping-python",
    title: "Decoding the Web: A Practical Guide to Web Scraping with Python",
    cardTitle: "Decoding the Web: A Practical Guide to Web Scraping with Python",
    description:
      "A practical Python web scraping guide covering requests, BeautifulSoup, pandas, output structure, and responsible scraping.",
    cardCopy:
      "A professional walkthrough for collecting public web data, parsing page structure, extracting useful fields, and exporting results into a clean dataset.",
    datePublished: "2025-02-01",
    kind: "Technical guide",
    topic: "Python",
    meta: "Feb 2025",
    image: {
      src: "/images/blog/web-scraping-python.webp",
      alt: "Decoding the Web: web scraping with Python article cover",
      width: 1280,
      height: 720,
    },
    facts: [
      { label: "Type", value: "Practical tutorial" },
      { label: "Level", value: "Beginner friendly" },
      { label: "Output", value: "CSV dataset" },
    ],
    skills: ["Python", "requests", "BeautifulSoup", "pandas", "HTML parsing"],
    inside: "Tools, scraper structure, code explanation, output example, and reliability notes.",
    action: "Read full guide",
  },
  {
    slug: "spatial-context-geoai",
    title: "Why spatial context changes model design",
    cardTitle: "Why spatial context changes model design",
    description: "Why geospatial data demands different model design choices than standard computer vision benchmarks.",
    cardCopy:
      "Geospatial data is never just another image benchmark. Location, scale, sensor timing, and terrain change how a model should be trained, evaluated, and explained.",
    datePublished: "2025-11-01",
    kind: "Research note",
    topic: "GeoAI",
    meta: "4 min read",
    image: {
      src: "/images/blog/spatial-context-geoai.webp",
      alt: "Why spatial context changes model design article cover",
      width: 1280,
      height: 720,
    },
    facts: [
      { label: "Type", value: "Research note" },
      { label: "Topics", value: "GeoAI, remote sensing" },
    ],
    inside: "Benchmark traps, spatial splits, augmentation, and production evaluation.",
    action: "Read article",
  },
  {
    slug: "grad-cam-flood-detection",
    title: "Grad-CAM for interpretable flood detection",
    cardTitle: "Grad-CAM for interpretable flood detection",
    description:
      "Using Grad-CAM activation maps to inspect attention U-Net decisions on SAR imagery for interpretable flood detection.",
    cardCopy:
      "A working note on using activation maps to inspect attention U-Net decisions on SAR imagery, especially where false positives carry operational cost.",
    datePublished: "2025-11-15",
    kind: "Model note",
    topic: "Explainability",
    meta: "5 min read",
    image: {
      src: "/images/blog/grad-cam-flood-detection.webp",
      alt: "Grad-CAM for interpretable flood detection article cover",
      width: 1280,
      height: 720,
    },
    facts: [
      { label: "Type", value: "Explainability" },
      { label: "Topics", value: "SAR, Attention U-Net" },
    ],
    inside: "Pipeline placement, failure patterns, and operational review habits.",
    action: "Read article",
  },
  {
    slug: "civil-engineering-to-geoai",
    title: "From civil engineering to GeoAI",
    cardTitle: "From civil engineering to GeoAI",
    description:
      "How infrastructure thinking and civil engineering background inform GeoAI research and applied machine learning work.",
    cardCopy:
      "Infrastructure thinking trained me to care about context, constraints, and physical systems. GeoAI adds machine perception to that same way of reading the world.",
    datePublished: "2025-10-01",
    kind: "Field note",
    topic: "Career path",
    meta: "3 min read",
    image: {
      src: "/images/blog/civil-engineering-to-geoai.webp",
      alt: "From civil engineering to GeoAI article cover",
      width: 1280,
      height: 720,
    },
    facts: [
      { label: "Type", value: "Personal path" },
      { label: "Topics", value: "BIM-GIS, career" },
    ],
    inside: "Skills that transferred, what had to be rebuilt, and current research focus.",
    action: "Read article",
  },
] as const;

export type TechContentSlug = (typeof techContentArticles)[number]["slug"];

export function getTechContentArticle(slug: string) {
  return techContentArticles.find((article) => article.slug === slug);
}

/** Newest first, for the index. The literal order above is editorial, not chronological. */
export function getTechContentArticlesByDate(): readonly TechContentArticle[] {
  return [...techContentArticles].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

/** The topics rail on the Tech Content index. */
export const techContentTopics = [
  "Career Guides",
  "Technical Tutorials",
  "Research Articles",
  "Machine Learning",
  "Generative AI",
  "Industry Insights",
] as const;

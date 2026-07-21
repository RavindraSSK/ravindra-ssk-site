import { DEFAULT_SITE_URL } from "@/lib/site-url";

export const pageMetadata = {
  home: {
    title: "Ravindra SSK | ML & AI Engineer",
    description:
      "Ravindra SSK is an ML & AI Engineer and graduate researcher building and evaluating production machine learning systems across computer vision, generative AI, healthcare AI, and LLM evaluation.",
  },
  about: {
    title: "About",
    description:
      "About Ravindra SSK's ML & AI work, current research, technical interests, and professional profiles.",
  },
  explore: {
    title: "Insights",
    description:
      "SSK AI Hub™ publications, career guides, research notes, photography, fitness, and music from Ravindra SSK.",
  },
  portfolio: {
    title: "Portfolio & Credentials",
    description:
      "Projects, experience, education, technical skills, achievements, and certifications from Ravindra SSK.",
  },
  contact: {
    title: "Contact",
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
  explore: "2026-07-09",
  contact: "2026-05-01",
  blog: "2026-07-09",
  photography: "2026-04-01",
  "fitness-health": "2026-06-01",
  music: "2026-04-01",
} as const;

export const exploreCategories = [
  {
    id: "blog",
    slug: "blog",
    href: "/explore/blog",
    title: "SSK AI Hub™",
    description:
      "Independent AI publications — career guides, technical tutorials, research articles, and industry insights.",
  },
  {
    id: "photography",
    slug: "photography",
    href: "/explore/photography",
    title: "Photography",
    description: "Photography, visual studies, and image collections from Ravindra.",
  },
  {
    id: "fitness-health",
    slug: "fitness-health",
    href: "/explore/fitness-health",
    title: "Fitness & Health",
    description: "Training, recovery, routines, and sustainable health practices.",
  },
  {
    id: "music",
    slug: "music",
    href: "/explore/music",
    title: "Music",
    description: "Playlists, listening notes, and ongoing music discovery.",
  },
] as const;

export type ExploreCategory = (typeof exploreCategories)[number];
export type ExploreSlug = ExploreCategory["slug"];

export function getExploreCategory(slug: string) {
  return exploreCategories.find((category) => category.slug === slug);
}

export const blogArticles = [
  {
    slug: "us-ai-job-market-guide",
    title: "The U.S. AI Job Market: A Complete Career Guide",
    description:
      "Roles, salaries, in-demand skills, and the gap between what universities teach and what employers actually hire for in the U.S. AI job market.",
    datePublished: "2026-07-09",
  },
  {
    slug: "web-scraping-python",
    title: "Decoding the Web",
    description:
      "A practical Python web scraping guide covering requests, BeautifulSoup, pandas, output structure, and responsible scraping.",
    datePublished: "2025-02-01",
  },
  {
    slug: "spatial-context-geoai",
    title: "Spatial Context & Model Design",
    description: "Why geospatial data demands different model design choices than standard computer vision benchmarks.",
    datePublished: "2025-11-01",
  },
  {
    slug: "grad-cam-flood-detection",
    title: "Grad-CAM for Flood Detection",
    description:
      "Using Grad-CAM activation maps to inspect attention U-Net decisions on SAR imagery for interpretable flood detection.",
    datePublished: "2025-11-15",
  },
  {
    slug: "civil-engineering-to-geoai",
    title: "From Civil Engineering to GeoAI",
    description:
      "How infrastructure thinking and civil engineering background inform GeoAI research and applied machine learning work.",
    datePublished: "2025-10-01",
  },
] as const;

export const fitnessArticles = [
  {
    slug: "handball-my-favorite-sport",
    title: "Handball — My Favorite Sport",
    description:
      "The complete handball page — rules, the court, why the game matters, my journey, and handball in motion.",
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

export const exploreArticles = [...blogArticles, ...fitnessArticles, ...musicArticles] as const;

export type ExploreArticleSlug = (typeof exploreArticles)[number]["slug"];

export function getExploreArticle(slug: string) {
  return exploreArticles.find((article) => article.slug === slug);
}

/** @deprecated Use getExploreArticle */
export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
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

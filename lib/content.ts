export const pageMetadata = {
  home: {
    title: "Ravindra | AI Researcher & Machine Learning Engineer",
    description:
      "Ravindra is an AI researcher and machine learning engineer building practical systems across machine learning, deep learning, explainability, and applied AI.",
  },
  about: {
    title: "About",
    description:
      "About Ravindra's current AI research, technical interests, and professional profiles.",
  },
  explore: {
    title: "Explore",
    description: "Writing, photography, fitness and health, and music from Ravindra.",
  },
  portfolio: {
    title: "Portfolio & Credentials",
    description: "Projects, experience, education, technical skills, and certifications from Ravindra.",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Ravindra for research collaborations, internships, and interesting technical problems.",
  },
} as const;

export const exploreCategories = [
  {
    id: "blog",
    slug: "blog",
    href: "/explore/blog",
    title: "Blog",
    description: "Writing, notes, and essays from Ravindra on AI, research, and technology.",
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
    slug: "web-scraping-python",
    title: "Decoding the Web",
    description:
      "A practical Python web scraping guide covering requests, BeautifulSoup, pandas, output structure, and responsible scraping.",
  },
  {
    slug: "spatial-context-geoai",
    title: "Spatial Context & Model Design",
    description: "Why geospatial data demands different model design choices than standard computer vision benchmarks.",
  },
  {
    slug: "grad-cam-flood-detection",
    title: "Grad-CAM for Flood Detection",
    description:
      "Using Grad-CAM activation maps to inspect attention U-Net decisions on SAR imagery for interpretable flood detection.",
  },
  {
    slug: "civil-engineering-to-geoai",
    title: "From Civil Engineering to GeoAI",
    description:
      "How infrastructure thinking and civil engineering background inform GeoAI research and applied machine learning work.",
  },
] as const;

export type BlogArticleSlug = (typeof blogArticles)[number]["slug"];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

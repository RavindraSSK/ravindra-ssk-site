export const navigation = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const pageMetadata = {
  about: {
    title: "About",
    description:
      "About Ravindra's current AI research, technical interests, and professional profiles.",
  },
  explore: {
    title: "Explore",
    description: "Writing, photography, fitness and health, and music from Ravindra.",
  },
} as const;

export const featuredProjects = [
  {
    title: "Terrain Intelligence Studio",
    category: "GeoAI Platform",
    description:
      "A map-led workspace for evaluating spatial models, scenario outputs, and geospatial decision layers.",
    role: "Product design, full-stack ML, interface systems",
    stack: ["Next.js", "Python", "PostGIS", "PyTorch"],
    links: [
      { label: "Request walkthrough", href: "/contact" },
      { label: "Project notes", href: "/explore/blog" },
    ],
  },
  {
    title: "Vision Operations Console",
    category: "Computer Vision",
    description:
      "A calm operational layer for reviewing detections, model drift, and annotation quality across pipelines.",
    role: "Applied ML, product architecture, front-end systems",
    stack: ["TypeScript", "FastAPI", "OpenCV", "Docker"],
    links: [
      { label: "Discuss build", href: "/contact" },
      { label: "View portfolio", href: "/portfolio#projects" },
    ],
  },
  {
    title: "Research Interface Kit",
    category: "Design Systems",
    description:
      "Reusable patterns for turning experimental workflows into polished interfaces with clear states and readable structure.",
    role: "Design systems, prototyping, UX engineering",
    stack: ["Framer Motion", "Tailwind CSS", "Figma"],
    links: [
      { label: "See details", href: "/portfolio#projects" },
      { label: "About Ravi", href: "/about" },
    ],
  },
] as const;

export const professionalSnapshot = [
  {
    title: "Current Work",
    description:
      "Building product-ready AI experiences that connect research depth with practical usability.",
  },
  {
    title: "Domain Focus",
    description:
      "GeoAI, computer vision, multimodal systems, and disciplined interface design for technical products.",
  },
  {
    title: "Core Strengths",
    description:
      "Applied machine learning, front-end architecture, full-stack prototyping, and system clarity.",
  },
] as const;

export const currentFocus = [
  "Spatially aware AI products",
  "Readable ML interface systems",
  "Reliable full-stack experimentation",
] as const;

export const experience = [
  {
    period: "Current",
    title: "AI Systems & Product Interfaces",
    organization: "Independent + collaborative work",
    description:
      "Designing research workflows and production-ready experiences that make technical systems easier to use and trust.",
    highlights: ["Applied ML products", "Interface architecture", "Rapid validation"],
  },
  {
    period: "Recent",
    title: "GeoAI & Vision Exploration",
    organization: "Research and prototype development",
    description:
      "Exploring how geospatial reasoning, vision pipelines, and thoughtful UX can support field-ready decision tools.",
    highlights: ["GeoAI workflows", "Data tooling", "Model evaluation"],
  },
  {
    period: "Ongoing",
    title: "Full-Stack Build Practice",
    organization: "Web, ML, and developer systems",
    description:
      "Shipping compact, polished systems with attention to architecture, responsiveness, and maintainable front-end foundations.",
    highlights: ["Next.js", "Python services", "Deployment systems"],
  },
] as const;

export const education = [
  {
    title: "Education",
    institution: "Add final degree details here",
    detail:
      "This base version reserves space for formal education, research programs, or academic distinctions.",
  },
  {
    title: "Continuing Practice",
    institution: "Self-directed technical study",
    detail:
      "Applied learning across machine learning, mapping systems, product design, and modern web engineering.",
  },
] as const;

export const skillGroups = [
  {
    title: "Machine Learning",
    items: ["Model prototyping", "Evaluation workflows", "MLOps foundations"],
  },
  {
    title: "Computer Vision / GeoAI",
    items: ["Spatial reasoning", "Remote sensing", "Vision pipelines"],
  },
  {
    title: "Full Stack",
    items: ["Next.js App Router", "TypeScript", "Python APIs"],
  },
  {
    title: "Cloud / Tools",
    items: ["Docker", "PostgreSQL", "GitHub", "Vercel"],
  },
] as const;

export const certifications = [
  "Certification space reserved for cloud, ML, and geospatial credentials.",
] as const;

export const exploreCategories = [
  {
    id: "blog",
    slug: "blog",
    href: "/explore/blog",
    title: "Blog",
    description: "Writing, project notes, and short technical essays.",
    detail:
      "Research notes, project updates, and concise technical writing.",
    heroTitle: "Writing, notes, and technical essays.",
    heroDescription:
      "Research ideas, project notes, and practical technical writing.",
    collectionTitle: "Article placeholders",
    collectionDescription:
      "A starter structure for essays, notes, and small writing series.",
    tags: ["Research notes", "Build logs", "Short essays"],
    items: [
      {
        label: "Essay",
        title: "Interface Notes",
        description: "Short placeholder for product thinking and system clarity.",
      },
      {
        label: "Journal",
        title: "Field Observations",
        description: "Reserved for compact research notes and working reflections.",
      },
      {
        label: "Draft",
        title: "Project Fragments",
        description: "A holding space for half-finished ideas and build updates.",
      },
    ],
    sideSections: [
      {
        title: "Formats",
        items: ["Essays", "Notes", "Project logs"],
      },
      {
        title: "Status",
        items: ["Publishing structure ready", "Content coming soon"],
      },
    ],
  },
  {
    id: "photography",
    slug: "photography",
    href: "/explore/photography",
    title: "Photography",
    description: "Selected photographs, visual studies, and image collections.",
    detail:
      "Galleries, image stories, and ongoing photography projects.",
    heroTitle: "Photography and visual studies.",
    heroDescription:
      "Selected images, photo essays, and ongoing visual work.",
    collectionTitle: "Gallery placeholders",
    collectionDescription:
      "A starter grid for series, studies, and future image-led stories.",
    tags: ["Street", "Landscape", "Study"],
    items: [
      {
        label: "Series",
        title: "Morning Light",
        description: "Placeholder for a short visual study with room for captions later.",
      },
      {
        label: "Gallery",
        title: "Urban Frames",
        description: "Reserved for a compact city set and image-led storytelling.",
      },
      {
        label: "Archive",
        title: "Quiet Observations",
        description: "A simple structure for selected images and categorized collections.",
      },
      {
        label: "Study",
        title: "Color and Shape",
        description: "A place for experiments in composition, rhythm, and contrast.",
      },
    ],
    sideSections: [
      {
        title: "Categories",
        items: ["Street", "Travel", "Studies"],
      },
      {
        title: "Format",
        items: ["Gallery grid", "Series page", "Image story"],
      },
    ],
  },
  {
    id: "fitness-health",
    slug: "fitness-health",
    href: "/explore/fitness-health",
    title: "Fitness & Health",
    description: "Training, recovery, routines, and sustainable health practices.",
    detail:
      "Training routines, recovery notes, and practical health habits.",
    heroTitle: "Fitness, recovery, and health practices.",
    heroDescription:
      "Routines, notes, and lessons from consistent training.",
    collectionTitle: "Routine placeholders",
    collectionDescription:
      "A starter layout for routines, notes, and small health-focused posts.",
    tags: ["Routines", "Recovery", "Consistency"],
    items: [
      {
        label: "Routine",
        title: "Weekly Split",
        description: "Placeholder for a compact training plan or routine overview.",
      },
      {
        label: "Note",
        title: "Recovery Systems",
        description: "A simple card slot for sleep, mobility, and recovery insights.",
      },
      {
        label: "Log",
        title: "Consistency Markers",
        description: "Reserved for tracking notes and quiet performance habits.",
      },
    ],
    sideSections: [
      {
        title: "Topics",
        items: ["Training", "Recovery", "Nutrition"],
      },
      {
        title: "Intent",
        items: ["Calm guidance", "Practical structure"],
      },
    ],
  },
  {
    id: "music",
    slug: "music",
    href: "/explore/music",
    title: "Music",
    description: "Playlists, listening notes, and ongoing music discovery.",
    detail:
      "Structured for playlists, album notes, and personal listening archives over time.",
    heroTitle: "Music, playlists, and listening notes.",
    heroDescription:
      "Playlists, album notes, and a personal listening archive.",
    collectionTitle: "Listening placeholders",
    collectionDescription:
      "A starter system for playlists, recommendations, and album notes.",
    tags: ["Playlists", "Albums", "Discovery"],
    items: [
      {
        label: "Playlist",
        title: "Current Rotation",
        description: "Placeholder for recent favorites and small listening sets.",
      },
      {
        label: "Album Note",
        title: "Late-Night Records",
        description: "Reserved for brief album notes and discovery highlights.",
      },
      {
        label: "Archive",
        title: "Listening Journal",
        description: "A clean home for ongoing curation and personal music taste.",
      },
    ],
    sideSections: [
      {
        title: "Browse",
        items: ["Playlists", "Albums", "Journal"],
      },
      {
        title: "Status",
        items: ["Structure ready", "Content coming soon"],
      },
    ],
  },
] as const;

export type ExploreCategory = (typeof exploreCategories)[number];
export type ExploreSlug = ExploreCategory["slug"];

export const profileLinks = [
  {
    label: "LinkedIn",
    description: "Professional updates and selected experience.",
    href: "https://www.linkedin.com/in/ravi-medicharla",
  },
  {
    label: "GitHub",
    description: "Code, prototypes, and ongoing build work.",
    href: "https://github.com/ravi-medicharla",
  },
  {
    label: "Instagram",
    description: "Photography and lighter personal moments.",
    href: "https://www.instagram.com/ravi-medicharla",
  },
  {
    label: "Email",
    description: "Direct conversations, collaborations, and inquiries.",
    href: "mailto:hello@ravimedicharla.com",
  },
] as const;

export const navigationMenus = {
  "/portfolio": {
    eyebrow: "Credentials & Proof",
    title: "Professional work and the evidence behind it.",
    description:
      "Projects, experience, education, skills, and certifications in one clear professional record.",
    featured: { label: "Open portfolio", href: "/portfolio" },
    groups: [
      {
        title: "Browse",
        links: [
          {
            label: "Projects",
            href: "/portfolio#projects",
            description: "Flagship builds and selected interface systems.",
          },
          {
            label: "Experience",
            href: "/portfolio#experience",
            description: "Recent direction, applied work, and current focus.",
          },
        ],
      },
      {
        title: "Reference",
        links: [
          {
            label: "Education",
            href: "/portfolio#education",
            description: "Academic context and continuing study.",
          },
          {
            label: "Skills",
            href: "/portfolio#skills",
            description: "Grouped technical strengths and tools.",
          },
        ],
      },
    ],
  },
  "/explore": {
    eyebrow: "Explore",
    title: "Interests and ongoing work.",
    description:
      "Writing, photography, fitness and health, and music.",
    featured: { label: "Open explore hub", href: "/explore" },
    groups: [
      {
        title: "Categories",
        links: [
          {
            label: "Blog",
            href: "/explore/blog",
            description: "Writing, notes, and short technical essays.",
          },
          {
            label: "Photography",
            href: "/explore/photography",
            description: "Image-led work, studies, and documentation.",
          },
        ],
      },
      {
        title: "More",
        links: [
          {
            label: "Fitness & Health",
            href: "/explore/fitness-health",
            description: "Training rhythm, routines, and healthy systems.",
          },
          {
            label: "Music",
            href: "/explore/music",
            description: "Playlists, listening notes, and discovery.",
          },
        ],
      },
    ],
  },
  "/about": {
    eyebrow: "About",
    title: "Research interests and current work.",
    description:
      "A short introduction, current role, research interests, and profile links.",
    featured: { label: "View about page", href: "/about" },
    groups: [
      {
        title: "Overview",
        links: [
          {
            label: "Overview",
            href: "/about",
            description: "Short introduction and working style.",
          },
          {
            label: "Research interests",
            href: "/about#research-interests",
            description: "Current work across GeoAI, vision, and spatial systems.",
          },
        ],
      },
      {
        title: "Connections",
        links: [
          {
            label: "Profiles",
            href: "/about#profiles",
            description: "LinkedIn, GitHub, Instagram, and email.",
          },
          {
            label: "Contact",
            href: "/contact",
            description: "Start a direct conversation or inquiry.",
          },
        ],
      },
    ],
  },
} as const;

export function getExploreCategory(slug: string) {
  return exploreCategories.find((category) => category.slug === slug);
}

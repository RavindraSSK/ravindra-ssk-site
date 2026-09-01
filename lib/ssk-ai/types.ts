import type { EditionKind } from "./schedule";

export type ApplicationKind = "demonstrated" | "potential";

export type StoryApplication = {
  text: string;
  kind: ApplicationKind;
  attribution?: string;
};

export type BeforeChangeResult = {
  before: string;
  change: string;
  result: string;
};

export type CodedDiagramId =
  | "qwen-moe"
  | "mai-thinking"
  | "nvidia-switchyard"
  | "openai-daybreak"
  | "tiered-ops"
  | "weathernext-ensemble"
  | "agent-plugins"
  | "policy-gate"
  | "spade-loop"
  | "biomarker-agents"
  | "agentic-search"
  | "mhs-bridge";

export type StoryVisual =
  | {
      kind: "coded-diagram";
      diagram: CodedDiagramId;
      caption: string;
    }
  | {
      kind: "editorial-image";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption: string;
      description: string;
    };

export type StorySource = {
  heading: string;
  body: string;
  /** Official/primary URLs for the story, rendered as links under the attribution. */
  links?: { label: string; href: string }[];
};

export type EditorialImageVisual = Extract<StoryVisual, { kind: "editorial-image" }>;

export type SskAiStory = {
  rank: number;
  id: string;
  /**
   * ISO date the story's event happened, which is what the newsroom calendar indexes
   * days by. It is not a new editorial claim: every story already states its own date
   * in `whatHappened` ("On August 11, 2026, NVIDIA announced..."), and this field
   * carries that same date in machine-readable form. Where a story spans days, use the
   * date of the development it leads with.
   */
  date: string;
  headline: string;
  posterHeadline: string;
  status: string;
  type: string;
  buildability: string;
  buildabilityNote?: string;
  audienceTags: string[];
  whatHappened: string[];
  whatsActuallyNew: string[];
  whyItMatters: string;
  applications: StoryApplication[];
  realWorldExample: string;
  developerTakeaway: string;
  beforeChangeResult: BeforeChangeResult;
  visual: StoryVisual;
  source: StorySource;
};

export type ProjectConcept = {
  slug: string;
  name: string;
  summary: string;
  featured: boolean;
  problem: string;
  fromThisIssue: string;
  howItWorks: string;
  who: string;
  whyUseful: string;
  difficulty: string;
};

export type FeaturedPipelineStage = {
  id: string;
  label: string;
  body: string;
};

export type SskAiIssuePoster = {
  brand: string;
  title: string;
  dateLabel: string;
  headlines: string[];
  theme: string;
};

/** One development card in a monthly capsule — deliberately lighter than a weekly story. */
export type MonthlyDevelopment = {
  name: string;
  whatHappened: string;
  whyItMatters: string;
  /** One plain-English sentence understandable without an AI background. */
  inSimpleWords: string;
  /** Deep link into the weekly edition that carries the full analysis. */
  read: { label: string; href: string };
};

/**
 * The month-in-review page content. A monthly edition is a visual, plain-language
 * recap of the month's weekly editions — the weeklies stay the technical record,
 * and every claim here must trace back to one of them.
 */
export type MonthlyCapsule = {
  /** Short intro paragraphs, plain language. */
  intro: string[];
  atAGlance: { value: string; label: string }[];
  /** The one-page visual snapshot of the developments; decorative, content lives in HTML. */
  capsule?: EditorialImageVisual;
  developments: MonthlyDevelopment[];
  bigPicture: { thesis: string; body: string };
  watchlist: { theme: string; note: string }[];
};

/** Where an edition sits in the Tech News publishing calendar. */
export type SskAiEdition = {
  kind: EditionKind;
  /** Sequential number within its kind — weekly No. 1, No. 2, ... */
  number: number;
  volume: number;
  /** Inclusive ISO dates of the coverage window this edition reports on. */
  periodStart: string;
  periodEnd: string;
  /** Masthead-ready label for the window, e.g. "August 6–12, 2026". */
  periodLabel: string;
};

export type SskAiIssue = {
  slug: string;
  edition: SskAiEdition;
  datePublished: string;
  dateLabel: string;
  cardTitle: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  theme: string;
  /** Optional editorial hero image for the edition, shown under the masthead poster. */
  hero?: EditorialImageVisual;
  /**
   * Present on monthly editions only: the month-in-review capsule content. When set,
   * the edition renders as the visual monthly recap instead of the weekly layout,
   * and the weekly-deep fields below are not used.
   */
  monthly?: MonthlyCapsule;
  opening?: string[];
  stories?: SskAiStory[];
  biggerPicture?: {
    heading: string;
    lede: string;
    sections: { title: string; body: string }[];
    watchNext: string;
  };
  projectsIntro?: string;
  projects?: ProjectConcept[];
  featuredProject?: {
    name: string;
    caption: string;
    /** Coded diagram drawn beside the featured project; defaults to "tiered-ops". */
    diagram?: CodedDiagramId;
    stages: FeaturedPipelineStage[];
  };
  poster: SskAiIssuePoster;
  linkedInPost?: string;
  generalSourceNote?: string;
};

export type SskAiPublication = {
  name: string;
  tagline: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
};

/** One of the hub's two folders: Tech Content or Tech News. */
export type SskAiSection = {
  id: "tech-content" | "tech-news";
  name: string;
  path: string;
  tagline: string;
  blurb: string;
  seoTitle: string;
  seoDescription: string;
};

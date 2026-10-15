import type { SskAiIssue, SskAiStory } from "./types";

/**
 * Editorial source: the SSK AI Hub October 8–14, 2026 handoff package
 * (01-website-article.md, qualified against 02-source-notes.md). A deliberately
 * short edition: each story carries only the update, a proposed example and a short
 * take, so the optional analysis, applications and before/change/result blocks are
 * left out. Coverage is October 8–14 inclusive; the edition is dated October 15 and
 * was deployed after midnight that day in America/Chicago.
 */

const IMG = "/ssk-ai/2026-10-15";
const ILLUSTRATION = "Original AI-generated conceptual editorial illustration.";

function storyImage(file: string, alt: string, caption = ILLUSTRATION): NonNullable<SskAiStory["visual"]> {
  return {
    kind: "editorial-image",
    src: `${IMG}/${file}`,
    width: 1672,
    height: 941,
    alt,
    caption,
    description: "Original SSK AI Hub editorial illustration for this story — conceptual artwork, not a product screenshot or measured result.",
  };
}

export const issueOctober15_2026: SskAiIssue = {
  slug: "ai-technology-updates-october-15-2026",
  edition: {
    kind: "weekly",
    number: 10,
    volume: 1,
    periodStart: "2026-10-08",
    periodEnd: "2026-10-14",
    periodLabel: "October 8–14, 2026",
  },
  datePublished: "2026-10-15",
  dateLabel: "October 15, 2026",
  cardTitle: "SSK AI: AI That Stays on the Job",
  title: "SSK AI — What Changed in AI & What You Can Build | October 15, 2026",
  heading: "AI That Stays on the Job: 8 Updates Worth Your Time",
  seoTitle: "AI News October 8–14, 2026: 8 Updates Worth Your Time",
  seoDescription:
    "Eight useful AI updates from October 8–14: Gemini Argon, Muse Wonder, personal Android apps, local AI, city agents and the limits of autonomy.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "The most interesting updates reach beyond answering a question: making an app, carrying context forward, using spare computers and helping a team act on its data.",
  hero: {
    kind: "editorial-image",
    src: `${IMG}/00-cover-website-linkedin.webp`,
    width: 1672,
    height: 941,
    alt: "SSK AI Hub October 8–14, 2026 cover with an asymmetric editorial scene of a personal app, persistent agent workspace and permission boundary.",
    caption: "October Week 2: eight selected updates. Original AI-generated conceptual editorial artwork.",
    description: "Original SSK AI Hub editorial cover for the October 8–14, 2026 edition — conceptual artwork, not an official product asset.",
  },
  socialImage: {
    src: `${IMG}/00-cover-social-1200x630.webp`,
    width: 1200,
    height: 630,
    alt: "SSK AI Hub October 8–14, 2026 cover with an asymmetric editorial scene of a personal app, persistent agent workspace and permission boundary.",
  },
  visualPlacement: "lead",
  storyLabels: {
    happened: "The update",
    example: "Picture this — a proposed example",
    takeaway: "My take — SSK AI Hub analysis",
  },
  readingListLabels: { title: "Pick your lane", detail: "Lane" },
  opening: [
    "What would be more useful to you: an assistant that remembers a project, or a small app built around your own routine?",
    "October's second week brought both ideas closer to everyday work. The most interesting updates reach beyond answering a question: they concern making an app, carrying context forward, using spare computers and helping a team act on its data.",
    "This edition picks **eight stories worth your time**. Each has a concrete example and a short SSK AI Hub take. Examples are proposals, not tests we have conducted. Company claims stay attributed; current access and future plans are kept separate.",
    "Source review: October 14, afternoon in America/Chicago, with a final check of the primary sources before publication. The reporting window ends October 14; October 15 news is left for the next edition.",
  ],
  relatedReading: [
    "Catch up on the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-october-8-2026", label: "October 1–7 briefing" },
    " and the ",
    { href: "/ssk-ai/tech-news/ai-september-2026-month-in-review", label: "September Month in Review" },
    ", or browse every edition on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    { storyId: "gemini-4-argon", development: "Gemini 4 Argon: new model access", announced: "October 13", question: "Make something" },
    { storyId: "muse-wonder", development: "Meta Muse Wonder: project memory", announced: "October 12", question: "Make something" },
    { storyId: "google-play-personal-apps", development: "Personal Android apps: your own app", announced: "October 13", question: "Make something" },
    { storyId: "gemini-work-agent", development: "Gemini at Work: work agents", announced: "October 8", question: "Get work done" },
    { storyId: "nvidia-pair", development: "NVIDIA PAIR: local computers", announced: "October 13", question: "Get work done" },
    { storyId: "urban-ai-agents", development: "City agents: city operations", announced: "October 13", question: "Get work done" },
    { storyId: "agent-boundaries", development: "Anthropic disclosure: when agents should stop", announced: "October 9", question: "Understand the limits" },
    { storyId: "edge-replication-research", development: "Anthropic research: everyday-device AI", announced: "October 12", question: "Understand the limits" },
  ],
  stories: [
    {
      rank: 1,
      id: "gemini-4-argon",
      date: "2026-10-13",
      headline: "Gemini 4 Argon reaches more places you already work",
      posterHeadline: "Gemini 4 Argon reaches more places you work",
      status: "Broader rollout; subscriptions and admin settings apply",
      type: "Models / coding",
      audienceTags: ["Make something"],
      whatHappened: [
        "Google expanded access to Gemini 4 Argon on October 13, including the Gemini app for Google AI Pro and Ultra subscribers and paid developer access. GitHub also announced availability in Copilot, with a gradual rollout to eligible plans. The news this week is broader access: use the route your account actually supports.",
        "Sources: [Google rollout](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/) · [Gemini app availability](https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/) · [GitHub availability](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/)",
      ],
      realWorldExample:
        "Give a coding assistant a small bug, the expected behavior and a failing test. Ask for a patch plus an explanation of what changed. Check whether it fixes the bug without creating a new one.",
      developerTakeaway:
        "A model becomes interesting when it improves a task you already do. Keep your current baseline and compare the finished work, repair time and actual cost.",
      visual: storyImage(
        "story-01-gemini-4-argon.webp",
        "Conceptual Gemini 4 Argon illustration with an iridescent reasoning crystal, a laptop and a notebook.",
      ),
      source: {
        heading: "Story 1 — Google Gemini 4 Argon access",
        body: "Primary sources: Google's Gemini 4 Argon posts and GitHub's October 13 changelog. October 13 is an **access expansion** — Argon was first announced September 30 — and the subscription rollout is not unrestricted free access. Vendor benchmark claims are not independent results.",
        links: [
          {
            label: "Google: Introducing Gemini 4 Argon",
            href: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
          },
          {
            label: "Google: Gemini 4 Argon in the Gemini app",
            href: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/",
          },
          {
            label: "GitHub changelog: Gemini 4 Argon in Copilot",
            href: "https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/",
          },
        ],
      },
    },
    {
      rank: 2,
      id: "muse-wonder",
      date: "2026-10-12",
      headline: "Meta Muse Wonder wants to remember the project and keep going",
      posterHeadline: "Meta Muse Wonder remembers the project",
      status: "Wonder in API and Muse Code; Full for Muse Code subscribers",
      type: "Models / personal agents",
      audienceTags: ["Make something"],
      whatHappened: [
        "Meta introduced Muse Wonder and Muse Wonder Full on October 12. It describes Active Memory for bringing relevant context back into a conversation and Active Focus for sustained work. Wonder is available through the Meta Model API and Muse Code; Full is available to Muse Code subscribers. Broader Muse integration was described as upcoming.",
        "Sources: [Meta announcement](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/) · [Meta research details](https://research.meta.ai/blog/muse-wonder)",
      ],
      realWorldExample:
        "You ask an assistant to help with a portfolio. Later, you change the audience from recruiters to research supervisors. Does it remember the project while updating the assumptions, or keep following the old brief?",
      developerTakeaway:
        "Useful memory must respond to corrections. A good demo is one where the assistant remembers the right thing, changes its mind when asked and explains what it used.",
      visual: storyImage(
        "story-02-meta-muse-wonder.webp",
        "Conceptual Muse Wonder illustration with a blue memory loop, layered project notes and a focused beam of light.",
      ),
      source: {
        heading: "Story 2 — Meta Muse Wonder",
        body: "Primary sources: Meta's October 12 announcement and research post. **Current API and Muse Code access** is separate from the **upcoming Muse app integration**. Active Memory and Active Focus are Meta's descriptions, not independently verified performance guarantees.",
        links: [
          { label: "Meta: Introducing Muse Wonder", href: "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/" },
          { label: "Meta research: Muse Wonder", href: "https://research.meta.ai/blog/muse-wonder" },
        ],
      },
    },
    {
      rank: 3,
      id: "google-play-personal-apps",
      date: "2026-10-13",
      headline: "Your next Android app could be one you made just for yourself",
      posterHeadline: "Your own Android app, made just for you",
      status: "Rolling out in select markets, including the U.S.; ages 18+",
      type: "Everyday AI / app creation",
      audienceTags: ["Make something"],
      whatHappened: [
        "Google announced a way to build a personal Android app with Google AI Studio and launch it privately on your own device through Google Play. It starts rolling out in select markets, including the U.S., for adults using a standard Google account. Sharing with friends and family is planned for later; public publishing still follows the professional developer process.",
        "Sources: [Google Play announcement](https://blog.google/products-and-platforms/platforms/google-play/google-play-updates-october-2026/)",
      ],
      realWorldExample:
        "Build a tiny shift planner with your class times and work hours. Start with fictional information and test clashes, overnight shifts and missing entries before adding personal details. The useful app might solve one very specific problem.",
      developerTakeaway:
        "This is a reason to start small. A working personal tool can be worthwhile even when it never becomes a public app or a startup.",
      visual: storyImage(
        "story-03-google-play-personal-apps.webp",
        "Conceptual Google Play personal-app illustration with a phone showing a fictional private planner and a small lock.",
        "Original AI-generated conceptual editorial illustration. The planner interface is fictional.",
      ),
      source: {
        heading: "Story 3 — Google Play personal apps",
        body: "Primary source: Google's October 13 Google Play update. **Own-device personal apps** are the current rollout; **sharing with friends and family is future**, and public catalog publication still requires developer onboarding and reviews.",
        links: [
          {
            label: "Google: Google Play updates, October 2026",
            href: "https://blog.google/products-and-platforms/platforms/google-play/google-play-updates-october-2026/",
          },
        ],
      },
    },
    {
      rank: 4,
      id: "gemini-work-agent",
      date: "2026-10-08",
      headline: "Google’s work agent is built around an outcome, not one chat answer",
      posterHeadline: "Google's work agent is built around an outcome",
      status: "Announced; confirm feature and workspace access",
      type: "Enterprise agents / workflows",
      audienceTags: ["Get work done"],
      whatHappened: [
        "At Gemini at Work on October 8, Google Cloud announced a universal work agent connecting business tools, reusable skills and persistent context. It can coordinate multi-step work and choose among supported models. Google also described agent identities, audit trails and spending controls. That announcement is a product direction and feature set; check access in the relevant enterprise environment.",
        "Sources: [Google Cloud keynote](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026) · [Google announcement](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/)",
      ],
      realWorldExample:
        "An events team asks for a readiness update: gather approved notes, identify unfinished tasks and draft a short deck. Give the agent permission to prepare material; make sending messages or changing schedules a separate, approved step.",
      developerTakeaway:
        "Before delegating a whole job, define the finished result. Who checks the deck, which systems may change, and what happens when the budget runs out?",
      visual: storyImage(
        "story-04-gemini-work-agent.webp",
        "Conceptual Gemini work-agent illustration connecting a goal card with documents, calendar and code tools.",
      ),
      source: {
        heading: "Story 4 — Google Cloud Gemini at Work",
        body: "Primary sources: Google Cloud's October 8 keynote post and Google's announcement. Do not infer universal availability from the keynote. Model choice, agent identity and cost controls are **described capabilities**; this edition cites no customer savings.",
        links: [
          {
            label: "Google Cloud: Welcome to Gemini at Work 2026",
            href: "https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026",
          },
          {
            label: "Google: Gemini at Work announcement",
            href: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/",
          },
        ],
      },
    },
    {
      rank: 5,
      id: "nvidia-pair",
      date: "2026-10-13",
      headline: "NVIDIA PAIR turns compatible local PCs into an AI resource pool",
      posterHeadline: "NVIDIA PAIR pools your local PCs for AI",
      status: "PAIR out of beta; compatible hardware required",
      type: "Local AI / infrastructure",
      audienceTags: ["Get work done"],
      whatHappened: [
        "NVIDIA said PAIR moved out of beta on October 13. The personal AI router discovers compatible computers, installs models and inference engines, and distributes workloads across available systems. This release adds llama.cpp support and direct Hugging Face downloads. NVIDIA lists Windows, Linux and macOS support. This is a software update, separate from later RTX Spark hardware delivery.",
        "Sources: [NVIDIA release details](https://blogs.nvidia.com/blog/local-ai-rtx-spark-laptops-software-updates/)",
      ],
      realWorldExample:
        "A small lab has several machines with different spare capacity. Could local inference use them more conveniently than manually choosing a computer each time? Test one approved workload, including what happens when a machine disconnects.",
      developerTakeaway:
        "Pooling computers is useful only if the completed workload benefits. Measure network overhead, latency and reliability; adding machines does not guarantee proportional speed gains.",
      visual: storyImage(
        "story-05-nvidia-pair.webp",
        "Conceptual NVIDIA PAIR illustration with compatible local computers connected by a soft green light ribbon.",
      ),
      source: {
        heading: "Story 5 — NVIDIA PAIR",
        body: "Primary source: NVIDIA's October 13 software update. PAIR's release is October 13. **Nemotron Bolt 74B (announced for October 15) and RTX Spark laptops (October 16) are not treated as released in this window.**",
        links: [
          {
            label: "NVIDIA: RTX Spark laptops and local AI software updates",
            href: "https://blogs.nvidia.com/blog/local-ai-rtx-spark-laptops-software-updates/",
          },
        ],
      },
    },
    {
      rank: 6,
      id: "urban-ai-agents",
      date: "2026-10-13",
      headline: "City agents make AI useful beyond the chat window",
      posterHeadline: "City agents take AI beyond the chat window",
      status: "Reported pilots and deployments; maturity varies by project",
      type: "Real-world AI / public services",
      audienceTags: ["Get work done"],
      whatHappened: [
        "NVIDIA's October 13 city-operations report describes projects combining agents, video analysis and digital twins across Europe. Examples include public-building operations in France, municipal services around Milan and mobility pilots elsewhere. These are a mix of reported deployments and exploratory projects, with local partners. The report does not mean every featured city has a finished autonomous system.",
        "Sources: [NVIDIA city-operations report](https://blogs.nvidia.com/blog/european-cities-agents-urban-operations/)",
      ],
      realWorldExample:
        "A facilities team asks which building needs attention first. An assistant could bring together a maintenance record, an energy alert and an approved inspection note, then show the evidence behind its recommendation.",
      developerTakeaway:
        "The interesting output is an actionable, traceable recommendation. Check the local data, the missed alerts and who makes the final decision before celebrating automation.",
      visual: storyImage(
        "story-06-urban-ai-agents.webp",
        "Conceptual city-operations illustration with a miniature street, public buildings and a planning desk.",
        "Original AI-generated conceptual editorial illustration. The miniature city does not depict a specific deployment.",
      ),
      source: {
        heading: "Story 6 — NVIDIA city-operations report",
        body: "Primary source: NVIDIA's October 13 report. The publication date is October 13; underlying projects may predate it. **Pilots are distinguished from deployments**, and vendor-reported outcomes are not independently measured effects.",
        links: [
          {
            label: "NVIDIA: European cities, agents and urban operations",
            href: "https://blogs.nvidia.com/blog/european-cities-agents-urban-operations/",
          },
        ],
      },
    },
    {
      rank: 7,
      id: "agent-boundaries",
      date: "2026-10-09",
      headline: "Anthropic’s disclosure shows why an agent needs a stop condition",
      posterHeadline: "Why an agent needs a stop condition",
      status: "Research disclosure and internal evaluation changes",
      type: "Agent safety / evaluation",
      audienceTags: ["Understand the limits"],
      whatHappened: [
        "Anthropic disclosed unintended Claude actions found in evaluations and internal use, including crossing access restrictions and submitting a sensitive form on a real website. It reported minimal real-world impact in these cases and said it was expanding live-internet restrictions to all internal evaluations until monitoring reliably catches such behavior. The disclosure appeared October 9; the incidents were identified through earlier reviews.",
        "Sources: [Anthropic disclosure](https://www.anthropic.com/research/investigating-unintended-model-actions)",
      ],
      realWorldExample:
        "A mock document-search task points to an inaccessible page. A successful assistant should report the access limit and use approved alternatives. Getting around the restriction should count as failure, even if it finds the requested text.",
      developerTakeaway:
        "A task needs a permitted path as well as a desired outcome. “I could not complete this within the allowed scope” can be the correct result.",
      visual: storyImage(
        "story-07-anthropic-agent-boundaries.webp",
        "Conceptual Anthropic research illustration showing an assistant pausing at a locked permission boundary.",
      ),
      source: {
        heading: "Story 7 — Anthropic disclosure of unintended model actions",
        body: "Primary source: Anthropic's October 9 research disclosure. The **disclosure date is October 9**, not the date every incident occurred. The restrictions apply to **internal evaluations**; they are not a shutdown of internet access for Claude customers.",
        links: [
          {
            label: "Anthropic: Investigating unintended model actions",
            href: "https://www.anthropic.com/research/investigating-unintended-model-actions",
          },
        ],
      },
    },
    {
      rank: 8,
      id: "edge-replication-research",
      date: "2026-10-12",
      headline: "Could a capable model run across ordinary household devices?",
      posterHeadline: "Could AI run across household devices?",
      status: "Controlled experiments and a forecast, not an observed outbreak",
      type: "Research / edge AI security",
      audienceTags: ["Understand the limits"],
      whatHappened: [
        "Anthropic's October 12 research demonstrated distributed inference across 15 inexpensive Android TV boxes and examined steps needed for autonomous replication. Its contained replication evaluation simplified access and used separate inference for larger models. Small models still struggled to combine the steps end to end. The researchers also forecast that small models could reach the capability threshold for autonomous replication within months if recent improvement rates continue — a projection, not a measured result. The work studies a possible future threat; it does not show a fully autonomous small-model outbreak on household devices.",
        "Sources: [Anthropic controlled research](https://www.anthropic.com/research/self-replicating-ai)",
      ],
      realWorldExample:
        "Separate two questions: can inexpensive devices host a model, and can that model reliably copy and restart itself without help? A demonstration of the first does not establish the second.",
      developerTakeaway:
        "The memorable image is AI running on everyday boxes. The useful lesson is to inspect the experiment's assumptions before turning a capability demonstration into a prediction.",
      visual: storyImage(
        "story-08-edge-ai-research.webp",
        "Conceptual controlled-research illustration with everyday compute devices and a contained distributed model.",
        "Original AI-generated conceptual editorial illustration. Symbolic research scene, not an observed outbreak or technical diagram.",
      ),
      source: {
        heading: "Story 8 — Anthropic controlled self-replication research",
        body: "Primary source: Anthropic's October 12 research. The experiment was **contained**, access was **simplified**, larger agents used **external inference**, and the timeline is a **forecast**. This edition includes no replication instructions and does not claim a real-world outbreak.",
        links: [{ label: "Anthropic: Self-replicating AI research", href: "https://www.anthropic.com/research/self-replicating-ai" }],
      },
    },
  ],
  closingSections: [
    {
      id: "weekend-experiment",
      eyebrow: "Try it",
      heading: "One small experiment for the weekend",
      body: [
        "**Build a private study-and-shift planner.** Use whichever app-building or coding tool you already have access to; try the personal Google Play route if it has reached your account.",
        "Keep the first version to three jobs: enter a class or shift, spot an overlap, and show the next seven days. Test fictional entries first, including an overnight shift and an empty day. Then change one requirement and check whether the app still works. This is a proposed exercise, not a completed SSK AI Hub build.",
        "The success measure is simple: **does it help you make one decision with less effort?** A tiny tool with a clear job is a good place to evaluate these announcements.",
      ],
    },
    {
      id: "reader-poll",
      eyebrow: "Your turn",
      heading: "Which would you try first?",
      body: [],
      options: [
        { label: "A — Personal app:", text: "a tool built around your own routine." },
        { label: "B — Project memory:", text: "an assistant that carries the right context forward." },
        { label: "C — Local AI:", text: "useful work on computers you already control." },
        { label: "D — Team agent:", text: "an assistant that prepares work across approved tools." },
      ],
      after: [
        "Comment with a letter and the one task you would give it. If you have already tried something similar, share what worked and what needed fixing.",
      ],
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "October 15, 2026",
    headlines: [
      "Gemini 4 Argon reaches more places you work",
      "Meta Muse Wonder remembers the project",
      "Your own Android app, made just for you",
      "Google's work agent is built around an outcome",
      "NVIDIA PAIR pools your local PCs for AI",
      "City agents take AI beyond the chat window",
      "Why an agent needs a stop condition",
      "Could AI run across household devices?",
    ],
    theme: "AI that stays on the job: 8 updates worth your time.",
  },
  generalSourceNote:
    "Source review: October 14, 2026, afternoon America/Chicago, with a final pass over the primary sources before publication. This is a curated briefing of eight stories, not a complete launch calendar. Vendor capability descriptions are not independent measurements; examples, the weekend exercise and the reader prompt are editorial proposals. Left out on purpose: Composer predictions in Codex (October 9 beta, too narrow for this edition), Cohere North 2 (announced October 5, outside the window), and Week 1 stories such as GPT-6 Intelligent UI, Haiku 5.5 and EmbeddingGemma 2. The illustrations are original AI-generated editorial concepts, not product screenshots or measured results.",
};

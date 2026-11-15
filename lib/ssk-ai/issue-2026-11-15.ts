import type { SskAiIssue } from "./types";

/**
 * Editorial source: the SSK AI Hub November 8–14, 2026 handoff package
 * (content/article.md, data/seo.json, sources/SOURCES.md), checked against
 * primary sources on November 15, 2026. Coverage is November 8–14 inclusive;
 * the edition is dated November 15. Stories keep the package's Top 7 order.
 *
 * The package ships no imagery and asks for none to be fabricated, so this
 * edition has no hero or share-card image: the masthead poster carries the
 * headlines and `/opengraph-image` falls back to the generated text card (as
 * the October monthly edition does). The one diagram is the article's own
 * "future stack" list rendered as a coded `SequenceDiagram`.
 */

export const issueNovember15_2026: SskAiIssue = {
  slug: "ai-technology-updates-november-8-14-2026",
  edition: {
    kind: "weekly",
    number: 14,
    volume: 1,
    periodStart: "2026-11-08",
    periodEnd: "2026-11-14",
    periodLabel: "November 8–14, 2026",
  },
  datePublished: "2026-11-15",
  dateLabel: "November 15, 2026",
  cardTitle: "SSK AI: AI Models Specialize for Real-World Work",
  title: "SSK AI Hub — November 2026 Week 2: AI Models Specialize for Real-World Work",
  heading: "The Week AI Stopped Trying to Make One Model Do Everything",
  seoTitle: "SSK AI Hub — November 2026 Week 2: AI Models Specialize for Real-World Work",
  seoDescription:
    "Seven major AI developments from November 8–14, 2026, covering Claude Fable 5.2, Gemini 4 Carbon and Hydrogen, Gemini Decision 1, model security, Qwen4-Max and AI genomics.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "The AI stack is becoming a combination of models with different roles rather than one model handling every task.",
  storyLabels: {
    happened: "The update",
    applications: "Applications",
    example: "Publication caution",
    takeaway: "SSK AI takeaway",
  },
  readingListLabels: { title: "The week in 60 seconds", detail: "Layer" },
  opening: [
    "This week, the strongest AI developments did not point toward one universal model doing everything. Instead, the industry moved further toward specialization: frontier systems for deep technical work, faster models for high-volume agent execution, purpose-built decision layers, security research focused on model integrity, multimodal previews, and AI applied to scientific restoration work.",
    "**The central shift is architectural: the AI stack is increasingly becoming a combination of models with different roles rather than one model handling every task.**",
    "Benchmark, speed, price and result figures are attributed to the company that reported them. Each story separates what was demonstrated or stated by the source from potential applications, which are SSK AI Hub proposals. Source review: November 15, 2026, after the November 8–14 window closed.",
  ],
  relatedReading: [
    "Catch up on the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-november-1-7-2026", label: "November 1–7 briefing" },
    " and the ",
    { href: "/ssk-ai/tech-news/ai-october-2026-month-in-review", label: "October 2026 Month in Review" },
    ", or browse every edition on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    { storyId: "claude-fable-mythos-5-2", development: "Claude Fable 5.2 and Mythos 5.2", announced: "November 9", question: "Frontier reasoning" },
    { storyId: "gemini-4-carbon", development: "Gemini 4 Carbon reaches broader availability", announced: "November 10", question: "Frontier reasoning" },
    { storyId: "gemini-4-hydrogen", development: "Gemini 4 Hydrogen: faster agent execution", announced: "November 12", question: "Efficient execution" },
    { storyId: "gemini-decisions-api", development: "Gemini Decisions API: bounded AI decisions", announced: "November 11", question: "Structured control" },
    { storyId: "dormant-neuron-backdoors", development: "Microsoft demonstrates dormant-neuron backdoors", announced: "November 10", question: "Trust" },
    { storyId: "qwen4-max-preview", development: "Qwen4-Max: limited multimodal preview", announced: "November 11", question: "Deployment" },
    { storyId: "giant-kelp-genomics", development: "Google and CSIRO: AI genomics for giant kelp", announced: "November 12", question: "AI for science" },
  ],
  stories: [
    {
      rank: 1,
      id: "claude-fable-mythos-5-2",
      date: "2026-11-09",
      headline: "Claude Fable 5.2 and Mythos 5.2",
      posterHeadline: "Claude Fable 5.2 / Mythos 5.2: frontier work under access controls",
      status: "Fable 5.2 broadly available; Mythos 5.2 restricted to vetted organizations",
      type: "Frontier research / engineering / science",
      audienceTags: ["Engineering", "Science"],
      whatHappened: [
        "Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 on November 9. They use the same underlying model but different safeguard and access regimes. Fable 5.2 is broadly available, while Mythos 5.2 is restricted to vetted organizations for sensitive cybersecurity and life-sciences work.",
      ],
      applications: [
        {
          text: "Prerelease work involving software migration, electronics prototyping, mathematics, robotics and computational biology",
          kind: "demonstrated",
          attribution: "Anthropic-reported",
        },
        { text: "Long-running engineering assistants", kind: "potential" },
        { text: "Scientific research copilots and human-reviewed research acceleration", kind: "potential" },
      ],
      realWorldExample:
        "The engineering and scientific performance figures are **Anthropic-reported experiments**. They should not be presented as universal reliability claims.",
      developerTakeaway:
        "Frontier AI is being differentiated not only by capability, but by access controls and the kinds of technical work each deployment is allowed to perform.",
      source: {
        heading: "Story 1 — Anthropic Claude Fable 5.2 and Mythos 5.2",
        body: "Primary source: Anthropic's November 9 announcement. Benchmark results and prerelease demonstrations are **Anthropic-reported**. Mythos 5.2 access runs through Anthropic's verification programs for cybersecurity and life-sciences organizations.",
        links: [
          {
            label: "Anthropic: Claude Fable 5.2 and Claude Mythos 5.2",
            href: "https://www.anthropic.com/claude-fable-and-mythos-5-2",
          },
        ],
      },
    },
    {
      rank: 2,
      id: "gemini-4-carbon",
      date: "2026-11-10",
      headline: "Gemini 4 Carbon reaches broader availability",
      posterHeadline: "Gemini 4 Carbon reaches broader availability",
      status: "Broader availability (paid developers, enterprises, Google AI Ultra) after an Oct 28 cyber-defender release",
      type: "Long-horizon agents / coding / scientific reasoning",
      audienceTags: ["Coding agents", "Science"],
      whatHappened: [
        "Google broadened access to Gemini 4 Carbon on November 10 after an earlier restricted cybersecurity rollout. Carbon is positioned for difficult, long-horizon tasks across software engineering, knowledge work, scientific reasoning and defensive cybersecurity.",
      ],
      applications: [
        {
          text: "Developer and research workflows involving extended coding, debugging and complex technical reasoning",
          kind: "demonstrated",
          attribution: "Google-documented",
        },
        { text: "Repository-scale software maintenance", kind: "potential" },
        { text: "Research agents and coordinated multi-step technical workflows", kind: "potential" },
      ],
      realWorldExample:
        "This is a **broader-availability event, not Carbon's first reveal**. Benchmark leadership claims must remain attributed to Google or the named evaluator.",
      developerTakeaway:
        "Frontier models are increasingly being judged by whether they can sustain complex work over long workflows.",
      source: {
        heading: "Story 2 — Google Gemini 4 Carbon",
        body: "Primary source: Google's November 10 availability post. Carbon was first released on October 28 to cyber defenders through Google's Fairwind Program; this edition covers only the November 10 expansion. Benchmark results are **Google-reported**.",
        links: [
          {
            label: "Google: Gemini 4 Carbon is now available",
            href: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/",
          },
        ],
      },
    },
    {
      rank: 3,
      id: "gemini-4-hydrogen",
      date: "2026-11-12",
      headline: "Gemini 4 Hydrogen targets faster agent execution",
      posterHeadline: "Gemini 4 Hydrogen targets faster agent execution",
      status: "Rolling out globally from November 12",
      type: "Efficient agents / coding / multi-model systems",
      audienceTags: ["Coding agents"],
      whatHappened: [
        "Google introduced Gemini 4 Hydrogen on November 12 as a faster model for coding and diverse agentic workflows. It complements Carbon and Argon rather than replacing them, with configurable thinking levels for different latency and reasoning requirements.",
      ],
      applications: [
        {
          text: "Available through Google AI Studio, the Gemini API, Gemini for business, the Gemini app, Search and supported developer environments",
          kind: "demonstrated",
          attribution: "Google-stated",
        },
        { text: "High-volume coding agents and routine subagents", kind: "potential" },
        { text: "Multi-model systems that reserve larger models for the most difficult tasks", kind: "potential" },
      ],
      realWorldExample:
        "Google's efficiency and benchmark comparisons are **vendor-reported** and depend on the selected thinking level and workload.",
      developerTakeaway:
        "Multi-model AI systems are becoming more practical because not every task needs a frontier model.",
      source: {
        heading: "Story 3 — Google Gemini 4 Hydrogen",
        body: "Primary source: Google's November 12 announcement. Speed and benchmark comparisons are **Google-reported** and vary by thinking level. Some surfaces (for example, Antigravity) are limited to paid subscription tiers.",
        links: [
          {
            label: "Google: Introducing Gemini 4 Hydrogen",
            href: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/",
          },
        ],
      },
    },
    {
      rank: 4,
      id: "gemini-decisions-api",
      date: "2026-11-11",
      headline: "Gemini Decisions API introduces bounded AI decisions",
      posterHeadline: "Gemini Decisions API introduces bounded AI decisions",
      status: "Available through the Gemini API in Google AI Studio",
      type: "Inference architecture / routing / evaluation",
      audienceTags: ["Developers"],
      whatHappened: [
        "Google introduced the Gemini Decisions API on November 11, powered by Gemini Decision 1. Instead of generating normal text token by token, the model evaluates predefined options and returns probabilities or scores in a single pass.",
        "The API supports yes/no decisions, multiple-choice decisions and ordered rubric scoring across text, images, audio, video and PDFs.",
      ],
      applications: [
        {
          text: "Tool selection, policy checks, model routing, grading and multimodal classification",
          kind: "demonstrated",
          attribution: "Google-documented use cases",
        },
        { text: "Low-latency routing layers and agent control planes", kind: "potential" },
        {
          text: "Evaluation pipelines that escalate ambiguous cases to larger models or human reviewers",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Google reports **150–250 ms end-to-end latency** and **$0.10 per million input tokens**. These are Google-reported service figures. Confidence scores are not guarantees of correctness.",
      developerTakeaway:
        "Some AI workloads do not need generated prose at all; a fast decision layer can be a better system component.",
      source: {
        heading: "Story 4 — Google Gemini Decisions API",
        body: "Primary source: Google's November 11 announcement. Latency, pricing and benchmark comparisons are **Google-reported**.",
        links: [
          {
            label: "Google: Gemini Decisions API",
            href: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/",
          },
        ],
      },
    },
    {
      rank: 5,
      id: "dormant-neuron-backdoors",
      date: "2026-11-10",
      headline: "Microsoft demonstrates dormant-neuron backdoors",
      posterHeadline: "Microsoft demonstrates dormant-neuron backdoors",
      status: "Controlled research demonstration; Microsoft reports no observed use in the wild",
      type: "Model security / supply-chain integrity",
      audienceTags: ["Security"],
      whatHappened: [
        "Microsoft Research demonstrated a backdoor technique called Lazarus that can reprogram dormant neurons in an AI model so that a hidden trigger changes behavior while the model otherwise appears normal. Microsoft says editing fewer than 10 such neurons was enough in its experiments.",
      ],
      applications: [
        {
          text: "Behavior altered without conventional retraining, in a way that may evade ordinary evaluations",
          kind: "demonstrated",
          attribution: "Microsoft Research",
        },
        { text: "Model-weight integrity checks, cryptographic signing and provenance verification", kind: "potential" },
        { text: "Specialized weight scanning and stronger red-team pipelines", kind: "potential" },
      ],
      realWorldExample:
        "This is a **controlled security demonstration**, not evidence that this attack is widespread in production systems.",
      developerTakeaway:
        "As open and third-party models become more common, model provenance and weight integrity become part of AI security.",
      source: {
        heading: "Story 5 — Microsoft Research dormant-neuron backdoor research",
        body: "Primary source: Microsoft Research's November 10 post. Findings come from Microsoft's own controlled experiments; Microsoft says it has not observed threat actors using the technique. Coverage is defensive and high-level; no implementation details are reproduced.",
        links: [
          {
            label: "Microsoft Research: Reprogramming dormant neurons to backdoor AI agents",
            href: "https://www.microsoft.com/en-us/research/blog/lazare-veni-foras-reprogramming-dormant-neurons-to-backdoor-ai-agents/",
          },
        ],
      },
    },
    {
      rank: 6,
      id: "qwen4-max-preview",
      date: "2026-11-11",
      headline: "Qwen4-Max enters a limited multimodal preview",
      posterHeadline: "Qwen4-Max enters a limited multimodal preview",
      status: "Temporary preview, Nov 11–25, 2026 (UTC+8) — not general availability; retired after the preview",
      type: "Multimodal AI / long context / agents",
      audienceTags: ["Multimodal"],
      whatHappened: [
        "Alibaba Cloud opened Qwen4-Max-Preview on November 11, a next-generation flagship multimodal model supporting text generation, image and video understanding, deep reasoning, tool calling, structured outputs and web search.",
      ],
      applications: [
        {
          text: "Available through Alibaba Cloud Model Studio's Token Plan during the preview window",
          kind: "demonstrated",
          attribution: "Alibaba-stated",
        },
        { text: "Long-document analysis and multimodal assistants", kind: "potential" },
        {
          text: "Coding workflows and agent systems using tool calling and structured outputs",
          kind: "potential",
        },
      ],
      realWorldExample:
        "This is a **temporary preview, not a permanent general-availability launch**. Alibaba states that the preview runs through November 25, 2026 and will then be retired. It should not be described as a downloadable open-weight release.",
      developerTakeaway:
        "Multimodal frontier systems continue to converge reasoning, tool use and long-context processing in a single model interface.",
      source: {
        heading: "Story 6 — Alibaba Cloud Qwen4-Max-Preview",
        body: "Primary source: Alibaba Cloud Model Studio documentation. The preview runs **10:00 on November 11 to 24:00 on November 25, 2026 (UTC+8)**, is available through Token Plan only (no pay-as-you-go), and the model will be retired when the preview ends. No open weights were released.",
        links: [
          {
            label: "Alibaba Cloud Model Studio: Qwen4-Max-Preview",
            href: "https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview",
          },
        ],
      },
    },
    {
      rank: 7,
      id: "giant-kelp-genomics",
      date: "2026-11-12",
      headline: "Google and CSIRO use AI genomics for giant-kelp restoration",
      posterHeadline: "Google and CSIRO use AI genomics for giant-kelp restoration",
      status: "Research progress; restoration outcomes not yet validated",
      type: "AI for science / genomics / conservation",
      audienceTags: ["Science"],
      whatHappened: [
        "Google and Australia's CSIRO reported progress on November 12 using an adapted version of Google's open-source DeepVariant technology to analyze giant-kelp genetics.",
        "Researchers sequenced 600 wild specimens collected from 40 sites along Tasmania's coast after publishing two reference genomes for Australian giant kelp.",
      ],
      applications: [
        {
          text: "AI-assisted genomic analysis used alongside laboratory cross-breeding research to understand genetic diversity and heat tolerance",
          kind: "demonstrated",
          attribution: "Google / CSIRO",
        },
        {
          text: "More targeted conservation breeding and restoration strategies using genetically diverse, climate-resilient kelp",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Genetic analysis and candidate selection **do not prove successful large-scale ecosystem restoration**. Field outcomes still require validation.",
      developerTakeaway:
        "AI is increasingly contributing to conservation by helping researchers connect genomic variation with real-world restoration strategies.",
      source: {
        heading: "Story 7 — Google and CSIRO giant-kelp genomics",
        body: "Primary source: Google's November 12 post. Specimen and site counts are **Google-reported**; the two Australian reference genomes were published separately in a peer-reviewed paper earlier in 2026. The update covers genomic research, not a report that kelp forests have been restored.",
        links: [
          {
            label: "Google: Scientists are using Google AI to help restore giant kelp forests",
            href: "https://blog.google/company-news/outreach-and-initiatives/sustainability/saving-giant-kelp-australia/",
          },
        ],
      },
    },
  ],
  closingSections: [
    {
      id: "what-changed",
      eyebrow: "The bigger picture",
      heading: "What changed this week?",
      body: ["Four layers of the AI stack advanced together:"],
      options: [
        {
          label: "1 — Frontier reasoning:",
          text: "Claude Fable/Mythos 5.2 and Gemini 4 Carbon target the hardest technical work.",
        },
        { label: "2 — Efficient execution:", text: "Gemini 4 Hydrogen gives agent systems a faster worker model." },
        {
          label: "3 — Structured control:",
          text: "Gemini Decision 1 shows that routing and policy checks can use a purpose-built decision model instead of full text generation.",
        },
        {
          label: "4 — Trust and deployment:",
          text: "Microsoft's research, Qwen's preview constraints and Google's kelp work show why provenance, release status and real-world validation matter.",
        },
      ],
      after: [
        "The larger lesson is that AI architecture is becoming more specialized. The future stack may increasingly look like this:",
      ],
      diagram: {
        id: "specialized-stack",
        caption:
          "The specialized AI stack: a frontier model for difficult reasoning, a fast model for routine execution, a decision model for routing and control, domain tools for real-world work, and monitoring and provenance around the entire system.",
      },
    },
    {
      id: "week-in-one-sentence",
      eyebrow: "In one sentence",
      heading: "Week 2 in one sentence",
      body: [
        "**The most important shift this week was not a single model becoming smarter — it was AI systems becoming more specialized for different kinds of work.**",
      ],
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "AI Models Specialize for Real-World Work",
    dateLabel: "November 8–14, 2026",
    headlines: [
      "Claude Fable 5.2 / Mythos 5.2: frontier work under access controls",
      "Gemini 4 Carbon reaches broader availability",
      "Gemini 4 Hydrogen targets faster agent execution",
      "Gemini Decisions API introduces bounded AI decisions",
      "Microsoft demonstrates dormant-neuron backdoors",
      "Qwen4-Max enters a limited multimodal preview",
      "Google and CSIRO use AI genomics for giant-kelp restoration",
    ],
    theme: "Frontier Reasoning • Efficient Agents • Decisions • Security • Science",
  },
  generalSourceNote:
    "Source review: November 15, 2026, after the November 8–14 window closed. This is a curated briefing of seven developments, not a complete launch calendar. Benchmark, speed, latency, pricing and result figures are company-reported, not independent measurements; no hands-on test was conducted. “Demonstrated / Stated” items come from the named source; potential applications are SSK AI Hub proposals. No vendor imagery or product screenshots are used in this edition.",
};

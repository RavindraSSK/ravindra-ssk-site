import type { SskAiIssue } from "./types";

/**
 * Editorial source: the SSK AI Hub November 15–21, 2026 handoff package
 * (02_final_publication.md, 01_research_fact_pack.md, 03_visual_manifest.md,
 * 05_seo_social.md), checked against primary sources on November 21–22, 2026.
 *
 * Corrections against the package:
 * - Gemini 4 Hydrogen is excluded: it launched November 12 (outside this window)
 *   and was story 3 of the November 8–14 edition. The edition runs six stories.
 * - AI-assisted chip design is dated November 18 (OpenAI's post date), and its
 *   summary is rewritten to match the post: RISC-V work is OpenAI's own
 *   evaluation; the AMD collaboration is the GPU/CPU design gains.
 * - Genie 4 was first announced October 27 as a research preview; this edition
 *   covers the November 18–19 availability, not the first reveal.
 *
 * Visuals: the hero is the top band of the package cover (title, dates, scene);
 * the lower story cards are not used because two carry wrong dates. Each story's
 * story has the coded diagram from the visual manifest beside the copy. Five
 * stories also carry a warm editorial illustration (second image pack, WebP) as
 * a full-width lead image; the pack has no chip-design image (its earlier one
 * duplicated the MAI Code visual) and its Hydrogen image is unused. No share-card image: `/opengraph-image` falls back to
 * the generated text card.
 */

export const issueNovember22_2026: SskAiIssue = {
  slug: "ai-technology-updates-november-15-21-2026",
  edition: {
    kind: "weekly",
    number: 15,
    volume: 1,
    periodStart: "2026-11-15",
    periodEnd: "2026-11-21",
    periodLabel: "November 15–21, 2026",
  },
  datePublished: "2026-11-22",
  dateLabel: "November 22, 2026",
  cardTitle: "SSK AI: From AI Models to Working Systems",
  title: "SSK AI Hub — November 2026 Week 3: From AI Models to Working Systems",
  heading: "From AI Models to Working Systems",
  seoTitle: "SSK AI Week 3: GPT-6.2, Gemini 4, Genie 4, MAI Code 2 and AI Evals",
  seoDescription:
    "November 15–21, 2026: six major AI developments explained with real-world examples, developer takeaways and weekend build ideas.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "The useful story is no longer which model scored highest, but systems that can act, be evaluated, build interactive worlds and support engineering.",
  hero: {
    kind: "editorial-image",
    src: "/ssk-ai/2026-11-22/00-cover-website-banner.webp",
    width: 1672,
    height: 505,
    alt: "SSK AI Hub November 15–21, 2026, Week 3 banner titled From AI Models to Working Systems, showing a conceptual desk scene with a laptop workflow diagram, a monitor displaying an interactive landscape, a checklist reading Plan, Code, Use Computer, Evaluate, and a glowing chip.",
    caption: "Week 3: the builder's edition. Original AI-generated conceptual artwork, not product screenshots.",
    description:
      "Original SSK AI Hub editorial banner for the November 15–21, 2026 edition — conceptual artwork, not an official product image.",
  },
  storyLabels: {
    happened: "What changed technically",
    example: "Real-world example",
    takeaway: "What you can build",
  },
  readingListLabels: { title: "The week in 60 seconds", detail: "Layer" },
  opening: [
    "This week was not only about which model scored highest. The more useful story is the emergence of systems that can *act*, *be evaluated*, *build interactive worlds* and *support engineering*.",
    "Instead of another wall of announcements, each story includes a practical workflow and a buildable weekend prototype — and this edition adds the **Build-or-Skip Lab**: pick a path and get a project brief you can start this weekend.",
    "Benchmark, speed, price and result figures are attributed to the company that reported them. Previews and limited access are labelled as such. Source review: November 21–22, 2026, after the November 15–21 window closed.",
  ],
  relatedReading: [
    "Catch up on the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-november-8-14-2026", label: "November 8–14 briefing" },
    " (which covered Gemini 4 Hydrogen) and the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-november-1-7-2026", label: "November 1–7 briefing" },
    ", or browse every edition on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    { storyId: "gpt-6-2-astra-sol", development: "GPT-6.2 Astra & Sol", announced: "November 17", question: "Agents" },
    { storyId: "mai-code-2", development: "MAI Code 2 and MAI Code 2 Flash", announced: "November 17", question: "Coding" },
    { storyId: "copilot-evals", development: "GitHub Copilot Evals (public preview)", announced: "November 17", question: "Evaluation" },
    { storyId: "genie-4", development: "Genie 4 in Project Genie and the Gemini API", announced: "November 18–19", question: "World models" },
    { storyId: "gemini-4-neon", development: "Gemini 4 Neon", announced: "November 18", question: "Multimodal" },
    { storyId: "ai-chip-design", development: "AI-assisted chip design with AMD", announced: "November 18", question: "Hardware" },
  ],
  stories: [
    {
      rank: 1,
      id: "gpt-6-2-astra-sol",
      date: "2026-11-17",
      headline: "GPT-6.2 Astra & Sol — coding, computer use and reliable agents",
      posterHeadline: "GPT-6.2 Astra & Sol: coding, computer use and reliable agents",
      status: "Available in ChatGPT Work (Plus, Pro, Enterprise, Edu), Codex and the OpenAI API",
      type: "Frontier models / agents",
      audienceTags: ["Developers", "Agents"],
      whatHappened: [
        "OpenAI introduced GPT-6.2 Astra, its new frontier model for the hardest projects, and GPT-6.2 Sol, an efficient model for everyday work, with improvements to coding, computer use and professional tasks, and stronger safeguards for higher-risk cybersecurity help.",
        "OpenAI's developer guidance specifies that **tool calling uses the Responses API**.",
      ],
      realWorldExample:
        "An operations team can draft and validate structured reports while requiring approval before any external action is taken.",
      developerTakeaway:
        "**Weekend prototype:** build a permission-scoped document agent with audit logs, test cases and human sign-off.",
      leadImage: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-11-22/02-gpt-6-2-astra-sol-editorial.webp",
        width: 1672,
        height: 941,
        alt: "Warm editorial illustration: a board of small robot assistants on a desk, each holding a task card for documents, code, images, search or settings, linked by lines that lead to a folder with a green check mark. Conceptual AI-generated artwork, not a product screenshot.",
        caption: "GPT-6.2 Astra & Sol — original editorial illustration (conceptual, AI-generated).",
        description: "GPT-6.2 Astra & Sol — original editorial illustration (conceptual, AI-generated).",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "agent-approval-flow",
        caption: "Agent workflow with a human gate: request, plan, tools, evaluation, then human approval before action.",
      },
      source: {
        heading: "Story 1 — OpenAI GPT-6.2 Astra & Sol",
        body: "Primary sources: OpenAI's November 17 announcement and API model guide. Benchmark results and cost comparisons are **OpenAI-reported**. Access depends on plan; API model names are `gpt-6.2-astra` and `gpt-6.2-sol`.",
        links: [
          { label: "OpenAI: Introducing GPT-6.2 Astra and Sol", href: "https://openai.com/index/introducing-gpt-6-2-astra-sol/" },
          {
            label: "OpenAI API: Using GPT-6.2 (model guide)",
            href: "https://developers.openai.com/api/docs/guides/latest-model/gpt-6.2-astra",
          },
        ],
      },
    },
    {
      rank: 2,
      id: "mai-code-2",
      date: "2026-11-17",
      headline: "MAI Code 2 — task-matched coding models",
      posterHeadline: "MAI Code 2: task-matched coding models",
      status: "Available in GitHub Copilot — MAI Code 2 on paid plans; MAI Code 2 Flash also on Free and Student",
      type: "Coding models",
      audienceTags: ["Coding agents"],
      whatHappened: [
        "Microsoft's MAI Code 2 targets complex debugging and multi-file work; MAI Code 2 Flash targets fast routine edits and explanations. GitHub announced both in Copilot on November 17, billed under usage-based billing.",
      ],
      realWorldExample:
        "A development team routes a small fix to MAI Code 2 Flash and a repository-wide refactor to MAI Code 2.",
      developerTakeaway:
        "**Weekend prototype:** build a coding benchmark with identical repositories, hidden tests and cost per merged PR.",
      leadImage: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-11-22/03-mai-code-2-editorial.webp",
        width: 1672,
        height: 941,
        alt: "Warm editorial illustration: a developer at a wooden desk assembling wooden blocks marked with code and gear symbols, surrounded by blueprints, a brass instrument and books. Conceptual AI-generated artwork, not a product screenshot.",
        caption: "MAI Code 2 — original editorial illustration (conceptual, AI-generated).",
        description: "MAI Code 2 — original editorial illustration (conceptual, AI-generated).",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "task-matched-coding",
        caption: "Task-matched coding: a classifier sends routine work to MAI Code 2 Flash and complex work to MAI Code 2, and tests check both.",
      },
      source: {
        heading: "Story 2 — Microsoft / GitHub MAI Code 2",
        body: "Primary source: the GitHub changelog (November 17). Plan eligibility differs by model. Performance and cost comparisons are **Microsoft-reported**.",
        links: [
          {
            label: "GitHub changelog: MAI Code 2 and MAI Code 2 Flash in GitHub Copilot",
            href: "https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/",
          },
        ],
      },
    },
    {
      rank: 3,
      id: "copilot-evals",
      date: "2026-11-17",
      headline: "Copilot Evals — evidence for agent reliability",
      posterHeadline: "Copilot Evals: evidence for agent reliability",
      status: "Public preview for Copilot Individual, Business and Enterprise",
      type: "Evaluation / agent tooling",
      audienceTags: ["Developers", "Agents"],
      whatHappened: [
        "GitHub announced a public preview of Copilot Evals: repeatable tests for skills, custom agents and MCP tools in a Copilot setup. An eval checks both the result and the path the agent took, and you can compare runs before and after a change. It runs in VS Code, the Copilot CLI and the GitHub Copilot app.",
      ],
      realWorldExample: "A platform team can regression-test an agent after changing a tool or prompt.",
      developerTakeaway:
        "**Weekend prototype:** build a public demo of an agent scorecard — completion, intervention, traceability and regressions.",
      leadImage: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-11-22/04-copilot-evals-editorial.webp",
        width: 1672,
        height: 941,
        alt: "Warm editorial illustration: a small robot under a glass dome working on a laptop, surrounded by test tubes, a balance scale, a rising bar chart, a row of icon tiles and a clipboard checklist. Conceptual AI-generated artwork, not a product screenshot.",
        caption: "Copilot Evals — original editorial illustration (conceptual, AI-generated).",
        description: "Copilot Evals — original editorial illustration (conceptual, AI-generated).",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "agent-eval-loop",
        caption: "Agent evaluation loop: test suite, agent run, trace of result and path, expected versus observed, then a before/after comparison.",
      },
      source: {
        heading: "Story 3 — GitHub Copilot Evals",
        body: "Primary source: the GitHub changelog (November 17). This is a **public preview**, not general availability; GitHub has not published pricing or a CI merge-gate integration for it.",
        links: [
          {
            label: "GitHub changelog: GitHub Copilot Evals is now in public preview",
            href: "https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview/",
          },
        ],
      },
    },
    {
      rank: 4,
      id: "genie-4",
      date: "2026-11-18",
      additionalDates: ["2026-11-19"],
      headline: "Genie 4 — editable, interactive AI worlds",
      posterHeadline: "Genie 4: editable, interactive AI worlds",
      status: "Project Genie for Google AI Ultra (Nov 18); Gemini API paid tier and AI Studio (Nov 19)",
      type: "World models / interactive media",
      audienceTags: ["Creators", "Developers"],
      whatHappened: [
        "Google made Genie 4 available in Project Genie on November 18 and to developers through the Gemini API on November 19. It generates interactive worlds from a prompt or reference image that can be steered and edited in real time, with native audio.",
        "Google notes limits in physical fidelity and long-term persistence. Genie 4 was first announced on October 27 as a research preview; this week is the availability step.",
      ],
      realWorldExample: "Designers can prototype interactive spaces before building conventional 3D assets.",
      developerTakeaway:
        "**Weekend prototype:** build a guided interactive learning scene with user controls and clear simulated-content labelling.",
      leadImage: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-11-22/05-genie-4-editorial.webp",
        width: 1672,
        height: 941,
        alt: "Warm editorial illustration: a hand placing a stone arch on a detailed miniature world on a desk, with a hilltop castle, cottages, a waterfall and a stone bridge, beside a compass and rolled maps. Conceptual AI-generated artwork, not a product screenshot.",
        caption: "Genie 4 — original editorial illustration (conceptual, AI-generated).",
        description: "Genie 4 — original editorial illustration (conceptual, AI-generated).",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "interactive-world-flow",
        caption: "Interactive world flow: a prompt or reference image becomes a world state that users steer with controls, edited in real time with native audio.",
      },
      source: {
        heading: "Story 4 — Google DeepMind Genie 4",
        body: "Primary sources: Google's November 18 Project Genie post and November 19 Gemini API post. Developer access needs a **paid-tier Gemini API key**; Project Genie is for Google AI Ultra subscribers. Limitations are as Google describes them.",
        links: [
          {
            label: "Google: Genie 4 is now available in Project Genie",
            href: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/",
          },
          {
            label: "Google: Genie 4 in the Gemini API",
            href: "https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/",
          },
        ],
      },
    },
    {
      rank: 5,
      id: "gemini-4-neon",
      date: "2026-11-18",
      headline: "Gemini 4 Neon — fast frontier-level multimodal work",
      posterHeadline: "Gemini 4 Neon: fast frontier-level multimodal work",
      status: "Gemini API in AI Studio, Gemini for business, Gemini app and Antigravity (Pro and Ultra)",
      type: "Multimodal models",
      audienceTags: ["Developers", "Knowledge work"],
      whatHappened: [
        "Google introduced Gemini 4 Neon, emphasizing fast end-to-end work across software engineering, knowledge work and science workflows, with a one-million-token context window and configurable thinking levels. It sits between the faster Hydrogen and the deeper-reasoning Carbon.",
      ],
      realWorldExample: "An analyst can combine documents, tables and charts into a checked briefing.",
      developerTakeaway:
        "**Weekend prototype:** build a document-to-decision pipeline with citations and source-grounded verification.",
      leadImage: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-11-22/06-gemini-4-neon-editorial.webp",
        width: 1672,
        height: 941,
        alt: "Warm editorial illustration: a glass prism on a desk surrounded by floating cards showing a mountain photo, an audio waveform, a diagram, sketches, a film strip and paint swatches. Conceptual AI-generated artwork, not a product screenshot.",
        caption: "Gemini 4 Neon — original editorial illustration (conceptual, AI-generated).",
        description: "Gemini 4 Neon — original editorial illustration (conceptual, AI-generated).",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "grounded-briefing",
        caption: "Grounded briefing: documents, tables and media go to the model, which answers with citations that a human checks.",
      },
      source: {
        heading: "Story 5 — Google Gemini 4 Neon",
        body: "Primary source: Google's November 18 announcement. Benchmark rankings and speed comparisons are **Google-reported**.",
        links: [
          {
            label: "Google: Introducing Gemini 4 Neon",
            href: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/",
          },
        ],
      },
    },
    {
      rank: 6,
      id: "ai-chip-design",
      date: "2026-11-18",
      headline: "AI-assisted chip design — AI enters hardware engineering",
      posterHeadline: "AI-assisted chip design: AI enters hardware engineering",
      status: "Research publication; results reported by OpenAI",
      type: "Hardware / EDA",
      audienceTags: ["Engineering"],
      whatHappened: [
        "OpenAI described how its models are improving chip designs: circuit optimizations in its own Jalapeño inference chip, a collaboration with AMD that OpenAI says found up to 14% power-performance-area gains on AMD's flagship GPU IP by rewriting SystemVerilog RTL, and a new RISC-V evaluation comparing model generations.",
        "OpenAI says AMD included some model-generated changes in a design sent for manufacturing. These are engineer-verified research collaborations, not fully autonomous chip production.",
      ],
      realWorldExample:
        "Hardware engineers can treat model-generated suggestions as candidates to test with simulation and formal tools.",
      developerTakeaway:
        "**Weekend prototype:** build a reproducible HDL-assistant evaluation harness that checks synthesis, simulation and functional equivalence.",
      visual: {
        kind: "coded-diagram",
        diagram: "chip-design-loop",
        caption: "Chip-design loop: specification, candidate RTL, simulation, formal and equivalence checks, then engineer review.",
      },
      source: {
        heading: "Story 6 — OpenAI Advancing chip design with our models",
        body: "Primary source: OpenAI's November 18 post. The **14% figure and the manufacturing note are OpenAI-reported**; changes were verified with EDA tools, and the RISC-V results are OpenAI's own evaluation.",
        links: [
          {
            label: "OpenAI: Advancing chip design with OpenAI models",
            href: "https://openai.com/index/advancing-chip-design-with-our-models/",
          },
        ],
      },
    },
  ],
  buildLab: {
    id: "build-or-skip-lab",
    eyebrow: "New feature",
    heading: "The Build-or-Skip Lab",
    intro:
      "Instead of just reading the news, choose a path and see what to build this weekend: a project brief, a three-step outline and one success metric.",
    paths: [
      {
        id: "student",
        label: "Student",
        project: "Agent reliability scorecard using synthetic tasks",
        brief: "Score an agent on a fixed set of synthetic tasks so its failures are reproducible, not anecdotal.",
        steps: [
          "Write 10–20 synthetic tasks, each with a known correct outcome.",
          "Run the agent on every task and log each step, retry and human correction.",
          "Score completion, interventions and traceability, then re-run after any prompt or tool change.",
        ],
        metric: "Pass rate and reproducible failures",
      },
      {
        id: "developer",
        label: "Developer",
        project: "Tiered model router for code maintenance",
        brief: "Send routine fixes to a fast model and repository-wide changes to a stronger one, and measure what that saves.",
        steps: [
          "Collect real maintenance tasks from one repository, each with tests the model cannot see.",
          "Classify each task as routine or complex and route it to a fast or a stronger model.",
          "Run the tests and record cost, retries and pass/fail for every task.",
        ],
        metric: "Cost per passing task",
      },
      {
        id: "creator",
        label: "Creator",
        project: "Interactive educational world prototype",
        brief: "Build a short interactive learning scene that teaches one idea, with simulated content clearly labelled.",
        steps: [
          "Choose one learning goal and script the scene that teaches it.",
          "Build the scene with user controls, labelling all simulated content.",
          "Test it with a few people and note where navigation or consistency breaks.",
        ],
        metric: "Navigation coherence and user feedback",
      },
    ],
    challenge:
      "Pick a task you currently do manually. Run it 10 times with your current workflow and 10 times with an AI-assisted workflow. Record completed tasks, corrections and total time. Publish what failed — not only what worked.",
    checklist: {
      href: "/ssk-ai/2026-11-22/build-or-skip-checklist.md",
      label: "Download the challenge checklist",
      fileName: "ssk-ai-build-or-skip-checklist.md",
    },
  },
  closingSections: [
    {
      id: "before-you-integrate",
      eyebrow: "Developer takeaway",
      heading: "Before you integrate any of these",
      body: [
        "Every release this week points to the same test: does it improve a complete task under realistic constraints — not merely a convincing demo?",
        "Capture baseline task success, latency, failure types, human corrections and costs before you integrate a new capability, and test the exact product version and access tier available to your team.",
      ],
    },
    {
      id: "bigger-picture",
      eyebrow: "The bigger picture",
      heading: "Model → tool use → evidence → action",
      body: [
        "Fast models lower operating costs, frontier models tackle difficult steps, world models add interactivity, and evaluations make the whole workflow auditable.",
      ],
      diagram: {
        id: "working-system",
        caption: "The working-system pattern: a model uses tools, produces evidence, and only then takes action.",
      },
    },
    {
      id: "what-to-watch",
      eyebrow: "What to watch next",
      heading: "Open questions",
      body: [],
      options: [
        { label: "Evals as release gates:", text: "will agent evaluations become standard checks before shipping?" },
        { label: "Persistent worlds:", text: "can interactive worlds stay consistent over long sessions?" },
        {
          label: "Reproducible hardware gains:",
          text: "will model-assisted chip design deliver repeatable improvements across different chips?",
        },
      ],
      after: ["These are open questions, not proven outcomes."],
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "From AI Models to Working Systems",
    dateLabel: "November 15–21, 2026",
    headlines: [
      "GPT-6.2 Astra & Sol: coding, computer use and reliable agents",
      "MAI Code 2: task-matched coding models",
      "Copilot Evals: evidence for agent reliability",
      "Genie 4: editable, interactive AI worlds",
      "Gemini 4 Neon: fast frontier-level multimodal work",
      "AI-assisted chip design: AI enters hardware engineering",
    ],
    theme: "Act • Evaluate • Build worlds • Engineer",
  },
  generalSourceNote:
    "Source review: November 21–22, 2026, after the November 15–21 window closed. This is a curated briefing of six developments, not a complete launch calendar. Benchmark, speed, price and result figures are company-reported, not independent measurements; no hands-on test was conducted. Real-world examples, weekend prototypes and the Build-or-Skip Lab are editorial proposals. Considered but left out: Gemini 4 Hydrogen (launched November 12; covered in the November 8–14 edition), GPT-Live-1.1 API updates (November 19), Gemini on lower-memory Android devices (November 18), Microsoft Ignite Agent 365 / Perception (November 17), GitHub Copilot code-review secret detection (November 17) and GitHub Copilot connectors (November 18). The banner is original AI-generated editorial artwork, not a product screenshot.",
};

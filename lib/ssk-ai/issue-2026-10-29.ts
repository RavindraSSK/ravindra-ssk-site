import type { SskAiIssue, SskAiStory } from "./types";

/**
 * Editorial source: the SSK AI Hub October 22–28, 2026 handoff package
 * (01-website-article.md, qualified against 02-source-notes.md). A deliberately
 * short edition: each story carries the update, a proposed example and a short
 * take, so the optional analysis, applications and before/change/result blocks
 * are left out. Coverage is October 22–28 inclusive; the edition is dated
 * October 29 and October 29–31 news is left to the next edition and the monthly review.
 */

const IMG = "/ssk-ai/2026-10-29";
const ILLUSTRATION = "Original AI-generated conceptual editorial illustration.";

function storyImage(file: string, alt: string, height = 941): NonNullable<SskAiStory["visual"]> {
  return {
    kind: "editorial-image",
    src: `${IMG}/${file}`,
    width: 1672,
    height,
    alt,
    caption: ILLUSTRATION,
    description: "Original SSK AI Hub editorial illustration for this story — conceptual artwork, not a product screenshot or measured result.",
  };
}

const COVER_ALT =
  "SSK AI Hub October 22–28, 2026 cover with a free-form collage of eight AI news scenes and the existing SSK monogram.";

export const issueOctober29_2026: SskAiIssue = {
  slug: "ai-technology-updates-october-29-2026",
  edition: {
    kind: "weekly",
    number: 12,
    volume: 1,
    periodStart: "2026-10-22",
    periodEnd: "2026-10-28",
    periodLabel: "October 22–28, 2026",
  },
  datePublished: "2026-10-29",
  dateLabel: "October 29, 2026",
  cardTitle: "SSK AI: Smaller Models, Bigger Worlds",
  title: "SSK AI — What Changed in AI & What You Can Build | October 29, 2026",
  heading: "Smaller Models, Bigger Worlds: 8 AI Updates Worth Your Time",
  seoTitle: "AI News October 22–28, 2026: Terra, Carbon and Local AI",
  seoDescription:
    "Eight selected AI updates: GPT-6.1 Terra, Gemini 4 Carbon, Genie 4, Copilot Fusion, Canva Craft, Bolt E4B, LFM3 and portable Agent Skills.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "A more affordable work model, an assistant on your own device, a world you can explore as it is generated — plus tools that choose models, generate designs and carry reusable workflows between agents.",
  hero: {
    kind: "editorial-image",
    src: `${IMG}/00-cover-website-linkedin.webp`,
    width: 1672,
    height: 941,
    alt: COVER_ALT,
    caption: "October Week 4: eight selected updates. Original AI-generated conceptual editorial artwork.",
    description: "Original SSK AI Hub editorial cover for the October 22–28, 2026 edition — conceptual artwork, not an official product asset.",
  },
  socialImage: {
    src: `${IMG}/00-cover-social-1200x630.webp`,
    width: 1200,
    height: 630,
    alt: COVER_ALT,
  },
  visualPlacement: "lead",
  storyLabels: {
    happened: "The update",
    example: "Picture this — a proposed example",
    takeaway: "My take — SSK AI Hub analysis",
  },
  readingListLabels: { title: "Pick your lane", detail: "Lane" },
  opening: [
    "What would you try first: a more affordable work model, an assistant running on your own device, or a world you can explore as it is generated? October's fourth week brought all three, alongside tools that choose models, generate designs and carry reusable workflows between agents. Here are eight selected updates, with a practical example and a short SSK AI Hub take.",
    "Examples and the weekend exercise are proposals, not tests we have conducted. Product capabilities and availability are attributed to the original publishers.",
    "Source review: October 29, 2026, 11:38 a.m. in America/Chicago, after the October 22–28 window closed. October 29–31 news and the monthly review belong elsewhere.",
  ],
  relatedReading: [
    "Catch up on the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-october-22-2026", label: "October 15–21 briefing" },
    ", or browse every edition on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    { storyId: "gpt-6-1-terra", development: "GPT-6.1 Terra: lower-cost computer work", announced: "October 26", question: "Work AI" },
    { storyId: "gemini-4-carbon", development: "Gemini 4 Carbon: trusted cyber defenders first", announced: "October 28", question: "Work AI" },
    { storyId: "genie-4", development: "Genie 4: explorable worlds", announced: "October 27", question: "Creative worlds and design" },
    { storyId: "copilot-fusion", development: "Copilot Fusion: model routing", announced: "October 28", question: "Work AI" },
    { storyId: "canva-craft", development: "Canva Craft: plan, then render", announced: "October 22", question: "Creative worlds and design" },
    { storyId: "nemotron-bolt-e4b", development: "NVIDIA Bolt E4B: compact local agents", announced: "October 23", question: "Local AI" },
    { storyId: "liquid-lfm3", development: "Liquid LFM3: specialized local models", announced: "October 27", question: "Local AI" },
    { storyId: "agent-skills-aaif", development: "Agent Skills: moves to the Agentic AI Foundation", announced: "October 22", question: "Reusable workflows" },
  ],
  stories: [
    {
      rank: 1,
      id: "gpt-6-1-terra",
      date: "2026-10-26",
      headline: "GPT-6.1 Terra makes everyday computer work cheaper to try",
      posterHeadline: "GPT-6.1 Terra makes computer work cheaper to try",
      status: "Available in the API, ChatGPT Work and Codex; account and workspace eligibility apply",
      type: "Models / computer use",
      audienceTags: ["Work AI"],
      whatHappened: [
        "OpenAI released GPT-6.1 Terra for visual reasoning, computer use and writing. Standard API rates are $1 per million input tokens and $5 per million output tokens. In ChatGPT it is offered in Work and Codex; API billing is separate from a subscription.",
        "Sources: [OpenAI announcement](https://openai.com/index/introducing-gpt-6-1-terra/) · [Dated release and availability notes](https://help.openai.com/en/articles/9624314-model-release-notes)",
      ],
      realWorldExample:
        "Try extracting fields from ten fictional invoices. Check the final entries, repair time and total token usage before comparing it with your current model.",
      developerTakeaway: [
        "A lower token price helps when the finished work holds up. Count retries and corrections as part of the cost.",
        "**A quick cost example:** Example budget: 2 million uncached input tokens plus 200,000 output tokens cost $3 at the listed standard text-token rates, before tool fees or other charges. This is arithmetic, not a measured task cost.",
      ],
      visual: storyImage(
        "story-01-gpt-6-1-terra.webp",
        "Conceptual laptop and blue work engine processing blank documents, with a copper drafting compass and hourglass.",
      ),
      source: {
        heading: "Story 1 — OpenAI GPT-6.1 Terra",
        body: "Primary sources: OpenAI's announcement and its dated model release notes (October 26 release). It is **not** in the regular Chat tab, and API usage is not included in a ChatGPT subscription. The $3 example uses **standard uncached** text-token prices (2 × $1 + 0.2 × $5 = $3) and excludes cached pricing, service tiers, tools, retries beyond the stated totals and other charges; it is not a cost-per-task claim.",
        links: [
          { label: "OpenAI: Introducing GPT-6.1 Terra", href: "https://openai.com/index/introducing-gpt-6-1-terra/" },
          { label: "OpenAI: Model release notes", href: "https://help.openai.com/en/articles/9624314-model-release-notes" },
        ],
      },
    },
    {
      rank: 2,
      id: "gemini-4-carbon",
      date: "2026-10-28",
      headline: "Gemini 4 Carbon starts with trusted cyber defenders",
      posterHeadline: "Gemini 4 Carbon starts with trusted defenders",
      status: "Restricted initial access for cyber defenders and trusted partners; broad availability is future",
      type: "Frontier models / software security",
      audienceTags: ["Work AI"],
      whatHappened: [
        "Google announced Gemini 4 Carbon with a focus on software security and sustained engineering work. Initial access is going to a subset of cyber defenders, followed by trusted partners through Fairwind. Wider access for developers, businesses and consumers remains planned.",
        "Source: [Google's Carbon announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)",
      ],
      realWorldExample:
        "If you receive access, use an authorized test repository with known flaws. Ask for findings, supporting evidence and a patch that passes the existing tests.",
      developerTakeaway:
        "A security model needs to explain a finding and help verify the repair. Compare completed, checked fixes rather than headline rankings.",
      visual: storyImage(
        "story-02-gemini-4-carbon.webp",
        "Conceptual dark faceted carbon crystal with a protective arc and a repaired geometric tile on a white research desk.",
      ),
      source: {
        heading: "Story 2 — Google Gemini 4 Carbon",
        body: "Primary source: Google's October 28 announcement. This is **not** a general consumer or API launch — initial access is restricted. Benchmark rankings and broad security guarantees are deliberately left out, and Carbon is a different model from the earlier Gemini 4 Argon rollout.",
        links: [
          {
            label: "Google: Introducing Gemini 4 Carbon",
            href: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
          },
        ],
      },
    },
    {
      rank: 3,
      id: "genie-4",
      date: "2026-10-27",
      headline: "Genie 4 turns a scene into something you can explore",
      posterHeadline: "Genie 4 turns a scene into a world to explore",
      status: "Research preview for trusted testers; broader access and waitlist described",
      type: "World models / creative research",
      audienceTags: ["Creative worlds and design"],
      whatHappened: [
        "DeepMind introduced Genie 4, a world model for interactive simulation with native audio and live steering. It is a trusted-tester research preview. Google explicitly notes that object permanence, physical interactions and longer-session consistency remain limitations.",
        "Source: [DeepMind's Genie 4 preview](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)",
      ],
      realWorldExample:
        "With preview access, explore a small scene, move an object, leave and return. Check whether its position and the surrounding world stay consistent.",
      developerTakeaway:
        "An explorable scene could be useful for prototyping. The important test is how well it preserves the details you need as you interact.",
      visual: storyImage(
        "story-03-genie-4-worlds.webp",
        "Conceptual portal containing a coastal miniature world, with an unbranded controller and acoustic ripple forms.",
      ),
      source: {
        heading: "Story 3 — DeepMind Genie 4",
        body: "Primary source: DeepMind's October 27 announcement. This is a **trusted-tester preview**, not universal access and not a validated physics simulator; consumer and Ultra expansion is upcoming. Sound, steering and consistency are **vendor-described** capabilities.",
        links: [
          {
            label: "DeepMind: Genie 4, a new generation of world simulation",
            href: "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
          },
        ],
      },
    },
    {
      rank: 4,
      id: "copilot-fusion",
      date: "2026-10-28",
      headline: "Copilot Fusion brings model routing into the coding workflow",
      posterHeadline: "Copilot Fusion brings model routing to coding",
      status: "Core routing generally available; local-model routing is a separate opt-in experimental preview",
      type: "Developer tools / model routing",
      audienceTags: ["Work AI"],
      whatHappened: [
        "GitHub made Copilot Fusion generally available. It can use one model, escalate a draft after a quality check, or have another model critique it. A separate local-model routing feature is experimental; its routing decisions still run in the cloud.",
        "Sources: [GitHub's Fusion release](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/) · [Local routing preview and limits](https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models/)",
      ],
      realWorldExample:
        "Give it a small bug with a failing test. Compare effort settings using the same task, recording whether the fix passes and what the session costs.",
      developerTakeaway:
        "Routing becomes useful when it improves the balance between success, time and spend. Check the result and the bill together.",
      visual: storyImage(
        "story-04-copilot-fusion.webp",
        "Conceptual blue routing sculpture joining differently sized model cores above a laptop and finished document.",
      ),
      source: {
        heading: "Story 4 — GitHub Copilot Fusion",
        body: "Primary sources: GitHub's two October 28 changelog entries. **Core routing is generally available; local-model routing is experimental** and is a separate status. Local inference does not make the session offline. Model policies, client eligibility and billing rules still apply, and no independent savings claim is made.",
        links: [
          {
            label: "GitHub changelog: Route and orchestrate models with Copilot Fusion",
            href: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/",
          },
          {
            label: "GitHub changelog: Copilot Fusion supports selection of local models",
            href: "https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models/",
          },
        ],
      },
    },
    {
      rank: 5,
      id: "canva-craft",
      date: "2026-10-22",
      headline: "Canva Craft plans the composition before rendering the picture",
      posterHeadline: "Canva Craft plans the layout, then renders",
      status: "Available in Dream Lab and through the public API; usage limits and credits apply",
      type: "Creative AI / design",
      audienceTags: ["Creative worlds and design"],
      whatHappened: [
        "Canva launched Craft, its first in-house image-generation model, in Dream Lab and its public API. Canva describes a planning stage followed by rendering, with outputs up to 2K. Craft's Canva MCP connection and faster variants are described as upcoming.",
        "Sources: [Canva's Craft announcement](https://www.canva.com/newsroom/news/canva-craft/) · [Canva developer launch notice](https://community.canva.dev/t/connect-api-canva-craft-is-now-available-for-image-generation/8999)",
      ],
      realWorldExample:
        "Make a fictional event poster with a fixed headline and three required details. Change one detail, then check the wording, spacing and visual hierarchy.",
      developerTakeaway:
        "A useful design tool should make revisions easier. Inspect the text and layout at the size people will actually see.",
      visual: storyImage(
        "story-05-canva-craft.webp",
        "Conceptual design frame with layered blue, teal and violet paper artwork, composition pieces and a pencil.",
        940,
      ),
      source: {
        heading: "Story 5 — Canva Craft",
        body: "Primary sources: Canva's newsroom post and its dated developer launch notice, both October 22 (Canva's research index lists the same post as October 23, a one-day listing difference; the developer notice anchors the date here). The **MCP connection and faster variants are future, not shipped**. No leaderboard or free/unlimited-use claim is made.",
        links: [
          { label: "Canva: Craft announcement", href: "https://www.canva.com/newsroom/news/canva-craft/" },
          {
            label: "Canva developers: Craft is now available for image generation",
            href: "https://community.canva.dev/t/connect-api-canva-craft-is-now-available-for-image-generation/8999",
          },
        ],
      },
    },
    {
      rank: 6,
      id: "nemotron-bolt-e4b",
      date: "2026-10-23",
      headline: "NVIDIA Bolt E4B targets compact conversational agents",
      posterHeadline: "NVIDIA Bolt E4B targets compact local agents",
      status: "Open model release for compatible devices; target-workload memory claim is qualified",
      type: "Local AI / conversational agents",
      audienceTags: ["Local AI"],
      whatHappened: [
        "NVIDIA released Nemotron 3.5 Bolt E4B 4GB for conversational agents and multi-turn tool use. NVIDIA targets compatible local devices and describes workloads using as little as about 4GB. Actual memory needs depend on the runtime, context and application.",
        "Sources: [NVIDIA's dated Bolt E4B release](https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/) · [Official checkpoint and model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)",
      ],
      realWorldExample:
        "On supported hardware, test a short assistant flow with one tool and a correction. Measure responsiveness and peak memory with your intended context length.",
      developerTakeaway:
        "A small model is useful when the whole application fits and responds well. Include the surrounding software in your memory budget.",
      visual: storyImage(
        "story-06-nemotron-bolt-e4b.webp",
        "Conceptual compact green-lit compute module beside a small local computer and speaker on a white desk.",
      ),
      source: {
        heading: "Story 6 — NVIDIA Nemotron 3.5 Bolt E4B",
        body: "Primary sources: NVIDIA's dated release page (October 23 checkpoint release) and the official Hugging Face model card. This is distinct from October 15's 24GB Bolt model and October 21's preview. The roughly **4GB figure is vendor-described for target workloads**, not a guarantee of total memory on every device.",
        links: [
          {
            label: "NVIDIA: Nemotron 3.5 Bolt E4B 4GB",
            href: "https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/",
          },
          { label: "Hugging Face: model card", href: "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB" },
        ],
      },
    },
    {
      rank: 7,
      id: "liquid-lfm3",
      date: "2026-10-27",
      headline: "LFM3 offers several ways to build specialized local AI",
      posterHeadline: "LFM3 offers several paths to specialized local AI",
      status: "Model family introduced with downloadable weights; capabilities, runtimes and terms vary by model",
      type: "Local AI / multimodal models",
      audienceTags: ["Local AI"],
      whatHappened: [
        "Liquid AI introduced LFM3, a family spanning text, vision, audio, combined modalities and structured decisions, mostly around the 2B-parameter range. Its company-authored release explains how different variants serve different inputs. Model size alone does not establish total runtime memory or task reliability.",
        "Sources: [Liquid AI's authored release on Hugging Face](https://huggingface.co/blog/LiquidAI/lfm3) · [LFM3 text model card and terms](https://huggingface.co/LiquidAI/LFM3-1.7B)",
      ],
      realWorldExample:
        "Choose one narrow job, such as extracting fields from fictional receipts. Pick the matching model and test blurred images, missing fields and unfamiliar layouts.",
      developerTakeaway:
        "Start with the input and answer format your application needs. A focused comparison can be more informative than a single overall score.",
      visual: storyImage(
        "story-07-liquid-lfm3.webp",
        "Conceptual blue droplet-shaped compute core beside a phone, camera lens, microphone and simple document cards.",
      ),
      source: {
        heading: "Story 7 — Liquid AI LFM3",
        body: "Primary sources: Liquid AI's company-authored release on Hugging Face (explicitly dated October 27) and the LFM3 text model card. Liquid's main blog was too large to retrieve, so the Hugging Face article is the publication source. These are **open-weight** models, not unrestricted open source — check each model's exact terms and runtime requirements. Compressed weight size is not a total-memory claim, and selected benchmarks are not universal superiority.",
        links: [
          { label: "Liquid AI: LFM3 on Hugging Face", href: "https://huggingface.co/blog/LiquidAI/lfm3" },
          { label: "Hugging Face: LFM3-1.7B model card and terms", href: "https://huggingface.co/LiquidAI/LFM3-1.7B" },
        ],
      },
    },
    {
      rank: 8,
      id: "agent-skills-aaif",
      date: "2026-10-22",
      headline: "Agent Skills moves to the Agentic AI Foundation",
      posterHeadline: "Agent Skills moves to the Agentic AI Foundation",
      status: "Governance transfer of an existing standard; support still depends on the host",
      type: "Agent workflows / open standards",
      audienceTags: ["Reusable workflows"],
      whatHappened: [
        "Anthropic donated the Agent Skills standard to the Agentic AI Foundation under the Linux Foundation. A skill packages instructions and supporting material around a SKILL.md file. This is a governance change for an existing standard, rather than the first release of skills.",
        "Source: [Anthropic's AAIF announcement](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)",
      ],
      realWorldExample:
        "Write a small skill for reviewing project updates. Try it in two supported tools, checking required files, available capabilities and the resulting output.",
      developerTakeaway:
        "Portable instructions can reduce repeated setup. Keep the workflow's assumptions visible because different hosts can offer different tools and permissions.",
      visual: storyImage(
        "story-08-agent-skills-aaif.webp",
        "Conceptual open workflow folder marked SKILL.md with reusable instruction cards connecting several small devices.",
      ),
      source: {
        heading: "Story 8 — Agent Skills and the Agentic AI Foundation",
        body: "Primary source: Anthropic's October 22 announcement. The standard **existed before this week**; this is a governance transfer. A donation does not guarantee identical behavior, tool access or security across hosts.",
        links: [
          {
            label: "Anthropic: Donating Agent Skills to the Agentic AI Foundation",
            href: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
          },
        ],
      },
    },
  ],
  closingSections: [
    {
      id: "weekend-experiment",
      eyebrow: "Try it",
      heading: "One small experiment for the weekend",
      body: [
        "**Find the least expensive setup that finishes your task correctly.**",
        "Choose five fictional receipts or one small coding bug with a known expected result. Try two models or two effort settings you already have access to. Keep the inputs and success checks the same.",
        "Record correct completions, retries, elapsed time and actual usage charges where available. For a local model, also note peak memory. Keep these measurements separate: token price, device memory and cost per successful task answer different questions.",
        "This is a proposed learning exercise. No model comparison or performance result is claimed by this briefing.",
      ],
    },
    {
      id: "reader-poll",
      eyebrow: "Your turn",
      heading: "Which would you try first?",
      body: [],
      options: [
        { label: "A — Lower-cost work AI:", text: "a practical task with a clear budget." },
        { label: "B — Local AI:", text: "a narrow assistant on hardware you control." },
        { label: "C — Creative worlds and design:", text: "a scene or visual you can refine." },
        { label: "D — Reusable workflows:", text: "a skill you can carry between supported agents." },
      ],
      after: [
        "Comment with a letter and the first task you would try. Share what you would check before calling it a success.",
      ],
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "October 29, 2026",
    headlines: [
      "GPT-6.1 Terra makes computer work cheaper to try",
      "Gemini 4 Carbon starts with trusted defenders",
      "Genie 4 turns a scene into a world to explore",
      "Copilot Fusion brings model routing to coding",
      "Canva Craft plans the layout, then renders",
      "NVIDIA Bolt E4B targets compact local agents",
      "LFM3 offers several paths to specialized local AI",
      "Agent Skills moves to the Agentic AI Foundation",
    ],
    theme: "Smaller models, bigger worlds: 8 updates worth your time.",
  },
  generalSourceNote:
    "Source review: October 29, 2026, 11:38 a.m. America/Chicago, after the October 22–28 window closed. This is a curated briefing of eight stories, not a complete launch calendar. Vendor capability, memory and pricing descriptions are not independent measurements; no hands-on benchmark was conducted. The $3 GPT-6.1 Terra figure is arithmetic on standard uncached text-token rates for a hypothetical budget, excluding tools and other charges. The examples, the weekend exercise and the reader prompt are editorial proposals. Left out on purpose: earlier releases such as Gemini 4 Argon's broader access, ChatGPT Slides, Voxtral 3, DeepInfer, OpenShell and the prior quantum and biology studies, which belong to previous editions. The illustrations are original AI-generated editorial concepts, not product screenshots or measured results.",
};

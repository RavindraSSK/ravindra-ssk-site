import type { SskAiIssue, SskAiStory } from "./types";

/**
 * Editorial source: the SSK AI Hub October 15–21, 2026 handoff package
 * (01-website-article.md, qualified against 02-source-notes.md). A deliberately
 * short edition: each story carries the update, a short "why it matters" and a
 * proposed "try this", so the optional analysis, applications and
 * before/change/result blocks are left out. Coverage is October 15–21 inclusive;
 * the edition is dated October 22 and October 22 events are left for the next one.
 *
 * Block labels are remapped for this edition: the story's `realWorldExample` slot
 * carries "Why it matters" and its `developerTakeaway` slot carries "Try this", so
 * the on-page order matches the supplied article without a component change.
 */

const IMG = "/ssk-ai/2026-10-22";
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

const COVER_ALT = "SSK AI Hub October 15–21, 2026 briefing cover with a free-form collage of seven AI story scenes.";

export const issueOctober22_2026: SskAiIssue = {
  slug: "ai-technology-updates-october-22-2026",
  edition: {
    kind: "weekly",
    number: 11,
    volume: 1,
    periodStart: "2026-10-15",
    periodEnd: "2026-10-21",
    periodLabel: "October 15–21, 2026",
  },
  datePublished: "2026-10-22",
  dateLabel: "October 22, 2026",
  cardTitle: "SSK AI: From Slides to Science",
  title: "SSK AI — What Changed in AI & What You Can Build | October 22, 2026",
  heading: "From Slides to Science: 7 AI Updates Worth Your Time",
  seoTitle: "AI News October 15–21, 2026: 7 Useful Updates",
  seoDescription:
    "Seven selected AI updates: ChatGPT Slides, Gemini in cars, Voxtral 3, DeepInfer, OpenShell and AI research in quantum circuits and biology.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "Practical tools alongside research that shows how much a good evaluator matters: editable slides, a car assistant with context, a voice agent that finishes a task.",
  hero: {
    kind: "editorial-image",
    src: `${IMG}/00-cover-website-linkedin.webp`,
    width: 1672,
    height: 941,
    alt: COVER_ALT,
    caption: "October Week 3: seven selected updates. Original AI-generated conceptual editorial artwork.",
    description: "Original SSK AI Hub editorial cover for the October 15–21, 2026 edition — conceptual artwork, not an official product asset.",
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
    example: "Why it matters",
    takeaway: "Try this",
  },
  readingListLabels: { title: "Pick your lane", detail: "Lane" },
  opening: [
    "A presentation you can keep editing. A car assistant with useful context. A voice agent that can finish a task. This week brought practical tools alongside research that shows how much a good evaluator matters. Here are seven updates worth a few minutes, with one concrete question to ask about each.",
    "Company claims stay attributed to their publishers, and rollout, eligibility, hardware and research qualifiers are kept with each story. The “Try this” suggestions are proposals, not tests we have conducted.",
    "Source review: October 21, 2026, 5:37 p.m. in America/Chicago. The reporting window ends October 21; October 22 news is left for the next edition.",
  ],
  relatedReading: [
    "Catch up on the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-october-15-2026", label: "October 8–14 briefing" },
    ", or browse every edition on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    { storyId: "chatgpt-slides", development: "ChatGPT Slides: shared presentations", announced: "October 16", question: "Get work done" },
    { storyId: "gemini-personal-intelligence-car", development: "Gemini in the car: personal context", announced: "October 20", question: "Get work done" },
    { storyId: "mistral-voxtral-3", development: "Voxtral 3: voice agents", announced: "October 20", question: "Make something" },
    { storyId: "deepseek-deepinfer", development: "DeepInfer: open inference engine", announced: "October 20", question: "Make something" },
    { storyId: "nvidia-openshell", development: "NVIDIA OpenShell: agent boundaries", announced: "October 21", question: "Understand the limits" },
    { storyId: "claude-quantum-circuits", development: "Claude and quantum circuits: a measurable target", announced: "October 16", question: "Understand the limits" },
    { storyId: "biological-reasoning-agents", development: "Thousands of agents on biological data", announced: "October 21", question: "Understand the limits" },
  ],
  stories: [
    {
      rank: 1,
      id: "chatgpt-slides",
      date: "2026-10-16",
      headline: "ChatGPT Slides puts the draft and the edits in one place",
      posterHeadline: "ChatGPT Slides keeps draft and edits together",
      status: "Gradual rollout to eligible Pro, Business and Enterprise users with Space access",
      type: "Everyday AI / presentations",
      audienceTags: ["Get work done"],
      whatHappened: [
        "OpenAI introduced ChatGPT Slides: a shared presentation workspace with direct editing, comments and real-time collaboration. Web exports include PowerPoint, PDF and Google Slides. Access is rolling out to eligible Pro, Business and Enterprise users with Space access.",
        "Source: [OpenAI: ChatGPT release notes — October 16](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)",
      ],
      realWorldExample:
        "The useful test is the second draft: can you fix a title, replace one picture and improve a chart without rebuilding the deck?",
      developerTakeaway:
        "Try a three-slide project update: the problem, what changed and the next step. Check every number against your notes before presenting.",
      visual: storyImage(
        "story-01-chatgpt-slides.webp",
        "Conceptual illustration of a laptop with editable presentation sheets, a pencil and collaboration bubbles.",
      ),
      source: {
        heading: "Story 1 — OpenAI ChatGPT Slides",
        body: "Primary source: OpenAI's October 16 ChatGPT release-note entry. Access is a **gradual rollout** to eligible Pro, Business and Enterprise users with Space access — this edition does not imply access for every ChatGPT plan or every workspace.",
        links: [
          {
            label: "OpenAI: ChatGPT release notes — October 16",
            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
          },
        ],
      },
    },
    {
      rank: 2,
      id: "gemini-personal-intelligence-car",
      date: "2026-10-20",
      headline: "Gemini can bring your personal context into the car",
      posterHeadline: "Gemini brings personal context into the car",
      status: "Opt-in rollout on Android Auto; cars with Google built-in follow in coming months",
      type: "Everyday AI / personal assistants",
      audienceTags: ["Get work done"],
      whatHappened: [
        "Google began rolling out Personal Intelligence on Android Auto, connecting chosen Google apps to tailored answers. Cars with Google built-in follow in coming months. It is opt-in for eligible personal accounts aged 18+, with regional exclusions; Workspace accounts are excluded.",
        "Source: [Google: Personal Intelligence in cars](https://blog.google/products-and-platforms/platforms/android/android-auto-cars-with-google-built-in-gemini-personal-intelligence/)",
      ],
      realWorldExample:
        "Personal context can shorten a request. The important choice is which connected apps an assistant actually needs.",
      developerTakeaway:
        "A useful trial is asking for the location of an upcoming calendar appointment. Check account eligibility and connected-app settings while parked.",
      visual: storyImage(
        "story-02-gemini-personal-intelligence-car.webp",
        "Conceptual parked-car interior with a fictional navigation screen and floating calendar, envelope and map-pin objects.",
      ),
      source: {
        heading: "Story 2 — Google Personal Intelligence in cars",
        body: "Primary source: Google's October 20 announcement. Gemini availability in cars and the newer Personal Intelligence rollout are separate; this edition carries over the **opt-in**, account and **regional** limits, and the Android Auto-first, built-in-later timing.",
        links: [
          {
            label: "Google: Personal Intelligence in cars",
            href: "https://blog.google/products-and-platforms/platforms/android/android-auto-cars-with-google-built-in-gemini-personal-intelligence/",
          },
        ],
      },
    },
    {
      rank: 3,
      id: "mistral-voxtral-3",
      date: "2026-10-20",
      headline: "Mistral’s Voxtral 3 connects a conversation to a useful action",
      posterHeadline: "Voxtral 3 connects a conversation to an action",
      status: "API available; private deployment arrangements and model-specific terms apply",
      type: "Voice AI / developer tools",
      audienceTags: ["Make something"],
      whatHappened: [
        "Mistral released Voxtral 3 speech models and a voice-agent SDK built on LiveKit. Its transcription models cover 50+ languages; speech generation covers 35+ languages and 50+ dialects. The pipeline connects listening, reasoning, tools and spoken replies. API access and self-deployment options are offered.",
        "Source: [Mistral: Voxtral 3](https://mistral.ai/news/voxtral-3/)",
      ],
      realWorldExample:
        "A pleasant voice is one part of the experience. A booking assistant also needs to hear dates correctly and recover when the caller changes the request.",
      developerTakeaway:
        "Test a fictional appointment flow with a corrected name, a date change and an interruption. Measure whether the final booking is right.",
      visual: storyImage(
        "story-03-mistral-voxtral-3.webp",
        "Conceptual glass microphone with orange and blue acoustic ribbons leading to a conversation bubble and appointment tile.",
      ),
      source: {
        heading: "Story 3 — Mistral Voxtral 3",
        body: "Primary source: Mistral's October 20 launch post, also reflected in Mistral's model documentation. **Language coverage differs by model.** This edition does not call the full stack freely downloadable and does not adopt any independently unverified latency claim.",
        links: [{ label: "Mistral: Voxtral 3", href: "https://mistral.ai/news/voxtral-3/" }],
      },
    },
    {
      rank: 4,
      id: "deepseek-deepinfer",
      date: "2026-10-20",
      headline: "DeepSeek opens the engine behind its inference service",
      posterHeadline: "DeepSeek opens the engine behind its service",
      status: "Apache-2.0 offline inference release for DeepSeek-V4.1-Flash; specialized hardware required",
      type: "Open source / inference infrastructure",
      audienceTags: ["Make something"],
      whatHappened: [
        "DeepSeek open-sourced DeepInfer under Apache 2.0. The public engine supports offline inference for DeepSeek-V4.1-Flash on NVIDIA SM100 GPUs or Huawei Ascend 950 NPUs. The repository explicitly lists missing service components, including a KV-cache system and load balancing across replicas.",
        "Source: [DeepSeek: DeepInfer repository](https://github.com/deepseek-ai/DeepInfer)",
      ],
      realWorldExample:
        "Open source creates something to inspect and extend. Running the engine as a dependable service still takes infrastructure work.",
      developerTakeaway:
        "Before planning a deployment, write down the supported accelerator, model and missing service pieces. Compare that list with your actual compute access.",
      visual: storyImage(
        "story-04-deepseek-deepinfer.webp",
        "Conceptual open inference engine with blue compute modules and a transparent mechanical core on a white workbench.",
      ),
      source: {
        heading: "Story 4 — DeepSeek DeepInfer",
        body: "Primary source: the official DeepInfer repository, which confirms the scope and the Apache-2.0 licence. DeepSeek's public announcement on October 20 is corroborated by contemporaneous reporting; the repository creation date is not the public launch date. **No vendor throughput claim is adopted.**",
        links: [
          { label: "DeepSeek: DeepInfer repository", href: "https://github.com/deepseek-ai/DeepInfer" },
          { label: "DeepSeek: public announcement post", href: "https://x.com/deepseek_ai/status/2112476496283775135" },
        ],
      },
    },
    {
      rank: 5,
      id: "nvidia-openshell",
      date: "2026-10-21",
      headline: "NVIDIA OpenShell gives agent boundaries a place in the infrastructure",
      posterHeadline: "OpenShell gives agent boundaries a place",
      status: "Reference architecture available; integrations and deployments vary by partner",
      type: "Agent infrastructure / security",
      audienceTags: ["Understand the limits"],
      whatHappened: [
        "NVIDIA announced the OpenShell Reference Architecture at GTC Berlin. It combines its agent runtime with Vera Rubin inference infrastructure, Vera CPUs for agent harnesses, and BlueField-4 running Sentry for monitoring and policy enforcement. NVIDIA says the reference architecture is available.",
        "Source: [NVIDIA: OpenShell Reference Architecture](https://nvidianews.nvidia.com/news/openshell-reference-architecture)",
      ],
      realWorldExample:
        "An agent’s permissions need enforcement outside the model. An instruction in a prompt is only one layer of control.",
      developerTakeaway:
        "For a file-organizing agent, define an allowed folder, a blocked folder and a stop action. Check that the runtime enforces each boundary.",
      visual: storyImage(
        "story-05-nvidia-openshell.webp",
        "Conceptual protected agent core inside a transparent containment shell, with an external permission key and control switch.",
      ),
      source: {
        heading: "Story 5 — NVIDIA OpenShell Reference Architecture",
        body: "Primary source: NVIDIA's October 21 architecture announcement. The OpenShell runtime existed earlier; this is its **reference-architecture expansion**. Availability is **vendor-stated**, not proof of every partner integration.",
        links: [
          {
            label: "NVIDIA: OpenShell Reference Architecture",
            href: "https://nvidianews.nvidia.com/news/openshell-reference-architecture",
          },
        ],
      },
    },
    {
      rank: 6,
      id: "claude-quantum-circuits",
      date: "2026-10-16",
      headline: "Claude helps redesign quantum circuits with a measurable target",
      posterHeadline: "Claude redesigns quantum circuits with a target",
      status: "Research results using evaluators and resource estimates; not a quantum-hardware demonstration",
      type: "Research / AI for science",
      audienceTags: ["Understand the limits"],
      whatHappened: [
        "Anthropic studied Claude-designed circuits for eight quantum-computing routines. Automated evaluators checked proposals and scored resource use. One highlighted decoder design used about 12 times fewer gates than its comparison design. These are circuit-design results and resource estimates, rather than demonstrations on quantum hardware.",
        "Source: [Anthropic: Designing more efficient quantum circuits with Claude](https://www.anthropic.com/research/designing-efficient-quantum-circuits)",
      ],
      realWorldExample:
        "The transferable idea is a tight feedback loop: propose a change, check correctness and score the cost. Clear evaluators make ambitious searches easier to assess.",
      developerTakeaway:
        "For a small coding project, keep the test cases fixed and optimize runtime or memory only after checking that outputs still match.",
      visual: storyImage(
        "story-06-claude-quantum-circuits.webp",
        "Conceptual copper and blue quantum-circuit components beside a notebook and a small evaluation lens.",
      ),
      source: {
        heading: "Story 6 — Anthropic quantum-circuit research",
        body: "Primary source: Anthropic's October 16 research publication. The roughly **12×** figure refers to **one decoder comparison**, not all tasks or an end-to-end quantum speedup. Results are circuit designs and resource estimates, not quantum-hardware runs; human setup and occasional research prompting remain relevant.",
        links: [
          {
            label: "Anthropic: Designing more efficient quantum circuits with Claude",
            href: "https://www.anthropic.com/research/designing-efficient-quantum-circuits",
          },
        ],
      },
    },
    {
      rank: 7,
      id: "biological-reasoning-agents",
      date: "2026-10-21",
      headline: "Thousands of agents help researchers choose what to investigate next",
      posterHeadline: "Thousands of agents help pick what to study next",
      status: "Research report and shared reasoning atlas; proposed mechanisms need experimental testing",
      type: "Research / biological data",
      audienceTags: ["Understand the limits"],
      whatHappened: [
        "OpenAI, PerturbAI and Scripps Research reported using thousands of GPT-Rosalind agents to interpret existing data from millions of mouse brain cells. Agents linked gene-disruption effects with literature and combined their reports into a reasoning atlas. Proposed biological mechanisms still need experimental testing.",
        "Source: [OpenAI: Scaling AI research for complex biological data](https://openai.com/index/scaling-ai-research-for-complex-biological-data/)",
      ],
      realWorldExample:
        "More analysis can produce more candidate questions. The valuable output is a lead that a scientist can inspect and test.",
      developerTakeaway:
        "In a literature project, try dividing a topic into narrow questions, require a source for every claim, then review contradictions before merging the reports.",
      visual: storyImage(
        "story-07-biological-reasoning-agents.webp",
        "Conceptual laboratory-data scene with a glass cell cluster, tiny blue exploration lights, research papers and a notebook.",
      ),
      source: {
        heading: "Story 7 — OpenAI, PerturbAI and Scripps Research biological-data report",
        body: "Primary source: OpenAI's October 21 report. **Existing** mouse-cell data were analyzed; this is not evidence of a proven treatment or autonomous clinical discovery, and **no clinical or wet-lab validation is implied.**",
        links: [
          {
            label: "OpenAI: Scaling AI research for complex biological data",
            href: "https://openai.com/index/scaling-ai-research-for-complex-biological-data/",
          },
        ],
      },
    },
  ],
  closingSections: [
    {
      id: "weekend-experiment",
      eyebrow: "Try it",
      heading: "One small experiment: can your agent recover from a change?",
      body: [
        "Use a fictional appointment-booking task. Ask for Tuesday at 3 p.m., correct it to Wednesday, then change the name. Define the final expected booking before you start.",
        "Run five trials. Record the final date, name and time; any unintended action; elapsed time; and token/API usage if your tool exposes it. A natural conversation is useful only if the final task is right. This is a proposed learning exercise, not a benchmark result or a test we ran for this briefing.",
      ],
    },
    {
      id: "reader-poll",
      eyebrow: "Your turn",
      heading: "Which would you try first?",
      body: [],
      options: [
        { label: "A — Editable slides:", text: "a shared presentation you keep refining." },
        { label: "B — A personal car assistant:", text: "useful context while you are parked." },
        { label: "C — A voice workflow:", text: "a conversation that ends in a finished task." },
        { label: "D — An open inference stack:", text: "an engine you can inspect and extend." },
      ],
      after: [
        "Tell us your pick and the first thing you would test. Follow SSK AI Hub — AI Tech Briefing for the next edition.",
      ],
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "October 22, 2026",
    headlines: [
      "ChatGPT Slides keeps draft and edits together",
      "Gemini brings personal context into the car",
      "Voxtral 3 connects a conversation to an action",
      "DeepSeek opens the engine behind its service",
      "OpenShell gives agent boundaries a place",
      "Claude redesigns quantum circuits with a target",
      "Thousands of agents help pick what to study next",
    ],
    theme: "From slides to science: 7 updates worth your time.",
  },
  generalSourceNote:
    "Source review: October 21, 2026, 5:37 p.m. America/Chicago, against each story's primary source. This is a curated briefing of seven stories, not a complete launch calendar, and the reporting day was still open when the review was made. Vendor capability descriptions are not independent measurements; the “Try this” suggestions, the five-trial exercise and the reader prompt are editorial proposals. Earlier October 8–14 launches are not repeated as new releases. Corporate financing, rumors and unverified speed comparisons were omitted on purpose. The illustrations are original AI-generated editorial concepts, not product screenshots or measured results.",
};

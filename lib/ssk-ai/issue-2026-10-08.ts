import type { SskAiIssue } from "./types";

/**
 * Editorial source: the SSK AI Hub October 1–7, 2026 handoff package
 * (01-website-article.md, qualified against 02-source-notes.md). Coverage is
 * October 1–7 inclusive; the edition is dated October 8, the morning after the
 * window closed in America/Chicago, and was deployed after that local midnight.
 * Applications and the before/change/result panels restate the article's own facts
 * and proposed examples; nothing in them goes beyond what the article reports.
 */
export const issueOctober08_2026: SskAiIssue = {
  slug: "ai-technology-updates-october-8-2026",
  edition: {
    kind: "weekly",
    number: 9,
    volume: 1,
    periodStart: "2026-10-01",
    periodEnd: "2026-10-07",
    periodLabel: "October 1–7, 2026",
  },
  datePublished: "2026-10-08",
  dateLabel: "October 8, 2026",
  cardTitle: "SSK AI: AI Gets Cheaper, More Visual and More Accountable",
  title: "SSK AI — What Changed in AI & What You Can Build | October 8, 2026",
  heading: "AI Gets Cheaper, More Visual and More Accountable",
  seoTitle: "AI News October 1–7, 2026: Models, Agents & Research",
  seoDescription:
    "October 1–7 AI news: GPT-6 UI, Haiku 5.5, RTX Spark, open-model previews, multimodal retrieval, voice agents and research evidence.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "The practical advantage comes from choosing the right model, giving it useful evidence, defining its permissions and checking the finished work.",
  hero: {
    kind: "editorial-image",
    src: "/ssk-ai/2026-10-08/00-cover-website-linkedin.webp",
    width: 1672,
    height: 941,
    alt: "SSK AI Hub October 1–7, 2026 cover: asymmetric collage of model chips, a laptop, media search, a permission card, a proof manuscript and a glass cell.",
    caption: "October Week 1 at a glance. Original AI-generated editorial illustration; conceptual interfaces and objects.",
    description:
      "Original SSK AI Hub editorial cover for the October 1–7, 2026 edition — conceptual artwork, not an official product asset.",
  },
  socialImage: {
    src: "/ssk-ai/2026-10-08/00-cover-social-1200x630.webp",
    width: 1200,
    height: 630,
    alt: "SSK AI Hub October 1–7, 2026 cover: asymmetric collage of model chips, a laptop, media search, a permission card, a proof manuscript and a glass cell.",
  },
  visualPlacement: "lead",
  storyLabels: {
    happened: "What happened",
    matters: "Why it matters — SSK AI Hub analysis",
    applications: "Stated and proposed applications",
    example: "Practical example — a proposed workflow",
    takeaway: "Developer takeaway",
  },
  readingListLabels: { title: "The week at a glance", detail: "Release status" },
  opening: [
    "October opened with a wide range of useful changes: more visual answers in ChatGPT, smaller models for everyday work, new open-weight previews, local-agent infrastructure, better retrieval and voice systems. Alongside those launches, mathematical artifacts and a major biology-data commitment put scientific evidence back in the spotlight.",
    "Our view of this week is that **the practical advantage comes from choosing the right model, giving it useful evidence, defining its permissions and checking the finished work**. A lower token price helps. An available tool helps. Neither alone establishes that a workflow is reliable.",
    "This edition selects 15 main stories and six shorter briefs from announcements dated October 1–7. Facts link to primary sources; sections labeled SSK AI Hub analysis and proposed examples are our interpretation. Source review took place on the evening of October 7 in America/Chicago, with a final pass over the primary sources before publication. Availability and prices reflect the reviewed announcements. Original AI-generated artwork is conceptual, including its interface motifs, stamps and decorative equations.",
  ],
  relatedReading: [
    "This is October's first weekly briefing. September is summarized in the ",
    { href: "/ssk-ai/tech-news/ai-september-2026-month-in-review", label: "September 2026 Month in Review" },
    ", and the previous weekly windows are covered in the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-september-29-2026", label: "September 22–28" },
    " and ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-september-22-2026", label: "September 15–21" },
    " editions. Every weekly and monthly briefing is collected on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    {
      storyId: "chatgpt-intelligent-ui",
      development: "GPT-6 and Intelligent UI",
      announced: "October 7",
      question: "Rollout announced; plan and workspace conditions apply",
    },
    {
      storyId: "windows-hybrid-intelligence",
      development: "Windows and NVIDIA local agents",
      announced: "October 7",
      question: "MXC generally available; hardware preorders and later delivery",
    },
    {
      storyId: "claude-haiku-5-5",
      development: "Claude Haiku 5.5",
      announced: "October 7",
      question: "Available; related subscriber credits rolling out",
    },
    {
      storyId: "embeddinggemma-2",
      development: "EmbeddingGemma 2",
      announced: "October 6",
      question: "Weights available; platform integrations vary",
    },
    {
      storyId: "clef-strands-decider",
      development: "Clef and Strands Decider",
      announced: "October 1",
      question: "Released with public weights and code",
    },
    {
      storyId: "mistral-large-4",
      development: "Mistral Large 4",
      announced: "October 6",
      question: "Public API preview; weights planned for month-end",
    },
    {
      storyId: "reflection-beam",
      development: "Reflection Beam",
      announced: "October 5",
      question: "Announced; early-access sign-up; weights pending",
    },
    {
      storyId: "nano-banana-2-1",
      development: "Nano Banana 2.1",
      announced: "October 6",
      question: "Documented release; verify access in the target product",
    },
    {
      storyId: "microsoft-streaming-audio",
      development: "Microsoft audio models",
      announced: "October 1",
      question: "Launch announced through supported platforms",
    },
    {
      storyId: "decagon-voice-3",
      development: "Decagon Voice 3",
      announced: "October 1",
      question: "Enterprise product announcement; demo-led access",
    },
    {
      storyId: "pact-agent-consent",
      development: "PACT agent consent protocol",
      announced: "October 1 and 6",
      question: "Open specification announced; adoption still developing",
    },
    {
      storyId: "textgrain-provenance",
      development: "OpenAI textGrain",
      announced: "October 5",
      question: "API opt-in; EU product rollout planned; detector restricted",
    },
    {
      storyId: "openai-math-release",
      development: "OpenAI mathematics release",
      announced: "October 6",
      question: "Manuscripts public; originating model unreleased",
    },
    {
      storyId: "ironclad-workflow-evaluation",
      development: "OpenAI and Ironclad",
      announced: "October 6",
      question: "Research collaboration and evaluation; not universal automation",
    },
    {
      storyId: "biohub-virtual-biology",
      development: "Biohub virtual biology",
      announced: "October 7",
      question: "Commitment and collaboration; future data and model outcomes",
    },
  ],
  stories: [
    {
      rank: 1,
      id: "chatgpt-intelligent-ui",
      date: "2026-10-07",
      headline: "GPT-6 and Intelligent UI: the answer becomes something you can use",
      posterHeadline: "GPT-6 and Intelligent UI: answers you can use",
      status: "Rollout announced; plan and workspace conditions apply",
      type: "Product / interface",
      audienceTags: ["Product Teams", "Frontend Developers", "ChatGPT Users"],
      whatHappened: [
        "OpenAI announced GPT-6 with Intelligent UI in ChatGPT on October 7. Responses can combine prose with visuals and interactive elements, including charts, forms and small tools. The model can also start answering while further reasoning or tool work continues. The Chat rollout starts with Plus, Pro, Business and Enterprise, with Free and Go scheduled to follow on October 8. Paid tiers use a conversational GPT-6 Sol; Free and Go use GPT-6 Luna. This announcement does not change the models powering Work and Codex. [OpenAI announcement](https://openai.com/index/gpt-6-for-everyone/).",
      ],
      whyItMatters:
        "A useful interface can remove work from the reader. A static explanation of a loan requires someone to repeat calculations for every new input; a calculator lets them explore those inputs directly. But an interface can also make an incorrect assumption harder to notice. The product test is whether people understand the result and can inspect what changed when they interacted with it.",
      applications: [
        {
          text: "Answers that combine prose with charts, forms and small tools, and can begin while reasoning or tool work continues",
          kind: "demonstrated",
          attribution: "OpenAI's announcement; rollout by plan and workspace",
        },
        {
          text: "A shared-grocery bill tool with named participants, item ownership and tax allocation — a proposed evaluation, not a tested result",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Ask for a shared-grocery bill tool with named participants, item ownership and tax allocation. Change one item from “everyone” to two people and inspect whether every total updates consistently. The acceptance check is simple: the participant totals must still equal the receipt total, and the tax rule must be visible. This is a proposed evaluation, not a tested result from the release.",
      developerTakeaway:
        "Check the calculations, labels, keyboard access and mobile behavior of generated interfaces. A polished interactive answer still needs a correct underlying model of the task.",
      beforeChangeResult: {
        before: "Answers arrive as text the reader has to work through",
        change: "GPT-6 in ChatGPT can answer with visuals, forms and small interactive tools",
        result: "Generated interfaces need their calculations, labels and accessibility checked",
      },
      source: {
        heading: "Story 1 — OpenAI GPT-6 and Intelligent UI",
        body: "Primary source: OpenAI's October 7 announcement. This is a **Chat experience rollout**, starting with paid plans and following on October 8 for Free and Go; it is not a new Work or Codex model release, and not every account received access immediately.",
        links: [{ label: "OpenAI: GPT-6 and Intelligent UI for everyone", href: "https://openai.com/index/gpt-6-for-everyone/" }],
      },
    },
    {
      rank: 2,
      id: "windows-hybrid-intelligence",
      date: "2026-10-07",
      headline: "Windows and NVIDIA: local agents get a platform around them",
      posterHeadline: "Windows and NVIDIA: a platform for local agents",
      status: "MXC generally available; hardware preorders and later delivery",
      type: "Hardware / agent infrastructure",
      audienceTags: ["Agent Developers", "Platform Teams", "Local AI Builders"],
      whatHappened: [
        "Microsoft announced general availability of Microsoft Execution Containers (MXC) on Windows 11, with runtime controls over agent file and network access. It also described local deployment of MAI-Code-1.1-Flash using 3-bit precision. [Microsoft announcement](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/).",
        "NVIDIA and Microsoft introduced RTX Spark systems for local AI. Laptop preorders opened October 7, with availability beginning October 16; compact desktops follow in November. NVIDIA lists up to 128 GB unified memory. These are announced hardware capabilities and delivery plans, rather than independent measurements. [NVIDIA announcement](https://blogs.nvidia.com/blog/local-ai-rtx-spark-microsoft-windows-event/).",
      ],
      whyItMatters:
        "A local agent needs more than enough memory to load a model. It needs a place to run, boundaries on access and a way to identify its actions. Hybrid systems also need an explicit rule for deciding when work stays local and when it goes to a cloud model. Hardware capacity, sustained speed and the total operating cost are different questions.",
      applications: [
        {
          text: "Microsoft Execution Containers on Windows 11 with runtime controls over agent file and network access, generally available",
          kind: "demonstrated",
          attribution: "Microsoft",
        },
        {
          text: "RTX Spark laptops (preorders October 7, availability from October 16) and compact desktops in November, with up to 128 GB unified memory",
          kind: "demonstrated",
          attribution: "NVIDIA and Microsoft; announced specifications and delivery plans",
        },
        {
          text: "A local agent that indexes an approved repository and drafts a patch, routing an unusually difficult debugging task to a cloud service — a proposed workflow",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A developer could let a local agent index an approved repository and draft a patch, then route an unusually difficult debugging task to a cloud service. File permissions would constrain the local workspace; the cloud step would receive only the approved context. Test the local and cloud steps separately, including what happens when network access is unavailable.",
      developerTakeaway:
        "Use your actual repository, context length and concurrency when assessing a local system. Compare accepted tasks per hour, memory use and electricity with the cloud bill; parameter capacity alone cannot answer that comparison.",
      beforeChangeResult: {
        before: "A local agent is a model that fits in memory, with ad hoc access",
        change: "Windows adds execution containers with access controls; RTX Spark hardware is announced",
        result: "Local agents need a runtime, boundaries and a clear local-versus-cloud rule",
      },
      source: {
        heading: "Story 2 — Microsoft Windows and NVIDIA RTX Spark",
        body: "Primary sources: Microsoft's Windows announcement and NVIDIA's RTX Spark announcement, both October 7. Windows containers, local model deployment, laptop preorders and desktop delivery are **separate status items**. Hardware specifications are **announced capabilities**, not independently measured speedups.",
        links: [
          {
            label: "Microsoft: Building Windows for hybrid intelligence",
            href: "https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/",
          },
          {
            label: "NVIDIA: RTX Spark and local AI on Windows",
            href: "https://blogs.nvidia.com/blog/local-ai-rtx-spark-microsoft-windows-event/",
          },
        ],
      },
    },
    {
      rank: 3,
      id: "claude-haiku-5-5",
      date: "2026-10-07",
      sectionHeading: "Models, cost and local retrieval",
      headline: "Claude Haiku 5.5: more work can move to the small-model tier",
      posterHeadline: "Claude Haiku 5.5: more work for the small-model tier",
      status: "Available; related subscriber credits rolling out",
      type: "Models / cost",
      audienceTags: ["API Developers", "Platform & Cost Owners", "Agent Developers"],
      whatHappened: [
        "Anthropic released Claude Haiku 5.5 for short, high-volume tasks and subagent work, with adjustable effort. For prompts up to 100,000 tokens, listed prices are $0.10 per million input tokens and $0.50 per million output tokens; longer prompts use higher rates. The API identifier is claude-haiku-5-5. Anthropic also cut Sonnet 5.5 cache reads from $0.20 to $0.10 per million tokens and announced monthly API credits for Max and Team subscribers. Its estimated workload savings are vendor claims, not guaranteed savings for every application. [Anthropic launch](https://www.anthropic.com/claude-haiku-5-5).",
      ],
      whyItMatters:
        "The useful cost question is how much it takes to finish an accepted task. A cheap request that repeatedly needs correction may lose its advantage. A small model is particularly interesting when the job has a narrow output and a clear check: extract a record, classify a message or summarize a known document. More complicated work can still need a stronger model.",
      applications: [
        {
          text: "Short, high-volume tasks and subagent work with adjustable effort, priced by prompt-length tier",
          kind: "demonstrated",
          attribution: "Anthropic; savings estimates are vendor claims",
        },
        {
          text: "Extracting source dates and short summaries in a weekly-report workflow, with a larger model writing the final synthesis — a proposed workflow",
          kind: "potential",
        },
      ],
      realWorldExample:
        "In a weekly-report workflow, try the small model for extracting source dates and preparing short summaries. Let a larger model compare conflicting reports and write the final synthesis. Record rejected extractions and repeated calls as part of the bill. For an illustrative request below the prompt threshold with 1,000 input and 200 output tokens, base token charges would be $0.0002, excluding caching, other services and retries.",
      developerTakeaway:
        "Evaluate a bounded task suite before changing the default model. Keep quality, latency, prompt-length pricing and escalation cost in the same report.",
      beforeChangeResult: {
        before: "Bounded, high-volume steps share a default model with harder work",
        change: "Haiku 5.5 lists $0.10/$0.50 per million tokens for prompts up to 100,000 tokens",
        result: "Small-model routing is judged on the cost of each accepted task, not the first call",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-10-08/01-models-and-local-search.webp",
        width: 1672,
        height: 941,
        alt: "Editorial collage of small computing chips and a phone with image, audio and code motifs, under The Right Model for the Job.",
        caption: "The model choice depends on the job, its evidence and its operating cost. Conceptual editorial illustration.",
        description:
          "Section illustration for Models, cost and local retrieval (stories 3–10) — conceptual artwork, not a product screenshot or a measured chart.",
      },
      source: {
        heading: "Story 3 — Anthropic Claude Haiku 5.5",
        body: "Primary source: Anthropic's launch page and price table, October 7. The **prompt-length price tiers** matter: the listed rates apply to prompts up to 100,000 tokens, and longer prompts cost more. The illustrative $0.0002 charge excludes caching, other services and retries. Subscriber API credits and token pricing are **separate products**, and Anthropic's workload-savings estimates are its own claims. The Sonnet 5.5 cache-read price cut is an October 7 update; Sonnet 5.5 itself was announced September 28.",
        links: [{ label: "Anthropic: Claude Haiku 5.5 launch and price table", href: "https://www.anthropic.com/claude-haiku-5-5" }],
      },
    },
    {
      rank: 4,
      id: "embeddinggemma-2",
      date: "2026-10-06",
      headline: "EmbeddingGemma 2: one local search space for different media",
      posterHeadline: "EmbeddingGemma 2: one local search space for all media",
      status: "Weights available; platform integrations vary",
      type: "Open models / retrieval",
      audienceTags: ["Search & Retrieval Engineers", "On-Device AI Builders", "Open-Model Users"],
      whatHappened: [
        "Google released EmbeddingGemma 2, a 740-million-parameter multimodal embedding model under Apache 2.0. It maps text, code, images, video and audio into a shared representation. Its modular design supports text-only workloads, with optional visual and audio encoders. Output vectors can be shortened from 768 dimensions to 512, 256 or 128 through Matryoshka Representation Learning. Google positions it for on-device retrieval and publishes device-specific memory figures; those figures should not be assumed for every runtime. [Google announcement](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/).",
      ],
      whyItMatters:
        "Embeddings are numerical representations used to retrieve similar content. Sharing a space across media makes it possible to search a visual or audio collection using a text query. This is the retrieval part of an application: finding relevant material. A separate step still has to decide what the retrieved material establishes and whether it supports an answer.",
      applications: [
        {
          text: "On-device retrieval across text, code, images, video and audio with shortenable vectors, under Apache 2.0",
          kind: "demonstrated",
          attribution: "Google",
        },
        {
          text: "A local index of approved lecture notes, slide images and recording segments, showing the page or timestamp for each match — a proposed workflow",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A student could index approved lecture notes, slide images and short recording segments locally. A query such as “the example about a misleading evaluation split” could retrieve several kinds of evidence. The interface should show the page or timestamp and let the student open the original. Compare the first five matches with manually labeled examples.",
      developerTakeaway:
        "Choose vector length using retrieval quality on your own collection. A smaller index is useful only if it retains the evidence your users need.",
      beforeChangeResult: {
        before: "Each medium needs its own search index",
        change: "EmbeddingGemma 2 maps text, code, images, video and audio into one shared space",
        result: "A text query can retrieve across media; whether that evidence supports an answer is a separate check",
      },
      source: {
        heading: "Story 4 — Google EmbeddingGemma 2",
        body: "Primary source: Google's October 6 launch. Embedding models **retrieve** material; they do not establish that an answer is supported. Google's memory estimates depend on encoders, quantization and runtime.",
        links: [
          {
            label: "Google: EmbeddingGemma 2 launch",
            href: "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/",
          },
        ],
      },
    },
    {
      rank: 5,
      id: "clef-strands-decider",
      date: "2026-10-01",
      headline: "Clef and Strands Decider: small models make bounded decisions",
      posterHeadline: "Clef and Strands Decider: small models for bounded decisions",
      status: "Released with public weights and code",
      type: "Open models / routing",
      audienceTags: ["Agent Developers", "Platform Teams", "Open-Model Users"],
      whatHappened: [
        "Cloudflare introduced Clef and Clef-flash, decision models on Workers AI with Apache 2.0 weights. They return structured classifications with probabilities and can handle visual inputs. Cloudflare also announced a reinforcement-learning fine-tuning platform. [Cloudflare launch](https://blog.cloudflare.com/clef-decision-models/).",
        "The Strands team released Strands Decider 2B with model weights, training data and scripts. Its intended applications include routing, tool selection and guardrails. The launch demonstrates checking whether a proposed tool call is grounded in the user's information. [Strands launch](https://strandsagents.com/blog/introducing-strands-decider/).",
      ],
      whyItMatters:
        "Many agent steps ask a bounded question: which queue should handle this request, is a required field present, or should this task escalate? These steps deserve a different evaluation from open-ended writing. A probability can help set a routing threshold, but its meaning must be checked on the target data. Deterministic permission rules should still be enforced by code.",
      applications: [
        {
          text: "Structured classifications with probabilities, including visual inputs, on Workers AI",
          kind: "demonstrated",
          attribution: "Cloudflare",
        },
        {
          text: "Routing, tool selection and guardrails, including checking whether a proposed tool call is grounded in the user's information",
          kind: "demonstrated",
          attribution: "Strands launch",
        },
        {
          text: "A support assistant that routes confident billing and technical cases and defers ambiguous ones — a proposed comparison against simple rules",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For a support assistant, compare a decision model with simple rules on a labeled set of billing, technical and ambiguous messages. Route confident cases, defer ambiguous cases and record each decision. Include unfamiliar requests and messages containing instructions that conflict with the application's rules. Assess the tradeoff between coverage and wrong routing.",
      developerTakeaway:
        "Calibrate the threshold on development data and evaluate it on held-out cases. Report the errors among accepted decisions, rather than only overall classification accuracy.",
      beforeChangeResult: {
        before: "Bounded agent decisions are handled by a general model or hand-written rules",
        change: "Small open decision models return structured classifications with probabilities",
        result: "Routing thresholds need calibration on target data; permissions stay in code",
      },
      source: {
        heading: "Story 5 — Cloudflare Clef and Strands Decider",
        body: "Primary sources: Cloudflare's and Strands' October 1 launches. Decision-model probabilities **require calibration** on the target workload, and permission checks belong in the service irrespective of a classifier result.",
        links: [
          { label: "Cloudflare: Clef decision models", href: "https://blog.cloudflare.com/clef-decision-models/" },
          { label: "Strands: Introducing Strands Decider", href: "https://strandsagents.com/blog/introducing-strands-decider/" },
        ],
      },
    },
    {
      rank: 6,
      id: "mistral-large-4",
      date: "2026-10-06",
      headline: "Mistral Large 4: an API preview ahead of the weight release",
      posterHeadline: "Mistral Large 4: an API preview before the weights",
      status: "Public API preview; weights planned for month-end",
      type: "Models / open-weight roadmap",
      audienceTags: ["API Developers", "Open-Model Users", "Document AI Teams"],
      whatHappened: [
        "Mistral opened a public preview of Mistral Large 4, nicknamed “Le Chonk.” Its official announcement describes a natively multimodal mixture-of-experts model with about one trillion total parameters and 52 billion active parameters. The preview API is available through Mistral Studio; weights are planned for the end of October while red-teaming continues. Published API rates are $1.36 per million input tokens and $4.18 per million output tokens. Mistral's benchmark leadership statements remain attributed claims. [Mistral announcement](https://mistral.ai/news/mistral-large-4/).",
        "A final check of Mistral's pages before publication found its model documentation giving 52 billion active and 1.05 trillion total parameters, while some other Mistral pages and early coverage cited 49 billion active. [Mistral model documentation](https://docs.mistral.ai/models/mistral-large-4).",
      ],
      whyItMatters:
        "Open-weight plans and available open weights are separate milestones. An API preview can support an early evaluation, but it does not yet establish the final artifact, license conditions or self-hosting requirements. Mixture-of-experts models also have a gap between the parameters used for a token and the total weights that a serving system must accommodate.",
      applications: [
        {
          text: "A natively multimodal model available through a public preview API on Mistral Studio",
          kind: "demonstrated",
          attribution: "Mistral; weights planned for the end of October",
        },
        {
          text: "A document-analysis trial with technical drawings and scanned tables, scored on both answers and evidence location — a proposed evaluation",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Prepare a small document-analysis trial with technical drawings, scanned tables and questions whose answers have known page locations. Compare the preview with your existing model on both answer correctness and evidence location. Keep the evaluation portable so it can be rerun against a downloadable release if and when that arrives.",
      developerTakeaway:
        "Pin the API version and preserve input artifacts. Wait for the released weights, license and deployment documentation before treating a self-hosted configuration as available.",
      beforeChangeResult: {
        before: "An open-weight model is announced and available at once",
        change: "Mistral Large 4 opens as an API preview, with weights planned for month-end",
        result: "Evaluate the preview now; treat self-hosting as unavailable until weights and license ship",
      },
      source: {
        heading: "Story 6 — Mistral Large 4",
        body: "Primary sources: Mistral's October 6 announcement and model documentation. Mistral Large 4 is a **preview with a pending weight release** — do not call its weights downloadable this week or infer a self-hosting license before it is released. Benchmark leadership statements are **Mistral's claims**. Mistral's pages differ on the active-parameter count (52 billion in the documentation and announcement; 49 billion on some other pages and in early coverage).",
        links: [
          { label: "Mistral: Mistral Large 4 announcement", href: "https://mistral.ai/news/mistral-large-4/" },
          { label: "Mistral: Mistral Large 4 model documentation", href: "https://docs.mistral.ai/models/mistral-large-4" },
        ],
      },
    },
    {
      rank: 7,
      id: "reflection-beam",
      date: "2026-10-05",
      headline: "Reflection Beam: efficiency is part of the open-model competition",
      posterHeadline: "Reflection Beam: efficiency in the open-model race",
      status: "Announced; early-access sign-up; weights pending",
      type: "Models / training",
      audienceTags: ["Coding-Agent Developers", "Open-Model Users", "ML Engineers"],
      whatHappened: [
        "Reflection announced Beam, a text-only sparse mixture-of-experts model with 501 billion total parameters and 23 billion active parameters, aimed at coding, reasoning and agent workflows. The company reports large-scale reinforcement learning and lower inference compute than selected comparison models. Beam remained in final red-teaming and evaluation at announcement; weights, a technical report, a model card and developer artifacts were promised later in October. [Reflection announcement](https://reflection.ai/blog/introducing-beam).",
      ],
      whyItMatters:
        "Efficiency can make repeated reasoning economically useful, but comparison conditions matter. Hardware, reasoning budgets, context length and accepted-output quality can all change the conclusion. Active parameters do not by themselves specify the memory needed to serve the full model, so “23 billion active” should not be treated as a laptop requirement.",
      applications: [
        {
          text: "Coding, reasoning and agent workflows, with lower inference compute than selected comparison models",
          kind: "demonstrated",
          attribution: "Reflection's claims; weights and technical report pending",
        },
        {
          text: "A future comparison set of repository fixes with executable checks, measuring tokens, time and cost per accepted fix — a proposed harness",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Build a future comparison set of repository fixes with executable checks. Preserve the exact issue, starting commit and acceptance tests. Once access and artifacts are available, measure the total tokens, elapsed time and infrastructure expense for each accepted fix. Until then, prepare the harness rather than inventing a local deployment recipe.",
      developerTakeaway:
        "Keep a status field beside every model in your evaluation tracker. An announcement belongs on a watchlist until you can inspect access terms and run the comparison.",
      beforeChangeResult: {
        before: "Open-model competition is framed mainly around raw capability",
        change: "Reflection announces Beam with reported efficiency gains; weights promised later in October",
        result: "Efficiency claims wait on comparison conditions and released artifacts",
      },
      source: {
        heading: "Story 7 — Reflection Beam",
        body: "Primary source: Reflection's October 5 announcement. Beam's **weights are pending**; do not call them downloadable this week or infer a self-hosting license before release. Efficiency comparisons are **Reflection's own**, against selected models.",
        links: [{ label: "Reflection: Introducing Beam", href: "https://reflection.ai/blog/introducing-beam" }],
      },
    },
    {
      rank: 8,
      id: "nano-banana-2-1",
      date: "2026-10-06",
      headline: "Nano Banana 2.1: creative workflows need fewer repair rounds",
      posterHeadline: "Nano Banana 2.1: fewer repair rounds for creative work",
      status: "Documented release; verify access in the target product",
      type: "Image models / creative tools",
      audienceTags: ["Creative Teams", "API Developers", "Marketing Teams"],
      whatHappened: [
        "Google published Nano Banana 2.1 documentation and its model card on October 6. The API model is gemini-nano-banana-2.1. Google describes improvements to image quality, text rendering and consistency across edits, with support for up to 14 reference images. The documentation lists configurable thinking levels and search grounding. The model card identifies Gemini 3.6 Flash as its base and lists distribution through products including the Gemini app, AI Studio, the API and Flow. [Developer documentation](https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1), [model card](https://deepmind.google/models/model-cards/nano-banana-2-1/).",
      ],
      whyItMatters:
        "For creative production, the meaningful unit is a finished asset that meets the brief. A cheaper first image may still need several edits for text, proportions or consistency. Evaluation should include those repair rounds and the time needed to check the final result. Attractive generated infographics also need separate factual verification.",
      applications: [
        {
          text: "Improved image quality, text rendering and edit consistency, with up to 14 reference images",
          kind: "demonstrated",
          attribution: "Google's documentation and model card",
        },
        {
          text: "A three-asset campaign from one approved product reference and exact headline, counting corrections before acceptance — a proposed trial",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Try a three-asset campaign based on the same approved product reference and exact headline. Give each asset a different composition, then assess whether the product, colors and wording stay consistent. Count corrections before accepting the set. Use software-rendered charts whenever a visual needs exact measurements.",
      developerTakeaway:
        "Check the current product-specific limits. The API documentation and model card differ on some context and output details, so this briefing avoids presenting one universal token-limit figure.",
      beforeChangeResult: {
        before: "A generated first image is judged on its own",
        change: "Nano Banana 2.1 targets better text rendering and consistency across edits",
        result: "Creative evaluation counts the repair rounds to a finished, checked asset",
      },
      source: {
        heading: "Story 8 — Google Nano Banana 2.1",
        body: "Primary sources: Google's API documentation and DeepMind model card, October 6. The documentation and model card **differ on context and output specifications**, so this edition omits a universal token-limit claim; use the documentation for the exact endpoint you implement against.",
        links: [
          {
            label: "Google: Nano Banana 2.1 API documentation",
            href: "https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1",
          },
          { label: "Google DeepMind: Nano Banana 2.1 model card", href: "https://deepmind.google/models/model-cards/nano-banana-2-1/" },
        ],
      },
    },
    {
      rank: 9,
      id: "microsoft-streaming-audio",
      date: "2026-10-01",
      headline: "Microsoft audio models: live transcripts can start the next step sooner",
      posterHeadline: "Microsoft audio models: live transcripts, faster next steps",
      status: "Launch announced through supported platforms",
      type: "Audio models / developer APIs",
      audienceTags: ["Voice AI Builders", "API Developers", "Meeting & Captioning Tools"],
      whatHappened: [
        "Microsoft introduced MAI-Transcribe-2-Streaming alongside MAI-Voice-2.1 and MAI-Voice-2.1-Flash. The streaming transcription model supports 60 languages and revises partial transcripts as more audio arrives. Its introductory price is $0.54 per audio hour through the end of 2026. The two voice models support 23 languages; listed prices are $22 and $15 per million characters respectively. The launch describes access through Microsoft Foundry and other integrations, with LiveKit marked as coming soon. [Microsoft AI announcement](https://microsoft.ai/news/our-first-streaming-transcription-model/).",
      ],
      whyItMatters:
        "A partial transcript is an early hypothesis. It can make captions feel responsive or let an agent prepare a lookup, but later words can change the meaning. Application design needs a distinction between tentative display, stable text and permission to perform an action. Faster speech recognition does not remove that distinction.",
      applications: [
        {
          text: "Streaming transcription in 60 languages that revises partial transcripts, plus voice models in 23 languages, through Microsoft Foundry and other integrations",
          kind: "demonstrated",
          attribution: "Microsoft; LiveKit marked as coming soon",
        },
        {
          text: "A meeting assistant that shows tentative captions but waits for stable segments before extracting commitments — a proposed design",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A meeting assistant could show tentative captions while waiting for stable segments before extracting commitments. If someone says “send the update—actually, hold it until Friday,” the tentative phrase should not trigger a message. Evaluate recordings with corrections, names, background noise and language changes.",
      developerTakeaway:
        "Measure both revision frequency and time to stable text. For transactional work, use an explicit confirmation boundary before acting on speech.",
      beforeChangeResult: {
        before: "Speech pipelines wait for a finished transcript",
        change: "A streaming transcription model revises partial transcripts as audio arrives",
        result: "Applications must separate tentative text, stable text and permission to act",
      },
      source: {
        heading: "Story 9 — Microsoft streaming transcription and voice models",
        body: "Primary source: Microsoft AI's October 1 announcement. Prices and language counts are **Microsoft's listed figures**; the transcription price is introductory through the end of 2026. Voice-model and duplex-agent announcements concern **different layers** of a speech application, and vendor timing and quality claims do not establish whole-call success.",
        links: [
          {
            label: "Microsoft AI: our first streaming transcription model",
            href: "https://microsoft.ai/news/our-first-streaming-transcription-model/",
          },
        ],
      },
    },
    {
      rank: 10,
      id: "decagon-voice-3",
      date: "2026-10-01",
      headline: "Decagon Voice 3: conversation and tool work run together",
      posterHeadline: "Decagon Voice 3: talking and tool work together",
      status: "Enterprise product announcement; demo-led access",
      type: "Voice agents / customer experience",
      audienceTags: ["Voice AI Builders", "Customer Experience Teams", "Agent Developers"],
      whatHappened: [
        "Decagon introduced Voice 3 with Chord, a speech model built for customer conversations. Its duplex architecture separates a low-latency conversational layer from a more capable layer handling reasoning, tools and guardrails. Decagon says the agent can listen, speak and act concurrently, and describes support for more than 70 languages. These are the company's product claims; its launch directs interested teams to a demo rather than publishing a general-purpose open-weight download. [Decagon launch](https://decagon.ai/blog/voice-3).",
      ],
      whyItMatters:
        "Voice-agent quality depends on coordination. A system can pronounce every word clearly and still fail by interrupting the caller or pretending that an unfinished lookup has succeeded. The interaction should represent the state of the work honestly: understanding a request, investigating it and completing it are separate moments.",
      applications: [
        {
          text: "Customer-conversation voice agents that listen, speak and act concurrently, in more than 70 languages",
          kind: "demonstrated",
          attribution: "Decagon's product claims; demo-led access",
        },
        {
          text: "A delivery-status call that acknowledges the request while a backend lookup runs and rechecks permissions when the caller changes the address — a proposed scenario",
          kind: "potential",
        },
      ],
      realWorldExample:
        "During a delivery-status call, the agent could acknowledge the request while a backend lookup runs. If the caller changes the address, the agent should update its working state and recheck what that change is permitted to affect. A failed tool request should produce a clear next step, rather than a confident confirmation.",
      developerTakeaway:
        "Test turn-taking, interruptions, tool failures and escalation together. Evaluate the correctness of the completed support workflow as well as the naturalness of the voice.",
      beforeChangeResult: {
        before: "A voice agent talks, then pauses while tools run",
        change: "Voice 3 separates a fast conversational layer from a reasoning and tool layer",
        result: "Quality depends on honest coordination between speaking and completing the work",
      },
      source: {
        heading: "Story 10 — Decagon Voice 3",
        body: "Primary source: Decagon's October 1 launch. Concurrency and language support are **Decagon's product claims**; access is demo-led, not a general-purpose open-weight download. Vendor timing and quality claims do not establish whole-call success.",
        links: [{ label: "Decagon: Voice 3", href: "https://decagon.ai/blog/voice-3" }],
      },
    },
    {
      rank: 11,
      id: "pact-agent-consent",
      date: "2026-10-06",
      additionalDates: ["2026-10-01"],
      sectionHeading: "Permission, verification and science",
      headline: "PACT: an agent must prove whose permission it carries",
      posterHeadline: "PACT: an agent must prove whose permission it carries",
      status: "Open specification announced; adoption still developing",
      type: "Agent interoperability / authorization",
      audienceTags: ["Agent Developers", "Security & Identity Teams", "Customer Experience Teams"],
      whatHappened: [
        "After introducing Personal Agent Gateway on October 1, Decagon open-sourced the Personal Agent Consent & Trust Protocol (PACT) on October 6, co-developed with Instinct. PACT builds on Agent2Agent and OAuth 2.0. It separates an agent platform's identity from the customer's delegated authority, uses business-defined scopes and keeps customer login with the business. Requests are checked against the delegation, and replies can include signed receipts. [Gateway announcement](https://decagon.ai/blog/personal-agents-are-here), [PACT release](https://decagon.ai/blog/introducing-the-personal-agent-consent-trust-protocol-pact).",
      ],
      whyItMatters:
        "When two agents interact, a natural-language request is not enough to authorize an account change. The application needs to know which customer is represented and what operation that person approved. Interoperability therefore includes an authorization contract, expiry and an audit record, alongside the ability to exchange messages.",
      applications: [
        {
          text: "An open protocol that separates agent identity from delegated customer authority, with business-defined scopes and signed receipts",
          kind: "demonstrated",
          attribution: "Decagon and Instinct; adoption still developing",
        },
        {
          text: "A mock subscription service where a read-only assistant is refused a cancellation until the customer grants that scope — a proposed prototype with fictional accounts",
          kind: "potential",
        },
      ],
      realWorldExample:
        "In a mock subscription service, grant an assistant permission to read a renewal date. Ask it to cancel the subscription and verify that the service rejects the action without a cancellation scope. Then grant that scope through the customer's consent flow and check that the completed action has a receipt. Use fictional accounts for the prototype.",
      developerTakeaway:
        "Keep policy enforcement in the service handling the action. Treat a new protocol as an integration to evaluate; an open specification does not establish universal business adoption.",
      beforeChangeResult: {
        before: "An agent's natural-language request stands in for the customer's consent",
        change: "PACT separates agent identity, delegated authority and per-action scopes",
        result: "Agent interoperability needs an authorization contract, expiry and an audit record",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-10-08/02-evidence-and-permission.webp",
        width: 1672,
        height: 941,
        alt: "Editorial collage of authorization, two abstract agents, proof papers, a microphone, a checklist and a biological cell.",
        caption: "Agent work needs authorized actions and inspectable evidence. Conceptual artwork; decorative notation is not a real proof.",
        description:
          "Section illustration for Permission, verification and science (stories 11–15) — conceptual artwork; its checklist and equations are decorative, not a real proof or certification.",
      },
      source: {
        heading: "Story 11 — Decagon Personal Agent Gateway and PACT",
        body: "Primary sources: Decagon's Personal Agent Gateway announcement (October 1) and PACT release (October 6). PACT is **newly published**; broad adoption is not established by the release. Agent identity, customer consent and action permissions are **distinct**.",
        links: [
          { label: "Decagon: Personal Agent Gateway (October 1)", href: "https://decagon.ai/blog/personal-agents-are-here" },
          {
            label: "Decagon: Introducing PACT (October 6)",
            href: "https://decagon.ai/blog/introducing-the-personal-agent-consent-trust-protocol-pact",
          },
        ],
      },
    },
    {
      rank: 12,
      id: "textgrain-provenance",
      date: "2026-10-05",
      headline: "OpenAI textGrain: provenance signals come with limits",
      posterHeadline: "OpenAI textGrain: provenance signals with limits",
      status: "API opt-in; EU product rollout planned; detector restricted",
      type: "Safety / content provenance",
      audienceTags: ["Trust & Safety Teams", "Publishers", "API Developers"],
      whatHappened: [
        "OpenAI announced textGrain, which embeds a statistical signal in word choices. API customers can opt in for selected models, with watermarking off by default. Eligible ChatGPT and Codex text in the EU is scheduled to receive watermarks over the following weeks. Detector access initially targets approved researchers and expert organizations. OpenAI says short text and editing weaken detection; a watermark does not establish accuracy, authorship or ownership, and a missing signal does not prove human origin. [OpenAI announcement](https://openai.com/index/eu-text-provenance/).",
      ],
      whyItMatters:
        "A provenance signal helps answer where content may have come from. It does not resolve whether the content is correct, whether a user had permission to create it or what contribution a person made. Organizations need to preserve those separate questions when they use provenance tools in review workflows.",
      applications: [
        {
          text: "Opt-in text watermarking for selected API models, with EU ChatGPT and Codex watermarking scheduled and restricted detector access",
          kind: "demonstrated",
          attribution: "OpenAI; detection weakens with short or edited text",
        },
        {
          text: "A publishing team keeping original exports, source records and edit history, with any detector result as one record among them — a proposed workflow",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A publishing team could keep original exports, source records and edit history for each asset. If a watermark detector becomes available to that team, its result would be one record alongside that history. A negative result should not override a documented AI-assisted workflow; a positive result should not replace fact-checking.",
      developerTakeaway:
        "Design review systems around multiple pieces of evidence. Do not use an uncertain detector output as an automatic verdict about a person.",
      beforeChangeResult: {
        before: "Whether text came from a model is guesswork",
        change: "textGrain embeds an opt-in statistical signal, with restricted detector access",
        result: "Provenance is one piece of evidence, not a verdict on accuracy or authorship",
      },
      source: {
        heading: "Story 12 — OpenAI textGrain",
        body: "Primary source: OpenAI's October 5 announcement. Text provenance **does not establish correctness or human ownership**. Detector errors and editing limits are material to interpreting the announcement; the EU rollout is **planned** over the following weeks and detector access is restricted.",
        links: [{ label: "OpenAI: text provenance in the EU", href: "https://openai.com/index/eu-text-provenance/" }],
      },
    },
    {
      rank: 13,
      id: "openai-math-release",
      date: "2026-10-06",
      headline: "OpenAI mathematics: publishing results is the start of scrutiny",
      posterHeadline: "OpenAI mathematics: publishing results starts the scrutiny",
      status: "Manuscripts public; originating model unreleased",
      type: "Research / formal verification",
      audienceTags: ["Researchers", "Formal Methods", "AI for Science"],
      whatHappened: [
        "OpenAI published mathematical work from an internal frontier model in a GitHub repository. The release includes 722 manuscripts grouped into 372 result families, supporting artifacts and Lean formalizations for many proofs. It also includes revision and citation protocols. The producing model remains unreleased. [Repository](https://github.com/openai/math).",
        "OpenAI says it consulted an independent mathematics-and-AI advisory group and released additional information about the process, including reasoning summaries and compute estimates. [OpenAI research announcement](https://openai.com/index/sharing-ai-progress-in-mathematics/).",
      ],
      whyItMatters:
        "Manuscript counts are not counts of independently accepted discoveries. Related results can share a family, a computer-checked proof covers a particular formal statement, and novelty still needs expert assessment. A useful scientific release makes it possible to inspect claims, reproduce checks and record corrections. Understanding what a result means is a further task.",
      applications: [
        {
          text: "722 public manuscripts in 372 result families, with supporting artifacts, Lean formalizations for many proofs, and revision and citation protocols",
          kind: "demonstrated",
          attribution: "OpenAI; the producing model is unreleased",
        },
        {
          text: "A reading group that writes down one manuscript's exact claim, follows its formal checks and records any step it cannot reproduce — a proposed exercise",
          kind: "potential",
        },
      ],
      realWorldExample:
        "An AI-reading group could select one manuscript with supporting formal artifacts. Write down its exact claim, assumptions and dependencies; follow the provided checks; and separate the verified formal statement from the informal explanation. If the group cannot reproduce a step, record that limit instead of treating it as confirmed.",
      developerTakeaway:
        "For research outputs, preserve the statement, evidence, verification scope and revision history. The headline should distinguish a reported result from independent scientific acceptance.",
      beforeChangeResult: {
        before: "AI mathematics is reported as headline results",
        change: "OpenAI publishes manuscripts, formal artifacts and revision protocols in a public repository",
        result: "Release opens scrutiny; formal checks, novelty and acceptance are separate assessments",
      },
      source: {
        heading: "Story 13 — OpenAI mathematics release",
        body: "Primary sources: OpenAI's October 6 research announcement and its public repository. A manuscript is a **reported research artifact**. Formal checking, novelty, expert acceptance and comprehensibility are **different assessments**.",
        links: [
          { label: "OpenAI: Sharing AI progress in mathematics", href: "https://openai.com/index/sharing-ai-progress-in-mathematics/" },
          { label: "GitHub: openai/math repository", href: "https://github.com/openai/math" },
        ],
      },
    },
    {
      rank: 14,
      id: "ironclad-workflow-evaluation",
      date: "2026-10-06",
      headline: "OpenAI and Ironclad: score the rules of the finished workflow",
      posterHeadline: "OpenAI and Ironclad: score the finished workflow's rules",
      status: "Research collaboration and evaluation; not universal automation",
      type: "Research / enterprise agents",
      audienceTags: ["Enterprise AI Teams", "Evaluation Engineers", "Legal Operations"],
      whatHappened: [
        "OpenAI described a collaboration with Ironclad on 11 contracting-workflow tasks, evaluated against 8–50 criteria per task. Astra achieved a mean rubric score of 55.0%, compared with 41.6% for GPT-5.6 Sol. Estimated time per attempt was 19.2 versus 37.0 minutes. Astra used Max reasoning; Sol used High. OpenAI explicitly says the times are simulated estimates, not measured customer savings, and the results concern these research tasks rather than every Ironclad workflow. [OpenAI study](https://openai.com/index/advancing-computer-use-with-ironclad/).",
      ],
      whyItMatters:
        "A rubric score is different from the proportion of tasks completed perfectly. A workflow can satisfy most criteria and still miss the one that protects the business. Useful evaluation therefore needs both a detailed rubric and critical requirements whose failure prevents acceptance. Faster attempts only help if the final state is acceptable.",
      applications: [
        {
          text: "Computer-use agents on 11 contracting-workflow research tasks, scored on 8–50 rubric criteria each",
          kind: "demonstrated",
          attribution: "OpenAI and Ironclad; times are simulated estimates",
        },
        {
          text: "A procurement-form prototype tested on both sides of a finance-approval threshold, inspecting the saved routing rather than the agent's report — a proposed test",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For a procurement-form prototype, define a spending threshold that requires finance approval and a category requiring security review. Test requests on both sides of the threshold, then change a rule and rerun the cases. Inspect the actual routing paths and saved configuration, rather than accepting the agent's statement that setup is complete.",
      developerTakeaway:
        "Score the final state independently. Report critical-rule failures, repair effort and actual measured runtime separately from rubric averages.",
      beforeChangeResult: {
        before: "Agent workflows are judged by whether they appear complete",
        change: "OpenAI and Ironclad score contracting tasks on detailed rubrics",
        result: "Evaluation needs critical-rule checks alongside rubric averages",
      },
      source: {
        heading: "Story 14 — OpenAI and Ironclad",
        body: "Primary source: OpenAI's October 6 study. Ironclad results use a **mean rubric score**, not a full-task success rate. Timing is **simulated**, and the comparison uses **different reasoning settings** (Astra at Max, Sol at High). Results concern these research tasks, not every Ironclad workflow.",
        links: [
          { label: "OpenAI: Advancing computer use with Ironclad", href: "https://openai.com/index/advancing-computer-use-with-ironclad/" },
        ],
      },
    },
    {
      rank: 15,
      id: "biohub-virtual-biology",
      date: "2026-10-07",
      headline: "Biohub expands the data foundation for predictive biology",
      posterHeadline: "Biohub expands the data foundation for predictive biology",
      status: "Commitment and collaboration; future data and model outcomes",
      type: "AI for science / data infrastructure",
      audienceTags: ["AI for Science", "Computational Biology", "Researchers"],
      whatHappened: [
        "Biohub announced an expanded collaboration with the U.S. Department of Energy, NIH and other partners, totaling $1.8 billion in funding, data, computation and measurement technology. Google DeepMind, Isomorphic Labs and Meta are collectively investing $300 million. The effort aims to create open, AI-ready biological data for predictive models of living systems. Its total includes contributions built on prior investment, not simply $1.8 billion of newly disbursed cash. This is a data-generation commitment, not a demonstrated cure or a finished universal cell model. [Biohub announcement](https://biohub.org/news/virtual-biology-initiative-expansion/).",
      ],
      whyItMatters:
        "Predictive scientific models depend on measurements that reveal how systems respond to interventions. More data is useful when it is documented, comparable and suitable for the question. A funding announcement cannot settle whether a future model will generalize across unseen cell types, laboratory methods or interventions.",
      applications: [
        {
          text: "A $1.8 billion commitment of funding, data, computation and measurement technology toward open, AI-ready biological data",
          kind: "demonstrated",
          attribution: "Biohub; includes contributions built on prior investment",
        },
        {
          text: "A student project on an existing public dataset that holds out a meaningful experimental condition and compares against a simple baseline — a proposed exercise",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A student project could begin with an existing public biological dataset and document its identifiers, measurement method and batch effects. Construct a split that holds out a meaningful experimental condition, then compare predictions against a simple baseline. This illustrates the evaluation problem; it does not rely on this initiative's future datasets already being available.",
      developerTakeaway:
        "Read data documentation before choosing a model. Track provenance, measurement conditions and the limits of the test distribution.",
      beforeChangeResult: {
        before: "Predictive biology is limited by scattered, inconsistent data",
        change: "Biohub and partners commit $1.8 billion toward open, AI-ready biological data",
        result: "Future models depend on documented data; outcomes are not yet demonstrated",
      },
      source: {
        heading: "Story 15 — Biohub virtual biology initiative",
        body: "Primary source: Biohub's October 7 announcement. The commitment **combines several kinds of contributions, including prior investment**. Future data and model goals are **not a demonstrated medical outcome**.",
        links: [
          {
            label: "Biohub: virtual biology initiative expansion",
            href: "https://biohub.org/news/virtual-biology-initiative-expansion/",
          },
        ],
      },
    },
  ],
  briefs: {
    heading: "Six shorter briefs",
    items: [
      {
        id: "chatgpt-shopping-scan",
        date: "October 1, 2026 · Product rollout",
        isoDate: "2026-10-01",
        title: "ChatGPT adds virtual try-on and easier document scanning",
        body: [
          "OpenAI added virtual try-on for clothing and accessories, saved shopping finds, and a multi-page camera Scan workflow rolling out on iOS. A generated try-on is a visualization rather than a guarantee of fit or fabric behavior. [Release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes).",
        ],
        source: {
          heading: "Brief — ChatGPT virtual try-on and Scan",
          body: "Primary source: ChatGPT release notes, October 1. Scan is **rolling out on iOS**; a try-on is a visualization, not a fit guarantee.",
          links: [{ label: "OpenAI: ChatGPT release notes", href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }],
        },
      },
      {
        id: "chatgpt-finances-access",
        date: "October 2, 2026 · U.S. rollout",
        isoDate: "2026-10-02",
        title: "Finances expands to Free and Go users in the U.S.",
        body: [
          "OpenAI expanded Finances in ChatGPT to Free and Go users in the U.S. across web, iOS and Android. This is an access expansion to an existing product. [Release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes).",
        ],
        source: {
          heading: "Brief — Finances in ChatGPT",
          body: "Primary source: ChatGPT release notes, October 2. An **access expansion** to an existing product, in the U.S. only.",
          links: [{ label: "OpenAI: ChatGPT release notes", href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }],
        },
      },
      {
        id: "chatgpt-audio-uploads",
        date: "October 6, 2026 · Paid subscriptions and workspaces; availability varies",
        isoDate: "2026-10-06",
        title: "ChatGPT supports audio-file uploads",
        body: [
          "Audio-file uploads can support transcription, summaries and questions about recordings for paid subscriptions and workspaces, subject to region, client, model and workspace conditions. Important names, numbers and commitments still need checking against the recording. [Release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes).",
        ],
        source: {
          heading: "Brief — ChatGPT audio-file uploads",
          body: "Primary source: ChatGPT release notes, October 6. Availability **varies by region, client, model and workspace**.",
          links: [{ label: "OpenAI: ChatGPT release notes", href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }],
        },
      },
      {
        id: "chatgpt-visual-ads",
        date: "October 5, 2026 · Test planned later in October",
        isoDate: "2026-10-05",
        title: "OpenAI announces a visual-ad test for image-generation sessions",
        body: [
          "OpenAI announced a visual-ad format to be tested later in October in the U.S. with selected advertisers, initially for Free and Go users during image generation. OpenAI says ads will be labeled and separate from the created image. The test was announced this week; it was not described as already universally active. [Announcement](https://openai.com/index/new-chatgpt-ads-format-and-measurement/).",
        ],
        source: {
          heading: "Brief — ChatGPT visual-ad test",
          body: "Primary source: OpenAI's October 5 announcement. The test is **planned for later in October**, not universally active this week.",
          links: [
            { label: "OpenAI: new ChatGPT ads format and measurement", href: "https://openai.com/index/new-chatgpt-ads-format-and-measurement/" },
          ],
        },
      },
      {
        id: "cloudflare-ai-search",
        date: "October 1, 2026 · Generally available",
        isoDate: "2026-10-01",
        title: "Cloudflare AI Search reaches general availability",
        body: [
          "Cloudflare announced general availability of AI Search, including direct image embeddings and OCR for scanned PDFs. For a document assistant, retrieval quality should be tested against difficult pages and visible source locations before evaluating the generated answer. [Cloudflare announcement](https://blog.cloudflare.com/ai-search-ga/).",
        ],
        source: {
          heading: "Brief — Cloudflare AI Search",
          body: "Primary source: Cloudflare's October 1 announcement.",
          links: [{ label: "Cloudflare: AI Search general availability", href: "https://blog.cloudflare.com/ai-search-ga/" }],
        },
      },
      {
        id: "cloudflare-web-search",
        date: "October 2, 2026 · Search integration available; native server tools planned",
        isoDate: "2026-10-02",
        title: "Cloudflare adds web-search access through AI Gateway",
        body: [
          "Cloudflare introduced web-search integration with Ceramic.ai, Exa and Linkup through AI Gateway, REST and Workers bindings. Native server tools were described as forthcoming. Fresh retrieval can help an agent find current information; the source still needs to support the answer. [Cloudflare announcement](https://blog.cloudflare.com/introducing-web-search-api/).",
        ],
        source: {
          heading: "Brief — Cloudflare web search through AI Gateway",
          body: "Primary source: Cloudflare's October 2 announcement. Native server tools are **forthcoming**.",
          links: [{ label: "Cloudflare: Introducing the web search API", href: "https://blog.cloudflare.com/introducing-web-search-api/" }],
        },
      },
    ],
  },
  biggerPicture: {
    heading: "What the week adds up to — SSK AI Hub analysis",
    lede: "Three engineering decisions connect these announcements: choose the level of intelligence a step actually needs, decide where the work belongs, and attach evidence to the result and permission to the action. Those decisions should be evaluated together.",
    sections: [
      {
        title: "Choose the level of intelligence a step needs",
        body: "A bounded classifier, a compact summarizer and a larger reasoning model serve different jobs. A route that lowers the first-call price can increase repair costs.",
      },
      {
        title: "Decide where the work belongs",
        body: "Local hardware, a hosted API or a controlled hybrid workflow. A local model can keep inference on the device while another part of the application still sends data away.",
      },
      {
        title: "Attach evidence to the result and permission to the action",
        body: "A verified agent identity can establish who is calling without granting the operation it requests. A checked proof artifact can support a precise statement without settling every scientific question around it.",
      },
    ],
    watchNext:
      "For builders, the most useful next experiment is a small workflow with a known end state, a realistic failure case and a record of what it cost to finish. That makes the week's announcements comparable on your own terms. The next coverage window is **October 8–14, 2026**.",
  },
  projectsIntro:
    "These are original project proposals, not announced products or completed SSK AI Hub implementations.",
  projects: [
    {
      slug: "local-multimodal-study-desk",
      name: "A local multimodal study desk",
      summary: "Search approved course notes, slide images and recordings locally, and show the original evidence beside every answer.",
      featured: false,
      problem: "Relevant lecture evidence is spread across notes, slide images and recordings.",
      fromThisIssue: "Local multimodal embeddings and interactive answer formats.",
      howItWorks:
        "Index approved material locally, retrieve candidate evidence, display pages and timestamps, and use an available generative model to explain the retrieved material. Keep the originals one click away. Measure retrieval first, then answer support. An interactive study tool should expose its assumptions and work on a phone as well as a laptop.",
      who: "Students and course teams working with their own approved material.",
      whyUseful: "It separates retrieval quality from answer support, so each can be measured on its own.",
      difficulty: "Intermediate",
      firstDeliverable:
        "A small indexed course folder and a manually checked question set. Start with one course rather than promising universal search.",
    },
    {
      slug: "router-with-escalation-log",
      name: "A router with a visible escalation log",
      summary: "Send bounded steps to a cheaper model, escalate uncertain cases to a stronger one, and record why and at what cost.",
      featured: false,
      problem: "A single expensive model handles every step, while a single cheap model struggles with difficult cases.",
      fromThisIssue: "Decision models, smaller model tiers and open-model previews.",
      howItWorks:
        "Define a bounded routing decision, test it on labeled examples, send uncertain cases to a stronger model and verify the final output. Record the reason for escalation and the complete cost of retries. Keep preview models optional until access and release conditions are clear.",
      who: "Teams running multi-step model workflows with a mix of easy and difficult tasks.",
      whyUseful: "It makes routing decisions, escalation reasons and total cost visible and comparable.",
      difficulty: "Intermediate",
      firstDeliverable:
        "A routing comparison on held-out tasks, reporting coverage, accepted-result quality, latency and total cost. Do not treat a model's self-reported confidence as calibrated without evidence.",
    },
    {
      slug: "permission-aware-service-sandbox",
      name: "A permission-aware customer-service sandbox",
      summary: "Prove an assistant can only act on an account within the scopes a customer granted, with a receipt for every action.",
      featured: false,
      problem: "An assistant can describe a requested account action without proving the customer authorized it.",
      fromThisIssue: "PACT, voice-agent coordination and workflow evaluation.",
      howItWorks:
        "Create fictional accounts, explicit read and change scopes, a consent flow and signed action receipts. Add a voice or chat interface only after the authorization path works. Test expired permission, wrong account, denied action, tool failure and human escalation.",
      who: "Teams building customer-facing agents that act on accounts.",
      whyUseful: "It proves the authorization path before a voice or chat interface is added on top.",
      difficulty: "Intermediate to advanced",
      firstDeliverable:
        "A demo where a read-only assistant reliably cannot make changes, and an authorized action leaves an inspectable record.",
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "October 8, 2026",
    headlines: [
      "GPT-6 and Intelligent UI: answers you can use",
      "Windows and NVIDIA: a platform for local agents",
      "Claude Haiku 5.5: more work for the small-model tier",
      "EmbeddingGemma 2: one local search space for all media",
      "Clef and Strands Decider: small models for bounded decisions",
      "Mistral Large 4: an API preview before the weights",
      "Reflection Beam: efficiency in the open-model race",
      "Nano Banana 2.1: fewer repair rounds for creative work",
      "Microsoft audio models: live transcripts, faster next steps",
      "Decagon Voice 3: talking and tool work together",
      "PACT: an agent must prove whose permission it carries",
      "OpenAI textGrain: provenance signals with limits",
      "OpenAI mathematics: publishing results starts the scrutiny",
      "OpenAI and Ironclad: score the finished workflow's rules",
      "Biohub expands the data foundation for predictive biology",
    ],
    theme: "AI gets cheaper, more visual and more accountable.",
  },
  generalSourceNote:
    "Source review: evening of October 7, 2026, America/Chicago, with a final pass over the primary sources before publication. This is a dated selection of significant announcements, not a claim to list every AI event. Company benchmark and efficiency statements remain attributed; proposed workflows require their own evaluation. September announcements repeated in October roundups — Dots and GPT-6.1 Sol (September 29), Gemini 4 Argon and SynthID Bio (September 30) and Sonnet 5.5 (September 28) — are not treated as October launches; the October 7 Sonnet 5.5 cache-price change is covered with Haiku 5.5.",
};

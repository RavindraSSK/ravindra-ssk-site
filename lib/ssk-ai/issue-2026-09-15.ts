import type { SskAiIssue } from "./types";

/**
 * Approved editorial source: SSK AI Hub weekly edition of September 15, 2026,
 * covering September 8–14, 2026 — September's Week 2, the month's second
 * weekly edition. Transcribed from the supplied editorial package (article,
 * source notes, image guide, asset manifest); the package's source cutoff is
 * September 14, 2026, 14:09 UTC, with September 14 still in progress at that
 * cutoff. Fourteen main stories and two focused briefs, selected by
 * significance rather than a fixed daily quota. Do not rewrite copy or add
 * claims beyond this object.
 *
 * Factual qualifiers travel with their claims throughout: staged/rollout
 * account access; a managed runtime's hosted-execution charges on top of a
 * quoted per-minute voice price; routing changes to older model aliases
 * distinct from a new model launch; a proposed proof under scrutiny, not an
 * independently verified result or a prize award; predicted (not measured or
 * diagnostic) genomic and remote-sensing outputs; a vendor threat-intelligence
 * report, a policy proposal and a draft code of conduct kept as three distinct
 * kinds of evidence; a technical follow-up explicitly not relabelled as a new
 * launch; commercial model licensing distinct from an open-source release;
 * vendor-tested, large-cluster infrastructure results not generalized to
 * smaller deployments; and first-stage retrieval evaluation distinct from a
 * complete answer-generation system. Every practical example is a proposed
 * workflow, not a documented customer deployment.
 *
 * Editorial images are the package's fifteen native 1672×941 illustrations
 * (cover + fourteen story images) in /public/ssk-ai/2026-09-15/, stored as
 * WebP per the site's repo-weight convention (see lib/ssk-ai/EDITIONS.md) —
 * original AI-generated editorial illustrations, not official product assets
 * or screenshots. The share card is a padded, uncropped 1200×630 derivative
 * of the cover made with scripts/make-social-card.mjs.
 */
export const issueSeptember15_2026: SskAiIssue = {
  slug: "ai-technology-updates-september-15-2026",
  edition: {
    kind: "weekly",
    number: 6,
    volume: 1,
    periodStart: "2026-09-08",
    periodEnd: "2026-09-14",
    periodLabel: "September 8–14, 2026",
  },
  // The edition publishes the morning after its coverage window closes, per
  // this desk's established cadence (see lib/ssk-ai/EDITIONS.md /
  // lib/ssk-ai/schedule.ts) — the same "day after periodEnd" pattern every
  // prior weekly edition on this site follows.
  datePublished: "2026-09-15",
  dateLabel: "September 15, 2026",
  cardTitle: "SSK AI: Does It Work, What's the Evidence, Who's in Control",
  title: "SSK AI — What Changed in AI & What You Can Build | September 15, 2026",
  seoTitle: "AI News September 8–14, 2026: Agents, Voice, Science | SSK AI",
  seoDescription:
    "Agents, live voice, visual AI, scientific research and oversight: the important AI developments of September 8–14, with sources and practical takeaways.",
  theme:
    "Three questions run through this week's fourteen developments: can the system do the work, what evidence backs its output, and who stays in control.",
  hero: {
    kind: "editorial-image",
    src: "/ssk-ai/2026-09-15/00-cover-website-linkedin.webp",
    width: 1672,
    height: 941,
    alt: "SSK AI Hub September 8–14, 2026 Week 2 cover with a free-form collage of the edition's developments.",
    caption: "SSK AI Hub — AI Tech Briefing: September 8–14, 2026, Week 2. The week at a glance.",
    description:
      "Original SSK AI Hub editorial cover for the September 8–14, 2026 edition — a free-form collage of the week's developments, edited from the Week 1 cover in the publication's established white, navy and blue style; conceptual artwork, not an official product asset.",
  },
  socialImage: {
    src: "/ssk-ai/2026-09-15/00-cover-social-1200x630.webp",
    width: 1200,
    height: 630,
    alt: "SSK AI Hub September 8–14, 2026 Week 2 cover with a free-form collage of the edition's developments.",
  },
  visualPlacement: "lead",
  storyLabels: {
    happened: "What changed",
    example: "Practical example",
  },
  opening: [
    "Sources for this edition were checked through September 14, 2026, 14:09 UTC; September 14 was still in progress at that cutoff.",
    "The most useful way to read this week is through three questions: **can an AI system complete useful work, what evidence supports its output, and who remains in control?** Agent APIs, personal agents and live voice interfaces address the first question. Scientific models, a mathematical proof claim and retrieval research put the second under pressure. Enterprise permissions, misuse reporting and frontier oversight bring the third into focus.",
    "This edition selects developments by significance, not by a fixed quota or a requirement to fill every date. It includes fourteen main stories and two shorter briefs. Product announcements, research claims, commercial offerings and policy proposals are labeled separately so they can be assessed on their own terms. All accompanying artwork is AI-generated editorial illustration.",
  ],
  readingList: [
    {
      storyId: "openai-agents-api",
      development: "OpenAI Agents API",
      announced: "September 10",
      question: "Can the system complete the task within clear permissions?",
    },
    {
      storyId: "chatgpt-images-2-5",
      development: "ChatGPT Images 2.5",
      announced: "September 8",
      question: "Does it preserve the evidence and details the work requires?",
    },
    {
      storyId: "deepseek-v4-1-flash",
      development: "DeepSeek V4.1 Flash",
      announced: "September 10",
      question: "Does it preserve the evidence and details the work requires?",
    },
    {
      storyId: "gpt-live-1",
      development: "GPT-Live-1",
      announced: "September 10",
      question: "Can the system complete the task within clear permissions?",
    },
    {
      storyId: "meta-muse",
      development: "Meta Muse",
      announced: "September 8",
      question: "Can the system complete the task within clear permissions?",
    },
    {
      storyId: "chatgpt-data-financial-services",
      development: "ChatGPT data & financial-services tools",
      announced: "September 10",
      question: "Does it preserve the evidence and details the work requires?",
    },
    {
      storyId: "navier-stokes-proof-claim",
      development: "Navier–Stokes proof claim",
      announced: "September 8–10",
      question: "What is predicted, what is measured and what is independently checked?",
    },
    {
      storyId: "alphagenome-atlas",
      development: "AlphaGenome Atlas",
      announced: "September 8",
      question: "What is predicted, what is measured and what is independently checked?",
    },
    {
      storyId: "ai-safeguards-oversight",
      development: "AI safeguards & oversight",
      announced: "September 10–14",
      question: "How do stated principles affect real deployment decisions?",
    },
    {
      storyId: "nasa-ibm-lunar-model",
      development: "NASA–IBM lunar model",
      announced: "September 10",
      question: "What is predicted, what is measured and what is independently checked?",
    },
    {
      storyId: "ibm-llm-d",
      development: "IBM llm-d",
      announced: "September 8",
      question: "Which bottleneck or training problem is actually being addressed?",
    },
    {
      storyId: "runway-model-licensing",
      development: "Runway model licensing",
      announced: "September 11",
      question: "Does it preserve the evidence and details the work requires?",
    },
    {
      storyId: "skild-nvidia-video-robotics",
      development: "Skild + NVIDIA",
      announced: "September 10",
      question: "Which bottleneck or training problem is actually being addressed?",
    },
    {
      storyId: "perplexity-q2d-web",
      development: "Perplexity Q2D-Web",
      announced: "September 8–9",
      question: "What is predicted, what is measured and what is independently checked?",
    },
    {
      storyId: "google-finland-investment",
      development: "Google's Finland investment",
      announced: "September 9",
      question: "Which bottleneck or training problem is actually being addressed?",
    },
    {
      storyId: "toolgrad-explainer",
      development: "ToolGrad",
      announced: "September 10",
      question: "Which bottleneck or training problem is actually being addressed?",
    },
  ],
  stories: [
    {
      rank: 1,
      id: "openai-agents-api",
      date: "2026-09-10",
      headline: "OpenAI's Agents API moves more of the agent runtime into a managed service",
      posterHeadline: "OpenAI's Agents API moves the agent runtime into a managed service",
      status: "Public beta",
      type: "Agent infrastructure",
      audienceTags: ["Agent Developers", "Platform Teams", "API Developers", "Product Teams"],
      whatHappened: [
        "OpenAI introduced the Agents API in public beta. It combines an agent harness with context management, tool search and subagents, while allowing execution in OpenAI-hosted sandboxes, a developer's infrastructure or partner environments. Hosted execution has its own charges; a managed runtime does not make an entire agent task free. [OpenAI announcement](https://openai.com/index/introducing-the-agents-api/), [developer announcement and billing context](https://community.openai.com/t/introducing-the-agents-api-and-hosted-sandboxes/1396481).",
      ],
      whyItMatters:
        "The integration question changes from \"How do I write an agent loop?\" to \"Which responsibilities should my application keep?\" Authentication, permissions, business rules and acceptable completion criteria still belong in the product design. A more capable runtime can reduce plumbing without resolving those decisions.",
      applications: [
        {
          text: "A managed agent runtime combining a harness, context management, tool search and subagents, executable in OpenAI-hosted sandboxes, a developer's own infrastructure, or partner environments",
          kind: "demonstrated",
          attribution: "OpenAI's announcement; public beta",
        },
        {
          text: "A support assistant that investigates a failed delivery under a narrow permission set, with refund issuance held behind a separate confirmation step and audit trail",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Consider a support assistant that investigates a failed delivery. It could inspect approved records, draft a response and prepare a refund request. Start with a version that cannot issue refunds, then add a separate confirmation step and an audit trail. This makes success measurable before you give the workflow greater authority.",
      developerTakeaway:
        "Compare a small, fixed task set against your existing implementation. Record completion rate, human interventions, latency and total execution cost. Keep tool permissions narrow and make retries safe.",
      beforeChangeResult: {
        before: "Teams wrote their own agent harness, context management and tool orchestration",
        change: "OpenAI's Agents API bundles harness, context management, tool search and subagents into a managed public-beta service",
        result: "Integration work shifts from building an agent loop to deciding which responsibilities the application keeps",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/01-agents-api.webp",
        width: 1672,
        height: 941,
        alt: "Conceptual OpenAI Agents API workstation connected to a managed cloud runtime.",
        caption: "SSK AI Hub editorial illustration: an OpenAI Agents API workstation connected to a managed cloud runtime.",
        description:
          "Original SSK AI Hub editorial illustration for the OpenAI Agents API story — a conceptual workstation-to-cloud-runtime scene, not an official product screenshot.",
      },
      source: {
        heading: "Story 1 — OpenAI Agents API",
        body: "Primary sources: OpenAI's announcement and its developer-forum billing context. The Agents API is a **public beta**. Hosted execution carries its own charges — a managed runtime is not a claim that an entire agent task runs free.",
        links: [
          { label: "OpenAI: introducing the Agents API", href: "https://openai.com/index/introducing-the-agents-api/" },
          {
            label: "OpenAI developer community: Agents API and hosted sandboxes",
            href: "https://community.openai.com/t/introducing-the-agents-api-and-hosted-sandboxes/1396481",
          },
        ],
      },
    },
    {
      rank: 2,
      id: "chatgpt-images-2-5",
      date: "2026-09-08",
      headline: "ChatGPT Images 2.5 focuses attention on controlled visual production",
      posterHeadline: "ChatGPT Images 2.5 focuses attention on controlled visual production",
      status: "Announced rollout; API models",
      type: "Multimodal creative tools",
      audienceTags: ["Design & Publishing Teams", "Product Teams", "Creative Technologists", "API Developers"],
      whatHappened: [
        "OpenAI announced ChatGPT Images 2.5, with Flare and Sunburst API models, emphasizing editing precision and reference fidelity. Its announcement also describes workflows involving sketches, templates and collaborative feedback. Availability depends on the surface and account rollout; the announcement is not evidence that every account immediately has identical access. [OpenAI announcement](https://openai.com/index/introducing-chatgpt-images-2-5/).",
      ],
      whyItMatters:
        "For a publisher or design team, usefulness comes from preserving the elements that should stay stable while changing the subject. An attractive first image is only one part of the job. A dependable workflow also needs accurate text, consistent branding and revisions that do not disturb already approved details.",
      applications: [
        {
          text: "Editing precision and reference fidelity, with workflows involving sketches, templates and collaborative feedback, through the Flare and Sunburst API models",
          kind: "demonstrated",
          attribution: "OpenAI's announcement; account rollout varies",
        },
        {
          text: "A weekly technology newsletter that keeps a fixed masthead and palette while supplying a different news brief each edition",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A weekly technology newsletter can keep a fixed masthead and palette, then supply a different news brief for each edition. Review the date, product spelling and visual claims separately from aesthetics. A beautiful image of a software service as a physical device would still communicate the wrong thing.",
      developerTakeaway:
        "Test reference preservation and targeted edits with your own assets. Store approved originals and inspect the actual output dimensions. Do not describe an image as 4K merely because the prompt requested 4K.",
      beforeChangeResult: {
        before: "Image generation for editorial and brand work risked drifting logos, text and approved details across edits",
        change: "ChatGPT Images 2.5 (Flare and Sunburst API models) emphasizes edit precision and reference fidelity",
        result: "The test for a workflow becomes whether approved details survive the next revision, not just the first output",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/02-chatgpt-images.webp",
        width: 1672,
        height: 941,
        alt: "ChatGPT Images 2.5 editorial concept showing a flower illustration being precisely edited with a reference image.",
        caption: "SSK AI Hub editorial illustration: ChatGPT Images 2.5's precision editing, shown with a reference image.",
        description:
          "Original SSK AI Hub editorial illustration for the ChatGPT Images 2.5 story — a conceptual precision-editing scene, not an official product screenshot.",
      },
      source: {
        heading: "Story 2 — ChatGPT Images 2.5",
        body: "Primary source: OpenAI's announcement. This is an **announced rollout**; availability depends on the surface and account, and the announcement is not evidence that every account immediately has identical access.",
        links: [{ label: "OpenAI: introducing ChatGPT Images 2.5", href: "https://openai.com/index/introducing-chatgpt-images-2-5/" }],
      },
    },
    {
      rank: 3,
      id: "deepseek-v4-1-flash",
      date: "2026-09-10",
      headline: "DeepSeek V4.1 Flash adds a new native visual model to the API",
      posterHeadline: "DeepSeek V4.1 Flash adds a new native visual model to the API",
      status: "API release and routing changes",
      type: "Multimodal model & API",
      audienceTags: ["API Developers", "ML Engineers", "Document AI Builders", "Platform Teams"],
      whatHappened: [
        "DeepSeek's dated API changelog introduces V4.1 Flash as a native visual multimodal model. The new identifier is `deepseek-flash`; the older `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` identifiers temporarily route to it. The same entry says the V4 Pro service continues beyond September 14 with unchanged billing — that continuation is not a separate September 14 model launch. [Official dated API changelog](https://api-docs.deepseek.com/updates/).",
      ],
      whyItMatters:
        "A routing change can affect an application even when its own configuration file stays untouched. Visual capability broadens possible inputs, but migration quality still depends on the documents, screenshots and images your users actually submit. Provider benchmark claims are a starting point for evaluation, not a substitute for it.",
      applications: [
        {
          text: "Native visual multimodal understanding through the API, with older Flash aliases rerouted to the new model",
          kind: "demonstrated",
          attribution: "DeepSeek's dated API changelog",
        },
        {
          text: "An invoice-review assistant tested against blurry scans, rotated pages, stamps and misleading totals before trusting the new routing",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For an invoice review assistant, build a sample containing blurry scans, rotated pages, stamps, small print and misleading totals. Compare extracted values with the original documents. Require the assistant to point to evidence and to acknowledge when an image is unreadable.",
      developerTakeaway:
        "Log the model actually served where the API exposes it, rerun representative evaluations, and check error handling before increasing traffic. Track image processing cost as part of the task.",
      beforeChangeResult: {
        before: "Older DeepSeek Flash identifiers pointed at text-only or separate vision-experimental models",
        change: "V4.1 Flash ships as a native visual multimodal model under deepseek-flash, with the older aliases temporarily rerouted to it; V4 Pro continues unchanged",
        result: "Applications on the older aliases inherit a new model without a configuration change, so their own evaluations need rerunning",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/03-deepseek.webp",
        width: 1672,
        height: 941,
        alt: "DeepSeek V4.1 Flash concept with a blue whale and visual document panels.",
        caption: "SSK AI Hub editorial illustration: DeepSeek V4.1 Flash's native visual understanding.",
        description:
          "Original SSK AI Hub editorial illustration for the DeepSeek V4.1 Flash story — a conceptual scene, not an official product screenshot.",
      },
      source: {
        heading: "Story 3 — DeepSeek V4.1 Flash",
        body: "Primary source: DeepSeek's dated API changelog. Older Flash aliases (`deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`) **reroute** to the new model. V4 Pro's continuation beyond September 14 is described in the same September 10 changelog entry — it is **not a new September 14 launch**.",
        links: [{ label: "DeepSeek: dated API changelog", href: "https://api-docs.deepseek.com/updates/" }],
      },
    },
    {
      rank: 4,
      id: "gpt-live-1",
      date: "2026-09-10",
      headline: "GPT-Live-1 makes overlapping conversation an API design consideration",
      posterHeadline: "GPT-Live-1 makes overlapping conversation an API design consideration",
      status: "API launch",
      type: "Voice AI",
      audienceTags: ["Voice & Speech Builders", "Agent Developers", "API Developers", "Product Teams"],
      whatHappened: [
        "OpenAI introduced GPT-Live-1 for simultaneous listening and speaking. The voice front end can delegate reasoning and tool work to a backend model, including third-party models. OpenAI quotes $0.05 per minute for the voice front end; backend model and tool usage can add to the total. This is not an all-inclusive application price. [OpenAI API announcement](https://openai.com/index/introducing-gpt-live-1-in-the-api/).",
      ],
      whyItMatters:
        "A voice agent needs more than fluent speech. It must handle interruption, corrections, silence and a speaker changing their mind. Separating conversational timing from deeper reasoning may help teams tune those responsibilities independently, but it also creates failure paths that need clear handling.",
      applications: [
        {
          text: "Simultaneous listening and speaking through the API, with reasoning and tool work delegated to a separate backend model, including third-party ones",
          kind: "demonstrated",
          attribution: "OpenAI's API announcement",
        },
        {
          text: "A scheduling voice agent that drops an outdated request the moment a caller corrects themselves and confirms the final time before booking",
          kind: "potential",
        },
      ],
      realWorldExample:
        "Imagine someone rescheduling a service visit: \"Tuesday morning—actually, Thursday afternoon.\" The system should stop pursuing the old request, preserve the correction and confirm the final time before committing it. A polished voice cannot compensate for booking the wrong appointment.",
      developerTakeaway:
        "Test interruptions during both speech and tool execution. Measure time to stop speaking, state consistency, task completion and total cost per successful conversation. Include a clear handoff when the system cannot complete the request.",
      beforeChangeResult: {
        before: "Voice interfaces typically waited for a pause before responding, with reasoning running through a single voice model",
        change: "GPT-Live-1 supports simultaneous listening and speaking, delegating reasoning and tool work to a backend model, at $0.05 per minute for the voice front end alone",
        result: "Interruption handling and backend orchestration become design decisions, and the quoted price covers only part of a full conversation's cost",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/04-gpt-live.webp",
        width: 1672,
        height: 941,
        alt: "GPT-Live-1 conceptual microphone and headphones with two overlapping sound ribbons; no physical product is implied.",
        caption: "SSK AI Hub editorial illustration: GPT-Live-1's simultaneous listening and speaking.",
        description:
          "Original SSK AI Hub editorial illustration for the GPT-Live-1 story — a conceptual voice-technology scene, not an official product image.",
      },
      source: {
        heading: "Story 4 — OpenAI GPT-Live-1",
        body: "Primary source: OpenAI's API announcement. The quoted **$0.05 per minute** covers the voice front end only; backend model and tool usage add to the total, so it is not an all-inclusive application price.",
        links: [{ label: "OpenAI: introducing GPT-Live-1 in the API", href: "https://openai.com/index/introducing-gpt-live-1-in-the-api/" }],
      },
    },
    {
      rank: 5,
      id: "meta-muse",
      date: "2026-09-08",
      headline: "Meta Muse brings personal agents—and permission boundaries—into focus",
      posterHeadline: "Meta Muse brings personal agents and permission boundaries into focus",
      status: "Product announcement",
      type: "Personal agent",
      audienceTags: ["Agent Developers", "Consumer Product Teams", "AI Safety & Governance", "Product Teams"],
      whatHappened: [
        "Meta introduced Muse, a personal AI agent using a dedicated SecureVM browser environment for work that can continue after the app closes. Meta describes approvals for consequential actions such as sending messages or purchases, with Sentinel enforcing permission boundaries. The architecture separates sensitive services from the agent runtime; that should not be paraphrased as an unconditional promise that no data ever leaves the environment. [Meta product announcement](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/), [Meta security architecture](https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse).",
      ],
      whyItMatters:
        "Personal agents are useful when they can carry context across several steps, but a longer task also exposes more opportunities to misread a page or follow a malicious instruction. The quality of the approval request matters: users need to understand the actual action, recipient and information involved.",
      applications: [
        {
          text: "A personal agent working in a dedicated browser environment, continuing tasks after the app closes, with approval gates for consequential actions enforced by Sentinel",
          kind: "demonstrated",
          attribution: "Meta's product announcement and security architecture post",
        },
        {
          text: "A travel assistant whose purchase approval shows the hotel, dates, full price and cancellation terms rather than a bare \"Continue?\" prompt",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A travel assistant might compare hotel options and prepare a reservation. The meaningful checkpoint is a summary of the hotel, dates, full price and cancellation terms before purchase. An approval that merely says \"Continue?\" gives the user too little information.",
      developerTakeaway:
        "Borrow the separation between proposing and committing actions in your own products. Treat web content as input rather than authority, and make it possible to inspect and cancel pending work.",
      beforeChangeResult: {
        before: "Personal AI agents lacked a clearly described permission architecture for consequential actions",
        change: "Meta's Muse runs in a dedicated SecureVM browser environment and requires approval for actions like sending messages or purchases, enforced by Sentinel",
        result: "Sensitive services are architecturally separated from the agent runtime, though that is not the same as a guarantee that no data ever leaves it",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/05-meta-muse.webp",
        width: 1672,
        height: 941,
        alt: "Meta Muse concept showing a personal-agent phone with calendar, shopping and approval objects.",
        caption: "SSK AI Hub editorial illustration: Meta Muse as a personal agent with approval boundaries.",
        description:
          "Original SSK AI Hub editorial illustration for the Meta Muse story — a conceptual scene, not actual product UI.",
      },
      source: {
        heading: "Story 5 — Meta Muse",
        body: "Primary sources: Meta's product announcement and its security-architecture post. The SecureVM/Sentinel separation of sensitive services from the agent runtime is **Meta's description**; it is not an unconditional promise that no data ever leaves the environment.",
        links: [
          { label: "Meta: introducing Muse, a personal AI agent", href: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/" },
          {
            label: "Meta: security and safety for AI agents — the approach with Muse",
            href: "https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse",
          },
        ],
      },
    },
    {
      rank: 6,
      id: "chatgpt-data-financial-services",
      date: "2026-09-10",
      headline: "ChatGPT's data and financial-services offerings put governed information at the center",
      posterHeadline: "ChatGPT's data and financial-services offerings center governed information",
      status: "Enterprise product announcements",
      type: "Enterprise data & finance AI",
      audienceTags: ["Enterprise AI", "Data & Analytics Teams", "Financial Services", "Product Teams"],
      whatHappened: [
        "OpenAI announced a data agent for connected business information, including work with semantic definitions and source-system permissions. It also introduced ChatGPT Financial Services, a tailored offering with financial information providers and source traceability. These are related but distinct announcements; they should not be presented as universal access to premium financial data for every ChatGPT subscriber. [OpenAI data-agent announcement](https://openai.com/index/put-data-to-work/), [Financial Services announcement](https://openai.com/index/introducing-chatgpt-financial-services/).",
      ],
      whyItMatters:
        "A convincing chart can be wrong because the underlying business definition is wrong. \"Revenue,\" \"active customer\" and \"renewal\" often mean different things across teams. An assistant needs agreed definitions and authorized data access before its analysis can be trusted in a decision.",
      applications: [
        {
          text: "A data agent working with connected business information under semantic definitions and source-system permissions; a financial-services offering with source traceability",
          kind: "demonstrated",
          attribution: "OpenAI's two announcements; related but distinct offerings",
        },
        {
          text: "A weekly sales report that states its reporting period, currency and refund treatment, then has a team member reproduce one figure from its cited source",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For a weekly sales report, require the agent to state the reporting period, currency, treatment of refunds and comparison baseline. Then ask another team member to reproduce a key figure from its cited source. This is a stronger check than asking whether the explanation sounds plausible.",
      developerTakeaway:
        "Start with a read-only workflow and a small set of approved metrics. Evaluate whether permissions remain effective through summaries, exports and follow-up questions. Financial outputs still need domain review; a citation is evidence to inspect, not a guarantee of correctness.",
      beforeChangeResult: {
        before: "Business analysis assistants risked producing a convincing chart built on an ungoverned or ambiguous data definition",
        change: "OpenAI introduced a data agent with semantic definitions and source-system permissions, plus a separate ChatGPT Financial Services offering with source traceability",
        result: "Trust shifts from how plausible an explanation sounds to whether its definitions, permissions and source citations can be reproduced",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/06-data-agent.webp",
        width: 1672,
        height: 941,
        alt: "ChatGPT Work conceptual laptop with business charts and source documents, representing data and financial workflows.",
        caption: "SSK AI Hub editorial illustration: ChatGPT's data agent and financial-services offerings.",
        description:
          "Original SSK AI Hub editorial illustration for the ChatGPT data and financial-services story — a conceptual scene, not an official product screenshot.",
      },
      source: {
        heading: "Story 6 — ChatGPT data agent & Financial Services",
        body: "Primary sources: OpenAI's two announcements. The data agent and Financial Services are **related but distinct offerings** — neither should be presented as universal access to premium financial data for every ChatGPT subscriber.",
        links: [
          { label: "OpenAI: put data to work", href: "https://openai.com/index/put-data-to-work/" },
          { label: "OpenAI: introducing ChatGPT Financial Services", href: "https://openai.com/index/introducing-chatgpt-financial-services/" },
        ],
      },
    },
    {
      rank: 7,
      id: "navier-stokes-proof-claim",
      date: "2026-09-08",
      headline: "An AI-assisted Navier–Stokes proof claim demands careful mathematical reading",
      posterHeadline: "An AI-assisted Navier–Stokes proof claim demands careful reading",
      status: "Research claim under scrutiny",
      type: "AI-assisted mathematics research",
      audienceTags: ["Mathematicians", "AI Researchers", "Research Leads", "Science Journalists"],
      whatHappened: [
        "OpenAI published a proposed finite-time singularity result for forced Navier–Stokes equations, describing work by an internal model and a large coordinated agent effort. It released proof material and discussed Lean formalization. A September 10 update acknowledged relevant priority involving Alpoge and Buckmaster's forced Euler work. This briefing does not independently validate the proof or claim a Millennium Prize has been awarded. [OpenAI research announcement and September 10 update](https://openai.com/index/navier-stokes-solution/).",
      ],
      whyItMatters:
        "The headline is striking, but the exact mathematical statement is essential. Assumptions, forcing conditions and the relationship to earlier results determine what has actually been established. Formal checking can strengthen confidence in a precisely encoded statement; experts still need to assess whether that statement supports the surrounding claims.",
      applications: [
        {
          text: "A proposed finite-time singularity proof for forced Navier–Stokes equations, with released proof material and discussion of formal Lean verification",
          kind: "demonstrated",
          attribution: "OpenAI's research announcement and September 10 update; not independently verified here",
        },
        {
          text: "A three-column reading exercise tracking the theorem as stated, the formal or computational evidence supplied, and the independent expert assessment available",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A useful reading exercise is to make three columns: the theorem as stated, the computational or formal evidence supplied, and the independent expert assessment available. Keep a claim in the first column until the other evidence genuinely supports moving it further.",
      developerTakeaway:
        "When reporting AI research, distinguish discovery, proposed proof, formal verification and community acceptance. Avoid collapsing them into \"AI solved mathematics.\" The same discipline applies to scientific model benchmarks and claimed breakthroughs outside mathematics.",
      beforeChangeResult: {
        before: "A finite-time singularity result for forced Navier–Stokes equations remained an open mathematical question",
        change: "OpenAI published a proposed proof using an internal model and a large agent effort, released proof material, and updated its priority attribution on September 10",
        result: "The claim is a proof under active scrutiny, not an independently verified result or a Millennium Prize award",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/07-navier-stokes.webp",
        width: 1672,
        height: 941,
        alt: "Water vortex and mathematics notebook illustrating a Navier–Stokes proof claim, with wording that signals scrutiny.",
        caption: "SSK AI Hub editorial illustration: the Navier–Stokes proof claim, shown as a claim under scrutiny.",
        description:
          "Original SSK AI Hub editorial illustration for the Navier–Stokes story — a conceptual research-discovery scene, not measured equations or a prize confirmation.",
      },
      source: {
        heading: "Story 7 — OpenAI Navier–Stokes proof claim",
        body: "Primary source: OpenAI's research announcement and its September 10 update. This is a **proposed proof under scrutiny**; the September 10 update credits relevant priority to Alpoge and Buckmaster's forced Euler work. This briefing does not independently validate the proof or claim a Millennium Prize has been awarded.",
        links: [{ label: "OpenAI: Navier–Stokes solution announcement and update", href: "https://openai.com/index/navier-stokes-solution/" }],
      },
    },
    {
      rank: 8,
      id: "alphagenome-atlas",
      date: "2026-09-08",
      headline: "AlphaGenome Atlas makes predicted DNA-variant effects easier to explore",
      posterHeadline: "AlphaGenome Atlas makes predicted DNA-variant effects easier to explore",
      status: "Research resource release",
      type: "AI for genomics research",
      audienceTags: ["Genomics Researchers", "Bioinformaticians", "AI for Science", "Research Leads"],
      whatHappened: [
        "Google DeepMind introduced AlphaGenome Atlas, a resource containing predicted effects for roughly nine billion single-letter DNA variants. It includes an interface for exploring predictions and an AVI score intended to help prioritize investigation. These are model predictions, not experiments performed on every variant, and the resource should not be treated as an individual medical diagnosis. [Google DeepMind announcement](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/).",
      ],
      whyItMatters:
        "Precomputed results can make a research model useful to more people because they remove the need to run every inference themselves. The remaining challenge is interpretation: a large prediction table does not automatically explain which signals will hold up in a particular biological context.",
      applications: [
        {
          text: "A precomputed, explorable atlas of predicted DNA-variant effects with an AVI prioritization score",
          kind: "demonstrated",
          attribution: "Google DeepMind's announcement",
        },
        {
          text: "A research team shortlisting variants for follow-up experiments, recording why each was selected and which measurement would support or reject the prediction",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A research team could use the atlas to shortlist variants for follow-up experiments, then record why each candidate was selected and which measurements would support or reject the prediction. That produces a testable research plan instead of a list of apparently authoritative scores.",
      developerTakeaway:
        "Keep predicted and experimentally measured data distinct in your interfaces and exports. Preserve provenance, uncertainty and model version. For learners, focus on how a model narrows a search space rather than assuming it replaces biological validation.",
      beforeChangeResult: {
        before: "Exploring predicted effects of individual DNA variants required running inference on each one separately",
        change: "AlphaGenome Atlas precomputes predicted effects for roughly nine billion single-letter DNA variants, with an interface and an AVI prioritization score",
        result: "Access moves from a research model to a searchable resource, though predictions still need to be read as predictions, not measurements or diagnoses",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/08-alphagenome.webp",
        width: 1672,
        height: 941,
        alt: "AlphaGenome Atlas conceptual DNA helix and genomic prediction graphics.",
        caption: "SSK AI Hub editorial illustration: AlphaGenome Atlas and predicted DNA-variant effects.",
        description:
          "Original SSK AI Hub editorial illustration for the AlphaGenome Atlas story — a conceptual scientific scene, not an official screenshot or measured visualization.",
      },
      source: {
        heading: "Story 8 — Google DeepMind AlphaGenome Atlas",
        body: "Primary source: Google DeepMind's announcement. These are **model predictions**, not experiments performed on every variant; the resource should not be treated as an individual medical diagnosis.",
        links: [
          {
            label: "Google DeepMind: AlphaGenome Atlas",
            href: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/",
          },
        ],
      },
    },
    {
      rank: 9,
      id: "ai-safeguards-oversight",
      date: "2026-09-10",
      headline: "The week's safety discussion moves from observed misuse to frontier oversight",
      posterHeadline: "The week's safety discussion moves from misuse to frontier oversight",
      status: "Report, proposals and public consultation",
      type: "AI safety & governance",
      audienceTags: ["AI Safety & Governance", "Policy & Trust Teams", "Research Leads", "Enterprise AI"],
      whatHappened: [
        "Anthropic's September 10 threat report describes investigated misuse from December 2025 through August 2026; those incidents did not all occur this week. [Anthropic threat report, September 10](https://www.anthropic.com/threat-intelligence-report-september-2026).",
      ],
      updates: [
        {
          heading: "September 12–13 — a call to pace frontier development",
          body: "Over the weekend, Dario Amodei urged stronger evaluation and coordination around frontier development. Reuters corroborated the September 12 date, and weekend reaction coverage on September 13 supports that chronology. [Amodei's essay](https://darioamodei.com/post/we-must-pace-the-frontier), [Reuters date corroboration, September 12](https://www.reuters.com/business/anthropic-ceo-urges-ai-companies-slow-model-development-2026-09-12/), [weekend reaction coverage, September 13](https://www.theguardian.com/technology/2026/sep/13/openai-sam-altman-elon-musk-back-anthropic-calls-brakes-ai-development).",
        },
        {
          heading: "September 14 — a draft code of conduct for consultation",
          body: "Microsoft AI published a draft code of conduct for public consultation. This is a draft framework open for comment, not confirmation that every described behavior is already achieved. [Microsoft AI draft, September 14](https://microsoft.ai/news/mai-code-of-conduct/).",
        },
      ],
      whyItMatters:
        "The connection is accountability. A system that can do more useful work can also operate across more consequential contexts. Companies need ways to observe what their systems do, test boundaries and respond to failures. A published principle becomes more meaningful when outsiders can examine how it affects deployment decisions.",
      applications: [
        {
          text: "A documented threat-intelligence investigation, a public pacing proposal, and a draft code of conduct opened for consultation",
          kind: "demonstrated",
          attribution: "Anthropic, Dario Amodei and Microsoft AI's respective publications",
        },
        {
          text: "A small team's written policy listing what an agent may access, what needs approval, what is logged and who can stop it, tested against a page containing conflicting instructions",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For a small team, translate broad principles into one concrete workflow. List what the agent may access, what requires approval, what is logged and who can stop it. Test whether the system respects those limits when a retrieved page contains conflicting instructions.",
      developerTakeaway:
        "Separate evidence about an incident from a vendor's interpretation of it. Treat forecasts as forecasts and proposals as proposals. Watch for independent evaluator access, measurable release conditions and documented enforcement rather than assuming that publication itself proves safety.",
      beforeChangeResult: {
        before: "Reports of AI misuse, calls for pacing frontier development and codes of conduct circulated as separate, loosely connected items",
        change: "Anthropic published a threat report on investigated misuse, Dario Amodei urged coordination over the weekend, and Microsoft AI published a draft code of conduct for consultation",
        result: "The week surfaces three distinct kinds of evidence — a vendor investigation, a policy proposal and a draft framework — not one industry-wide agreement",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/09-ai-safeguards.webp",
        width: 1672,
        height: 941,
        alt: "Conceptual AI oversight illustration with a shield, human approval key and technology motifs.",
        caption: "SSK AI Hub editorial illustration: this week's AI safeguards and oversight discussion.",
        description:
          "Original SSK AI Hub editorial illustration for the AI safeguards and oversight story — a conceptual scene, not an official screenshot.",
      },
      source: {
        heading: "Story 9 — AI safeguards and frontier oversight",
        body: "Primary sources: Anthropic's threat report (which covers an investigation period from December 2025 through August 2026, not incidents dated to this week), Dario Amodei's essay with Reuters' September 12 date corroboration and September 13 reaction coverage, and Microsoft AI's September 14 draft. These are **three distinct kinds of evidence** — a vendor investigation, a policy proposal, and a draft framework open for consultation — not an industry-wide agreement to halt development.",
        links: [
          { label: "Anthropic: threat intelligence report, September 2026", href: "https://www.anthropic.com/threat-intelligence-report-september-2026" },
          { label: "Dario Amodei: we must pace the frontier", href: "https://darioamodei.com/post/we-must-pace-the-frontier" },
          {
            label: "Reuters: Anthropic CEO urges AI companies to slow model development (September 12)",
            href: "https://www.reuters.com/business/anthropic-ceo-urges-ai-companies-slow-model-development-2026-09-12/",
          },
          {
            label: "The Guardian: weekend reaction coverage (September 13)",
            href: "https://www.theguardian.com/technology/2026/sep/13/openai-sam-altman-elon-musk-back-anthropic-calls-brakes-ai-development",
          },
          { label: "Microsoft AI: draft code of conduct (September 14)", href: "https://microsoft.ai/news/mai-code-of-conduct/" },
        ],
      },
    },
    {
      rank: 10,
      id: "nasa-ibm-lunar-model",
      date: "2026-09-10",
      headline: "NASA and IBM extend foundation models to lunar remote sensing",
      posterHeadline: "NASA and IBM extend foundation models to lunar remote sensing",
      status: "Open-source research model announcement",
      type: "AI for Earth & space science",
      audienceTags: ["Remote Sensing Researchers", "AI for Science", "Planetary Scientists", "ML Researchers"],
      whatHappened: [
        "IBM Research announced a NASA–IBM lunar foundation model built for multimodal remote-sensing data from different missions and scales. Based on the TerraMind approach, the model is intended to support research on lunar features and related mapping tasks. Potential applications involving craters, volcanism or polar ice are research directions; the announcement does not establish a new discovery of lunar ice. [IBM Research announcement](https://research.ibm.com/blog/nasa-ibm-lunar-foundation-model).",
      ],
      whyItMatters:
        "Scientific data often arrives in formats that do not line up neatly. A shared representation can make it easier to combine observations and adapt to a downstream task, but the model must preserve the distinctions between what a sensor measured and what the model inferred.",
      applications: [
        {
          text: "An open-source foundation model for multimodal lunar remote-sensing data across missions and scales, based on the TerraMind approach",
          kind: "demonstrated",
          attribution: "IBM Research's announcement",
        },
        {
          text: "A learning project comparing a simple baseline against the pretrained representation on a small, well-documented mapping task, split by geography to avoid leakage",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For a learning project, compare a simple baseline with a pretrained representation on a small, well-documented mapping task. Split the evaluation by geography or acquisition conditions so nearly identical regions do not appear in both training and testing.",
      developerTakeaway:
        "Read the model card before using the weights. Check input modalities, resolution, licensing and intended uses, then report limitations alongside results. A strong result on one mapping dataset is not evidence of universal scientific reliability.",
      beforeChangeResult: {
        before: "Lunar remote-sensing data from different missions and scales lacked a shared foundation-model representation",
        change: "NASA and IBM released an open-source lunar foundation model built on the TerraMind approach for multimodal remote-sensing research",
        result: "Combining observations across missions becomes more tractable, provided sensor measurements and model inferences stay clearly distinguished",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/10-lunar-model.webp",
        width: 1672,
        height: 941,
        alt: "NASA–IBM Lunar Model concept with layered lunar observation maps and a satellite.",
        caption: "SSK AI Hub editorial illustration: the NASA–IBM lunar foundation model for remote sensing.",
        description:
          "Original SSK AI Hub editorial illustration for the NASA–IBM lunar model story — a conceptual scene, not an official screenshot or measured data product.",
      },
      source: {
        heading: "Story 10 — NASA–IBM lunar foundation model",
        body: "Primary source: IBM Research's announcement. This is an **open-source research model release** built on the TerraMind approach; craters, volcanism and polar-ice applications are **research directions**, not a claimed new discovery of lunar ice.",
        links: [{ label: "IBM Research: NASA–IBM lunar foundation model", href: "https://research.ibm.com/blog/nasa-ibm-lunar-foundation-model" }],
      },
    },
    {
      rank: 11,
      id: "ibm-llm-d",
      date: "2026-09-08",
      headline: "IBM's llm-d demonstration highlights serving efficiency on H100 infrastructure",
      posterHeadline: "IBM's llm-d demonstration highlights serving efficiency on H100s",
      status: "Vendor infrastructure demonstration",
      type: "Inference serving infrastructure",
      audienceTags: ["Infrastructure Engineers", "ML Platform Teams", "Inference Engineers", "MLOps"],
      whatHappened: [
        "IBM reported an llm-d serving demonstration using 544 H100 GPUs with GLM-5.2, including a workload of up to 3,000 concurrent coding agents. The account emphasizes routing and key-value-cache reuse across the serving stack. Its throughput and cost comparisons describe a particular vendor-tested setup; they are not a guarantee for every model, workload or smaller deployment. [IBM Research serving demonstration](https://research.ibm.com/blog/running-open-models-on-h100-gpus-with-llmd).",
      ],
      whyItMatters:
        "The useful lesson is that hardware specifications alone do not determine application economics. Repeated prefixes, queueing, memory use and request placement can influence how much useful work a cluster delivers. Serving architecture deserves attention alongside model selection.",
      applications: [
        {
          text: "A large-cluster serving demonstration — 544 H100 GPUs, GLM-5.2, up to 3,000 concurrent coding agents — emphasizing routing and context reuse",
          kind: "demonstrated",
          attribution: "IBM Research's serving demonstration; a vendor-tested setup",
        },
        {
          text: "A team comparing cold requests against requests with reusable prefixes on their own traffic, measuring end-to-end latency and successful tasks per unit of compute",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A team with repeated repository context could compare cold requests against requests with reusable prefixes. Keep the task set, response limits and quality criteria constant, then measure end-to-end latency and successful tasks per unit of compute. A higher token rate is useful only if it helps the actual application.",
      developerTakeaway:
        "Do not extrapolate a large-cluster result directly to a laptop or a single GPU. Start with your own traffic pattern and identify whether the bottleneck is compute, memory, scheduling or an external tool.",
      beforeChangeResult: {
        before: "Serving cost and throughput for agent workloads were often estimated from raw GPU specifications alone",
        change: "IBM's llm-d demonstration served up to 3,000 concurrent coding agents on 544 H100 GPUs running GLM-5.2, emphasizing routing and key-value-cache reuse",
        result: "Routing, memory use and request placement matter as much as hardware specification for this specific, vendor-tested workload",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/11-llmd.webp",
        width: 1672,
        height: 941,
        alt: "llm-d editorial server racks with shared context blocks, representing model-serving infrastructure.",
        caption: "SSK AI Hub editorial illustration: IBM's llm-d serving infrastructure on H100 GPUs.",
        description:
          "Original SSK AI Hub editorial illustration for the llm-d story — a conceptual infrastructure scene, not measured benchmark output.",
      },
      source: {
        heading: "Story 11 — IBM llm-d serving demonstration",
        body: "Primary source: IBM Research's serving demonstration. Throughput and cost figures are **vendor-reported for a specific workload and large cluster** — not a guarantee for every model, workload or smaller deployment.",
        links: [{ label: "IBM Research: running open models on H100 GPUs with llm-d", href: "https://research.ibm.com/blog/running-open-models-on-h100-gpus-with-llmd" }],
      },
    },
    {
      rank: 12,
      id: "runway-model-licensing",
      date: "2026-09-11",
      headline: "Runway offers commercial model licensing for customization and self-hosting",
      posterHeadline: "Runway offers commercial model licensing for customization and self-hosting",
      status: "Commercial licensing announcement",
      type: "Commercial model licensing",
      audienceTags: ["Media & Creative Teams", "Studio Technologists", "Enterprise AI", "Infrastructure Planners"],
      whatHappened: [
        "Runway announced enterprise model licensing, offering a route to customize models with a company's own data and self-host them under an annual commercial agreement. Its licensing page describes the offering and research support. This is a commercial access arrangement, not an unrestricted public release of open-source model weights. [Runway model-licensing terms and offering](https://runway.com/model-licensing), [official dated announcement](https://x.com/runwayml/status/2098409679974228275).",
      ],
      whyItMatters:
        "Some organizations need more control over their creative workflow, infrastructure or domain specialization than a general hosted interface provides. Licensing may address those needs, but it also moves responsibilities for deployment, evaluation and operating cost toward the customer.",
      applications: [
        {
          text: "Commercial model licensing for customization with a company's own data and self-hosting under an annual agreement",
          kind: "demonstrated",
          attribution: "Runway's licensing page and announcement",
        },
        {
          text: "A studio building a rights-cleared evaluation set to compare consistency, controllability, failure rate and artist revision time before committing to a house style",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A studio exploring a house visual style should first assemble a rights-cleared evaluation set. Compare consistency across scenes, controllability, failure rate and artist revision time. A model that looks impressive on a single clip may still be expensive to use across an entire production.",
      developerTakeaway:
        "Ask what the license permits, which artifacts can be retained, what updates are included and who operates the deployment. Compare total workflow cost with an API approach before assuming self-hosting is cheaper.",
      beforeChangeResult: {
        before: "Studios wanting a customized, self-hosted visual model had few commercial paths beyond a general hosted interface",
        change: "Runway announced enterprise model licensing for customizing models with a company's own data and self-hosting them under an annual commercial agreement",
        result: "Deployment, evaluation and operating-cost responsibilities move toward the licensing customer in exchange for greater control",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/12-runway.webp",
        width: 1672,
        height: 941,
        alt: "Runway model-licensing concept combining film strips, a studio scene and self-hosted compute.",
        caption: "SSK AI Hub editorial illustration: Runway's commercial model-licensing offering.",
        description:
          "Original SSK AI Hub editorial illustration for the Runway licensing story — a conceptual studio-and-compute scene, not an official product image.",
      },
      source: {
        heading: "Story 12 — Runway model licensing",
        body: "Primary sources: Runway's licensing page and its dated announcement. This is a **commercial licensing arrangement** — customization and self-hosting under an annual agreement — not an unrestricted public open-source release of model weights. September 11 is supported by the official announcement; the licensing page itself is undated.",
        links: [
          { label: "Runway: model licensing", href: "https://runway.com/model-licensing" },
          { label: "Runway: official announcement", href: "https://x.com/runwayml/status/2098409679974228275" },
        ],
      },
    },
    {
      rank: 13,
      id: "skild-nvidia-video-robotics",
      date: "2026-09-10",
      headline: "Skild and NVIDIA explain the infrastructure behind video-conditioned robotics",
      posterHeadline: "Skild and NVIDIA explain the infrastructure behind video-conditioned robotics",
      status: "Technical follow-up to a prior-week launch",
      type: "Robotics & physical AI",
      audienceTags: ["Robotics Engineers", "Physical AI", "ML Infrastructure Teams", "Research Leads"],
      whatHappened: [
        "NVIDIA's September 10 account describes its collaboration with Skild AI around S1, including simulation, training and inference infrastructure and learning tasks from video demonstrations. The article explicitly says S1 launched the previous week. This item covers new technical detail during September 8–14; it does not relabel the original launch as a new event. [NVIDIA technical account](https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/).",
      ],
      whyItMatters:
        "Video is an attractive source of task information because people already explain physical work through demonstrations. Real-world execution remains a separate challenge: camera angle, object properties, embodiment and small environmental changes can alter what a robot should do.",
      applications: [
        {
          text: "Simulation, training and inference infrastructure supporting a robot learning tasks from video demonstrations",
          kind: "demonstrated",
          attribution: "NVIDIA's technical account; S1 launched the prior week",
        },
        {
          text: "A tabletop sorting evaluation across lighting, placement and unfamiliar containers, counting recovery from mistakes rather than only successful individual movements",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For a tabletop sorting task, evaluate the full job across changes in lighting, object placement and unfamiliar containers. Count recovery from mistakes and unsafe contacts, not just successful individual movements. A step-level metric does not automatically describe end-to-end task reliability.",
      developerTakeaway:
        "Keep vendor demonstration results attached to their test conditions. Ask what was held out, whether task-specific retraining was required and how the system behaves outside the demonstrated setting.",
      beforeChangeResult: {
        before: "Video-conditioned robotics demonstrations rarely detailed the simulation, training and inference infrastructure behind them",
        change: "NVIDIA published technical detail on its collaboration with Skild AI around S1's simulation, training and inference infrastructure and video-demonstration learning",
        result: "The item adds infrastructure detail to an existing launch rather than introducing a new one",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/13-skild.webp",
        width: 1672,
        height: 941,
        alt: "Skild S1 and NVIDIA conceptual robot arm learning a tabletop task from a video demonstration.",
        caption: "SSK AI Hub editorial illustration: Skild S1 and NVIDIA's video-conditioned robotics infrastructure.",
        description:
          "Original SSK AI Hub editorial illustration for the Skild and NVIDIA story — a conceptual robotics scene, not a product photograph.",
      },
      source: {
        heading: "Story 13 — Skild AI S1 and NVIDIA",
        body: "Primary source: NVIDIA's technical account, which **explicitly states S1 launched the previous week**. This item is included as this week's technical follow-up, not relabelled as a new launch.",
        links: [{ label: "NVIDIA: Skild AI S1 physical AI", href: "https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/" }],
      },
    },
    {
      rank: 14,
      id: "perplexity-q2d-web",
      date: "2026-09-08",
      headline: "Perplexity's Q2D-Web benchmark isolates the search stage before generation",
      posterHeadline: "Perplexity's Q2D-Web benchmark isolates search before generation",
      status: "Research benchmark",
      type: "Retrieval evaluation research",
      audienceTags: ["Search & Retrieval Engineers", "AI Researchers", "Evaluation Teams", "ML Engineers"],
      whatHappened: [
        "Q2D-Web evaluates first-stage retrieval using a large web corpus and agent-reformulated queries across ten languages. The paper reports approximately 190 million documents and 70,000 queries, with multiple relevance sets. Its focus is retrieval quality before later ranking and answer generation. A high score therefore does not establish that a complete search assistant produces accurate answers. [Research paper, September 8](https://arxiv.org/abs/2609.08887), [official announcement, September 9](https://community.perplexity.ai/t/q2d-web-evaluating-first-stage-retrievers-at-scale/6052).",
      ],
      whyItMatters:
        "A fluent answer cannot repair evidence the search system never found. Separating retrieval evaluation from generation helps developers identify whether a failure comes from missing documents, weak ranking or unsupported synthesis.",
      applications: [
        {
          text: "A large-scale first-stage retrieval benchmark with agent-reformulated queries across ten languages, roughly 190 million documents and 70,000 queries",
          kind: "demonstrated",
          attribution: "Perplexity's research paper and community announcement",
        },
        {
          text: "An internal knowledge-assistant test that checks whether known supporting documents reach the candidate set before separately evaluating the final answer",
          kind: "potential",
        },
      ],
      realWorldExample:
        "For an internal knowledge assistant, create questions with known supporting documents and measure whether those documents appear in the initial candidate set. Then evaluate the final answer separately. Include outdated documents and closely related distractors to make the test realistic.",
      developerTakeaway:
        "Track retrieval recall and final answer faithfulness as different metrics. Inspect language coverage and query distribution before assuming a public benchmark represents your users. Do not assume the entire source corpus is freely redistributable merely because a paper and leaderboard are public.",
      beforeChangeResult: {
        before: "Search-and-generate systems were often evaluated on the final answer, obscuring whether retrieval itself was the weak link",
        change: "Q2D-Web isolates first-stage retrieval using roughly 190 million documents and 70,000 agent-reformulated queries across ten languages",
        result: "A failure can be attributed to missing documents, weak ranking or unsupported synthesis instead of one undifferentiated score",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-09-15/14-perplexity.webp",
        width: 1672,
        height: 941,
        alt: "Perplexity Q2D-Web concept showing a search lens selecting relevant documents from a large index.",
        caption: "SSK AI Hub editorial illustration: Perplexity's Q2D-Web first-stage retrieval benchmark.",
        description:
          "Original SSK AI Hub editorial illustration for the Q2D-Web story — a conceptual retrieval scene, not a conversational chatbot interface.",
      },
      source: {
        heading: "Story 14 — Perplexity Q2D-Web",
        body: "Primary sources: the research paper (September 8) and Perplexity's official community announcement (September 9). This benchmark measures **first-stage retrieval only**; a high score does not establish that a complete search assistant produces accurate final answers.",
        links: [
          { label: "arXiv: Q2D-Web paper", href: "https://arxiv.org/abs/2609.08887" },
          {
            label: "Perplexity community: Q2D-Web announcement",
            href: "https://community.perplexity.ai/t/q2d-web-evaluating-first-stage-retrievers-at-scale/6052",
          },
        ],
      },
    },
  ],
  briefs: {
    heading: "Two more developments worth tracking",
    items: [
      {
        id: "google-finland-investment",
        date: "September 9",
        title: "Google announces a €13 billion commitment to Finland",
        body: [
          "Google announced plans to invest €13 billion over the next two years in Finland, including digital infrastructure and clean-energy-related partnerships. This is a forward investment commitment, not a statement that the full capacity is already operating. For readers tracking AI infrastructure, follow construction, grid access and commissioning milestones alongside the headline figure. [Primary source](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/google-ai-commitment-to-finland/).",
        ],
        source: {
          heading: "Brief — Google's Finland investment commitment",
          body: "Primary source: Google's announcement. This is a **forward investment commitment** over the next two years, not evidence that the capacity is already operating.",
          links: [
            {
              label: "Google: AI commitment to Finland",
              href: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/google-ai-commitment-to-finland/",
            },
          ],
        },
      },
      {
        id: "toolgrad-explainer",
        date: "September 10",
        title: "Google explains ToolGrad's approach to generating tool-use training data",
        body: [
          "Google Research published an explanation of ToolGrad, which constructs a tool chain before generating the corresponding user query and uses textual feedback to improve examples. The post discusses research presented at ACL 2026; September 10 is the blog publication date, not necessarily the first release of the research. The practical lesson is to evaluate whether synthetic examples have valid, reproducible tool outcomes. [Primary source](https://research.google/blog/toolgrad-efficient-tool-use-dataset-generation-with-textual-gradients/).",
        ],
        source: {
          heading: "Brief — Google's ToolGrad explainer",
          body: "Primary source: Google Research's blog post, explaining research presented at ACL 2026. September 10 is the **explanatory blog's publication date**, not the research's original release.",
          links: [
            {
              label: "Google Research: ToolGrad",
              href: "https://research.google/blog/toolgrad-efficient-tool-use-dataset-generation-with-textual-gradients/",
            },
          ],
        },
      },
    ],
  },
  biggerPicture: {
    heading: "What I would put into practice this week",
    lede: "Four practices carried into next week, drawn from this week's fourteen developments and two briefs.",
    sections: [
      {
        title: "Choose one complete workflow to evaluate",
        body: "A fixed set of realistic tasks makes it easier to compare an API, a managed agent or an existing implementation fairly.",
      },
      {
        title: "Keep evidence visible",
        body: "Whether the output is a business chart, a retrieved answer or a research claim, readers should be able to find the supporting material and its limitations.",
      },
      {
        title: "Make permissions understandable",
        body: "Show the action and its consequences before asking for approval. Record what happened and provide a way to stop or recover work.",
      },
      {
        title: "Measure the whole cost",
        body: "Include model usage, execution, retrieval, hosting and human correction. A lower unit price can still produce a more expensive completed task.",
      },
    ],
    watchNext:
      "Watch for independent evaluations of the week's research claims, actual account availability for newly announced products, migration effects from model aliases, and concrete implementation of the oversight proposals. Those developments will determine how much of this week's promise translates into dependable work. The next coverage window is **September 15–21, 2026**. This issue covers September 8–14 only; it is the second weekly edition of the month, not the month-end newsletter.",
  },
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "September 15, 2026",
    headlines: [
      "OpenAI's Agents API moves the agent runtime into a managed service",
      "ChatGPT Images 2.5 focuses attention on controlled visual production",
      "DeepSeek V4.1 Flash adds a new native visual model to the API",
      "GPT-Live-1 makes overlapping conversation an API design consideration",
      "Meta Muse brings personal agents and permission boundaries into focus",
      "ChatGPT's data and financial-services offerings center governed information",
      "An AI-assisted Navier–Stokes proof claim demands careful reading",
      "AlphaGenome Atlas makes predicted DNA-variant effects easier to explore",
      "The week's safety discussion moves from misuse to frontier oversight",
      "NASA and IBM extend foundation models to lunar remote sensing",
      "IBM's llm-d demonstration highlights serving efficiency on H100s",
      "Runway offers commercial model licensing for customization and self-hosting",
      "Skild and NVIDIA explain the infrastructure behind video-conditioned robotics",
      "Perplexity's Q2D-Web benchmark isolates search before generation",
    ],
    theme: "Three questions run through this week: can it do the work, what's the evidence, and who stays in control.",
  },
  linkedInPost: `This week's AI news raises three practical questions: can the system do useful work, what evidence supports its output, and who remains in control?

In the September 8–14 edition of SSK AI Hub, I cover agent workflows, live voice, visual AI, business data, scientific research and the growing debate over AI oversight.

The focus is what changed, why it matters and what developers and AI learners can take into their own work—with source links and clear distinctions between launches, research claims and proposals.

Read the September 8–14 briefing on SSK AI Hub:
[SSK_AI_ARTICLE_URL]

Which area are you watching most closely: agents, live voice, visual AI, scientific research or AI oversight?

#ArtificialIntelligence #GenerativeAI #AIAgents #TechNews #MachineLearning`,
  generalSourceNote:
    "Primary announcements are linked beside the relevant claims and collected above. The examples and recommendations in this briefing are editorial analysis, not claims that SSK AI Hub has independently benchmarked every product; vendor-reported figures remain attributed to their publishers. Sources were checked through September 14, 2026, 14:09 UTC, while September 14 was still in progress. No development outside September 8–14, 2026 is reported in this edition, which is September's second weekly edition rather than its month-end newsletter. Curated by Ravindra SSK Medicharla.",
};

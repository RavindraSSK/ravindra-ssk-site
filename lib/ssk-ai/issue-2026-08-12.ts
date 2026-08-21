import type { SskAiIssue } from "./types";

/**
 * Approved editorial source: SSK AI issue of August 12, 2026 (v2).
 * Do not rewrite copy or add claims beyond this object.
 */
export const issueAugust12_2026: SskAiIssue = {
  slug: "ai-technology-updates-august-12-2026",
  // Coverage window stated as published, not back-fitted to the canonical 1-7 / 8-14
  // grid — this edition predates the calendar and reports the seven days to Aug 12.
  edition: {
    kind: "weekly",
    number: 2,
    volume: 1,
    periodStart: "2026-08-06",
    periodEnd: "2026-08-12",
    periodLabel: "August 6–12, 2026",
  },
  datePublished: "2026-08-12",
  dateLabel: "August 12, 2026",
  cardTitle: "SSK AI: The Week AI Split Into Specialists",
  title: "SSK AI — What Changed in AI & What You Can Build | August 12, 2026",
  seoTitle: "AI Updates — Aug 12, 2026: Qwen, Microsoft, NVIDIA | SSK AI",
  seoDescription:
    "August 12, 2026: Qwen's 2.4T open-weight model, Microsoft MAI-Thinking-1, NVIDIA Lightning, OpenAI Daybreak, and Google AMIE — what changed and why.",
  theme: "From one giant model to systems of specialized, cooperating intelligence.",
  opening: [
    "For years, the default mental model of AI progress was simple: one enormous general model gets smarter, and everything downstream improves. This week suggests that model is becoming obsolete. What's emerging is a division of labor — frontier reasoners for hard thinking, small efficient models for repetitive execution, domain specialists for regulated professions, and multimodal systems that engage with the world the way people do.",
    "This issue's five stories span that spectrum — a frontier-scale open-weight release from Qwen, Microsoft's first-party trillion-parameter reasoner, NVIDIA's execution model and router for agents, OpenAI's access-gated cybersecurity model, and Google's audio-visual medical research. Together they sketch AI as a system of cooperating specialized models — a shift that matters more for builders than any single benchmark.",
  ],
  stories: [
    {
      rank: 1,
      id: "qwen-open-weights",
      date: "2026-08-12",
      headline: "Qwen Brings a 2.4-Trillion-Parameter Model to Open Weights",
      posterHeadline: "Qwen opens a 2.4-trillion-parameter frontier model",
      status: "Available Now",
      type: "Open Model",
      buildability: "Experiment",
      audienceTags: ["AI Infrastructure", "Research Labs", "Enterprise AI", "Open-Source AI"],
      whatHappened: [
        "On August 12, 2026, Qwen released **Qwen3.8-2.4T-A95B** as an open-weight model — bringing what it describes as a Qwen-Max-class model into its open family. About **95B parameters are activated per token out of approximately 2.4T total parameters**, across 92 layers that combine linear and full attention with 512 MoE experts.",
        "It ships with a native **262,144-token context** (Qwen says extensible to roughly 1.01M tokens), configurable reasoning effort, and retention of reasoning context across turns. **vLLM and SGLang announced day-zero serving support.**",
      ],
      whatsActuallyNew: [
        "Frontier-scale systems of this size have generally lived behind proprietary APIs. Publishing the weights — with open serving ready on day zero — narrows the gap between open and closed frontier models, and pushes open inference software to handle hybrid attention, fine-grained MoE routing, very long context and configurable reasoning together.",
        "The sparse design is what makes serving conceivable at all: only a small fraction of total parameters is activated per token. Real serving cost still depends on memory, expert routing, communication, context length and hardware — sparsity helps, but it isn't a simple price tag.",
      ],
      whyItMatters:
        "Organizations with substantial accelerator capacity can now treat frontier-class, self-hosted AI as an engineering problem rather than a hard blocker — relevant wherever data cannot leave the building. Researchers get direct access to frontier-scale architecture decisions, and open inference stacks get pushed to make these designs standard.",
      applications: [
        {
          text: "Coding, research, professional work and long-running agentic tasks",
          kind: "demonstrated",
          attribution: "Qwen positioning",
        },
        {
          text: "Self-hosted analysis of confidential long documents using the 262K context",
          kind: "potential",
        },
        {
          text: "Large-codebase reasoning on private infrastructure",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A bank's platform team wants frontier-level reasoning over confidential filings, but policy forbids external APIs. They deploy Qwen3.8 on their own cluster via vLLM, load filings into the 262K context, and run multi-turn investigations with reasoning context retained across turns, tuning reasoning effort per task. The win is control and confidentiality, not low cost — serving a model this size is a serious infrastructure commitment.",
      developerTakeaway:
        "Know the MoE distinction — ~2.4T total, ~95B activated per token — but don't equate active parameters with serving cost; memory, routing, communication and context length all matter. Note the 262K native context (~1.01M extension is Qwen-stated), configurable reasoning effort, retained reasoning context across turns, and day-zero vLLM/SGLang support: experiment with standard open tooling, hardware permitting.",
      beforeChangeResult: {
        before: "Frontier scale = proprietary API",
        change: "2.4T-parameter open weights + day-zero open serving",
        result: "Self-hosted frontier becomes an engineering decision",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "qwen-moe",
        caption:
          "Roughly 95B of 2.4T parameters activate per token — sparsity makes an open frontier-scale model servable.",
      },
      source: {
        heading: "Story 1 — Qwen3.8-2.4T-A95B",
        body: "Primary source: Qwen's official Hugging Face repository; day-zero serving per vLLM's announcement. The ~1.01M-token context extension is **Qwen-stated**. Per the fact pack's caution, Qwen's model-card benchmarks mix evaluation sources and harnesses — this article therefore makes **no comparative performance claims** for the model.",
      },
    },
    {
      rank: 2,
      id: "mai-thinking-1",
      date: "2026-08-12",
      headline: "Microsoft Launches MAI-Thinking-1, a First-Party 1T-Parameter Reasoner",
      posterHeadline: "Microsoft debuts its own trillion-parameter reasoner",
      status: "Public Preview",
      type: "Reasoning Model",
      buildability: "Experiment",
      audienceTags: ["Enterprise AI", "Agent Developers", "Foundry/Azure Teams", "Researchers"],
      whatHappened: [
        "On August 12, 2026, Microsoft AI released **MAI-Thinking-1** in public preview through **Microsoft Foundry**: a sparse MoE reasoning model with approximately **1T total and 35B active parameters**, a **256K context window**, function calling, developer-level instructions and Chat Completions compatibility.",
        "Microsoft says it trained the model **without distillation from third-party models**, on clean, traceable training data, and reports strong mathematical and software-engineering performance (**Microsoft-reported**).",
      ],
      whatsActuallyNew: [
        "The headline isn't the parameter count — it's the provenance. A first-party trillion-parameter reasoner, stated to be built without third-party distillation, positions Microsoft as an independent foundation-model developer. The traceable-data claim speaks directly to enterprise procurement, where data provenance is becoming a compliance question.",
        "The interface matters too: Chat Completions compatibility can lower integration friction for teams with existing OpenAI-style pipelines — though evaluation, tuning and migration work remain real.",
      ],
      whyItMatters:
        "A second first-party frontier reasoning option inside the Microsoft ecosystem changes vendor-risk calculus for enterprises on Foundry, and gives developers a new reasoner to trial against current models with comparatively little plumbing. For researchers, the no-distillation claim (Microsoft-stated) is notable in itself.",
      applications: [
        {
          text: "Enterprise knowledge work, mathematical reasoning, coding and function-calling workflows",
          kind: "demonstrated",
        },
        {
          text: "Tool-orchestrating agents built on function calling + developer instructions",
          kind: "potential",
        },
        {
          text: "Long-document analysis across the 256K context",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A developer at an insurer prototypes a claims-analysis assistant on Foundry. Long case files fit the 256K context; function calling queries policy databases; developer instructions enforce process rules; the existing Chat Completions pipeline needed only modest changes to point at the new model. Whether outcomes improve is for the team's own evaluation to show — current performance evidence is Microsoft-reported.",
      developerTakeaway:
        "Track: ~1T total / 35B active MoE, 256K context, function calling, developer instructions, Chat Completions compatibility, public preview on Microsoft Foundry. This is an API model, not open weights. Compatibility can lower integration friction for evaluation; it doesn't decide quality or cost — treat benchmarks as Microsoft-reported and run your own tests before load-bearing use.",
      beforeChangeResult: {
        before: "Microsoft's stack associated with partner frontier models",
        change: "First-party 1T/35B-active reasoner, no third-party distillation (Microsoft-stated)",
        result: "More model competition inside one ecosystem",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "mai-thinking",
        caption:
          "MAI-Thinking-1 holds a trillion parameters but computes with ~35B per token — sparsity aimed at frontier reasoning.",
      },
      source: {
        heading: "Story 2 — MAI-Thinking-1",
        body: "Primary source: Microsoft AI announcement. All performance characterizations (mathematical, software-engineering) and the no-distillation / traceable-data claims are **Microsoft-reported/stated**. Public preview via Microsoft Foundry; no pricing or throughput claims are made here.",
      },
    },
    {
      rank: 3,
      id: "nvidia-lightning-switchyard",
      date: "2026-08-11",
      headline: "NVIDIA Builds a Small Model for Agents' Grunt Work — and a Router to Match",
      posterHeadline: "NVIDIA's tiny model powers long-running agents",
      status: "Available Now",
      type: "Agent Infrastructure",
      buildability: "Build Now",
      audienceTags: ["Agent Developers", "Self-Hosting Teams", "Enterprise AI", "Researchers"],
      whatHappened: [
        "On August 11, 2026, NVIDIA announced **Nemotron 3.5 Lightning**, an open **30B-parameter MoE with 3B active parameters**, designed for high-volume execution inside long-running agents rather than general chat. The release includes **weights, training data and training/customization recipes**, multi-token prediction/speculative decoding, and **BF16 and NVFP4** deployment options.",
        "Alongside it, NVIDIA released **NeMo Switchyard**, infrastructure that routes workloads between specialized models and stronger frontier models. NVIDIA has published its own speed and throughput measurements (**NVIDIA-reported**).",
      ],
      whatsActuallyNew: [
        "Most releases compete on being smarter; Lightning competes on being efficient at the right things. Long-running agents spend most tokens on repetitive execution — tool calls, validation, formatting, delegation — and Lightning is purpose-built for that work. Switchyard turns the philosophy into architecture: a strong model handles difficult reasoning, an efficient model handles the thousands of routine calls, and routing decides which is which.",
        "The openness is unusually complete: with data and recipes included, teams can retrain the executor for their own agent harness instead of treating it as a black box.",
      ],
      whyItMatters:
        "This legitimizes a design pattern — per-step model selection — that directly targets agent inference cost. It *could* reduce the cost of long-running agents; actual savings depend on workload mix, routing quality and deployment. Routing also becomes a component to design, test and observe: a mis-routed hard task is a new failure mode.",
      applications: [
        {
          text: "Tool calls, validation, formatting and subagent delegation inside long-running agents",
          kind: "demonstrated",
        },
        {
          text: "Planner/executor software agents (frontier model plans, Lightning executes)",
          kind: "potential",
        },
        {
          text: "Continuous monitoring or support agents on self-hosted infrastructure",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A startup's autonomous QA agent routes every click, assertion and log-check through a frontier API — thousands of steps per run. They restructure: a frontier model builds the plan and handles failures needing judgment; Lightning executes it — tool calls, state validation, report formatting — with Switchyard-style routing between them. Using the released recipes, they later fine-tune Lightning on their own tool-call formats. Cost per run could fall, depending on workload and deployment.",
      developerTakeaway:
        "The reusable idea is the planner/executor split with routing as first-class architecture. Concrete facts: 30B total / 3B active, speculative decoding, BF16/NVFP4, and a fully open release — weights *plus* data *plus* recipes — enabling customization to your harness. NeMo Switchyard is the routing layer. Benchmark NVIDIA's speed claims (NVIDIA-reported) on your own workloads before planning around them.",
      beforeChangeResult: {
        before: "One model in a loop; every trivial step at frontier cost",
        change: "Open executor model + Switchyard routing",
        result: "Tiered agents — reasoning where it counts, efficient execution everywhere else",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "nvidia-switchyard",
        caption:
          "The frontier model thinks rarely; the small model works constantly — routing drives the economics.",
      },
      source: {
        heading: "Story 3 — Nemotron 3.5 Lightning + NeMo Switchyard",
        body: "Primary sources: NVIDIA Technical Blog announcements. All speed and throughput comparisons are **NVIDIA-reported**; specific figures are intentionally omitted, and cost-reduction potential is framed as workload- and deployment-dependent.",
      },
    },
    {
      rank: 4,
      id: "openai-daybreak",
      date: "2026-08-10",
      headline: "OpenAI Ships a Cybersecurity-Specialized Model Behind Controlled Doors",
      posterHeadline: "OpenAI gates cybersecurity AI behind Daybreak",
      status: "Restricted Access",
      type: "Specialized AI",
      buildability: "Watch",
      buildabilityNote: "Experiment if approved",
      audienceTags: ["Security Teams", "Enterprise AI", "AI Governance", "AWS/Bedrock Teams"],
      whatHappened: [
        "On August 10, 2026, OpenAI announced **GPT-5.6-Cyber**, built on GPT-5.6 Sol and specialized for advanced, authorized cybersecurity research, alongside an expanded **Daybreak** program. **Daybreak Blue** gives approved defenders general-purpose frontier capabilities configured for defensive work; **Daybreak Red** gives approved users specialized cybersecurity models, including GPT-5.6-Cyber.",
        "On August 11, both tiers became available to **eligible customers on Amazon Bedrock**. Access remains controlled through approval and security requirements.",
      ],
      whatsActuallyNew: [
        "Two things. First, **profession-specific frontier training**: the specialization lives in the model, not just in prompts or policy layers. Second, **distribution**: Daybreak combines specialized capability with controlled, approval-gated, tiered access — and Bedrock availability shows a gated program can still scale through mainstream cloud channels. The implicit template: capability paired with verification.",
      ],
      whyItMatters:
        "For approved teams, this is frontier-grade assistance for under-resourced defensive workflows — code review, patch validation, incident response — reachable through infrastructure many enterprises already run. For everyone else, it signals that the most capable models in sensitive domains won't be a public API key away: qualifying for access programs may become part of building in these fields.",
      applications: [
        {
          text: "Secure-code review, vulnerability research, incident response, vulnerability management, patch validation",
          kind: "demonstrated",
          attribution: "official Daybreak workflows",
        },
        {
          text: "Security copilots embedded in SOC workflows at approved organizations",
          kind: "potential",
        },
        {
          text: "AI-assisted secure-development pipelines (review before merge, validate patches before deploy)",
          kind: "potential",
        },
      ],
      realWorldExample:
        "An AppSec lead at an approved SaaS company has three reviewers covering forty engineering teams. Through the company's Bedrock Daybreak access, sensitive pull requests get an AI-assisted secure-code review pass; during incidents the model helps analyze suspect code paths and validate patches before deployment. Coverage extends beyond what three humans could reach — humans keep final calls, inside the program's authorized-use boundaries.",
      developerTakeaway:
        "GPT-5.6-Cyber is built on GPT-5.6 Sol and reachable only through Daybreak's tiers — Blue (defensively configured general frontier) and Red (specialized models) — under approval and security requirements, including via Bedrock for eligible customers. For security-tooling builders, the actionable step is understanding the eligibility path and designing around authorized-use restrictions. Performance gains are OpenAI-reported.",
      beforeChangeResult: {
        before: "General models + generic safeguards for security work",
        change: "Specialized frontier model + approval-gated, tiered access",
        result: "A template for distributing dual-use AI through verification",
      },
      visual: {
        kind: "coded-diagram",
        diagram: "openai-daybreak",
        caption: "Daybreak pairs capability with verification — the more specialized the model, the tighter the gate.",
      },
      source: {
        heading: "Story 4 — GPT-5.6-Cyber / Daybreak",
        body: "Primary sources: OpenAI announcement; AWS Bedrock availability announcement. Performance gains on cybersecurity evaluations are **OpenAI-reported**. GPT-5.6-Cyber is **not** an unrestricted public model; all access is approval-gated.",
      },
    },
    {
      rank: 5,
      id: "google-amie",
      date: "2026-08-11",
      headline: "Google's AMIE Moves Medical AI Research Into Real-Time Audio-Visual Consultation",
      posterHeadline: "Google's medical AI goes real-time audio-visual",
      status: "Research Only",
      type: "Multimodal Research",
      buildability: "Watch",
      audienceTags: ["Medical-AI Researchers", "Multimodal Researchers", "Digital Health", "Regulators"],
      whatHappened: [
        "On August 11, 2026, Google Research published new work extending **AMIE**, its medical research system, to conduct **real-time video consultations** that incorporate spoken and visual information.",
        "Google evaluated the system in a **randomized controlled study involving simulated clinical consultations** and reports **expert-level performance in that experimental setting** (Google-reported). AMIE remains a **research system** — not a deployed clinical product.",
      ],
      whatsActuallyNew: [
        "Earlier conversational medical AI — including prior AMIE work — operated largely in text, discarding most of what a real consultation contains. The new system integrates live streams simultaneously — what the patient says, how they say it, what is visible — while steering an interactive conversation in real time: fundamentally harder than multimodal Q&A on static inputs. The randomized-controlled design is itself notable — medical-AI research adopting medicine's own evidentiary standards.",
      ],
      whyItMatters:
        "It reframes the target for medical AI: diagnosis is not text Q&A. The underlying capability — steering a goal-directed conversation while continuously fusing audio-visual input — generalizes to any assessment or expert-consultation workflow. For product teams, the message is patience: this is research on simulated consultations, and any clinical deployment runs through validation and regulation.",
      applications: [
        {
          text: "Real-time audio-visual simulated consultations in a randomized controlled research study",
          kind: "demonstrated",
          attribution: "the only demonstrated use",
        },
        {
          text: "Future clinician-assisting telemedicine support tools",
          kind: "potential",
          attribution: "contingent on clinical validation and regulatory approval",
        },
        {
          text: "Research and education use of the study paradigm — e.g., researchers evaluating multimodal consultation systems, or educators studying simulated AI-led consultations",
          kind: "potential",
        },
      ],
      realWorldExample:
        "A university health-AI lab wants to evaluate multimodal consultation systems rigorously. AMIE's study gives them a template: randomized controlled comparisons on simulated consultations, with real-time audio-visual interaction as the test condition rather than text transcripts. The lab adopts the paradigm to benchmark its own systems and lets clinical educators study recorded simulated AI-led consultations — research and teaching use, deliberately far from patient care.",
      developerTakeaway:
        "No API, no model access — the takeaway is directional. Real-time, *interactive* audio-visual reasoning is progressing, and the evidence bar in high-stakes domains is rising toward randomized controlled designs. In health AI, expect text-only consultation framings to age quickly and credible work to be judged by clinical-style evidence. Elsewhere, watch the pattern: steering a live conversation while fusing continuous multimodal input.",
      beforeChangeResult: {
        before: "Medical AI research = text dialogue",
        change: "Real-time audio-visual consultations, RCT-evaluated on simulations",
        result: "Research path toward AI that engages with real clinical information — deployment still gated",
      },
      visual: {
        kind: "editorial-image",
        src: "/ssk-ai/2026-08-12/amie-consultation.webp",
        width: 1280,
        height: 720,
        alt: "A person in a bright, minimal research office on a laptop video call, photographed from a three-quarter side angle with the screen angled away.",
        caption:
          "AMIE research now evaluates medical AI in a live video consultation — listening, watching and conversing at once, in simulated studies rather than real care.",
        description:
          "Professional editorial photograph for a technology publication: a person in casual clothing at a clean desk in a bright, minimal research office, engaged in a video call on a laptop, three-quarter side angle, laptop screen angled away and softly indistinct, natural window light, muted neutral palette, shallow depth of field, documentary tone, generous empty wall space on the right third; realistic, uncluttered, no visible text or interface details, no futuristic elements, no medical-equipment clichés.",
      },
      source: {
        heading: "Story 5 — AMIE",
        body: "Primary source: Google Research publication. Expert-level performance is **Google-reported** and applies to a **randomized controlled study using simulated clinical consultations**. AMIE is a research system — not an autonomous doctor, not a deployed clinical service, and not evidence that AI can safely replace physicians.",
      },
    },
  ],
  biggerPicture: {
    heading: "SSK AI — Bigger Picture",
    lede: "AI is moving from one giant general-purpose model toward a system of specialized intelligence.",
    sections: [
      {
        title: "Specialized roles",
        body: "Read this week's stories as five roles in one architecture. **AI developers are increasingly optimizing different models for different roles rather than expecting one general model to handle every step:** GPT-5.6-Cyber specializes by domain, Nemotron Lightning by function, AMIE by modality and setting — while Qwen3.8 exposes role-shaping controls like configurable reasoning effort even within one model.",
      },
      {
        title: "Agents as architecture",
        body: "**Agents are becoming architectural systems.** NVIDIA shipping routing infrastructure *alongside* a model says what the industry thinks an agent is: cooperating models — planner and executor — not one model in a loop.",
      },
      {
        title: "Open-weight frontier AI",
        body: "**Open-weight frontier AI is changing.** A ~2.4T-parameter open release served on day zero, and NVIDIA publishing weights *plus data plus recipes*, advance openness of scale and of pipeline at once — while MAI-Thinking-1 shows the closed side diversifying with a new first-party producer.",
      },
      {
        title: "Access as a designed variable",
        body: '**Access is now a designed variable.** Between open weights, managed previews and approval-gated programs like Daybreak, "released" no longer means "publicly available" — and where a capability lands on that spectrum is a strategic decision.',
      },
    ],
    watchNext:
      "Watch next: whether routing layers like Switchyard become standard middleware; whether open inference stacks fully absorb hybrid-attention massive-MoE designs; and whether controlled-access distribution spreads beyond cybersecurity.",
  },
  projectsIntro: "Project concepts only — none of these exist as products.",
  projects: [
    {
      slug: "tieredops",
      name: "TieredOps",
      summary: "two-tier customer-support agent runtime",
      featured: true,
      problem:
        "Support agents are either capable but expensive (every step on a frontier model) or affordable but unreliable.",
      fromThisIssue:
        "Nemotron 3.5 Lightning + NeMo Switchyard (story 3); optionally MAI-Thinking-1 as the reasoning tier (story 2).",
      howItWorks:
        "A router classifies each step — routine lookups, tool calls, formatting and validation run on a self-hosted Lightning-class executor; ambiguous or multi-step cases route to a frontier reasoner. State lives outside both models so tiers stay swappable.",
      who: "SaaS and enterprise support teams; automation agencies.",
      whyUseful:
        "Directly targets agent inference cost — a major practical barrier — while keeping frontier quality where customers notice it. Actual savings depend on workload and deployment.",
      difficulty: "Intermediate",
    },
    {
      slug: "vaultanalyst",
      name: "VaultAnalyst",
      summary: "self-hosted long-document research assistant",
      featured: false,
      problem:
        "Regulated organizations need frontier-level reasoning over confidential documents but can't use external APIs.",
      fromThisIssue: "Qwen3.8-2.4T-A95B open weights, 262K native context, vLLM/SGLang serving (story 1).",
      howItWorks:
        "Documents never leave the network; long files load into the model's context; analysts run multi-turn investigations with reasoning context retained across turns; reasoning effort is tuned per query type on the organization's own cluster.",
      who: "Banks, law firms, hospitals, government.",
      whyUseful: 'Turns "compliance forbids frontier AI" into an infrastructure decision.',
      difficulty: "Advanced — frontier-scale serving is the hard part",
    },
    {
      slug: "patchgate",
      name: "PatchGate",
      summary: "AI-assisted secure-merge pipeline",
      featured: false,
      problem: "Most merges get no meaningful security review; AppSec teams are outnumbered.",
      fromThisIssue:
        "Daybreak's official defensive workflows — secure-code review and patch validation (story 4) — implemented with whatever security-capable model an organization can legitimately access.",
      howItWorks:
        "A CI stage runs AI-assisted secure review on PRs touching sensitive services; a second stage validates patches against the vulnerability they claim to fix. Humans own merge decisions; findings feed the AppSec queue.",
      who: "Engineering orgs with small security teams.",
      whyUseful: "Moves security review from sampled to systematic.",
      difficulty: "Intermediate (advanced if pursuing Daybreak eligibility)",
    },
  ],
  featuredProject: {
    name: "TieredOps",
    caption:
      "In TieredOps, routing is the product: the efficient model does the volume, the frontier model does the judgment.",
    stages: [
      {
        id: "input",
        label: "INPUT",
        body: "Customer message arrives (chat, email, ticket)",
      },
      {
        id: "system",
        label: "AI SYSTEM",
        body: "Router classifies the step: routine → executor tier (Lightning-class small MoE, self-hosted) · hard → reasoning tier (frontier model via API)",
      },
      {
        id: "tools",
        label: "TOOLS / DATA",
        body: "Shared tool belt (orders, knowledge base, CRM, refunds) + external conversation-state store, keeping tiers swappable",
      },
      {
        id: "action",
        label: "ACTION",
        body: "Executor handles the high-volume steps; reasoner intervenes rarely; every step logged with its routing decision",
      },
      {
        id: "result",
        label: "RESULT",
        body: "Resolved conversations with cost weighted toward the efficient tier, frontier quality reserved for the moments that matter, and full routing observability",
      },
    ],
  },
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "August 12, 2026",
    headlines: [
      "Qwen opens a 2.4-trillion-parameter frontier model",
      "Microsoft debuts its own trillion-parameter reasoner",
      "NVIDIA's tiny model powers long-running agents",
      "OpenAI gates cybersecurity AI behind Daybreak",
      "Google's medical AI goes real-time audio-visual",
    ],
    theme: "From one giant model to systems of specialized, cooperating intelligence.",
  },
  linkedInPost: `Most AI news answers "what launched?" A better question: what became more practical, more accessible, or more worth experimenting with this week?

This week's SSK AI applies that lens to five developments: Qwen released a ~2.4-trillion-parameter Max-class model as open weights (day-zero vLLM/SGLang support), Microsoft launched MAI-Thinking-1 — its first-party 1T-parameter sparse reasoner in public preview on Foundry, NVIDIA shipped Nemotron 3.5 Lightning plus routing infrastructure for the repetitive work inside long-running agents, OpenAI put a cybersecurity-specialized GPT-5.6 model behind its approval-gated Daybreak program, and Google's AMIE research moved medical AI into real-time audio-visual consultations — in simulated studies.

Two threads worth your attention:

→ NVIDIA's planner/executor pattern — a frontier model for rare hard decisions, a 3B-active model for thousands of routine steps — is a concrete architecture for reducing agent inference cost, one of the most cited practical barriers to deployed agents.

→ Frontier-scale open weights with a 262K-token native context make self-hosted reasoning over confidential documents an engineering problem rather than a policy dead end — for organizations with the hardware.

The common thread: AI is becoming a system of specialized models — reasoners, executors, domain specialists, multimodal systems — rather than one general model behind one API. If you build with AI, that changes your architecture more than any benchmark.

Full breakdown, scenarios and three buildable project concepts: [SSK_AI_ARTICLE_URL]

#AI #MachineLearning #AIEngineering #LLM #AIAgents`,
  generalSourceNote:
    'All "potential" applications and all project concepts are inference from demonstrated capabilities, explicitly labeled, and describe nothing that currently exists as a deployment.',
};

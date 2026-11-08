import type { SskAiIssue } from "./types";

/**
 * Editorial source: the SSK AI Hub November 1–7, 2026 handoff package
 * (02_final_publication.md, qualified against 01_research_fact_pack.md and checked
 * against primary sources on November 8, 2026). Coverage is November 1–7 inclusive;
 * the edition is dated November 8. Stories keep the package's Top 7 order. The three
 * manifest diagrams plus the Build of the Week flow are coded `SequenceDiagram`s;
 * the only editorial image is the cover. The package's vertical cover is reserved for
 * social/Instagram and is not used on the site.
 */

const IMG = "/ssk-ai/2026-11-08";

const COVER_ALT =
  "SSK AI Hub November 1–7, 2026 Week 1 cover titled From Models to Real Work, with seven story cards: GPT-6 Cyber, Images 2.6, Gemini Omni 1.2 Flash, Agentic Cheminformatics, Linux Patching Pipeline, Physical-World Engineering and Coding Agent Workflows.";

export const issueNovember08_2026: SskAiIssue = {
  slug: "ai-technology-updates-november-1-7-2026",
  edition: {
    kind: "weekly",
    number: 13,
    volume: 1,
    periodStart: "2026-11-01",
    periodEnd: "2026-11-07",
    periodLabel: "November 1–7, 2026",
  },
  datePublished: "2026-11-08",
  dateLabel: "November 8, 2026",
  cardTitle: "SSK AI: From Models to Real Work",
  title: "SSK AI — What Changed in AI & What You Can Build | November 8, 2026",
  heading: "AI News November 1–7, 2026: From Models to Real Work",
  seoTitle: "AI News November 1–7, 2026: GPT-6 Cyber, Images 2.6, Gemini Omni & More | SSK AI Hub",
  seoDescription:
    "Seven AI developments that mattered from November 1–7, 2026: GPT-6 Cyber, Images 2.6, Gemini Omni 1.2 Flash, agentic chemistry, AI engineering and coding agents.",
  schemaType: "NewsArticle",
  tocHeading: "Table of contents",
  theme:
    "AI is moving from answering questions to operating inside the tools, media and workflows where work actually happens.",
  hero: {
    kind: "editorial-image",
    src: `${IMG}/00-cover-website-linkedin.webp`,
    width: 1149,
    height: 941,
    alt: COVER_ALT,
    caption: "November Week 1: seven selected developments. Original AI-generated conceptual editorial artwork.",
    description: "Original SSK AI Hub editorial cover for the November 1–7, 2026 edition — conceptual artwork, not an official product asset.",
  },
  socialImage: {
    src: `${IMG}/00-cover-social-1200x630.webp`,
    width: 1200,
    height: 630,
    alt: COVER_ALT,
  },
  storyLabels: {
    happened: "The update",
    matters: "Why it matters",
    example: "Practical application",
    takeaway: "Developer takeaway — SSK AI Hub analysis",
  },
  readingListLabels: { title: "The week in 60 seconds", detail: "Shift" },
  opening: [
    "This week's most interesting AI developments were not simply “new models.” They were about **what AI can now do inside real workflows**.",
    "OpenAI pushed specialized cybersecurity, visual editing and engineering workflows. Google made video generation more iterative and brought agents into cheminformatics. GitHub expanded coding agents across IDEs, collaboration tools and recurring tasks.",
    "**AI is moving from answering questions to operating inside the tools, media and workflows where work actually happens.**",
    "Vendor performance, pricing and result figures are attributed to the company that reported them; practical applications and build ideas are SSK AI Hub proposals, not tests we have run. Cybersecurity coverage stays defensive and high-level. Source review: November 8, 2026, after the November 1–7 window closed.",
  ],
  relatedReading: [
    "Catch up on the ",
    { href: "/ssk-ai/tech-news/ai-october-2026-month-in-review", label: "October 2026 Month in Review" },
    " and the ",
    { href: "/ssk-ai/tech-news/ai-technology-updates-october-29-2026", label: "October 22–28 briefing" },
    ", or browse every edition on the ",
    { href: "/ssk-ai/tech-news", label: "SSK AI Tech News" },
    " desk.",
  ],
  readingList: [
    { storyId: "gpt-6-cyber", development: "GPT-6 Cyber: controlled defensive-security work", announced: "November 5", question: "Security" },
    { storyId: "images-2-6", development: "Images 2.6: precise editing, SVG and GIF", announced: "November 4", question: "Image / video" },
    { storyId: "gemini-omni-1-2-flash", development: "Gemini Omni 1.2 Flash: longer, conversationally editable video", announced: "November 5", question: "Image / video" },
    { storyId: "agentic-cheminformatics", development: "Antigravity Cheminformatics: agents plus deterministic tools", announced: "November 3", question: "Science" },
    { storyId: "linux-patch-pipeline", development: "OpenAI Linux patch pipeline: validated remediation", announced: "November 4", question: "Security" },
    { storyId: "physical-world-engineering", development: "AI for physical-world engineering: CAD, PCB, simulation", announced: "November 3", question: "Engineering" },
    { storyId: "copilot-agent-workflows", development: "GitHub Copilot: agents across IDEs, chat and schedules", announced: "November 3–6", question: "Coding agents" },
  ],
  stories: [
    {
      rank: 1,
      id: "gpt-6-cyber",
      date: "2026-11-05",
      headline: "GPT-6 Cyber: controlled capability becomes part of the product",
      posterHeadline: "GPT-6 Cyber: controlled capability becomes the product",
      status: "Restricted access for select Daybreak Red customers; no general availability",
      type: "Specialized models / defensive security",
      audienceTags: ["Security"],
      whatHappened: [
        "OpenAI released GPT-6 Cyber on November 5 for approved, authorized cybersecurity work: controlled vulnerability investigation and fix verification. Access runs through OpenAI's application-only Daybreak Red program rather than general availability.",
        "The important story is not only specialization. It is the architecture around it: access, scope and verification.",
      ],
      whyItMatters: [
        "For sensitive AI systems, capability cannot be separated from: **who can use it · where it can act · what gets logged · what must stay in scope**.",
      ],
      realWorldExample: "Authorized defensive testing and fix verification inside controlled environments.",
      developerTakeaway: "Build permissions, scope and auditability first.",
      source: {
        heading: "Story 1 — OpenAI GPT-6 Cyber",
        body: "Primary sources: OpenAI's product-release index and API changelog (November 5). Access is **restricted to approved Daybreak Red customers**; there is no general-availability date. Capability ratings and evaluation results are **OpenAI-reported** and are not repeated here as independent measurements. Coverage is deliberately limited to defensive, authorized use.",
        links: [
          { label: "OpenAI: Product releases", href: "https://openai.com/news/product-releases/" },
          { label: "OpenAI API changelog", href: "https://developers.openai.com/api/docs/changelog" },
        ],
      },
    },
    {
      rank: 2,
      id: "images-2-6",
      date: "2026-11-04",
      headline: "Images 2.6: visual AI becomes an editing workflow",
      posterHeadline: "Images 2.6: visual AI becomes an editing workflow",
      status: "Available in ChatGPT, Codex and the API; GIF generation rolling out gradually",
      type: "Generative media / images",
      audienceTags: ["Image / video"],
      whatHappened: [
        "OpenAI released Images 2.6 on November 4 across ChatGPT, Codex and the API, with two API models: GPT-Image-2.6 Flare and GPT-Image-2.6 Sunburst. OpenAI reports faster generation (it says 50% faster than before), more precise editing, SVG output, animated GIF generation and additional API controls.",
      ],
      whyItMatters: [
        "The workflow is shifting from **prompt → image → start over** to **generate → inspect → edit precisely → animate/vectorize → export**.",
      ],
      applications: [
        { text: "Social graphics, UI assets, diagrams and explainers", kind: "potential" },
        { text: "Marketing variants and vector illustrations", kind: "potential" },
      ],
      realWorldExample:
        "**What can we build?** A brand-safe creative assistant that stores style and layout rules and produces controlled variants.",
      developerTakeaway:
        "Test edit preservation: change one part of a generated visual and check whether everything else stays stable.",
      source: {
        heading: "Story 2 — OpenAI Images 2.6",
        body: "Primary sources: OpenAI's November 4 Images 2.6 announcement and API changelog. The **50% speed figure is OpenAI-reported**. GIF generation in ChatGPT is rolling out gradually, so not every account has it at once. Applications listed are SSK AI Hub proposals, not demonstrated results.",
        links: [
          { label: "OpenAI: Introducing Images 2.6", href: "https://openai.com/index/introducing-images-2-6/" },
          { label: "OpenAI API changelog", href: "https://developers.openai.com/api/docs/changelog" },
        ],
      },
    },
    {
      rank: 3,
      id: "gemini-omni-1-2-flash",
      date: "2026-11-05",
      headline: "Gemini Omni 1.2 Flash: video generation becomes conversational editing",
      posterHeadline: "Gemini Omni 1.2 Flash: video becomes conversational editing",
      status: "Generally available in the Gemini API and Gemini for business",
      type: "Generative media / video",
      audienceTags: ["Image / video"],
      whatHappened: [
        "Google launched Gemini Omni 1.2 Flash on November 5 with native clips up to 15 seconds, multi-turn conversational editing and stronger reference adherence. Google says 720p pricing is $0.07 per second, 30% lower than Omni 1.1.",
      ],
      whyItMatters: [
        "Video is expensive to regenerate. Conversational editing lets creators refine the same clip instead of starting over.",
      ],
      applications: [
        { text: "Product ads, explainers and social clips", kind: "potential" },
        { text: "Virtual try-ons and branded video variants", kind: "potential" },
      ],
      realWorldExample:
        "Generate a 720p draft, make one follow-up edit to a single detail, and check whether the rest of the clip stays consistent before upscaling.",
      developerTakeaway: "Evaluate consistency, edit preservation and total cost to reach a usable final clip.",
      source: {
        heading: "Story 3 — Google Gemini Omni 1.2 Flash",
        body: "Primary sources: Google's November 5 announcement and the DeepMind model card. The **$0.07/sec 720p price and the 30% reduction versus Omni 1.1 are Google-reported**; per-clip cost depends on resolution, retries and edits. Reference-consistency improvements are Google's description, not an independent evaluation.",
        links: [
          {
            label: "Google: Introducing Gemini Omni 1.2 Flash",
            href: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
          },
          {
            label: "Google DeepMind: Gemini Omni 1.2 Flash model card",
            href: "https://deepmind.google/models/model-cards/gemini-omni-1-2-flash/",
          },
        ],
      },
    },
    {
      rank: 4,
      id: "agentic-cheminformatics",
      date: "2026-11-03",
      headline: "Agentic Cheminformatics: a better pattern for AI in science",
      posterHeadline: "Agentic Cheminformatics: a better pattern for AI in science",
      status: "Available in Google Antigravity via the Science plugin",
      type: "AI for science / chemistry",
      audienceTags: ["Science"],
      whatHappened: [
        "Google DeepMind released Cheminformatics Skills for Google Antigravity on November 3. The agent orchestrates chemistry workflows while deterministic chemistry tools — grounded in the open-source RDKit toolkit — perform exact calculations.",
        "Google describes a lung-cancer workflow in which the system searched thousands of compounds, performed matched molecular pair analysis and proposed candidate macrocycles with synthetic routes in about an hour.",
      ],
      whyItMatters: [
        "The model does not need to pretend to be every scientific tool.",
        "It can decide what to do next and connect the steps while specialized software performs exact operations.",
      ],
      realWorldExample:
        "A medicinal-chemistry team lets the agent gather and curate compound data from papers, run the analysis through deterministic tools, and hand back candidate designs as hypotheses for chemists to review.",
      developerTakeaway:
        "Use AI for **orchestration and reasoning**, and deterministic tools for computations that must be exact.",
      visual: {
        kind: "coded-diagram",
        diagram: "science-agent-pattern",
        caption:
          "Scientific-agent pattern: a research question is orchestrated by the model, exact work is done by deterministic scientific tools, and the evidence goes to a scientist for review.",
      },
      source: {
        heading: "Story 4 — Google DeepMind Agentic Cheminformatics",
        body: "Primary source: Google DeepMind's November 3 post. The **“about an hour” workflow is Google-reported** and covers analysis and design proposals, not synthesis or lab testing. Google states that proposed molecules are **testable hypotheses that still require synthesis and experimental validation**; this is not a claim that agents replace expert review.",
        links: [
          {
            label: "Google DeepMind: Agentic cheminformatics with Google Antigravity",
            href: "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/",
          },
        ],
      },
    },
    {
      rank: 5,
      id: "linux-patch-pipeline",
      date: "2026-11-04",
      headline: "OpenAI's Linux patch pipeline: from finding problems to completing the remediation loop",
      posterHeadline: "OpenAI's Linux patch pipeline completes the remediation loop",
      status: "Research results; patches going through coordinated disclosure with kernel maintainers",
      type: "Defensive security / remediation",
      audienceTags: ["Security"],
      whatHappened: [
        "OpenAI reported on November 4 that an autonomous defensive-security pipeline, run with an upcoming cyber model, found, validated and generated patches for 948 local privilege-escalation vulnerabilities in the Linux kernel.",
        "The important workflow is: **find → validate → patch → verify**.",
      ],
      whyItMatters: [
        "Security AI becomes more useful when it produces reviewable fixes, not just larger alert queues.",
      ],
      realWorldExample:
        "A maintainer team receives each finding with its validation evidence and a candidate patch, and reviews the fix through its normal process instead of triaging a raw alert.",
      developerTakeaway: "Optimize for **validated fixes**, not raw finding count.",
      visual: {
        kind: "coded-diagram",
        diagram: "defensive-remediation",
        caption:
          "Defensive remediation: a finding is validated, a fix is proposed and tested, and a human reviews it before it ships.",
      },
      source: {
        heading: "Story 5 — OpenAI “A thousand fewer paths to root”",
        body: "Primary source: OpenAI's November 4 post. The **948 figure is OpenAI-reported**; the run used an unreleased cyber model, and patches are being submitted to Linux kernel maintainers through coordinated disclosure, so “generated” does not mean every fix has been merged. Coverage is kept defensive and high-level; no exploitation details are reproduced.",
        links: [
          { label: "OpenAI: A thousand fewer paths to root", href: "https://openai.com/index/a-thousand-fewer-paths-to-root/" },
        ],
      },
    },
    {
      rank: 6,
      id: "physical-world-engineering",
      date: "2026-11-03",
      headline: "AI for physical-world engineering: AI enters engineering software",
      posterHeadline: "AI for physical-world engineering enters engineering software",
      status: "Workflows and partner pilots described by OpenAI; human engineering review required",
      type: "Engineering / CAD, PCB, simulation",
      audienceTags: ["Engineering"],
      whatHappened: [
        "OpenAI highlighted ChatGPT and Codex workflows on November 3 involving CAD, PCB design, simulation and related engineering tools, including use by its own hardware teams and collaborations with Mazda and Chip Ganassi Racing.",
      ],
      whyItMatters: [
        "Physical engineering involves geometry, design constraints, simulation and specialized software — not just text and code.",
      ],
      realWorldExample:
        "**What can we build?** A design-review copilot that checks approved engineering artifacts against project rules and produces a traceable review checklist.",
      developerTakeaway:
        "A useful engineering agent needs **tool integration + domain constraints + verification**.",
      source: {
        heading: "Story 6 — OpenAI Accelerating engineering for the physical world",
        body: "Primary source: OpenAI's November 3 post. Workflows and partner collaborations are **OpenAI-described**; OpenAI notes gaps that future models need to close, and engineering output still needs expert validation. The design-review copilot is an SSK AI Hub proposal.",
        links: [
          {
            label: "OpenAI: Accelerating engineering for the physical world",
            href: "https://openai.com/index/accelerating-engineering-for-the-physical-world/",
          },
        ],
      },
    },
    {
      rank: 7,
      id: "copilot-agent-workflows",
      date: "2026-11-06",
      additionalDates: ["2026-11-03", "2026-11-04"],
      headline: "GitHub Copilot agent workflows: coding agents spread across the developer workspace",
      posterHeadline: "GitHub Copilot: coding agents spread across the workspace",
      status: "Mixed: JetBrains Air available; Xcode in public preview; @GitHub in Slack/Teams generally available",
      type: "Developer tools / coding agents",
      audienceTags: ["Coding agents"],
      whatHappened: [
        "Between November 3 and 6, GitHub expanded Copilot into JetBrains Air (November 3) and Xcode's built-in coding assistant (public preview from Xcode 27.3 beta, November 4), improved agent-session management, added recurring tasks with cron support in VS Code, and made @GitHub in Slack and Teams generally available (November 6).",
      ],
      whyItMatters: [
        "The coding agent is becoming less like a chat pane and more like a **distributed development worker**.",
      ],
      applications: [
        { text: "PR management and recurring maintenance", kind: "potential" },
        { text: "Multi-session development and chat-to-code workflows", kind: "potential" },
      ],
      realWorldExample:
        "Schedule a weekly dependency-update task in VS Code, let the agent open the pull request, and discuss the change with the team through @GitHub in Slack before merging.",
      developerTakeaway:
        "The developer experience will increasingly involve **managing agent work**, not merely prompting an assistant. Measure it by finished work: retries, test failures and review changes matter more than code volume.",
      source: {
        heading: "Story 7 — GitHub Copilot weekly releases",
        body: "Primary sources: GitHub's November 6 weekly release roundup and November changelog, plus the November 3 JetBrains Air announcement. Status differs by surface: **Xcode is a public preview** requiring Xcode 27.3 beta, while **@GitHub in Slack and Teams is generally available**. Plan eligibility applies.",
        links: [
          {
            label: "GitHub changelog: Copilot weekly releases — November 2",
            href: "https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2/",
          },
          {
            label: "GitHub changelog: @GitHub in Slack and Teams is generally available",
            href: "https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available/",
          },
          { label: "GitHub changelog: November 2026", href: "https://github.blog/changelog/month/11-2026/" },
          {
            label: "Microsoft for Java: GitHub Copilot in JetBrains Air",
            href: "https://devblogs.microsoft.com/java/github-copilot-jetbrains-air/",
          },
        ],
      },
    },
  ],
  closingSections: [
    {
      id: "bigger-picture",
      eyebrow: "The bigger picture",
      heading: "AI is becoming workflow infrastructure",
      body: [
        "The seven stories point in one direction: specialized access-controlled capability, editable image and video systems, scientific agents linked to deterministic tools, defensive remediation loops, physical engineering software and coding agents distributed across the developer workspace.",
        "The product question is increasingly: **Can the AI finish useful work inside the real system where the task lives?**",
      ],
      diagram: {
        id: "workflow-infrastructure",
        caption:
          "Workflow infrastructure: a goal goes to an agent or model, which acts inside a real tool or environment; the action, edit or analysis is verified and ends as a human-reviewed result.",
      },
    },
    {
      id: "three-things",
      eyebrow: "Try it",
      heading: "Three things worth trying this week",
      body: [],
      options: [
        {
          label: "1 — Test edit preservation:",
          text: "change one part of a generated visual or video and check whether everything else stays stable.",
        },
        {
          label: "2 — Measure a coding agent by finished work:",
          text: "retries, test failures and review changes matter more than code volume.",
        },
        {
          label: "3 — Split reasoning from exact tools:",
          text: "let the model plan while deterministic tools do exact calculations.",
        },
      ],
      after: ["These are proposed exercises. No results are claimed by this briefing."],
    },
    {
      id: "build-of-the-week",
      eyebrow: "Build of the week",
      heading: "Verified Workflow Agent",
      body: [
        "A user goal goes to a planner, which selects tools and executes; evidence and tests feed a verifier, and a human reviews before the final action.",
        "The differentiator is not maximum autonomy. It is **useful work with evidence**.",
      ],
      diagram: {
        id: "verified-workflow-agent",
        caption:
          "Verified Workflow Agent: user goal, planner, tool selection, execution, evidence and tests, verifier, human review, final action.",
      },
    },
    {
      id: "reader-question",
      eyebrow: "Your turn",
      heading: "Which shift matters most to you?",
      body: [],
      options: [
        { label: "A —", text: "Specialized AI for security" },
        { label: "B —", text: "Better image/video creation" },
        { label: "C —", text: "AI for science" },
        { label: "D —", text: "AI inside engineering tools" },
        { label: "E —", text: "Coding agents that keep working" },
      ],
      after: ["Comment **A, B, C, D or E — and why.**"],
    },
  ],
  poster: {
    brand: "SSK AI",
    title: "What Changed in AI & What You Can Build",
    dateLabel: "November 8, 2026",
    headlines: [
      "GPT-6 Cyber: controlled capability becomes the product",
      "Images 2.6: visual AI becomes an editing workflow",
      "Gemini Omni 1.2 Flash: video becomes conversational editing",
      "Agentic Cheminformatics: a better pattern for AI in science",
      "OpenAI's Linux patch pipeline completes the remediation loop",
      "AI for physical-world engineering enters engineering software",
      "GitHub Copilot: coding agents spread across the workspace",
    ],
    theme: "From Models to Real Work: 7 developments that mattered.",
  },
  generalSourceNote:
    "Source review: November 8, 2026, after the November 1–7 window closed. This is a curated briefing of seven developments, not a complete launch calendar. Vendor speed, pricing, workflow-time and vulnerability-count figures are company-reported, not independent measurements; no hands-on test was conducted. Practical applications, build ideas, the three exercises and the reader question are editorial proposals. Considered but left out: OpenAI's LifeVal evaluation (November 2), the OpenAI–Ligo BioBasicsBench (November 6) and OpenAI's agreement to acquire Pierre Computer Company (November 4). The cover is original AI-generated editorial artwork, not a product screenshot; where its short card text differs from the stories, the stories are authoritative.",
};

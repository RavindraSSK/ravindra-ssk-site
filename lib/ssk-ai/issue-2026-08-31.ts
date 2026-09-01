import type { SskAiIssue } from "./types";

const WEEK1 = "/ssk-ai/tech-news/ai-technology-updates-august-8-2026";
const WEEK2 = "/ssk-ai/tech-news/ai-technology-updates-august-12-2026";
const WEEK3 = "/ssk-ai/tech-news/ai-technology-updates-august-22-2026";
const WEEK4 = "/ssk-ai/tech-news/ai-technology-updates-august-29-2026";

/**
 * Approved editorial source: SSK AI Hub Month in Review for August 2026,
 * dated August 31, 2026. This is a plain-language recap, not a fifth weekly:
 * every development below is drawn from — and links back into — one of the
 * four published August weekly editions, which remain the technical record.
 * Do not add claims beyond what those editions report.
 */
export const issueAugust2026Monthly: SskAiIssue = {
  slug: "ai-august-2026-month-in-review",
  edition: {
    kind: "monthly",
    number: 1,
    volume: 1,
    periodStart: "2026-08-01",
    periodEnd: "2026-08-31",
    periodLabel: "August 2026",
  },
  datePublished: "2026-08-31",
  dateLabel: "August 31, 2026",
  cardTitle: "AI in August 2026: 10 Developments That Defined the Month",
  title: "AI in August 2026: 10 Developments That Defined the Month",
  seoTitle: "AI in August 2026: 10 Key Developments | SSK AI Hub",
  seoDescription:
    "A clear August 2026 AI recap covering 10 important developments across models, agents, developer tools, infrastructure, research and real-world AI.",
  theme: "AI engineering is moving from choosing the best model to engineering the best system around the model.",
  hero: {
    kind: "editorial-image",
    src: "/ssk-ai/2026-08-31/ssk-ai-august-2026-hero.webp",
    width: 1672,
    height: 941,
    alt: "Month-in-review cover reading 'AI in August 2026 — Month in Review: 10 developments that defined the month', surrounded by small scenes for coding agents, sparse models, agent memory, browsers, payments, agent runtimes, Earth-scale weather AI, speech AI, and hardware.",
    caption:
      "August in one frame: the month's ten defining developments, drawn from four weekly SSK AI Hub briefings.",
    description:
      "Editor-supplied wide cover for the August 2026 Month in Review, in the light SSK AI Hub editorial style.",
  },
  monthly: {
    intro: [
      "August produced a steady stream of AI announcements. If you read only the headlines, it looked like noise: new models, new tools, new acronyms. Followed week by week, a much clearer story emerged — and it wasn't really about any single model getting smarter.",
      "Across four weekly SSK AI Hub briefings covering 24 stories, the pattern was the machinery growing around the models: agents that keep working after the chat ends, wallets and spending limits, standard plugs into documents, devices and payments, and better ways to test what these systems can actually do. Here are the ten developments that best explain the month — each in plain language, each linking to the full technical analysis in its weekly edition.",
    ],
    atAGlance: [
      { value: "4", label: "weekly editions" },
      { value: "24", label: "stories reported" },
      { value: "10", label: "developments selected" },
    ],
    capsule: {
      kind: "editorial-image",
      src: "/ssk-ai/2026-08-31/ssk-ai-august-2026-capsule.webp",
      width: 1122,
      height: 1402,
      alt: "A one-page visual capsule of August 2026 listing the month's ten AI developments with icons — from Meta's Muse Code and the Qwen releases to AgentCore Payments, Mistral's Agentic Search and the Model Hardware Standard — ending with the takeaway that AI engineering is shifting from models to the systems around them.",
      caption:
        "The August capsule: all ten developments on one page. The cards below tell the same story in accessible text, with links to the full weekly analyses.",
      description:
        "Editor-supplied monthly capsule graphic summarizing the ten selected developments; decorative — the accessible content lives in the cards below it.",
    },
    developments: [
      {
        name: "Meta Muse Code + Muse Spark 1.2",
        whatHappened:
          "Meta released Muse Code, a coding agent in beta, powered by Muse Spark 1.2 — a model trained together with the very agent system it runs inside, including its goals, memory management and helper agents.",
        whyItMatters:
          "Coding agents usually break at the seam between the model and the software wrapped around it. Training the two together closes that gap, and points at where serious coding agents are heading.",
        inSimpleWords: "The AI and the tool that runs it were built as one team, not bolted together afterwards.",
        read: { label: "Read the Week 1 analysis", href: `${WEEK1}#meta-muse-code` },
      },
      {
        name: "Alibaba Qwen3.8-Max",
        whatHappened:
          "Alibaba launched its largest model as a developer API: it reads text, images and video, handles very long documents, and can call tools directly.",
        whyItMatters:
          "Frontier-scale AI arrived as a platform component developers can rent by the call — collapsing whole categories of pipeline work into single requests and sharpening competition at the top end.",
        inSimpleWords: "A top-tier AI became something you plug into your own software, not just a chat website.",
        read: { label: "Read the Week 1 analysis", href: `${WEEK1}#qwen38-max` },
      },
      {
        name: "Qwen's frontier model goes open-weight",
        whatHappened:
          "Days later, Qwen published the model family's weights openly, with popular open-source serving tools supporting them from day one.",
        whyItMatters:
          "Organizations that cannot send data to outside services can now run frontier-class AI on their own machines — turning a policy dead end into an engineering decision.",
        inSimpleWords: "One of the world's most capable AI models became something you can download and run yourself.",
        read: { label: "Read the Week 2 analysis", href: `${WEEK2}#qwen-open-weights` },
      },
      {
        name: "NVIDIA Nemotron Lightning + NeMo Switchyard",
        whatHappened:
          "NVIDIA released a small, efficient open model built for the repetitive work inside AI agents, plus routing software that decides when a task needs the big expensive model and when the small one will do.",
        whyItMatters:
          "Most of what an agent does is routine. Routing that work to a cheaper model directly attacks the cost problem that keeps long-running agents out of production.",
        inSimpleWords: "The expensive AI brain is saved for hard decisions; a cheaper helper handles the busywork.",
        read: { label: "Read the Week 2 analysis", href: `${WEEK2}#nvidia-lightning-switchyard` },
      },
      {
        name: "OpenAI GPT-5.6-Cyber and the Daybreak program",
        whatHappened:
          "OpenAI built a cybersecurity-specialized model and made it available only through an approval-gated access program, with tiers for defenders and vetted specialists.",
        whyItMatters:
          "It sets a template for handling powerful dual-use AI: the capability ships, but paired with verification of who gets it — a pattern likely to spread to other sensitive domains.",
        inSimpleWords: "The most sensitive AI tools now come with a background check.",
        read: { label: "Read the Week 2 analysis", href: `${WEEK2}#openai-daybreak` },
      },
      {
        name: "Claude's agent runtime fills out",
        whatHappened:
          "Anthropic moved core agent building blocks out of beta — computer use, files, reusable skills — and added a browser toolset, attachable memory, web-access controls and a session inspector that shows what an agent did and what it cost.",
        whyItMatters:
          "Everything an agent needs to run like real software — storage, input/output, guardrails, debugging — now ships together in one supported runtime instead of a kit of betas.",
        inSimpleWords: "AI assistants got a proper operating system to live in.",
        read: { label: "Read the Week 3 analysis", href: `${WEEK3}#claude-agent-runtime` },
      },
      {
        name: "AWS AgentCore Payments",
        whatHappened:
          "AWS made it generally available for agents to pay for APIs, services and content — with spending limits enforced below the agent and every transaction logged.",
        whyItMatters:
          "Paying becomes something agents can do safely, and selling to agents becomes a real market. The guardrails are the point: this is policy-bounded spending, not a blank cheque.",
        inSimpleWords: "AI assistants got a wallet — with a strict allowance and a full receipt trail.",
        read: { label: "Read the Week 3 analysis", href: `${WEEK3}#agentcore-payments` },
      },
      {
        name: "Cursor's agents go persistent and event-driven",
        whatHappened:
          "Cursor's cloud coding agents can now react to pull requests, chat messages and schedules, hold a long-term goal, and keep working across sessions on isolated machines.",
        whyItMatters:
          "It is the clearest picture yet of coding agents as ongoing workers rather than per-question tools — the same shift that once turned scripts into always-on services.",
        inSimpleWords: "The coding assistant stopped waiting to be asked.",
        read: { label: "Read the Week 3 analysis", href: `${WEEK3}#cursor-cloud-agents` },
      },
      {
        name: "Mistral Agentic Search",
        whatHappened:
          "Mistral released a search toolkit where the model investigates documents step by step — searching, opening, reading and checking that the evidence actually supports each claim — instead of one blind lookup.",
        whyItMatters:
          "Answers that come with checkable evidence are the missing piece for using AI seriously on contracts, filings and manuals, where a confident misquote is worse than no answer.",
        inSimpleWords: "The AI now shows its sources instead of asking to be trusted.",
        read: { label: "Read the Week 3 analysis", href: `${WEEK3}#mistral-agentic-search` },
      },
      {
        name: "Anthropic Model Hardware Standard",
        whatHappened:
          "Anthropic previewed a standard way for AI models to operate programmable physical devices — lab instruments, robotics — with each device's safety limits built into the interface itself.",
        whyItMatters:
          "If it is adopted, connecting AI to real machines becomes routine engineering instead of a custom project each time — the same move that standardization made for software tools.",
        inSimpleWords: "A common plug between AI and real-world machines, with the safety rules wired into the plug.",
        read: { label: "Read the Week 4 analysis", href: `${WEEK4}#anthropic-mhs` },
      },
    ],
    bigPicture: {
      thesis: "AI engineering is moving from choosing the best model to engineering the best system around the model.",
      body: "A year ago, building with AI mostly meant picking a model and writing a good prompt. August's developments show how much that has changed. The differences that mattered this month were in everything surrounding the model: the tools it can call, the memory it keeps, the routing that decides which model handles which step, the permissions and spending limits that keep it inside the lines, the evaluations that check whether it actually works, and the runtimes that let it keep working after you close the tab. None of that replaces the model — it multiplies it. For teams, the practical shift is real: the questions worth asking are less 'which model is smartest?' and more 'what system do we build around it, and how do we keep that system safe, testable and affordable?'",
    },
    watchlist: [
      {
        theme: "Agent runtimes",
        note: "August ended with agents gaining files, memory, browsers and event loops. Worth watching: whether the major runtimes converge on shared building blocks or harden into separate silos.",
      },
      {
        theme: "Model routing",
        note: "Pairing small executor models with big reasoners was one of the month's most practical ideas. Worth watching: whether routing becomes standard middleware in agent stacks.",
      },
      {
        theme: "Evaluation",
        note: "August's double-blind evaluation pilot treated testing as infrastructure. Worth watching: whether more labs submit models to tests they cannot see in advance.",
      },
      {
        theme: "Deployment",
        note: "Tools that take open models from checkpoint to fast production runtimes cut real friction in August. Worth watching: how quickly they show up inside mainstream serving stacks.",
      },
      {
        theme: "Real-world interfaces",
        note: "Standards for hardware, speech models and payment rails all pointed the same way: AI acting beyond the chat box. Worth watching: which of these interfaces attracts adoption beyond its authors.",
      },
    ],
  },
  poster: {
    brand: "SSK AI",
    title: "AI in August 2026 — Month in Review",
    dateLabel: "August 31, 2026",
    headlines: [
      "Meta Muse Code + Muse Spark 1.2",
      "Alibaba Qwen3.8-Max",
      "Qwen's frontier open weights",
      "NVIDIA Nemotron + NeMo Switchyard",
      "OpenAI GPT-5.6-Cyber / Daybreak",
      "Claude's agent runtime",
      "AWS AgentCore Payments",
      "Cursor's persistent agents",
      "Mistral Agentic Search",
      "Anthropic Model Hardware Standard",
    ],
    theme: "From choosing the best model to engineering the best system around it.",
  },
};

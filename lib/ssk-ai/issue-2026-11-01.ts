import type { SskAiIssue } from "./types";

const WEEK1 = "/ssk-ai/tech-news/ai-technology-updates-october-8-2026";
const WEEK2 = "/ssk-ai/tech-news/ai-technology-updates-october-15-2026";
const WEEK3 = "/ssk-ai/tech-news/ai-technology-updates-october-22-2026";
const WEEK4 = "/ssk-ai/tech-news/ai-technology-updates-october-29-2026";

/**
 * Editorial source: SSK AI Hub October 2026 Month in Review (FINAL package,
 * 02_final_publication.md, qualified against 01_research_fact_pack.md). A
 * plain-language recap, not a fifth weekly. Nine of the ten developments link back
 * to the weekly edition that carries the full analysis; the late-month GPT-6
 * Rosalind Research signal (October 30) was never carried by a weekly and links to
 * OpenAI's release notes instead.
 *
 * Deliberate deviations from the package, all from checking it against the site's own
 * weekly editions: the story count is 44 (the weeklies carry 15 main stories and six
 * briefs, 8, 7 and 8), not the package's 45; access qualifiers the fact pack lists
 * (Genie 4 trusted-tester preview, Argon as a broader-access expansion, GPT-6 rollout
 * tiers, Terra's availability) were put back; the hybrid "TRY / BUILD" and "WATCH"
 * labels were mapped to the three lanes the package defines; and the supplied cover
 * images are not used because their tile order and labels disagree with the ranked list.
 */
export const issueOctober2026Monthly: SskAiIssue = {
  slug: "ai-october-2026-month-in-review",
  edition: {
    kind: "monthly",
    number: 3,
    volume: 1,
    periodStart: "2026-10-01",
    periodEnd: "2026-10-31",
    periodLabel: "October 2026",
  },
  datePublished: "2026-11-01",
  dateLabel: "November 1, 2026",
  cardTitle: "AI in October 2026: The Month AI Stopped Being a Text Box",
  title: "AI in October 2026: 10 Developments That Actually Mattered",
  seoTitle: "October 2026 AI Month in Review: 10 Developments That Actually Mattered | SSK AI Hub",
  seoDescription:
    "October’s 10 most important AI developments: GPT-6 Intelligent UI, Gemini at Work, Claude Haiku 5.5, Muse Wonder, Gemini 4 Argon, ChatGPT Slides, AI science, open agent standards, Terra and Genie 4.",
  theme: "The Month AI Stopped Being a Text Box",
  monthly: {
    intro: [
      "If September was the month persistent agents became real products, October changed the interface. AI stopped looking like one blank prompt box.",
      "It started showing up as an interactive answer you can click, an agent that works across business systems, a cheaper subagent for routine work, a presentation you can keep editing, a scientific swarm that searches millions of cells, and even a simulated world you can step into. That makes October more interesting than another list of “new models.”",
      "The question is no longer only: What can the model answer? It is: What experience does the model create, what work can it finish, and what can you actually do with the result?",
    ],
    atAGlance: [
      { value: "4", label: "weekly editions" },
      { value: "44", label: "stories reported" },
      { value: "10", label: "developments selected" },
    ],
    lanes: [
      { label: "TRY NOW", text: "practical enough to experiment with." },
      { label: "BUILD / WATCH", text: "important for builders; implementation matters." },
      { label: "BIG BET", text: "could reshape the stack, but still needs time." },
    ],
    flow: {
      heading: "The interface expanded",
      steps: ["Text answer", "Interactive UI", "Editable artifact", "Work agent", "Interactive world"],
    },
    readThree: {
      heading: "If you only read three stories",
      items: [
        { audience: "For everyday users", name: "GPT-6 Intelligent UI", why: "because AI answers are becoming interactive mini-experiences." },
        {
          audience: "For builders",
          name: "Gemini at Work",
          why: "because the agent is turning into a routing and execution layer across company systems.",
        },
        {
          audience: "For the future",
          name: "Genie 4",
          why: "because generating an interactive world is a different category from generating an image or video.",
        },
      ],
    },
    developments: [
      {
        name: "GPT-6 Intelligent UI",
        lane: "TRY NOW",
        whatHappened:
          "OpenAI brought GPT-6 to ChatGPT with Intelligent UI. Instead of always returning paragraphs, ChatGPT can choose comparisons, charts, forms, buttons, diagrams or small interactive tools. The rollout was staged by plan: paid Chat uses GPT-6 Sol and Free and Go use GPT-6 Luna.",
        whyItMatters:
          "The model is starting to decide not just what to say, but how the answer should work. A budgeting question can become a calculator, a comparison can become an interactive control, and a study question can become an explorable diagram.",
        pictureThis:
          "Old experience: three paragraphs comparing options. New experience: a comparison UI where you change priorities and watch the recommendation update.",
        take: "The best interface is not the fanciest one. It is the one that removes work.",
        tryThis:
          "Ask for something that normally needs a spreadsheet, calculator or comparison table. Check whether interaction actually helps you decide faster.",
        read: { label: "Read the Week 1 analysis", href: `${WEEK1}#chatgpt-intelligent-ui` },
      },
      {
        name: "Google Cloud Gemini at Work",
        lane: "BUILD / WATCH",
        whatHappened:
          "On October 8, Google Cloud introduced the Gemini agent as a universal work agent. Google says it can use organizational context, choose models, use tools, connect to business systems and return completed work inside the environments people already use. That is a product direction and feature set; confirm access in your own enterprise environment.",
        whyItMatters:
          "Enterprise AI is moving beyond “assistant in every app.” The bigger idea is one agent layer across the apps, which requires model routing, permissions, governance, business context and cost controls to work together.",
        pictureThis:
          "A project update is due Friday. One agent checks project data, recent documents and relevant context, prepares the update, and places it where the team already works.",
        take: "The benchmark is not how well the agent chats. It is whether the finished work is correct, authorized and auditable.",
        read: { label: "Read the Week 2 analysis", href: `${WEEK2}#gemini-work-agent` },
      },
      {
        name: "Claude Haiku 5.5",
        lane: "TRY NOW",
        whatHappened:
          "Anthropic released Haiku 5.5 and positions it for fast, high-volume work such as summaries, classification, database queries, browser use and subagent tasks. Haiku 5.5 is a reminder that not every important model needs to be the largest one. Anthropic’s workload-savings estimates are vendor claims, not guaranteed savings.",
        whyItMatters:
          "Agents can make many small decisions during one workflow, and using a frontier model for every step can be wasteful. A practical stack increasingly looks like a small model for routine work, then a larger model when difficulty or uncertainty rises.",
        take: "“Cheaper tokens” are not automatically cheaper work. Count retries, corrections and failed tasks.",
        tryThis:
          "Run the same small workflow with two model tiers. Compare checked successful completions, not just token price.",
        read: { label: "Read the Week 1 analysis", href: `${WEEK1}#claude-haiku-5-5` },
      },
      {
        name: "Meta Muse Wonder",
        lane: "BUILD / WATCH",
        whatHappened:
          "On October 12, Meta introduced Muse Wonder and Muse Wonder Full for personal and professional agentic tasks, continuing its personal-agent direction. Wonder is available through the Meta Model API and Muse Code; Full is available to Muse Code subscribers, and broader Muse integration was described as upcoming. The important theme is continuity: assistants are increasingly expected to understand a project over time and carry relevant context.",
        whyItMatters:
          "Useful memory raises harder questions: what should the agent remember, for how long, which apps may it access, how do users inspect or correct its understanding, and what requires confirmation?",
        take: "Memory is useful only when the AI remembers the right things under the user’s control.",
        read: { label: "Read the Week 2 analysis", href: `${WEEK2}#muse-wonder` },
      },
      {
        name: "Gemini 4 Argon",
        lane: "BIG BET",
        whatHappened:
          "Google expanded access to Gemini 4 Argon on October 13, in the Gemini app for Google AI Pro and Ultra subscribers and to developers, with GitHub adding a gradual rollout in Copilot. Google positions Argon for long-horizon complex work across coding, enterprise knowledge, cybersecurity and science. Argon was first announced on September 30, and which route you can use depends on your account.",
        whyItMatters:
          "Frontier models are being pushed into tasks where work lasts longer, more tools are involved, progress needs to be visible, and mistakes become more expensive.",
        pictureThis:
          "A code migration should not be judged by impressive code. Judge whether tests pass, what broke, what needed a human, how many iterations were required, and whether the final system works.",
        take: "Long-horizon AI needs progress visibility and recovery, not just deeper reasoning.",
        read: { label: "Read the Week 2 analysis", href: `${WEEK2}#gemini-4-argon` },
      },
      {
        name: "ChatGPT Slides",
        lane: "TRY NOW",
        whatHappened:
          "OpenAI introduced ChatGPT Slides, a shared presentation workspace. Eligible users can create a deck, keep editing the real presentation (text, images, shapes and charts), and collaborate with others. Access is a gradual rollout to eligible Pro, Business and Enterprise users with Space access.",
        whyItMatters:
          "Old pattern: prompt, file, download, fix somewhere else. Better pattern: prompt, editable artifact, human edits, AI edits, collaboration, final. The artifact becomes a workspace.",
        take: "Generative tools become much more useful when they support the revision loop.",
        tryThis:
          "Create a five-slide deck, manually fix three details, then ask AI to change only one section. Does it respect the parts you already fixed?",
        read: { label: "Read the Week 3 analysis", href: `${WEEK3}#chatgpt-slides` },
      },
      {
        name: "Thousands of AI agents for brain science",
        lane: "BIG BET",
        whatHappened:
          "OpenAI, PerturbAI and Scripps Research used a large swarm of agents in parallel to analyze existing experimental data from millions of mouse brain cells. OpenAI reports the system surfaced promising research leads in 32 minutes; outside coverage puts the swarm near 2,000 agents. The leads are research leads, not established truth, and proposed mechanisms still need experimental testing.",
        whyItMatters:
          "This is a better mental model for AI science than “AI discovers the cure.” Agents help search a huge evidence space, while scientists still decide what is plausible, what deserves an experiment and what evidence is strong enough to trust.",
        take: "The value is not how many agents you launch. It is how much better evidence reaches the researcher.",
        read: { label: "Read the Week 3 analysis", href: `${WEEK3}#biological-reasoning-agents` },
      },
      {
        name: "Agentic AI Foundation expands open agent standards",
        lane: "BUILD / WATCH",
        whatHappened:
          "The Linux Foundation’s Agentic AI Foundation announced four new projects: Agent Skills, Open Responses, OpenEnv and OpenSandbox. Agent Skills is an existing standard donated by Anthropic, so that part is a governance change rather than a first release.",
        whyItMatters:
          "Without standards, every agent platform reinvents skill formats, response protocols, environments, sandboxes and execution assumptions, which makes agents harder to move and integrate. A donation does not guarantee identical behavior or security across hosts.",
        take: "The agent ecosystem needs boring, reliable plumbing. Portable workflows may matter more than flashy demos.",
        read: { label: "Read the Week 4 analysis", href: `${WEEK4}#agent-skills-aaif` },
      },
      {
        name: "GPT-6.1 Terra",
        lane: "BUILD / WATCH",
        whatHappened:
          "On October 26, OpenAI released GPT-6.1 Terra as a faster, more efficient model for visual reasoning, writing and computer use. It is available in the API, ChatGPT Work and Codex (not the regular Chat tab), and API billing is separate from a ChatGPT subscription.",
        whyItMatters:
          "Computer-use AI is moving down the cost curve, which creates room for repetitive browser work, visual extraction, document workflows and automation where the most expensive frontier model would be hard to justify.",
        take: "Never compare model prices without comparing finished tasks. A cheap model that needs three repairs can cost more than a stronger model that succeeds once.",
        read: { label: "Read the Week 4 analysis", href: `${WEEK4}#gpt-6-1-terra` },
      },
      {
        name: "Genie 4",
        lane: "BIG BET",
        whatHappened:
          "On October 27, Google DeepMind introduced Genie 4, a world model for real-time interactive simulation. Per DeepMind you can steer scenes with natural language and the generated world includes native audio. It is a limited trusted-tester research preview with broader access planned, and DeepMind notes limitations in object permanence, physical interactions and longer-session consistency.",
        whyItMatters:
          "Generative AI is moving through stages: text, image, video, interactive environment. A world model is not just something you watch. It is something you can act inside. What to watch: does an object stay where you left it, does the environment follow stable rules, and does the world remain coherent after extended interaction?",
        take: "For world models, the killer benchmark may be: can the world remember what happened?",
        read: { label: "Read the Week 4 analysis", href: `${WEEK4}#genie-4` },
      },
    ],
    scorecard: {
      heading: "The October scorecard",
      rows: [
        { category: "Most useful right now", pick: "GPT-6 Intelligent UI", why: "Makes ordinary AI interactions more usable" },
        { category: "Best everyday artifact", pick: "ChatGPT Slides", why: "Keeps generation and editing together" },
        { category: "Best builder trend", pick: "Agentic AI Foundation", why: "Makes workflows more portable" },
        { category: "Best cost story", pick: "Claude Haiku 5.5", why: "Small models become strategically useful" },
        { category: "Biggest enterprise shift", pick: "Gemini at Work", why: "Agent layer across business systems" },
        { category: "Most ambitious direction", pick: "Muse Wonder", why: "Personal-agent continuity" },
        { category: "Biggest science story", pick: "Distributed brain-science agents", why: "Parallel agents narrow huge evidence spaces" },
        { category: "Biggest future bet", pick: "Genie 4", why: "From generated media to generated worlds" },
      ],
    },
    weekendTests: {
      heading: "Three things worth trying this weekend",
      items: [
        {
          title: "Replace one paragraph with an interface",
          body: "Ask GPT-6 Intelligent UI to solve a small decision or comparison. Decide whether interaction beats prose.",
        },
        {
          title: "Build a tiny model router",
          body: "Use a cheaper model for routine requests and a stronger model only when a confidence or risk rule triggers.",
        },
        {
          title: "Test artifact editing",
          body: "Create a small deck or document, manually edit it, then ask AI to change one part. See whether it respects your work.",
        },
      ],
    },
    noise: {
      heading: "What was mostly noise?",
      intro: ["October had plenty of benchmark claims. Those matter only when they predict the work you care about. A benchmark gain is less useful than:"],
      points: [
        "fewer retries,",
        "lower total task cost,",
        "better recovery,",
        "clearer evidence,",
        "safer permissions,",
        "or an artifact you can actually edit.",
      ],
      closing: "If it changes what a person can actually do, keep reading. If it only changes a leaderboard, ask for task-level evidence.",
    },
    lateSignal: {
      heading: "GPT-6 Rosalind Research",
      name: "GPT-6 Rosalind Research",
      body: [
        "On October 30, OpenAI released GPT-6 Rosalind Research to approved life-sciences research customers, according to its model release notes. It is specialized, restricted and not a mainstream ChatGPT release.",
        "The important signal is the continued emergence of domain models with different access rules.",
      ],
      watch: "Watch this in November.",
      source: { label: "OpenAI: Model release notes", href: "https://help.openai.com/en/articles/9624314-model-release-notes" },
    },
    bigPicture: {
      thesis: "September made persistent agents feel real. October made AI feel less like a chat product.",
      body: "The strongest releases added new surfaces: UI, business systems, editable artifacts, smaller models, scientific swarms, open standards, computer use and interactive worlds. The next product battle may not be who has the smartest model. It may be who turns intelligence into the most useful experience.",
    },
    readerQuestion: {
      heading: "If you could keep only one October shift, which would it be?",
      intro: "Comment A, B, C, D or E — and why.",
      options: [
        { label: "A —", text: "Interactive AI interfaces" },
        { label: "B —", text: "Work agents across your apps" },
        { label: "C —", text: "Smaller, cheaper agent models" },
        { label: "D —", text: "Editable AI artifacts" },
        { label: "E —", text: "Interactive world models" },
      ],
      after: "A comment prompt, not a poll: we are not tallying votes or reporting results.",
    },
  },
  poster: {
    brand: "SSK AI",
    title: "AI in October 2026 — Month in Review",
    dateLabel: "November 1, 2026",
    headlines: [
      "GPT-6 Intelligent UI",
      "Google Cloud Gemini at Work",
      "Claude Haiku 5.5",
      "Meta Muse Wonder",
      "Gemini 4 Argon",
      "ChatGPT Slides",
      "Thousands of AI agents for brain science",
      "Agentic AI Foundation open standards",
      "GPT-6.1 Terra",
      "Genie 4",
    ],
    theme: "The Month AI Stopped Being a Text Box.",
  },
  generalSourceNote:
    "Coverage: October 1–31, 2026. Ten developments selected from the four October weekly editions, which carried 44 stories in total (the first edition's 15 main stories plus six briefs, then 8, 7 and 8); each card links to the weekly analysis that carries its primary sources. The late-month GPT-6 Rosalind Research item (October 30) was not carried by a weekly and cites OpenAI's model release notes. Vendor claims are attributed and are not independent measurements. Scientific-agent outputs are research leads, not established findings. “Try now” depends on account and product eligibility. The weekend suggestions and the reader question are proposals and prompts, not tests we ran or results we are claiming.",
};

import type { ReactElement } from "react";

import type { CodedDiagramId } from "@/lib/ssk-ai/types";

function pickActive(total: number, count: number) {
  const active = new Set<number>();
  let cursor = 11;
  while (active.size < count) {
    active.add(cursor % total);
    cursor += 19;
  }
  return active;
}

function ExpertCells({
  columns,
  rows,
  activeCount,
  label,
}: {
  columns: number;
  rows: number;
  activeCount: number;
  label: string;
}) {
  const total = columns * rows;
  const active = pickActive(total, activeCount);
  return (
    <div
      className="ssk-experts"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={active.has(index) ? "ssk-experts__cell is-active" : "ssk-experts__cell"}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}

function ChipRow({ chips }: { chips: string[] }) {
  return (
    <ul className="ssk-diagram__chips">
      {chips.map((chip) => (
        <li key={chip}>{chip}</li>
      ))}
    </ul>
  );
}

export function QwenMoeDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--stack">
      <div className="ssk-diagram__panel">
        <p className="ssk-diagram__kicker">2.4T total parameters</p>
        <ExpertCells columns={32} rows={16} activeCount={20} label="512 expert cells with a small activated subset" />
        <p className="ssk-diagram__callout">512 MoE experts · ≈95B activated per token</p>
      </div>
      <div className="ssk-diagram__layers">
        <div className="ssk-diagram__layer-col">
          <span className="ssk-diagram__layer ssk-diagram__layer--linear">Linear attention</span>
          <span className="ssk-diagram__layer ssk-diagram__layer--full">Full attention</span>
          <span className="ssk-diagram__layer ssk-diagram__layer--linear">Linear attention</span>
          <span className="ssk-diagram__layer ssk-diagram__layer--full">Full attention</span>
        </div>
        <p className="ssk-diagram__side">92 layers</p>
      </div>
      <div className="ssk-context-bar" aria-label="Context window">
        <div className="ssk-context-bar__native">
          <span>Native: 262,144 tokens</span>
        </div>
        <div className="ssk-context-bar__extend">
          <span>Qwen-stated extension: ~1.01M</span>
        </div>
      </div>
      <ChipRow chips={["Open weights", "Day-zero vLLM/SGLang", "Configurable reasoning effort"]} />
    </div>
  );
}

export function MaiThinkingDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--compare">
      <div className="ssk-diagram__split">
        <div className="ssk-diagram__panel">
          <p className="ssk-diagram__kicker">Dense (illustrative)</p>
          <div className="ssk-dense-block" aria-hidden="true" />
          <p className="ssk-diagram__callout">all parameters compute per token</p>
        </div>
        <p className="ssk-diagram__arrow" aria-hidden="true">
          sparse routing
        </p>
        <div className="ssk-diagram__panel">
          <p className="ssk-diagram__kicker">MAI-Thinking-1</p>
          <ExpertCells
            columns={16}
            rows={8}
            activeCount={4}
            label="Expert cells with a small activated subset"
          />
          <p className="ssk-diagram__callout">≈35B of ≈1T active per token</p>
        </div>
      </div>
      <ChipRow
        chips={[
          "256K context",
          "Function calling",
          "Developer instructions",
          "Chat Completions compatible",
          "Foundry public preview",
        ]}
      />
    </div>
  );
}

export function NvidiaSwitchyardDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--flow">
      <div className="ssk-switchyard">
        <div className="ssk-flow__box ssk-switchyard__goal">User goal / long-running task</div>
        <div className="ssk-flow__hub ssk-switchyard__hub">NeMo Switchyard — routes each request</div>
        <div className="ssk-flow__tiers ssk-switchyard__tiers">
          <div className="ssk-flow__tier ssk-flow__tier--thin">
            <span className="ssk-flow__meta">few calls</span>
            <p>Frontier reasoning model — planning, hard decisions</p>
          </div>
          <div className="ssk-flow__tier ssk-flow__tier--thick">
            <span className="ssk-flow__meta">high volume</span>
            <p>Nemotron 3.5 Lightning — 30B MoE, 3B active — tool calls · validation · formatting</p>
          </div>
        </div>
        <div className="ssk-flow__box ssk-flow__box--loop ssk-switchyard__tools">Tools / environment</div>
      </div>
      <p className="ssk-diagram__loop-note">Both tiers connect to tools / environment, looping back to the hub</p>
      <ChipRow chips={["Open weights + data + recipes", "Speculative decoding", "BF16/NVFP4"]} />
    </div>
  );
}

export function OpenaiDaybreakDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--access">
      <div className="ssk-access">
        <ul className="ssk-access__actors">
          <li>Security researchers</li>
          <li>Enterprise security teams</li>
          <li>Defensive orgs</li>
        </ul>
        <div className="ssk-access__gate" role="img" aria-label="Approval and security requirements">
          <span className="ssk-access__lock" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </span>
          <span>Approval &amp; security requirements</span>
        </div>
        <div className="ssk-access__tiers">
          <div className="ssk-access__tier ssk-access__tier--blue">
            Daybreak Blue: GPT-5.6 Sol, defensive configuration
          </div>
          <div className="ssk-access__tier ssk-access__tier--red">
            <span>tighter access</span>
            Daybreak Red: specialized cyber models incl. GPT-5.6-Cyber
          </div>
        </div>
      </div>
      <ChipRow
        chips={[
          "Secure-code review",
          "Vulnerability research",
          "Incident response",
          "Vulnerability management",
          "Patch validation",
        ]}
      />
      <p className="ssk-diagram__rail">Distribution: OpenAI · Amazon Bedrock (eligible customers).</p>
    </div>
  );
}

export function TieredOpsDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--pipeline">
      <ol className="ssk-pipeline">
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Inbox</span>
        </li>
        <li className="ssk-pipeline__stage ssk-pipeline__stage--router">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--diamond">Router</span>
          <div className="ssk-pipeline__split">
            <div className="ssk-pipeline__path ssk-pipeline__path--thick">
              <span className="ssk-flow__meta">most steps</span>
              <p>Executor — routine steps</p>
            </div>
            <div className="ssk-pipeline__path ssk-pipeline__path--thin">
              <span className="ssk-flow__meta">few steps</span>
              <p>Reasoner — hard steps</p>
            </div>
          </div>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--cylinder">Tools &amp; state</span>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Actions</span>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Result + routing log</span>
        </li>
      </ol>
    </div>
  );
}

export function WeathernextEnsembleDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--stack">
      <div className="ssk-diagram__panel">
        <p className="ssk-diagram__kicker">One cyclone, many futures</p>
        <ExpertCells
          columns={25}
          rows={8}
          activeCount={48}
          label="A grid of ensemble members, a subset highlighted as sampled scenarios"
        />
        <p className="ssk-diagram__callout">up to 1,000 scenarios per cyclone (Google-stated)</p>
      </div>
      <div className="ssk-context-bar" aria-label="Forecast outputs and horizon">
        <div className="ssk-context-bar__native">
          <span>Track · intensity · wind structure</span>
        </div>
        <div className="ssk-context-bar__extend">
          <span>Up to 15 days ahead</span>
        </div>
      </div>
      <ChipRow chips={["Open code + weights", "Published in Nature", "2-mini fits one TPU"]} />
    </div>
  );
}

export function AgentPluginsDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--flow">
      <div className="ssk-plugin-flow">
        <div className="ssk-flow__box">Agent Skill + the MCP servers it needs</div>
        <div className="ssk-flow__hub">One plugin package — shared manifest &amp; layout</div>
        <div className="ssk-flow__tiers">
          <div className="ssk-flow__tier ssk-flow__tier--thick">
            <span className="ssk-flow__meta">same package</span>
            <p>Compatible client A — e.g. an IDE agent</p>
          </div>
          <div className="ssk-flow__tier ssk-flow__tier--thick">
            <span className="ssk-flow__meta">same package</span>
            <p>Compatible client B — e.g. a terminal agent</p>
          </div>
        </div>
        <div className="ssk-flow__box ssk-flow__box--loop">Client-specific extensions stay in their own namespaces</div>
      </div>
      <ChipRow chips={["Open spec v1.0", "Validation & failure isolation", "Portable path variables"]} />
    </div>
  );
}

export function PolicyGateDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--pipeline">
      <ol className="ssk-pipeline">
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Content</span>
        </li>
        <li className="ssk-pipeline__stage ssk-pipeline__stage--router">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--diamond">Policy check</span>
          <div className="ssk-pipeline__split">
            <div className="ssk-pipeline__path ssk-pipeline__path--thick">
              <span className="ssk-flow__meta">most traffic</span>
              <p>Passes — forwarded unchanged</p>
            </div>
            <div className="ssk-pipeline__path ssk-pipeline__path--thin">
              <span className="ssk-flow__meta">flagged</span>
              <p>Blocked or routed to review</p>
            </div>
          </div>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--cylinder">Policy files</span>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">App / model</span>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Decision + log</span>
        </li>
      </ol>
    </div>
  );
}

export function SpadeLoopDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--flow">
      <div className="ssk-plugin-flow">
        <div className="ssk-flow__box">One LLM, two roles</div>
        <div className="ssk-flow__hub">
          Environment Designer — writes executable Gym-style reset() / step() worlds with rewards &amp; verification
        </div>
        <div className="ssk-flow__tiers">
          <div className="ssk-flow__tier ssk-flow__tier--thick">
            <span className="ssk-flow__meta">learns inside</span>
            <p>Reasoning Agent — acts in the generated environment</p>
          </div>
          <div className="ssk-flow__tier ssk-flow__tier--thin">
            <span className="ssk-flow__meta">feedback</span>
            <p>Regret signal keeps tasks at the capability boundary</p>
          </div>
        </div>
        <div className="ssk-flow__box ssk-flow__box--loop">Harder environments as the agent improves — the loop repeats</div>
      </div>
      <ChipRow chips={["Executable environments", "Adaptive difficulty", "Scaled to 30B (paper-reported)"]} />
    </div>
  );
}

export function BiomarkerAgentsDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--flow">
      <div className="ssk-plugin-flow">
        <div className="ssk-flow__box">Research directive</div>
        <div className="ssk-flow__hub">Orchestrator — decomposes the task; a shared fact sheet keeps every claim traceable</div>
        <div className="ssk-flow__tiers">
          <div className="ssk-flow__tier ssk-flow__tier--thick">
            <span className="ssk-flow__meta">produce</span>
            <p>Hypothesis, statistics &amp; model-training agents — deterministic code computes the numbers</p>
          </div>
          <div className="ssk-flow__tier ssk-flow__tier--thin">
            <span className="ssk-flow__meta">attack</span>
            <p>Critic &amp; Defender — adversarial review + 11-check validation battery</p>
          </div>
        </div>
        <div className="ssk-flow__box ssk-flow__box--loop">
          Human researchers supervise; output is ranked biomarker candidates, not clinical findings
        </div>
      </div>
      <ChipRow chips={["3 cohorts · 9,279 observations", "Literature-grounded", "Human-supervised"]} />
    </div>
  );
}

export function AgenticSearchDiagram() {
  return (
    <div className="ssk-diagram ssk-diagram--pipeline">
      <ol className="ssk-pipeline">
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Question</span>
        </li>
        <li className="ssk-pipeline__stage ssk-pipeline__stage--router">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--diamond">Agent loop</span>
          <div className="ssk-pipeline__split">
            <div className="ssk-pipeline__path ssk-pipeline__path--thick">
              <span className="ssk-flow__meta">iterate</span>
              <p>search · open · navigate · read · grep</p>
            </div>
            <div className="ssk-pipeline__path ssk-pipeline__path--thin">
              <span className="ssk-flow__meta">verify</span>
              <p>Check the evidence actually supports the claim</p>
            </div>
          </div>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--cylinder">Existing document indexes</span>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Evidence trail</span>
        </li>
        <li className="ssk-pipeline__stage">
          <span className="ssk-pipeline__shape ssk-pipeline__shape--box">Cited answer</span>
        </li>
      </ol>
    </div>
  );
}

const diagrams = {
  "qwen-moe": QwenMoeDiagram,
  "mai-thinking": MaiThinkingDiagram,
  "nvidia-switchyard": NvidiaSwitchyardDiagram,
  "openai-daybreak": OpenaiDaybreakDiagram,
  "tiered-ops": TieredOpsDiagram,
  "weathernext-ensemble": WeathernextEnsembleDiagram,
  "agent-plugins": AgentPluginsDiagram,
  "policy-gate": PolicyGateDiagram,
  "spade-loop": SpadeLoopDiagram,
  "biomarker-agents": BiomarkerAgentsDiagram,
  "agentic-search": AgenticSearchDiagram,
} satisfies Record<CodedDiagramId, () => ReactElement>;

export function CodedDiagram({ id, caption }: { id: CodedDiagramId; caption: string }) {
  const Diagram = diagrams[id];
  return (
    <figure className="ssk-figure">
      <Diagram />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

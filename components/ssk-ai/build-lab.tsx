"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Download } from "lucide-react";

import type { BuildLab } from "@/lib/ssk-ai/types";

/**
 * Build-or-Skip Lab: pick a reader path (Student / Developer / Creator) and see a
 * weekend project brief, a three-step outline and one success metric.
 *
 * WAI-ARIA tabs pattern: one tab stop for the tablist (roving tabindex), Left/Right
 * and Home/End move between tabs and activate them. Fully client-side, no signup,
 * no storage. The panel swap fades on opacity only (180 ms) and is disabled under
 * prefers-reduced-motion in CSS.
 */
export function BuildOrSkipLab({ lab }: { lab: BuildLab }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const active = lab.paths[activeIndex];

  const focusTab = (index: number) => {
    const count = lab.paths.length;
    const next = (index + count) % count;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(lab.paths.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="ssk-lab">
      <span className="eyebrow">{lab.eyebrow}</span>
      <h2 id={`${lab.id}-title`} className="section-title">
        {lab.heading}
      </h2>
      <p className="ssk-prose">{lab.intro}</p>

      <div className="ssk-lab__tabs" role="tablist" aria-label="Choose your path">
        {lab.paths.map((path, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={path.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${path.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={selected ? "ssk-lab__tab is-active" : "ssk-lab__tab"}
              onClick={() => setActiveIndex(index)}
              onKeyDown={onKeyDown}
            >
              {path.label}
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        className="ssk-lab__panel"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
      >
        <p className="ssk-lab__kicker">Weekend project</p>
        <h3 className="ssk-lab__project">{active.project}</h3>
        <p className="ssk-lab__brief">{active.brief}</p>
        <ol className="ssk-lab__steps">
          {active.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="ssk-lab__metric">
          <span>Success metric</span>
          {active.metric}
        </p>
      </div>

      <div className="ssk-lab__challenge">
        <p className="ssk-prose">
          <strong>Reader challenge:</strong> {lab.challenge}
        </p>
        <a className="ssk-lab__download" href={lab.checklist.href} download={lab.checklist.fileName}>
          <Download aria-hidden="true" size={18} />
          {lab.checklist.label}
        </a>
      </div>
    </div>
  );
}

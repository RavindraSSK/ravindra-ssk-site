import { CodedDiagram } from "@/components/ssk-ai/diagrams";
import { RichText } from "@/components/ssk-ai/rich-text";
import type { ProjectConcept, SskAiIssue } from "@/lib/ssk-ai/types";

function ProjectCard({ project, featured }: { project: ProjectConcept; featured?: boolean }) {
  return (
    <article
      className={featured ? "card ssk-project ssk-project--featured" : "card ssk-project"}
      id={project.slug}
    >
      <div className="ssk-project__top">
        {featured ? <span className="meta-pill">Featured project</span> : null}
        <span className="ssk-project__difficulty">{project.difficulty}</span>
      </div>
      <h3 className="ssk-project__name">{project.name}</h3>
      <p className="ssk-project__summary">{project.summary}</p>
      <dl className="ssk-project__facts">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>From this issue</dt>
          <dd>{project.fromThisIssue}</dd>
        </div>
        <div>
          <dt>How it works</dt>
          <dd>{project.howItWorks}</dd>
        </div>
        <div>
          <dt>Who</dt>
          <dd>{project.who}</dd>
        </div>
        <div>
          <dt>Why useful</dt>
          <dd>{project.whyUseful}</dd>
        </div>
      </dl>
    </article>
  );
}

export function WhatWeCanBuild({ issue }: { issue: SskAiIssue }) {
  const featured = issue.projects.find((project) => project.featured);
  const rest = issue.projects.filter((project) => !project.featured);

  return (
    <section className="ssk-build" aria-labelledby="ssk-build-title">
      <div className="ssk-build__intro">
        <span className="eyebrow">What Can We Build?</span>
        <h2 id="ssk-build-title" className="section-title">
          Three project concepts from this issue
        </h2>
        <RichText text={`*${issue.projectsIntro}*`} className="section-copy" />
      </div>

      {featured ? (
        <div className="ssk-build__featured">
          <ProjectCard project={featured} featured />
          <CodedDiagram id="tiered-ops" caption={issue.featuredProject.caption} />
          <ol className="ssk-build__stages">
            {issue.featuredProject.stages.map((stage) => (
              <li key={stage.id}>
                <p className="ssk-build__stage-label">{stage.label}</p>
                <p>{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <div className="ssk-build__grid">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

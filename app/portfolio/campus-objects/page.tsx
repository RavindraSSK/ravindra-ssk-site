import type { Metadata } from "next";

import { ContactCTA } from "@/components/recruiter/sections";
import { getProject } from "@/lib/recruiter-content";

const project = getProject("campus-objects");

export const metadata: Metadata = {
  title: "Campus-Objects Case Study",
  description: "Campus-Objects case study: object detection using LW-DETR, PyTorch, and 3,000+ annotated campus images.",
};

export default function CampusObjectsPage() {
  if (!project) return null;

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container portfolio-hero">
          <span className="eyebrow">Case Study</span>
          <h1 className="page-title">Campus-Objects - Object Detection using LW-DETR</h1>
          <p className="page-copy">{project.description}</p>
          <div className="meta-row">
            {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container detail-grid">
          {project.sections.map((section) => (
            <article className="card card--hover animate-in" key={section.title}>
              <h2 className="card-heading">{section.title}</h2>
              <div className="stack">
                {section.body.map((paragraph) => <p className="card-copy" key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA title="Discuss computer vision projects" />
    </main>
  );
}

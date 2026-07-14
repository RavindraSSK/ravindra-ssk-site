import type { Metadata } from "next";

import { ContactCTA } from "@/components/recruiter/sections";
import { getProject } from "@/lib/recruiter-content";

const project = getProject("snaptune");

export const metadata: Metadata = {
  title: "SnapTune Case Study",
  description: "SnapTune case study: multimodal music recommendation using image context, mood inference, Spotify search, and Streamlit.",
};

export default function SnapTunePage() {
  if (!project) return null;

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container portfolio-hero">
          <span className="eyebrow">Case Study</span>
          <h1 className="page-title">SnapTune - Multimodal Music Recommender</h1>
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
      <ContactCTA title="Discuss multimodal AI ideas" />
    </main>
  );
}

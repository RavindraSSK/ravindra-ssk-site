import type { Metadata } from "next";

import { ContactCTA } from "@/components/recruiter/sections";
import { getProject } from "@/lib/recruiter-content";

const project = getProject("meditrust");

export const metadata: Metadata = {
  title: "MediTrust Case Study",
  description: "MediTrust case study: explainable AI healthcare risk prediction with Logistic Regression, SHAP, FastAPI, PostgreSQL, Docker, and AWS.",
};

export default function MediTrustPage() {
  if (!project) return null;

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container portfolio-hero">
          <span className="eyebrow">Case Study</span>
          <h1 className="page-title">MediTrust - Explainable AI Healthcare Risk Prediction Platform</h1>
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
      <ContactCTA title="Discuss explainable AI systems" />
    </main>
  );
}

import Image from "next/image";
import type { Metadata } from "next";

import { ContactCTA, ExperienceCard, SectionHeader } from "@/components/recruiter/sections";
import { education, experiences, fullName, socialLinks } from "@/lib/recruiter-content";

export const metadata: Metadata = {
  title: "About",
  description: "About Ravindra SSK's AI/ML engineering background, LLM evaluation work, education, and previous GeoAI research.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container about-header">
          <div className="avatar-shell animate-in">
            <Image src="/images/about/ravindra-ssk.webp" alt="Portrait of Ravindra SSK" width={512} height={512} priority />
          </div>
          <div className="stack animate-in">
            <span className="eyebrow">About</span>
            <h1 className="page-title">{fullName}</h1>
            <p className="about-kicker">AI/ML Engineer - LLM Evaluation Specialist - Graduate AI Student</p>
            <p className="page-copy">
              I evaluate large language model behavior and build machine learning systems across explainable healthcare AI, computer vision, multimodal AI, and geospatial research. I care about factual accuracy, model reliability, explainability, and engineering work that holds up beyond a demo.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container about-summary-grid">
          <article className="card animate-in">
            <span className="eyebrow">Current role</span>
            <div className="mini-list">
              <div className="mini-list__item"><strong>AI Trainer - LLM Evaluation & Model Assessment</strong><span>Handshake AI - April 2026 - Present</span></div>
              <div className="mini-list__item"><strong>M.S. Artificial Intelligence candidate</strong><span>{education.school} - {education.gpa}</span></div>
              <div className="mini-list__item"><strong>Location</strong><span>{education.location}</span></div>
            </div>
          </article>
          <article className="card animate-in" id="profiles">
            <span className="eyebrow">Profile links</span>
            <div className="about-profile-links">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>{link.label} <span aria-hidden="true">-&gt;</span></a>
              ))}
            </div>
          </article>
          <article className="card animate-in">
            <span className="eyebrow">Education</span>
            <p className="card-heading">{education.degree}</p>
            <p className="card-copy">{education.school} - {education.dates} - {education.gpa}</p>
          </article>
        </div>
      </section>

      <section className="section" id="research-interests">
        <div className="container">
          <SectionHeader eyebrow="AI/ML interests" title="Reliable models, explainable systems, and applied research" />
          <div className="interest-grid" style={{ marginTop: "2rem" }}>
            {["LLM evaluation", "Computer vision", "Explainable AI", "Healthcare AI", "GeoAI", "Machine learning deployment"].map((item) => (
              <article className="card card--hover animate-in" key={item}><p className="card-heading">{item}</p><p className="card-copy">A current focus area in my AI/ML portfolio and applied learning.</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeader eyebrow="Experience" title="Current role and previous research" />
          <div className="timeline" style={{ marginTop: "2rem" }}>
            {experiences.map((experience) => <ExperienceCard experience={experience} key={experience.org} />)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import { email, resumePath, socialLinks } from "@/lib/recruiter-content";

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="animate-in" style={{ "--delay": "0ms" } as CSSProperties}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export function StatCard({ label, value, copy, heading }: { label: string; value: string; copy: string; heading?: string }) {
  return (
    <article className="card card--hover animate-in">
      <p className="quick-fact__label">{label}</p>
      <p className="card-heading">{heading ?? value}</p>
      {heading ? <p className="quick-fact__value">{value}</p> : null}
      <p className="card-copy">{copy}</p>
    </article>
  );
}

export function ProjectCard({
  title,
  subtitle,
  description,
  result,
  tags,
  caseStudyHref,
  github,
  demo,
}: {
  title: string;
  subtitle: string;
  description: string;
  result?: string;
  tags: readonly string[];
  caseStudyHref: string;
  github?: string;
  demo?: string;
}) {
  return (
    <article className="card card--hover animate-in">
      <div className="stack">
        <div className="stack" style={{ gap: "0.45rem" }}>
          <p className="card-heading">{title}</p>
          <p className="quick-fact__label">{subtitle}</p>
        </div>
        <p className="card-copy">{description}</p>
        {result ? <p className="quick-fact__value">{result}</p> : null}
        <div className="meta-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="meta-row">
          <Link className="inline-link" href={caseStudyHref}>View Case Study <span aria-hidden="true">-&gt;</span></Link>
          {github ? <a className="inline-link" href={github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">-&gt;</span></a> : null}
          {demo ? <a className="inline-link" href={demo} target="_blank" rel="noopener noreferrer">Live Demo <span aria-hidden="true">-&gt;</span></a> : null}
        </div>
      </div>
    </article>
  );
}

export function ExperienceCard({ experience }: { experience: {
  org: string;
  role: string;
  dates: string;
  location: string;
  badge: string;
  badgeClass: string;
  label?: string;
  bullets: readonly string[];
} }) {
  return (
    <article className="timeline-item animate-in">
      <div className="timeline-marker" />
      <div className="card timeline-content">
        <div className="timeline-meta">
          <div className="stack" style={{ gap: "0.35rem" }}>
            <div className={`logo-badge ${experience.badgeClass}`}>{experience.badge}</div>
            {experience.label ? <span className="meta-pill">{experience.label}</span> : null}
            <h3 className="timeline-role">{experience.role}</h3>
            <p className="timeline-org">{experience.org} - {experience.dates}</p>
          </div>
          <span className="meta-pill">{experience.location}</span>
        </div>
        <ul className="bullet-list">
          {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function SkillGroup({ title, skills }: { title: string; skills: readonly string[] }) {
  return (
    <article className="card skill-category animate-in">
      <div className="skill-category__head">
        <h3 className="skill-category__title">{title}</h3>
      </div>
      <div className="skill-chip-list">
        {skills.map((skill) => (
          <span className="skill-chip skill-theme--navy" key={skill}>
            <span className="skill-chip__icon" aria-hidden="true">*</span>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ContactCTA({ title = "Build something reliable together", children }: { title?: string; children?: ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <article className="card card--glass cta-strip animate-in">
          <div className="stack">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">
              Open to AI/ML internships, research collaborations, fellowships, and December 2026 full-time opportunities.
            </p>
            {children}
          </div>
          <div className="stack">
            <a className="button button--primary" href={`mailto:${email}`}>Email Ravindra</a>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a className="icon-link" href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {link.label}
                </a>
              ))}
              {resumePath ? <a className="icon-link" href={resumePath}>Resume</a> : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

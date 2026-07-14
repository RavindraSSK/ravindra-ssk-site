import Link from "next/link";
import type { CSSProperties } from "react";

import { ContactCTA, ExperienceCard, ProjectCard, SectionHeader, SkillGroup, StatCard } from "@/components/recruiter/sections";
import {
  beyondAi,
  education,
  experiences,
  fullName,
  heroTags,
  latestPublication,
  profileCards,
  projects,
  resumePath,
  skillGroups,
  socialLinks,
  stats,
} from "@/lib/recruiter-content";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="section section--tight home-hero">
        <div className="container hero">
          <div className="hero__lead">
            <div className="animate-in" style={{ "--delay": "0ms" } as CSSProperties}>
              <span className="eyebrow">{fullName}</span>
              <h1 className="hero-title">AI/ML Engineer building reliable systems across LLM evaluation, computer vision, and explainable AI</h1>
            </div>
            <p className="hero-copy animate-in" style={{ "--delay": "80ms" } as CSSProperties}>
              Graduate Artificial Intelligence student at Saint Louis University with experience evaluating large language models and building end-to-end machine learning systems across healthcare AI, computer vision, multimodal AI, and geospatial research.
            </p>
            <div className="hero__actions animate-in" style={{ "--delay": "140ms" } as CSSProperties}>
              <Link className="button button--primary" href="/portfolio#projects">View AI Projects <span aria-hidden="true">-&gt;</span></Link>
              {resumePath ? (
                <a className="button button--secondary" href={resumePath}>Download Resume</a>
              ) : (
                <Link className="button button--secondary" href="/contact">Request Resume</Link>
              )}
            </div>
            <div className="social-links animate-in" aria-label="Compact profile links" style={{ "--delay": "180ms" } as CSSProperties}>
              {socialLinks.map((link) => (
                <a className="icon-link" href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero__visual animate-in" style={{ "--delay": "180ms" } as CSSProperties}>
            <span className="hero-visual__grid" aria-hidden="true" />
            <article className="card card--glass hero-panel">
              <div className="hero-panel__topline">
                <span>Digital profile</span>
                <span className="hero-panel__signal">Open to AI/ML internships, research collaborations, fellowships, and December 2026 full-time opportunities.</span>
              </div>
              <div className="hero-panel__grid">
                {profileCards.map((card) => (
                  <div className="card card--muted" key={card.label}>
                    <p className="hero-panel__label">{card.label}</p>
                    <p className="hero-panel__value">{card.title}</p>
                    <p className="card-copy">{card.copy}</p>
                  </div>
                ))}
              </div>
              <div className="hero-panel__stack">
                {heroTags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight home-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </section>

      <section className="section home-projects-section" id="projects">
        <div className="container">
          <SectionHeader
            eyebrow="Featured AI projects"
            title="Evidence across healthcare AI, object detection, and multimodal recommendation"
            copy="Selected projects are written for recruiters: purpose, stack, measurable outcome where available, and a direct case-study path."
          />
          <div className="project-grid project-grid--three" style={{ marginTop: "2rem" }}>
            {projects.map((project) => <ProjectCard key={project.slug} {...project} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeader eyebrow="Professional experience" title="Current AI evaluation work and previous applied research" />
          <div className="timeline" style={{ marginTop: "2rem" }}>
            {experiences.map((experience) => <ExperienceCard experience={experience} key={experience.org} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeader eyebrow="Technical skills" title="Practical stack for model evaluation, ML systems, and deployment" />
          <div className="detail-grid" style={{ marginTop: "2rem" }}>
            {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <article className="card card--glass animate-in">
            <span className="eyebrow">Latest SSK AI Hub publication</span>
            <h2 className="section-title">{latestPublication.title}</h2>
            <p className="section-copy">{latestPublication.copy}</p>
            <Link className="inline-link" href={latestPublication.href}>Read publication <span aria-hidden="true">-&gt;</span></Link>
          </article>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeader eyebrow="Beyond AI" title="Personal interests that stay part of the site" />
          <div className="card-grid card-grid--three" style={{ marginTop: "2rem" }}>
            {beyondAi.map((item) => (
              <Link className="card card--hover animate-in" href={item.href} key={item.href}>
                <p className="card-heading">{item.title}</p>
                <p className="card-copy">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-snippet">
          <article className="card card--glass animate-in">
            <span className="eyebrow">About Ravindra</span>
            <h2 className="section-title">Graduate AI student building reliable, explainable systems</h2>
            <p className="section-copy">
              My work sits between AI evaluation, applied machine learning, and software delivery: evaluating LLM behavior, building explainable healthcare AI, training object detection models, and translating research into usable systems.
            </p>
            <Link className="inline-link" href="/about">Read about my background <span aria-hidden="true">-&gt;</span></Link>
          </article>
          <article className="card animate-in">
            <div className="stack">
              <div className="quick-fact"><span className="quick-fact__label">Education</span><span className="quick-fact__value">{education.degree}, {education.school}</span></div>
              <div className="quick-fact"><span className="quick-fact__label">Timeline</span><span className="quick-fact__value">{education.dates} - {education.gpa}</span></div>
              <div className="quick-fact"><span className="quick-fact__label">Location</span><span className="quick-fact__value">{education.location}</span></div>
            </div>
          </article>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

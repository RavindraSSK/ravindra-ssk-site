import type { Metadata } from "next";

import { ContactCTA, ExperienceCard, ProjectCard, SectionHeader, SkillGroup } from "@/components/recruiter/sections";
import {
  additionalExperiences,
  awards,
  certifications,
  educationHistory,
  experiences,
  leadership,
  msCoursework,
  projects,
  publications,
  skillGroups,
} from "@/lib/recruiter-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "AI/ML projects, experience, education, and technical skills from Ravindra SSK.",
};

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container portfolio-hero">
          <span className="eyebrow">Portfolio</span>
          <h1 className="page-title">AI/ML projects, experience, and technical proof</h1>
          <p className="page-copy">A recruiter-focused view of verified projects, professional roles, education, and skills.</p>
        </div>
      </section>

      <section className="section section--tight" id="projects">
        <div className="container">
          <SectionHeader eyebrow="Projects" title="Featured AI projects" />
          <div className="project-grid project-grid--three" style={{ marginTop: "2rem" }}>
            {projects.map((project) => <ProjectCard key={project.slug} {...project} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="experience">
        <div className="container">
          <SectionHeader eyebrow="Experience" title="Roles across AI evaluation, GeoAI research, and analytics" />
          <div className="timeline" style={{ marginTop: "2rem" }}>
            {experiences.map((experience) => <ExperienceCard experience={experience} key={experience.org} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="experience-archive">
        <div className="container">
          <SectionHeader
            eyebrow="Experience archive"
            title="Additional internships and research foundations"
            copy="Earlier work is kept here so the main recruiter path stays focused while the broader background remains visible."
          />
          <div className="timeline" style={{ marginTop: "2rem" }}>
            {additionalExperiences.map((experience) => <ExperienceCard experience={experience} key={experience.org} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="education">
        <div className="container">
          <SectionHeader eyebrow="Education" title="Graduate AI education and academic foundation" />
          <div className="detail-grid" style={{ marginTop: "2rem" }}>
            {educationHistory.map((item) => (
              <article className="card card--hover animate-in" key={`${item.level}-${item.school}`}>
                <div className="logo-badge">{item.badge}</div>
                <p className="quick-fact__label">{item.level}</p>
                <h3 className="edu-school">{item.school}</h3>
                <p className="edu-degree">{item.degree}</p>
                <p className="card-copy">{item.dates} - {item.location}</p>
                <p className="quick-fact__value">{item.result}</p>
                <p className="card-copy">{item.notes}</p>
              </article>
            ))}
          </div>
          <article className="card card--glass animate-in" style={{ marginTop: "1.25rem" }}>
            <span className="eyebrow">M.S. AI coursework</span>
            <div className="meta-row" style={{ marginTop: "1rem" }}>
              {msCoursework.map((course) => <span className="tag" key={course}>{course}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tight" id="skills">
        <div className="container">
          <SectionHeader eyebrow="Skills" title="Technical stack" />
          <div className="detail-grid" style={{ marginTop: "2rem" }}>
            {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="certifications">
        <div className="container">
          <SectionHeader eyebrow="Learning" title="Certifications and continuous technical learning" />
          <article className="card animate-in" style={{ marginTop: "2rem" }}>
            <p className="section-copy">Specialized training across cloud AI, deep learning, data science, machine learning, and responsible AI.</p>
            <div className="meta-row" style={{ marginTop: "1rem" }}>
              {certifications.map((certification) => <span className="tag" key={certification}>{certification}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tight" id="publications">
        <div className="container">
          <SectionHeader eyebrow="Publications & recognition" title="Research outputs, awards, and academic recognition" />
          <div className="detail-grid" style={{ marginTop: "2rem" }}>
            <article className="card card--glass animate-in">
              <span className="eyebrow">Publications</span>
              <div className="stack" style={{ marginTop: "1rem" }}>
                {publications.map((publication) => (
                  <div className="quick-fact" key={publication.title}>
                    <span className="quick-fact__label">{publication.meta}</span>
                    <span className="quick-fact__value">{publication.title}</span>
                    <p className="card-copy">{publication.detail}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="card card--glass animate-in">
              <span className="eyebrow">Awards</span>
              <div className="stack" style={{ marginTop: "1rem" }}>
                {awards.map((award) => (
                  <div className="quick-fact" key={award.title}>
                    <span className="quick-fact__value">{award.title}</span>
                    <p className="card-copy">{award.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="leadership">
        <div className="container">
          <SectionHeader eyebrow="Leadership & extracurriculars" title="Team leadership, athletics, and service" />
          <article className="card animate-in" style={{ marginTop: "2rem" }}>
            <ul className="bullet-list">
              {leadership.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

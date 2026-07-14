import Image from "next/image";
import type { Metadata } from "next";

import { email, location, socialLinks } from "@/lib/recruiter-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ravindra SSK for AI/ML internships, research collaborations, fellowships, and December 2026 full-time opportunities.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-copy animate-in">
            <figure className="contact-profile-photo" aria-label="Ravindra SSK profile photo">
              <Image src="/images/profile/ravindra-profile.jpg" alt="Ravindra SSK" width={460} height={460} priority />
            </figure>
            <span className="eyebrow">Contact</span>
            <h1 className="page-title">Get in touch</h1>
            <p className="page-copy">
              Open to AI/ML internships, research collaborations, fellowships, and December 2026 full-time opportunities.
            </p>
            <div className="contact-hero-actions" aria-label="Primary contact actions">
              <a className="button button--primary" href={`mailto:${email}?subject=AI%2FML%20opportunity%20or%20collaboration`}>Email Ravindra</a>
            </div>
            <div className="contact-note">
              <span className="contact-note__label">Based in</span>
              <strong>{location}</strong>
              <span>Available for remote collaboration and selected in-person opportunities.</span>
              <span>Website: <a href="https://ravindrassk.com">ravindrassk.com</a></span>
            </div>
          </div>

          <div className="contact-panel animate-in">
            <div className="contact-panel__intro">
              <span className="eyebrow">Direct paths</span>
              <h2 className="section-title">Choose the right way to connect</h2>
              <p className="section-copy">Each option opens directly. No extra friction.</p>
            </div>
            <div className="contact-action-grid">
              <a className="contact-action contact-action--primary" href={`mailto:${email}?subject=Research%20or%20engineering%20conversation`}>
                <span className="contact-action__mark">Mail</span>
                <span className="contact-action__body"><strong>Email</strong><span>Best for project context, research ideas, internships, and opportunities.</span></span>
              </a>
              <p className="contact-action-group__label">My profiles</p>
              {socialLinks.filter((link) => link.label !== "Email").map((link) => (
                <a className="contact-action contact-action--profile" href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                  <span className="contact-action__mark">{link.label.slice(0, 2)}</span>
                  <span className="contact-action__body"><strong>{link.label}</strong><span>{link.label === "GitHub" ? "Code, technical work, and repositories." : "Professional profile, roles, and collaboration messages."}</span></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

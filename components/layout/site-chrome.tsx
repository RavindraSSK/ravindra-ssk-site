"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";

import { Logo, brandName, brandRole } from "@/components/brand/logo";
import { SiteInteractions } from "@/components/site-interactions";
import { email, resumePath } from "@/lib/recruiter-content";

const portfolioLinks = [
  ["AI Projects", "/portfolio#projects", "MediTrust, Campus-Objects, SnapTune, and applied AI builds."],
  ["MediTrust", "/portfolio/meditrust", "Explainable healthcare AI with Logistic Regression and SHAP."],
  ["Campus-Objects", "/portfolio/campus-objects", "Object detection using LW-DETR and PyTorch."],
  ["SnapTune", "/portfolio/snaptune", "Multimodal music recommendation project."],
  ["Experience", "/portfolio#experience", "AI evaluation, GeoAI research, and analytics roles."],
  ["Education", "/portfolio#education", "Degrees, scholarships, and coursework."],
  ["Skills", "/portfolio#skills", "Tooling across machine learning, software, and data."],
] as const;

const exploreLinks = [
  ["Career Guides", "/explore/blog", "Roles, salaries, hiring paths, and AI career roadmaps."],
  ["Technical Tutorials", "/explore/web-scraping-python", "Practical guides for building with code and data."],
  ["Research Articles", "/explore/spatial-context-geoai", "Notes from GeoAI, computer vision, and applied ML."],
  ["Machine Learning", "/explore/grad-cam-flood-detection", "Model design, explainability, and production systems."],
  ["Photography", "/explore/photography", "Light, geometry, and visual observation."],
  ["Fitness & Health", "/explore/fitness-health", "Discipline, training, and performance habits."],
  ["Music", "/explore/music", "Listening, discovery, and creative energy."],
] as const;

function Dropdown({ id, title, links, open, setOpen }: { id: string; title: string; links: readonly (readonly [string, string, string])[]; open: boolean; setOpen: () => void }) {
  return (
    <li className={`nav-item nav-item--has-menu${open ? " is-open" : ""}`}>
      <div className="nav-link-group">
        <Link className="nav-link" href={`/${id}`}>{title}</Link>
        <button className="nav-expand" type="button" aria-expanded={open} aria-label={`Toggle ${title.toLowerCase()} menu`} onClick={setOpen}><ChevronDown size={16} aria-hidden="true" /></button>
      </div>
      <div className="nav-dropdown">
        <div className="nav-dropdown__panel">
          <p className="nav-dropdown__title">{title}</p>
          <div className="nav-dropdown__grid">
            {links.map(([label, href, copy]) => (
              <Link className="nav-dropdown__item" href={href} key={href}>
                <p className="nav-dropdown__item-title">{label}<ArrowRight size={15} aria-hidden="true" /></p>
                <p className="nav-dropdown__item-copy">{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const resumeHref = resumePath ?? `mailto:${email}?subject=Resume%20request`;

  useEffect(() => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    requestAnimationFrame(() => {
      setDark(isDark);
      setThemeReady(true);
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMobileOpen(false);
      setDropdown(null);
    });
  }, [pathname]);

  useEffect(() => {
    if (!themeReady) {
      return;
    }

    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark, themeReady]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) {
      return;
    }

    const syncHeaderOffset = () => {
      document.documentElement.style.setProperty("--site-header-offset", `${header.offsetHeight}px`);
    };

    syncHeaderOffset();

    const observer = new ResizeObserver(syncHeaderOffset);
    observer.observe(header);
    window.addEventListener("resize", syncHeaderOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderOffset);
    };
  }, [mobileOpen, pathname]);

  return (
    <>
      <motion.header
        className="site-header"
        role="banner"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="site-header__inner">
            <Link className="brand" href="/" aria-label={`${brandName} home`}>
              <span className="brand__mark"><Logo /></span>
              <span className="brand__text"><span className="brand__name">{brandName}</span><span className="brand__role">{brandRole}</span></span>
            </Link>
            <button className="nav-toggle" type="button" aria-expanded={mobileOpen} aria-controls="primary-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
            <nav id="primary-navigation" className={`site-nav${mobileOpen ? " is-open" : ""}`} aria-label="Primary navigation">
              <ul className="nav-list list-reset">
                <li className="nav-item"><Link className={`nav-link${pathname === "/" ? " is-active" : ""}`} href="/">Home</Link></li>
                <li className="nav-item"><Link className={`nav-link${pathname === "/about" ? " is-active" : ""}`} href="/about">About</Link></li>
                <Dropdown id="portfolio" title="Portfolio" links={portfolioLinks} open={dropdown === "portfolio"} setOpen={() => setDropdown(dropdown === "portfolio" ? null : "portfolio")} />
                <Dropdown id="explore" title="Insights" links={exploreLinks} open={dropdown === "explore"} setOpen={() => setDropdown(dropdown === "explore" ? null : "explore")} />
                <li className="nav-item"><a className="nav-link" href={resumeHref}>Resume</a></li>
                <li className="nav-item"><Link className={`nav-link${pathname === "/contact" ? " is-active" : ""}`} href="/contact">Contact</Link></li>
              </ul>
              <div className="nav-utilities">
                <button className="theme-toggle" type="button" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark} data-mode={dark ? "dark" : "light"} onClick={() => setDark((value) => !value)}>{dark ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}</button>
                <Link className="button button--nav" href="/portfolio#projects">AI projects</Link>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>
      {children}
      <motion.footer
        className="site-footer"
        role="contentinfo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container"><div className="site-footer__inner">
          <div className="site-footer__brand">
            <Link className="site-footer__brand-link" href="/" aria-label={`${brandName} home`}>
              <span className="site-footer__mark"><Logo size={40} /></span>
              <span className="brand__name">{brandName}</span>
            </Link>
            <p className="site-footer__copy">{brandRole} | St. Louis, Missouri</p>
            <p className="site-footer__legal">(c) {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          </div>
          <div className="social-links"><a className="icon-link" href="https://ravindrassk.com">Website</a><a className="icon-link" href="mailto:ravindrassk1304@gmail.com">Email</a><a className="icon-link" href="https://github.com/RavindraSSK" target="_blank" rel="noopener noreferrer">GitHub</a><a className="icon-link" href="https://www.linkedin.com/in/ravindra-ssk-medicharla-45ba44123/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="icon-link" href="https://www.researchgate.net/profile/Ravindra-Ssk-Medicharla" target="_blank" rel="noopener noreferrer">ResearchGate</a><a className="icon-link" href="https://www.instagram.com/ravindra_ssk_m_/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </div></div>
      </motion.footer>
      <SiteInteractions pathname={pathname} />
    </>
  );
}

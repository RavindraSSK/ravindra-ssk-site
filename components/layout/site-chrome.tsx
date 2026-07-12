"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";

import { SiteInteractions } from "@/components/site-interactions";

const portfolioLinks = [
  ["Projects", "/portfolio#projects", "Research systems, products, and applied builds."],
  ["Experience", "/portfolio#experience", "Timeline of roles, research, and internships."],
  ["Education", "/portfolio#education", "Degrees, scholarships, and coursework."],
  ["Skills", "/portfolio#skills", "Tooling across machine learning, software, and data."],
  ["Achievements", "/portfolio#achievements", "Awards, publications, and leadership."],
  ["Certifications", "/portfolio#certifications", "Cloud, AI, and professional credentials."],
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

function Logo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" width="32" height="32" aria-hidden="true">
      <defs>
        <linearGradient id="rssk-logo-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#111C3D" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#rssk-logo-bg)" />
      <path d="M10.5 24V9h7a4.5 4.5 0 0 1 0 9h-7" stroke="#FFFFFF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 18l6 6" stroke="#93B4F5" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="10.5" cy="9" r="1.7" fill="#93B4F5" stroke="#152A66" strokeWidth="0.9" />
      <circle cx="22" cy="13.5" r="1.7" fill="#93B4F5" stroke="#152A66" strokeWidth="0.9" />
      <circle cx="10.5" cy="24" r="1.7" fill="#FFFFFF" stroke="#152A66" strokeWidth="0.9" />
      <circle cx="21.5" cy="24" r="2.3" fill="#93B4F5" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

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
            <Link className="brand" href="/" aria-label="Ravindra home">
              <span className="brand__mark"><Logo /></span>
              <span className="brand__text"><span className="brand__name">Ravindra</span><span className="brand__role">Researcher | Engineer | Creator</span></span>
            </Link>
            <button className="nav-toggle" type="button" aria-expanded={mobileOpen} aria-controls="primary-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
            <nav id="primary-navigation" className={`site-nav${mobileOpen ? " is-open" : ""}`} aria-label="Primary navigation">
              <ul className="nav-list list-reset">
                <li className="nav-item"><Link className={`nav-link${pathname === "/" ? " is-active" : ""}`} href="/">Home</Link></li>
                <Dropdown id="portfolio" title="Portfolio" links={portfolioLinks} open={dropdown === "portfolio"} setOpen={() => setDropdown(dropdown === "portfolio" ? null : "portfolio")} />
                <Dropdown id="explore" title="Insights" links={exploreLinks} open={dropdown === "explore"} setOpen={() => setDropdown(dropdown === "explore" ? null : "explore")} />
                <li className="nav-item"><Link className={`nav-link${pathname === "/about" ? " is-active" : ""}`} href="/about">About</Link></li>
                <li className="nav-item"><Link className={`nav-link${pathname === "/contact" ? " is-active" : ""}`} href="/contact">Contact</Link></li>
              </ul>
              <div className="nav-utilities">
                <button className="theme-toggle" type="button" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark} data-mode={dark ? "dark" : "light"} onClick={() => setDark((value) => !value)}>{dark ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}</button>
                <Link className="button button--nav" href="/contact">Say hello</Link>
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
          <div className="stack"><p className="brand__name">Ravindra</p><p className="site-footer__copy">Researcher | Engineer | Creator | St. Louis, MO</p></div>
          <div className="social-links"><a className="icon-link" href="https://ravindrassk.com">Website</a><a className="icon-link" href="mailto:ravindrassk1304@gmail.com">Email</a><a className="icon-link" href="https://github.com/RavindraSSK" target="_blank" rel="noopener noreferrer">GitHub</a><a className="icon-link" href="https://www.linkedin.com/in/ravindra-ssk-medicharla-45ba44123/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="icon-link" href="https://www.researchgate.net/profile/Ravindra-Ssk-Medicharla" target="_blank" rel="noopener noreferrer">ResearchGate</a><a className="icon-link" href="https://www.instagram.com/ravindra_ssk_m_/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </div></div>
      </motion.footer>
      <SiteInteractions pathname={pathname} />
    </>
  );
}

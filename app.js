const BRAND_NAME = "Ravindra SSK";
const BRAND_ROLE = "Engineer · Researcher · Creator";

const SVG = {
  chevron: `
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
  arrow: `
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M6 14L14 6M8 6H14V12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
  menu: `
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M4 6H16M4 10H16M4 14H16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
    </svg>
  `,
  close: `
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
    </svg>
  `,
  sun: `
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" stroke-width="1.6"></circle>
      <path d="M10 2.5V4.5M10 15.5V17.5M17.5 10H15.5M4.5 10H2.5M15.3 4.7L13.9 6.1M6.1 13.9L4.7 15.3M15.3 15.3L13.9 13.9M6.1 6.1L4.7 4.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
    </svg>
  `,
  moon: `
    <svg viewBox="0 0 20 20" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M12.6 2.8C10.2 3.2 8 5.6 8 8.7C8 12.1 10.6 15 13.9 15.4C13.1 15.9 12.1 16.2 11 16.2C7.6 16.2 4.8 13.4 4.8 10C4.8 6.7 7.2 4 10.4 3.6C11.2 3.5 11.9 3.6 12.6 3.8V2.8Z" fill="currentColor"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M9 19.5C5.5 20.5 5.5 17.5 4 17M14 21V18.2C14 17.4 14.1 16.8 13.8 16.3C15.8 16.1 18 15.3 18 11.5C18 10.4 17.6 9.4 16.9 8.7C17.2 7.9 17.2 6.9 16.9 6C16.9 6 16.1 5.7 14 7.1C12.5 6.7 10.9 6.7 9.4 7.1C7.3 5.7 6.5 6 6.5 6C6.2 6.9 6.2 7.9 6.5 8.7C5.8 9.4 5.4 10.4 5.4 11.5C5.4 15.3 7.6 16.1 9.6 16.3C9.3 16.8 9.2 17.5 9.2 18.2V21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M7 9H4V20H7V9ZM5.5 4.5C4.5 4.5 3.8 5.2 3.8 6.1C3.8 7 4.5 7.7 5.5 7.7C6.4 7.7 7.2 7 7.2 6.1C7.2 5.2 6.4 4.5 5.5 4.5ZM20 13.2C20 10.3 18.4 8.8 16.3 8.8C14.8 8.8 13.9 9.6 13.5 10.2V9H10.6C10.6 9.8 10.6 20 10.6 20H13.5V14C13.5 12.4 14 11.5 15.3 11.5C16.5 11.5 16.9 12.4 16.9 14V20H20V13.2Z" fill="currentColor"></path>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
      <path d="M4 6.5H20V17.5H4V6.5ZM4.8 7.2L12 13L19.2 7.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
};

const NAV_DATA = {
  portfolio: [
    { title: "Projects", href: "portfolio.html#projects", copy: "Research systems, products, and applied builds." },
    { title: "Experience", href: "portfolio.html#experience", copy: "Timeline of roles, research, and internships." },
    { title: "Education", href: "portfolio.html#education", copy: "Degrees, scholarships, and coursework." },
    { title: "Skills", href: "portfolio.html#skills", copy: "Tooling across machine learning, software, and data." },
    { title: "Achievements", href: "portfolio.html#achievements", copy: "Awards, publications, and leadership." },
    { title: "Certifications", href: "portfolio.html#certifications", copy: "Cloud, AI, and professional credentials." },
  ],
  explore: [
    { title: "Career Guides", href: "explore/blog.html", copy: "Roles, salaries, hiring paths, and AI career roadmaps." },
    { title: "Technical Tutorials", href: "explore/web-scraping-python.html", copy: "Practical guides for building with code and data." },
    { title: "Research Articles", href: "explore/spatial-context-geoai.html", copy: "Notes from generative AI, computer vision, and applied ML." },
    { title: "Machine Learning", href: "explore/grad-cam-flood-detection.html", copy: "Model design, explainability, and production systems." },
    { title: "Photography", href: "explore/photography.html", copy: "Light, geometry, and visual observation." },
    { title: "Fitness & Health", href: "explore/fitness-health.html", copy: "Discipline, training, and performance habits." },
    { title: "Music", href: "explore/music.html", copy: "Listening, discovery, and creative energy." },
  ],
};

function getRootPath() {
  return document.body.dataset.root || ".";
}

function toPath(target) {
  const root = getRootPath();
  if (root === "." || root === "./") {
    return target;
  }

  return `${root}/${target}`.replace(/\/{2,}/g, "/");
}

function brandMarkHtml() {
  // Prefer site-root absolute path so Next and static hosting resolve the public asset.
  return `<span class="brand__logo"><img class="brand__logo-img brand__logo-img--light" src="/branding/logo-light.png" alt="" height="52" decoding="async" /><img class="brand__logo-img brand__logo-img--dark" src="/branding/logo-dark.png" alt="" height="52" decoding="async" /></span>`;
}

function footerBrandMarkHtml() {
  return `<span class="brand__logo"><img class="brand__logo-img brand__logo-img--light" src="/branding/logo-light.png" alt="" height="40" decoding="async" /><img class="brand__logo-img brand__logo-img--dark" src="/branding/logo-dark.png" alt="" height="40" decoding="async" /></span>`;
}

function currentPage() {
  return document.body.dataset.page || "";
}

function renderChrome() {
  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");
  const page = currentPage();

  if (headerMount) {
    headerMount.innerHTML = `
      <header class="site-header" role="banner">
        <div class="container">
          <div class="site-header__inner">
            <a class="brand" href="${toPath("index.html")}" aria-label="${BRAND_NAME} home">
              <span class="brand__mark">${brandMarkHtml()}</span>
              <span class="brand__text">
                <span class="brand__name">${BRAND_NAME}</span>
                <span class="brand__role">${BRAND_ROLE}</span>
              </span>
            </a>

            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
              ${SVG.menu}
            </button>

            <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
              <ul class="nav-list list-reset">
                <li class="nav-item">
                  <a class="nav-link ${page === "home" ? "is-active" : ""}" href="${toPath("index.html")}">Home</a>
                </li>
                <li class="nav-item nav-item--has-menu" data-dropdown="portfolio">
                  <div class="nav-link-group">
                    <a class="nav-link ${page === "portfolio" ? "is-active" : ""}" href="${toPath("portfolio.html")}">Portfolio</a>
                    <button class="nav-expand" type="button" aria-expanded="false" aria-controls="dropdown-portfolio" aria-label="Toggle portfolio menu">
                      ${SVG.chevron}
                    </button>
                  </div>
                  <div class="nav-dropdown" id="dropdown-portfolio">
                    <div class="nav-dropdown__panel">
                      <p class="nav-dropdown__title">Portfolio</p>
                      <div class="nav-dropdown__grid">
                        ${NAV_DATA.portfolio.map((item) => `
                          <a class="nav-dropdown__item" href="${toPath(item.href)}">
                            <p class="nav-dropdown__item-title">${item.title}<span>${SVG.arrow}</span></p>
                            <p class="nav-dropdown__item-copy">${item.copy}</p>
                          </a>
                        `).join("")}
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-item--has-menu" data-dropdown="explore">
                  <div class="nav-link-group">
                    <a class="nav-link ${page === "explore" ? "is-active" : ""}" href="${toPath("explore.html")}">Insights</a>
                    <button class="nav-expand" type="button" aria-expanded="false" aria-controls="dropdown-explore" aria-label="Toggle insights menu">
                      ${SVG.chevron}
                    </button>
                  </div>
                  <div class="nav-dropdown" id="dropdown-explore">
                    <div class="nav-dropdown__panel">
                      <p class="nav-dropdown__title">Insights</p>
                      <div class="nav-dropdown__grid">
                        ${NAV_DATA.explore.map((item) => `
                          <a class="nav-dropdown__item" href="${toPath(item.href)}">
                            <p class="nav-dropdown__item-title">${item.title}<span>${SVG.arrow}</span></p>
                            <p class="nav-dropdown__item-copy">${item.copy}</p>
                          </a>
                        `).join("")}
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link ${page === "about" ? "is-active" : ""}" href="${toPath("about.html")}">About</a>
                </li>
              </ul>

              <div class="nav-utilities">
                <button class="theme-toggle" type="button" aria-label="Toggle dark mode">
                  <span class="theme-toggle__icon theme-toggle__icon--sun">${SVG.sun}</span>
                  <span class="theme-toggle__icon theme-toggle__icon--moon">${SVG.moon}</span>
                </button>
                <a class="button button--nav ${page === "contact" ? "button--secondary" : ""}" href="${toPath("contact.html")}">Say hello</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    `;
  }

  if (footerMount) {
    const year = new Date().getFullYear();
    footerMount.innerHTML = `
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="site-footer__inner">
            <div class="site-footer__brand">
              <a class="site-footer__brand-link" href="${toPath("index.html")}" aria-label="${BRAND_NAME} home">
                <span class="site-footer__mark">${footerBrandMarkHtml()}</span>
                <span class="brand__name">${BRAND_NAME}</span>
              </a>
              <p class="site-footer__copy">${BRAND_ROLE} | St. Louis, MO</p>
              <p class="site-footer__legal">© ${year} ${BRAND_NAME}. All rights reserved.</p>
            </div>
            <div class="social-links">
              <a class="icon-link" href="https://ravindrassk.com">Website</a>
              <a class="icon-link" href="mailto:ravindrassk1304@gmail.com">${SVG.mail}<span>Email</span></a>
              <a class="icon-link" href="https://github.com/RavindraSSK" target="_blank" rel="noopener noreferrer">${SVG.github}<span>GitHub</span></a>
              <a class="icon-link" href="https://www.linkedin.com/in/ravindra-ssk-medicharla-45ba44123/" target="_blank" rel="noopener noreferrer">${SVG.linkedin}<span>LinkedIn</span></a>
              <a class="icon-link" href="https://www.researchgate.net/profile/Ravindra-Ssk-Medicharla" target="_blank" rel="noopener noreferrer"><span>ResearchGate</span></a>
              <a class="icon-link" href="https://www.instagram.com/ravindra_ssk_m_/" target="_blank" rel="noopener noreferrer"><span>Instagram</span></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

function initThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  const html = document.documentElement;
  const applyState = () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.dataset.mode = isDark ? "dark" : "light";
  };

  applyState();

  toggle.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    if (isDark) {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", "dark");
    }
    applyState();
  });
}

function initNavigation() {
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  const dropdowns = document.querySelectorAll(".nav-item--has-menu");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");
  const closeTimers = new WeakMap();

  if (!nav || !navToggle || !header) return;

  const closeMobileNav = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navToggle.innerHTML = SVG.menu;
  };

  const openMobileNav = () => {
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation");
    navToggle.innerHTML = SVG.close;
  };

  navToggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!header.contains(target)) {
      closeMobileNav();
      dropdowns.forEach((item) => {
        item.classList.remove("is-open");
        const button = item.querySelector(".nav-expand");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    }
  });

  dropdowns.forEach((item) => {
    const button = item.querySelector(".nav-expand");

    const clearTimer = () => {
      const timer = closeTimers.get(item);
      if (timer) clearTimeout(timer);
    };

    const openDropdown = () => {
      clearTimer();
      dropdowns.forEach((other) => {
        if (other !== item && desktopQuery.matches) {
          other.classList.remove("is-open");
          const otherButton = other.querySelector(".nav-expand");
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.add("is-open");
      if (button) button.setAttribute("aria-expanded", "true");
    };

    const closeDropdown = () => {
      item.classList.remove("is-open");
      if (button) button.setAttribute("aria-expanded", "false");
    };

    const scheduleClose = () => {
      clearTimer();
      closeTimers.set(item, setTimeout(closeDropdown, 120));
    };

    item.addEventListener("mouseenter", () => {
      if (!desktopQuery.matches) return;
      openDropdown();
    });

    item.addEventListener("mouseleave", () => {
      if (!desktopQuery.matches) return;
      scheduleClose();
    });

    item.addEventListener("focusin", () => {
      if (!desktopQuery.matches) return;
      openDropdown();
    });

    item.addEventListener("focusout", (event) => {
      if (!desktopQuery.matches) return;
      const related = event.relatedTarget;
      if (related instanceof Node && item.contains(related)) return;
      scheduleClose();
    });

    if (button) {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (desktopQuery.matches) return;
        const isOpen = item.classList.contains("is-open");
        dropdowns.forEach((other) => {
          if (other !== item) {
            other.classList.remove("is-open");
            const otherButton = other.querySelector(".nav-expand");
            if (otherButton) otherButton.setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });
    }
  });

  window.addEventListener("resize", () => {
    if (desktopQuery.matches) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.innerHTML = SVG.menu;
    } else {
      dropdowns.forEach((item) => {
        item.classList.remove("is-open");
        const button = item.querySelector(".nav-expand");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    }
  });
}

function activateTab(id) {
  const buttons = document.querySelectorAll("[data-tab-target]");
  const panels = document.querySelectorAll("[data-tab-panel]");
  let targetFound = false;

  buttons.forEach((button) => {
    const matches = button.getAttribute("data-tab-target") === id;
    button.classList.toggle("is-active", matches);
    button.setAttribute("aria-selected", String(matches));
    button.setAttribute("tabindex", matches ? "0" : "-1");
    if (matches) targetFound = true;
  });

  panels.forEach((panel) => {
    const matches = panel.id === id;
    panel.hidden = !matches;
    panel.setAttribute("aria-hidden", String(!matches));
  });

  if (!targetFound && buttons.length) {
    activateTab("projects");
  }
}

function initPortfolioTabs() {
  const tabRoot = document.querySelector("[data-portfolio-tabs]");
  if (!tabRoot) return;

  const buttons = Array.from(tabRoot.querySelectorAll("[data-tab-target]"));
  const initial = window.location.hash.replace("#", "") || "projects";
  activateTab(initial);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab-target");
      if (!target) return;
      if (window.location.hash === `#${target}`) {
        activateTab(target);
      } else {
        window.location.hash = target;
      }
    });

    button.addEventListener("keydown", (event) => {
      const currentIndex = buttons.indexOf(button);
      if (currentIndex < 0) return;

      let nextIndex = currentIndex;

      if (event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % buttons.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = buttons.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      buttons[nextIndex].focus();
      buttons[nextIndex].click();
    });
  });

  window.addEventListener("hashchange", () => {
    activateTab(window.location.hash.replace("#", "") || "projects");
  });
}

function buildCertPlaceholder(title, issuer) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
      <rect width="1200" height="760" rx="36" fill="#F8FAFC"/>
      <rect x="36" y="36" width="1128" height="688" rx="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <rect x="72" y="72" width="180" height="180" rx="28" fill="#1B2D5F"/>
      <path d="M120 198V126h54c22 0 40 18 40 40s-18 40-40 40h-27" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="214" cy="214" r="10" fill="#93B4F5"/>
      <text x="72" y="330" fill="#1B2D5F" font-family="Arial, sans-serif" font-size="54" font-weight="700">${title}</text>
      <text x="72" y="390" fill="#64748B" font-family="Arial, sans-serif" font-size="28">${issuer}</text>
      <rect x="72" y="458" width="1056" height="190" rx="24" fill="#EEF2FF"/>
      <text x="104" y="540" fill="#1B2D5F" font-family="Arial, sans-serif" font-size="34" font-weight="700">Certificate placeholder</text>
      <text x="104" y="596" fill="#64748B" font-family="Arial, sans-serif" font-size="26">Replace this image later by setting data-cert-url on the certification card.</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function initCertFilters() {
  const filters = Array.from(document.querySelectorAll("[data-cert-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-cert-card]"));
  if (!filters.length || !cards.length) return;

  const categoryFor = (title) => {
    if (/AWS|Azure/i.test(title)) return "cloud";
    if (/RAG Agents|CUDA Python/i.test(title)) return "ai-ml";
    if (/Remote Sensing|Fundamentals of GIS|BIM Applications|TU Delft/i.test(title)) return "gis";
    if (/Strength of Materials|Construction Management|BIM Foundations/i.test(title)) return "other";
    return "data-software";
  };

  cards.forEach((card) => {
    card.dataset.certCategory = categoryFor(card.dataset.certTitle || "");
    const badge = card.querySelector(".status-badge");
    if (!badge) return;
    if (badge.textContent.trim() === "Active") badge.textContent = "Completed";
    if (badge.textContent.trim() === "Scheduled") badge.textContent = "Planned";
    badge.classList.toggle("status-badge--completed", badge.textContent.trim() === "Completed");
    badge.classList.toggle("status-badge--planned", badge.textContent.trim() === "Planned");
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.certFilter || "all";
      filters.forEach((item) => {
        const active = item === filter;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      cards.forEach((card) => {
        card.hidden = category !== "all" && card.dataset.certCategory !== category;
      });
    });
  });
}

function initCertModal() {
  const modal = document.querySelector("[data-cert-modal]");
  if (!modal) return;

  const cards = document.querySelectorAll("[data-cert-card]");
  const image = modal.querySelector("[data-cert-image]");
  const title = modal.querySelector("[data-cert-title]");
  const closeButton = modal.querySelector("[data-cert-close]");

  if (!image || !title || !closeButton) return;

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openModal = (card) => {
    const certTitle = card.getAttribute("data-cert-title") || "Certificate";
    const certIssuer = card.getAttribute("data-cert-issuer") || "Issuer";
    const certUrl =
      card.getAttribute("data-cert-url") || buildCertPlaceholder(certTitle, certIssuer);

    image.setAttribute("src", certUrl);
    image.setAttribute("alt", `${certTitle} certificate`);
    title.textContent = certTitle;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => openModal(card));
  });

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (target === modal || target.closest("[data-cert-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}


function initArticleReadingChrome() {
  const articleBody = document.querySelector(".blog-article--reading");
  if (!articleBody) return;

  let progressEl = document.querySelector("[data-reading-progress]");
  if (!progressEl) {
    progressEl = document.createElement("div");
    progressEl.className = "reading-progress";
    progressEl.setAttribute("data-reading-progress", "");
    progressEl.setAttribute("aria-hidden", "true");
    progressEl.innerHTML = '<span class="reading-progress__bar" data-reading-progress-bar></span>';
    document.body.prepend(progressEl);
  }

  const progressBar = document.querySelector("[data-reading-progress-bar]");
  const onScrollProgress = () => {
    if (!progressBar) return;
    const rect = articleBody.getBoundingClientRect();
    const total = articleBody.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  };
  onScrollProgress();
  window.addEventListener("scroll", onScrollProgress, { passive: true });
  window.addEventListener("resize", onScrollProgress);

  const tocRoot = document.querySelector("[data-article-toc]");
  const tocList = tocRoot && tocRoot.querySelector("[data-article-toc-list]");
  const tocToggle = tocRoot && tocRoot.querySelector("[data-article-toc-toggle]");
  const tocCount = tocRoot && tocRoot.querySelector("[data-article-toc-count]");
  const tocFab = document.querySelector("[data-article-toc-fab]");
  const headings = Array.from(document.querySelectorAll(".blog-article--reading .blog-article__body h2"));
  const isDesktopToc = () => window.matchMedia("(min-width: 1100px)").matches;
  const setTocOpen = (open) => {
    if (!tocRoot || !tocToggle) return;
    tocRoot.classList.toggle("is-open", open);
    tocToggle.setAttribute("aria-expanded", String(open));
  };

  if (!tocRoot || !tocList || headings.length < 3) {
    if (tocRoot) tocRoot.hidden = true;
    if (tocFab) tocFab.hidden = true;
    return;
  }

  tocList.innerHTML = "";
  const tocLinks = [];
  headings.forEach((heading, index) => {
    if (!heading.id) {
      const slug = (heading.textContent || `section-${index + 1}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      heading.id = slug;
    }
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${heading.id}`;
    a.textContent = (heading.textContent || `Section ${index + 1}`).trim();
    li.appendChild(a);
    tocList.appendChild(li);
    tocLinks.push(a);
  });
  if (tocCount) tocCount.textContent = `${headings.length} sections`;
  tocRoot.hidden = false;
  const layout = document.querySelector(".article-layout");
  if (layout) layout.classList.add("article-layout--with-toc");
  setTocOpen(isDesktopToc());

  if (tocToggle) {
    tocToggle.addEventListener("click", () => setTocOpen(!tocRoot.classList.contains("is-open")));
  }
  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!isDesktopToc()) setTocOpen(false);
    });
  });
  if (tocFab) {
    tocFab.addEventListener("click", () => {
      setTocOpen(true);
      tocRoot.scrollIntoView({ behavior: "smooth", block: "start" });
      if (tocToggle) tocToggle.focus();
    });
  }

  const onTocScrollUi = () => {
    if (!tocFab || tocRoot.hidden) return;
    if (isDesktopToc()) {
      tocFab.hidden = true;
      setTocOpen(true);
      return;
    }
    const rect = tocRoot.getBoundingClientRect();
    tocFab.hidden = !(rect.bottom < 72);
  };
  onTocScrollUi();
  window.addEventListener("scroll", onTocScrollUi, { passive: true });
  window.addEventListener("resize", onTocScrollUi);

  const tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
      if (!visible.length) return;
      const id = visible[0].target.id;
      tocLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`));
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
  );
  headings.forEach((heading) => tocObserver.observe(heading));
}

function initScrollAnimations() {
  const animated = document.querySelectorAll(".animate-in");
  if (!animated.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      // 0 so tall articles taller than the viewport still reveal
      threshold: 0,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  animated.forEach((item) => observer.observe(item));

  requestAnimationFrame(() => {
    animated.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("is-visible");
        observer.unobserve(item);
      }
    });
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!(form instanceof HTMLFormElement)) return;

  const status = form.querySelector("[data-form-status]");
  if (!(status instanceof HTMLElement)) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const subject = String(formData.get("subject") || "").trim();

    status.hidden = false;
    status.textContent = `Thanks${name ? `, ${name}` : ""}. Your ${subject.toLowerCase()} message has been captured in this static demo and is ready to be wired to a delivery backend.`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initThemeToggle();
  initNavigation();
  initPortfolioTabs();
  initCertFilters();
  initCertModal();
  initScrollAnimations();
  initArticleReadingChrome();
  initContactForm();
});
(function () {
  const el = document.querySelector("[data-role-rotator]");
  if (!el) return;

  const roles = [
    "ML & AI Engineer",
    "Applied AI Engineer",
    "Computer Vision Engineer",
    "Generative AI Engineer",
    "LLM Evaluation Specialist",
    "Forward Deployed AI Engineer",
    "AI Research Engineer",
  ];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const TYPE_MS = 72;
  const DELETE_MS = 38;
  const HOLD_MS = 1700;

  let i = 0;
  let chars = roles[0].length;
  let deleting = false;

  function tick() {
    const word = roles[i];

    if (!deleting) {
      chars += 1;
      el.textContent = word.slice(0, chars);
      if (chars === word.length) {
        deleting = true;
        setTimeout(tick, HOLD_MS);
        return;
      }
      setTimeout(tick, TYPE_MS);
    } else {
      chars -= 1;
      el.textContent = word.slice(0, chars);
      if (chars === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
      }
      setTimeout(tick, DELETE_MS);
    }
  }

  setTimeout(tick, HOLD_MS);
})();

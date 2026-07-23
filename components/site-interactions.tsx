"use client";

import { useEffect, useState } from "react";

export function SiteInteractions({ pathname }: { pathname: string }) {
  const [certificate, setCertificate] = useState<{ title: string; issuer: string } | null>(null);

  useEffect(() => {
    const animated = Array.from(document.querySelectorAll<HTMLElement>(".animate-in"));
    // threshold: 0 so tall articles (taller than the viewport) still become visible —
    // a 0.12 ratio can never be reached when the element is >> viewport height.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    animated.forEach((item) => observer.observe(item));
    // Reveal anything already in view on first paint (covers hydration / tall cards).
    requestAnimationFrame(() => {
      animated.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) item.classList.add("is-visible");
      });
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hero role rotator
    const roleEl = document.querySelector<HTMLElement>("[data-role-rotator]");
    const roles = [
      "ML & AI Engineer",
      "Applied AI Engineer",
      "Computer Vision Engineer",
      "Generative AI Engineer",
      "LLM Evaluation Specialist",
      "Forward Deployed AI Engineer",
      "AI Research Engineer",
    ];
    let roleIndex = 0;
    let roleTimer: number | undefined;
    if (roleEl && !prefersReducedMotion) {
      roleTimer = window.setInterval(() => {
        roleEl.classList.add("is-leaving");
        window.setTimeout(() => {
          roleIndex = (roleIndex + 1) % roles.length;
          roleEl.textContent = roles[roleIndex];
          roleEl.classList.remove("is-leaving");
          roleEl.classList.add("is-entering");
          requestAnimationFrame(() => roleEl.classList.remove("is-entering"));
        }, 280);
      }, 2800);
    }

    // Stats count-up
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-up]"));
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          countObserver.unobserve(el);
          const target = Number(el.dataset.countValue ?? "0");
          const decimals = Number(el.dataset.countDecimals ?? "0");
          const suffix = el.dataset.countSuffix ?? "";
          if (prefersReducedMotion || !Number.isFinite(target)) {
            el.textContent = `${decimals > 0 ? target.toFixed(decimals) : String(target)}${suffix}`;
            return;
          }
          const duration = 900;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const value = target * eased;
            el.textContent = `${decimals > 0 ? value.toFixed(decimals) : String(Math.round(value))}${suffix}`;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );
    counters.forEach((el) => countObserver.observe(el));

    // Reading progress bar
    let progressEl = document.querySelector<HTMLElement>("[data-reading-progress]");
    if (!progressEl && document.querySelector(".blog-article--reading")) {
      progressEl = document.createElement("div");
      progressEl.className = "reading-progress";
      progressEl.setAttribute("data-reading-progress", "");
      progressEl.setAttribute("aria-hidden", "true");
      progressEl.innerHTML = '<span class="reading-progress__bar" data-reading-progress-bar></span>';
      document.body.prepend(progressEl);
    }
    const progressBar = document.querySelector<HTMLElement>("[data-reading-progress-bar]");
    const articleBody = document.querySelector<HTMLElement>(".blog-article--reading");
    const onScrollProgress = () => {
      if (!progressBar || !articleBody) return;
      const rect = articleBody.getBoundingClientRect();
      const total = articleBody.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      progressBar.style.width = `${pct}%`;
    };
    if (progressBar && articleBody) {
      onScrollProgress();
      window.addEventListener("scroll", onScrollProgress, { passive: true });
      window.addEventListener("resize", onScrollProgress);
    }

    // Sticky / mobile TOC from article h2s
    const tocRoot = document.querySelector<HTMLElement>("[data-article-toc]");
    const tocList = tocRoot?.querySelector<HTMLElement>("[data-article-toc-list]");
    const tocToggle = tocRoot?.querySelector<HTMLButtonElement>("[data-article-toc-toggle]");
    const tocCount = tocRoot?.querySelector<HTMLElement>("[data-article-toc-count]");
    const tocFab = document.querySelector<HTMLButtonElement>("[data-article-toc-fab]");
    const headings = Array.from(document.querySelectorAll<HTMLElement>(".blog-article--reading .blog-article__body h2"));
    const tocLinks: HTMLAnchorElement[] = [];
    const isDesktopToc = () => window.matchMedia("(min-width: 1100px)").matches;
    const setTocOpen = (open: boolean) => {
      if (!tocRoot || !tocToggle) return;
      tocRoot.classList.toggle("is-open", open);
      tocToggle.setAttribute("aria-expanded", String(open));
    };
    if (tocRoot && tocList && headings.length >= 3) {
      tocList.innerHTML = "";
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const slug = heading.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || `section-${index + 1}`;
          heading.id = slug;
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent?.trim() || `Section ${index + 1}`;
        li.appendChild(a);
        tocList.appendChild(li);
        tocLinks.push(a);
      });
      if (tocCount) tocCount.textContent = `${headings.length} sections`;
      tocRoot.hidden = false;
      document.querySelector(".article-layout")?.classList.add("article-layout--with-toc");
      setTocOpen(isDesktopToc());
    } else if (tocRoot) {
      tocRoot.hidden = true;
      if (tocFab) tocFab.hidden = true;
    }

    const onTocToggle = () => setTocOpen(!tocRoot?.classList.contains("is-open"));
    tocToggle?.addEventListener("click", onTocToggle);

    const onTocLinkClick = () => {
      if (!isDesktopToc()) setTocOpen(false);
    };
    tocLinks.forEach((link) => link.addEventListener("click", onTocLinkClick));

    const onTocFab = () => {
      if (!tocRoot) return;
      setTocOpen(true);
      tocRoot.scrollIntoView({ behavior: "smooth", block: "start" });
      tocToggle?.focus();
    };
    tocFab?.addEventListener("click", onTocFab);

    const onTocScrollUi = () => {
      if (!tocRoot || !tocFab || tocRoot.hidden) return;
      if (isDesktopToc()) {
        tocFab.hidden = true;
        setTocOpen(true);
        return;
      }
      const rect = tocRoot.getBoundingClientRect();
      const pastToc = rect.bottom < 72;
      tocFab.hidden = !pastToc;
    };
    onTocScrollUi();
    window.addEventListener("scroll", onTocScrollUi, { passive: true });
    window.addEventListener("resize", onTocScrollUi);

    const tocObserver =
      tocLinks.length > 0
        ? new IntersectionObserver(
            (entries) => {
              const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
              if (!visible.length) return;
              const id = (visible[0].target as HTMLElement).id;
              tocLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`));
            },
            { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
          )
        : null;
    headings.forEach((heading) => tocObserver?.observe(heading));

    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-tab-target]"));
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-tab-panel]"));
    const tabRoot = document.querySelector<HTMLElement>("[data-portfolio-tabs]");
    let selectedTab: HTMLButtonElement | null = null;
    const moveTabIndicator = (tab: HTMLButtonElement | null) => {
      if (!tabRoot || !tab) return;
      tabs.forEach((item) => item.classList.toggle("is-preview", item === tab));
      tabRoot.style.setProperty("--tab-indicator-left", `${tab.offsetLeft}px`);
      tabRoot.style.setProperty("--tab-indicator-top", `${tab.offsetTop}px`);
      tabRoot.style.setProperty("--tab-indicator-width", `${tab.offsetWidth}px`);
      tabRoot.style.setProperty("--tab-indicator-height", `${tab.offsetHeight}px`);
      tabRoot.dataset.indicatorReady = "true";
    };
    const selectTab = (id: string) => {
      tabs.forEach((tab) => { const active = tab.dataset.tabTarget === id; tab.classList.toggle("is-active", active); tab.setAttribute("aria-selected", String(active)); tab.tabIndex = active ? 0 : -1; if (active) selectedTab = tab; });
      panels.forEach((panel) => { panel.hidden = panel.id !== id; });
      window.requestAnimationFrame(() => moveTabIndicator(selectedTab));
    };
    const hash = window.location.hash.slice(1);
    if (tabs.length) selectTab(tabs.some((tab) => tab.dataset.tabTarget === hash) ? hash : "projects");
    const tabHandlers = tabs.map((tab) => {
      const clickHandler = () => { const id = tab.dataset.tabTarget; if (id) { selectTab(id); history.replaceState(null, "", `#${id}`); } };
      const previewHandler = () => moveTabIndicator(tab);
      tab.addEventListener("click", clickHandler);
      tab.addEventListener("pointerenter", previewHandler);
      tab.addEventListener("focus", previewHandler);
      return [tab, clickHandler, previewHandler] as const;
    });
    const leaveTabsHandler = () => moveTabIndicator(selectedTab);
    const resizeTabsHandler = () => moveTabIndicator(selectedTab);
    tabRoot?.addEventListener("pointerleave", leaveTabsHandler);
    window.addEventListener("resize", resizeTabsHandler);

    const certs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-cert-card]"));
    const categoryFor = (title: string) => {
      if (/AWS|Azure/i.test(title)) return "cloud";
      if (/RAG Agents|CUDA Python|Anthropic|Claude/i.test(title)) return "ai-ml";
      if (/Remote Sensing|Fundamentals of GIS|BIM Applications|TU Delft/i.test(title)) return "gis";
      if (/Strength of Materials|Construction Management|BIM Foundations/i.test(title)) return "other";
      return "data-software";
    };
    certs.forEach((card) => {
      card.dataset.certCategory = categoryFor(card.dataset.certTitle || "");
      const badge = card.querySelector<HTMLElement>(".status-badge");
      if (badge?.textContent?.trim() === "Active") badge.textContent = "Completed";
      if (badge?.textContent?.trim() === "Scheduled") badge.textContent = "Planned";
      badge?.classList.toggle("status-badge--completed", badge.textContent?.trim() === "Completed");
      badge?.classList.toggle("status-badge--planned", badge.textContent?.trim() === "Planned");
      const footer = card.querySelector<HTMLElement>(".cert-card__footer span:first-child");
      const hasUrl = Boolean(card.dataset.certUrl?.trim());
      if (footer) footer.textContent = hasUrl ? "View credential" : badge?.textContent?.trim() === "Planned" ? "Planned credential" : "Credential details";
    });
    const filters = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-cert-filter]"));
    const filterHandlers = filters.map((filter) => {
      const handler = () => {
        const category = filter.dataset.certFilter || "all";
        filters.forEach((item) => {
          const active = item === filter;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        certs.forEach((card) => { card.hidden = category !== "all" && card.dataset.certCategory !== category; });
      };
      filter.addEventListener("click", handler);
      return [filter, handler] as const;
    });
    const certHandlers = certs.map((card) => { const handler = () => setCertificate({ title: card.dataset.certTitle || "Certificate", issuer: card.dataset.certIssuer || "Issuer" }); card.addEventListener("click", handler); return [card, handler] as const; });

    const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
    const submitHandler = async (event: SubmitEvent) => {
      event.preventDefault();
      if (!form) return;

      const status = form.querySelector<HTMLElement>("[data-form-status]");
      const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const formData = new FormData(form);

      const payload = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        topic: String(formData.get("topic") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
        company: String(formData.get("company") ?? "").trim(),
      };

      if (status) {
        status.hidden = true;
        status.removeAttribute("data-tone");
      }

      submitButton?.setAttribute("disabled", "true");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = (await response.json()) as { ok?: boolean; error?: string; mailto?: string };

        if (response.ok && result.ok) {
          form.reset();
          if (status) {
            status.hidden = false;
            status.dataset.tone = "success";
            status.textContent = "Thanks — your message was sent. I will get back to you soon.";
          }
        } else if (result.mailto) {
          if (status) {
            status.hidden = false;
            status.dataset.tone = "error";
            status.innerHTML = `${result.error ?? "Email delivery is not configured yet."} <a href="${result.mailto}">Open your email app</a>.`;
          }
        } else if (status) {
          status.hidden = false;
          status.dataset.tone = "error";
          status.textContent = result.error ?? "Unable to send message. Please try email directly.";
        }
      } catch {
        if (status) {
          status.hidden = false;
          status.dataset.tone = "error";
          status.textContent = "Network error. Please email ravindrassk1304@gmail.com directly.";
        }
      } finally {
        submitButton?.removeAttribute("disabled");
      }
    };

    form?.addEventListener("submit", submitHandler);

    return () => {
      observer.disconnect();
      countObserver.disconnect();
      if (roleTimer) window.clearInterval(roleTimer);
      tocObserver?.disconnect();
      window.removeEventListener("scroll", onScrollProgress);
      window.removeEventListener("resize", onScrollProgress);
      window.removeEventListener("scroll", onTocScrollUi);
      window.removeEventListener("resize", onTocScrollUi);
      tocToggle?.removeEventListener("click", onTocToggle);
      tocFab?.removeEventListener("click", onTocFab);
      tocLinks.forEach((link) => link.removeEventListener("click", onTocLinkClick));
      tabHandlers.forEach(([tab, clickHandler, previewHandler]) => {
        tab.removeEventListener("click", clickHandler);
        tab.removeEventListener("pointerenter", previewHandler);
        tab.removeEventListener("focus", previewHandler);
      });
      tabRoot?.removeEventListener("pointerleave", leaveTabsHandler);
      window.removeEventListener("resize", resizeTabsHandler);
      filterHandlers.forEach(([filter, handler]) => filter.removeEventListener("click", handler));
      certHandlers.forEach(([card, handler]) => card.removeEventListener("click", handler));
      form?.removeEventListener("submit", submitHandler);
    };
  }, [pathname]);

  if (!certificate) return null;
  return (
    <div className="modal is-open" aria-hidden="false" role="dialog" aria-modal="true" onClick={() => setCertificate(null)}>
      <div className="modal__panel" onClick={(event) => event.stopPropagation()}>
        <div className="modal__bar"><h2 className="modal__title">{certificate.title}</h2><button className="modal__close" type="button" onClick={() => setCertificate(null)} aria-label="Close certificate preview">x</button></div>
        <div className="modal__media cert-modal__copy"><strong>{certificate.title}</strong><span>{certificate.issuer}</span><p className="card-copy">Verification link will appear here when a public credential URL is available.</p></div>
      </div>
    </div>
  );
}

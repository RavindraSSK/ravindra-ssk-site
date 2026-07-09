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
      if (/RAG Agents|CUDA Python/i.test(title)) return "ai-ml";
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

    return () => { observer.disconnect(); tabHandlers.forEach(([tab, clickHandler, previewHandler]) => { tab.removeEventListener("click", clickHandler); tab.removeEventListener("pointerenter", previewHandler); tab.removeEventListener("focus", previewHandler); }); tabRoot?.removeEventListener("pointerleave", leaveTabsHandler); window.removeEventListener("resize", resizeTabsHandler); filterHandlers.forEach(([filter, handler]) => filter.removeEventListener("click", handler)); certHandlers.forEach(([card, handler]) => card.removeEventListener("click", handler)); form?.removeEventListener("submit", submitHandler); };
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

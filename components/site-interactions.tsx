"use client";

import { useEffect, useState } from "react";

export function SiteInteractions({ pathname }: { pathname: string }) {
  const [certificate, setCertificate] = useState<{ title: string; issuer: string } | null>(null);

  useEffect(() => {
    const animated = Array.from(document.querySelectorAll<HTMLElement>(".animate-in"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    animated.forEach((item) => observer.observe(item));

    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-tab-target]"));
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-tab-panel]"));
    const selectTab = (id: string) => {
      tabs.forEach((tab) => { const active = tab.dataset.tabTarget === id; tab.classList.toggle("is-active", active); tab.setAttribute("aria-selected", String(active)); tab.tabIndex = active ? 0 : -1; });
      panels.forEach((panel) => { panel.hidden = panel.id !== id; });
    };
    const hash = window.location.hash.slice(1);
    if (tabs.length) selectTab(tabs.some((tab) => tab.dataset.tabTarget === hash) ? hash : "projects");
    const tabHandlers = tabs.map((tab) => { const handler = () => { const id = tab.dataset.tabTarget; if (id) { selectTab(id); history.replaceState(null, "", `#${id}`); } }; tab.addEventListener("click", handler); return [tab, handler] as const; });

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
    const submit = (event: SubmitEvent) => { event.preventDefault(); const status = form?.querySelector<HTMLElement>("[data-form-status]"); if (status) { status.hidden = false; status.textContent = "This form is not connected to a backend yet. Please email me directly at ravindrassk1304@gmail.com."; } };
    form?.addEventListener("submit", submit);

    return () => { observer.disconnect(); tabHandlers.forEach(([tab, handler]) => tab.removeEventListener("click", handler)); filterHandlers.forEach(([filter, handler]) => filter.removeEventListener("click", handler)); certHandlers.forEach(([card, handler]) => card.removeEventListener("click", handler)); form?.removeEventListener("submit", submit); };
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

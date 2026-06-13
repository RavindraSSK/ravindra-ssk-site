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
      tabs.forEach((tab) => { const active = tab.dataset.tabTarget === id; tab.setAttribute("aria-selected", String(active)); tab.tabIndex = active ? 0 : -1; });
      panels.forEach((panel) => { panel.hidden = panel.id !== id; });
    };
    const hash = window.location.hash.slice(1);
    if (tabs.length) selectTab(tabs.some((tab) => tab.dataset.tabTarget === hash) ? hash : "projects");
    const tabHandlers = tabs.map((tab) => { const handler = () => { const id = tab.dataset.tabTarget; if (id) { selectTab(id); history.replaceState(null, "", `#${id}`); } }; tab.addEventListener("click", handler); return [tab, handler] as const; });

    const certs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-cert-card]"));
    const certHandlers = certs.map((card) => { const handler = () => setCertificate({ title: card.dataset.certTitle || "Certificate", issuer: card.dataset.certIssuer || "Issuer" }); card.addEventListener("click", handler); return [card, handler] as const; });

    const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
    const submit = (event: SubmitEvent) => { event.preventDefault(); const status = form?.querySelector<HTMLElement>("[data-form-status]"); if (status) { status.hidden = false; status.textContent = "Thanks — this form is ready to connect to your preferred email service."; } };
    form?.addEventListener("submit", submit);

    return () => { observer.disconnect(); tabHandlers.forEach(([tab, handler]) => tab.removeEventListener("click", handler)); certHandlers.forEach(([card, handler]) => card.removeEventListener("click", handler)); form?.removeEventListener("submit", submit); };
  }, [pathname]);

  if (!certificate) return null;
  return (
    <div className="modal is-open" aria-hidden="false" role="dialog" aria-modal="true" onClick={() => setCertificate(null)}>
      <div className="modal__panel" onClick={(event) => event.stopPropagation()}>
        <div className="modal__bar"><h2 className="modal__title">{certificate.title}</h2><button className="modal__close" type="button" onClick={() => setCertificate(null)} aria-label="Close certificate preview">×</button></div>
        <div className="modal__media cert-modal__copy"><strong>{certificate.title}</strong><span>{certificate.issuer}</span><p className="card-copy">Certificate image or verification link can be added when available.</p></div>
      </div>
    </div>
  );
}

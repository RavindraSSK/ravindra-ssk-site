"use client";

import { useState } from "react";

import { GlassCard } from "@/components/ui/glass-card";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <GlassCard className="p-6 sm:p-8">
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          event.currentTarget.reset();
          setSent(true);
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-ink">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="field-shell w-full rounded-2xl px-4 py-3 text-sm text-ink placeholder:text-muted/70"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-ink">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="field-shell w-full rounded-2xl px-4 py-3 text-sm text-ink placeholder:text-muted/70"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-ink">
          Project or topic
          <input
            type="text"
            name="topic"
            placeholder="A short project summary"
            className="field-shell w-full rounded-2xl px-4 py-3 text-sm text-ink placeholder:text-muted/70"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-ink">
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="A few details are enough for this first pass."
            className="field-shell w-full rounded-[24px] px-4 py-3 text-sm text-ink placeholder:text-muted/70"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#112f72,#2552b1)] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_34px_rgba(16,41,95,0.18)] transition duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-[0_22px_42px_rgba(16,41,95,0.22)] sm:w-auto"
          >
            Send inquiry
          </button>
          <p className="text-sm text-muted">
            This base form is ready for email or backend integration.
          </p>
        </div>

        {sent ? (
          <div className="glass-inset rounded-[22px] px-4 py-3 text-sm text-muted">
            Thanks. The UI flow is working and ready to connect to your preferred contact handler.
          </div>
        ) : null}
      </form>
    </GlassCard>
  );
}

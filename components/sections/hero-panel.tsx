"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { currentFocus } from "@/lib/content";

export function HeroPanel() {
  return (
    <div className="relative min-h-[420px]">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-8 h-32 w-32 rounded-full bg-[#d8e5fc]/88 blur-3xl"
      />
      <div className="absolute left-4 top-16 h-28 w-28 rounded-full bg-[#7ea6f3]/14 blur-3xl" />
      <GlassCard variant="strong" className="relative h-full min-h-[420px] p-6 sm:p-8" hover={false}>
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(24,58,126,0.06),transparent_40%,rgba(116,155,230,0.12))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(111,149,220,0.08))]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="space-y-5">
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-muted">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#2563eb]" />
              Current focus
            </div>
            <div className="space-y-3">
              <h3 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                AI systems grounded in spatial reasoning, clarity, and calm product decisions.
              </h3>
              <p className="max-w-md text-sm leading-6 text-muted sm:text-base">
                A premium base for work, writing, and personal interests, designed to expand without losing focus.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {currentFocus.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-inset rounded-[24px] p-4"
              >
                <p className="text-sm font-medium text-ink">{item}</p>
              </motion.div>
            ))}
            <div className="glass-inset rounded-[24px] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/60">
                Design-first
              </p>
              <p className="mt-2 text-sm text-muted">
                Modular by default, with room for deeper case studies, galleries, and long-form content later.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card absolute -bottom-6 left-6 hidden w-56 rounded-[24px] p-4 lg:block"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/60">
          Product system
        </p>
        <p className="mt-3 text-sm text-muted">
          Professional identity, portfolio proof, and personal content living in one cohesive surface language.
        </p>
      </motion.div>
    </div>
  );
}

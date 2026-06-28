import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Dumbbell,
  Headphones,
  NotebookText,
  type LucideIcon,
} from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

const iconMap: Record<string, LucideIcon> = {
  Blog: NotebookText,
  Photography: Camera,
  "Fitness & Health": Dumbbell,
  Music: Headphones,
};

type ExploreCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ExploreCard({ title, description, href }: ExploreCardProps) {
  const Icon = iconMap[title] ?? NotebookText;

  return (
    <Link href={href} className="group block h-full">
      <GlassCard className="relative flex h-full flex-col justify-between gap-10 p-6 sm:p-7">
        <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.12),transparent_20%),radial-gradient(circle_at_90%_80%,rgba(99,102,241,0.08),transparent_10%)] opacity-0 blur-3xl transition duration-500 ease-premium group-hover:opacity-100 group-hover:scale-105" />

        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-navy/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(232,240,253,0.72))] text-navy shadow-[0_10px_24px_rgba(16,41,95,0.06)] transition duration-300 ease-premium transform group-hover:bg-[linear-gradient(180deg,#123170,#2c57b2)] group-hover:text-white group-hover:scale-105 group-hover:rotate-2">
            <Icon className="h-5 w-5 transition-transform duration-300 ease-premium group-hover:scale-110 group-hover:rotate-6" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-navy/42 transition-transform duration-400 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-navy" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/55 transition-transform duration-300 ease-premium group-hover:translate-y-0.5 group-hover:text-navy/70">
            Explore
          </span>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink transition-transform duration-300 ease-premium group-hover:-translate-y-1 group-hover:text-[#0b3b89]">{title}</h3>
          <p className="max-w-sm text-sm leading-6 text-muted sm:text-base transition-opacity duration-300 ease-premium group-hover:opacity-90">
            {description}
          </p>
        </div>
      </GlassCard>
    </Link>
  );
}

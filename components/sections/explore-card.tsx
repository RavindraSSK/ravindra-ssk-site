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
      <GlassCard className="flex h-full flex-col justify-between gap-10 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-navy/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(232,240,253,0.72))] text-navy shadow-[0_10px_24px_rgba(16,41,95,0.06)] transition duration-300 ease-premium group-hover:bg-[linear-gradient(180deg,#123170,#2c57b2)] group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-navy/42 transition duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
        </div>
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/55">
            Explore
          </span>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">{title}</h3>
          <p className="max-w-sm text-sm leading-6 text-muted sm:text-base">
            {description}
          </p>
        </div>
      </GlassCard>
    </Link>
  );
}

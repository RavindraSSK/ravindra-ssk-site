import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  role: string;
  stack: readonly string[];
  links: readonly ProjectLink[];
  compact?: boolean;
};

export function ProjectCard({
  title,
  category,
  description,
  role,
  stack,
  links,
  compact = false,
}: ProjectCardProps) {
  return (
    <GlassCard
      className={cn(
        "flex h-full flex-col p-6 sm:p-7",
        compact ? "gap-5" : "gap-6 rounded-[30px]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <span className="inline-flex rounded-full border border-navy/12 bg-white/76 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-navy shadow-[0_8px_18px_rgba(16,41,95,0.04)]">
            {category}
          </span>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
              {title}
            </h3>
            <p className="text-sm leading-6 text-muted sm:text-base">{description}</p>
          </div>
        </div>
      </div>

      <div className="glass-inset rounded-[24px] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/60">
          Role
        </p>
        <p className="mt-2 text-sm leading-6 text-muted">{role}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-navy/10 bg-white/72 px-3 py-1.5 text-xs font-medium text-muted shadow-[0_8px_16px_rgba(16,41,95,0.04)]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-1">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white/78 px-4 py-2.5 text-sm font-medium text-ink shadow-[0_10px_22px_rgba(16,41,95,0.05)] transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white"
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4 text-navy" />
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}

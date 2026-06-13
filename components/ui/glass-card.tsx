import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  variant?: "soft" | "glass" | "strong";
};

export function GlassCard({
  className,
  children,
  hover = true,
  variant = "soft",
  ...props
}: GlassCardProps) {
  const variantClass =
    variant === "glass"
      ? "glass-panel"
      : variant === "strong"
        ? "glass-panel-strong"
        : "surface-card";

  return (
    <div
      className={cn(
        "group/glass relative overflow-hidden",
        variantClass,
        hover &&
          "transition duration-300 ease-premium hover:-translate-y-1 hover:border-[#234faa]/55 hover:shadow-[0_0_0_1px_rgba(26,69,163,0.22),0_20px_42px_rgba(16,41,95,0.12),0_0_0_8px_rgba(54,98,196,0.08)]",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(17,43,102,0),rgba(42,84,177,0.2),rgba(62,110,215,0.42),rgba(42,84,177,0.2),rgba(17,43,102,0))] transition duration-300 ease-premium group-hover/glass:h-[2px] group-hover/glass:bg-[linear-gradient(90deg,rgba(17,43,102,0),rgba(50,94,194,0.36),rgba(84,132,238,0.78),rgba(50,94,194,0.36),rgba(17,43,102,0))]" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent opacity-0 transition duration-300 ease-premium group-hover/glass:opacity-100 group-hover/glass:[box-shadow:inset_0_0_0_1px_rgba(79,126,229,0.7),0_0_0_1px_rgba(79,126,229,0.28)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(29,73,171,0.08),transparent_34%,transparent_70%,rgba(79,126,229,0.08))] opacity-0 transition duration-300 ease-premium group-hover/glass:opacity-100" />
      <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-[radial-gradient(circle,rgba(40,84,182,0.14),transparent_62%)] opacity-0 blur-xl transition duration-300 ease-premium group-hover/glass:opacity-100" />
      {children}
    </div>
  );
}

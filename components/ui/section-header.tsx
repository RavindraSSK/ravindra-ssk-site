import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div className={cn("space-y-3", centered ? "max-w-2xl" : "max-w-3xl")}>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

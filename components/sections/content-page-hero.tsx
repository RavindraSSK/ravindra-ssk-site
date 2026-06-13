import { GlassCard } from "@/components/ui/glass-card";

type ContentPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tags: readonly string[];
  asideTitle: string;
  asideText: string;
};

export function ContentPageHero({
  eyebrow,
  title,
  description,
  tags,
  asideTitle,
  asideText,
}: ContentPageHeroProps) {
  return (
    <GlassCard variant="strong" hover={false} className="overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-end">
        <div className="space-y-5">
          <div className="glass-pill inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-navy/70">
            {eyebrow}
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-navy/12 bg-white/72 px-3 py-1.5 text-xs font-medium text-muted shadow-[0_8px_18px_rgba(16,41,95,0.04)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-inset rounded-[26px] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/60">
            {asideTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">{asideText}</p>
        </div>
      </div>
    </GlassCard>
  );
}

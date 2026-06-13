import { GlassCard } from "@/components/ui/glass-card";

type TimelineItemProps = {
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights: readonly string[];
};

export function TimelineItem({
  period,
  title,
  organization,
  description,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-[10px] top-1 h-full w-px bg-[linear-gradient(180deg,rgba(126,154,208,0.4),rgba(126,154,208,0.08))]" />
      <div className="absolute left-0 top-2 h-5 w-5 rounded-full border border-navy/14 bg-white shadow-[0_10px_20px_rgba(16,41,95,0.08)]" />
      <GlassCard className="p-6 sm:p-7">
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-ink">{title}</p>
              <p className="mt-1 text-sm text-navy">{organization}</p>
            </div>
            <span className="inline-flex w-fit rounded-full border border-navy/10 bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-navy shadow-[0_8px_18px_rgba(16,41,95,0.04)]">
              {period}
            </span>
          </div>
          <p className="text-sm leading-6 text-muted sm:text-base">{description}</p>
          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-navy/10 bg-white/72 px-3 py-1.5 text-xs font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

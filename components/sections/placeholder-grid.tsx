import { GlassCard } from "@/components/ui/glass-card";

type PreviewItem = {
  label: string;
  title: string;
  description: string;
};

type PlaceholderGridProps = {
  items: readonly PreviewItem[];
  mode?: "cards" | "gallery";
};

export function PlaceholderGrid({
  items,
  mode = "cards",
}: PlaceholderGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <GlassCard key={item.title} className="flex h-full flex-col gap-5 p-5 sm:p-6">
          {mode === "gallery" ? (
            <div className="glass-inset aspect-[4/3] rounded-[22px] p-3">
              <div className="h-full rounded-[18px] border border-dashed border-navy/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(218,231,252,0.6))]" />
            </div>
          ) : null}

          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-navy/12 bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy/72">
              {item.label}
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-muted">{item.description}</p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-navy/8 pt-4">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-navy/58">
              Preview note
            </span>
            <span className="text-sm font-medium text-navy">View more</span>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

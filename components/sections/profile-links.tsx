import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

type ProfileLink = {
  label: string;
  description: string;
  href: string;
};

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  Email: Mail,
};

type ProfileLinksProps = {
  links: readonly ProfileLink[];
};

export function ProfileLinks({ links }: ProfileLinksProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRight;
        const isExternal =
          link.href.startsWith("http://") ||
          link.href.startsWith("https://") ||
          link.href.startsWith("mailto:");

        return (
          <Link
            key={link.label}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="group block h-full"
          >
            <GlassCard className="flex h-full flex-col gap-4 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-navy/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(232,240,253,0.72))] text-navy shadow-[0_10px_24px_rgba(16,41,95,0.06)] transition duration-300 ease-premium group-hover:bg-[linear-gradient(135deg,#123170,#2b57b7)] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-navy/44 transition duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-ink">{link.label}</h3>
                <p className="text-sm leading-6 text-muted">{link.description}</p>
              </div>
            </GlassCard>
          </Link>
        );
      })}
    </div>
  );
}

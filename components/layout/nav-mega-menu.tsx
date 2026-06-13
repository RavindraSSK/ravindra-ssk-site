"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { navigationMenus } from "@/lib/content";

type MenuPath = keyof typeof navigationMenus;

type NavMegaMenuProps = {
  menuPath: MenuPath;
  onLinkHover?: (href: string) => void;
  onNavigate?: (href: string) => void;
};

export function NavMegaMenu({
  menuPath,
  onLinkHover,
  onNavigate,
}: NavMegaMenuProps) {
  const menu = navigationMenus[menuPath];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(10px)" }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-[calc(100%+1rem)] z-50 w-[min(100vw-2rem,860px)] -translate-x-1/2"
    >
      <div className="glass-panel rounded-[34px] border border-white/50 p-3 shadow-[0_28px_70px_rgba(16,41,95,0.16),inset_0_1px_0_rgba(255,255,255,0.84)] backdrop-blur-[26px]">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
          <div className="surface-card-strong relative overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(42,84,177,0.06),transparent_46%,rgba(130,166,234,0.12))]" />
            <div className="relative space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/60">
                  {menu.eyebrow}
                </p>
                <h3 className="max-w-xs text-[2rem] font-semibold tracking-[-0.05em] text-ink">
                  {menu.title}
                </h3>
                <p className="max-w-sm text-sm leading-7 text-muted">
                  {menu.description}
                </p>
              </div>

              <Link
                href={menu.featured.href}
                onMouseEnter={() => onLinkHover?.(menu.featured.href)}
                onClick={() => onNavigate?.(menu.featured.href)}
                onPointerDown={() => onNavigate?.(menu.featured.href)}
                className="inline-flex items-center gap-2 rounded-full border border-navy/14 bg-white/74 px-4 py-2.5 text-sm font-medium text-navy shadow-[0_12px_28px_rgba(16,41,95,0.08)] transition duration-200 ease-premium hover:-translate-y-0.5 hover:bg-white"
              >
                {menu.featured.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {menu.groups.map((group) => (
              <div key={group.title} className="surface-card p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/58">
                  {group.title}
                </p>
                <div className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() =>
                        onLinkHover?.(link.href.split("#")[0] ?? link.href)
                      }
                      onClick={() => onNavigate?.(link.href)}
                      onPointerDown={() => onNavigate?.(link.href)}
                      className="group block rounded-[22px] px-3 py-3 transition duration-200 ease-premium hover:bg-[linear-gradient(180deg,rgba(17,43,102,0.06),rgba(42,84,177,0.05))]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-ink transition duration-200 ease-premium group-hover:text-navy">
                          {link.label}
                        </p>
                        <ArrowUpRight className="h-4 w-4 text-navy/30 transition duration-200 ease-premium group-hover:text-navy/70" />
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-muted">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation, navigationMenus } from "@/lib/content";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

function isActivePath(targetHref: string, currentPath: string) {
  if (targetHref === "/") {
    return currentPath === "/";
  }

  return currentPath === targetHref || currentPath.startsWith(`${targetHref}/`);
}

export function MobileNav({ open, pathname, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] =
    useState<keyof typeof navigationMenus | null>(null);
  const activeMenu =
    (Object.keys(navigationMenus).find((key) =>
      isActivePath(key, pathname),
    ) as keyof typeof navigationMenus | undefined) ?? null;
  const visibleExpandedMenu = open ? expandedMenu ?? activeMenu : null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 lg:hidden"
        >
          <div className="glass-panel overflow-hidden p-2">
            <div className="grid gap-2">
              {navigation.map((item) => {
                const active = isActivePath(item.href, pathname);
                const hasMenu = item.href in navigationMenus;
                const menuPath = hasMenu
                  ? (item.href as keyof typeof navigationMenus)
                  : null;
                const isExpanded = menuPath ? visibleExpandedMenu === menuPath : false;

                return (
                  <div key={item.href} className="surface-card overflow-hidden p-1.5">
                    <div className="flex items-center gap-2">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "min-w-0 flex-1 rounded-[18px] px-4 py-3 text-sm font-medium transition duration-300 ease-premium",
                          active
                            ? "bg-[linear-gradient(135deg,#102d72,#2450b0)] text-white shadow-[0_14px_30px_rgba(16,41,95,0.2)]"
                            : "text-ink/82 hover:bg-navy/[0.06]",
                        )}
                      >
                        {item.label}
                      </Link>

                      {menuPath ? (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedMenu((value) =>
                              value === menuPath ? null : menuPath,
                            )
                          }
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-menu-${menuPath.replace("/", "")}`}
                          className="glass-pill flex h-11 w-11 items-center justify-center rounded-[18px] text-navy transition duration-300 ease-premium hover:bg-navy/[0.08]"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition duration-200 ease-premium",
                              isExpanded && "rotate-180",
                            )}
                          />
                        </button>
                      ) : null}
                    </div>

                    <AnimatePresence initial={false}>
                      {menuPath && isExpanded ? (
                        <motion.div
                          id={`mobile-menu-${menuPath.replace("/", "")}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-1 px-2 pb-2">
                            {navigationMenus[menuPath].groups.flatMap((group) =>
                              group.links.map((link) => {
                                const linkRoot = link.href.split("#")[0] ?? link.href;
                                const linkActive =
                                  pathname === linkRoot ||
                                  pathname.startsWith(`${linkRoot}/`);

                                return (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={onClose}
                                    className={cn(
                                      "block rounded-[18px] px-4 py-3 text-sm transition duration-200 ease-premium",
                                      linkActive
                                        ? "bg-navy/[0.08] font-medium text-navy"
                                        : "text-muted hover:bg-navy/[0.05] hover:text-ink",
                                    )}
                                  >
                                    {link.label}
                                  </Link>
                                );
                              }),
                            )}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="glass-inset mt-3 rounded-[22px] px-4 py-3 text-sm text-muted">
              Available for select collaborations and thoughtfully scoped projects.
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

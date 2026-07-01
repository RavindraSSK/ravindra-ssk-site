"use client";

import Link from "next/link";
import { useState, type FocusEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Container } from "@/components/layout/container";
import { NavMegaMenu } from "@/components/layout/nav-mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigation, navigationMenus } from "@/lib/content";
import { cn } from "@/lib/utils";

function isActivePath(targetHref: string, currentPath: string) {
  if (targetHref === "/") {
    return currentPath === "/";
  }

  return currentPath === targetHref || currentPath.startsWith(`${targetHref}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [openMenuPath, setOpenMenuPath] =
    useState<keyof typeof navigationMenus | null>(null);

  const selectedPath = pendingPath ?? pathname;

  function closeDesktopMenu() {
    setHoveredPath(null);
    setOpenMenuPath(null);
  }

  function handleDesktopBlur(event: FocusEvent<HTMLDivElement>) {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
      return;
    }

    closeDesktopMenu();
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <div className="glass-panel flex min-h-[78px] items-center justify-between px-3 py-3 sm:px-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full px-2 py-1 transition duration-300 ease-premium hover:bg-navy/[0.12]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#102d72,#2b57b7)] text-sm font-semibold tracking-[0.24em] text-white shadow-[0_14px_30px_rgba(16,41,95,0.3)]">
              RM
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-ink">Ravi Medicharla</p>
              <p className="text-xs text-muted">AI Engineer | GeoAI | Product Systems</p>
            </div>
          </Link>

          <div
            className="relative hidden lg:block"
            onPointerLeave={closeDesktopMenu}
            onBlurCapture={handleDesktopBlur}
          >
            <nav className="flex items-center rounded-full border border-navy/28 bg-[linear-gradient(180deg,rgba(18,47,111,0.22),rgba(78,122,212,0.12))] p-1 shadow-[0_14px_30px_rgba(18,47,111,0.18),inset_0_1px_0_rgba(118,159,232,0.18)] backdrop-blur-xl">
              {navigation.map((item) => {
                const active = isActivePath(item.href, selectedPath);
                const hovering = hoveredPath === item.href && !active;
                const hasMenu = item.href in navigationMenus;
                const menuPath = hasMenu
                  ? (item.href as keyof typeof navigationMenus)
                  : null;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => {
                      setHoveredPath(item.href);
                      router.prefetch(item.href);
                      setOpenMenuPath(menuPath);
                    }}
                    onFocus={() => {
                      setHoveredPath(item.href);
                      router.prefetch(item.href);
                      setOpenMenuPath(menuPath);
                    }}
                    onPointerDown={() => {
                      setPendingPath(item.href);
                      setHoveredPath(item.href);
                      setOpenMenuPath(null);
                    }}
                    className={cn(
                      "relative block rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 ease-premium",
                      active
                        ? "text-white"
                        : "text-ink/80 hover:text-ink active:scale-[0.985]",
                    )}
                    aria-current={isActivePath(item.href, pathname) ? "page" : undefined}
                    aria-expanded={menuPath ? openMenuPath === menuPath : undefined}
                    aria-haspopup={menuPath ? "menu" : undefined}
                  >
                    {hovering ? (
                      <motion.span
                        layoutId="hover-nav-pill"
                        className="absolute inset-0 rounded-full border border-navy/24 bg-[linear-gradient(180deg,rgba(17,43,102,0.08),rgba(42,84,177,0.08))] shadow-[0_10px_22px_rgba(25,61,132,0.12)]"
                        transition={{ type: "spring", stiffness: 520, damping: 38 }}
                      />
                    ) : null}
                    {active ? (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#102d72,#2450b0)] shadow-[0_14px_28px_rgba(16,41,95,0.24)]"
                        transition={{ type: "spring", stiffness: 460, damping: 36 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <AnimatePresence>
              {openMenuPath ? (
                <NavMegaMenu
                  menuPath={openMenuPath}
                  onLinkHover={(href) => router.prefetch(href)}
                  onNavigate={(href) => {
                    setPendingPath(href.split("#")[0] ?? href);
                    setHoveredPath(null);
                    setOpenMenuPath(null);
                  }}
                />
              ) : null}
            </AnimatePresence>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="glass-pill rounded-full px-3 py-2 text-xs text-muted">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#2d66d8]" />
              Open to select collaborations
            </div>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-ink transition duration-300 ease-premium hover:bg-navy/[0.08] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div id="mobile-navigation">
          <MobileNav open={open} pathname={pathname} onClose={() => setOpen(false)} />
        </div>
      </Container>
    </header>
  );
}

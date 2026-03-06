"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <Container>
        <div
          className={cn(
            "mt-2 flex h-[64px] items-center justify-between rounded-full border px-4 transition-all duration-200 md:mt-3 md:h-[72px] md:px-6",
            isScrolled
              ? "border-border bg-[hsl(var(--bg)/0.62)] shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] text-text md:text-sm md:tracking-[0.18em]"
            aria-label="Zynvrae 首頁"
          >
            <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            ZYNVRAE
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-center gap-8" aria-label="主要導覽">
              {primaryNavigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative pb-1 text-sm text-text transition-opacity duration-200 hover:opacity-70",
                      isActive ? "opacity-100" : "opacity-90"
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute bottom-0 left-0 h-px w-full bg-text transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 min-w-[88px] items-center justify-center rounded-full border border-[#444] px-4 text-sm text-text transition hover:opacity-70 focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "關閉導覽選單" : "切換導覽選單"}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="關閉導覽遮罩"
              className="fixed inset-0 z-[55] bg-black/55 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMenuOpen(false)}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            />

            <motion.div
              id="mobile-navigation"
              className="fixed inset-x-4 top-[84px] z-[60] rounded-[24px] border border-border bg-[hsl(var(--bg)/0.92)] p-4 shadow-soft backdrop-blur-2xl md:hidden"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Navigation</p>
                  <p className="mt-1 text-sm font-medium text-text">Zynvrae</p>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle className="h-10 rounded-full px-4" />
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-soft/60 text-base text-text transition hover:border-accent/60 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="關閉導覽選單"
                  >
                    ×
                  </button>
                </div>
              </div>

              <nav className="mt-3 grid gap-2" aria-label="手機導覽">
                {primaryNavigation.map((item, index) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <motion.div
                      key={item.href}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? undefined : { opacity: 0, y: 4 }}
                      transition={{
                        duration: 0.18,
                        ease: [0.22, 1, 0.36, 1],
                        delay: shouldReduceMotion ? 0 : index * 0.04
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-4 py-3.5 text-sm text-text transition",
                          isActive
                            ? "border-accent/70 bg-accent/10 shadow-[0_0_0_1px_rgba(92,225,230,0.14)]"
                            : "border-border bg-surface-soft/35 hover:border-accent/45 hover:bg-surface-soft/60"
                        )}
                      >
                        <span className="font-medium">{item.label}</span>
                        <span
                          aria-hidden
                          className={cn(
                            "text-xs tracking-[0.16em] transition",
                            isActive ? "text-accent" : "text-muted"
                          )}
                        >
                          {isActive ? "OPEN" : "GO"}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

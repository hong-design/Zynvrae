"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
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

  return (
    <header className="sticky top-0 z-50">
      <Container>
        <div
          className={cn(
            "mt-3 flex h-14 items-center justify-between rounded-md border px-3 backdrop-blur transition md:h-16 md:px-4",
            isScrolled
              ? "border-border/85 bg-surface/78 shadow-soft"
              : "border-border/55 bg-surface/46"
          )}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-text"
            aria-label="Zynvrae 首頁"
          >
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_hsl(var(--accent)/0.7)]"
            />
            ZYNVRAE
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="主要導覽">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition",
                    isActive ? "text-text" : "text-muted hover:text-text"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Link href="/#get-updates" className={buttonVariants({ size: "sm" })}>
              Get updates
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border/85 bg-surface-soft/70 px-3 text-sm text-muted transition hover:text-text md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="開啟導覽選單"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            Menu
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="mt-2 space-y-2 rounded-md border border-border/85 bg-surface/92 p-3 backdrop-blur md:hidden"
          >
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-md border px-3 py-2 text-sm",
                    isActive
                      ? "border-accent/45 bg-accent/10 text-text"
                      : "border-transparent text-muted hover:border-border/85 hover:bg-surface-soft/75 hover:text-text"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-2 pt-1">
              <ThemeToggle className="flex-1" />
              <Link
                href="/#get-updates"
                className={cn(buttonVariants({ size: "sm" }), "flex-1")}
              >
                Get updates
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

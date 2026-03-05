"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
            "mt-4 flex h-[72px] items-center justify-between rounded-full border px-6 transition",
            isScrolled
              ? "border-border bg-[rgba(0,0,0,0.6)] backdrop-blur-md"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-text"
            aria-label="Zynvrae 首頁"
          >
            <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            ZYNVRAE
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="主要導覽">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm text-text transition hover:opacity-70",
                    isActive ? "opacity-100" : "opacity-90"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#444] px-4 text-sm text-text transition hover:opacity-70 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="切換導覽選單"
          >
            Menu
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mt-3 space-y-2 rounded-2xl border border-border bg-[rgba(0,0,0,0.8)] p-3 backdrop-blur md:hidden"
          >
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-xl border px-4 py-2 text-sm text-text transition hover:opacity-70",
                    isActive ? "border-accent/70" : "border-transparent"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </Container>
    </header>
  );
}

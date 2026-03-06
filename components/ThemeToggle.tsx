"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

const STORAGE_KEY = "zynvrae-theme";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") {
      setTheme(current);
      return;
    }
    setTheme("dark");
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);

    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 280);
  };

  const switchToLabel = theme === "dark" ? "淺色" : "深色";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={theme === "light"}
      aria-label={`切換到${switchToLabel}模式`}
      title={switchToLabel}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md border border-border/85 bg-surface-soft/70 px-3 text-xs font-medium tracking-[0.08em] text-muted transition hover:border-accent/45 hover:text-text focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
    >
      {theme === "dark" ? "淺色" : "深色"}
    </button>
  );
}


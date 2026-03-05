"use client";

import { useId, useMemo, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
};

export function Tabs({ items, defaultTabId, className }: TabsProps) {
  const fallbackId = items[0]?.id;
  const [activeId, setActiveId] = useState(defaultTabId ?? fallbackId ?? "");
  const baseId = useId();

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [items, activeId]
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!items.length) {
      return;
    }

    const currentIndex = items.findIndex((item) => item.id === activeId);

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
      setActiveId(items[nextIndex].id);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
      setActiveId(items[prevIndex].id);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveId(items[0].id);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveId(items[items.length - 1].id);
    }
  };

  if (!items.length || !activeItem) {
    return null;
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="內容分類"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {items.map((item) => {
          const selected = item.id === activeItem.id;
          const tabId = `${baseId}-tab-${item.id}`;
          const panelId = `${baseId}-panel-${item.id}`;

          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.08em] transition",
                selected
                  ? "border-accent/50 bg-accent/12 text-accent"
                  : "border-border/90 bg-surface-soft/75 text-muted hover:border-accent/35 hover:text-text"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <section
        id={`${baseId}-panel-${activeItem.id}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeItem.id}`}
        className="mt-5"
      >
        {activeItem.content}
      </section>
    </div>
  );
}

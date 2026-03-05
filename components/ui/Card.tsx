import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card-lift rounded-md border border-border bg-surface-card p-8 shadow-soft",
        className
      )}
      {...props}
    />
  );
}

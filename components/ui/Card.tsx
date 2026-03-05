import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card-lift rounded-md border border-border/85 bg-surface/80 p-5 shadow-card backdrop-blur-sm sm:p-6",
        className
      )}
      {...props}
    />
  );
}

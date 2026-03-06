import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card-lift rounded-[14px] border border-border bg-card p-6 shadow-soft focus-visible:outline-none sm:p-7 lg:p-8",
        className
      )}
      {...props}
    />
  );
}

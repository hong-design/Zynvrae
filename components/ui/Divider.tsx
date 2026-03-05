import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type DividerProps = HTMLAttributes<HTMLDivElement>;

export function Divider({ className, ...props }: DividerProps) {
  return (
    <div
      aria-hidden
      className={cn("mx-auto h-px w-full max-w-content", className)}
      style={{
        background:
          "linear-gradient(90deg, transparent, hsl(var(--fg) / 0.14), transparent)"
      }}
      {...props}
    />
  );
}

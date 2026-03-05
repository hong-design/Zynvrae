import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border/90 bg-surface-soft/80 px-3 text-sm text-text placeholder:text-muted outline-none transition focus:border-accent/60 focus:bg-surface",
        className
      )}
      {...props}
    />
  );
}

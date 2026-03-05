import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border border-[#444] bg-transparent px-4 text-sm text-text placeholder:text-muted outline-none transition focus:border-accent",
        className
      )}
      {...props}
    />
  );
}

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  withDivider?: boolean;
};

export function Section({ className, withDivider = true, ...props }: SectionProps) {
  return <section className={cn("section-space", withDivider && "section-line", className)} {...props} />;
}

import type { HTMLAttributes } from "react";
import { Divider } from "@/components/Divider";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("section-space", className)} {...props}>
      <Divider />
      {children}
    </section>
  );
}

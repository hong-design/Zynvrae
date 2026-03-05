import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "success" | "warning";

const badgeStyle: Record<BadgeVariant, string> = {
  neutral: "border-border/90 bg-surface-soft/80 text-muted-strong",
  accent: "border-accent/45 bg-accent/12 text-accent",
  success: "border-success/40 bg-success/15 text-success",
  warning: "border-warning/45 bg-warning/15 text-warning"
};

type BadgeProps = {
  children: string;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "neutral",
  className
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.08em]",
        badgeStyle[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

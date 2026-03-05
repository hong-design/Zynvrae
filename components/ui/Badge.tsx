import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "success" | "warning";

const badgeStyle: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface-soft text-muted",
  accent: "border-accent/50 bg-accent/10 text-accent",
  success: "border-success/50 bg-success/10 text-success",
  warning: "border-warning/50 bg-warning/10 text-warning"
};

type BadgeProps = {
  children: string;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.08em]",
        badgeStyle[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

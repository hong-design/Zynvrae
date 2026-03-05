import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type VariantOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/65 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-accent/55 bg-accent/14 text-text hover:border-accent/80 hover:bg-accent/22",
  secondary:
    "border-border/90 bg-surface-soft/80 text-text hover:border-accent/45 hover:bg-surface-strong/80",
  ghost:
    "border-transparent bg-transparent text-muted hover:border-border/85 hover:bg-surface-soft/70 hover:text-text"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-5"
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className
}: VariantOptions = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantOptions;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}

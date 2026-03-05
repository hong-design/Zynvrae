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
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-55";

const variants: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-accent text-black hover:brightness-110",
  secondary:
    "border-[#444] bg-transparent text-text hover:border-accent hover:text-text",
  ghost:
    "border-transparent bg-transparent text-muted hover:border-border hover:bg-surface-soft hover:text-text"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-[22px]"
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
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}

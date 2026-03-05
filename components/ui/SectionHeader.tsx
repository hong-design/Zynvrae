import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  eyebrow,
  className
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="text-xs uppercase tracking-[0.12em] text-muted">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
    </header>
  );
}

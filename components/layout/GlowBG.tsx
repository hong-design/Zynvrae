import { cn } from "@/lib/utils";

type GlowBGProps = {
  className?: string;
};

export function GlowBG({ className }: GlowBGProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <span
        className="absolute -left-[20%] -top-[28%] h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / var(--glow-opacity-1)) 0%, transparent 72%)"
        }}
      />
      <span
        className="absolute -bottom-[34%] -right-[14%] h-[400px] w-[400px] rounded-full blur-[96px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / var(--glow-opacity-2)) 0%, transparent 74%)"
        }}
      />
    </div>
  );
}

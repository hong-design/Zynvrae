import { cn } from "@/lib/utils";

type GlowBGProps = {
  className?: string;
};

export function GlowBG({ className }: GlowBGProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <span
        className="absolute left-[4%] top-[6%] h-[420px] w-[420px] rounded-full blur-[110px] md:h-[560px] md:w-[560px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / var(--glow-opacity-1)) 0%, hsl(var(--accent) / 0.06) 38%, transparent 72%)"
        }}
      />
      <span
        className="absolute bottom-[2%] right-[2%] h-[360px] w-[360px] rounded-full blur-[100px] md:h-[500px] md:w-[500px] md:blur-[116px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / var(--glow-opacity-2)) 0%, hsl(var(--accent) / 0.05) 36%, transparent 74%)"
        }}
      />
    </div>
  );
}

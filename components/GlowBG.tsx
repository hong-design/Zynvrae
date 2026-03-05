import { cn } from "@/lib/utils";

type GlowBGProps = {
  className?: string;
};

export function GlowBG({ className }: GlowBGProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute -inset-x-[18vw] -inset-y-[36%] -z-10", className)}
    >
      <span
        className="absolute left-[6%] top-[10%] h-[560px] w-[560px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / var(--glow-opacity-1)) 0%, transparent 74%)"
        }}
      />
      <span
        className="absolute bottom-[4%] right-[8%] h-[520px] w-[520px] rounded-full blur-[116px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / var(--glow-opacity-2)) 0%, transparent 76%)"
        }}
      />
    </div>
  );
}

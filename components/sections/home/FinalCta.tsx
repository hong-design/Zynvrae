import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="section-space section-rule">
      <Container>
        <div className="rounded-lg border border-border/85 bg-surface/78 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">Next step</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            關注 Zynvrae 的產品迭代節奏。
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            如果你關注平台產品如何從 0 到 1 走到可持續營運，加入更新清單即可收到每次版本與策略調整。
          </p>

          <div className="mt-6 max-w-xl">
            <SubscribeForm idPrefix="footer-updates" buttonLabel="Get updates" />
          </div>
        </div>
      </Container>
    </section>
  );
}

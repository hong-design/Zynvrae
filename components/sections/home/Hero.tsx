import Link from "next/link";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="section-space relative overflow-hidden pb-16 pt-12 sm:pt-16">
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -z-10 h-64 w-[52rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="fade-up lg:col-span-8">
            <Badge variant="accent">Platform Product Company</Badge>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
              平台型產品開發與營運，
              <br className="hidden sm:block" />
              為長期迭代而生。
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              Zynvrae 打造自有平台產品。系統即產品，營運即迭代。
              我們把資料、流程、權限與可觀測性收斂到同一套架構，讓產品能持續成長。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/products" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                查看我們正在打造的東西
              </Link>
            </div>

            <div id="get-updates" className="mt-6 max-w-xl rounded-md border border-border/85 bg-surface/78 p-4">
              <SubscribeForm idPrefix="hero-updates" />
            </div>
          </div>

          <div className="fade-up lg:col-span-4 lg:pl-2">
            <div className="space-y-3 rounded-md border border-border/85 bg-surface/74 p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">3 秒內看懂</p>
              <ul className="space-y-3 text-sm text-muted-strong">
                <li>做什麼：打造可營運的平台型產品。</li>
                <li>為誰：需要規模化與可靠性的產品團隊。</li>
                <li>為何可信：以指標、審計與持續迭代驗證。</li>
                <li>下一步：加入候補名單，追蹤每次更新。</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

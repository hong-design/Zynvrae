import type { Metadata } from "next";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zynvrae 是 founder-led 的平台型產品公司，專注長期迭代與可持續營運。"
};

export default function AboutPage() {
  return (
    <section className="section-space pt-12 sm:pt-16">
      <Container className="space-y-10">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">About</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-6xl">
            Founder-led, product-first.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Zynvrae 由創辦人主導產品方向，但定位始終是公司與產品，而非個人作品集。
            我們聚焦平台型產品開發與營運，建立可長期擴展的系統。
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">定位</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              我們是產品公司。核心工作是打造與營運自有平台，不提供接案式客製服務。
            </p>
          </Card>

          <Card className="lg:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">方法</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              從資料流、權限、觀測到回顧機制，全部以系統思維設計，並以短週期實際數據驗證。
            </p>
          </Card>

          <Card className="lg:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">承諾</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              長期迭代、風險可控、可靠交付。每次更新都必須讓產品更穩定、更可擴展。
            </p>
          </Card>
        </div>

        <Card className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text">追蹤我們的下一步</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            若你關注平台型產品如何從研究走向可營運，加入更新清單即可收到我們的產品節奏與里程碑。
          </p>
          <div className="mt-6 max-w-xl">
            <SubscribeForm idPrefix="about-updates" buttonLabel="Get updates" />
          </div>
        </Card>
      </Container>
    </section>
  );
}

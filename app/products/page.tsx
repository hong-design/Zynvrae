import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "產品狀態",
  description:
    "Zynvrae 產品與平台目前處於開發與驗證階段，未來將以子品牌或獨立產品形式推出。",
  canonical: "/products"
});

export default function ProductsPage() {
  const schemas = [
    getWebPageSchema({
      title: "產品狀態",
      description: "Zynvrae 產品與平台目前處於開發與驗證階段，未來將以子品牌或獨立產品形式推出。",
      path: "/products"
    }),
    getBreadcrumbSchema([
      { name: "首頁", path: "/" },
      { name: "產品狀態", path: "/products" }
    ])
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Container>
        <PageHero
          kicker="PRODUCT STATUS"
          title="產品與平台目前處於開發與驗證階段"
          description="部分平台尚未對外公開，未來將以子品牌或獨立產品形式推出。"
        />
      </Container>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">產品策略方向</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Product Strategy</p>
            </header>
          </Reveal>

          <Stagger className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
            <StaggerItem>
              <Card>
                <h3 className="sub-title">平台本體為產品</h3>
                <p className="body-text mt-6 text-muted">以平台長期營運為核心，不以短期單點功能為導向。</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">逐步驗證與迭代</h3>
                <p className="body-text mt-6 text-muted">以開發與驗證節奏推進，確保每次公開都有可運作價值。</p>
              </Card>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">行銷與成長能力定位</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Growth Capability</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              Zynvrae 具備行銷與技術整合能力，主要用於支援自有平台與合作產品的成長與轉換。這項能力屬於平台營運的一部分，並非以大量對外接案為主要營運模式。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">下一階段</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Next Step</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>持續進行平台驗證與流程優化。</li>
              <li>依產品成熟度分階段對外公開。</li>
              <li>以子品牌或獨立產品形式發布。</li>
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

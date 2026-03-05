import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "平台方向",
  description: "Zynvrae 平台方向：打造可營運、可擴展、可治理的多角色數位平台。"
};

export default function PlatformPage() {
  return (
    <>
      <Container>
        <PageHero
          kicker="PLATFORM PRODUCT"
          title="平台不是功能集合，而是可以被經營的產品"
          description="Zynvrae 的平台開發核心，是打造可長期營運、可擴展、可治理的多角色數位平台。"
        />
      </Container>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">核心方向</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Core Direction</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>平台型數位平台產品</li>
              <li>可營運的服務型系統</li>
              <li>多角色平台（使用者／合作方／管理端）</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">平台共通特徵</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Common Traits</p>
            </header>
          </Reveal>

          <Stagger className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <StaggerItem>
              <Card>
                <h3 className="sub-title">角色與權限設計</h3>
                <p className="body-text mt-6 text-muted">明確定義使用者、合作方與管理端的角色邊界與權限治理。</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">營運流程結構</h3>
                <p className="body-text mt-6 text-muted">平台流程以實際營運為前提，確保可落地執行與持續運轉。</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">擴展導向設計</h3>
                <p className="body-text mt-6 text-muted">從開發初期即納入未來成長、維運與擴展需求。</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">長期價值累積</h3>
                <p className="body-text mt-6 text-muted">平台隨時間持續累積資料、流程與營運能力，而非短期功能堆疊。</p>
              </Card>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">打造方式</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Build Method</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              我們從營運需求出發，反向設計系統結構與流程，並將長期維運能力納入架構決策，確保平台可以穩定成長。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">我們關注的能力</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Platform Focus</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>長期營運能力</li>
              <li>平台結構與可擴展性</li>
              <li>角色分工與權限治理</li>
              <li>可持續成長的產品設計</li>
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

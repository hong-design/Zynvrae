import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { HomeHero } from "@/components/site/HomeHero";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "平台型數位平台開發",
  description:
    "Zynvrae 以平台型數位平台開發為核心，打造可長期營運、可擴展的數位服務產品。"
};

export default function HomePage() {
  return (
    <>
      <Container>
        <HomeHero />
      </Container>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">我們是誰</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Who We Are</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              Zynvrae 定位為平台型產品開發者，專注於從零打造可實際上線、可長期營運的數位平台。我們重視結構設計、角色分工與長期成長性，讓平台能隨時間累積價值。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">我們在做什麼</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">What We Build</p>
            </header>
          </Reveal>

          <Stagger className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <StaggerItem>
              <Card>
                <h3 className="sub-title">核心方向</h3>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
                  <li>平台型數位平台產品</li>
                  <li>可營運的服務型系統</li>
                  <li>多角色平台（使用者／合作方／管理端）</li>
                </ul>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">平台共通特徵</h3>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
                  <li>明確的角色與權限設計</li>
                  <li>可支撐實際營運的流程結構</li>
                  <li>為長期擴展與成長而設計</li>
                </ul>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">核心觀點</h3>
                <p className="body-text mt-6 text-muted">平台不是功能集合，而是一個可以被經營的產品。</p>
              </Card>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">我們如何打造平台</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">How We Build</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              我們以平台視角思考產品，從營運需求出發，反向設計系統結構與流程。每一個產品在開發階段即納入未來成長、維運與擴展考量，確保平台可持續累積價值。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">我們關注什麼</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Focus</p>
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

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">行銷與成長</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Growth</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              Zynvrae 具備行銷與技術整合能力，主要用於支援自有平台與合作產品的成長與轉換。這項能力屬於平台營運的一部分，並非以大量對外接案為主要模式。
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">合作立場</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Partnership</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              我們歡迎策略性合作與共同開發，尤其重視能共同打造長期產品或平台的夥伴。合作上，我們強調清楚的角色分工、權責結構與長期目標一致性。
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-8 md:grid-cols-2">
            <StaggerItem>
              <Card>
                <h3 className="sub-title">優先合作類型</h3>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
                  <li>策略合作</li>
                  <li>產品共同開發</li>
                  <li>長期平台夥伴</li>
                </ul>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card>
                <h3 className="sub-title">非主要合作類型</h3>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
                  <li>單次外包</li>
                  <li>短期專案委託</li>
                </ul>
              </Card>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">產品狀態</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Status</p>
            </header>
            <ul className="body-text mt-8 list-disc space-y-2 pl-5 text-muted">
              <li>產品與平台目前處於開發與驗證階段。</li>
              <li>部分平台尚未對外公開。</li>
              <li>未來將以子品牌或獨立產品形式推出。</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">聯絡與對外入口</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Contact</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              聯絡以策略合作、產品合作與長期合作洽談為主要方向。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:zynvrae@gmail.com" className={buttonVariants({ variant: "primary", size: "lg" })}>
                寄送合作需求
              </a>
              <a href="/talk.html" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                前往線上洽談頁
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-line">
        <Container>
          <Reveal>
            <header>
              <h2 className="section-title">法律與組織狀態</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Organization</p>
            </header>
            <p className="body-text mt-8 max-w-4xl text-muted">
              Zynvrae 目前以團隊形式運作，正在規劃正式法人與組織結構。相關法律與營運架構將隨事業發展逐步完善。
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

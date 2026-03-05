import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Tabs } from "@/components/ui/Tabs";

const capabilities = [
  {
    title: "平台型產品",
    body: "以產品模式打造核心平台，而非一次性專案。"
  },
  {
    title: "資料與工作流",
    body: "把資料流與流程規則放在同一個可追蹤系統。"
  },
  {
    title: "權限與信任",
    body: "最小權限、事件審計與責任鏈預設內建。"
  },
  {
    title: "安全與可用性",
    body: "可觀測、可回滾、可恢復，讓風險可控。"
  },
  {
    title: "成長與轉換",
    body: "以可驗證指標驅動迭代，累積長期複利。"
  }
];

export function Capabilities() {
  return (
    <section className="section-space section-rule">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted">What we build</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              我們打造的是可營運的平台，不是孤立功能。
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              每個模組都必須同時支持交付效率、風險控制與成長節奏。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {capabilities.map((item) => (
              <Card key={item.title} className="p-4">
                <h3 className="text-base font-medium text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-md border border-border/85 bg-surface/70 p-5 sm:p-6">
          <Tabs
            items={[
              {
                id: "product-layer",
                label: "產品層",
                content: (
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    <li>定義產品核心路徑與可擴展模組邊界。</li>
                    <li>建立版本化流程，讓每次更新可比較、可回滾。</li>
                    <li>以可觀測事件而非主觀感受做決策。</li>
                  </ul>
                )
              },
              {
                id: "ops-layer",
                label: "營運層",
                content: (
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    <li>固定週期回顧，縮短從訊號到行動的時間。</li>
                    <li>把策略拆成可執行任務，並綁定 owner 與時限。</li>
                    <li>把例外流程沉澱成下一版預設規則。</li>
                  </ul>
                )
              },
              {
                id: "trust-layer",
                label: "信任層",
                content: (
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    <li>最小權限與審計事件預設開啟。</li>
                    <li>高風險操作要求明確責任鏈與覆核節點。</li>
                    <li>以告警分級與回復流程維持服務穩定。</li>
                  </ul>
                )
              }
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

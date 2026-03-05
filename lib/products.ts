export type ProductStatus = "Private beta" | "Building" | "Research";

export type Product = {
  slug: string;
  name: string;
  status: ProductStatus;
  tagline: string;
  positioning: string;
  description: string;
  targetUsers: string[];
  coreFlow: string[];
  trustAndSafety: string[];
  metrics: string[];
  waitlistLabel: string;
};

const products: Product[] = [
  {
    slug: "platform-a",
    name: "Platform A",
    status: "Private beta",
    tagline: "把資料、工作流與權限收斂到同一個營運介面。",
    positioning: "給正在進入規模化階段的產品團隊，建立可持續迭代的核心平台。",
    description:
      "Platform A 將身份、資料流程、事件記錄與決策規則整合為同一個系統，讓產品更新可以快速發布，同時維持風險可控。",
    targetUsers: [
      "需要跨團隊共享流程的產品負責人",
      "同時管理成長與風險的營運團隊",
      "追求穩定交付的工程組織"
    ],
    coreFlow: [
      "定義角色與權限邊界",
      "建立可追蹤的資料流與審核點",
      "把例外處理回寫到營運規則",
      "持續用真實指標調整產品策略"
    ],
    trustAndSafety: [
      "預設最小權限與審核軌跡",
      "敏感操作雙重確認與事件留存",
      "關鍵模組可觀測性與告警分級"
    ],
    metrics: ["任務完成率", "流程延遲", "變更失敗率", "權限異常率"],
    waitlistLabel: "加入 Platform A 候補名單"
  },
  {
    slug: "project-axis",
    name: "Project Axis",
    status: "Building",
    tagline: "把營運決策流程產品化，而不是靠臨時表單與人工同步。",
    positioning: "給需要高頻調整流程的團隊，建立可回放、可驗證的決策鏈。",
    description:
      "Project Axis 針對高變動工作場景，提供可版本化規則與流程追蹤，讓每次調整都能被記錄、比較與復盤。",
    targetUsers: [
      "有複雜營運規則的產品團隊",
      "需要審計與追溯能力的管理角色",
      "正在建立內部控制框架的公司"
    ],
    coreFlow: [
      "設定規則版本與發布窗口",
      "在同一流程中完成審核與執行",
      "自動寫入決策日誌與影響面",
      "以週期回顧修正規則與指標"
    ],
    trustAndSafety: [
      "規則變更需可回滾",
      "異常決策觸發人工覆核",
      "操作權限與責任人明確映射"
    ],
    metrics: ["決策週期時間", "回滾次數", "流程一致性", "覆核通過率"],
    waitlistLabel: "取得 Axis 建置進度"
  },
  {
    slug: "signal-lab",
    name: "Signal Lab",
    status: "Research",
    tagline: "把產品訊號轉成可執行的實驗節奏。",
    positioning: "給重視指標品質與實驗治理的團隊，建立訊號到行動的最短路徑。",
    description:
      "Signal Lab 正在研究如何把零散的使用訊號標準化成實驗輸入，讓產品決策不再依賴單點直覺。",
    targetUsers: [
      "需要長期追蹤關鍵指標的產品團隊",
      "希望降低決策噪音的營運與分析角色",
      "重視實驗品質的工程與資料團隊"
    ],
    coreFlow: [
      "定義指標語意與資料來源",
      "建立實驗假設與分流策略",
      "追蹤影響與顯著性區間",
      "把結論沉澱為下一輪規則"
    ],
    trustAndSafety: [
      "資料來源完整性檢查",
      "指標異常自動標記",
      "實驗治理權限分層"
    ],
    metrics: ["訊號可用率", "實驗完成率", "結論採納率", "迭代週期"],
    waitlistLabel: "關注 Signal Lab 研究更新"
  }
];

export function getAllProducts(): Product[] {
  return [...products];
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

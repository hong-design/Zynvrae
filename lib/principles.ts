export type Principle = {
  id: string;
  title: string;
  oneLiner: string;
  execution: string[];
  measurement: string[];
};

export const principles: Principle[] = [
  {
    id: "system-first",
    title: "System-first",
    oneLiner: "先定義系統邊界，再定義功能。",
    execution: [
      "每個新功能先標記資料流、權限流與責任點",
      "所有流程都要能回放，不靠口述復盤",
      "優先消除跨工具手動搬運"
    ],
    measurement: ["跨系統手動步驟數", "流程中斷率", "資料一致性" ]
  },
  {
    id: "ship-fast",
    title: "Ship fast",
    oneLiner: "快速交付不是趕工，而是縮短驗證迴路。",
    execution: [
      "以可上線的最小切片交付",
      "每次發布必帶可觀測指標",
      "用明確回滾策略降低嘗試成本"
    ],
    measurement: ["交付週期", "回滾時間", "變更失敗率"]
  },
  {
    id: "measure-reality",
    title: "Measure reality",
    oneLiner: "判斷以真實行為資料為準，不以主觀偏好為準。",
    execution: [
      "需求評估先看行為訊號與瓶頸位置",
      "重大決策要有前後對照區間",
      "確保每個指標有明確語意與口徑"
    ],
    measurement: ["指標覆蓋率", "決策驗證時間", "假設命中率"]
  },
  {
    id: "security-default",
    title: "Security by default",
    oneLiner: "信任不是附加功能，而是預設能力。",
    execution: [
      "核心模組採最小權限預設",
      "敏感操作必有審計事件",
      "異常行為以自動化規則先隔離"
    ],
    measurement: ["高風險事件發現時間", "權限誤配率", "審計覆蓋率"]
  },
  {
    id: "compounding-iteration",
    title: "Compounding iteration",
    oneLiner: "每次迭代都要留下可複用的結構。",
    execution: [
      "把一次性修補轉成可重用模組",
      "建立固定節奏的版本回顧",
      "把新洞察沉澱為下輪預設"
    ],
    measurement: ["模組重用率", "重複缺陷率", "迭代累積速度"]
  }
];

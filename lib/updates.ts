export type UpdateSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type UpdatePost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  category: "產品" | "工程" | "營運";
  sections: UpdateSection[];
};

const updates: UpdatePost[] = [
  {
    slug: "2026-02-platform-a-private-beta",
    title: "Platform A 進入 Private Beta：先打通權限、流程與審計鏈",
    summary:
      "我們把第一階段重點放在流程可靠性與審計可追溯，確保每一次操作都能被定位與回放。",
    publishedAt: "2026-02-27",
    readTime: "4 分鐘",
    category: "產品",
    sections: [
      {
        id: "scope",
        title: "這一輪交付了什麼",
        paragraphs: [
          "Platform A 的 Private Beta 包含角色權限矩陣、流程狀態機與審計事件索引。目標不是一次做滿，而是先建立可運轉的核心迴路。",
          "我們刻意把可視化管理面板延後，把時間投入在流程一致性與錯誤恢復，因為這是後續所有功能的地基。"
        ]
      },
      {
        id: "metrics",
        title: "我們怎麼驗證是否有效",
        paragraphs: [
          "本階段關注四個指標：流程成功率、變更失敗率、權限異常率與事件回放耗時。",
          "若某一指標連續兩週偏離基準，我們會先調整流程策略，而不是直接疊加功能。"
        ]
      },
      {
        id: "next",
        title: "下一步",
        paragraphs: [
          "下一輪會針對審批節點做細化，讓高風險操作有更清楚的責任鏈。",
          "同時會開放候補名單中的第二批測試團隊，擴大實際場景驗證。"
        ]
      }
    ]
  },
  {
    slug: "2026-02-operating-rhythm-v2",
    title: "營運節奏 v2：把週回顧改成可執行的決策回路",
    summary:
      "我們把每週回顧從報告會議改成決策會議，重點是縮短從訊號到行動的距離。",
    publishedAt: "2026-02-14",
    readTime: "3 分鐘",
    category: "營運",
    sections: [
      {
        id: "change",
        title: "改了哪些機制",
        paragraphs: [
          "每週回顧改為固定三段：指標變化、風險評估、當週實驗。每段都需要明確 owner 與截止時間。",
          "會議輸出直接寫回產品 backlog，避免會後資訊遺失。"
        ]
      },
      {
        id: "impact",
        title: "帶來的影響",
        paragraphs: [
          "第一個月內，決策等待時間下降，跨團隊對齊成本也下降。",
          "更重要的是，回顧資料變成下一輪迭代的可用輸入，不再只是一次性記錄。"
        ]
      }
    ]
  },
  {
    slug: "2026-01-observability-baseline",
    title: "可觀測性基線：把故障處理從經驗導向改成流程導向",
    summary:
      "我們建立統一事件分級與告警路徑，讓故障處理能夠標準化，不再依賴個人記憶。",
    publishedAt: "2026-01-31",
    readTime: "5 分鐘",
    category: "工程",
    sections: [
      {
        id: "baseline",
        title: "基線包含哪些內容",
        paragraphs: [
          "事件分級、告警策略、責任人路徑與回報時限被整理成同一份執行手冊，並與產品事件模型對齊。",
          "每次故障都會留下可追溯紀錄，包含原因分類、影響面與修復時序。"
        ]
      },
      {
        id: "governance",
        title: "治理方式",
        paragraphs: [
          "我們要求每個高風險模組都要有 owner，並在版本評估時同步檢查可觀測性覆蓋。",
          "若監控缺口超過門檻，功能發布會自動降級或延後。"
        ]
      },
      {
        id: "long-term",
        title: "長期價值",
        paragraphs: [
          "可觀測性不是附加層，而是讓平台持續迭代的保險機制。",
          "當故障被標準化處理，團隊就能把更多時間投入在產品進化，而不是重複救火。"
        ]
      }
    ]
  }
];

export function getAllUpdates(): UpdatePost[] {
  return [...updates].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getUpdateBySlug(slug: string): UpdatePost | undefined {
  return updates.find((post) => post.slug === slug);
}

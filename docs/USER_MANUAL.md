# Zynvrae 官網使用手冊

## 1. 專案定位

本專案為 Zynvrae 官方網站，技術棧為：

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

網站核心訊息聚焦：

1. Platform-as-Product（自主平台產品開發與營運）
2. Growth-as-a-System（以資料與實驗驅動平台成長）

---

## 2. 開發環境需求

- Node.js 18.18+（建議 Node.js 20 LTS）
- npm 9+

---

## 3. 本地啟動

在專案根目錄執行：

```bash
npm install
npm run dev
```

開啟瀏覽器：

- http://localhost:3000

---

## 4. 打包與檢查

```bash
npm run lint
npm run build
npm run start
```

- `lint`：靜態檢查
- `build`：生產版編譯（部署前必跑）
- `start`：本地啟動 production build

---

## 5. 專案結構

```text
app/
  about/
  contact/
  platforms/
  updates/
    [slug]/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  opengraph-image.tsx

components/
  layout/      # Navbar / Footer
  ui/          # Button / Card / Container / SectionHeader / StatusChip
  sections/    # 首頁分區
  updates/     # 更新卡片
  contact/     # 聯絡表單

lib/
  site.ts      # 站點 metadata 設定
  updates.ts   # 更新文章資料（目前為假資料）
  format.ts    # 日期格式化
  utils.ts

styles/
  tokens.css   # 設計 tokens（色彩、圓角、陰影）
```

---

## 6. 常見維護任務

### 6.1 修改首頁文案

- 檔案位置：`components/sections/home/*`
- 對應區塊：
  - Hero：`Hero.tsx`
  - What we build：`WhatWeBuild.tsx`
  - Pipeline：`PlatformPipeline.tsx`
  - Principles：`Principles.tsx`
  - Current Focus：`CurrentFocus.tsx`

### 6.2 修改網站導覽

- Navbar：`components/layout/Navbar.tsx`
- Footer：`components/layout/Footer.tsx`

### 6.3 修改設計風格（主題色、邊框、圓角）

- 檔案：`styles/tokens.css`
- 常用變數：
  - `--bg`, `--surface`, `--text`, `--muted`, `--border`
  - `--accent`, `--accent-strong`
  - `--radius`, `--shadow-soft`

---

## 7. 更新頁內容管理（/updates）

目前更新頁使用本地假資料，集中在：

- `lib/updates.ts`

每篇文章欄位：

- `slug`：網址路徑
- `title`：標題
- `summary`：摘要
- `publishedAt`：日期（YYYY-MM-DD）
- `category`：分類（Engineering / Operations / Product）
- `readTime`：閱讀時間
- `content`：內文段落（heading + paragraphs）

新增文章步驟：

1. 在 `lib/updates.ts` 的 `updates` 陣列新增一筆資料。
2. 確認 `slug` 不重複。
3. 執行 `npm run build` 驗證動態路由可正常產生。

---

## 8. 聯絡表單（/contact）

表單實作位置：

- `components/contact/ContactForm.tsx`

目前為前端假送出流程，狀態包含：

- `idle`
- `loading`
- `success`
- `error`

防 spam 機制：

- 使用 honeypot 欄位 `website`
- 若機器人填寫該欄，前端仍顯示成功，避免暴露判斷邏輯

若要接後端 API：

1. 在 `handleSubmit` 內改為 `fetch("/api/contact", ...)`
2. 新增 `app/api/contact/route.ts`
3. 把目前 `setTimeout` 模擬流程改成真實 API 回應

---

## 9. SEO 與站點索引

### 9.1 全站 metadata

- `app/layout.tsx`
- 包含：title template、description、OpenGraph、Twitter Card

### 9.2 sitemap

- `app/sitemap.ts`
- 會輸出：
  - 靜態頁路由
  - updates 動態文章路由

### 9.3 robots

- `app/robots.ts`
- 允許所有爬蟲並指向 sitemap

### 9.4 OpenGraph 圖

- `app/opengraph-image.tsx`
- 由 Next.js 動態生成 `1200x630` 圖片

---

## 10. 部署到 Vercel

1. 將專案推送到 GitHub。
2. 登入 Vercel，建立 `New Project`。
3. 選擇此 repo，Framework 保持 `Next.js`。
4. Build Command：`npm run build`（預設）
5. 按 `Deploy`。

部署完成後建議檢查：

- `/` 首頁
- `/about`
- `/platforms`
- `/updates` 與任一 `/updates/[slug]`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`
- 社群分享是否正確抓取 OG 圖

---

## 11. 發版前檢查清單

1. `npm run lint` 無錯誤
2. `npm run build` 成功
3. 手機版與桌機版排版正常
4. 所有 CTA 與頁面連結可點擊
5. `lib/site.ts` 網域設定正確（正式環境）
6. 新增更新文章時，日期與 slug 正確

---

## 12. 常見問題排查

### Q1: build 失敗，提示 route/type 錯誤

- 檢查 `app/updates/[slug]/page.tsx` 與 `lib/updates.ts` 的資料欄位是否一致。
- 確認 `slug` 無重複與空值。

### Q2: 樣式沒生效

- 確認 `app/globals.css` 有被 `app/layout.tsx` 載入。
- 確認元件路徑被 `tailwind.config.ts` 的 `content` 掃描到。

### Q3: 中文顯示或字型不一致

- 檢查 `app/layout.tsx` 的 `Noto_Sans_TC` 是否仍在。
- 確認 class 使用 `font-sans`。

---

## 13. 後續可擴充方向

1. 將 `updates` 由本地 TS 資料改為 MDX（方便內容編輯）
2. 聯絡表單接入真實 API + Email 通知
3. 加入 GA4 / PostHog 事件追蹤
4. 補上 E2E 測試（Playwright）

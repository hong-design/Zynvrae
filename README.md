# Zynvrae Homepage UI Upgrade

以現有首頁文案與區塊順序為基礎，進行純 UI 風格升級（Next.js App Router + Tailwind + Framer Motion）。

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Folder Guide

- `app/`：放頁面、路由、metadata route（例如 `robots`、`sitemap`、`icon`、`opengraph-image`）
- `components/`：放可重用元件（例如 Navbar、Hero、Card、Footer）
- `lib/`：放設定、SEO helper、導覽資料、工具函式
- `styles/`：放全域樣式與 design tokens
- `public/`：放靜態資產
- `wrangler.jsonc`：Cloudflare Pages 設定

## Run

```bash
npm i
npm run dev
```

預覽網址：`http://localhost:3000`

Windows 建議直接用：

```bat
.\preview.bat
```

`preview.bat` 會先清掉佔用 `3000` port 的舊程序，再啟動新的預覽伺服器。
另外也會先清掉 `.next/cache/webpack`，避免 Windows 上常見的 dev cache 損壞。

如果 PowerShell 擋住 `npm.ps1`，不要直接打 `npm run dev`，改用：

```bat
cmd /c npm run dev
```

不要把 README 或聊天室裡的 ``` 一起貼進 PowerShell，PowerShell 會把它當成指令，然後出現 `無法辨識 '``'`。

## Build

```bash
npm run build
npm run start
```

`npm run start` 目前是用靜態伺服器預覽 `out/`，不是 `next start`。

原因：這個專案在 production 使用 `output: export`，所以正式輸出是靜態網站。

### Dev Issues On Windows

- 如果你看到 `GET /icon 500`、`GET /manifest.webmanifest 500`，通常不是頁面內容壞掉，而是本機 dev server 或 cache 狀態髒掉。
- 如果你看到 `webpack.cache.PackFileCacheStrategy ... ENOENT ... rename`，通常是 `.next/cache/webpack` 快取損壞。
- 最穩定的做法是直接重跑 `.\preview.bat`，它會先清掉舊程序與 webpack cache。

## Recent Updates

- 新增 `preview.bat`，Windows 可直接用 `.\preview.bat` 啟動本機預覽。
- 新增 `wrangler.jsonc`、`public/_headers`、`deploy-cloudflare.bat`，可改走 Cloudflare Pages Free。
- 手機版重新調整：Hero 間距縮合、CTA 改為直向滿寬、卡片內距下修、Navbar 高度改為 `64px`。
- 手機導覽升級為 overlay 面板：加入背景遮罩、關閉鍵、目前頁面高亮、`Esc` 關閉與背景滾動鎖定。
- 修正手機版頁面底部仍可左右拖動的問題，已在全域樣式收斂 `overflow-x`。
- SEO/OG 完整化：加入共用 metadata helper、manifest、icon、apple-icon、twitter-image。
- SEO 再補強：加入 JSON-LD 結構化資料（Organization、WebSite、WebPage、BreadcrumbList）。
- 相容路由 `/about` `/platforms` `/principles` `/updates` 已改為 `noindex`，避免重複內容競爭。
- 光暈層已改為全站共用元件，降低邊緣切痕感。
- Theme toggle 補強 `aria-label`、`aria-pressed` 與 focus ring。
- Scroll progress bar 在 `prefers-reduced-motion` 下改為更穩定的行為。
- SEO canonical 改成每頁獨立設定，不再全部指向首頁。
- `deploy.bat` 已支援 `git pull --rebase --autostash`，並自動同步靜態輸出到 GitHub Pages 根目錄。

## Main Edit Map

- 首頁內容：`app/page.tsx`
- 四個主要內頁內容：`app/platform/page.tsx` `app/products/page.tsx` `app/company/page.tsx` `app/contact/page.tsx`
- 全站框架（SEO/字體/Navbar/Footer）：`app/layout.tsx`
- 導覽列項目：`lib/navigation.ts`
- 視覺 token：`styles/tokens.css`
- 全域樣式（噪點/分隔線/focus）：`styles/globals.css`
- 手機版主要調整點：`components/Hero.tsx` `components/site/PageHero.tsx` `components/ui/Card.tsx` `components/Navbar.tsx`

## Key Files

- `app/layout.tsx`
- `app/manifest.ts`
- `app/page.tsx`
- `app/twitter-image.tsx`
- `public/icon.svg`
- `public/apple-icon.svg`
- `public/_headers`
- `wrangler.jsonc`
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/site/PageHero.tsx`
- `components/GlowBG.tsx`
- `components/ProgressBar.tsx`
- `components/ThemeToggle.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Card.tsx`
- `components/ui/Section.tsx`
- `styles/globals.css`
- `styles/tokens.css`
- `tailwind.config.js`

## 常見修改位置

- 首頁文案/區塊：`app/page.tsx`
- `Platform / Products / Company / Contact` 頁面內容：`app/platform/page.tsx` `app/products/page.tsx` `app/company/page.tsx` `app/contact/page.tsx`
- 導覽列：`components/Navbar.tsx`
- Hero 視覺：`components/Hero.tsx`
- 內頁 Hero 視覺：`components/site/PageHero.tsx`
- 全站光暈層：`components/GlowBG.tsx`
- SEO/OG 設定：`lib/seo.ts` `lib/site.ts` `app/layout.tsx`
- 結構化資料：`lib/structured-data.ts` `components/seo/JsonLd.tsx`
- 社群分享圖：`lib/og.tsx` `app/opengraph-image.tsx` `app/twitter-image.tsx`
- App 圖示與 PWA metadata：`public/icon.svg` `public/apple-icon.svg` `app/manifest.ts`
- Footer：`components/layout/Footer.tsx`
- 導覽項目文字：`lib/navigation.ts`
- 色票與字級 token：`styles/tokens.css`
- 全站效果（噪點、focus、divider）：`styles/globals.css`
- Cloudflare Pages 設定：`wrangler.jsonc` `public/_headers`

## Deploy

### Cloudflare Pages Free

這個專案已經是靜態輸出模式，Cloudflare Pages 直接使用 `out/` 即可。

Cloudflare Dashboard 設定：

1. Workers & Pages -> Create -> Pages -> Connect to Git
2. 選 GitHub repo：`hong-design/Zynvrae`
3. Framework preset：`None`
4. Build command：`npm run build`
5. Build output directory：`out`
6. Root directory：`/`
7. Node.js version：`20`

Cloudflare 接上 GitHub 後，部署流程會變成：

```bat
.\deploy-cloudflare.bat
```

或直接：

```bat
git add -A
git commit -m "update site"
git push origin main
```

Cloudflare Pages 會在 `main` 更新後自動建置並發布。

如果想用 CLI 直接上傳：

```bat
npx wrangler login
npx wrangler pages project create zynvrae
npx wrangler pages deploy out --project-name=zynvrae
```

目前 `deploy.bat` 仍保留給 GitHub Pages 舊流程使用。等 Cloudflare 已經接管 `zynvrae.com` 後，再移除 GitHub Pages 舊流程最穩。

### GitHub Pages Legacy

Windows 可直接執行：

```bat
.\deploy.bat
```

若 PowerShell 無法執行，改用：

```bat
cmd /c deploy.bat
```

流程包含：`git pull --rebase --autostash` -> `npm run build` -> 同步 `out/*` 到 root -> `git add/commit` -> `git push`

### Deploy Checklist

1. 先確認本機可編譯：`npm run build`
2. 執行 `.\deploy.bat`
3. 等 GitHub Pages/CDN 1-3 分鐘
4. 瀏覽器用 `Ctrl + F5` 強制重整

### If You See Plain Text (No CSS)

- 通常是舊快取或部署尚未完成，不是 React 壞掉。
- 先看是否能開啟 `https://zynvrae.com/_next/static/css/...css`
- 若 CSS 是 404，重跑 `.\deploy.bat`，並確認 push 成功。

## SEO Notes

- canonical 已改為「每頁獨立設定」：
  - `/` `/platform` `/products` `/company` `/contact`
- 相容路由 `/about` `/platforms` `/principles` `/updates` 已設為 `noindex, follow`，並指向正式 canonical。
- 已補齊 Open Graph / Twitter Card / icons / manifest：
  - `/opengraph-image`
  - `/twitter-image`
  - `/icon.svg`
  - `/apple-icon.svg`
  - `/manifest.webmanifest`
- 已加入 JSON-LD：
  - `Organization`
  - `WebSite`
  - `WebPage`
  - `BreadcrumbList`

## UI Details

- Subtle noise overlay
- Hero radial glow
- Glass navbar
- Card hover glow + focus-visible
- Section reveal + stagger
- Hero micro-timing
- Scroll progress bar
- Gradient divider

## Mobile Notes

- Hero 行動版會自動改成 CTA 直向堆疊（按鈕滿寬）。
- Card 在手機使用較小內距（`p-6`），平板以上再放大。
- Section 標題字級與段落間距已針對手機下修。
- 手機導覽列高度改為 `64px`，並保留觸控安全區。
- 全站已限制行動版橫向溢出，避免底部出現可左右拖動。

## Accessibility

- Keyboard focus-visible
- prefers-reduced-motion support
- Color contrast optimized for dark/light themes

# Zynvrae

Zynvrae 官網前端專案。技術堆疊為 `Next.js App Router + Tailwind CSS + Framer Motion`，正式部署目標為 `Cloudflare Pages Free`。

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Folder Guide

- `app/`：頁面、路由、metadata route，例如 `robots`、`sitemap`、`manifest`、`opengraph-image`
- `components/`：可重用元件，例如 Navbar、Hero、Card、Footer
- `lib/`：設定、SEO helper、導覽資料、工具函式
- `styles/`：全域樣式與 design tokens
- `public/`：靜態資產，例如 icon、圖片、`_headers`
- `wrangler.jsonc`：Cloudflare Pages 設定

## Common Edit Map

- 首頁內容：[app/page.tsx](app/page.tsx)
- `Platform / Products / Company / Contact` 內容：
  - [app/platform/page.tsx](app/platform/page.tsx)
  - [app/products/page.tsx](app/products/page.tsx)
  - [app/company/page.tsx](app/company/page.tsx)
  - [app/contact/page.tsx](app/contact/page.tsx)
- 導覽列樣式：[components/Navbar.tsx](components/Navbar.tsx)
- 導覽列文字：[lib/navigation.ts](lib/navigation.ts)
- Hero 視覺：[components/Hero.tsx](components/Hero.tsx)
- 內頁 Hero 視覺：[components/site/PageHero.tsx](components/site/PageHero.tsx)
- 全站光暈層：[components/GlowBG.tsx](components/GlowBG.tsx)
- 全站樣式：[styles/globals.css](styles/globals.css)
- 色彩與字級 token：[styles/tokens.css](styles/tokens.css)
- SEO/OG 設定：
  - [app/layout.tsx](app/layout.tsx)
  - [lib/seo.ts](lib/seo.ts)
  - [lib/site.ts](lib/site.ts)
  - [lib/structured-data.ts](lib/structured-data.ts)

## Local Preview

安裝套件：

```bash
npm i
```

開發模式：

```bash
npm run dev
```

Windows 建議直接用：

```bat
.\preview.bat
```

預覽網址：`http://localhost:3000`

`preview.bat` 會先：

- 清掉占用 `3000` port 的舊程序
- 清掉 `.next/cache/webpack`
- 再啟動新的開發伺服器

如果 PowerShell 擋住 `npm.ps1`，改用：

```bat
cmd /c npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

`npm run start` 是本機用靜態伺服器預覽 `out/`，不是 `next start`。  
原因是這個專案在 production 使用 `output: export`，正式輸出為靜態網站。

## Cloudflare Pages Deploy

### 一次性設定

1. 到 Cloudflare Dashboard。
2. 如果 `zynvrae.com` 還沒有加入 Cloudflare，先 `Add a site`。
3. 若你要把主網域 `zynvrae.com` 直接掛到 Pages，請先把網域 nameservers 改到 Cloudflare。
4. 進入 `Workers & Pages`。
5. 選 `Create application` -> `Pages` -> `Import an existing Git repository`。
6. 連接 GitHub repo：`hong-design/Zynvrae`。
7. Build settings 請設成：
   - Framework preset: `Next.js (Static HTML Export)`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `out`
8. 建立專案後，Cloudflare 會先給你一個 `*.pages.dev` 網址。

### 接上正式網域 `zynvrae.com`

1. 打開你的 Pages 專案。
2. 進入 `Custom domains`。
3. 選 `Set up a domain`。
4. 加入：
   - `zynvrae.com`
   - `www.zynvrae.com`
5. 等待 SSL 與 DNS 生效。

備註：

- `zynvrae.com` 是 apex domain。依 Cloudflare 官方文件，apex domain 要先把 zone 與 nameservers 放到 Cloudflare。
- 如果你只想先測試，也可以先只掛 `www.zynvrae.com`，再之後補 apex。

### 之後每次部署

日常部署只要把原始碼 push 到 GitHub：

```bat
.\deploy.bat
```

或手動：

```bat
git add -A
git commit -m "update site"
git push origin main
```

Cloudflare Pages 看到 `main` 有新 commit 後，會自動建置並發布。

## Cloudflare Direct Upload

如果你不想走 Git 自動部署，也可以手動上傳：

```bat
npx wrangler login
npx wrangler pages project create zynvrae
npx wrangler pages deploy out --project-name=zynvrae
```

但這個專案比較適合用 Git integration。日常維護最簡單。

## Cloudflare Deploy Checklist

1. 本機先確認可編譯：`npm run build`
2. 確認 Pages 專案已連到 GitHub repo
3. 執行 `.\deploy.bat`
4. 到 Cloudflare Dashboard 看 build log 是否完成
5. 若剛切 DNS，等數分鐘到數小時不等
6. 用 `Ctrl + F5` 強制重整

## Dev Issues On Windows

- 如果你看到 `GET /icon 500`、`GET /manifest.webmanifest 500`，通常是本機 dev server 或 cache 狀態髒掉，不是頁面內容壞掉。
- 如果你看到 `webpack.cache.PackFileCacheStrategy ... ENOENT ... rename`，通常是 `.next/cache/webpack` 快取損壞。
- 最穩定的做法是直接重跑 `.\preview.bat`。

## SEO Notes

- canonical 已改為每頁獨立設定：
  - `/`
  - `/platform`
  - `/products`
  - `/company`
  - `/contact`
- 相容路由 `/about` `/platforms` `/principles` `/updates` 已設為 `noindex, follow`
- 已補齊：
  - Open Graph
  - Twitter Card
  - `manifest.webmanifest`
  - `public/icon.svg`
  - `public/apple-icon.svg`
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

- Hero 行動版會自動改成 CTA 直向堆疊
- Card 在手機使用較小內距，平板以上再放大
- Section 標題字級與段落間距已針對手機下修
- 手機導覽列高度改為 `64px`
- 全站已限制行動版橫向溢出，避免底部出現可左右拖動

## Accessibility

- Keyboard focus-visible
- prefers-reduced-motion support
- Dark/light theme contrast optimized

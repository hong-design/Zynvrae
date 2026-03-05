# Zynvrae Homepage UI Upgrade

以現有首頁文案與區塊順序為基礎，進行純 UI 風格升級（Next.js App Router + Tailwind + Framer Motion）。

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Run

```bash
npm i
npm run dev
```

預覽網址：`http://localhost:3000`

## Build

```bash
npm run build
npm run start
```

## Main Edit Map

- 首頁內容：`app/page.tsx`
- 內頁內容：`app/platform/page.tsx` `app/products/page.tsx` `app/company/page.tsx` `app/contact/page.tsx`
- 全站框架（SEO/字體/Navbar/Footer）：`app/layout.tsx`
- 導覽列項目：`lib/navigation.ts`
- 視覺 token：`styles/tokens.css`
- 全域樣式（噪點/分隔線/focus）：`styles/globals.css`

## Key Files

- `app/layout.tsx`
- `app/page.tsx`
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
- 導覽列：`components/Navbar.tsx`
- Hero 視覺：`components/Hero.tsx`
- 內頁 Hero 視覺：`components/site/PageHero.tsx`
- 全站光暈層：`components/GlowBG.tsx`
- Footer：`components/layout/Footer.tsx`
- 導覽項目文字：`lib/navigation.ts`
- 色票與字級 token：`styles/tokens.css`
- 全站效果（噪點、focus、divider）：`styles/globals.css`

## Deploy

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
- 相容路由 `/about` `/platforms` `/principles` `/updates` 會共用主頁 metadata，避免重複內容競爭。

## UI Details

- Subtle noise overlay
- Hero radial glow
- Glass navbar
- Card hover glow + focus-visible
- Section reveal + stagger
- Hero micro-timing
- Scroll progress bar
- Gradient divider

## Accessibility

- Keyboard focus-visible
- prefers-reduced-motion support
- Color contrast optimized for dark/light themes

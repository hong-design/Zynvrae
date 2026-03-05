# Zynvrae Website (UI/UX Refactor)

以現有官網文案與資訊架構為基礎，重構為 Next.js + Tailwind 的高級極簡科技風介面。

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Routes

- `/`
- `/platform`
- `/products`
- `/company`
- `/contact`

相容導向：`/platforms`、`/about`、`/principles`、`/updates`。

## Design System

- 主背景：`#0A0A0A`
- 次背景：`#111111`
- 卡片背景：`#141414`
- 邊框：`#222`
- 主文字：`#F5F5F5`
- 次文字：`#B5B5B5`
- Accent：`#5CE1E6`

設定檔：
- `styles/tokens.css`
- `app/globals.css`
- `tailwind.config.js`

## Interaction

- 透明 Navbar，滾動後變成 `rgba(0,0,0,0.6)` + backdrop blur
- Scroll progress bar
- Section 進場動畫（Framer Motion）：`opacity 0 -> 1`, `y 24 -> 0`, `duration 0.5`, `stagger 0.1`
- Hero 文字動畫：`opacity 0 -> 1`, `y 20 -> 0`, `duration 0.6`
- 卡片 hover：邊框 accent + `translateY(-4px)`

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Key Files

```text
app/
  layout.tsx
  page.tsx
  platform/page.tsx
  products/page.tsx
  company/page.tsx
  contact/page.tsx
  globals.css
  robots.ts
  sitemap.ts
  opengraph-image.tsx

components/
  layout/Navbar.tsx
  layout/Footer.tsx
  layout/ScrollProgress.tsx
  motion/Reveal.tsx
  site/HomeHero.tsx
  site/PageHero.tsx
  ui/Button.tsx
  ui/Card.tsx
  ui/Container.tsx

styles/
  tokens.css

tailwind.config.js
package.json
```

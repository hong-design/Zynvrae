# Zynvrae Official Website

高級極簡、深色預設、平台型產品敘事官網（Next.js App Router + Tailwind CSS）。

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next/font（Inter + Noto Sans TC）

## Features

- 全站繁體中文內容與產品公司語氣
- 100% RWD（手機優先）
- 深色預設 + 淺色切換（含平滑過渡）
- 可近用：語意標籤、focus-visible、鍵盤可操作 Tabs/Accordion、reduced-motion
- SEO：metadata、OG、Twitter Card、robots、sitemap、動態頁 metadata
- 產品路由：`/products`、`/products/[slug]`
- 更新路由：`/updates`、`/updates/[slug]`（閱讀時間、目錄）

## Project Structure

```text
app/
  about/page.tsx
  contact/page.tsx
  principles/page.tsx
  products/page.tsx
  products/[slug]/page.tsx
  updates/page.tsx
  updates/[slug]/page.tsx
  globals.css
  layout.tsx
  not-found.tsx
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  forms/SubscribeForm.tsx
  layout/Footer.tsx
  layout/Navbar.tsx
  layout/ThemeToggle.tsx
  sections/home/
    Capabilities.tsx
    FinalCta.tsx
    Hero.tsx
    OperatingMindset.tsx
    ProductsTeaser.tsx
    SocialProof.tsx
    UpdatesPreview.tsx
  ui/
    Accordion.tsx
    Badge.tsx
    Button.tsx
    Card.tsx
    Container.tsx
    Input.tsx
    Tabs.tsx

lib/
  navigation.ts
  principles.ts
  products.ts
  site.ts
  updates.ts
  utils.ts

styles/
  tokens.css
```

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

## Deploy (Vercel)

1. Push 到 GitHub。
2. 在 Vercel 匯入此 repository。
3. Framework Preset 選 `Next.js`。
4. Build Command 保持 `next build`。
5. Deploy。

## SEO Notes

- 全站 metadata 在 `app/layout.tsx`
- 站點地圖在 `app/sitemap.ts`
- robots 在 `app/robots.ts`
- OG 圖片在 `app/opengraph-image.tsx`

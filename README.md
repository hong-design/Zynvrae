# Zynvrae Website (UI Layer Upgrade)

以現有網站文案與資訊架構為基礎，進行 Next.js + Tailwind + Framer Motion 的視覺重構。

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
```

## Routes

- `/`
- `/platform`
- `/products`
- `/company`
- `/contact`

相容路由：`/platforms`、`/about`、`/principles`、`/updates`。

## Design Tokens

定義在：`styles/tokens.css`

- colors: `bg`, `bg-2`, `card`, `fg`, `muted`, `border`, `accent`
- radius: `8 / 12 / 16`
- spacing: `16 / 24 / 32 / 48 / 64 / 96 / 120`
- typography: `hero / section / sub / body / label`
- shadow: `soft`, `card-hover-glow`

## UI Details Implemented

1. Subtle noise overlay（base64 PNG + CSS fallback）
2. Hero radial glow（左右雙光暈，深淺色自適應）
3. Glass navbar（scroll 後 blur + 半透明 + 邊框）
4. Card hover glow（accent border + lift + glow）
5. Section reveal（opacity + y + stagger）
6. Hero micro-timing（title / body / CTA 分段延遲）
7. Scroll progress bar（2px top bar）
8. Gradient divider（section 之間漸層分隔）

## Key Structure

```text
app/
  layout.tsx
  globals.css
  page.tsx
  platform/page.tsx
  products/page.tsx
  company/page.tsx
  contact/page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
    ThemeToggle.tsx
    ProgressBar.tsx
    GlowBG.tsx
  motion/
    Reveal.tsx
  site/
    HomeHero.tsx
    PageHero.tsx
  ui/
    Section.tsx
    Divider.tsx
    Card.tsx
    Button.tsx
    Container.tsx

styles/
  tokens.css

tailwind.config.js
package.json
```

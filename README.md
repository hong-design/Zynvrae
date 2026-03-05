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

## Build

```bash
npm run build
npm run start
```

## Key Files

- `app/layout.tsx`
- `app/page.tsx`
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/Section.tsx`
- `components/Card.tsx`
- `components/Divider.tsx`
- `components/GlowBG.tsx`
- `components/ProgressBar.tsx`
- `components/ThemeToggle.tsx`
- `styles/globals.css`
- `styles/tokens.css`
- `tailwind.config.js`

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

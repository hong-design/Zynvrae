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

## Key Files

- `app/layout.tsx`
- `app/page.tsx`
- `components/Navbar.tsx`
- `components/Hero.tsx`
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
- Footer：`components/layout/Footer.tsx`
- 導覽項目文字：`lib/navigation.ts`
- 色票與字級 token：`styles/tokens.css`
- 全站效果（噪點、focus、divider）：`styles/globals.css`

## Deploy

Windows 可直接執行：

```bat
deploy.bat
```

流程包含：`npm run build` -> `git add/commit` -> `git pull --rebase` -> `git push`

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

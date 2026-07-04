# Task 2: Typography & Base Styles

**Context:** Add global CSS with font imports, base styles, and animation keyframes. Task 1 (Next.js setup) is complete.

**Deliverables:**
- `src/styles/typography.css` — Font imports + heading/body styles
- `src/styles/animations.css` — Keyframes for fadeInUp and parallax
- `src/styles/globals.css` — Tailwind directives + CSS reset + imports
- `src/app/layout.js` — Updated to import globals.css
- All committed with message: "style: add typography, animations, and global styles"

**Files to Create/Modify:**
- Create: `src/styles/typography.css`
- Create: `src/styles/animations.css`
- Create: `src/styles/globals.css`
- Modify: `src/app/layout.js` (add import of globals.css)

**typography.css Content:**
- Import fonts from Google Fonts: Playfair Display (400, 700), Inter (400, 500, 600, 700)
- CSS variables: --font-playfair, --font-inter
- h1: clamp(48px, 8vw, 96px), line-height 1.1
- h2: 48px, line-height 1.15
- h3: 28px, line-height 1.2
- body: 16px, line-height 1.6, color #1a1a1a, background-color #f5f3f0
- All headings use font-family var(--font-playfair), weight 700, letter-spacing -0.02em

**animations.css Content:**
- @keyframes fadeInUp: opacity 0→1, transform translateY(20px→0)
- @keyframes parallax: uses --parallax-offset CSS variable
- .reveal-on-scroll class: animation fadeInUp 0.6s cubic-bezier(0.33, 0.66, 0.66, 1) forwards

**globals.css Content:**
- @tailwind base/components/utilities
- @import './typography.css'
- @import './animations.css'
- CSS reset: * { margin: 0; padding: 0; box-sizing: border-box; }
- html { scroll-behavior: smooth; }
- body { background-color #f5f3f0; color #1a1a1a; }
- a { color: inherit; text-decoration: none; }
- button { cursor: pointer; border: none; font-family: inherit; }
- img { max-width: 100%; height: auto; display: block; }

**layout.js Update:**
```jsx
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Steps:**
1. Create src/styles/ directory
2. Create src/styles/typography.css with exact CSS above
3. Create src/styles/animations.css with exact keyframes above
4. Create src/styles/globals.css with exact reset + imports above
5. Update src/app/layout.js to import @/styles/globals.css
6. Test: `npm run build` (no errors)
7. Commit: "style: add typography, animations, and global styles"

**Report to:** `.superpowers/sdd/task-2-report.md`

# Task 1: Project Setup & Dependencies

**Context:** Initialize Next.js 14+ with Tailwind CSS, Framer Motion, and design system.

**Deliverables:**
- Next.js 14+ app (App Router)
- Tailwind CSS with custom theme (colors, fonts, spacing, size tokens)
- Framer Motion installed
- `src/lib/constants.js` exporting all design tokens
- `.env.local` template
- `next.config.js` for image optimization (Unsplash, Pexels)
- All committed

**Exact Colors:**
- nero: #1a1a1a
- avorio: #f5f3f0
- beige: #d4ccc4
- verde: #2d4a3d
- oro: #a89968
- vino: #6b3d3d

**Typography:**
- Playfair Display (serif) + Inter (sans-serif)
- H1: 64–96px, LH 1.1 | H2: 48px, LH 1.15 | H3: 28px, LH 1.2
- Body: 16px, LH 1.6

**Spacing:**
- Section padding: 80px desktop / 40px mobile
- Base unit: 8px

**Animations:**
- Reveal: 600–800ms, cubic-bezier(0.33, 0.66, 0.66, 1)
- Parallax: 30–40% offset

**Steps:**
1. `npx create-next-app@latest --typescript false --tailwind true --app true --eslint true`
2. Install: `framer-motion next-seo`
3. Write `tailwind.config.js` with custom colors, fonts, sizes, spacing
4. Write `src/lib/constants.js` exporting COLORS, BREAKPOINTS, TYPOGRAPHY, ANIMATION
5. Create `.env.local` with placeholder URLs
6. Update `next.config.js` for remotePatterns (unsplash, pexels)
7. Test: `npm run build` and `npm run dev` (no errors)
8. Commit: "setup: initialize Next.js with Tailwind, Framer Motion, design tokens"

**Report to:** `.superpowers/sdd/task-1-report.md`

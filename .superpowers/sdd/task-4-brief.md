# Task 4: Animation Utilities & Hooks

**Context:** Create Framer Motion utilities, custom React hooks for animations, and wrapper components. Task 3 (UI components) complete.

**Deliverables:**
- `src/lib/animations.js` — Framer Motion variants
- `src/hooks/useScrollAnimation.js` — Intersection Observer hook
- `src/hooks/useParallax.js` — Parallax scroll hook
- `src/hooks/useIsMobile.js` — Responsive hook
- `src/components/animations/RevealOnScroll.jsx` — Wrapper component
- `src/components/animations/Parallax.jsx` — Parallax wrapper
- Commit: "feat: add animation utilities, hooks, and wrapper components"

**animations.js:**
Export:
- revealVariant: { hidden: { opacity 0, y 20 }, visible: { opacity 1, y 0, transition: { duration 0.6, ease [0.33, 0.66, 0.66, 1] } } }
- staggerContainer: { hidden: { opacity 0 }, visible: { opacity 1, transition: { staggerChildren: 0.1 } } }

**useScrollAnimation.js (client):**
- `useScrollAnimation(options)` hook
- Returns: { ref, isInView }
- Uses IntersectionObserver to detect when element enters viewport
- Threshold: 0.1
- Once isInView true, unobserve and never re-trigger
- Merge options with defaults

**useParallax.js (client):**
- `useParallax(speed = 0.35)` hook
- Returns: { ref, y }
- Uses useMotionValue and useTransform from Framer Motion
- On scroll, updates y motion value based on element position and scroll speed
- Element offset × speed = parallax amount

**useIsMobile.js (client):**
- `useIsMobile(breakpoint = 768)` hook
- Returns: boolean
- Window resize listener to check if innerWidth < breakpoint
- Initial check on mount

**RevealOnScroll.jsx (client):**
- Props: children, delay (default 0)
- Uses motion.div from Framer Motion
- Uses useScrollAnimation hook for visibility detection
- Applies revealVariant animation (hidden/visible)
- Animate based on isInView state
- Pass delay to transition.delay

**Parallax.jsx (client):**
- Props: children, speed (default 0.35)
- Uses useParallax hook
- Uses useIsMobile hook
- If mobile, return plain div (no parallax)
- If desktop, return motion.div with style={{ y }}
- Ref from useParallax

**Steps:**
1. Create src/lib/animations.js with exact variants
2. Create src/hooks/ directory
3. Create useScrollAnimation.js with IntersectionObserver
4. Create useParallax.js with scroll listener
5. Create useIsMobile.js with resize listener
6. Create src/components/animations/ directory
7. Create RevealOnScroll.jsx wrapper
8. Create Parallax.jsx wrapper
9. Test: npm run build
10. Commit: "feat: add animation utilities, hooks, and wrapper components"

**Report to:** `.superpowers/sdd/task-4-report.md`

**Note:** All client components must have 'use client' directive at top.

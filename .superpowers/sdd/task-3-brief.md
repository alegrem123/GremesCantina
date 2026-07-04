# Task 3: Reusable UI Components

**Context:** Build foundational UI components (Button, Card, Badge, Container, Section). Task 2 (styles) complete.

**Deliverables:**
- `src/components/ui/Button.jsx` — Primary/secondary variants
- `src/components/ui/Card.jsx` — Reusable card container
- `src/components/ui/Badge.jsx` — Wine type badges
- `src/components/common/Container.jsx` — Max-width container
- `src/components/common/Section.jsx` — Section wrapper with padding
- Commit: "feat: add reusable Button, Card, Badge, Container, Section components"

**Button.jsx:**
- Props: variant (primary/secondary), children, href, target, className, ...props
- Primary: bg-verde text-oro, hover: bg-oro text-nero, scale 1.02, shadow
- Secondary: border-2 border-oro text-oro, transparent bg, hover: bg-oro bg-opacity-10
- If href provided, render <a>, else <button>
- Tailwind classes: px-8 py-4 rounded-sm font-inter font-medium transition-all duration-200 ease-out

**Card.jsx:**
- Props: children, className
- Tailwind: bg-avorio rounded-sm border border-beige hover:border-oro transition-colors p-8

**Badge.jsx:**
- Props: children, variant (default/secondary)
- Default: bg-verde text-avorio
- Secondary: bg-beige text-nero
- Tailwind: inline-block px-3 py-1 text-xs font-medium rounded-sm

**Container.jsx:**
- Props: children, className
- Tailwind: max-w-5xl mx-auto px-6 md:px-8 {className}

**Section.jsx:**
- Props: children, className, id
- Tailwind: py-section-mobile md:py-section {className}
- Section padding: 40px mobile, 80px desktop (already in Tailwind config from Task 1)

**Steps:**
1. Create src/components/ui/ directory
2. Create src/components/common/ directory
3. Create Button.jsx with exact code (variants, link handling)
4. Create Card.jsx with exact Tailwind
5. Create Badge.jsx with exact variants
6. Create Container.jsx with max-width + responsive padding
7. Create Section.jsx with section padding
8. Run `npm run build`
9. Commit: "feat: add reusable Button, Card, Badge, Container, Section components"

**Report to:** `.superpowers/sdd/task-3-report.md`

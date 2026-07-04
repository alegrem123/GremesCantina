# Task 12: Static Pages

**Context:** Create 5 static pages (storia, territorio, degustazioni, galleria, contatti). Task 11 (wine detail) complete.

**Deliverables:**
- `src/app/storia/page.js` — Story page with hero image
- `src/app/territorio/page.js` — Territory page with parallax
- `src/app/degustazioni/page.js` — Tastings page with experiences
- `src/app/galleria/page.js` — Gallery page with masonry
- `src/app/contatti/page.js` — Contact page with form + info
- Commit: "feat: add all static pages (storia, territorio, degustazioni, galleria, contatti)"

**Each page:**
- Export metadata with title, description
- Hero section with background image
- Content sections with RevealOnScroll
- Import from pages.json for content

**Steps:**
1. Create src/app/storia/page.js: Hero + story text from pages.json
2. Create src/app/territorio/page.js: Hero + parallax + territory text
3. Create src/app/degustazioni/page.js: Hero + experiences grid + contact button
4. Create src/app/galleria/page.js: Title + 6-image masonry
5. Create src/app/contatti/page.js: 2-col layout, contact info (left), ContactForm (right)
6. All use Section, Container, Image, RevealOnScroll, Parallax
7. Test: npm run build
8. Commit: "feat: add all static pages (storia, territorio, degustazioni, galleria, contatti)"

**Report to:** `.superpowers/sdd/task-12-report.md`

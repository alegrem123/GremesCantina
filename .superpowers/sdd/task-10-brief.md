# Task 10: Homepage (src/app/page.js)

**Context:** Assemble all homepage sections into one page. Task 9 (forms) complete.

**Deliverables:**
- `src/app/page.js` — Homepage assembling all 7 sections
- Export metadata with title, description, OpenGraph
- Commit: "feat: implement homepage with all sections"

**Content:**
- Export metadata: title, description, openGraph (title, description, images)
- Default export Home() component
- Render in order:
  1. Hero
  2. BrandIntro
  3. WinesSection
  4. TerritorySection
  5. TastingsSection
  6. GallerySection
  7. NewsletterSection

**Metadata:**
```
title: 'Cantina Gremes — Vini Artigianali della Valle di Non'
description: 'Scopri i vini biologici di Cantina Gremes. Tradizione, territorio, qualità nel cuore della Valle di Non.'
openGraph: {
  title: 'Cantina Gremes',
  description: 'Vini artigianali biologici della Valle di Non',
  images: [{url: (unsplash vineyard image), width: 1200, height: 630}]
}
```

**Steps:**
1. Create/replace src/app/page.js
2. Import all 7 section components
3. Export metadata
4. Export default Home() that returns <><Hero /><BrandIntro />... etc
5. Test: npm run build
6. Commit: "feat: implement homepage with all sections"

**Report to:** `.superpowers/sdd/task-10-report.md`

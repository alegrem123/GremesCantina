# Task 11: Dynamic Wine Detail Page

**Context:** Create dynamic wine detail pages. Task 10 (homepage) complete.

**Deliverables:**
- `src/app/vini/page.js` — Wine listing page
- `src/app/vini/[slug]/page.js` — Dynamic wine detail page
- generateStaticParams for static generation
- generateMetadata for each wine
- Commit: "feat: add wine listing and dynamic wine detail pages"

**vini/page.js:**
- Export metadata: title, description
- Section (bg-nero text-avorio, py-24):
  - Title: "I Nostri Vini" (h1 Playfair)
  - Subtitle: "Una selezione curata di vini artigianali..."
- Section (bg-avorio):
  - 3-column grid: WineCard for each wine from wines.json
  - Staggered RevealOnScroll (delay idx * 0.1)

**vini/[slug]/page.js:**
- generateStaticParams: return wines.map(w => ({slug: w.slug}))
- generateMetadata(params): find wine by slug, return title, description, og:image
- If wine not found: return 404 section
- Breadcrumb: Home > Vini > Wine Name
- WineHero component
- Description section (bg-nero text-avorio):
  - Split wine.description into 3 sections with headers: "Il Territorio", "La Vinificazione", "Il Carattere"
- TastingNotes component
- FoodPairings component
- TechnicalDetails component
- CTA buttons (bg-nero text-avorio):
  - "Acquista Online" (primary, target="_blank")
  - "Richiedi Informazioni" (secondary → /contatti)
- Related wines section (if relatedWines exist):
  - 3-column grid: WineCard for related wines
  - Staggered RevealOnScroll

**Steps:**
1. Create src/app/vini/ directory
2. Create vini/page.js with listing
3. Create vini/[slug]/ directory
4. Create vini/[slug]/page.js with dynamic routes + metadata
5. Import: wines.json, WineCard, WineHero, TastingNotes, FoodPairings, TechnicalDetails, Button, Container, Section, RevealOnScroll
6. Test: npm run build
7. Commit: "feat: add wine listing and dynamic wine detail pages"

**Report to:** `.superpowers/sdd/task-11-report.md`

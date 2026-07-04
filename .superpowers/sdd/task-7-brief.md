# Task 7: Homepage Section Components

**Context:** Build 7 homepage sections. Task 6 (layout) complete.

**Deliverables:**
- `src/components/sections/Hero.jsx`
- `src/components/sections/BrandIntro.jsx`
- `src/components/sections/WinesSection.jsx`
- `src/components/sections/TerritorySection.jsx`
- `src/components/sections/TastingsSection.jsx`
- `src/components/sections/GallerySection.jsx`
- `src/components/sections/NewsletterSection.jsx`
- Commit: "feat: add all homepage section components with animations"

**Hero.jsx:**
- Full-screen hero (h-screen flex items-center justify-center)
- Background: Parallax-wrapped Image (Unsplash vineyard/sunset)
- Overlay: absolute inset-0 bg-nero bg-opacity-30
- Content (centered, z-10, text-avorio, max-w-3xl):
  - Logo/brand text or h1: "Tradizione che respira il territorio"
  - p: "Vini artigianali dal cuore della Valle di Non"
  - 2 buttons: "Scopri i Vini" (primary) + "Prenota Degustazione" (secondary)
- Uses Parallax component (no speed specified = default 0.35)
- Image priority

**BrandIntro.jsx:**
- Section bg-avorio
- 2-column grid (desktop), 1 column (mobile)
- Left: RevealOnScroll wrapper with title (h2 Playfair), paragraph (body), CTA button "Leggi la storia completa" → /storia
- Right: RevealOnScroll (delay 0.1) with image (proprietario)
- Import from pages.json: story title + content
- Content is multiline, render with whitespace-pre-line

**WinesSection.jsx:**
- Section bg-nero text-avorio
- Title "I Nostri Vini" (h2 Playfair, centered)
- 3-column grid (md:grid-cols-3, staggered gap-8)
- Import wines from wines.json
- For each wine: WineCard component (to be created Task 8), wrapped in RevealOnScroll with delay index*0.1
- Uses Container

**TerritorySection.jsx:**
- Section bg-avorio
- 2-column grid (desktop)
- Left: RevealOnScroll + Parallax (speed 0.25) with image
- Right: RevealOnScroll (delay 0.1) with h2, paragraph, CTA "Scopri i Vigneti" → /territorio
- Import from pages.json: territory title + content
- Uses Container

**TastingsSection.jsx:**
- Full-screen section with background image (Parallax speed 0.3)
- Overlay: bg-nero bg-opacity-40
- Content (relative z-10, max-w-2xl):
  - RevealOnScroll: h2, headline "Momentaneamente sospese", description
  - Bullet list of 3 experiences
  - Button "Lascia il tuo contatto" → /contatti
- Import from pages.json: degustazioni data (title, headline, description, experiences)

**GallerySection.jsx:**
- Section bg-avorio
- Title "Momenti da Gremes" (h2 centered, RevealOnScroll)
- Masonry grid (md:grid-cols-3, gap-6)
- 6 Unsplash images in gallery
- Each image: aspect-square, overflow-hidden, group hover:scale-105 transition
- Staggered RevealOnScroll (delay idx * 0.05)

**NewsletterSection.jsx:**
- Section bg-nero text-avorio
- Centered max-w-2xl
- h2: "Rimani connesso con Gremes"
- p: "News, rilasci, storie dal territorio..."
- RevealOnScroll wrapper for content
- Placeholder for NewsletterForm component (to be created Task 9)

**Steps:**
1. Create src/components/sections/ directory
2. Create all 7 components with exact structure above
3. All use 'use client' only if they use client hooks (Hero, BrandIntro, WinesSection, etc. need it for RevealOnScroll)
4. Import: Parallax, RevealOnScroll, Button, Section, Container, wines.json, pages.json, Image
5. Test: npm run build
6. Commit: "feat: add all homepage section components with animations"

**Report to:** `.superpowers/sdd/task-7-report.md`

**Gallery images (6 Unsplash):**
- https://images.unsplash.com/photo-1596838805908-e65e2a2eb6d5
- https://images.unsplash.com/photo-1559925393-641a415ac8db
- https://images.unsplash.com/photo-1510812431401-41d2cab2707d
- https://images.unsplash.com/photo-1608270861620-7c3f7ccbe29f
- https://images.unsplash.com/photo-1584367694821-e6c6dac3f14d
- https://images.unsplash.com/photo-1609708536965-244d83b47979
(Add ?w=600&h=600&fit=crop to URLs)

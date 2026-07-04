# Task 8: Wine Components

**Context:** Build wine-specific components used in wine listing and detail pages. Task 7 (sections) complete.

**Deliverables:**
- `src/components/wine/WineCard.jsx` — Card for wine listing
- `src/components/wine/WineHero.jsx` — Wine detail hero
- `src/components/wine/TastingNotes.jsx` — 4-card tasting notes grid
- `src/components/wine/FoodPairings.jsx` — Food pairing cards
- `src/components/wine/TechnicalDetails.jsx` — Collapsible technical specs
- Commit: "feat: add wine detail components (hero, tasting notes, pairings, details)"

**WineCard.jsx:**
- Props: wine (object)
- Link wrapper to /vini/{wine.slug}
- Card component with:
  - Image: wine.image, hover scale-105
  - h3: wine.name (Playfair)
  - p: wine.vintage | wine.type (gray, opacity-60)
  - p: wine.shortDescription (2 lines, opacity-70)
  - Text: "Scopri Dettagli →" (oro, appears on hover)
- Hover: border-oro, scale button text

**WineHero.jsx:**
- Section bg-beige
- 2-column layout (desktop)
- Left: Image (wine.image, 300×450, centered in max-w-xs)
- Right: Info section
  - Badge: wine.type
  - h1: wine.name (Playfair)
  - p: "Annata {vintage}" (opacity-60, 2xl)
  - p: wine.description (body, opacity-80, mb-8)
  - Stats grid (bg-nero text-avorio, 2 columns):
    - Vitigno: wine.grape
    - Zona: wine.subregion
    - Altitudine: wine.altitude
    - Volume: 750ml | wine.technical.abv
- Uses Container, Section

**TastingNotes.jsx:**
- Props: tasting (object with color, aroma[], palate, finish)
- Section bg-avorio
- h2 "Note di Degustazione" (centered, Playfair)
- 2×2 grid (md:grid-cols-2, desktop), staggered RevealOnScroll
- 4 cards (Colore, Profumo, Palato, Persistenza):
  - Emoji icon (🍷, 👃, 👅, ✨)
  - h3: label
  - p: value (join aroma array with ", ")
- border-2 border-beige, hover:border-oro

**FoodPairings.jsx:**
- Props: pairings (array of {name, description})
- Section bg-nero text-avorio
- h2 "Suggerimenti di Abbinamento" (Playfair, centered)
- 3-column grid (md:grid-cols-3), staggered RevealOnScroll
- Each pairing card:
  - Image (placeholder from pairingImages array)
  - h3: pairing.name (Playfair)
  - p: pairing.description (text-sm, opacity-80)
- Card bg-nero border-beige, hover:border-oro

**TechnicalDetails.jsx:**
- Props: technical (object), servingTemp (string)
- Section bg-avorio
- Collapsible button (bg-nero text-avorio):
  - h3: "Dettagli Tecnici"
  - Chevron icon (▼) that rotates on toggle
  - useState for isOpen
- If isOpen, grid (md:grid-cols-2, gap-6) with:
  - Fermentazione, Invecchiamento, Grado alcolico, Acidità, Produzione, Metodo, Temperatura di servizio
  - Each item: label (xs uppercase gray), value (text-sm)

**Steps:**
1. Create src/components/wine/ directory
2. Create WineCard.jsx with link + image + CTA
3. Create WineHero.jsx with 2-col layout + stats grid
4. Create TastingNotes.jsx with 4-card emoji icons
5. Create FoodPairings.jsx with 3-column grid (use fake images for now)
6. Create TechnicalDetails.jsx with collapsible section
7. All use 'use client' where needed (FoodPairings, TastingNotes need RevealOnScroll)
8. Import: Button, Card, Badge, Section, Container, RevealOnScroll, Image
9. Test: npm run build
10. Commit: "feat: add wine detail components (hero, tasting notes, pairings, details)"

**Report to:** `.superpowers/sdd/task-8-report.md`

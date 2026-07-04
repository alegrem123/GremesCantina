# Task 5: Create Data Models

**Context:** Create static JSON data files for wines, pages, and config. Task 4 (animations) complete.

**Deliverables:**
- `src/data/wines.json` — 3 flagship wines with full details
- `src/data/pages.json` — Content for story, territory, degustazioni, gallery
- `src/data/config.json` — Site config (email, shop URLs, address, social)
- Commit: "data: add wine catalog, page content, and site configuration"

**wines.json: 3 wines**

Wine 1: Teroldego Riserva 2020 (Rosso)
- id: 1
- slug: teroldego-riserva-2020
- name: Teroldego Riserva
- vintage: 2020
- type: Rosso
- region: Valle di Non
- subregion: Maso Plotegher
- grape: Teroldego
- description: ~300 words about the wine
- shortDescription: 2 lines
- image: unsplash image URL (vineyard/wine related)
- altitude: 450–550m
- tasting: { color, aroma: [], palate, finish }
- technical: { fermentation, aging, abv, acidity, production, method }
- pairings: [{ name, description }, ...] (3 pairings)
- servingTemperature: 16–18°C
- externalLink: https://vivino.com/...
- relatedWines: [2, 3] (IDs)

Wine 2: Bianco di Gremes 2022 (Bianco)
- Similar structure
- id: 2, slug: bianco-gremes-2022
- Different descriptions, tasting notes, pairings
- externalLink: Vivino
- relatedWines: [1, 3]

Wine 3: Spumante Brut NV (Spumante)
- id: 3, slug: spumante-brut-nv
- vintage: NV
- Similar structure
- relatedWines: [1, 2]

**pages.json:**
- story: { title, heroImage, content (multiline text) }
- territory: { title, heroImage, content }
- degustazioni: { title, heroImage, headline, description, experiences: [{ name, duration, description }, ...] }
- gallery: { title }

**config.json:**
```json
{
  "site": {
    "name": "Cantina Gremes",
    "description": "Cantina artigianale...",
    "url": "https://gremes.com",
    "email": "info@gremes.com",
    "phone": "+39 0463 XXXXXX"
  },
  "shop": {
    "vivino": "https://vivino.com/gremes",
    "tannico": "https://tannico.com/gremes"
  },
  "address": {
    "street": "Maso Plotegher",
    "city": "Valle di Non, TN",
    "country": "Italia"
  },
  "social": {
    "instagram": "https://instagram.com/cantinagremes",
    "facebook": "https://facebook.com/cantinagremes"
  }
}
```

**Steps:**
1. Create src/data/ directory
2. Create wines.json with 3 wines (exact structure above, realistic content)
3. Create pages.json with story, territory, degustazioni, gallery
4. Create config.json with site, shop, address, social
5. Verify JSON syntax (no parse errors)
6. Test: npm run build
7. Commit: "data: add wine catalog, page content, and site configuration"

**Report to:** `.superpowers/sdd/task-5-report.md`

**Note:** Use Unsplash URLs for images (e.g., https://images.unsplash.com/photo-XXXXX?w=600&h=900&fit=crop)

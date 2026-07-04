# Task 6: Layout Components

**Context:** Build Header, Footer, Navigation components that wrap all pages. Task 5 (data) complete.

**Deliverables:**
- `src/components/layout/Navigation.jsx` — Desktop + mobile nav menu
- `src/components/layout/Header.jsx` — Sticky header with logo, nav, CTA
- `src/components/layout/Footer.jsx` — Footer with links, contact, newsletter
- Update `src/app/layout.js` to include Header and Footer
- Commit: "feat: add Header, Footer, Navigation components with sticky behavior"

**Navigation.jsx (client):**
- Props: mobile (boolean)
- navItems array: Home (/), Storia, Territorio, Vini, Degustazioni, Galleria, Contatti
- Desktop (mobile=false): flex gap-8, horizontal menu, hidden on <md
- Mobile (mobile=true): Hamburger icon, full-screen overlay on click, vertical menu
  - Burger icon: SVG (3 horizontal lines) top-right, <md only
  - Overlay: bg-nero bg-opacity-95, full-screen, flex flex-col items-center justify-center
  - Close button (X) on overlay
  - Menu items: Playfair 24px, staggered fade-in
  - onClick closes menu
- useState for isOpen state

**Header.jsx (client):**
- Sticky header, z-50
- Initially: transparent bg
- On scroll >50px: bg-avorio, shadow-md (300ms transition)
- Layout: flex items-center justify-between py-6
- Left: Logo "GREMES" (Link to /, Playfair 24px, hover:text-oro)
- Center: Navigation component (desktop only)
- Right: Navigation component mobile variant + Button CTA "Prenota Degustazione"
- Uses Container for max-width

**Footer.jsx (client):**
- bg-nero text-avorio py-section
- 4-column grid (md:grid-cols-4) + newsletter + copyright
- Column 1 (Brand): Logo GREMES (h3 Playfair), 2-line description
- Column 2 (Navigation): Links to Home, Storia, Vini, Degustazioni, Contatti
- Column 3 (Contact): Address, email, phone from config
- Column 4 (Social): Instagram, Facebook links from config
- Newsletter border-t with NewsletterForm component (to be created in Task 9)
- Copyright: border-t, centered, small text, opacity-60

**Steps:**
1. Create src/components/layout/ directory
2. Create Navigation.jsx with desktop + mobile menu
3. Create Header.jsx with sticky behavior and logo
4. Create Footer.jsx with all 4 columns + newsletter
5. Update src/app/layout.js:
   - Import Header, Footer
   - Import config from @/data/config.json
   - Update metadata title/description
   - Wrap children with <Header>, <main>, <Footer>
6. Test: npm run build
7. Commit: "feat: add Header, Footer, Navigation components with sticky behavior"

**Report to:** `.superpowers/sdd/task-6-report.md`

**Important:**
- All use 'use client' directive
- Import Button, Container from previous tasks
- Header scroll listener uses useState + useEffect
- Mobile menu overlay uses position fixed z-40
- All Tailwind classes use custom colors (nero, avorio, beige, verde, oro)
- Footer import config and display real contact/social info

# Task 13: SEO Meta Tags & JSON-LD

**Context:** Add SEO helpers and structured data. Task 12 (pages) complete.

**Deliverables:**
- `src/lib/seo.js` — Helper functions for JSON-LD schemas
- Update all page.js files with structured data
- Commit: "feat: add SEO meta tags and JSON-LD structured data helpers"

**seo.js:**
- Export generateOrganizationSchema(): LocalBusiness schema with Cantina Gremes info
- Export generateWineProductSchema(wine): Product schema for wines

**Steps:**
1. Create src/lib/seo.js with 2 export functions
2. Add <script type="application/ld+json"> to wine detail page using generateWineProductSchema
3. Add <script type="application/ld+json"> to homepage using generateOrganizationSchema
4. Test: npm run build
5. Commit: "feat: add SEO meta tags and JSON-LD structured data helpers"

**Report to:** `.superpowers/sdd/task-13-report.md`

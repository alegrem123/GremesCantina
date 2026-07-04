# Task 9: Form Components

**Context:** Create reusable form components. Task 8 (wine) complete.

**Deliverables:**
- `src/components/forms/FormInput.jsx` — Reusable input wrapper
- `src/components/forms/NewsletterForm.jsx` — Email signup
- `src/components/forms/ContactForm.jsx` — Contact form with wine field
- Commit: "feat: add form components (input, newsletter, contact)"

**FormInput.jsx:**
- Props: label, name, type, placeholder, required, ...props
- Input border-2 border-beige, focus:border-oro, focus:ring-0
- Label (if provided): text-sm font-medium
- Required asterisk: text-oro

**NewsletterForm.jsx (client):**
- Props: none
- useState: email, message
- Flex form: input + button (sm:flex-row, gap-3, mobile stacks)
- Input: type="email", placeholder="La tua email", value, onChange
- Button: "Iscriviti" (primary)
- On submit: preventDefault, set message "Grazie! Controlla...", clear email, setTimeout 3s
- Message display: text-sm text-oro mt-3 text-center

**ContactForm.jsx (client):**
- Props: winePreFill (string, optional)
- useState: { name, email, phone, wine, message }
- handleChange, handleSubmit
- FormInput for: name, email, phone, wine (conditionally)
- Textarea for message (rows=5)
- On submit: preventDefault, show success message, clear form
- Button: "Invia Messaggio"
- Message: "Messaggio inviato! Ti contatteremo presto."

**Steps:**
1. Create src/components/forms/ directory
2. Create FormInput.jsx with label + input styling
3. Create NewsletterForm.jsx with email input + subscribe button
4. Create ContactForm.jsx with name, email, phone, wine, message
5. Use 'use client' for forms (useState)
6. All use custom button styling from Button component
7. Test: npm run build
8. Commit: "feat: add form components (input, newsletter, contact)"

**Report to:** `.superpowers/sdd/task-9-report.md`

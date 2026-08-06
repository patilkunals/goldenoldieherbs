# Directive: Goldenoldieherbs Static Web App

## 1. Overview
Build a static web application for **Goldenoldieherbs** (Ayurvedic clinic, Panchkarma center, multi-specialist hub, B2B distributor, Amazon India seller).

---

## 2. Design System
* **Style:** Serene, ultra-modern, luxury wellness spa meets clean clinical.
* **Palette:**
  * Primary: `#1E3A2B` (Forest Green)
  * Secondary: `#D4AF37` (Gold Accent)
  * Background: `#FBF9F5` (Parchment)
  * Dark Neutral: `#1F2421` (Charcoal)
  * Accent: `#B85B35` (Terracotta)
* **Fonts:** `Playfair Display` (Headings), `Plus Jakarta Sans` (Body)

---

## 3. Tech Stack
* **Framework:** Astro OR Next.js (Static Export `output: 'export'`)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Libraries:** Shadcn UI / Radix UI, Aceternity UI
* **Animation:** Framer Motion, Lenis Smooth Scroll
* **Icons:** Lucide React

---

## 4. Section Structure
1. **Nav:** Sticky Glassmorphism. Logo, Navigation Links, "Book Consultation" CTA, "Buy on Amazon India" CTA.
2. **Hero:** Full-bleed background, headline, floating stat badges, dual CTAs ("Explore Panchkarma", "Consult Specialist").
3. **Bento Grid:** 4 pillars (Clinic, Panchkarma, Multi-Specialists, B2B/Amazon Direct).
4. **Panchkarma Hub:** Tabbed/Accordion showcase of 5 detox therapies (images, duration, steps).
5. **Doctor Directory:** Filterable specialist cards + appointment modal.
6. **Products & B2B:** Top products linked to Amazon India + B2B wholesale inquiry CTA.
7. **Testimonials:** Smooth infinite marquee slider.
8. **Footer:** Inquiry form, map placeholder, hours, legal/Ayurvedic disclaimer.

---

## 5. Key Features & Animations
* Lenis momentum smooth scrolling.
* Scroll-triggered reveal/stagger animations via Framer Motion.
* Soft gold glow hover effects.
* Booking & B2B slide-over modal drawers.

---

## 6. Execution Steps
1. Configure Tailwind tokens, fonts, and base layouts.
2. Store mock data in `src/data/` (`doctors.ts`, `panchkarma.ts`, `products.ts`).
3. Build modular UI components and modals.
4. Construct main page, wire up animations, and optimize for mobile responsive layout.
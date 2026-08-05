# 🌿 Goldenoldieherbs: Project Master Specification & AI Execution Plan

## 1. Executive Summary & Business Pillars
[cite_start]**Goldenoldieherbs** is an ultra-modern, static web application designed for a premier multi-faceted Ayurvedic brand[cite: 1, 2, 13].

### Core Business Pillars
1. [cite_start]**Ayurvedic Clinic:** Holistic consultations & root-cause diagnostic care[cite: 2].
2. [cite_start]**Panchkarma Center:** Specialized rejuvenation and detox therapies[cite: 2].
3. [cite_start]**Multi-Specialist Clinic Hub:** Dedicated profiles for doctors specialized across various Ayurvedic disciplines[cite: 2].
4. [cite_start]**B2B Medicine Distribution:** Wholesale supplier channel and inquiry system[cite: 2].
5. [cite_start]**E-Commerce Direct Integration:** Direct purchase links for Ayurvedic products selling on Amazon India[cite: 2].

---

## 2. Visual Aesthetic & Design Tokens

### Aesthetics & Tone
* [cite_start]**Aesthetic:** Ultra-modern luxury spa meets modern clinical excellence (inspired by *Rahayu* and *Ayurvishwa*)[cite: 2, 3].
* [cite_start]**Vibe:** Serene, authoritative, clean, earthy, and warm[cite: 2].

### Brand Color Palette (Tailwind CSS Config)
* [cite_start]**Primary (Deep Botanical):** `#1E3A2B` (Forest Green) 
* [cite_start]**Secondary (Golden Accent):** `#D4AF37` (Antique Gold) 
* [cite_start]**Neutral Light (Background):** `#FBF9F5` (Parchment Sand) 
* **Neutral Dark (Text):** `#1F2421` (Slate Charcoal)
* **Accent (Terracotta):** `#B85B35` (Warm Highlight)

### Typography
* **Headings:** `Playfair Display` (Serif)
* **Body Text:** `Plus Jakarta Sans` or `Inter` (Sans-serif)

---

## 3. Technology Stack & Dependencies

| Layer | Recommended Technology | Purpose & Benefits |
| :--- | :--- | :--- |
| **Language** | TypeScript | [cite_start]Clean data structures & strict type safety[cite: 28, 29]. |
| **Framework** | **Astro** *(Best speed)* OR **Next.js** *(Static Export)* | [cite_start]Fast static HTML generation, zero JS by default (Astro), or rich React ecosystem[cite: 15, 16, 18, 19, 29]. |
| **Styling** | Tailwind CSS (v3 / v4) | [cite_start]Utility-first CSS using configured design tokens[cite: 21, 30]. |
| **UI Component Primitives** | Shadcn UI / Radix UI | [cite_start]Accessible tabs, accordions, and dialog modals[cite: 27, 30]. |
| **Special UI Libraries** | Aceternity UI / Magic UI | [cite_start]Glowing Bento Grids, glassmorphism headers, marquee cards. |
| **Animations** | Framer Motion + Lenis Smooth Scroll | [cite_start]Fluid entrance animations, tab transitions, and smooth scroll momentum[cite: 23, 24, 31]. |
| **Icons** | Lucide React | [cite_start]Modern vector icon set[cite: 25, 31]. |
| **Hosting** | Vercel, Cloudflare Pages, or Netlify | [cite_start]Free, global CDN static site hosting[cite: 19, 32]. |

---

## 4. Codebase Architecture & Directory Structure

```text
goldenoldieherbs/
[cite_start]├── PROMPT.md                     <-- Master AI Directive File [cite: 7, 9]
├── README.md
├── package.json
[cite_start]├── tailwind.config.js            <-- Brand Palette & Fonts 
├── public/                       <-- Static images, icons, and assets
└── src/
    ├── app/ (or pages/)          <-- Main application layout & routes
    ├── components/
    │   ├── layout/               <-- Navbar, Footer, Mobile Navigation
    [cite_start]│   ├── home/                 <-- HeroSection, BentoGrid, PanchkarmaHub, etc. [cite: 12]
    │   └── ui/                   <-- Buttons, Modals, SmoothScroll wrappers
    ├── data/                     <-- Static data (doctors.ts, panchkarma.ts, products.ts) 
    └── lib/                      <-- Helpers & Framer Motion animation variants
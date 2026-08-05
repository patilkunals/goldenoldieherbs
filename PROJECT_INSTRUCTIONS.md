# Project Directive: Goldenoldieherbs Ultra-Modern Static Website

## 1. Project Context & Overview
You are an expert frontend architect and UI/UX designer. Your task is to build a high-performance, ultra-modern, static web application for **Goldenoldieherbs**, a premier multi-faceted Ayurvedic brand. 

### Key Business Pillars
1. **Ayurvedic Clinic:** Holistic consultations & personalized care.
2. **Panchkarma Center:** Specialized rejuvenation and detox therapies.
3. **Multi-Specialist Clinic Hub:** Profiles for various specialized Ayurvedic doctors.
4. **B2B Medicine Distribution:** Wholesale and B2B inquiry channel.
5. **E-Commerce Direct Links:** Fast-path integration to buy products on Amazon India.

---

## 2. Design System & Aesthetics Guidelines

### Visual Inspiration & Vibe
* **Inspirations:** Modern luxury meets traditional wellness (inspired by *Rahayu* spa aesthetic and *Ayurvishwa* comprehensive clinic structure).
* **Tone:** Serene, authoritative, ultra-clean, clinical yet earthy, warm, and inviting.

### Color Palette (Tailwind CSS Config)
* **Primary (Deep Botanical):** `#1E3A2B` / `#11261D` (Rich forest green)
* **Secondary (Golden Accent):** `#D4AF37` / `#C5A059` (Warm antique gold)
* **Neutral Light (Sand/Parchment):** `#FBF9F5` / `#F4EFE6` (Soft natural backdrop)
* **Neutral Dark (Charcoal/Slate):** `#1F2421` (High-contrast text)
* **Accent (Terracotta/Warm Earth):** `#B85B35` (For subtle highlights/badges)

### Typography
* **Headings:** Modern Serif (`Playfair Display`, `Cormorant Garamond`, or `Cinzel`)
* **Body:** Clean Sans-serif (`Plus Jakarta Sans`, `Inter`, or `Outfit`)

---

## 3. Recommended Tech Stack
* **Framework:** Next.js (Static Export / SSG)  + React/HTML + Tailwind CSS
* **Styling:** Tailwind CSS v3+ with custom extended theme
* **Icons:** Lucide-react / FontAwesome
* **Animations:** Framer Motion OR GSAP + Locomotive Scroll / Lenis Smooth Scroll
* **UI Components:** Radix UI / Shadcn UI / Aceternity UI (for ultra-modern effects)

---

## 4. Architecture & Page/Section Breakdown

Generate a single-page long-form landing page or multi-route static site with the following key components:

### A. Navigation Bar (Sticky / Glassmorphism)
* Brand Logo ("Goldenoldieherbs" with a gold leaf emblem).
* Links: Clinics, Panchkarma, Specialists, B2B Distribution, Products.
* Action Buttons: "Book Consultation" (Primary), "Buy on Amazon India" (Secondary Gold Badge with Amazon logo).

### B. Hero Section (Ultra-Modern Intro)
* High-impact split or full-bleed background featuring high-resolution imagery/video (herbal aesthetics, serene clinic setting).
* Headline: *"Ancient Ayurvedic Wisdom Meets Modern Clinical Excellence."*
* Subtle floating feature badges (e.g., "50,000+ Patients Healed", "Certified Specialists", "Authentic Formulations").
* Interactive CTA: Dual buttons for "Explore Panchkarma" and "Consult a Specialist".

### C. Core Pillars Grid (Interactive Bento Box)
A modern Bento Grid showcasing the 4 main arms of Goldenoldieherbs:
1. **Ayurvedic Clinic:** Root-cause diagnostics, lifestyle alignment.
2. **Panchkarma Center:** Detoxification, Vamana, Virechana, Basti, Nasya, Raktamokshana.
3. **Multi-Specialist Team:** Dedicated care for Skin, Joint, Digestive, and Metabolic health.
4. **Herbal Formulations & Distribution:** Certified B2B supplier and top-rated Amazon seller.

### D. Panchkarma Experience Hub
* Horizontal tabbed interface or interactive accordion highlighting the 5 Detox Therapies with rich imagery, benefits, duration, and process step-by-step.

### E. Doctor & Specialist Directory
* Filterable grid/carousel featuring modern doctor cards:
  * Doctor Photo, Name, Designation, Specialization (e.g., *Kayachikitsa*, *Shalya Tantra*, *Dermatology*).
  * "Book Appointment" modal trigger per doctor.

### F. Ayurvedic Medicine & Amazon India Showcase
* E-commerce highlight strip showcasing top formulations (e.g., Chyawanprash, Herbal Oils, Immunity Boosters).
* Product cards with star ratings, benefits, and direct **"Buy on Amazon India"** buttons with official badge styling.
* Dedicated **B2B Bulk Inquiry** CTA box for medicine distributors/pharmacies.

### G. Patient Testimonials & Case Studies
* Modern marquee or smooth carousel featuring verified patient stories and before/after recovery metrics.

### H. Footer & Footer Contact
* Quick booking form / inquiry popup modal.
* Map integration placeholder, address, clinic hours.
* Social handles, legal links, disclaimer (Ayurvedic medical disclaimer).

---

## 5. Animation & Interactive Specifications

1. **Smooth Scrolling:** Implement Lenis or Locomotive scroll for fluid movement.
2. **Scroll-Triggered Reveals:** Subtle fade-ups and stagger animations for cards using Framer Motion.
3. **Micro-interactions:** * Soft gold glow effects on hover for primary buttons.
   * Smooth hover-zoom on clinic/therapy image cards.
4. **Interactive Modals:** * "Book Consultation" slide-over drawer / modal with a streamlined appointment inquiry form.
   * "B2B Wholesale Inquiry" modal for distributors.

---

## 6. Execution Instructions for AI

* **Step 1:** Set up the project configuration (Tailwind, typography, colors, animations).
* **Step 2:** Build reusable UI components (Buttons, Section Headers, Cards, Modals).
* **Step 3:** Construct the main pages with dummy high-quality Unsplash image placeholders relevant to Ayurveda, herbs, modern clinical setups, and wellness spa environments.
* **Step 4:** Ensure 100% responsive design across Mobile, Tablet, and Desktop displays.
* **Step 5:** Optimize for performance, fast loading times, and clean semantic HTML.

Please start by building the main layout and design system tokens first.
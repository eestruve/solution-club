# Design System: Solution Club

**Project ID:** 249835495669685469

## 1. Visual Theme & Atmosphere

Aesthetic: Clean, Calm, Premium, Trustworthy. The atmosphere evokes a sense of quiet professionalism — like walking into a freshly cleaned apartment. The design is airy with generous whitespace, soft shadows, and a restrained color palette that builds confidence. Modern but not flashy; the luxury is in the details and restraint.

## 2. Color Palette & Roles

- **Deep Midnight Navy (#1B2A4A)** — Primary brand color. Used for headers, hero backgrounds, and key text. Conveys authority and trust.
- **Warm Teal (#2A9D8F)** — Primary accent for Cleaning services. Used for CTA buttons, toggle active state, price highlights. Fresh, clean, calming.
- **Rich Amber (#E9C46A)** — Secondary accent for Building services. Used for toggle active state (building mode), badges, highlights. Warm, solid, craft-like.
- **Soft Cloud (#F8F9FA)** — Page background. Clean, barely-there warmth to avoid sterile white.
- **Pure White (#FFFFFF)** — Card surfaces, input backgrounds.
- **Steel Gray (#6C757D)** — Secondary text, captions, labels.
- **Charcoal (#2D3436)** — Primary body text. Readable, warm black.
- **Success Green (#27AE60)** — Confirmation states, checkmarks.
- **Soft Red (#E74C3C)** — Error states only.

## 3. Typography Rules

- **Headings:** 'Inter', Bold (700). Clean geometric sans-serif that commands attention without shouting. Letter-spacing slightly tightened (-0.02em) for premium feel.
- **Body:** 'Inter', Regular (400). Highly legible at all sizes. Line-height 1.6 for comfortable reading.
- **Accents/Labels:** 'Inter', Semi-Bold (600). Used for card titles, prices, button labels.
- **Size scale:** H1: 48px, H2: 36px, H3: 24px, Body: 16px, Caption: 14px.

## 4. Component Stylings

* **Buttons:** Generously rounded (12px). Primary: Warm Teal (#2A9D8F) with white text. Hover: darken 10%. Height: 48px minimum for mobile tap targets.
- **Toggle Switch:** Pill-shaped (rounded-full). Two labels inside. Active side: Warm Teal (Cleaning) or Rich Amber (Building). Inactive side: transparent with Steel Gray text. Smooth 300ms transition.
- **Cards/Containers:** Gently rounded corners (16px). Pure White background. Whisper-soft diffused shadow (0 4px 20px rgba(0,0,0,0.06)). On hover: shadow lifts slightly.
- **Inputs/Forms:** Rounded (8px). 1px stroke of Steel Gray (#6C757D) at 30% opacity. Focus: Warm Teal border. Background: Pure White.
- **Price Tags:** Bold number in Warm Teal or Rich Amber. Smaller «руб» suffix in Steel Gray.

## 5. Layout Principles

- **8px grid system** for all spacing and sizing
- **Maximum content width:** 1200px, centered
- **Section spacing:** 80px between major sections (desktop), 48px (mobile)
- **Card grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Mobile-first:** All elements designed for 375px first, then scaled up

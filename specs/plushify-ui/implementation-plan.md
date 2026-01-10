# Implementation Plan: Plushify UI

## Overview

Build the complete UI/UX for Plushify, a consumer SaaS that transforms photos into plushie-style images. This is a frontend-only implementation using mock data until backend integration is ready.

---

## Phase 1: Foundation (COMPLETED)

Establish branding, clean up boilerplate, and create base pages.

### Tasks

- [x] Update color palette in globals.css with Plushify theme
- [x] Configure Plushify colors (pink primary, purple secondary, yellow accent, mint)
- [x] Update border radius to 0.75rem for softer aesthetic
- [x] Add custom utility classes (text-gradient-pink, bg-gradient-plushify, shadow-plushify)
- [x] Test dark mode compatibility
- [x] Remove chat functionality (`/chat` route and page)
- [x] Remove setup-checklist.tsx component
- [x] Remove starter-prompt-modal.tsx component
- [x] Remove use-diagnostics.ts hook
- [x] Update protected routes (removed /chat, added /generate, /gallery)
- [x] Update sitemap.ts for Plushify routes
- [x] Update robots.ts for Plushify routes
- [x] Create landing page hero section with CTA buttons
- [x] Create landing page social proof section (stats, rating)
- [x] Create landing page how it works section (3 steps)
- [x] Create landing page features section (4 features)
- [x] Create landing page final CTA section
- [x] Create dashboard welcome header with user name
- [x] Create dashboard credits display (mock: 5 credits)
- [x] Create dashboard quick action cards (Generate, Gallery)
- [x] Create dashboard recent creations section with empty state
- [x] Create dashboard account info section

### Technical Details

**Color Configuration (globals.css):**
```css
:root {
  --radius: 0.75rem;
  --primary: oklch(0.72 0.18 12);
  --plushify-pink: oklch(0.72 0.18 12);
  --plushify-purple: oklch(0.55 0.17 300);
  --plushify-yellow: oklch(0.88 0.17 90);
  --plushify-mint: oklch(0.85 0.12 165);
}
```

**Mock Data Constants:**
```typescript
const mockUserCredits = 5;
const mockTotalCreations = 0;
```

**Protected Routes (proxy.ts, session.ts):**
```typescript
matcher: ["/dashboard", "/generate", "/gallery", "/profile"]
export const protectedRoutes = ["/dashboard", "/generate", "/gallery", "/profile"];
```

**Files Modified:**
- `src/app/globals.css` - Plushify branding colors
- `src/app/page.tsx` - New landing page
- `src/app/dashboard/page.tsx` - Updated dashboard
- `src/proxy.ts` - Protected routes
- `src/lib/session.ts` - Protected routes
- `src/app/sitemap.ts` - Plushify routes
- `src/app/robots.ts` - Plushify routes

**Files Removed:**
- `src/app/chat/*` (entire folder)
- `src/components/setup-checklist.tsx`
- `src/components/starter-prompt-modal.tsx`
- `src/hooks/use-diagnostics.ts`

---

## Phase 2: Core Pages

Build the main application pages: Generate, Gallery, and enhance landing page.

### Tasks

- [x] Update site header with public navigation (How It Works, FAQ, Pricing)
- [x] Update site header with authenticated navigation (Dashboard, Generate, Gallery)
- [x] Add user dropdown menu to site header
- [x] Ensure theme toggle works in header
- [x] Add mobile responsive menu to site header (Sheet component)
- [x] Add before/after image showcase component to landing page
- [x] Add testimonials section to landing page
- [x] Add pricing preview section to landing page
- [x] Create `/generate` page with step-based flow [complex]
  - [x] Create UploadZone component with drag-and-drop
  - [x] Create ImagePreviewCard component
  - [x] Create SubjectTypeSelector component
  - [x] Create CreditIndicator component
  - [x] Create ProcessingOverlay component with animation
  - [x] Create ResultDisplay component
  - [x] Create ComparisonSlider component (before/after)
  - [x] Wire up step navigation flow
- [x] Create `/gallery` page with responsive grid [complex]
  - [x] Create GalleryCard component with hover actions
  - [x] Create GalleryEmptyState component
  - [x] Create GalleryGrid with filters and sort
  - [x] Add filter by subject type
  - [x] Add sort by date (newest/oldest)
- [x] Create `/gallery/[id]` detail page
  - [x] Create ImageViewer component (full-size with zoom)
  - [x] Create ImageDetails component (metadata)
  - [x] Add download/share/delete actions
  - [x] Add previous/next navigation (with keyboard support)

### Technical Details

**Site Header Navigation:**
```typescript
// Public navigation items
const publicNav = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
];

// Authenticated navigation items
const authNav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/generate", label: "Generate" },
  { href: "/gallery", label: "Gallery" },
];
```

**Generate Page Flow States:**
```typescript
type GenerateStep = "upload" | "preview" | "processing" | "result";

// Subject types for selector
const subjectTypes = [
  { value: "person", label: "Person" },
  { value: "pet-dog", label: "Pet (Dog)" },
  { value: "pet-cat", label: "Pet (Cat)" },
  { value: "pet-other", label: "Pet (Other)" },
  { value: "group", label: "Group/Family" },
];
```

**Upload Zone Configuration:**
```typescript
const uploadConfig = {
  acceptedFormats: ["image/jpeg", "image/png", "image/webp"],
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxFiles: 1,
};
```

**Gallery Grid Responsive Columns:**
```css
/* Mobile: 2 columns */
grid-template-columns: repeat(2, 1fr);

/* Tablet: 3 columns */
@media (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
}

/* Desktop: 4 columns */
@media (min-width: 1024px) {
  grid-template-columns: repeat(4, 1fr);
}
```

**Mock Gallery Data Structure:**
```typescript
interface GalleryItem {
  id: string;
  originalUrl: string;
  plushieUrl: string;
  subjectType: "person" | "pet-dog" | "pet-cat" | "pet-other" | "group";
  createdAt: Date;
}

const mockGalleryItems: GalleryItem[] = [];
```

**Files to Create:**
- `src/app/generate/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/gallery/[id]/page.tsx`
- `src/components/generate/upload-zone.tsx`
- `src/components/generate/image-preview-card.tsx`
- `src/components/generate/subject-type-selector.tsx`
- `src/components/generate/processing-overlay.tsx`
- `src/components/generate/result-display.tsx`
- `src/components/generate/comparison-slider.tsx`
- `src/components/gallery/gallery-header.tsx`
- `src/components/gallery/gallery-grid.tsx`
- `src/components/gallery/gallery-card.tsx`
- `src/components/gallery/gallery-empty-state.tsx`
- `src/components/landing/before-after-card.tsx`
- `src/components/landing/testimonial-card.tsx`
- `src/components/shared/empty-state.tsx`

**Files to Modify:**
- `src/components/site-header.tsx`
- `src/app/page.tsx` (add new sections)

**shadcn/ui Components to Add:**
```bash
pnpm dlx shadcn@latest add progress
pnpm dlx shadcn@latest add slider
pnpm dlx shadcn@latest add select
pnpm dlx shadcn@latest add tooltip
```

---

## Phase 3: Supporting Pages (COMPLETED)

Build pricing, documentation, and legal pages.

### Tasks

- [x] Create `/pricing` page [complex]
  - [x] Create PricingCard component
  - [x] Create pricing tier comparison (Basic $9, Pro $19, Elite $29)
  - [x] Add "Most Popular" badge to Pro tier
  - [x] Add feature checklist per tier
  - [x] Add pricing FAQ section
- [x] Create `/how-it-works` page
  - [x] Hero section with headline
  - [x] Step-by-step guide with illustrations
  - [x] Tips for best results section
  - [x] Example gallery section
  - [x] CTA to get started
- [x] Create `/faq` page
  - [x] Add Accordion component from shadcn/ui
  - [x] Create FAQ categories (Getting Started, Image Generation, Account & Billing, Privacy & Security)
  - [x] Populate with FAQ content
- [x] Create `/help` page
  - [x] Quick links to FAQ, How It Works
  - [x] Contact information/email link
  - [x] Response time expectation
- [x] Create `/privacy` page with privacy policy content
- [x] Create `/terms` page with terms of service content
- [x] Create `/cookies` page with cookie policy content
- [x] Update site footer with Plushify branding and legal links

### Technical Details

**Pricing Tiers Configuration:**
```typescript
const pricingTiers = [
  {
    name: "Basic",
    credits: 30,
    price: 9,
    costPerCredit: 0.30,
    popular: false,
    features: [
      "30 plushie generations",
      "High-resolution downloads",
      "Gallery storage",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    credits: 100,
    price: 19,
    costPerCredit: 0.19,
    popular: true,
    badge: "Most Popular",
    features: [
      "100 plushie generations",
      "High-resolution downloads",
      "Gallery storage",
      "Priority support",
      "Bulk download",
    ],
  },
  {
    name: "Elite",
    credits: 200,
    price: 29,
    costPerCredit: 0.145,
    popular: false,
    badge: "Best Value",
    features: [
      "200 plushie generations",
      "High-resolution downloads",
      "Unlimited gallery storage",
      "Priority support",
      "Bulk download",
      "Early access to features",
    ],
  },
];
```

**FAQ Categories and Sample Content:**
```typescript
const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      { q: "How do I create my first plushie?", a: "..." },
      { q: "What types of photos work best?", a: "..." },
      { q: "How many free credits do I get?", a: "You get 5 free credits when you sign up." },
    ],
  },
  {
    category: "Image Generation",
    questions: [
      { q: "How long does generation take?", a: "Usually 30-60 seconds." },
      { q: "What file formats are supported?", a: "JPG, PNG, and WEBP up to 10MB." },
    ],
  },
  // ... more categories
];
```

**Files to Create:**
- `src/app/pricing/page.tsx`
- `src/app/how-it-works/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/help/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/cookies/page.tsx`
- `src/components/pricing/pricing-card.tsx`
- `src/components/pricing/pricing-faq.tsx`

**shadcn/ui Components to Add:**
```bash
pnpm dlx shadcn@latest add accordion
```

---

## Phase 4: Polish

Final quality assurance and optimization.

### Tasks

- [ ] Test responsive design on mobile (375px)
- [ ] Test responsive design on tablet (768px)
- [ ] Test responsive design on desktop (1024px+)
- [ ] Verify all pages in dark mode
- [ ] Verify all pages in light mode
- [ ] Run Lighthouse accessibility audit
- [ ] Fix any accessibility issues found
- [ ] Verify all loading states display correctly
- [ ] Verify all empty states display correctly
- [ ] Verify all error states display correctly
- [ ] Test all navigation links work
- [ ] Test protected route redirects
- [ ] Run Lighthouse performance audit
- [ ] Optimize any performance issues found

### Technical Details

**Responsive Breakpoints:**
```css
/* Mobile-first approach */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

**Accessibility Checklist:**
- All images have alt text
- All buttons have accessible names
- Color contrast meets WCAG AA
- Focus indicators visible
- Keyboard navigation works
- ARIA labels on icon-only buttons

**Performance Targets:**
- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 95
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

---

## Technical Notes

**Mock Data Strategy:**
- Use constants for mock user data (credits, creations)
- Auth state comes from Better Auth (working)
- Gallery items use empty array until backend ready
- Processing simulation with setTimeout

**Component Organization:**
```
src/components/
├── auth/           # Existing auth components (keep)
├── generate/       # Generate page components
├── gallery/        # Gallery page components
├── landing/        # Landing page components
├── pricing/        # Pricing page components
├── shared/         # Shared/reusable components
├── ui/             # shadcn/ui components (keep)
└── site-header.tsx
└── site-footer.tsx
```

**Key Theme Colors:**
| Role | oklch Value | Usage |
|------|-------------|-------|
| Primary | oklch(0.72 0.18 12) | CTAs, highlights |
| Secondary | oklch(0.55 0.17 300) | Accents |
| Accent Yellow | oklch(0.88 0.17 90) | Badges |
| Mint | oklch(0.85 0.12 165) | Success states |

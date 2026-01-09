# Requirements: Plushify UI

## Overview

Transform the existing agentic coding boilerplate into a consumer SaaS application that allows users to upload images of themselves, friends, family, and pets, then uses AI to generate plushie-style versions of those images.

## Product Vision

Plushify is a fun, approachable web application that transforms ordinary photos into adorable plushie-style images. The UI should feel warm, playful, and inviting - matching the whimsical nature of the product itself.

## Scope

**In Scope:**
- Complete UI/UX implementation (frontend only)
- Mock data and simulated states
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- All public and protected pages
- Navigation and routing

**Out of Scope:**
- Backend AI integration (mock only)
- Payment processing (UI only, no real transactions)
- Database operations (use mock data)
- Email sending functionality

---

## Information Architecture

```
PLUSHIFY
├── Public Pages
│   ├── / (Landing Page)
│   ├── /how-it-works
│   ├── /faq
│   ├── /help
│   ├── /pricing
│   ├── /privacy
│   ├── /terms
│   └── /cookies
│
├── Authentication (existing)
│   ├── /login
│   ├── /register
│   ├── /forgot-password
│   └── /reset-password
│
└── Protected (Authenticated)
    ├── /dashboard (User Home)
    ├── /generate (Create New Plushie)
    ├── /gallery (View All Creations)
    ├── /gallery/[id] (Single Image Detail)
    └── /profile (Account Settings)
```

---

## Page Requirements

### Landing Page (`/`)
- Hero section with compelling headline and CTAs
- Social proof section (stats, ratings)
- Before/after image showcase with comparison slider
- How it works section (3 steps: Upload, AI Magic, Download)
- Feature highlights section
- Testimonials with customer quotes
- Final CTA section
- Responsive on all breakpoints

### Dashboard (`/dashboard`) - Protected
- Welcome header with personalized greeting
- Credit balance display with visual indicator
- Quick action cards (Generate, Gallery)
- Recent creations grid with empty state
- Account info section

### Generate Page (`/generate`) - Protected
- Drag-and-drop upload zone (JPG, PNG, WEBP up to 10MB)
- Image preview with replace option
- Subject type selector (Person, Pet, Group)
- Credit cost indicator ("This will use 1 credit")
- Processing state with animation (30-60 second simulation)
- Result display with download/share options
- Comparison slider (before/after)

### Gallery Page (`/gallery`) - Protected
- Responsive image grid (2 cols mobile, 3 tablet, 4 desktop)
- Filter by subject type
- Sort by date (newest/oldest)
- Gallery card with hover actions
- Empty state for new users
- Click through to detail view

### Gallery Detail Page (`/gallery/[id]`) - Protected
- Full-size image viewer with zoom
- Image metadata display (date, subject type)
- Download, share, delete actions
- Previous/next navigation
- Back to gallery link

### Pricing Page (`/pricing`)
- Three pricing tiers:
  - Basic: 30 credits for $9
  - Pro: 100 credits for $19 (Most Popular)
  - Elite: 200 credits for $29 (Best Value)
- Feature comparison per tier
- FAQ section for billing questions

### Documentation Pages
- **How It Works** (`/how-it-works`): Step-by-step guide with illustrations
- **FAQ** (`/faq`): Accordion-style Q&A by category
- **Help** (`/help`): Contact information and support links

### Legal Pages
- **Privacy Policy** (`/privacy`)
- **Terms of Service** (`/terms`)
- **Cookie Policy** (`/cookies`)

### Site Header
- Public navigation: How It Works, FAQ, Pricing
- Authenticated navigation: Dashboard, Generate, Gallery
- User dropdown menu (Profile, Sign Out)
- Theme toggle (dark/light)
- Mobile responsive menu

---

## Branding Requirements

### Color Palette (oklch)
| Role | Value | Usage |
|------|-------|-------|
| Primary | oklch(0.72 0.18 12) | Soft pink/coral for CTAs |
| Secondary | oklch(0.55 0.17 300) | Warm purple for accents |
| Accent | oklch(0.88 0.17 90) | Soft yellow for badges |
| Mint | oklch(0.85 0.12 165) | Success states |

### Visual Style
- Rounded corners (0.75rem / 12px on cards)
- Soft shadows
- Playful, warm aesthetic
- Gradient backgrounds using brand colors

---

## Acceptance Criteria

### Functional
- [ ] All pages render without errors
- [ ] Navigation works correctly between all routes
- [ ] Protected routes redirect to login when not authenticated
- [ ] All interactive elements are clickable/functional
- [ ] Forms validate input appropriately
- [ ] Mock data displays correctly

### Visual
- [ ] Consistent Plushify branding throughout
- [ ] All pages work in dark mode
- [ ] All pages work in light mode
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1024px+)

### UX
- [ ] Loading states with skeleton placeholders
- [ ] Error states with friendly messages
- [ ] Empty states with helpful CTAs
- [ ] Smooth transitions and hover effects

---

## Dependencies

- **Existing auth system**: Better Auth integration (working)
- **shadcn/ui components**: Base component library (installed)
- **Tailwind CSS 4**: Styling framework (configured)
- **Next.js 16 App Router**: Routing infrastructure (in place)

## Related Features (Future)

- Payment integration (Stripe/Polar)
- AI image generation backend
- User credit management system
- Real database integration

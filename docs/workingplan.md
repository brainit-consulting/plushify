# Plushify UI/UX Implementation Plan

## Product Summary
Transform the existing boilerplate into a consumer SaaS that allows users to upload images of themselves, friends, family, and pets, then uses AI to generate plushie-style versions.

---

## 1. Information Architecture

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
├── Authentication
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

## 2. Page-by-Page Breakdown

### 2.1 Landing Page (`/`)

**Purpose:** High-conversion marketing page showcasing the product's value

**Sections:**
1. **Hero Section** - Bold headline, CTAs, hero image
2. **Social Proof Bar** - Stats, ratings
3. **Before/After Showcase** - 3-4 comparisons
4. **How It Works (Mini)** - 3 steps
5. **Feature Highlights** - Key features
6. **Testimonials** - Customer quotes
7. **Final CTA Section** - Sign-up prompt
8. **Footer** - Links, legal, attribution

### 2.2 Authentication Pages
- Register, Login, Forgot Password, Reset Password
- Keep existing Better Auth integration

### 2.3 Dashboard (`/dashboard`)
- Welcome header with stats
- Quick actions (Generate, Gallery, Settings)
- Recent creations grid
- Credit balance display

### 2.4 Generate Page (`/generate`)
- Step 1: Upload (drag-drop, single image)
- Step 2: Preview & Confirm (subject type, credit cost)
- Step 3: Processing (animated state)
- Step 4: Result (download, save, share)

### 2.5 Gallery Page (`/gallery`)
- Responsive grid with filters
- Sort by date, filter by type
- Empty state for new users

### 2.6 Image Detail Page (`/gallery/[id]`)
- Full-size image viewer
- Download, share, delete actions
- Navigation between images

### 2.7 Profile Page (`/profile`)
- Account info, security, preferences
- Enhance existing page

### 2.8 Documentation Pages
- How It Works, FAQ, Help

### 2.9 Legal Pages
- Privacy, Terms, Cookies

---

## 3. Pricing & Credits System

| Package | Credits | Price |
|---------|---------|-------|
| Free | 5 | $0 |
| Basic | 30 | $9 |
| Pro | 100 | $19 |
| Elite | 200 | $29 |

---

## 4. Branding

### Colors
- Primary: Soft pink/coral (#FF6B9D)
- Secondary: Warm purple (#9B59B6)
- Accent: Soft yellow (#FFD93D)

### Visual Style
- Rounded corners (16px+)
- Soft shadows
- Playful, warm aesthetic

---

## 5. Implementation Order

1. Branding & Theme setup
2. Landing Page
3. Site Header updates
4. Generate Page
5. Gallery Page
6. Dashboard updates
7. Pricing Page
8. Documentation pages
9. Legal pages

---

## 6. Technical Notes

- Use mock data until backend is ready
- Simulate logged-in state for development
- Keep auth components for later integration
- Remove unused boilerplate components

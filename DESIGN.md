# rockTicket Design System

Living documentation of the rockTicket design. Update this file when designs change in Figma.

**Figma:** https://www.figma.com/design/WcJoDbYzpm1VH84NmKn8kQ/RockTicket-App

## Brand

- **App Name:** rockTicket
- **Tagline:** Live music, one tap away
- **Primary Font:** Squada One (headings/display)
- **Body Font:** Source Sans Pro
- **UI Font:** Inter (status bar, card titles)

## Colors

### Global — Primary (Gulf Blue)
| Token | Hex |
|-------|-----|
| 900 | `#27288F` |
| 800 | `#3033AE` |
| 700 | `#3B42D3` |
| 600 | `#4D60D8` |
| 500 | `#697FDF` |
| 200 | `#D9DFF7` |

### Global — Secundary (Teal)
| Token | Hex |
|-------|-----|
| 999 | `#000B0B` |
| 950 | `#002E2D` |
| 900 | `#00504F` |
| 800 | `#006160` |
| 700 | `#007E7C` |
| 600 | `#009E9B` |
| 500 | `#00CDC8` |
| 400 | `#00DCD7` |
| 300 | `#00EEE9` |
| 200 | `#41FFFB` |
| 100 | `#B6FFFC` |
| 50 | `#E1FFFD` |
| 1 | `#F0FFFE` |

### Tokens — Primary
| Token | Hex | Usage |
|-------|-----|-------|
| 900 | `#141454` | Darkest variant |
| 700 | `#292952` | Darker variant, tooltips |
| 500 | `#57578A` | Primary actions |
| 300 | `#9494BC` | Lighter variant |
| 100 | `#C7C7DF` | Lightest variant |

### Tokens — Secundary
| Token | Hex | Usage |
|-------|-----|-------|
| 3 | `#001D1D` | Darkest teal |
| 2 | `#013333` | Dark teal |
| 1 | `#00504E` | Medium-dark teal |
| 900 | `#007E7C` | Main accent, CTAs, tags |
| 600 | `#4FAAA8` | Medium teal |
| 300 | `#93C9C7` | Light teal |
| 100 | `#D1E3E3` | Lightest teal |

### Tokens — Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Text on dark, backgrounds |
| 200 | `#E5E5E5` | Secondary text |
| 300 | `#CCCCCC` | Borders, dividers |
| 500 | `#999999` | Muted text |
| 700 | `#666666` | Card titles |
| 800 | `#333333` | Body text on light |
| 900 | `#000000` | Background, primary text |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#090909` | Page background |
| Background Dark | `#040404` | Darker background |
| Border | `#272727` | Dividers, borders |
| Destructive | `#d4183d` | Errors, delete |
| Gradient/Image | `linear-gradient(#000000CC 0%, #00000000 100%)` | Image overlay |

## Typography

### Headings (Squada One)
| Style | Size | Weight | Line Height | Tracking |
|-------|------|--------|-------------|----------|
| H1 | 40px | 400 | 125% | 5% |
| H2 | 32px | 400 | 125% | 5% |
| H3 | 24px | 400 | 125% | 3% |
| H4 | 18px | 400 | 125% | 5% |
| H5 | 14px | 400 | 125% | 10% |

### Title (Source Sans Pro Bold)
| Style | Size | Weight | Line Height | Tracking |
|-------|------|--------|-------------|----------|
| Title/h1 | 60px | 700 | 30px | 3% |
| Title/h2 | 40px | 700 | 30px | 3% |
| Title/h3 | 30px | 700 | 30px | 3% |
| Title/h4 | 24px | 700 | 30px | 3% |

### Body (Source Sans Pro)
| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Regular 16px | 16px | 400 | 20px |
| Light 16px | 16px | 300 | 20px |
| Regular 14px | 14px | 400 | 20px |
| Light 14px | 14px | 300 | 20px |
| Regular 12px | 12px | 400 | 20px |
| Light 12px | 12px | 300 | 20px |

### UI (Source Sans Pro)
| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Label | 12px | 400 | auto |
| Button/Large | 18px | 700 | 24px |
| Button/Medium | 16px | 600 | 14px |
| Button/Small | 14px | 400 | 20px |

### Logo
| Style | Font | Size |
|-------|------|------|
| Logo/H1 | Libre Barcode 128 Text | 40px |

## Spacing

| Token | Value |
|-------|-------|
| 0 | 0px |
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |

### Layout
| Token | Value |
|-------|-------|
| container/padding-mobile | 16px |
| container/padding-desktop | 32px |
| grid/columns | 4 |
| grid/gutter | 16px |

## Border Radius

| Token | Value |
|-------|-------|
| none | 0px |
| xs | 4px |
| sm | 6px |
| md | 8px |
| lg | 12px |
| xl | 16px |
| full | 999px |

## Components

### EventCard
- **Width:** 100% of container
- **Border radius:** 12px
- **Image ratio:** 16:9
- **Padding:** 16px

### BottomNav / Toolbar
- **Height:** 64px
- **Background:** #000000
- **Icons:** 24px
- **Active color:** Secondary/900 (#007e7c)
- **Inactive color:** Neutrals/500 (#999999)

### Button
- **Height:** 48px
- **Border radius:** 6px
- **Font:** Source Sans Pro, 16px, 700
- **Padding:** 0 24px
- **Background:** Secondary/900 (#007e7c)

### Tag
- **Background:** Secondary/900 (#007e7c)
- **Font:** Source Sans Pro, 10px, 700
- **Color:** #ffffff
- **Border radius:** 4px

### Tooltip
- **Background:** Primary/700 (#292952)
- **Font:** Source Sans Pro, 16px, 400
- **Color:** #ffffff
- **Border radius:** 8px

## Layout

- **Mobile viewport:** 390 x 844px
- **Safe area:** 16px horizontal padding
- **Content max-width:** 100%

## Screens

| Screen | Status | Figma Node |
|--------|--------|------------|
| Home | Implemented | Mockups > Home//Home |
| Checkout | Implemented | Mockups > Checkout |
| Overview Ticket | Implemented | Mockups > Overview Ticket |
| Payment Confirmation | Implemented | Mockups > Payment confirmation |
| Search | Implemented | Mockups > Search |
| Menu | Implemented | Mockups > Menu |
| Order Confirmation | Implemented | Mockups > Orden confirmation |
| Start/Onboarding | Implemented | Mockups > Start |
| Login | Implemented | Mockups > Login Page |
| Discover | Implemented | Mockups > Discover Page |
| Band Profile | Implemented | Mockups > Band/Event Profile |
| Tickets | Implemented | Mockups > Tickets |
| Notifications | Implemented | Mockups > Notifications |

## Component Families
- Header
- Main
- NavBar
- Bottom Sheet Layer
- Summary Tickets
- Search
- Profile
- Safe Payment
- Payment Method
- Checkout
- Successful Payment
- Selection Section
- Detail Selection
- Venue
- Home
- Explore-filters
- Event Detail Page
- Local Artist Page
- Start
- Wellcome
- Intro
- Chosee Genre
- Location & Alerts
- AuthLogin

## Changelog

| Date | Change |
|------|--------|
| 2026-09-20 | Initial design system from Figma |
| 2026-09-21 | Merged plugin tokens: Global (primary gulf blue, secondary teal full scales), Tokens (primary, secundary, neutrals), Title/UI typography, spacing 0-16, radius 0-full, layout tokens |
| 2026-09-21 | Rewrote `theme.css` with all Figma tokens as CSS variables. Updated all components (Button, Badge, Card, BottomNav, EventCard, ArtistCard, VenueCard, CategoryChips, section headers) and screens (Home, EventDetail, Artist, Profile, Onboarding x6, Login) to use CSS variables instead of hardcoded hex values. Fixed StatusBar background (inline style for `--background-dark` due to Tailwind v4 hyphenated variable gotcha). Build verified passing. |


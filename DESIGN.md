# rockTicket Design System

Living documentation of the rockTicket design. Update this file when designs change in Figma.

**Figma:** https://www.figma.com/design/WcJoDbYzpm1VH84NmKn8kQ/RockTicket-App

## Brand

- **App Name:** rockTicket
- **Tagline:** Live music, one tap away
- **Primary Font:** Squada One (headings/display)
- **Body Font:** Source Sans Pro
- **UI Font:** Inter (status bar, card titles)

## Colors (from Figma Styles)

### Primary (Gulf Blue)
| Token | Hex | Usage |
|-------|-----|-------|
| Primary/500 | `#57578a` | Primary actions |
| Primary/700 | `#292952` | Darker variant, tooltips |
| Primary/900 | `#141454` | Darkest variant |
| Primary/300 | `#9494bc` | Lighter variant |
| Primary/100 | `#c7c7df` | Lightest variant |

### Secondary (Teal)
| Token | Hex | Usage |
|-------|-----|-------|
| Secondary/900 | `#007e7c` | Main accent, CTAs, tags |
| Secondary/600 | `#4faaa8` | Medium teal |
| Secondary/300 | `#93c9c7` | Light teal |
| Secondary/100 | `#d1e3e3` | Lightest teal |

### Neutrals (Alabaster)
| Token | Hex | Usage |
|-------|-----|-------|
| White | `#ffffff` | Text on dark, backgrounds |
| 200 | `#e5e5e5` | Secondary text |
| 300 | `#cccccc` | Borders, dividers |
| 500 | `#999999` | Muted text |
| 700 | `#666666` | Card titles |
| 800 | `#333333` | Body text on light |
| 900 | `#000000` | Background, primary text |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#090909` | Page background |
| Background Dark | `#040404` | Darker background |
| Border | `#272727` | Dividers, borders |
| Destructive | `#d4183d` | Errors, delete |

## Typography

### Headings (Squada One)
| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 | 40px | 400 | 50px |
| H2 | 32px | 400 | 40px |
| H3 | 24px | 400 | 30px |
| H4 | 18px | 400 | 23px |
| H5 | 14px | 400 | 18px |

### Body (Source Sans Pro)
| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Regular 16px | 16px | 400 | 20px |
| Light 16px | 16px | 300 | 20px |
| Regular 14px | 14px | 400 | 20px |
| Light 14px | 14px | 300 | 20px |
| Regular 12px | 12px | 400 | 20px |
| Light 12px | 12px | 300 | 20px |

## Spacing

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |

## Border Radius

| Token | Value |
|-------|-------|
| sm | 4px |
| md | 6px |
| lg | 8px |
| xl | 12px |
| full | 9999px |

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

## Changelog

| Date | Change |
|------|--------|
| 2026-09-20 | Initial design system from Figma |
| 2026-09-20 | Updated with accurate Figma style values |

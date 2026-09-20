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

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#007e7c` | CTAs, active states, tags |
| Primary Dark | `#13505b` | Darker variant |
| Secondary | `#0c7489` | Secondary actions |
| Accent | `#119da4` | Highlights, links |
| Background Dark | `#040404` | Page background (dark mode) |
| Background Light | `#ffffff` | Page background (light mode) |
| Text Primary | `#ffffff` | Primary text on dark |
| Text Secondary | `#e5e5e5` | Secondary text on dark |
| Text Muted | `#999999` | Muted text, placeholders |
| Text Dark | `#333333` | Primary text on light |
| Card Title | `#666666` | Card title text |
| Border | `#272727` | Dividers, borders |
| Tag | `#007e7c` | Tag backgrounds |
| Destructive | `#d4183d` | Errors, delete actions |
| Muted | `#ececf0` | Muted backgrounds |
| Input Background | `#f3f3f5` | Input field backgrounds |

### Original Palette (Coolors)

Exported from: https://coolors.co/119da4-0c7489-13505b-040404-d7d9ce

## Typography

### Headings (Squada One)

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Heading LG | 32px | 400 | Hero headings |
| Heading Display | 24px | 400 | Screen titles |
| Heading SM | 18px | 400 | Section headings |

### Body (Source Sans Pro)

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Body LG | 18px | 700 | Emphasized body |
| Body | 14px | 400 | Regular body text |
| Body Semibold | 14px | 400 | Strong body text |
| Label | 14px | 400 | Form labels |
| Label Bold | 13.5px | 700 | Bold labels |
| Caption | 12px | 400 | Small text, metadata |
| Caption Semibold | 12px | 600 | Strong captions |
| Tag | 10px | 600 | Tag labels |

### UI (Inter)

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| UI Title | 14px | 600 | Card titles |
| UI Subtitle | 12px | 500 | Subtitles |
| UI Body | 14px | 400 | UI body text |
| Status Bar | 14px | 700 | Status bar time |

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
| sm | 0.375rem |
| md | 0.5rem |
| lg | 0.625rem |
| xl | 0.75rem |
| card | 12px |
| button | 8px |
| modal | 16px |

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
- **Active color:** Primary (#007e7c)
- **Inactive color:** Text Muted (#999999)

### Button
- **Height:** 48px
- **Border radius:** 8px
- **Font:** Source Sans Pro, 16px, 600
- **Padding:** 0 24px

### Tag
- **Background:** Primary (#007e7c)
- **Font:** Source Sans Pro, 10px, 600
- **Color:** #ffffff
- **Border radius:** 4px

### Tooltip
- **Background:** #292952
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
| 2026-09-20 | Initial design system documentation from Figma file |

# AGENTS.md

## Project

Figma Make-generated React prototype (rockTicket - concert ticketing). Not a production app.

## Commands

- **Install**: `pnpm install` (not npm — pnpm-workspace.yaml is present)
- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **No test/lint/typecheck commands exist.** Do not add test frameworks without being asked.

## Architecture

- **Entry**: `index.html` -> `src/main.tsx` -> `src/app/App.tsx`
- **Path alias**: `@/` maps to `src/` (configured in both `tsconfig.json` and `vite.config.ts`)
- **Navigation**: Custom hook (`src/shared/hooks/useNavigation.ts`), not react-router. Screens: home, event, artist, profile.
- **State**: `useOnboardingState` hook with localStorage key `rockticket_onboarding`
- **Mobile frame**: Fixed 390x844px viewport in `MobileFrame` component

## Key Gotchas

- **Do not remove `react()` or `tailwindcss()` from vite.config.ts plugins** — they are required even if unused.
- **Figma asset resolver**: Custom Vite plugin resolves `figma:asset/*` imports to `src/assets/`. Do not break this pattern.
- **Theme sync**: `src/styles/theme.css` must stay in sync with `default_shadcn_theme.css` (root).
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin, not PostCSS. The `postcss.config.mjs` is intentionally empty.
- **Dev reset**: Ctrl+Shift+R or the floating "Reset" button clears all state and reloads.
- **No `src/assets/` directory exists yet** — Figma asset imports will fail until assets are placed there.

## UI Stack

- shadcn/ui components in `src/app/components/ui/`
- MUI (Material UI) also installed as dependency
- Google Fonts: Squada One, Source Sans Pro, Be Vietnam Pro

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
- **Mobile frame**: 390×844px viewport scaled inside `MobileFrame` component
- **Layout raíz**: `MobileFrame` es autosuficiente con `flex-col min-h-screen`. No necesita AppShell ni wrappers. Contiene:
  - Área `flex-1` con el viewport del teléfono escalado vía `ResizeObserver`
  - Footer `flex-shrink-0` con el aviso de scroll y el botón Reset
- **Docs**: `docs/PRD.md` contiene el Product Requirements Document completo

## Key Gotchas

- **Do not remove `react()` or `tailwindcss()` from vite.config.ts plugins** — they are required even if unused.
- **Figma asset resolver**: Custom Vite plugin resolves `figma:asset/*` imports to `src/assets/`. Do not break this pattern.
- **Theme sync**: `src/styles/theme.css` must stay in sync with `default_shadcn_theme.css` (root).
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin, not PostCSS. The `postcss.config.mjs` is intentionally empty.
- **Dev reset**: Ctrl+Shift+R or the floating "Reset" button clears all state and reloads.
- **No `src/assets/` directory exists yet** — Figma asset imports will fail until assets are placed there.
- **Sin scroll vertical**: El prototipo debe verse completo en una sola pantalla. MobileFrame escala el teléfono para que quepa junto al footer sin scroll. No usar `position: fixed` ni `absolute` fuera del viewport del teléfono.

## UI Stack

- shadcn/ui components in `src/app/components/ui/`
- MUI (Material UI) also installed as dependency
- Google Fonts: Squada One, Source Sans Pro, Be Vietnam Pro

## Figma Sync Workflow

Design source of truth lives in `design/` and `DESIGN.md`.

**Figma file:** https://www.figma.com/design/WcJoDbYzpm1VH84NmKn8kQ/RockTicket-App

### Updating design tokens (colors, typography, spacing)

1. Export from Figma REST API:
   ```bash
   $env:FIGMA_TOKEN="figd_xxx"; $env:FIGMA_FILE_KEY="WcJoDbYzpm1VH84NmKn8kQ"; node scripts/export-figma-tokens.mjs
   ```
2. Review: `git diff design/tokens.json`
3. Update `src/styles/theme.css` if CSS variables changed
4. Test in browser

### Updating components

1. Document changes in `DESIGN.md` (Components section)
2. Update component code in `src/features/` or `src/shared/`
3. Commit both DESIGN.md and code changes

### Adding new screens

1. Export from Figma Make (if available)
2. Copy assets to `src/assets/`
3. Add screen entry to `DESIGN.md` (Screens table)
4. Implement in `src/features/`

### Figma Make export (existing method)

1. Re-exportar desde Figma Make: Abrir el archivo → botón "Export" → genera código React + assets.
2. Copiar los assets nuevos a `src/assets/` (los imports `figma:asset/*` resuelven allí).
3. Revisar `git diff` para identificar qué cambió vs. la versión anterior.
4. Actualizar solo los componentes afectados, sin sobrescribir modificaciones manuales.
5. Correr `pnpm build` para verificar que no hay errores.

### Important

- `design/tokens.json` is the source of truth for colors, typography, spacing
- `DESIGN.md` is the living documentation for components and layout
- `src/styles/theme.css` must stay in sync with `design/tokens.json`
- Minimize Figma API calls (free plan = limited MCP, unlimited REST with PAT)

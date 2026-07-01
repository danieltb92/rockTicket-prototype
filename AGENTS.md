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

## Figma Sync Workflow (sin suscripción)

No hay sincronización automática sin plan pago de Figma. Para actualizar el demo manualmente:

1. **Re-exportar desde Figma Make**: Abrir el archivo en Figma Make → botón "Export" → genera código React + assets nuevos.
2. **Método con MCP Figma** (ya disponible en este entorno):
   - Ejecutar `figma_get_design_context(fileKey, nodeId)` para obtener el código de referencia de cualquier nodo del diseño.
   - Usar el código + screenshot como guía para actualizar componentes manualmente.
3. **Post-export workflow**:
   - Copiar los assets nuevos a `src/assets/` (los imports `figma:asset/*` resuelven allí).
   - Revisar `git diff` para identificar qué cambió vs. la versión anterior.
   - Actualizar solo los componentes afectados, sin sobrescribir modificaciones manuales del prototipo (navegación, estado, MobileFrame layout, etc.).
   - Correr `pnpm build` para verificar que no hay errores.

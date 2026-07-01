# rockTicket

Prototipo de alta fidelidad de una app de venta de tickets para conciertos, generado desde Figma Make. **No es una app de producción.**

## Stack

- React 19 + TypeScript + Vite 6
- Tailwind CSS v4 (vía `@tailwindcss/vite`)
- shadcn/ui + MUI (Material UI)
- Google Fonts: Squada One, Source Sans Pro, Be Vietnam Pro
- pnpm

## Comandos

| Comando | Descripción |
|---------|-------------|
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Iniciar servidor de desarrollo |
| `pnpm build` | Build de producción |

## Documentación

- [PRD](./docs/PRD.md) — Product Requirements Document
- [AGENTS.md](./AGENTS.md) — Instrucciones técnicas para IA
- [guidelines/Guidelines.md](./guidelines/Guidelines.md) — Guías de layout y diseño

## Notas

- No hay tests, linters ni typecheck configurados.
- El prototipo debe verse completo en una sola pantalla sin scroll vertical.
- El estado de onboarding se persiste en `localStorage` con la clave `rockticket_onboarding`.

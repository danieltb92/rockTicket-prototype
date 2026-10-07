# rockTicket — Product Requirements Document

## 1. Resumen

Prototipo de alta fidelidad interactivo de una app de venta de tickets para conciertos, generado desde Figma Make. No es una app de producción.

## 2. Objetivo

Validar visual e interactivamente el flujo de exploración de tickets antes de pasar a desarrollo real.

## 3. Screens / Flujos

| Screen | Descripción |
|--------|-------------|
| Onboarding | Presentación inicial con opción de login o registro |
| Login | Pantalla de inicio de sesión (simulado) |
| Home | Lista de eventos destacados con navegación por tabs |
| Event Detail | Información detallada de un evento seleccionado |
| Artist | Perfil del artista con eventos relacionados |
| Profile | Perfil del usuario |

Navegación mediante hook personalizado `useNavigation` con transiciones CSS (sin react-router).

**Modos de visualización (nuevo):**
- **Desktop (Demo)**: Marco de teléfono 390×844px escalado, footer con scroll hint + Reset, StatusBar simulada
- **Móvil real**: Pantalla completa nativa (100vw/100dvh), sin marco, sin footer, StatusBar real del OS, safe-area insets (notch/home indicator)

## 4. Constraints críticas

- **Sin scroll vertical en desktop.** Todo el contenido (teléfono + footer) debe verse completo en una sola pantalla sin importar el tamaño de la ventana.
- **Viewport fijo en desktop.** El teléfono mide 390×844px y se escala uniformemente para llenar el espacio disponible.
- **Móvil real: viewport fluido.** En dispositivos móviles reales, usa `100vw` / `100dvh` con `viewport-fit=cover` y `env(safe-area-inset-*)` para notch y home indicator.
- **Sin enrutamiento real.** Navegación interna por hook, no por router.
- **Estado en localStorage.** La clave `rockticket_onboarding` persiste la sesión. El botón Reset la elimina y recarga.
- **Sin llamadas API.** Todos los datos son mock/estáticos.
- **Assets desde Figma.** Los imports `figma:asset/*` resuelven a `src/assets/`.

## 5. Stack técnico

- React 19 + TypeScript + Vite 6
- pnpm (monorepo workspace)
- Tailwind CSS v4 (vía `@tailwindcss/vite`, no PostCSS)
- shadcn/ui + MUI (Material UI)
- Google Fonts: Squada One, Source Sans Pro, Be Vietnam Pro
- **Design tokens**: CSS variables en `src/styles/theme.css` sincronizadas con `design/design-tokens.tokens.json` (exportado desde Figma). Colores (`--color-gulf-*`, `--color-teal-*`, `--color-zinc-*`), fuentes (`--font-heading`, `--font-body`), spacing, radius, layout.

## 6. Arquitectura

```
index.html → src/main.tsx → src/app/App.tsx
                              └── MobileFrame (layout raíz)
                                    ├── Desktop: flex-1 viewport 390×844px escalado + footer
                                    └── Mobile:  100vw/100dvh, safe-area insets, sin footer
```

- `MobileFrame` es el layout raíz autosuficiente (`flex-col`, `min-h-screen`).
- **Desktop**: El `ResizeObserver` mide el área `flex-1` para escalar el teléfono proporcionalmente. Footer con aviso de scroll y botón Reset.
- **Mobile**: Detectado via hook `useIsMobile` (userAgent + width < 768px). Renderiza children a pantalla completa con padding de safe areas. Sin marco, sin footer, StatusBar simulada oculta.
- Meta tags en `index.html` para theming de status bar: `theme-color` (Android), `apple-mobile-web-app-status-bar-style: black-translucent` (iOS PWA).

## 7. Assets

Todos los assets provienen de Figma Make como imports `figma:asset/*`. No existe directorio `src/assets/` aún — esos imports fallarán hasta que se coloquen los archivos allí.

## 8. Fuera de alcance

- Backend / API / base de datos
- Autenticación real con proveedor
- Pagos / checkout / carrito
- Tests automatizados (unitarios, e2e)
- **Responsive design fuera del viewport 390×844px en modo desktop demo** (el modo mobile real sí es responsive nativo)
- Modo oscuro / temas adicionales
- PWA / service workers (solo meta tags básicos para status bar theming)
- Rendimiento SEO / SSR

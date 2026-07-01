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

## 4. Constraints críticas

- **Sin scroll vertical.** Todo el contenido (teléfono + footer) debe verse completo en una sola pantalla sin importar el tamaño de la ventana.
- **Viewport fijo.** El teléfono mide 390×844px y se escala uniformemente para llenar el espacio disponible.
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

## 6. Arquitectura

```
index.html → src/main.tsx → src/app/App.tsx
                              └── MobileFrame (layout raíz)
                                    ├── flex-1: viewport 390×844px escalado
                                    └── flex-shrink-0: footer (scroll hint + Reset)
```

- `MobileFrame` es el layout raíz autosuficiente (`flex-col`, `min-h-screen`).
- El `ResizeObserver` mide el área `flex-1` para escalar el teléfono proporcionalmente.
- El footer con el aviso de scroll y el botón Reset están dentro de MobileFrame, fuera del viewport del teléfono.

## 7. Assets

Todos los assets provienen de Figma Make como imports `figma:asset/*`. No existe directorio `src/assets/` aún — esos imports fallarán hasta que se coloquen los archivos allí.

## 8. Fuera de alcance

- Backend / API / base de datos
- Autenticación real con proveedor
- Pagos / checkout / carrito
- Tests automatizados (unitarios, e2e)
- Responsive design fuera del viewport 390×844px
- Modo oscuro / temas adicionales
- PWA / service workers
- Rendimiento SEO / SSR

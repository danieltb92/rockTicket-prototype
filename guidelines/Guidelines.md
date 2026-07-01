# Guías del proyecto

## Layout

- `MobileFrame` es el layout raíz (`flex-col`, `min-h-screen`). No agregar wrappers externos.
- El prototipo debe verse completo en una sola pantalla **sin scroll vertical**.
- El footer (scroll hint + botón Reset) está dentro de MobileFrame, usa `flex-shrink-0`.
- El área del teléfono (`flex-1`) se escala vía `ResizeObserver` para llenar el espacio disponible.
- No usar `position: fixed` ni `position: absolute` fuera del viewport del teléfono.
- El contenedor del teléfono tiene `p-4` para separar el borde del marco de la ventana.

## MobileFrame

| Propiedad | Valor |
|-----------|-------|
| Viewport del teléfono | 390×844px |
| Radio de borde | 40px |
| Background | `#050505` |
| Escalado | Uniforme, nunca mayor a 1x |
| Medición | `ResizeObserver` sobre el área `flex-1` (excluye footer) |

## Estilo

- Tailwind CSS v4 con `@tailwindcss/vite`. No modificar `vite.config.ts` ni `postcss.config.mjs`.
- Google Fonts: Squada One (títulos), Source Sans Pro (cuerpo), Be Vietnam Pro.
- Tema CSS en `src/styles/theme.css` debe mantenerse sincronizado con `default_shadcn_theme.css`.
- Los componentes shadcn/ui están en `src/app/components/ui/`.

## Stack

- React 19 + TypeScript
- Vite 6 como bundler
- pnpm como gestor de paquetes
- MUI (Material UI) instalado como dependencia

## Restricciones

- No agregar frameworks de test sin ser solicitado.
- No eliminar los plugins `react()` ni `tailwindcss()` de `vite.config.ts`.
- No romper el patrón de imports `figma:asset/*` (resuelto por plugin personalizado).
- No crear el directorio `src/assets/` manualmente — los assets de Figma se colocan allí cuando estén disponibles.

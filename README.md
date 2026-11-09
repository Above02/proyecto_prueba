# DATA INTELLIGENCE — Professional Portfolio

Landing page demostrativa para un portafolio profesional de Data Science, Business Intelligence e Inteligencia Artificial.

> Los proyectos, métricas y datos de contacto incluidos son ejemplos ficticios/editables; no representan clientes, resultados ni experiencia real.

## Stack
- React 18 + TypeScript 5
- Vite 5
- Tailwind CSS 3
- GSAP
- Lucide React

## Requisitos
Node.js 18+ y npm.

## Desarrollo local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Estructura
```text
src/
  components/   Secciones y navegación
  data/         Contenido editable del portafolio
  App.tsx
  main.tsx
  index.css
```

## Personalización
- Edita `src/data/portfolio.ts` para modificar proyectos, servicios y tecnologías.
- Actualiza el correo y enlaces de ejemplo en el mismo archivo antes de publicar como portafolio personal.
- Los proyectos se identifican explícitamente como demostraciones.

## GitHub y Vercel
El repositorio es la fuente de código. Con el proyecto de Vercel vinculado a este repositorio y la rama de producción `main`, cada push puede disparar un deployment automáticamente. Para Vite usa `npm run build` y `dist` como directorio de salida.

## URL pública
Pendiente de confirmar el proyecto y deployment existentes en Vercel.

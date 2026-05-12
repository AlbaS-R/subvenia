<div align="center">

# Subvenia

**Sitio web y experiencia de producto** orientada a clusters, cámaras de comercio y asociaciones que quieren comunicar y operar alrededor de la detección y gestión de subvenciones para su red de empresas.

</div>

---

## Índice

1. [Descripción](#descripción)
2. [Stack tecnológico](#stack-tecnológico)
3. [Estructura del repositorio](#estructura-del-repositorio)
4. [Requisitos previos](#requisitos-previos)
5. [Instalación](#instalación)
6. [Variables de entorno](#variables-de-entorno)
7. [Scripts npm](#scripts-npm)
8. [Desarrollo local](#desarrollo-local)
9. [Compilación y vista previa](#compilación-y-vista-previa)
10. [Enrutado](#enrutado)
11. [Funcionalidades relevantes](#funcionalidades-relevantes)
12. [Estilos y assets](#estilos-y-assets)
13. [Calidad de código](#calidad-de-código)
14. [Despliegue](#despliegue)
15. [Créditos](#créditos)

---

## Descripción

Este proyecto es una aplicación **React** de página única (SPA) servida con **Vite**. Incluye:

- Página principal con narrativa de producto, CTAs y bloques explicativos.
- Secciones de **metodología**, **casos de uso** (público objetivo), **precios**, **contacto** y páginas legales (**privacidad**, **términos**, **seguridad**).
- **Layout** común con navegación, pie y banner de cookies.
- Integraciones opcionales: **EmailJS** (formulario de contacto), **Supabase** (cliente en `src/lib/supabase.ts`), analítica condicionada al consentimiento de cookies.

La documentación de negocio detallada conviene mantenerla aparte; aquí se describe **cómo instalar, configurar y ejecutar** el código.

---

## Stack tecnológico

| Área | Tecnología |
|------|------------|
| Lenguaje | TypeScript |
| UI | React 19 |
| Enrutado | React Router 7 |
| Bundler / dev server | Vite 6 |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`, `@tailwindcss/typography`) |
| Animación | Motion (`motion`) |
| Iconos | Material Symbols (Google Fonts), Lucide (en algunos módulos) |
| Email (contacto) | `@emailjs/browser` |
| Backend cliente | `@supabase/supabase-js` |
| Otros | `@google/genai`, Express (dependencia presente en el proyecto) |

El archivo `index.html` incluye además una configuración legacy de **Tailwind vía CDN** y fuentes (Newsreader, Manrope) usadas en parte de la UI; la hoja principal de estilos del flujo Vite es `src/index.css`.

---

## Estructura del repositorio

```
subvenia/
├── index.html              # Entrada HTML, fuentes y script raíz
├── vite.config.ts          # Configuración Vite (React, Tailwind, alias @)
├── tsconfig.json           # TypeScript (paths @/*)
├── package.json
├── .env.example            # Plantilla de variables (copiar a .env.local)
├── README.md               # Esta documentación
├── src/
│   ├── main.tsx            # Punto de entrada React + rutas
│   ├── App.tsx             # Layout, páginas exportadas y lógica principal del sitio
│   ├── index.css           # Tailwind v4, tema y utilidades (@theme, @utility)
│   ├── components/         # CookieConsentBanner, LegalCenterLayout, EfficiencyCalculator…
│   ├── contexts/           # ThemeContext, etc.
│   ├── lib/                # email.ts, supabase.ts, cookieConsent.ts
│   └── pages/              # Módulos legacy o adicionales (CasosDeUso, PricingServices, …)
└── dist/                   # Salida de `npm run build` (no versionar si usáis .gitignore)
```

La mayor parte de las rutas públicas viven como componentes exportados desde `src/App.tsx` y se montan en `src/main.tsx`.

---

## Requisitos previos

- **Node.js** (recomendado: LTS actual; compatible con ES2022 según `tsconfig.json`).
- **npm** (incluido con Node) para instalar dependencias y ejecutar scripts.

---

## Instalación

En la raíz del proyecto:

```bash
npm install
```

---

## Variables de entorno

Crea un archivo **`.env.local`** en la raíz (no lo subas al repositorio). Puedes partir de **`.env.example`**.

| Variable | Uso |
|----------|-----|
| `GEMINI_API_KEY` | Clave para integración con Google Gemini (inyectada en build vía `vite.config.ts` como `process.env.GEMINI_API_KEY`). |
| `APP_URL` | URL pública del despliegue (callbacks, enlaces autorreferenciados, etc., según uso en el proyecto). |
| `VITE_SUPABASE_URL` | URL del proyecto Supabase. |
| `VITE_SUPABASE_ANON_KEY` | Clave anónima pública de Supabase (solo operaciones permitidas por RLS). |
| `VITE_FUNCTION_SECRET_KEY` | Secreto para funciones o llamadas que lo requieran (según implementación). |
| `VITE_EMAILJS_SERVICE_ID` | ID de servicio EmailJS. |
| `VITE_EMAILJS_TEMPLATE_ID` | ID de plantilla EmailJS. |
| `VITE_EMAILJS_PUBLIC_KEY` | Clave pública EmailJS (frontend). |
| `VITE_SUBVENIA_DEMO_APP_URL` | URL del entorno demo enlazado desde la barra de navegación (por defecto en código: `http://localhost:3000/`). |

**Seguridad:** no commitees `.env.local` ni claves reales. Rota cualquier clave que haya quedado expuesta en historial.

---

## Scripts npm

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Arranca Vite en el puerto **3000**, host `0.0.0.0` (accesible en red local). |
| `npm run build` | Genera la build de producción en `dist/`. |
| `npm run preview` | Sirve la carpeta `dist/` para probar la build. |
| `npm run lint` | Ejecuta `tsc --noEmit` (comprobación de tipos). |
| `npm run clean` | Elimina `dist/` (en Windows puede requerir borrado manual si `rm` no está disponible). |

---

## Desarrollo local

```bash
npm run dev
```

Abre en el navegador la URL que indique la consola (por defecto `http://localhost:3000`).

### Hot Module Replacement (HMR)

En `vite.config.ts`, el HMR se desactiva si la variable de entorno `DISABLE_HMR` es `'true'` (útil en entornos donde el refresco en caliente molesta).

---

## Compilación y vista previa

```bash
npm run build
npm run preview
```

La salida estática queda en **`dist/`** y puede desplegarse en cualquier hosting de sitios estáticos (Netlify, Vercel, S3+CloudFront, etc.) o detrás de un reverse proxy.

---

## Enrutado

Definido en **`src/main.tsx`** bajo `BrowserRouter`. Rutas actuales (todas bajo el layout de `App`):

| Ruta | Componente (export en `App.tsx`) |
|------|----------------------------------|
| `/` | `HomePage` |
| `/metodologia` | `MethodologyPage` |
| `/casos-de-uso` | `CasosDeUsoPage` |
| `/contacto` | `ContactPage` |
| `/precios` | `PricingPage` |
| `/privacidad` | `PrivacyPage` |
| `/terminos` | `TermsPage` |
| `/seguridad` | `SecurityPage` |
| `*` | Redirección a `/` |

---

## Funcionalidades relevantes

- **Navegación y pie:** `Layout` en `App.tsx` con `NavLink`, `Outlet`, scroll al cambiar de ruta y animaciones en elementos con `data-motion`.
- **Cookies y analítica:** `CookieConsentBanner` y `src/lib/cookieConsent.ts`; los eventos solo se envían a `dataLayer` / `gtag` si el usuario acepta cookies de analítica.
- **Contacto:** envío vía EmailJS (`src/lib/email.ts`); conviene validar que las variables `VITE_EMAILJS_*` estén definidas.
- **Supabase:** cliente singleton en `src/lib/supabase.ts` con esquema `GovsWin` (ajustar según vuestro proyecto real).
- **Páginas legales:** envueltas o apoyadas en `LegalCenterLayout` donde corresponda.

---

## Estilos y assets

- **`src/index.css`:** Tailwind v4 con `@theme` (colores de marca, `text-body-soft`, utilidades `mesh-gradient`, `glass-card`, etc.).
- **`index.html`:** meta, fuentes, configuración adicional de Tailwind por CDN y estilos globales auxiliares.
- **Iconos:** Material Symbols enlazados en HTML; clases `material-symbols-outlined` en componentes.

---

## Calidad de código

```bash
npm run lint
```

Corrige los errores de TypeScript antes de integrar en main o de desplegar.

---

## Despliegue

1. Definir variables de entorno en el panel del proveedor (mismo nombre que en local, prefijo `VITE_` para las expuestas al cliente).
2. Ejecutar `npm run build`.
3. Publicar el contenido de **`dist/`**.

Revisad que `APP_URL` y las URLs de demo/legal coincidan con el dominio final.

---

## Créditos

Documentación y sitio web desarrollados por **Alba Sánchez Romero**.

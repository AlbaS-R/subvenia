import {useEffect, useState, type ChangeEvent, type FormEvent} from 'react';
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {CookieConsentBanner} from './components/CookieConsentBanner.tsx';
import {LegalCenterLayout} from './components/LegalCenterLayout.tsx';
import {sendContactEmail, validateEmailJsConfig} from './lib/email.ts';
import {analyticsCookiesAllowed} from './lib/cookieConsent.ts';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') {
    return;
  }
  if (!analyticsCookiesAllowed()) {
    return;
  }

  const payload = {event: eventName, ...params};
  window.dataLayer?.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/** Propuesta de valor (mensaje fijo de producto). */
const SUBVENIA_ONE_LINER =
  'Convertimos vuestra base de socios en oportunidades reales de financiación: automáticas, escalables y medibles.';

const SUBVENIA_PITCH_20S =
  'Hoy vuestros socios pierden ayudas porque nadie las cruza con su realidad. Subvenia convierte vuestra base de datos en un motor que detecta y activa financiación para cada empresa —sin equipo técnico interno y con impacto en euros.';

const SUBVENIA_CTA_DEMO = 'Demo';
const SUBVENIA_DEMO_APP_URL = import.meta.env.VITE_SUBVENIA_DEMO_APP_URL || 'http://localhost:3000/';

/** Decoración de hero alineada con la página Metodología (blobs, halo, rejilla). */
function MethodologyHeroDecorations() {
  return (
    <>
      <div
        aria-hidden
        className="ms-blob ms-blob--primary pointer-events-none absolute -left-[20%] top-[8%] h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-[radial-gradient(circle,rgba(68,237,204,0.35),transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="ms-blob ms-blob--secondary pointer-events-none absolute -right-[18%] bottom-[5%] h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.28),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden
        className="ms-breathe-halo pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,640px)] w-[min(100vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/15 bg-[conic-gradient(from_180deg,rgba(68,237,204,0.12),transparent_28%,rgba(59,130,246,0.1),transparent_62%,rgba(68,237,204,0.1))] opacity-40 blur-sm"
      />
      <div aria-hidden className="ms-hero-grid-overlay" />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto w-full shrink-0 border-t border-white/5 bg-[#0c1218]/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-8 md:py-12">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="text-xl font-bold text-white">Subvenia</div>
          <p className="font-sans text-sm uppercase tracking-widest text-slate-400">© 2026 Subvenia. Dinero para vuestros socios, en piloto automático.</p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap justify-center gap-6 md:gap-8">
          <NavLink className="font-sans text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad#cookies">
            Cookies
          </NavLink>
          <NavLink className="font-sans text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad">
            Privacidad
          </NavLink>
          <NavLink className="font-sans text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/terminos">
            Términos
          </NavLink>
          <NavLink className="font-sans text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/seguridad">
            Seguridad
          </NavLink>
          <NavLink className="font-sans text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/contacto">
            Contacto
          </NavLink>
        </nav>
      </div>
    </footer>
  );
}

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, [location.pathname]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-motion]'));
    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const delay = Number(entry.target.getAttribute('data-motion-delay') ?? 0);
          window.setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);

          observer.unobserve(entry.target);
        });
      },
      {threshold: 0.2, rootMargin: '0px 0px -8% 0px'},
    );

    elements.forEach((element) => {
      element.classList.add('motion-reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="font-body-md relative flex min-h-screen flex-1 flex-col text-[17px] leading-relaxed text-white selection:bg-emerald-300/30 md:text-[18px]">
      <div aria-hidden className="site-mesh-bg"></div>
      <div aria-hidden className="site-aurora-layer"></div>
      <div aria-hidden className="site-flow-gradient"></div>
      <div
        aria-hidden
        className="pointer-events-none fixed -right-24 top-1/4 z-0 h-[min(520px,50vh)] w-[min(520px,55vw)] rounded-full bg-[radial-gradient(circle,rgba(68,237,204,0.16),transparent_68%)] blur-3xl site-ambient-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-20 bottom-0 z-0 h-[min(400px,45vh)] w-[min(440px,50vw)] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_65%)] blur-3xl site-ambient-blob"
        style={{animationDelay: '-4s'}}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-32 top-1/3 z-0 h-[min(360px,42vh)] w-[min(380px,48vw)] rounded-full bg-[radial-gradient(circle,rgba(68,237,204,0.1),transparent_70%)] blur-3xl site-ambient-blob"
        style={{animationDelay: '-7s'}}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-1/4 right-[-10%] z-0 h-[min(340px,38vh)] w-[min(360px,45vw)] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.11),transparent_68%)] blur-3xl site-ambient-blob"
        style={{animationDelay: '-11s'}}
      />
      <div aria-hidden className="site-light-beam" style={{animationDelay: '-6s'}} />
      <div aria-hidden className="site-grid-overlay"></div>
      <nav className="fixed inset-x-0 top-3 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-[#1b2538]/80 px-4 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.55)] backdrop-blur-[20px] md:top-4 md:w-[calc(100%-2rem)] md:px-8 md:py-4">
        <NavLink className="z-10 text-base font-black tracking-tighter text-white md:text-2xl" to="/">
          Subvenia
        </NavLink>
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
          <div className="pointer-events-auto flex items-center gap-8">
          <NavLink
            className={({isActive}) =>
              `font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-emerald-300 ${isActive ? 'text-emerald-300' : 'text-slate-100'}`
            }
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-emerald-300 ${isActive ? 'text-emerald-300' : 'text-slate-100'}`
            }
            to="/metodologia"
          >
            Metodología
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-emerald-300 ${isActive ? 'text-emerald-300' : 'text-slate-100'}`
            }
            to="/casos-de-uso"
          >
            Casos de Uso
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-emerald-300 ${isActive ? 'text-emerald-300' : 'text-slate-100'}`
            }
            to="/precios"
          >
            Precios
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-emerald-300 ${isActive ? 'text-emerald-300' : 'text-slate-100'}`
            }
            to="/contacto"
          >
            Contacto
          </NavLink>
          </div>
        </div>
        <a
          className="z-10 rounded-xl bg-[#57e8cd] px-3 py-1.5 text-sm font-semibold text-[#00382e] transition-transform active:scale-95 md:px-6 md:py-2 md:text-base md:font-medium"
          onClick={() => trackEvent('cta_click', {cta_id: 'navbar_demo', location: 'navbar'})}
          href={SUBVENIA_DEMO_APP_URL}
        >
          {SUBVENIA_CTA_DEMO}
        </a>
      </nav>
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <CookieConsentBanner />
      <SiteFooter />
    </div>
  );
}

export function HomePage() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const reached = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / maxScroll) * 100);
      thresholds.forEach((threshold) => {
        if (depth >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          trackEvent('scroll_depth', {depth_percent: threshold, page: 'home'});
        }
      });
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="method-page">
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pb-20 text-center md:px-8 md:pb-28">
        <MethodologyHeroDecorations />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center pt-28 md:pt-36">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2" data-motion data-motion-delay="20">
            <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">A vuestra medida</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">Pedís el informe, nosotros lo dejamos listo</span>
          </div>
          <h1 className="font-h1 mb-6 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl" data-motion data-motion-delay="100">
            <span className="method-gradient-headline">Pedís, nosotros lo generamos.</span>
            <br />
            <span className="text-white">Del encargo al entregable listo para vuestros socios, sin fricción.</span>
          </h1>
          <p className="font-body-lg mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-body-soft md:text-xl" data-motion data-motion-delay="140">
            {SUBVENIA_PITCH_20S}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base font-medium italic text-white/90 md:text-lg" data-motion data-motion-delay="170">
            No vendemos “IA”: vendemos una forma automática de que vuestra cámara, clúster o asociación deje de ser pasiva y pase a generar oportunidades económicas medibles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4" data-motion data-motion-delay="240">
            <NavLink
              className="rounded-2xl bg-secondary px-8 py-3.5 text-base font-bold text-on-secondary shadow-[0_0_32px_rgba(68,237,204,0.25)] transition-transform hover:scale-[1.02]"
              onClick={() => trackEvent('cta_click', {cta_id: 'hero_primary', location: 'hero'})}
              to="/contacto"
            >
              {SUBVENIA_CTA_DEMO}
            </NavLink>
            <NavLink
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-secondary/40 hover:text-secondary"
              onClick={() => trackEvent('cta_click', {cta_id: 'hero_secondary', location: 'hero'})}
              to="/metodologia"
            >
              Ver cómo funciona
            </NavLink>
          </div>
        </div>

        <div className="group relative z-10 mx-auto mt-12 w-full max-w-5xl md:mt-20 motion-float-soft" data-motion="scale" data-motion-delay="300">
          <div className="absolute -inset-4 bg-[#44edcc]/10 blur-3xl transition-all duration-700 group-hover:bg-[#44edcc]/20"></div>
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[2px] z-0 rounded-[34px] bg-[conic-gradient(from_0deg,rgba(68,237,204,0.45),transparent_28%,rgba(59,130,246,0.35),transparent_58%,rgba(68,237,204,0.4))] opacity-50 blur-[1.5px] ms-breathe-halo"
          />
          <div className="glass-card inner-glow relative z-10 overflow-hidden rounded-[32px] p-4">
            <div
              aria-label="Panel analítico: impacto del servicio de informes de subvenciones hacia clientes"
              className="relative h-[220px] w-full overflow-hidden rounded-[24px] border border-white/[0.08] bg-[radial-gradient(ellipse_120%_100%_at_70%_-20%,rgba(68,237,204,0.18),transparent_50%),radial-gradient(ellipse_80%_60%_at_10%_100%,rgba(96,165,250,0.08),transparent_45%),linear-gradient(168deg,#0b1526_0%,#0e1a2c_38%,#060b10_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:h-[500px]"
              role="img"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.045]"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
                  backgroundSize: '56px 100%',
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '100% 48px',
                }}
              />
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 900 420"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="heroChartArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#44edcc" stopOpacity="0.55" />
                    <stop offset="45%" stopColor="#44edcc" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#44edcc" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="heroChartStroke" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#6ff0d8" />
                    <stop offset="55%" stopColor="#44edcc" />
                    <stop offset="100%" stopColor="#2ec4a8" />
                  </linearGradient>
                  <filter colorInterpolationFilters="sRGB" height="160%" id="heroChartGlow" width="160%" x="-30%" y="-30%">
                    <feGaussianBlur result="blur" stdDeviation="5" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter colorInterpolationFilters="sRGB" height="200%" id="heroChartDotGlow" width="200%" x="-50%" y="-50%">
                    <feGaussianBlur result="b" stdDeviation="3" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 72 318 C 160 312, 210 278, 285 248 C 365 215, 430 198, 505 168 C 585 135, 655 118, 725 92 C 785 72, 820 58, 858 48"
                  fill="none"
                  opacity={0.22}
                  stroke="rgba(255,255,255,0.55)"
                  strokeDasharray="10 14"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M 56 368 L 56 302 C 120 298, 175 262, 248 228 C 328 190, 395 178, 475 142 C 558 104, 632 88, 712 58 C 768 38, 812 28, 848 22 L 848 368 Z"
                  fill="url(#heroChartArea)"
                />
                <path
                  d="M 56 302 C 120 298, 175 262, 248 228 C 328 190, 395 178, 475 142 C 558 104, 632 88, 712 58 C 768 38, 812 28, 848 22"
                  fill="none"
                  filter="url(#heroChartGlow)"
                  stroke="url(#heroChartStroke)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3.2"
                />
                <circle cx="848" cy="22" fill="#0a1524" opacity="0.55" r="14" />
                <circle cx="848" cy="22" fill="#44edcc" filter="url(#heroChartDotGlow)" opacity="0.35" r="10" />
                <circle cx="848" cy="22" fill="#e8fffa" r="5" />
                <g opacity={0.9}>
                  {[628, 658, 688, 718, 748, 778, 808].map((x, i) => (
                    <rect
                      fill="rgba(68,237,204,0.12)"
                      height={22 + i * 10}
                      key={x}
                      rx="3"
                      width="14"
                      x={x}
                      y={338 - (22 + i * 10)}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <div className="glass-card motion-float-soft absolute top-12 left-12 hidden flex-col gap-1 rounded-2xl border-white/10 p-6 md:block">
              <span className="text-h3 font-bold text-secondary">+€2.4M</span>
              <span className="font-label-caps text-body-soft">AYUDAS TRAZADAS PARA CLIENTES</span>
            </div>
            <div className="glass-card absolute right-12 bottom-12 hidden items-center gap-4 rounded-2xl border-white/10 p-6 md:flex motion-shimmer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <span className="material-symbols-outlined motion-pulse-soft">analytics</span>
              </div>
              <div>
                <div className="mb-2 h-2 w-24 rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-secondary"></div>
                </div>
                <span className="font-label-caps text-body-soft">COLAS DE INFORMES POR CLIENTE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="method-band relative mx-auto max-w-7xl overflow-hidden px-4 py-12 md:px-8 md:py-16" data-motion data-motion-delay="60">
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 mb-10 text-center md:mb-12">
          <span className="font-label-caps mb-4 block text-secondary">LO QUE MIDEN EN DIRECCIÓN</span>
          <h2 className="font-h2 text-h2 text-white">
            De “hacemos eventos” a <span className="ms-kinetic-text">“movemos millones”</span>
          </h2>
        </div>
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ['100%', 'automatización operativa', 'Cruce masivo con ayudas, cero caza manual en PDFs: vuestro equipo hace más con menos cabeza contable.'],
            ['50 → 5.000', 'misma estructura', 'Escaláis socios sin multiplicar coste marginal: el motor aguanta el volumen que la red ya tiene.'],
            ['€€', 'argumento para la cuota', 'Reporting listo: “este año activamos X M€ en oportunidades” —arma comercial, política y retención.'],
          ].map(([value, label, desc]) => (
            <article
              className="group method-surface-card relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40"
              data-motion
              data-motion-delay={String(100 + Number(value.length) * 20)}
              key={label}
            >
              <div aria-hidden className="ms-card-ambient" />
              <div className="relative z-10">
                <p className="mb-3 text-4xl font-black tracking-tight text-secondary motion-float-soft">{value}</p>
                <p className="font-label-caps mb-4 text-white">{label}</p>
                <p className="text-base text-body-soft">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method-band relative mx-auto max-w-7xl overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="80">
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 mb-10 flex flex-col items-start gap-6 md:mb-16 md:flex-row md:items-end md:gap-12">
          <div className="flex-1">
            <span className="font-label-caps mb-4 block text-secondary">CUATRO DOLORES REALES</span>
            <h2 className="font-h2 text-h2 text-white">
              Clústers y cámaras <span className="ms-kinetic-text">atascados en lo mismo</span>
            </h2>
          </div>
          <p className="font-body-lg flex-1 text-body-soft">
            Más allá de networking y eventos, necesitáis un servicio diferencial que escale y sea medible. Sin capacidad técnica interna para cruzar ayudas a escala, se pierde financiación para los socios y se debilita el argumento de la cuota.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="group method-surface-card relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-secondary/30" data-motion="left" data-motion-delay="120">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#ff8ea1]">sentiment_dissatisfied</span>
              <h3 className="text-h3 mb-4 text-white">Poco valor continuo</h3>
              <p className="text-body-soft">Los socios no perciben ayuda mes a mes: solo actos y carné. Falta un “producto” que demuestre utilidad real.</p>
            </div>
          </div>
          <div className="group method-surface-card relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-secondary/30" data-motion data-motion-delay="140">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#60a5fa]">engineering</span>
              <h3 className="text-h3 mb-4 text-white">Cero escala técnica</h3>
              <p className="text-body-soft">Nadie en plantilla puede leer 400 convocatorias y cruzarlas con 2.000 empresas. Sin motor, no hay servicio.</p>
            </div>
          </div>
          <div className="group method-surface-card relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-secondary/30" data-motion data-motion-delay="180">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-secondary">savings</span>
              <h3 className="text-h3 mb-4 text-white">Dinero que se escapa</h3>
              <p className="text-body-soft">Las ayudas existen, pero vuestros socios no las ven: perdéis impacto económico directo y historias que contar.</p>
            </div>
          </div>
          <div className="group method-surface-card relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-secondary/30" data-motion="right" data-motion-delay="220">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#fbbf24]">workspace_premium</span>
              <h3 className="text-h3 mb-4 text-white">Cuota sin discurso</h3>
              <p className="text-body-soft">Cuesta justificar la membresía sin cifras: fidelización floja y presión política para demostrar impacto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="100">
        <div aria-hidden className="ms-section-field ms-section-field--quiet" />
        <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/5 blur-[120px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="font-label-caps mb-4 block text-secondary">LO QUE VENDÉIS DE VERDAD</span>
            <h2 className="font-h2 text-h2 text-white">
              <span className="ms-kinetic-text">Una plataforma</span> que activa euros en la calle
            </h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-secondary/25 to-transparent md:block"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                ['upload', 'Subís vuestra base', 'CSV / Excel de socios o empresas: en minutos está lista para cruzar con todas las ayudas vivas.', false],
                ['hub', 'Cruce automático total', 'Sin equipo técnico interno: el motor encaja cada empresa con líneas autonómicas, estatales y sectoriales.', false],
                ['description', 'Informe por empresa', 'Cada socio recibe su propio mapa de oportunidades, redactado y listo para revisión humana.', false],
                ['rocket_launch', 'Activación masiva', 'Disparáis oportunidades a escala —email, campaña o servicio premium— con trazabilidad y ROI.', true],
              ].map(([icon, title, text, isActive]) => (
                <div className="group relative flex flex-col items-center text-center" data-motion data-motion-delay={String(isActive ? 260 : 170)} key={title}>
                  <div className={`relative mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-secondary/40 text-secondary transition-transform group-hover:scale-110 motion-float-soft ${isActive ? 'bg-secondary !text-on-secondary' : 'bg-[#101722]'}`}>
                    <div aria-hidden className="ms-card-ambient opacity-70" />
                    <span className="material-symbols-outlined relative z-10 text-3xl">{icon}</span>
                  </div>
                  <h4 className="mb-2 font-bold text-white">{title}</h4>
                  <p className="text-base text-body-soft">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="120">
        <div aria-hidden className="ms-section-field" />
        <div
          aria-hidden
          className="ms-blob ms-blob--primary pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(68,237,204,0.1),transparent_70%)] blur-3xl"
        />
        <h2 className="relative z-10 mb-16 text-center font-h2 text-h2 text-white">
          Valor por capas: <span className="ms-kinetic-text">dirección, operación, euros, reputación</span>
        </h2>
        <div className="relative z-10 grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
          <div className="glass-card group relative overflow-hidden rounded-[32px] p-10 md:col-span-8" data-motion="left" data-motion-delay="140">
            <div aria-hidden className="ms-card-ambient" />
            <div className="absolute top-0 right-0 p-8 opacity-20 transition-opacity group-hover:opacity-40">
              <span className="material-symbols-outlined text-[120px] text-secondary">rocket_launch</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-h2 mb-4 text-white">Estrategia: deja de ser “la asociación pasiva”</h3>
              <p className="text-body-lg max-w-md text-body-soft">
                Pasáis a ser el generador de oportunidades económicas: discurso claro para captar y retener socios, y posicionamiento útil frente a administraciones.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-secondary p-10 text-on-secondary md:col-span-4 motion-shimmer" data-motion="right" data-motion-delay="200">
            <div aria-hidden className="ms-card-ambient opacity-40" />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl">shield</span>
              <div>
                <h3 className="mb-2 text-3xl font-bold">Operación: más con menos</h3>
                <p className="text-on-secondary/80 text-base">Automatización real: desaparece la caza manual de ayudas. 50 o 5.000 empresas sin coste marginal loco.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/40 p-10 md:col-span-4" data-motion="left" data-motion-delay="240">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-[#60a5fa]">hub</span>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">Economía: euros que antes no veían</h3>
                <p className="text-body-soft">Los socios acceden a financiación que no detectaban: más inversión e innovación. Podéis monetizarlo (premium, upsell o cuota blindada).</p>
              </div>
            </div>
          </div>
          <div className="glass-card relative flex items-center gap-12 overflow-hidden rounded-[32px] p-10 md:col-span-8" data-motion="right" data-motion-delay="280">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10 flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
              <div className="flex-1">
                <h3 className="text-h3 mb-4 text-white">Institucional: números que callan bocas</h3>
                <p className="text-body-soft">Indicadores de impacto listos para subvenciones propias, pactos públicos y relato político: demostrar relevancia en el ecosistema.</p>
              </div>
              <div className="hidden h-32 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:block">
                <img alt="Chart preview" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAed2lPlgrgsqiygOeqfHogmf-wwr8YUTktnyApo41DaB9229M0Dej9bb5Y9cnFIz_Bcw7D18eg99qxlur2f7u0PYH-WVS0FKwVhqUiJh9r10Ko_cVyKL0pHyO2n1OHXYTsOQcewAh703tkrHazbyrhTc09lPQ5QzFGZs0A7YtP-9kZfRIzwFfGhNJLMB5gYg_WmhC0laTsBDMaLohwr5AAVMiHSY8Z2XTlpMGph1_5qrhmltD4RFzypl7I6rv5E5Urbx5pgG9ViwO-" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="140">
        <div aria-hidden className="ms-section-field ms-section-field--medium" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="font-h2 text-h2 text-white">
              Por qué elegir <span className="ms-kinetic-text">Subvenia</span>
            </h2>
            <p className="mt-4 text-lg text-body-soft">No es un boletín ni un buscador bonito. Es un motor conectado a vuestra base que produce oportunidades personalizadas y impacto económico directo.</p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-2">
            <div className="relative overflow-hidden bg-[#101821] p-12">
              <div aria-hidden className="ms-card-ambient opacity-50" />
              <div className="relative z-10">
                <h4 className="font-label-caps mb-8 text-body-soft">LO QUE NO SOIS</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-error">close</span><span>Un buscador de subvenciones que el socio usa solo y se pierde.</span></li>
                  <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-error">close</span><span>Un boletín informativo que nadie mide ni cobra.</span></li>
                  <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-error">close</span><span>Un PDF genérico sin cruce con la base real de empresas.</span></li>
                </ul>
              </div>
            </div>
            <div className="glass-card group relative overflow-hidden p-12">
              <div aria-hidden className="ms-card-ambient" />
              <div className="absolute inset-0 bg-secondary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <h4 className="font-label-caps relative z-10 mb-8 text-secondary">LO QUE SÍ SOIS</h4>
              <ul className="relative z-10 space-y-6">
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Motor automatizado de oportunidades personalizadas, enganchado a vuestra base.</span></li>
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Activación masiva + segmentación inteligente + reporting de impacto en €.</span></li>
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Base para servicio premium o upsell: monetizáis el valor, no solo el dato.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="160">
        <div aria-hidden className="ms-section-field" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(68,237,204,0.08),transparent_45%)]"></div>
        <div
          aria-hidden
          className="ms-blob ms-blob--secondary pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_68%)] blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="font-label-caps mb-4 block text-secondary">CUATRO GOLPES DE EFECTO</span>
            <h2 className="font-h2 text-h2 text-white">
              Lo que podéis <span className="ms-kinetic-text">activar mañana mismo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              ['01', 'Activación masiva', '“Cada socio recibe su informe personalizado de ayudas” — impacto inmediato y percepción brutal de valor.'],
              ['02', 'Segmentación inteligente', 'Sabéis qué empresa encaja con qué línea: campañas dirigidas que sí responden.'],
              ['03', 'Servicio premium', 'Nueva línea de ingresos: ayuda a tramitar lo detectado, además del informe.'],
              ['04', 'Reporting político', '“Este año movimos X M€ en oportunidades” — munición comercial e institucional.'],
            ].map(([num, title, text]) => (
              <article
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141a21] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40"
                data-motion
                data-motion-delay={String(Number(num) * 90)}
                key={title}
              >
                <div aria-hidden className="ms-card-ambient" />
                <div className="relative z-10">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 text-sm font-bold text-secondary transition-transform duration-300 group-hover:scale-110">
                    {num}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                  <p className="text-body-soft">{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <NavLink
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-3 text-base font-bold text-on-secondary transition-transform hover:-translate-y-0.5"
              onClick={() => trackEvent('cta_click', {cta_id: 'midpage_demo', location: 'demo_narrative'})}
              to="/contacto"
            >
              {SUBVENIA_CTA_DEMO}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 md:px-8 md:py-20" data-motion data-motion-delay="200">
        <div aria-hidden className="ms-section-field ms-section-field--quiet" />
        <div className="glass-card relative overflow-hidden rounded-[28px] border border-white/10 p-8 motion-shimmer md:p-10">
          <div aria-hidden className="ms-card-ambient opacity-60" />
          <div className="relative z-10 mb-8 text-center">
            <span className="font-label-caps mb-3 block text-secondary">DE LA PRIMERA LLAMADA AL PRIMER DISPARO</span>
            <h2 className="text-3xl font-bold text-white">
              En 7 días tenéis <span className="ms-kinetic-text">prueba con datos reales</span>
            </h2>
          </div>
          <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['Diagnóstico express', 'Medimos base de socios, dolores y qué prometéis hoy en cuotas. Sin humo.'],
              ['Plan de impacto', 'Definimos qué convocatorias, qué segmentos y qué “momento wow” (masivo o premium).'],
              ['Go-live guiado', 'Disparáis el primer lote de informes con acompañamiento: métricas desde el día 1.'],
            ].map(([title, text]) => (
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 p-5 transition-colors hover:border-secondary/35" data-motion data-motion-delay="130" key={title}>
                <div aria-hidden className="ms-card-ambient opacity-50" />
                <div className="relative z-10">
                  <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                  <p className="text-base text-body-soft">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8" data-motion data-motion-delay="220">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-secondary/25 bg-gradient-to-br from-secondary/15 via-[#0a1524] to-[#060a10] p-10 text-center md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
          <h2 className="relative z-10 font-h2 text-2xl text-white md:text-3xl">
            ¿Listos para <span className="method-gradient-headline">vender valor</span> —no horas— a vuestros socios?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-body-soft md:text-lg">
            {SUBVENIA_ONE_LINER} Si lo entendéis como “dinero automático para la red”, compra sentido. Si lo veis como “otra tool”, no.
          </p>
          <NavLink
            className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-10 py-4 text-lg font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.35)] transition-transform hover:scale-[1.03]"
            onClick={() => trackEvent('cta_click', {cta_id: 'closing_demo', location: 'closing_section'})}
            to="/contacto"
          >
            {SUBVENIA_CTA_DEMO}
            <span className="material-symbols-outlined">north_east</span>
          </NavLink>
          <p className="relative z-10 mt-4 text-sm text-body-soft">Sin compromiso. Análisis de encaje para vuestra entidad.</p>
        </div>
      </section>

    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{type: 'idle' | 'success' | 'error'; text: string}>({
    type: 'idle',
    text: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = event.target;
    setFormData((prev) => ({...prev, [id]: value}));

    if (submitFeedback.type !== 'idle') {
      setSubmitFeedback({type: 'idle', text: ''});
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent('contact_form_submit', {form_id: 'contact_main', location: 'contact_page'});

    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setSubmitFeedback({
        type: 'error',
        text: 'Completa todos los campos antes de enviar.',
      });
      return;
    }

    try {
      const config = validateEmailJsConfig();
      if (!config.ok) {
        setSubmitFeedback({
          type: 'error',
          text: `Falta configuración EmailJS: ${config.missing.join(', ')}`,
        });
        return;
      }

      setIsSubmitting(true);
      await sendContactEmail(formData);
      trackEvent('contact_form_success', {form_id: 'contact_main'});
      setSubmitFeedback({
        type: 'success',
        text: 'Mensaje enviado correctamente. Os contactaremos en menos de 24 h.',
      });
      setFormData({name: '', email: '', company: '', message: ''});
    } catch (error: unknown) {
      const errorMessage =
        typeof error === 'object' && error !== null && 'text' in error
          ? String((error as {text?: unknown}).text)
          : error instanceof Error
            ? error.message
            : 'Error desconocido';

      console.error('EmailJS error:', error);
      trackEvent('contact_form_error', {form_id: 'contact_main'});
      setSubmitFeedback({
        type: 'error',
        text: `No se pudo enviar (${errorMessage}). Revisa Service ID, Template ID, Public Key y variables del template.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="method-page">
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16" data-motion data-motion-delay="80" id="contacto">
        <MethodologyHeroDecorations />
        <div className="relative z-10 mx-auto max-w-5xl pb-10 text-center" data-motion data-motion-delay="100">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">Contacto</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">Respuesta en menos de 24 h</span>
          </div>
          <h1 className="font-h1 mb-4 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl">
            <span className="method-gradient-headline">Vamos al grano</span>
            <br />
            <span className="text-white">¿cuántos socios y cuántos € perdidos?</span>
          </h1>
          <p className="font-body-lg mx-auto max-w-2xl text-lg text-body-soft md:text-xl">
            {SUBVENIA_PITCH_20S} Dejad en el formulario números aproximados: os devolvemos con una propuesta que podáis enseñar en junta sin pasar vergüenza.
          </p>
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 pb-16 md:grid-cols-2 md:gap-12 md:pb-24">
          <div className="method-surface-card inner-glow relative overflow-hidden rounded-[28px] p-8 md:rounded-[32px] md:p-10" data-motion="left" data-motion-delay="120">
            <div aria-hidden className="ms-card-ambient opacity-70" />
            <div className="relative z-10">
            <span className="font-label-caps mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-secondary">
              <span className="material-symbols-outlined text-base">alternate_email</span>
              CANALES
            </span>
            <h2 className="font-h2 mb-4 text-h2 text-white">
              Hecho para que cobréis: <span className="ms-kinetic-text">motor de €</span> para vuestra red
            </h2>
            <p className="font-body-lg mb-8 text-body-soft">
              Cuántos socios en base, cómo cobráis hoy y si queréis masivo, premium o reporting político: en una llamada os decimos si el encaje es brutal o si aún no toca.
            </p>
            <div className="mb-8 space-y-4 text-body-soft">
              <p className="group flex items-center gap-3 motion-float-soft">
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110">mail</span>
                contacto@subvenia.ai
              </p>
              <p className="group flex items-center gap-3 motion-float-soft">
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110">call</span>
                +34 900 123 456
              </p>
              <p className="group flex items-center gap-3 motion-float-soft">
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110">schedule</span>
                Respondemos en menos de 24 horas
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface-container-low/60 p-4">
                <p className="text-2xl font-bold text-white">24h</p>
                <p className="text-base text-body-soft">Tiempo medio de respuesta</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-container-low/60 p-4">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-base text-body-soft">Enfoque en cámaras, clusters y asociaciones</p>
              </div>
            </div>
            </div>
          </div>

          <div className="method-surface-card relative overflow-hidden rounded-[28px] p-8 shadow-[0_20px_60px_-30px_rgba(68,237,204,0.2)] md:rounded-[32px] md:p-10" data-motion="right" data-motion-delay="180">
            <div aria-hidden className="ms-card-ambient" />
            <div className="relative z-10">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Tirad de los <span className="ms-kinetic-text">números</span>, no del marketing
            </h3>
            <p className="mb-6 text-base text-body-soft">Nº de socios, si ya vendéis servicios premium y qué prometéis con la cuota: os devolvemos con un plan de disparo que podáis defender ante junta.</p>
            <form className="space-y-5" onSubmit={handleContactSubmit}>
              <div>
                <label className="mb-2 block text-base font-medium text-body-soft" htmlFor="name">Nombre completo</label>
                <input className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="name" onChange={handleInputChange} placeholder="Nombre y apellidos" type="text" value={formData.name} />
              </div>
              <div>
                <label className="mb-2 block text-base font-medium text-body-soft" htmlFor="email">Email profesional</label>
                <input className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="email" onChange={handleInputChange} placeholder="nombre@empresa.com" type="email" value={formData.email} />
              </div>
              <div>
                <label className="mb-2 block text-base font-medium text-body-soft" htmlFor="company">Entidad (cámara, clúster, empresa…)</label>
                <input className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="company" onChange={handleInputChange} placeholder="Ej. Cámara de X, Clúster Y, Área de subvenciones de Z" type="text" value={formData.company} />
              </div>
              <div>
                <label className="mb-2 block text-base font-medium text-body-soft" htmlFor="message">Mensaje</label>
                <textarea className="h-32 w-full resize-none rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="message" onChange={handleInputChange} placeholder="Socios en base, dolor principal (cuota, ayudas, fidelización…) y si queréis masivo, premium o reporting." value={formData.message} />
              </div>
              {submitFeedback.type !== 'idle' ? (
                <p className={`text-base ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>
                  {submitFeedback.text}
                </p>
              ) : null}
              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 text-base font-bold text-on-secondary transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(68,237,204,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
                onClick={() => trackEvent('cta_click', {cta_id: 'contact_form_submit', location: 'contact_form'})}
                type="submit"
              >
                {isSubmitting ? 'Enviando...' : 'Pedir demo'}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export function MethodologyPage() {
  const steps = [
    {
      icon: 'database',
      title: 'Carga de cartera cliente',
      description:
        'Importáis las empresas que asesoráis (socios, filiales, cuentas) desde CSV o Excel y unificáis datos para cruzarlos con convocatorias.',
      tag: 'Base unificada',
    },
    {
      icon: 'palette',
      title: 'Marca de vuestra entidad',
      description:
        'Logo, colores y tono para que cada informe o comunicación salga como documento vuestro hacia el cliente final.',
      tag: 'Vuestra firma',
    },
    {
      icon: 'person_search',
      title: 'Elegís cliente y convocatoria',
      description:
        'El agente selecciona la empresa y la ayuda concreta; el sistema reúne requisitos, plazos y contexto para ese informe.',
      tag: 'Caso a caso',
    },
    {
      icon: 'auto_awesome',
      title: 'Informe listo para revisar',
      description:
        'La IA genera el borrador ejecutivo —resumen, encaje, riesgos y próximos pasos— para que vuestro equipo lo valide antes de enviarlo al cliente.',
      tag: 'Borrador asistido',
    },
    {
      icon: 'send',
      title: 'Entrega al cliente',
      description:
        'Tras la revisión interna, exportáis o enviáis desde el flujo el resultado al cliente o socio, con registro para seguimiento.',
      tag: 'Cierre trazado',
    },
  ];

  return (
    <div className="method-page">
      <section className="relative flex min-h-[72vh] flex-col justify-center overflow-hidden px-4 pt-28 pb-16 md:min-h-[80vh] md:px-8 md:pt-36 md:pb-24">
        <MethodologyHeroDecorations />

        <div className="relative z-10 mx-auto max-w-5xl text-center" data-motion data-motion-delay="40">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">Metodología en 5 fases</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">Base → cruce → informe → activación</span>
          </div>
          <h1 className="font-h1 mb-6 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl">
            <span className="method-gradient-headline">Así se orquesta</span>
            <br />
            <span className="text-white">el dinero para cada socio</span>
          </h1>
          <p className="font-body-lg mx-auto max-w-2xl text-lg text-body-soft md:text-xl">
            {SUBVENIA_PITCH_20S} Abajo, el desglose operativo en cinco pasos —el mismo pipeline que podréis enseñar en junta o a un socio escéptico.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <NavLink
              className="rounded-2xl bg-secondary px-8 py-3.5 text-base font-bold text-on-secondary shadow-[0_0_32px_rgba(68,237,204,0.25)] transition-transform hover:scale-[1.02]"
              onClick={() => trackEvent('cta_click', {cta_id: 'methodology_demo', location: 'methodology_hero'})}
              to="/contacto"
            >
              Hablar con el equipo
            </NavLink>
            <NavLink
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-secondary/40 hover:text-secondary"
              to="/casos-de-uso"
            >
              Ver casos de uso
            </NavLink>
          </div>
        </div>

        <button
          type="button"
          className="method-scroll-hint absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 rounded-xl border border-transparent px-4 py-2 text-body-soft transition-colors hover:border-white/10 hover:bg-white/5 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          aria-label="Ir a la línea de tiempo de fases"
          onClick={() => {
            trackEvent('cta_click', {cta_id: 'methodology_scroll_timeline', location: 'methodology_hero'});
            const el = document.getElementById('metodologia-linea-tiempo');
            if (!el) {
              return;
            }
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            el.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
          }}
        >
          <span className="text-xs uppercase tracking-widest">Explorar fases</span>
          <span className="material-symbols-outlined text-2xl text-secondary/80" aria-hidden>
            expand_more
          </span>
        </button>
      </section>

      <section
        className="method-band relative scroll-mt-28 px-4 py-16 md:scroll-mt-32 md:px-8 md:py-24"
        data-motion
        data-motion-delay="60"
        id="metodologia-linea-tiempo"
      >
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="font-label-caps mb-3 text-secondary">Línea de tiempo</p>
            <h2 className="font-h2 text-2xl text-white md:text-3xl">Las cinco fases del proceso</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-soft">
              Misma historia en vertical: subís base, marca, caso, borrador y disparo al socio. Visual para que dirección y técnico la compartan sin perderse.
            </p>
          </div>

          <div className="relative px-1 md:px-4">
            <div
              aria-hidden
              className="method-timeline-line pointer-events-none absolute bottom-8 left-[calc(0.25rem+1.375rem-1.5px)] top-8 z-0 w-[3px] rounded-full shadow-[0_0_20px_rgba(68,237,204,0.12)] md:bottom-10 md:left-1/2 md:top-10 md:-translate-x-1/2"
            />

            <ol className="relative z-10 m-0 list-none space-y-0 p-0">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <li className="method-timeline-step relative pb-10 last:pb-0 md:pb-14" key={step.title}>
                    <div className="relative grid grid-cols-[2.75rem_1fr] items-start gap-x-3 md:grid-cols-[1fr_4rem_1fr] md:gap-x-6">
                      <div
                        className={`relative z-10 row-start-1 flex justify-center pt-0.5 md:pt-1 ${
                          isLeft
                            ? 'col-start-1 justify-self-end md:col-start-2 md:justify-self-center'
                            : 'col-start-2 justify-self-start md:col-start-2 md:justify-self-center'
                        }`}
                      >
                        <div className="method-timeline-node flex h-11 w-11 items-center justify-center rounded-full border border-[#0a1018] bg-[#0c1522] text-sm font-bold text-secondary ring-4 ring-[#070c12]/90 md:h-14 md:w-14 md:text-base">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      <article
                        className={`group method-surface-card relative min-w-0 overflow-hidden rounded-[24px] p-6 md:max-w-lg md:rounded-[28px] md:p-8 ${
                          isLeft
                            ? 'col-start-2 row-start-1 md:col-start-1 md:justify-self-end md:text-right'
                            : 'col-start-1 row-start-1 md:col-start-3 md:justify-self-start md:text-left'
                        }`}
                        data-motion
                        data-motion-delay={String(80 + index * 70)}
                      >
                        <div className="ms-card-ambient" />
                        <span
                          aria-hidden
                          className={`pointer-events-none absolute -top-4 font-black leading-none text-white/[0.05] select-none ${
                            isLeft ? '-right-2 md:right-auto md:left-2' : '-right-2'
                          }`}
                          style={{fontSize: 'clamp(3.5rem, 12vw, 5.5rem)'}}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="relative z-10">
                          <div
                            className={`mb-4 flex flex-wrap items-center gap-3 ${
                              isLeft ? 'md:flex-row-reverse md:justify-end' : ''
                            }`}
                          >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/35 bg-secondary/10 text-secondary md:h-11 md:w-11">
                              <span className="material-symbols-outlined text-[22px] md:text-2xl">{step.icon}</span>
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary/95">
                              {step.tag}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg font-bold text-white md:text-2xl">{step.title}</h3>
                          <p className="text-base leading-relaxed text-body-soft">{step.description}</p>
                          <p className={`mt-4 text-sm text-secondary/80 ${isLeft ? 'md:text-right' : ''}`}>
                            Fase {index + 1} de {steps.length}
                          </p>
                        </div>
                      </article>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8" data-motion data-motion-delay="100">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-secondary/25 bg-gradient-to-br from-secondary/15 via-[#0a1524] to-[#060a10] p-10 text-center md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
          <h2 className="relative z-10 font-h2 text-2xl text-white md:text-3xl">¿Veis a vuestros socios perdiendo ayudas ahora mismo?</h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-body-soft">
            En 20 minutos os enseñamos el motor con datos ficticios + vuestra base real (anonimizada si hace falta). Si no os encaja el discurso económico, paramos.
          </p>
          <NavLink
            className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-10 py-4 text-lg font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.35)] transition-transform hover:scale-[1.03]"
            onClick={() => trackEvent('cta_click', {cta_id: 'methodology_closing', location: 'methodology_cta'})}
            to="/contacto"
          >
            {SUBVENIA_CTA_DEMO}
            <span className="material-symbols-outlined">north_east</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

const casosDeUsoOrganizaciones = [
  {
    icon: 'rocket_launch',
    title: 'Activación masiva',
    desc: 'Un clic y cada socio recibe su informe personalizado de ayudas. Impacto inmediato y sensación de “por fin hacéis algo por mí”.',
  },
  {
    icon: 'filter_alt',
    title: 'Segmentación inteligente',
    desc: 'Sabéis qué empresa encaja con qué línea antes de llamar. Campañas hiperdirigidas en lugar de correos basura.',
  },
  {
    icon: 'payments',
    title: 'Servicio premium / upsell',
    desc: 'Informe + acompañamiento a tramitar: nueva línea de ingresos o excusa perfecta para subir la cuota con ROI tangible.',
  },
  {
    icon: 'monitoring',
    title: 'Reporting que manda',
    desc: '“Este año movimos X M€ en oportunidades” — listo para junta, prensa y administración. Deislamos el bla bla.',
  },
];

const casosDeUsoRoles = [
  {
    titulo: 'Presidente / dirección',
    rol: 'Necesitan el argumentario para cuotas, subvenciones propias y foto con la administración.',
    encaje: 'Subvenia = cifras de impacto y relato “generamos oportunidades”, no solo eventos.',
  },
  {
    titulo: 'Equipo técnico o servicios',
    rol: 'Ejecutan sin ampliar plantilla: cruzan datos, disparan informes y miden respuesta.',
    encaje: 'Automatización real: dejan de apagar fuegos y pasan a orquestar oleadas de valor.',
  },
  {
    titulo: 'Marketing o comunicación',
    rol: 'Les das historias con números: campañas de captación y retención basadas en casos reales.',
    encaje: 'Cada oleada masiva es contenido + prueba social interna lista para redes y notas.',
  },
];

const casosDeUsoContexto = [
  {
    title: 'Cuando la cuota duele',
    desc: 'Necesitáis justificar el precio con algo más tangible que “networking de calidad”.',
  },
  {
    title: 'Cuando la administración pide impacto',
    desc: 'Os piden KPIs de empresas ayudadas y euros movilizados: sin datos, perdéis subvenciones y relevancia.',
  },
  {
    title: 'Cuando un clúster vecino ya presume de “motor de ayudas”',
    desc: 'La competencia silenciosa también vende servicios digitales a empresas: no podéis quedar como los lentos.',
  },
];

export function CasosDeUsoPage() {
  return (
    <div className="method-page">
      <section className="relative flex min-h-[72vh] flex-col justify-center overflow-hidden px-4 pt-28 pb-16 md:min-h-[78vh] md:px-8 md:pt-36 md:pb-24" data-motion data-motion-delay="70">
        <MethodologyHeroDecorations />
        <div className="relative z-10 mx-auto max-w-5xl text-center" data-motion="scale" data-motion-delay="110">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">Casos de uso</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">Playbook comercial incluido</span>
          </div>
          <h1 className="font-h1 mb-6 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl">
            <span className="method-gradient-headline">Cuatro formas</span>
            <br />
            <span className="text-white">de monetizar el miedo a perder ayudas</span>
          </h1>
          <p className="font-body-lg mx-auto max-w-2xl text-lg text-body-soft md:text-xl">
            Cámaras, clústers y asociaciones usan estas palancas para <strong className="font-semibold text-white">fidelizar, cobrar más y callar bocas en junta</strong>. Nada de teoría: son entregables que vuestro socio entiende en 30 segundos.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <NavLink
              className="rounded-2xl bg-secondary px-8 py-3.5 text-base font-bold text-on-secondary shadow-[0_0_32px_rgba(68,237,204,0.25)] transition-transform hover:scale-[1.02]"
              onClick={() => trackEvent('cta_click', {cta_id: 'casos_demo', location: 'casos_hero'})}
              to="/contacto"
            >
              Hablar con el equipo
            </NavLink>
            <NavLink
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-secondary/40 hover:text-secondary"
              to="/precios"
            >
              Ver planes
            </NavLink>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="90">
        <div aria-hidden className="ms-section-field ms-section-field--quiet" />
        <h2 className="relative z-10 mb-10 text-center font-h2 text-h2 text-white md:mb-14">
          Cuatro <span className="ms-kinetic-text">jugadas rápidas</span> con retorno
        </h2>
        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {casosDeUsoOrganizaciones.map((item) => (
            <div
              key={item.title}
              className="group method-surface-card relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-secondary/30"
              data-motion
              data-motion-delay="130"
            >
              <div aria-hidden className="ms-card-ambient" />
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-6 text-4xl text-secondary">{item.icon}</span>
                <h3 className="text-h3 mb-4 text-white">{item.title}</h3>
                <p className="text-body-soft">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="method-band relative overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="110">
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <span className="font-label-caps mb-4 block text-secondary">QUIÉN FIRMA EL CHEQUE</span>
            <h2 className="font-h2 text-h2 text-white">
              Tres perfiles que <span className="ms-kinetic-text">sí o sí</span> deben alinearse
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {casosDeUsoRoles.map((item) => (
              <article className="method-surface-card relative overflow-hidden rounded-[24px] p-7 md:p-8" data-motion="scale" data-motion-delay="140" key={item.titulo}>
                <div aria-hidden className="ms-card-ambient" />
                <div className="relative z-10">
                <p className="font-label-caps mb-6 text-secondary">{item.titulo}</p>
                <div className="space-y-5">
                  <div>
                    <p className="font-label-caps mb-2 text-body-soft">Función habitual</p>
                    <p className="text-base leading-relaxed text-body-soft">{item.rol}</p>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-label-caps mb-2 text-body-soft">Cómo les ayuda Subvenia</p>
                    <p className="text-base leading-relaxed text-body-soft">{item.encaje}</p>
                  </div>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 md:px-8 md:py-24" data-motion data-motion-delay="120">
        <div aria-hidden className="ms-section-field ms-section-field--quiet" />
        <h2 className="relative z-10 mb-10 text-center font-h2 text-h2 text-white md:mb-14">
          Cuándo <span className="ms-kinetic-text">duele tanto</span> que ya no hay excusa
        </h2>
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {casosDeUsoContexto.map((m) => (
            <div
              key={m.title}
              className="method-surface-card relative overflow-hidden rounded-3xl p-8 text-center transition-all hover:border-secondary/25"
              data-motion
              data-motion-delay="130"
            >
              <div aria-hidden className="ms-card-ambient opacity-60" />
              <div className="relative z-10">
                <p className="mb-3 text-lg font-bold text-white">{m.title}</p>
                <p className="text-base text-body-soft">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20" data-motion data-motion-delay="140">
        <div aria-hidden className="ms-section-field" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="glass-card inner-glow relative overflow-hidden rounded-[28px] border border-white/10 p-8 motion-shimmer md:p-12">
            <div aria-hidden className="ms-card-ambient opacity-50" />
            <div className="relative z-10">
            <blockquote className="text-center text-2xl font-semibold leading-snug text-white md:text-left md:text-3xl">
              “Os damos una forma automática de generar dinero para vuestros socios.” Si lo entendéis así, lo compráis. Si no, seguís con el Excel.
            </blockquote>
            <p className="mt-6 text-center text-base text-body-soft md:text-left md:text-lg">
              {SUBVENIA_PITCH_20S}
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 pt-4 text-center md:px-8" data-motion data-motion-delay="160">
        <NavLink
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-10 py-5 text-xl font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.3)] transition-transform hover:scale-105"
          to="/contacto"
        >
          Quiero el pitch completo en demo
          <span className="material-symbols-outlined text-2xl">arrow_forward</span>
        </NavLink>
      </section>

    </div>
  );
}

const pricingPlans = [
  {
    name: 'Esencial',
    description: 'Primeras oleadas masivas: probáis el discurso económico con hasta 500 socios sin reventar el equipo.',
    price: '349',
    period: 'mes',
    highlight: false,
    features: ['Hasta 500 empresas en base', 'Cruce automático con ayudas vivas', 'Informes personalizados por socio', 'Reporting básico de impacto', 'Soporte email'],
  },
  {
    name: 'Profesional',
    description: 'Cuando ya vendéis premium o tenéis varias campañas paralelas: más volumen, más segmentación, más pasta en juego.',
    price: '890',
    period: 'mes',
    highlight: true,
    features: [
      'Hasta 5.000 empresas en base',
      'Segmentación inteligente + colas de envío',
      'Activaciones masivas ilimitadas en práctica',
      'CRM / Excel (1 conector)',
      'Soporte dedicado horario laboral',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Redes enormes, compliance duro y necesidad de SLA: política + técnico + pasta gansa en la misma mesa.',
    price: 'A medida',
    period: '',
    highlight: false,
    features: ['Base ilimitada', 'SSO + despliegue dedicado', 'API + auditoría avanzada', 'Success manager', 'Argumentario comercial a medida'],
  },
];

export function PricingPage() {
  return (
    <div className="method-page">
      <section className="relative flex min-h-[68vh] flex-col justify-center overflow-hidden px-4 pt-28 pb-12 md:min-h-[72vh] md:px-8 md:pt-36 md:pb-16" data-motion data-motion-delay="70">
        <MethodologyHeroDecorations />
        <div className="relative z-10 mx-auto max-w-5xl text-center" data-motion="scale" data-motion-delay="110">
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">Licencias por volumen</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">50 o 5.000 socios — mismo motor</span>
          </div>
          <h1 className="font-h1 mb-6 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl">
            <span className="method-gradient-headline">Pagáis por escala</span>
            <span className="text-white">, no por humo SaaS</span>
          </h1>
          <p className="font-body-lg mx-auto max-w-2xl text-lg text-body-soft md:text-xl">
            Cobráis más a los socios si vendéis premium, upsell o cuota reforzada: nuestros planes siguen la curva de empresas en base y de disparos masivos que necesitéis. Migración y upgrade cuando explotéis el funnel.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <NavLink
              className="rounded-2xl bg-secondary px-8 py-3.5 text-base font-bold text-on-secondary shadow-[0_0_32px_rgba(68,237,204,0.25)] transition-transform hover:scale-[1.02]"
              onClick={() => trackEvent('cta_click', {cta_id: 'pricing_demo', location: 'pricing_hero'})}
              to="/contacto"
            >
              Hablar con el equipo
            </NavLink>
            <NavLink
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-secondary/40 hover:text-secondary"
              to="/metodologia"
            >
              Ver metodología
            </NavLink>
          </div>
        </div>
      </section>

      <section className="method-band relative z-10 mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28" data-motion data-motion-delay="100">
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 space-y-14 pt-4 md:pt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[28px] p-8 md:p-9 ${
                plan.highlight
                  ? 'border border-secondary/50 bg-[#0d1828] shadow-[0_0_0_1px_rgba(68,237,204,0.2),0_24px_60px_-20px_rgba(68,237,204,0.25)]'
                  : 'method-surface-card'
              }`}
              data-motion={plan.highlight ? 'scale' : 'up'}
              data-motion-delay={plan.highlight ? '200' : '140'}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
                <div aria-hidden className={`ms-card-ambient ${plan.highlight ? '' : 'opacity-50'}`} />
              </div>
              <div className="relative z-10 flex flex-1 flex-col">
              {plan.highlight ? (
                <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 font-label-caps text-secondary">
                  Más contratado
                </span>
              ) : null}
              <h2 className="mb-2 text-2xl font-bold text-white">{plan.name}</h2>
              <p className="mb-8 min-h-[3rem] text-base leading-relaxed text-body-soft">{plan.description}</p>
              <div className="mb-8">
                {plan.price === 'A medida' ? (
                  <p className="text-3xl font-black tracking-tight text-white md:text-4xl">A medida</p>
                ) : (
                  <>
                    <span className="text-4xl font-black text-white md:text-5xl">{plan.price}€</span>
                    <span className="ml-1 text-body-soft">/{plan.period}</span>
                  </>
                )}
                <p className="mt-2 text-sm text-body-soft md:text-base">IVA no incluido. Facturación anual con descuento disponible.</p>
              </div>
              <ul className="mb-10 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base text-white">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-secondary [font-variation-settings:'FILL'_1]">check_circle</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <NavLink
                className={`mt-auto block rounded-xl py-3.5 text-center text-base font-bold transition-all active:scale-[0.98] ${
                  plan.highlight
                    ? 'bg-secondary text-on-secondary shadow-[0_0_24px_rgba(68,237,204,0.35)] hover:-translate-y-0.5'
                    : 'border border-white/15 bg-slate-950/40 text-white hover:border-secondary/40 hover:text-secondary'
                }`}
                to="/contacto"
              >
                {plan.price === 'A medida' ? 'Hablar con ventas' : 'Empezar'}
              </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card inner-glow relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 p-8 motion-shimmer md:p-10" data-motion data-motion-delay="220">
          <div aria-hidden className="ms-card-ambient opacity-40" />
          <div className="relative z-10">
          <h3 className="mb-6 text-center text-xl font-bold text-white">
            Incluido <span className="ms-kinetic-text">en todos los planes</span> (sí, también en Esencial)
          </h3>
          <div className="grid gap-4 text-base text-body-soft sm:grid-cols-2">
            {[
              'Cruce automático con convocatorias vivas',
              'Marca blanca en informes y envíos masivos',
              'Cifrado en tránsito y en reposo + trazabilidad',
              'Actualizaciones del motor sin fricción',
            ].map((item) => (
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/30 px-4 py-3" data-motion data-motion-delay="130" key={item}>
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
        </div>
        </section>
    </div>
  );
}

const LEGAL_UPDATED_LABEL = 'Mayo de 2026';

export function PrivacyPage() {
  return (
    <LegalCenterLayout
      docTitle="Política de Privacidad (RGPD)"
      introBox="Subvenia trata datos personales con fines legítimos, transparencia y medidas de seguridad acordes al riesgo. Este documento resume cómo lo hacemos cuando vuestra entidad utiliza la web o los servicios asociados."
      sections={[
        {
          id: 'responsable',
          icon: 'apartment',
          title: 'Responsable del tratamiento',
          paragraphs: [
            'El responsable del tratamiento de los datos recogidos a través del sitio web y formularios de contacto es Subvenia, en la forma que corresponda según el contrato o relación mercantil que mantengáis con nosotros.',
            'Para ejercer derechos o consultas sobre privacidad podéis escribir a contacto@subvenia.ai indicando la referencia de vuestra entidad.',
          ],
        },
        {
          id: 'datos-recopilados',
          icon: 'grid_view',
          title: 'Datos que recopilamos',
          paragraphs: [
            'Recopilamos únicamente los datos necesarios en cada momento, en línea con el principio de minimización del Reglamento (UE) 2016/679 (RGPD) y la normativa española de desarrollo.',
          ],
          bullets: [
            {
              label: 'Datos de identificación y contacto:',
              text: 'nombre, cargo, correo electrónico profesional, teléfono y datos de la entidad que representáis cuando rellenáis formularios o solicitáis información.',
            },
            {
              label: 'Datos de navegación y dispositivo:',
              text: 'dirección IP, tipo de navegador, páginas visitadas y marcas temporales, cuando resultan necesarios por seguridad o mejora del servicio y, en su caso, con base en el consentimiento para cookies no esenciales.',
            },
            {
              label: 'Datos de relación contractual:',
              text: 'información necesaria para prestar el servicio SaaS contratado (usuarios, roles, logs operativos), según lo acordado en el contrato.',
            },
          ],
        },
        {
          id: 'finalidad',
          icon: 'settings',
          title: 'Finalidad del tratamiento',
          paragraphs: [
            'Los datos se tratan con las siguientes finalidades principales: gestionar solicitudes de contacto y demos, formalizar y ejecutar contratos, prestar soporte, cumplir obligaciones legales, mejorar la seguridad de la plataforma y, solo si lo aceptáis, medir el uso del sitio con cookies analíticas.',
          ],
        },
        {
          id: 'base-juridica',
          icon: 'gavel',
          title: 'Base jurídica',
          paragraphs: [
            'La licitud del tratamiento se apoya, según el caso, en la ejecución de un contrato o medidas precontractuales (art. 6.1.b RGPD), el interés legítimo en la seguridad y mejora razonable del servicio (art. 6.1.f RGPD), el cumplimiento de obligaciones legales (art. 6.1.c RGPD) y, para cookies no esenciales o comunicaciones opcionales, en el consentimiento (art. 6.1.a RGPD), que podéis retirar en cualquier momento sin afectar a la licitud del tratamiento previo.',
          ],
        },
        {
          id: 'conservacion',
          icon: 'schedule',
          title: 'Conservación',
          paragraphs: [
            'Conservamos los datos el tiempo necesario para cumplir la finalidad para la que fueron recabados y las obligaciones legales o contractuales aplicables. Transcurrido ese plazo, se suprimen o anonimizan de forma segura salvo que la ley exija un bloqueo temporal.',
          ],
        },
        {
          id: 'cesion',
          icon: 'ios_share',
          title: 'Cesión de datos',
          paragraphs: [
            'No vendemos vuestros datos personales. Solo comunicamos información a terceros cuando es estrictamente necesario para prestar el servicio (por ejemplo, proveedores de infraestructura o comunicaciones con acuerdos de tratamiento de datos conforme al art. 28 RGPD), o cuando una norma legal lo imponga.',
          ],
        },
        {
          id: 'transferencias',
          icon: 'public',
          title: 'Transferencias internacionales',
          paragraphs: [
            'Si algún encargado del tratamiento ubicado fuera del Espacio Económico Europeo accediera a datos personales, nos aseguramos de contar con una base adecuada (decisión de adecuación, cláusulas contractuales tipo u otras garantías previstas en el RGPD). Podéis solicitar información adicional a través de contacto@subvenia.ai.',
          ],
        },
        {
          id: 'derechos',
          icon: 'badge',
          title: 'Derechos (acceso, rectificación, supresión, oposición, limitación, portabilidad)',
          paragraphs: [
            'Podéis ejercer los derechos reconocidos en el RGPD escribiendo a contacto@subvenia.ai. En su caso, tendréis derecho a presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
            'Si el tratamiento se basa en el consentimiento, podréis retirarlo en cualquier momento. Para cookies, podéis ajustar vuestra elección con el banner de cookies o la configuración del navegador.',
          ],
        },
        {
          id: 'seguridad-tratamiento',
          icon: 'shield',
          title: 'Seguridad del tratamiento',
          paragraphs: [
            'Aplicamos medidas técnicas y organizativas proporcionadas al riesgo: cifrado en tránsito, controles de acceso, registro de actividad relevante y revisiones periódicas. Más detalle técnico en la página de Seguridad.',
          ],
        },
        {
          id: 'menores',
          icon: 'child_care',
          title: 'Menores de edad',
          paragraphs: [
            'Los servicios de Subvenia están dirigidos a personas jurídicas y profesionales. No recabamos datos de menores de 14 años de forma intencionada. Si tenéis conocimiento de que un menor nos ha facilitado datos, contactadnos para su eliminación.',
          ],
        },
        {
          id: 'cambios',
          icon: 'update',
          title: 'Cambios en esta política',
          paragraphs: [
            'Podemos actualizar este texto para reflejar cambios legales o del servicio. Publicaremos la versión vigente en esta página con la fecha de actualización indicada en el encabezado del Centro Legal.',
          ],
        },
        {
          id: 'cookies',
          icon: 'cookie',
          title: 'Cookies y preferencias',
          paragraphs: [
            'Utilizamos cookies y tecnologías similares estrictamente necesarias para el funcionamiento del sitio (por ejemplo, mantener la sesión o recordar vuestras preferencias de consentimiento).',
            'Las cookies de medición o analítica solo se instalan si pulsáis «Aceptar todas» en el banner. Si elegís «Solo necesarias», seguís navegando sin esas cookies. Podéis modificar la decisión borrando el almacenamiento local del sitio o contactándonos.',
          ],
        },
      ]}
      updatedAt={LEGAL_UPDATED_LABEL}
    />
  );
}

export function TermsPage() {
  return (
    <LegalCenterLayout
      docTitle="Términos y Condiciones de Uso"
      introBox="El acceso y uso de la web y, en su caso, de la plataforma Subvenia implica la aceptación de estas condiciones por parte de la entidad o profesional que actúa en nombre de la misma."
      sections={[
        {
          id: 'objeto',
          icon: 'contract',
          title: 'Objeto y ámbito',
          paragraphs: [
            'Estas condiciones regulan el uso del sitio web de Subvenia y, cuando corresponda, del software en modo servicio contratado. Si existiera un contrato marco firmado, prevalecerá lo pactado en él en caso de contradicción.',
          ],
        },
        {
          id: 'uso-permitido',
          icon: 'verified_user',
          title: 'Uso permitido',
          paragraphs: [
            'El servicio debe utilizarse exclusivamente para fines lícitos y profesionales, en cumplimiento de la normativa aplicable (incluida la de subvenciones y competencia).',
            'Queda prohibido el uso que vulnere la seguridad, la estabilidad o la confidencialidad del servicio, así como la extracción automatizada no autorizada o el uso que suponga un uso abusivo de los recursos.',
          ],
        },
        {
          id: 'cuentas',
          icon: 'key',
          title: 'Cuentas y credenciales',
          paragraphs: [
            'El cliente es responsable de la veracidad de los datos aportados y de la custodia de las credenciales de sus usuarios. Debéis notificarnos de inmediato cualquier acceso no autorizado.',
          ],
        },
        {
          id: 'propiedad',
          icon: 'copyright',
          title: 'Propiedad intelectual',
          paragraphs: [
            'Los elementos de software, diseño, marcas y contenidos propios de Subvenia están protegidos por la normativa aplicable. No se concede licencia alguna salvo la indispensable para usar el servicio según lo contratado.',
          ],
        },
        {
          id: 'limitacion',
          icon: 'balance',
          title: 'Limitación de responsabilidad',
          paragraphs: [
            'Subvenia presta el servicio con diligencia profesional dentro de los límites técnicos y legales razonables. No somos asesores legales ni garantizamos la concesión de ayudas públicas: las decisiones finales corresponden a los organismos competentes.',
          ],
        },
        {
          id: 'ley',
          icon: 'gavel',
          title: 'Modificaciones y ley aplicable',
          paragraphs: [
            'Podemos actualizar estos términos; la versión vigente estará publicada en esta página. Salvo pacto en contrario, se aplicará la legislación española y los tribunales de Barcelona, sin perjuicio de normas imperativas en materia de consumo cuando correspondan.',
          ],
        },
      ]}
      updatedAt={LEGAL_UPDATED_LABEL}
    />
  );
}

export function SecurityPage() {
  return (
    <LegalCenterLayout
      docTitle="Política de Seguridad de la Información"
      introBox="La confidencialidad, integridad y disponibilidad de los datos que tratáis con Subvenia son prioridad operativa. Este resumen describe el enfoque general; el detalle contractual puede ampliarse en anexos técnicos."
      sections={[
        {
          id: 'compromiso',
          icon: 'encrypted',
          title: 'Compromiso y gobernanza',
          paragraphs: [
            'Mantenemos un enfoque de seguridad basado en riesgo, con responsables designados y revisiones periódicas de controles, proveedores y accesos.',
          ],
        },
        {
          id: 'controles-tecnicos',
          icon: 'shield_lock',
          title: 'Controles técnicos',
          paragraphs: [
            'Cifrado en tránsito (TLS), segregación de entornos cuando aplica, control de accesos con mínimo privilegio, autenticación reforzada donde proceda y monitorización de eventos relevantes.',
            'Realizamos evaluaciones y pruebas orientadas a reducir vulnerabilidades conocidas, sin perjuicio de que la seguridad absoluta no exista.',
          ],
        },
        {
          id: 'continuidad',
          icon: 'cloud_sync',
          title: 'Continuidad y copias de seguridad',
          paragraphs: [
            'Contamos con procedimientos de copia de seguridad y recuperación acordes al servicio contratado, orientados a minimizar el impacto ante incidentes técnicos.',
          ],
        },
        {
          id: 'reporte',
          icon: 'report',
          title: 'Reporte de incidentes',
          paragraphs: [
            'Si detectáis una vulnerabilidad o un incidente de seguridad, escribid a contacto@subvenia.ai con el máximo detalle posible (sin incluir datos personales innecesarios). Valoramos y respondemos según severidad y urgencia.',
          ],
        },
      ]}
      updatedAt={LEGAL_UPDATED_LABEL}
    />
  );
}

export default Layout;

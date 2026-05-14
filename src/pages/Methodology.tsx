import { NavLink } from 'react-router-dom';
import { MotionReveal } from '../components/MotionReveal';
import { subvenia_translations } from '../lib/subvenia_translations';

interface MethodologyPageProps {
  trackEvent: (eventName: string, params?: Record<string, unknown>) => void;
  SUBVENIA_PITCH_20S: string;
  SUBVENIA_CTA_DEMO: string;
  SUBVENIA_DEMO_APP_URL: string;
}

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

export const Methodology = ({
  trackEvent,
  SUBVENIA_PITCH_20S,
  SUBVENIA_CTA_DEMO,
  SUBVENIA_DEMO_APP_URL,
}: MethodologyPageProps) => {
  const t = subvenia_translations.ES;
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

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <MotionReveal direction="down">
            <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">Metodología en 5 fases</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">Base → cruce → informe → activación</span>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1} direction="up">
            <h1 className="font-h1 mb-6 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl">
              <span className="method-gradient-headline">Así se orquesta</span>
              <br />
              <span className="text-white">el dinero para cada socio</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2} direction="up">
            <p className="font-body-lg mx-auto max-w-2xl text-lg text-body-soft md:text-xl">
              {SUBVENIA_PITCH_20S} Abajo, el desglose operativo en cinco pasos —el mismo pipeline que podréis enseñar en junta o a un socio escéptico.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3} direction="up">
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              className="rounded-2xl bg-secondary px-8 py-3.5 text-base font-bold text-on-secondary shadow-[0_0_32px_rgba(68,237,204,0.25)] transition-transform hover:scale-[1.02] cursor-pointer"
              onClick={() => {
                trackEvent('cta_click', { cta_id: 'methodology_demo', location: 'methodology_hero' });
                window.location.href = SUBVENIA_DEMO_APP_URL;
              }}
            >
              Hablar con el equipo
            </a>
              <NavLink
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-secondary/40 hover:text-secondary"
                to="/casos-de-uso"
              >
                Ver casos de uso
              </NavLink>
            </div>
          </MotionReveal>
        </div>

        <button
          type="button"
          className="method-scroll-hint absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 rounded-xl border border-transparent px-4 py-2 text-body-soft transition-colors hover:border-white/10 hover:bg-white/5 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          aria-label="Ir a la línea de tiempo de fases"
          onClick={() => {
            trackEvent('cta_click', { cta_id: 'methodology_scroll_timeline', location: 'methodology_hero' });
            const el = document.getElementById('metodologia-linea-tiempo');
            if (!el) return;
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
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
        id="metodologia-linea-tiempo"
      >
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <MotionReveal className="mb-12 text-center md:mb-16">
            <p className="font-label-caps mb-3 text-secondary">Línea de tiempo</p>
            <h2 className="font-h2 text-2xl text-white md:text-3xl">Las cinco fases del proceso</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-soft">
              Misma historia en vertical: subís base, marca, caso, borrador y disparo al socio. Visual para que dirección y técnico la compartan sin perderse.
            </p>
          </MotionReveal>

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

                      <MotionReveal 
                        delay={index * 0.1} 
                        direction={isLeft ? 'right' : 'left'}
                        className={`group method-surface-card relative min-w-0 overflow-hidden rounded-[24px] p-6 md:max-w-lg md:rounded-[28px] md:p-8 ${
                          isLeft
                            ? 'col-start-2 row-start-1 md:col-start-1 md:justify-self-end md:text-right'
                            : 'col-start-1 row-start-1 md:col-start-3 md:justify-self-start md:text-left'
                        }`}
                      >
                        <article>
                          <div aria-hidden className="ms-card-ambient" />
                          <span
                            aria-hidden
                            className={`pointer-events-none absolute -top-4 font-black leading-none text-white/[0.05] select-none ${
                              isLeft ? '-right-2 md:right-auto md:left-2' : '-right-2'
                            }`}
                            style={{ fontSize: 'clamp(3.5rem, 12vw, 5.5rem)' }}
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
                      </MotionReveal>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8">
        <MotionReveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-secondary/25 bg-gradient-to-br from-secondary/15 via-[#0a1524] to-[#060a10] p-10 text-center md:p-14">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
            <h2 className="relative z-10 font-h2 text-2xl text-white md:text-3xl">¿Veis a vuestros socios perdiendo ayudas ahora mismo?</h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-body-soft">
              En 20 minutos os enseñamos el motor con datos ficticios + vuestra base real (anonimizada si hace falta). Si no os encaja el discurso económico, paramos.
            </p>
            <a
              className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-10 py-4 text-lg font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.35)] transition-transform hover:scale-[1.03] cursor-pointer"
              onClick={() => {
                trackEvent('cta_click', { cta_id: 'methodology_closing', location: 'methodology_cta' });
                window.location.href = SUBVENIA_DEMO_APP_URL;
              }}
            >
              {SUBVENIA_CTA_DEMO}
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
        </MotionReveal>
      </section>
    </div>
  );
};

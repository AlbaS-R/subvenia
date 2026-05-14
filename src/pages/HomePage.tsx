import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MotionReveal } from '../components/MotionReveal';
import { BentoCard } from '../components/BentoCard';
import { ScrollIndicator } from '../components/ScrollIndicator';

interface HomePageProps {
  trackEvent: (eventName: string, params?: Record<string, unknown>) => void;
  SUBVENIA_PITCH_20S: string;
  SUBVENIA_CTA_DEMO: string;
  SUBVENIA_DEMO_APP_URL: string;
  SUBVENIA_ONE_LINER: string;
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

export const HomePage = ({
  trackEvent,
  SUBVENIA_PITCH_20S,
  SUBVENIA_CTA_DEMO,
  SUBVENIA_DEMO_APP_URL,
  SUBVENIA_ONE_LINER,
}: HomePageProps) => {
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
          trackEvent('scroll_depth', { depth_percent: threshold, page: 'home' });
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [trackEvent]);

  return (
    <div className="method-page">
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pb-20 text-center md:px-8 md:pb-28">
        <MethodologyHeroDecorations />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center pt-28 md:pt-36">
          <MotionReveal delay={0.02}>
            <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 font-label-caps text-secondary">A vuestra medida</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-body-soft">Pedís el informe, nosotros lo dejamos listo</span>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="font-h1 mb-6 px-2 text-4xl leading-[1.08] tracking-tight md:px-0 md:text-6xl lg:text-7xl">
              <span className="method-gradient-headline">Pedís, nosotros lo generamos.</span>
              <br />
              <span className="text-white">Del encargo al entregable listo para vuestros socios, sin fricción.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.14}>
            <p className="font-body-lg mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-body-soft md:text-xl">
              {SUBVENIA_PITCH_20S}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.17}>
            <p className="mx-auto mb-10 max-w-2xl text-base font-medium italic text-white/90 md:text-lg">
              No vendemos “IA”: vendemos una forma automática de que vuestra cámara, clúster o asociación deje de ser pasiva y pase a generar oportunidades económicas medibles.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.24}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                className="rounded-2xl bg-secondary px-8 py-3.5 text-base font-bold text-on-secondary shadow-[0_0_32px_rgba(68,237,204,0.25)] transition-transform hover:scale-[1.02] cursor-pointer"
                onClick={() => {
                  trackEvent('cta_click', { cta_id: 'hero_primary', location: 'hero' });
                  window.location.href = SUBVENIA_DEMO_APP_URL;
                }}
              >
                {SUBVENIA_CTA_DEMO}
              </a>
              <NavLink
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-secondary/40 hover:text-secondary"
                onClick={() => trackEvent('cta_click', { cta_id: 'hero_secondary', location: 'hero' })}
                to="/metodologia"
              >
                Ver cómo funciona
              </NavLink>
            </div>
          </MotionReveal>
        </div>
        <ScrollIndicator />
      </section>

      <section className="method-band relative mx-auto max-w-7xl overflow-hidden px-4 py-20 scroll-mt-24 md:px-8 md:py-28">
        <div aria-hidden className="method-band-glow" />
        <MotionReveal className="relative z-10 mb-10 text-center md:mb-12">
          <span className="font-label-caps mb-4 block text-secondary">LO QUE MIDEN EN DIRECCIÓN</span>
          <h2 className="font-h2 text-h2 text-white">
            De “hacemos eventos” a <span className="ms-kinetic-text">“movemos millones”</span>
          </h2>
        </MotionReveal>
        <div className="relative z-10 bento-grid">
          {[
            ['100%', 'automatización operativa', 'Cruce masivo con ayudas, cero caza manual en PDFs: vuestro equipo hace más con menos cabeza contable.', 4],
            ['50 → 5.000', 'misma estructura', 'Escaláis socios sin multiplicar coste marginal: el motor aguanta el volumen que la red ya tiene.', 4],
            ['€€', 'argumento para la cuota', 'Reporting listo: “este año activamos X M€ en oportunidades” —arma comercial, política y retención.', 4],
          ].map(([value, label, desc, span], i) => (
            <BentoCard span={Number(span)} key={label} innerClassName="items-center text-center">
              <MotionReveal delay={i * 0.1} className="flex flex-col items-center">
                <p className="mb-3 text-4xl font-black tracking-tight text-secondary">{value}</p>
                <p className="font-label-caps mb-4 text-white">{label}</p>
                <p className="text-base text-body-soft">{desc}</p>
              </MotionReveal>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="method-band relative mx-auto max-w-7xl overflow-hidden px-4 py-20 scroll-mt-24 md:px-8 md:py-32">
        <div aria-hidden className="method-band-glow" />
        <div className="relative z-10 mb-10 flex flex-col items-start gap-6 md:mb-16 md:flex-row md:items-end md:gap-12">
          <MotionReveal className="flex-1">
            <span className="font-label-caps mb-4 block text-secondary">CUATRO DOLORES REALES</span>
            <h2 className="font-h2 text-h2 text-white">
              Clústers y cámaras <span className="ms-kinetic-text">atascados en lo mismo</span>
            </h2>
          </MotionReveal>
          <MotionReveal className="font-body-lg flex-1 text-body-soft" delay={0.1}>
            <p>
              Más allá de networking y eventos, necesitáis un servicio diferencial que escale y sea medible. Sin capacidad técnica interna para cruzar ayudas a escala, se pierde financiación para los socios y se debilita el argumento de la cuota.
            </p>
          </MotionReveal>
        </div>

        <div className="relative z-10 bento-grid max-w-6xl mx-auto">
          {[
            {
              title: "Poco valor continuo",
              description: "Los socios no perciben ayuda mes a mes: solo actos y carné. Falta un “producto” que demuestre utilidad real.",
              icon: "sentiment_dissatisfied",
              color: "rose"
            },
            {
              title: "Cero escala técnica",
              description: "Nadie en plantilla puede leer 400 convocatorias y cruzarlas con 2.000 empresas. Sin motor, no hay servicio.",
              icon: "engineering",
              color: "blue"
            },
            {
              title: "Dinero que se escapa",
              description: "Las ayudas existen, pero vuestros socios no las ven: perdéis impacto económico directo y historias que contar.",
              icon: "savings",
              color: "secondary"
            },
            {
              title: "Cuota sin discurso",
              description: "Cuesta justificar la membresía sin cifras: fidelización floja y presión política para demostrar impacto.",
              icon: "workspace_premium",
              color: "amber"
            }
          ].map((item, index) => (
            <MotionReveal 
              key={item.title} 
              delay={index * 0.1} 
              className="bento-item h-full"
              style={{ '--bento-span': 6 } as React.CSSProperties}
            >
              <BentoCard className="group h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-${item.color === 'secondary' ? 'secondary' : item.color + '-500'}/30`}>
                    <span className={`material-symbols-outlined text-4xl text-${item.color === 'secondary' ? 'secondary' : item.color + '-400'}`}>
                      {item.icon}
                    </span>
                  </div>
                  <div className={`h-1.5 w-1.5 rounded-full bg-${item.color === 'secondary' ? 'secondary' : item.color + '-500'} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-body-soft leading-relaxed">
                  {item.description}
                </p>
                
                <div aria-hidden className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-${item.color === 'secondary' ? 'secondary' : item.color + '-500'}/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </BentoCard>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 scroll-mt-24 md:px-8 md:py-32">
        <div aria-hidden className="ms-section-field ms-section-field--quiet" />
        <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/5 blur-[120px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <MotionReveal className="mb-20 text-center">
            <span className="font-label-caps mb-4 block text-secondary">LO QUE VENDÉIS DE VERDAD</span>
            <h2 className="font-h2 text-h2 text-white">
              <span className="ms-kinetic-text">Una plataforma</span> que activa euros en la calle
            </h2>
          </MotionReveal>
          <div className="relative">
            <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-secondary/25 to-transparent md:block"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                ['upload', 'Subís vuestra base', 'CSV / Excel de socios o empresas: en minutos está lista para cruzar con todas las ayudas vivas.', false],
                ['hub', 'Cruce automático total', 'Sin equipo técnico interno: el motor encaja cada empresa con líneas autonómicas, estatales y sectoriales.', false],
                ['description', 'Informe por empresa', 'Cada socio recibe su propio mapa de oportunidades, redactado y listo para revisión humana.', false],
                ['rocket_launch', 'Activación masiva', 'Disparáis oportunidades a escala —email, campaña o servicio premium— con trazabilidad y ROI.', true],
              ].map(([icon, title, text, isActive], i) => (
                <MotionReveal className="group relative flex flex-col items-center text-center" delay={i * 0.15} key={title}>
                  <div className={`relative mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-secondary/40 text-secondary transition-transform group-hover:scale-110 ${isActive ? 'bg-secondary !text-on-secondary' : 'bg-[#101722]'}`}>
                    <div aria-hidden className="ms-card-ambient opacity-70" />
                    <span className="material-symbols-outlined relative z-10 text-3xl">{icon}</span>
                  </div>
                  <h4 className="mb-2 font-bold text-white">{title}</h4>
                  <p className="text-base text-body-soft">{text}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 scroll-mt-24 md:px-8 md:py-32">
        <div aria-hidden className="ms-section-field" />
        <div
          aria-hidden
          className="ms-blob ms-blob--primary pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(68,237,204,0.1),transparent_70%)] blur-3xl"
        />
        <MotionReveal className="relative z-10 mb-16 text-center">
          <h2 className="font-h2 text-h2 text-white">
            Valor por capas: <span className="ms-kinetic-text">dirección, operación, euros, reputación</span>
          </h2>
        </MotionReveal>
        <div className="relative z-10 bento-grid">
          <BentoCard className="md:col-span-8" span={8}>
            <MotionReveal direction="right" delay={0.1}>
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-[120px] text-secondary">rocket_launch</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-h2 mb-4 text-white">Estrategia: deja de ser “la asociación pasiva”</h3>
                <p className="text-body-lg max-w-md text-body-soft">
                  Pasáis a ser el generador de oportunidades económicas: discurso claro para captar y retener socios, y posicionamiento útil frente a administraciones.
                </p>
              </div>
            </MotionReveal>
          </BentoCard>

          <BentoCard className="!bg-secondary !text-on-secondary md:col-span-4" span={4}>
            <MotionReveal direction="left" delay={0.2}>
              <div aria-hidden className="ms-card-ambient opacity-40" />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl">shield</span>
                <div className="mt-4">
                  <h3 className="mb-2 text-3xl font-bold">Operación: más con menos</h3>
                  <p className="text-on-secondary/80 text-base">Automatización real: desaparece la caza manual de ayudas. 50 o 5.000 empresas sin coste marginal loco.</p>
                </div>
              </div>
            </MotionReveal>
          </BentoCard>

          <BentoCard className="md:col-span-4" span={4}>
            <MotionReveal direction="right" delay={0.3}>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl text-[#60a5fa]">hub</span>
                <div className="mt-4">
                  <h3 className="mb-2 text-2xl font-bold text-white">Economía: euros que antes no veían</h3>
                  <p className="text-body-soft">Los socios acceden a financiación que no detectaban: más inversión e innovación. Podéis monetizarlo (premium, upsell o cuota blindada).</p>
                </div>
              </div>
            </MotionReveal>
          </BentoCard>

          <BentoCard className="md:col-span-8" span={8}>
            <MotionReveal direction="left" delay={0.4} className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-h3 mb-4 text-white">Institucional: números que callan bocas</h3>
                <p className="text-body-soft">Indicadores de impacto listos para subvenciones propias, pactos públicos y relato político: demostrar relevancia en el ecosistema.</p>
              </div>
              <div className="hidden h-32 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:block">
                <img alt="Chart preview" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAed2lPlgrgsqiygOeqfHogmf-wwr8YUTktnyApo41DaB9229M0Dej9bb5Y9cnFIz_Bcw7D18eg99qxlur2f7u0PYH-WVS0FKwVhqUiJh9r10Ko_cVyKL0pHyO2n1OHXYTsOQcewAh703tkrHazbyrhTc09lPQ5QzFGZs0A7YtP-9kZfRIzwFfGhNJLMB5gYg_WmhC0laTsBDMaLohwr5AAVMiHSY8Z2XTlpMGph1_5qrhmltD4RFzypl7I6rv5E5Urbx5pgG9ViwO-" />
              </div>
            </MotionReveal>
          </BentoCard>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
        <div aria-hidden className="ms-section-field ms-section-field--medium" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <MotionReveal className="mb-16 text-center">
            <h2 className="font-h2 text-h2 text-white">
              Por qué elegir <span className="ms-kinetic-text">Subvenia</span>
            </h2>
            <p className="mt-4 text-lg text-body-soft">No es un boletín ni un buscador bonito. Es un motor conectado a vuestra base que produce oportunidades personalizadas y impacto económico directo.</p>
          </MotionReveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-2">
            <MotionReveal className="relative overflow-hidden bg-[#101821] p-12" direction="right">
              <div aria-hidden className="ms-card-ambient opacity-50" />
              <div className="relative z-10">
                <h4 className="font-label-caps mb-8 text-body-soft">LO QUE NO SOIS</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-rose-500">close</span><span>Un buscador de subvenciones que el socio usa solo y se pierde.</span></li>
                  <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-rose-500">close</span><span>Un boletín informativo que nadie mide ni cobra.</span></li>
                  <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-rose-500">close</span><span>Un PDF genérico sin cruce con la base real de empresas.</span></li>
                </ul>
              </div>
            </MotionReveal>
            <MotionReveal className="glass-card group relative overflow-hidden p-12" direction="left">
              <div aria-hidden className="ms-card-ambient" />
              <div className="absolute inset-0 bg-secondary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <h4 className="font-label-caps relative z-10 mb-8 text-secondary">LO QUE SÍ SOIS</h4>
              <ul className="relative z-10 space-y-6">
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Motor automatizado de oportunidades personalizadas, enganchado a vuestra base.</span></li>
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Activación masiva + segmentación inteligente + reporting de impacto en €.</span></li>
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Base para servicio premium o upsell: monetizáis el valor, no solo el dato.</span></li>
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 scroll-mt-24 md:px-8 md:py-32">
        <div aria-hidden className="ms-section-field" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(68,237,204,0.08),transparent_45%)]"></div>
        <div
          aria-hidden
          className="ms-blob ms-blob--secondary pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_68%)] blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <MotionReveal className="mb-12 text-center">
            <span className="font-label-caps mb-4 block text-secondary">CUATRO GOLPES DE EFECTO</span>
            <h2 className="font-h2 text-h2 text-white">
              Lo que podéis <span className="ms-kinetic-text">activar mañana mismo</span>
            </h2>
          </MotionReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              ['01', 'Activación masiva', '“Cada socio recibe su informe personalizado de ayudas” — impacto inmediato y percepción brutal de valor.'],
              ['02', 'Segmentación inteligente', 'Sabéis qué empresa encaja con qué línea: campañas dirigidas que sí responden.'],
              ['03', 'Servicio premium', 'Nueva línea de ingresos: ayuda a tramitar lo detectado, además del informe.'],
              ['04', 'Reporting político', '“Este año movimos X M€ en oportunidades” — munición comercial e institucional.'],
            ].map(([num, title, text], i) => (
              <BentoCard className="!p-0" key={title}>
                <MotionReveal className="p-8" delay={i * 0.1}>
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 text-sm font-bold text-secondary">
                    {num}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                  <p className="text-body-soft">{text}</p>
                </MotionReveal>
              </BentoCard>
            ))}
          </div>
          <MotionReveal className="mt-10 text-center" delay={0.4}>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-3 text-base font-bold text-on-secondary transition-transform hover:-translate-y-0.5 cursor-pointer"
              onClick={() => {
                trackEvent('cta_click', { cta_id: 'midpage_demo', location: 'demo_narrative' });
                window.location.href = SUBVENIA_DEMO_APP_URL;
              }}
            >
              {SUBVENIA_CTA_DEMO}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </MotionReveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 md:px-8 md:py-20">
        <div aria-hidden className="ms-section-field ms-section-field--quiet" />
        <BentoCard className="relative overflow-hidden !p-0" span={12}>
          <div className="p-8 md:p-10">
            <MotionReveal className="relative z-10 mb-8 text-center">
              <span className="font-label-caps mb-3 block text-secondary">DE LA PRIMERA LLAMADA AL PRIMER DISPARO</span>
              <h2 className="text-3xl font-bold text-white">
                En 7 días tenéis <span className="ms-kinetic-text">prueba con datos reales</span>
              </h2>
            </MotionReveal>
            <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                ['Diagnóstico express', 'Medimos base de socios, dolores y qué prometéis hoy en cuotas. Sin humo.'],
                ['Plan de impacto', 'Definimos qué convocatorias, qué segmentos y qué “momento wow” (masivo o premium).'],
                ['Go-live guiado', 'Disparáis el primer lote de informes con acompañamiento: métricas desde el día 1.'],
              ].map(([title, text], i) => (
                <MotionReveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 p-5 transition-colors hover:border-secondary/35" delay={i * 0.1} key={title}>
                  <div aria-hidden className="ms-card-ambient opacity-50" />
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                    <p className="text-base text-body-soft">{text}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </BentoCard>
      </section>

      <section className="px-4 pb-24 md:px-8">
        <MotionReveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-secondary/25 bg-gradient-to-br from-secondary/15 via-[#0a1524] to-[#060a10] p-10 text-center md:p-14" direction="none">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
          <h2 className="relative z-10 font-h2 text-2xl text-white md:text-3xl">
            ¿Listos para <span className="method-gradient-headline">vender valor</span> —no horas— a vuestros socios?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-body-soft md:text-lg">
            {SUBVENIA_ONE_LINER} Si lo entendéis como “dinero automático para la red”, compra sentido. Si lo veis como “otra tool”, no.
          </p>
          <a
            className="relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-10 py-4 text-lg font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.35)] transition-transform hover:scale-[1.03] cursor-pointer"
            onClick={() => {
              trackEvent('cta_click', { cta_id: 'closing_demo', location: 'closing_section' });
              window.location.href = SUBVENIA_DEMO_APP_URL;
            }}
          >
            {SUBVENIA_CTA_DEMO}
            <span className="material-symbols-outlined">north_east</span>
          </a>
          <p className="relative z-10 mt-4 text-sm text-body-soft">Sin compromiso. Análisis de encaje para vuestra entidad.</p>
        </MotionReveal>
      </section>
    </div>
  );
};

import {NavLink, Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div className="font-body-md relative text-white selection:bg-emerald-300/30">
      <div aria-hidden className="site-mesh-bg"></div>
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
            Metodologia
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
        <NavLink
          className="z-10 rounded-xl bg-[#57e8cd] px-3 py-1.5 text-xs font-semibold text-[#00382e] transition-transform active:scale-95 md:px-6 md:py-2 md:text-base md:font-medium"
          to="/contacto"
        >
          Solicitar demo
        </NavLink>
      </nav>
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-16 text-center md:px-8 md:pt-40 md:pb-24">
        <div className="z-10 mx-auto w-full max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#44edcc]/20 bg-[#44edcc]/10 px-3 py-1 text-[#44edcc] md:mb-6">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest">Executive Grant Automation</span>
          </div>
          <h1 className="font-h1 mb-5 text-4xl leading-[1.05] text-white md:mb-8 md:text-h1">
            Convierte tu base de asociados en <span className="text-[#44edcc] italic">financiación real</span>
          </h1>
          <p className="font-body-lg mx-auto mb-8 max-w-xl text-base leading-[1.5] text-body-soft md:mb-12 md:max-w-2xl md:text-body-lg">
            Automatización de subvenciones de alto nivel diseñada para organizaciones que buscan maximizar su impacto económico sin la carga administrativa tradicional.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-xl bg-[#44edcc] px-6 py-3 text-base font-bold text-[#00382e] transition-all hover:shadow-[0_0_20px_rgba(68,237,204,0.4)] md:px-8 md:py-4 md:text-lg">Empieza ahora</button>
            <button className="glass-card flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white transition-all hover:border-[#44edcc]/40 md:px-8 md:py-4 md:text-lg">
              <span className="material-symbols-outlined">play_circle</span> Ver demo
            </button>
          </div>
        </div>

        <div className="group relative mx-auto mt-10 w-full max-w-5xl md:mt-20">
          <div className="absolute -inset-4 bg-[#44edcc]/10 blur-3xl transition-all duration-700 group-hover:bg-[#44edcc]/20"></div>
          <div className="glass-card inner-glow overflow-hidden rounded-[32px] p-4">
            <div
              aria-label="Panel analítico con evolución de financiación captada"
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
            <div className="glass-card absolute top-12 left-12 hidden flex-col gap-1 rounded-2xl border-white/10 p-6 md:block">
              <span className="text-h3 font-bold text-secondary">+€2.4M</span>
              <span className="font-label-caps text-[12px] text-body-soft">SUBVENCIONES GESTIONADAS</span>
            </div>
            <div className="glass-card absolute right-12 bottom-12 hidden items-center gap-4 rounded-2xl border-white/10 p-6 md:flex">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <div className="mb-2 h-2 w-24 rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-secondary"></div>
                </div>
                <span className="font-label-caps text-[10px] text-body-soft">OPTIMIZACIÓN EN TIEMPO REAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col items-start gap-6 md:mb-16 md:flex-row md:items-end md:gap-12">
          <div className="flex-1">
            <span className="font-label-caps mb-4 block text-secondary">EL RETO</span>
            <h2 className="font-h2 text-h2 text-white">El laberinto administrativo que frena tu crecimiento</h2>
          </div>
          <p className="font-body-lg flex-1 text-body-soft">
            Las organizaciones pierden hasta el 40% de las oportunidades de financiación por falta de rastreo sistemático y procesos manuales obsoletos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-white/5 bg-[#141a21] p-8 transition-all duration-500 hover:border-secondary/30">
            <span className="material-symbols-outlined mb-6 text-4xl text-[#ff8ea1]">description</span>
            <h3 className="text-h3 mb-4 text-white">Burocracia infinita</h3>
            <p className="text-body-soft">Documentación dispersa y procesos de solicitud que consumen semanas de trabajo productivo.</p>
          </div>
          <div className="group rounded-3xl border border-white/5 bg-[#141a21] p-8 transition-all duration-500 hover:border-secondary/30">
            <span className="material-symbols-outlined mb-6 text-4xl text-[#60a5fa]">schedule</span>
            <h3 className="text-h3 mb-4 text-white">Plazos perdidos</h3>
            <p className="text-body-soft">Convocatorias que pasan desapercibidas por la falta de un sistema de alerta inteligente y centralizado.</p>
          </div>
          <div className="group rounded-3xl border border-white/5 bg-[#141a21] p-8 transition-all duration-500 hover:border-secondary/30">
            <span className="material-symbols-outlined mb-6 text-4xl text-secondary">data_loss_prevention</span>
            <h3 className="text-h3 mb-4 text-white">Datos aislados</h3>
            <p className="text-body-soft">La información de tus asociados no está estructurada para cumplir con los requisitos técnicos.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/5 blur-[120px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="font-label-caps mb-4 block text-secondary">LA SOLUCIÓN</span>
            <h2 className="font-h2 text-h2 text-white">Ingeniería de datos para la financiación</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent md:block"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                ['input', 'Ingesta de Datos', 'Conectamos tus bases de datos de forma segura y encriptada.', false],
                ['psychology', 'Matching IA', 'Nuestro motor identifica las subvenciones perfectas para cada perfil.', false],
                ['auto_fix_high', 'Auto-Generación', 'Preparamos el 90% de la documentación de forma automática.', false],
                ['monetization_on', 'Ejecución', 'Presentación y seguimiento hasta la recepción del fondo.', true],
              ].map(([icon, title, text, isActive]) => (
                <div key={title} className="group relative flex flex-col items-center text-center">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-secondary/40 text-secondary transition-transform group-hover:scale-110 ${isActive ? 'bg-secondary !text-on-secondary' : 'bg-[#101722]'}`}>
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </div>
                  <h4 className="mb-2 font-bold text-white">{title}</h4>
                  <p className="text-sm text-body-soft">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-h2 mb-16 text-center text-h2 text-white">Diseñado para la excelencia operativa</h2>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
          <div className="glass-card group relative overflow-hidden rounded-[32px] p-10 md:col-span-8">
            <div className="absolute top-0 right-0 p-8 opacity-20 transition-opacity group-hover:opacity-40">
              <span className="material-symbols-outlined text-[120px] text-secondary">rocket_launch</span>
            </div>
            <h3 className="text-h2 mb-4 text-white">Velocidad Ejecutiva</h3>
            <p className="text-body-lg max-w-md text-body-soft">Reduzca el tiempo de preparación de meses a días. Nuestra plataforma escala sus capacidades de gestión sin aumentar su plantilla.</p>
          </div>
          <div className="rounded-[32px] bg-secondary p-10 text-on-secondary md:col-span-4">
            <span className="material-symbols-outlined text-5xl">shield</span>
            <div>
              <h3 className="mb-2 text-3xl font-bold">Compliance Total</h3>
              <p className="text-on-secondary/80">Seguridad de grado bancario y auditoría completa de cada proceso.</p>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-900/40 p-10 md:col-span-4">
            <span className="material-symbols-outlined text-5xl text-[#60a5fa]">hub</span>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">Ecosistema Conectado</h3>
              <p className="text-body-soft">Integración nativa con los CRMs líderes del mercado.</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-12 rounded-[32px] p-10 md:col-span-8">
            <div className="flex-1">
              <h3 className="text-h3 mb-4 text-white">Visibilidad 360°</h3>
              <p className="text-body-soft">Dashboards en tiempo real para el seguimiento de fondos y KPIs de impacto financiero.</p>
            </div>
            <div className="hidden h-32 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:block">
              <img alt="Chart preview" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAed2lPlgrgsqiygOeqfHogmf-wwr8YUTktnyApo41DaB9229M0Dej9bb5Y9cnFIz_Bcw7D18eg99qxlur2f7u0PYH-WVS0FKwVhqUiJh9r10Ko_cVyKL0pHyO2n1OHXYTsOQcewAh703tkrHazbyrhTc09lPQ5QzFGZs0A7YtP-9kZfRIzwFfGhNJLMB5gYg_WmhC0laTsBDMaLohwr5AAVMiHSY8Z2XTlpMGph1_5qrhmltD4RFzypl7I6rv5E5Urbx5pgG9ViwO-" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="font-h2 text-h2 text-white">Por qué elegir Subvenia</h2>
            <p className="mt-4 text-body-soft">La diferencia entre gestionar y liderar la obtención de fondos.</p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-2">
            <div className="bg-[#101821] p-12">
              <h4 className="font-label-caps mb-8 text-body-soft">GESTIÓN TRADICIONAL</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-error">close</span><span>Búsqueda manual de BOEs y convocatorias locales.</span></li>
                <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-error">close</span><span>Copia y pega de datos desde hojas de Excel.</span></li>
                <li className="flex items-start gap-4 text-body-soft"><span className="material-symbols-outlined text-error">close</span><span>Falta de trazabilidad en los estados de solicitud.</span></li>
              </ul>
            </div>
            <div className="glass-card group relative p-12">
              <div className="absolute inset-0 bg-secondary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <h4 className="font-label-caps relative mb-8 text-secondary">MODELO SUBVENIA</h4>
              <ul className="relative space-y-6">
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Monitorización 24/7 mediante agentes inteligentes.</span></li>
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Mapeo automático de asociados con criterios técnicos.</span></li>
                <li className="flex items-start gap-4 text-white"><span className="material-symbols-outlined text-secondary [font-variation-settings:'FILL'_1]">check_circle</span><span>Panel de control ejecutivo con reporting en un clic.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-h1 mb-8 text-h1 text-white">¿Listo para desbloquear el potencial de su organización?</h2>
          <p className="font-body-lg mb-12 text-body-lg text-body-soft">Únase a las instituciones que ya están transformando datos en impacto económico real con Subvenia.</p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="rounded-2xl bg-secondary px-10 py-5 text-xl font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.3)] transition-transform hover:scale-105">Solicitar Demo Ejecutiva</button>
            <p className="text-sm text-body-soft">Sin compromiso. Análisis de potencial gratuito.</p>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-10 md:flex-row md:px-8 md:py-12">
          <div className="mb-8 flex flex-col items-center gap-4 md:mb-0 md:items-start">
            <div className="text-xl font-bold text-white">Subvenia</div>
            <p className="font-sans text-xs uppercase tracking-widest text-slate-400">© 2024 Subvenia. Executive Grant Automation.</p>
          </div>
          <div className="flex gap-8">
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad">Privacidad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/terminos">Términos</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/seguridad">Seguridad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/contacto">Contacto</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24" id="contacto">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-secondary/12 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/8 blur-3xl"></div>
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="glass-card inner-glow rounded-[32px] p-8 md:p-10">
            <span className="font-label-caps mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-secondary">
              <span className="material-symbols-outlined text-base">alternate_email</span>
              CONTACTO
            </span>
            <h2 className="font-h2 mb-4 text-h2 text-white">Diseñamos tu plan de financiación</h2>
            <p className="font-body-lg mb-8 text-body-soft">
              Comparte tus objetivos y analizamos el potencial de subvención de tu red de asociados con un enfoque técnico, accionable y alineado con tus prioridades.
            </p>
            <div className="mb-8 space-y-4 text-body-soft">
              <p className="group flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110">mail</span>
                contacto@subvenia.ai
              </p>
              <p className="group flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110">call</span>
                +34 900 123 456
              </p>
              <p className="group flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-hover:scale-110">schedule</span>
                Respondemos en menos de 24 horas
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface-container-low/60 p-4">
                <p className="text-2xl font-bold text-white">24h</p>
                <p className="text-sm text-body-soft">Tiempo medio de respuesta</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-container-low/60 p-4">
                <p className="text-2xl font-bold text-white">+200</p>
                <p className="text-sm text-body-soft">Organizaciones asesoradas</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[32px] border border-white/10 p-8 shadow-[0_20px_60px_-30px_rgba(68,237,204,0.35)] md:p-10">
            <h3 className="mb-2 text-2xl font-bold text-white">Cuéntanos tu caso</h3>
            <p className="mb-6 text-sm text-body-soft">Te contactamos con una propuesta inicial adaptada a tu organización.</p>
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-body-soft" htmlFor="nombre">Nombre completo</label>
                <input className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="nombre" placeholder="Tu nombre" type="text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-body-soft" htmlFor="email">Email profesional</label>
                <input className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="email" placeholder="nombre@empresa.com" type="email" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-body-soft" htmlFor="empresa">Empresa / Organización</label>
                <input className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="empresa" placeholder="Nombre de tu organización" type="text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-body-soft" htmlFor="mensaje">Mensaje</label>
                <textarea className="h-32 w-full resize-none rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(68,237,204,0.15)]" id="mensaje" placeholder="Describe brevemente qué necesitas..." />
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 text-base font-bold text-on-secondary transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(68,237,204,0.35)]" type="submit">
                Solicitar contacto
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-10 md:flex-row md:px-8 md:py-12">
          <div className="mb-8 flex flex-col items-center gap-4 md:mb-0 md:items-start">
            <div className="text-xl font-bold text-white">Subvenia</div>
            <p className="font-sans text-xs uppercase tracking-widest text-slate-400">© 2024 Subvenia. Executive Grant Automation.</p>
          </div>
          <div className="flex gap-8">
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad">Privacidad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/terminos">Términos</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/seguridad">Seguridad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/contacto">Contacto</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export function MethodologyPage() {
  const steps = [
    {
      icon: 'database',
      title: 'Carga de Base de Datos',
      description:
        'Subes la base de clientes desde CSV o Excel y nuestro sistema la prepara para trabajar de forma estructurada.',
      tag: 'Tu base activa',
    },
    {
      icon: 'palette',
      title: 'Perfil de Marca',
      description:
        'Configuramos logo, colores, tono y estilo visual para generar informes 100% alineados con tu marca.',
      tag: 'Identidad visual',
    },
    {
      icon: 'person_search',
      title: 'Seleccion de Cliente',
      description:
        'Eliges al cliente objetivo y el sistema selecciona la informacion relevante para ese informe concreto.',
      tag: 'Cliente objetivo',
    },
    {
      icon: 'auto_awesome',
      title: 'Generacion de Informes',
      description:
        'La IA redacta el informe ejecutivo con estructura profesional, insights y recomendaciones accionables.',
      tag: 'Borrador inteligente',
    },
    {
      icon: 'send',
      title: 'Entrega por Email',
      description:
        'Cuando revisas el resultado, puedes enviarlo al cliente por correo electronico en un solo clic.',
      tag: 'Envio automatizado',
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden px-4 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,237,204,0.1),transparent_40%)]"></div>
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <span className="font-label-caps mb-4 block text-secondary">OPERATIONS FRAMEWORK</span>
            <h1 className="font-h1 mb-6 text-4xl leading-tight text-white md:text-h1">Nuestra Metodologia de Automatizacion</h1>
            <p className="font-body-lg text-body-soft">
              Un flujo guiado, claro y replicable para transformar datos de clientes en informes ejecutivos listos para enviar.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-2 bottom-2 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-secondary/0 via-secondary/30 to-secondary/0 md:block"></div>
            <div className="space-y-8">
              {steps.map((step, index) => {
                const isRight = index % 2 === 1;
                return (
                  <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10" key={step.title}>
                    <div className={`${isRight ? 'md:order-2' : ''}`}>
                      <div className="glass-card rounded-[24px] border border-white/10 p-6 md:p-7">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/40 bg-slate-950/60 text-secondary">
                            <span className="material-symbols-outlined text-xl">{step.icon}</span>
                          </span>
                          <span className="font-label-caps text-[10px] text-secondary">{step.tag}</span>
                        </div>
                        <h3 className="mb-3 text-2xl font-semibold text-white">{step.title}</h3>
                        <p className="text-body-soft">{step.description}</p>
                      </div>
                    </div>
                    <div className={`${isRight ? 'md:order-1' : ''} hidden md:block`}></div>
                    <div className="absolute top-1/2 left-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/40 bg-[#0a1524] text-sm font-semibold text-secondary md:flex">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-10 md:flex-row md:px-8 md:py-12">
          <div className="mb-8 flex flex-col items-center gap-4 md:mb-0 md:items-start">
            <div className="text-xl font-bold text-white">Subvenia</div>
            <p className="font-sans text-xs uppercase tracking-widest text-slate-400">© 2024 Subvenia. Executive Grant Automation.</p>
          </div>
          <div className="flex gap-8">
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad">Privacidad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/terminos">Términos</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/seguridad">Seguridad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/contacto">Contacto</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

const casosDeUsoOrganizaciones = [
  {
    icon: 'hub',
    title: 'Clústeres y agrupaciones empresariales',
    desc: 'Centraliza oportunidades para todas las empresas asociadas, detectando convocatorias relevantes y activando campañas de información en minutos.',
  },
  {
    icon: 'storefront',
    title: 'Cámaras de comercio',
    desc: 'Atiende más consultas con el mismo equipo: respuestas más rápidas, alertas automáticas y trazabilidad completa de cada caso.',
  },
  {
    icon: 'groups',
    title: 'Asociaciones sectoriales y federaciones',
    desc: 'Segmenta por perfil de socio y comunica solo las ayudas que encajan, mejorando la conversión y la percepción de valor del servicio.',
  },
];

const casosDeUsoRoles = [
  {
    titulo: 'Equipos de servicios a empresa',
    rol: 'Gestionan el día a día de consultas, validación de requisitos y acompañamiento inicial en procesos de subvención.',
    encaje:
      'Si recibís decenas de solicitudes semanales, Subvenia os ayuda a estandarizar respuestas y reducir tiempos de gestión sin perder cercanía.',
  },
  {
    titulo: 'Dirección y coordinación',
    rol: 'Necesitan visión global de impacto: convocatorias activas, progreso por entidad y retorno de los servicios ofrecidos.',
    encaje:
      'Con paneles ejecutivos y métricas en tiempo real, podéis tomar decisiones de priorización con datos y no solo con intuición.',
  },
  {
    titulo: 'Equipos técnicos y de datos',
    rol: 'Mantienen las bases de socios, conectan fuentes (CRM/Excel) y garantizan que la información esté lista para trabajar.',
    encaje:
      'Automatizáis tareas repetitivas de limpieza y clasificación, mejorando la calidad del dato y acelerando todo el flujo de subvenciones.',
  },
];

const casosDeUsoContexto = [
  {
    title: 'Base de socios en crecimiento',
    desc: 'Cuando aumenta el volumen de empresas y mantener una atención personalizada sin automatización deja de ser viable.',
  },
  {
    title: 'Convocatorias simultáneas',
    desc: 'Cuando coinciden ayudas autonómicas, nacionales y sectoriales, y hace falta filtrar rápidamente qué aplica a cada perfil.',
  },
  {
    title: 'Trabajo entre varios departamentos',
    desc: 'Cuando participan áreas técnicas, económicas y de atención al socio, y se necesita un flujo común con seguimiento claro.',
  },
];

export function CasosDeUsoPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,237,204,0.1),transparent_40%)]"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="font-label-caps mb-4 block text-secondary">CASOS DE USO</span>
          <h1 className="font-h1 mb-6 text-4xl leading-tight text-white md:text-h1">Cómo usan Subvenia las organizaciones</h1>
          <p className="font-body-lg text-body-soft">
            Descubre escenarios reales donde Subvenia ahorra tiempo, mejora la calidad de la información y multiplica el
            impacto de los equipos que gestionan subvenciones para múltiples empresas o socios.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-h2 mb-10 text-center text-h2 text-white md:mb-14">Organizaciones que más valor obtienen</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {casosDeUsoOrganizaciones.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/5 bg-[#141a21] p-8 transition-all duration-500 hover:border-secondary/30"
            >
              <span className="material-symbols-outlined mb-6 text-4xl text-secondary">{item.icon}</span>
              <h3 className="text-h3 mb-4 text-white">{item.title}</h3>
              <p className="text-body-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/5 blur-[120px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <span className="font-label-caps mb-4 block text-secondary">EQUIPOS CLAVE</span>
            <h2 className="font-h2 text-h2 text-white">Quién impulsa los resultados dentro de la entidad</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {casosDeUsoRoles.map((item) => (
              <article key={item.titulo} className="glass-card rounded-[24px] border border-white/10 p-7 md:p-8">
                <p className="font-label-caps mb-6 text-[11px] text-secondary">{item.titulo}</p>
                <div className="space-y-5">
                  <div>
                    <p className="font-label-caps mb-2 text-[10px] text-body-soft">Función habitual</p>
                    <p className="text-sm leading-relaxed text-body-soft">{item.rol}</p>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-label-caps mb-2 text-[10px] text-body-soft">Por qué encajáis en el público objetivo</p>
                    <p className="text-sm leading-relaxed text-body-soft">{item.encaje}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-h2 mb-10 text-center text-h2 text-white md:mb-14">Cuándo implementar Subvenia</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {casosDeUsoContexto.map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 text-center transition-all hover:border-secondary/25"
            >
              <p className="mb-3 text-lg font-bold text-white">{m.title}</p>
              <p className="text-sm text-body-soft">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="glass-card inner-glow rounded-[28px] border border-white/10 p-8 md:p-12">
            <div className="mb-6 justify-center md:justify-start">
              <span className="material-symbols-outlined flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary/40 bg-secondary/10 text-3xl text-secondary">
                verified
              </span>
            </div>
            <blockquote className="text-center text-2xl font-semibold leading-snug text-white md:text-left md:text-3xl">
              Subvenia es ideal para entidades que gestionan alto volumen de consultas y quieren convertir procesos manuales en
              una operativa ágil, medible y escalable.
            </blockquote>
            <p className="mt-6 text-center text-sm text-body-soft md:text-left">
              Si coordinas ayudas para una red de empresas o socios, tendrás un flujo centralizado para detectar oportunidades,
              priorizar acciones y comunicar mejor en cada convocatoria.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 pt-4 text-center md:px-8">
        <NavLink
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-10 py-5 text-xl font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.3)] transition-transform hover:scale-105"
          to="/contacto"
        >
          Ver cómo encaja en tu organización
          <span className="material-symbols-outlined text-2xl">arrow_forward</span>
        </NavLink>
      </section>

      <footer className="w-full border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-10 md:flex-row md:px-8 md:py-12">
          <div className="mb-8 flex flex-col items-center gap-4 md:mb-0 md:items-start">
            <div className="text-xl font-bold text-white">Subvenia</div>
            <p className="font-sans text-xs uppercase tracking-widest text-slate-400">© 2024 Subvenia. Executive Grant Automation.</p>
          </div>
          <div className="flex gap-8">
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad">Privacidad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/terminos">Términos</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/seguridad">Seguridad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/contacto">Contacto</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

const pricingPlans = [
  {
    name: 'Esencial',
    description: 'Equipos que empiezan a centralizar convocatorias y seguimiento básico.',
    price: '349',
    period: 'mes',
    highlight: false,
    features: ['Hasta 500 perfiles de asociados', 'Alertas de convocatorias clave', 'Informes mensuales estándar', 'Soporte por email'],
  },
  {
    name: 'Profesional',
    description: 'Organizaciones con varias líneas de financiación y necesidad de velocidad.',
    price: '890',
    period: 'mes',
    highlight: true,
    features: [
      'Hasta 5.000 perfiles',
      'Matching IA prioritario',
      'Borradores de solicitud asistidos',
      'Integraciones CRM (1 conector)',
      'Soporte dedicado en horario laboral',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Grandes redes, federaciones o grupos con requisitos de compliance y SLA.',
    price: 'A medida',
    period: '',
    highlight: false,
    features: ['Volúmenes ilimitados', 'Despliegue y SSO bajo demanda', 'API y auditoría avanzada', 'Success manager asignado', 'Formación a equipos internos'],
  },
];

export function PricingPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(68,237,204,0.12),transparent_45%)]"></div>
        <section className="relative px-4 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16">
          <div className="relative mx-auto max-w-6xl text-center">
            <span className="font-label-caps mb-4 inline-block text-secondary">PLANES Y LICENCIAS</span>
            <h1 className="font-h1 mb-6 text-4xl leading-tight text-white md:text-h1">Precios claros, alineados con tu escala</h1>
            <p className="font-body-lg mx-auto max-w-2xl text-body-soft">
              Elige el nivel de automatización y acompañamiento que encaja con tu organización. Siempre puedes ampliar o migrar de plan con ayuda del equipo Subvenia.
            </p>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[28px] border p-8 md:p-9 ${
                plan.highlight
                  ? 'border-secondary/50 bg-[#0d1828] shadow-[0_0_0_1px_rgba(68,237,204,0.2),0_24px_60px_-20px_rgba(68,237,204,0.25)]'
                  : 'border-white/10 bg-[#141a21]'
              }`}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1 font-label-caps text-[10px] text-secondary">
                  Más contratado
                </span>
              ) : null}
              <h2 className="mb-2 text-2xl font-bold text-white">{plan.name}</h2>
              <p className="mb-8 min-h-[3rem] text-sm leading-relaxed text-body-soft">{plan.description}</p>
              <div className="mb-8">
                {plan.price === 'A medida' ? (
                  <p className="text-3xl font-black tracking-tight text-white md:text-4xl">A medida</p>
                ) : (
                  <>
                    <span className="text-4xl font-black text-white md:text-5xl">{plan.price}€</span>
                    <span className="ml-1 text-body-soft">/{plan.period}</span>
                  </>
                )}
                <p className="mt-2 text-xs text-body-soft">IVA no incluido. Facturación anual con descuento disponible.</p>
              </div>
              <ul className="mb-10 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white">
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
          ))}
        </div>

        <div className="glass-card inner-glow mx-auto mt-14 max-w-4xl rounded-[28px] border border-white/10 p-8 md:p-10">
          <h3 className="mb-6 text-center text-xl font-bold text-white">Incluido en todos los planes</h3>
          <div className="grid gap-4 text-sm text-body-soft sm:grid-cols-2">
            {[
              'Cifrado en tránsito y en reposo',
              'Registro de actividad para auditoría',
              'Actualizaciones de producto continuas',
              'Biblioteca de plantillas de solicitud',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/30 px-4 py-3">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>

      <footer className="w-full border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-10 md:flex-row md:px-8 md:py-12">
          <div className="mb-8 flex flex-col items-center gap-4 md:mb-0 md:items-start">
            <div className="text-xl font-bold text-white">Subvenia</div>
            <p className="font-sans text-xs uppercase tracking-widest text-slate-400">© 2024 Subvenia. Executive Grant Automation.</p>
          </div>
          <div className="flex gap-8">
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/privacidad">Privacidad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/terminos">Términos</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/seguridad">Seguridad</NavLink>
            <NavLink className="font-sans text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-emerald-400" to="/contacto">Contacto</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

type LegalSection = {
  title: string;
  paragraphs: string[];
};

function LegalPageTemplate({
  eyebrow,
  title,
  intro,
  updatedAt,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative overflow-hidden px-4 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,237,204,0.1),transparent_40%)]"></div>
        <div className="relative mx-auto max-w-4xl">
          <span className="font-label-caps mb-4 block text-secondary">{eyebrow}</span>
          <h1 className="font-h1 mb-6 text-4xl leading-tight text-white md:text-h1">{title}</h1>
          <p className="font-body-lg mb-4 text-body-soft">{intro}</p>
          <p className="text-sm text-slate-400">Actualizado: {updatedAt}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-4 pb-24 md:px-8">
        {sections.map((section) => (
          <article key={section.title} className="glass-card rounded-3xl border border-white/10 p-7 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">{section.title}</h2>
            <div className="space-y-3 text-body-soft">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export function PrivacyPage() {
  return (
    <LegalPageTemplate
      eyebrow="PRIVACIDAD"
      intro="En esta página explicamos cómo recopilamos, utilizamos y protegemos la información personal cuando utilizas los servicios de Subvenia."
      sections={[
        {
          title: 'Datos que recopilamos',
          paragraphs: [
            'Recopilamos datos de contacto y de uso necesarios para prestar el servicio, como nombre, correo profesional y actividad dentro de la plataforma.',
            'Solo solicitamos la información estrictamente necesaria para automatizar procesos de subvenciones y ofrecer soporte técnico.',
          ],
        },
        {
          title: 'Uso de la información',
          paragraphs: [
            'Utilizamos los datos para operar la plataforma, mejorar funcionalidades, responder solicitudes y comunicar actualizaciones relevantes del servicio.',
            'No vendemos tus datos personales a terceros.',
          ],
        },
        {
          title: 'Conservación y derechos',
          paragraphs: [
            'Conservamos la información durante el tiempo necesario para cumplir obligaciones contractuales y legales aplicables.',
            'Puedes solicitar acceso, rectificación, supresión o limitación del tratamiento escribiendo a contacto@subvenia.ai.',
          ],
        },
      ]}
      title="Política de Privacidad"
      updatedAt="06/05/2026"
    />
  );
}

export function TermsPage() {
  return (
    <LegalPageTemplate
      eyebrow="TÉRMINOS"
      intro="Estos términos regulan el acceso y uso de Subvenia. Al utilizar la plataforma aceptas estas condiciones de servicio."
      sections={[
        {
          title: 'Uso permitido',
          paragraphs: [
            'El servicio debe utilizarse exclusivamente para fines profesionales y de conformidad con la normativa aplicable.',
            'No está permitido usar la plataforma para actividades ilícitas, fraudulentas o que comprometan su seguridad o disponibilidad.',
          ],
        },
        {
          title: 'Responsabilidades',
          paragraphs: [
            'El cliente es responsable de la veracidad de la información suministrada y de la gestión de credenciales de acceso de su equipo.',
            'Subvenia se compromete a prestar el servicio con diligencia profesional y medidas de continuidad operativa razonables.',
          ],
        },
        {
          title: 'Propiedad intelectual y cambios',
          paragraphs: [
            'La tecnología, diseño y contenido de la plataforma son titularidad de Subvenia o de sus licenciantes.',
            'Podemos actualizar estos términos cuando sea necesario; notificaremos cambios relevantes por medios habituales de comunicación.',
          ],
        },
      ]}
      title="Términos y Condiciones"
      updatedAt="06/05/2026"
    />
  );
}

export function SecurityPage() {
  return (
    <LegalPageTemplate
      eyebrow="SEGURIDAD"
      intro="La seguridad de la información es prioritaria para Subvenia. Aplicamos controles técnicos y organizativos para proteger datos y operaciones."
      sections={[
        {
          title: 'Controles técnicos',
          paragraphs: [
            'Aplicamos cifrado en tránsito y en reposo, control de accesos con mínimo privilegio y monitorización de actividad relevante.',
            'Realizamos revisiones periódicas para detectar vulnerabilidades y reforzar nuestra postura de seguridad.',
          ],
        },
        {
          title: 'Operación y continuidad',
          paragraphs: [
            'Contamos con procedimientos de respaldo y recuperación para minimizar impacto ante incidentes técnicos.',
            'Mantenemos trazabilidad de eventos críticos para facilitar auditoría y análisis de incidentes.',
          ],
        },
        {
          title: 'Reporte de incidentes',
          paragraphs: [
            'Si detectas una vulnerabilidad o incidente, puedes reportarlo a contacto@subvenia.ai indicando el máximo detalle posible.',
            'Nuestro equipo analiza cada reporte y prioriza las acciones correctivas según impacto y urgencia.',
          ],
        },
      ]}
      title="Política de Seguridad"
      updatedAt="06/05/2026"
    />
  );
}

export default Layout;

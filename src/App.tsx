import {useEffect} from 'react';
import {NavLink, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {CookieConsentBanner} from './components/CookieConsentBanner.tsx';
import {analyticsCookiesAllowed} from './lib/cookieConsent.ts';
import {ScrollIndicator} from './components/ScrollIndicator.tsx';
import {subvenia_translations} from './lib/subvenia_translations';

// Import new modular pages
import {HomePage as SubveniaHomePage} from './pages/HomePage';
import {Methodology as SubveniaMethodologyPage} from './pages/Methodology';
import {Contact as SubveniaContactPage} from './pages/Contact';
import {CasosDeUsoPage as SubveniaCasosDeUsoPage} from './pages/CasosDeUso';
import {PricingPage as SubveniaPricingPage} from './pages/PricingPage';
import {PrivacyPage as SubveniaPrivacyPage, TermsPage as SubveniaTermsPage, SecurityPage as SubveniaSecurityPage} from './pages/LegalPages';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  if (!analyticsCookiesAllowed()) return;

  const payload = {event: eventName, ...params};
  window.dataLayer?.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

const SUBVENIA_DEMO_APP_URL = import.meta.env.VITE_SUBVENIA_DEMO_APP_URL || 'http://localhost:3002/';
const SUBVENIA_CTA_DEMO = 'Demo';
const SUBVENIA_ONE_LINER = 'Convertimos vuestra base de socios en oportunidades reales de financiación: automáticas, escalables y medibles.';
const SUBVENIA_PITCH_20S = 'Hoy vuestros socios pierden ayudas porque nadie las cruza con su realidad. Subvenia convierte vuestra base de datos en un motor que detecta y activa financiación para cada empresa —sin equipo técnico interno y con impacto en euros.';

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

  const t = subvenia_translations.ES;

  return (
    <div className="font-body-md relative flex min-h-screen flex-1 flex-col text-[17px] leading-relaxed text-white selection:bg-emerald-300/30 md:text-[18px]">
      <div aria-hidden className="site-mesh-bg"></div>
      <div aria-hidden className="site-aurora-layer"></div>
      <div aria-hidden className="site-flow-gradient"></div>
      
      {/* Decorative Blobs */}
      <div aria-hidden className="pointer-events-none fixed -right-24 top-1/4 z-0 h-[min(520px,50vh)] w-[min(520px,55vw)] rounded-full bg-[radial-gradient(circle,rgba(68,237,204,0.16),transparent_68%)] blur-3xl site-ambient-blob" />
      <div aria-hidden className="pointer-events-none fixed -left-20 bottom-0 z-0 h-[min(400px,45vh)] w-[min(440px,50vw)] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_65%)] blur-3xl site-ambient-blob" style={{animationDelay: '-4s'}} />
      
      <div aria-hidden className="site-grid-overlay"></div>

      <nav className="fixed inset-x-0 top-3 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-[#1b2538]/80 px-4 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.55)] backdrop-blur-[20px] md:top-4 md:w-[calc(100%-2rem)] md:px-8 md:py-4">
        <NavLink className="z-10 text-base font-black tracking-tighter text-white md:text-2xl" to="/">
          Subvenia
        </NavLink>
        
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
          <div className="pointer-events-auto flex items-center gap-8">
            {[
              {to: '/', label: t.nav.home},
              {to: '/metodologia', label: t.nav.methodology},
              {to: '/casos-de-uso', label: t.nav.casosDeUso},
              {to: '/precios', label: t.nav.pricing},
              {to: '/contacto', label: t.nav.contact},
            ].map((link) => (
              <NavLink
                key={link.to}
                className={({isActive}) =>
                  `font-sans text-sm font-medium tracking-tight transition-all duration-300 hover:text-emerald-300 ${isActive ? 'text-emerald-300' : 'text-slate-100'}`
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <a
          className="z-10 rounded-xl bg-[#57e8cd] px-3 py-1.5 text-sm font-semibold text-[#00382e] transition-transform active:scale-95 md:px-6 md:py-2 md:text-base md:font-medium"
          onClick={() => trackEvent('cta_click', {cta_id: 'navbar_demo', location: 'navbar'})}
          href={SUBVENIA_DEMO_APP_URL}
        >
          {t.nav.demo}
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

// Exported pages for main.tsx routing
export function HomePage() {
  return (
    <SubveniaHomePage 
      trackEvent={trackEvent}
      SUBVENIA_PITCH_20S={SUBVENIA_PITCH_20S}
      SUBVENIA_CTA_DEMO={SUBVENIA_CTA_DEMO}
      SUBVENIA_DEMO_APP_URL={SUBVENIA_DEMO_APP_URL}
      SUBVENIA_ONE_LINER={SUBVENIA_ONE_LINER}
    />
  );
}

export function MethodologyPage() {
  return (
    <SubveniaMethodologyPage 
      trackEvent={trackEvent}
      SUBVENIA_PITCH_20S={SUBVENIA_PITCH_20S}
      SUBVENIA_CTA_DEMO={SUBVENIA_CTA_DEMO}
      SUBVENIA_DEMO_APP_URL={SUBVENIA_DEMO_APP_URL}
    />
  );
}

export function ContactPage() {
  return (
    <SubveniaContactPage 
      trackEvent={trackEvent} 
      SUBVENIA_PITCH_20S={SUBVENIA_PITCH_20S}
      SUBVENIA_CTA_DEMO={SUBVENIA_CTA_DEMO}
      SUBVENIA_DEMO_APP_URL={SUBVENIA_DEMO_APP_URL}
    />
  );
}

export function CasosDeUsoPage() {
  return <SubveniaCasosDeUsoPage onContact={() => window.location.href = SUBVENIA_DEMO_APP_URL} />;
}

export function PricingPage() {
  return <SubveniaPricingPage onBookDemo={() => window.location.href = SUBVENIA_DEMO_APP_URL} />;
}

export {SubveniaPrivacyPage as PrivacyPage, SubveniaTermsPage as TermsPage, SubveniaSecurityPage as SecurityPage};

export default Layout;

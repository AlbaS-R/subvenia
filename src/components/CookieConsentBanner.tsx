import {useCallback, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {getCookieConsent, setCookieConsent} from '../lib/cookieConsent.ts';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  const sync = useCallback(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  useEffect(() => {
    sync();
    const onStorage = (e: StorageEvent) => {
      if (e.key === null || e.key === 'subvenia_cookie_consent_v1') {
        sync();
      }
    };
    const onCustom = () => sync();
    window.addEventListener('storage', onStorage);
    window.addEventListener('subvenia:cookie-consent', onCustom as EventListener);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('subvenia:cookie-consent', onCustom as EventListener);
    };
  }, [sync]);

  if (!visible) {
    return null;
  }

  const acceptAll = () => {
    setCookieConsent(true);
    setVisible(false);
  };

  const necessaryOnly = () => {
    setCookieConsent(false);
    setVisible(false);
  };

  return (
    <div
      className="legal-cookie-banner pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-3 pb-4 pt-2 md:px-6 md:pb-6"
      role="dialog"
      aria-modal="false"
      aria-label="Preferencias de cookies"
    >
      <div className="legal-cookie-banner__inner pointer-events-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#0c1218]/95 p-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md md:flex-row md:items-center md:gap-6 md:p-6">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white md:text-base">Cookies en Subvenia</p>
          <p className="mt-1 text-sm leading-relaxed text-body-soft">
            Usamos cookies necesarias para el funcionamiento del sitio. Las de medición o analítica solo se activan si las aceptáis. Podéis leer el detalle en{' '}
            <NavLink className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 hover:text-white" to="/privacidad#cookies">
              Política de privacidad — cookies
            </NavLink>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            onClick={necessaryOnly}
          >
            Solo necesarias
          </button>
          <button
            type="button"
            className="rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-on-secondary shadow-[0_0_24px_rgba(68,237,204,0.25)] transition-colors hover:brightness-110"
            onClick={acceptAll}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}

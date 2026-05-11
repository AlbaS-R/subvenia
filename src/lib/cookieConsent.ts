const STORAGE_KEY = 'subvenia_cookie_consent_v1';

export type CookieConsentState = {
  analytics: boolean;
  savedAt: string;
};

export function getCookieConsent(): CookieConsentState | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as CookieConsentState;
  } catch {
    return null;
  }
}

export function setCookieConsent(acceptAnalytics: boolean): CookieConsentState {
  const value: CookieConsentState = {
    analytics: acceptAnalytics,
    savedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent<CookieConsentState>('subvenia:cookie-consent', {detail: value}));
  return value;
}

export function analyticsCookiesAllowed(): boolean {
  return getCookieConsent()?.analytics === true;
}

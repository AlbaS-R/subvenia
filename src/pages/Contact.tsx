import { useState, type ChangeEvent, type FormEvent } from 'react';
import { sendContactEmail, validateEmailJsConfig } from '../lib/email';

interface ContactPageProps {
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

export const Contact = ({
  trackEvent,
  SUBVENIA_PITCH_20S,
  SUBVENIA_DEMO_APP_URL,
}: ContactPageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'idle' | 'success' | 'error'; text: string }>({
    type: 'idle',
    text: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (submitFeedback.type !== 'idle') {
      setSubmitFeedback({ type: 'idle', text: '' });
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent('contact_form_submit', { form_id: 'contact_main', location: 'contact_page' });

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
      trackEvent('contact_form_success', { form_id: 'contact_main' });
      setSubmitFeedback({
        type: 'success',
        text: 'Mensaje enviado correctamente. Os contactaremos en menos de 24 h.',
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error: unknown) {
      const errorMessage =
        typeof error === 'object' && error !== null && 'text' in error
          ? String((error as { text?: unknown }).text)
          : error instanceof Error
            ? error.message
            : 'Error desconocido';

      console.error('EmailJS error:', error);
      trackEvent('contact_form_error', { form_id: 'contact_main' });
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

          <div className="method-surface-card relative overflow-hidden rounded-[28px] p-8 shadow-[0_20px_60px_-30px_rgba(68,237,204,0.25)] md:rounded-[32px] md:p-10" data-motion="right" data-motion-delay="180">
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
                  onClick={() => trackEvent('cta_click', { cta_id: 'contact_form_submit', location: 'contact_form' })}
                  type="submit"
                >
                  {isSubmitting ? 'Enviando...' : 'Pedir demo'}
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <div className="mt-6 text-center">
                  <p className="text-sm text-body-soft mb-2">¿Prefieres explorar por tu cuenta?</p>
                  <a 
                    onClick={() => {
                      trackEvent('cta_click', { cta_id: 'contact_direct_demo', location: 'contact_page' });
                      window.location.href = SUBVENIA_DEMO_APP_URL;
                    }}
                    className="text-secondary font-bold hover:underline cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                    Acceso directo a la Demo
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

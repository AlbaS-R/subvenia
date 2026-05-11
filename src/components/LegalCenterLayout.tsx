import {useEffect, useLayoutEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

export type LegalDocSection = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
  bullets?: {label: string; text: string}[];
};

type LegalCenterLayoutProps = {
  docTitle: string;
  introBox: string;
  updatedAt: string;
  sections: LegalDocSection[];
};

function slugifyNavLabel(title: string, index: number) {
  const short = title.length > 42 ? `${title.slice(0, 40)}…` : title;
  return `${index + 1}. ${short}`;
}

export function LegalCenterLayout({docTitle, introBox, updatedAt, sections}: LegalCenterLayoutProps) {
  const location = useLocation();
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({behavior: 'smooth', block: 'start'});
        setActiveId(hash);
      }, 100);
    }
  }, [location.hash, location.pathname]);

  useLayoutEffect(() => {
    let cancelled = false;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.15)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {rootMargin: '-18% 0px -52% 0px', threshold: [0.12, 0.22, 0.35, 0.5]},
    );

    const raf = window.requestAnimationFrame(() => {
      if (cancelled) {
        return;
      }
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          obs.observe(el);
        }
      });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
      setActiveId(id);
      window.history.replaceState(null, '', `${location.pathname}#${id}`);
    }
  };

  return (
    <div className="method-page relative min-h-screen pb-28 pt-24 text-white md:pb-32 md:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(68,237,204,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-8 md:mb-10">
          <p className="font-label-caps text-secondary">Centro legal</p>
          <h1 className="font-h1 mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Centro Legal</h1>
          <p className="mt-2 text-sm text-body-soft">Última actualización: {updatedAt}</p>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <aside className="lg:w-64 lg:shrink-0 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Índice del documento" className="method-surface-card relative overflow-hidden rounded-2xl p-3 shadow-[0_20px_60px_-36px_rgba(0,0,0,0.85)]">
              <div aria-hidden className="ms-card-ambient opacity-50" />
              <div className="relative z-10">
                <p className="mb-3 px-2 font-label-caps text-secondary/90">En este documento</p>
                <ul className="max-h-[50vh] space-y-0.5 overflow-y-auto pr-1 lg:max-h-[calc(100vh-12rem)]">
                  {sections.map((s, index) => {
                    const isActive = activeId === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          type="button"
                          onClick={() => scrollTo(s.id)}
                          className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                            isActive
                              ? 'border border-secondary/35 bg-secondary/10 font-semibold text-white shadow-[inset_0_0_0_1px_rgba(68,237,204,0.12)]'
                              : 'text-body-soft hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {isActive ? <span className="h-6 w-1 shrink-0 rounded-full bg-secondary" aria-hidden /> : <span className="w-1 shrink-0" aria-hidden />}
                          <span className="leading-snug">{slugifyNavLabel(s.title, index)}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </aside>

          <div className="min-w-0 flex-1 space-y-6">
            <div className="glass-card inner-glow relative overflow-hidden rounded-[28px] border border-white/10 p-6 md:p-8">
              <div aria-hidden className="ms-card-ambient opacity-45" />
              <div className="relative z-10">
                <h2 className="font-h2 text-xl text-white md:text-2xl">
                  <span className="method-gradient-headline">{docTitle}</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body-soft md:text-base">{introBox}</p>
              </div>
            </div>

            <article className="glass-card inner-glow relative overflow-hidden rounded-[28px] border border-white/10 p-6 md:rounded-[28px] md:p-10 md:px-11 md:py-10">
              <div aria-hidden className="ms-card-ambient opacity-40" />
              <div className="relative z-10 space-y-10 md:space-y-12">
                {sections.map((section, index) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-white/10 pb-10 last:border-0 last:pb-0 md:scroll-mt-32">
                    <div className="flex items-start gap-3 md:gap-4">
                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-secondary/40 bg-secondary/10 text-secondary"
                        aria-hidden
                      >
                        <span className="material-symbols-outlined text-[22px]">{section.icon}</span>
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                          <span className="text-secondary">{index + 1}.</span> {section.title}
                        </h3>
                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-body-soft md:text-[15px]">
                          {section.paragraphs.map((p) => (
                            <p key={p}>{linkifyText(p)}</p>
                          ))}
                        </div>
                        {section.bullets && section.bullets.length > 0 ? (
                          <ul className="mt-5 space-y-4">
                            {section.bullets.map((b) => (
                              <li key={b.label + b.text} className="flex gap-3">
                                <span
                                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-secondary/5 text-secondary"
                                  aria-hidden
                                >
                                  <span className="material-symbols-outlined text-[16px] [font-variation-settings:'FILL'_1]">check_circle</span>
                                </span>
                                <div className="text-sm leading-relaxed text-body-soft md:text-[15px]">
                                  <span className="font-semibold text-white/95">{b.label}</span> {b.text}
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function linkifyText(text: string) {
  const emailOrUrl = /(contacto@subvenia\.ai)/g;
  const parts = text.split(emailOrUrl);
  return parts.map((part, i) => {
    if (part === 'contacto@subvenia.ai') {
      return (
        <a
          key={`${i}-mail`}
          className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 hover:text-white"
          href="mailto:contacto@subvenia.ai"
        >
          contacto@subvenia.ai
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

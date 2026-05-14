import React from 'react';
import { ArrowRight, Building2, Briefcase, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { BentoCard } from '../components/BentoCard';
import { MotionReveal } from '../components/MotionReveal';
import { subvenia_translations } from '../lib/subvenia_translations';

interface CasosDeUsoProps {
  onContact: () => void;
}

export const CasosDeUsoPage: React.FC<CasosDeUsoProps> = ({ onContact }) => {
  const t = subvenia_translations.ES;
  const page = {
    badge: 'Casos de uso reales',
    title: 'Cómo Subvenia genera valor económico en organizaciones empresariales',
    subtitle:
      'No es teoría: estos escenarios muestran cómo clusters, cámaras y asociaciones convierten datos de socios en financiación activable y fidelización.',
    sectors: [
      {
        icon: Building2,
        title: 'Cluster industrial',
        desc: 'Activa oportunidades por línea de actividad y demuestra impacto trimestral a la junta.'
      },
      {
        icon: Briefcase,
        title: 'Cámara de comercio',
        desc: 'Escala servicios de ayudas sin ampliar plantilla y mejora la propuesta de valor para pymes.'
      },
      {
        icon: Users,
        title: 'Asociación sectorial',
        desc: 'Prioriza empresas con mayor encaje y aumenta la captación efectiva de fondos.'
      }
    ],
    cases: [
      {
        profile: 'Asociación sector TIC',
        pain: 'Más de 400 socios y un equipo incapaz de revisar convocatorias de forma continua.',
        solution: 'Subvenia segmenta socios por tamaño/actividad y activa alertas con potencial económico real.',
        impact: '+38% de oportunidades activadas y mejor percepción de cuota en 90 días.'
      },
      {
        profile: 'Cluster agroalimentario',
        pain: 'Dificultad para justificar valor continuo ante socios y consejo rector.',
        solution: 'Informes automáticos por empresa con estado, elegibilidad e impacto estimado por ayuda.',
        impact: 'Panel ejecutivo mensual para dirección y mayor retención anual de socios.'
      },
      {
        profile: 'Cámara territorial',
        pain: 'Servicio de ayudas reactivo, manual y dependiente de personas clave.',
        solution: 'Motor de matching automático y campañas de activación por segmentos prioritarios.',
        impact: 'Servicio escalable sin contratar equipo técnico especializado.'
      }
    ],
    metrics: [
      { value: '7x', label: 'Capacidad operativa sin crecer estructura' },
      { value: '+300', label: 'Oportunidades activables por ciclo' },
      { value: 'ROI', label: 'Retorno visible para socios y junta' }
    ],
    quote:
      'Subvenia no solo detecta ayudas. Convierte tu base de asociados en un motor de financiación y fidelización.',
    cta: 'Solicitar demo personalizada'
  };

  return (
    <div className="method-page min-h-screen bg-transparent pt-24 text-white">
      <section className="relative overflow-hidden px-4 py-20 text-center md:px-8 md:py-32">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <MotionReveal>
            <span className="mb-6 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 font-label-caps text-secondary uppercase">
              {page.badge}
            </span>
            <h1 className="font-h1 mb-6 text-4xl md:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="font-body-lg mx-auto max-w-2xl text-lg leading-relaxed text-body-soft md:text-xl">
              {page.subtitle}
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="mb-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl italic">¿Para quién está pensado?</h2>
          </MotionReveal>
          
          <div className="bento-grid">
            {page.sectors.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal 
                  key={item.title} 
                  delay={index * 0.1} 
                  direction="up"
                  className="bento-item"
                  style={{ '--bento-span': 4 } as React.CSSProperties}
                >
                  <BentoCard innerClassName="items-center text-center">
                    <Icon className="mb-6 h-10 w-10 text-secondary" />
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-lg text-body-soft leading-relaxed">{item.desc}</p>
                  </BentoCard>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bento-grid">
            {page.cases.map((item, index) => (
              <MotionReveal 
                key={item.profile} 
                delay={index * 0.1} 
                direction={index % 2 === 0 ? 'right' : 'left'}
                className="bento-item"
                style={{ '--bento-span': 4 } as React.CSSProperties}
              >
                <BentoCard>
                  <div className="mb-6 inline-block rounded-lg bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
                    {item.profile}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-body-soft/60">Situación</div>
                      <p className="text-base text-body-soft">{item.pain}</p>
                    </div>
                    <div>
                      <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-body-soft/60">Cómo actúa Subvenia</div>
                      <p className="text-base text-body-soft">{item.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <div className="mb-2 text-[11px] font-black uppercase tracking-widest text-body-soft/60">Resultado</div>
                      <p className="text-xl font-bold text-secondary leading-tight">{item.impact}</p>
                    </div>
                  </div>
                </BentoCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bento-grid">
            {page.metrics.map((metric, index) => (
              <MotionReveal 
                key={index} 
                delay={index * 0.1} 
                direction="up"
                className="bento-item"
                style={{ '--bento-span': 4 } as React.CSSProperties}
              >
                <BentoCard innerClassName="items-center text-center justify-center py-4">
                  <div className="mb-3 text-6xl font-black text-secondary tracking-tight">{metric.value}</div>
                  <p className="text-lg font-medium text-body-soft">{metric.label}</p>
                </BentoCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <MotionReveal className="relative overflow-hidden rounded-[40px] border border-secondary/20 bg-gradient-to-br from-secondary/10 via-slate-900/40 to-slate-950/60 p-10 md:p-20 shadow-2xl backdrop-blur-2xl">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:gap-20">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-secondary/10 border border-secondary/30 backdrop-blur-md shrink-0">
                <CheckCircle className="h-12 w-12 text-secondary" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
                  "{page.quote}"
                </p>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" />
                  <span className="text-lg font-medium italic text-body-soft">Enfoque ejecutivo, resultados medibles y activación real.</span>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative px-4 py-24 text-center">
        <MotionReveal>
          <button 
            onClick={onContact}
            className="group relative inline-flex items-center gap-4 rounded-full bg-secondary px-12 py-5 text-xl font-bold text-on-secondary shadow-[0_0_40px_rgba(68,237,204,0.3)] transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {page.cta}
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
          </button>
        </MotionReveal>
      </section>
    </div>
  );
};

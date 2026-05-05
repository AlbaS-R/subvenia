import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Briefcase, BarChart3, Users, CheckCircle, Globe, ShieldCheck } from 'lucide-react';

interface CasosDeUsoProps {
  t: any;
  onContact: () => void;
}

export const CasosDeUso: React.FC<CasosDeUsoProps> = ({ onContact }) => {
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
    <div className="bg-background text-on-surface transition-colors duration-300 min-h-screen">
      <section className="safe-padding pt-24 md:pt-28 pb-14 md:pb-18 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-primary-fixed/40 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm mb-6 uppercase">
            {page.badge}
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display-xl text-display-xl mb-6"
          >
            {page.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
          >
            {page.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="safe-padding pb-stack-lg">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 border border-primary/10">
          <h2 className="font-headline-lg text-headline-lg mb-8 italic">¿Para quién está pensado?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {page.sectors.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-surface-container-lowest rounded-xl p-6 border border-primary/10"
                >
                  <Icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-title-lg mb-2">{item.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="safe-padding pb-stack-lg">
        <div className="grid lg:grid-cols-3 gap-6">
          {page.cases.map((item, index) => (
            <motion.article
              key={item.profile}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-surface-container-lowest rounded-xl border border-primary/10 p-7"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{item.profile}</div>
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Situación</div>
                  <p className="font-body-md text-on-surface-variant">{item.pain}</p>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Cómo actúa Subvenia</div>
                  <p className="font-body-md text-on-surface-variant">{item.solution}</p>
                </div>
                <div className="pt-3 border-t border-primary/10">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Resultado</div>
                  <p className="font-title-lg text-primary">{item.impact}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="safe-padding pb-stack-lg">
        <div className="grid md:grid-cols-3 gap-6">
          {page.metrics.map((metric, index) => (
            <div key={index} className="bg-surface-container-low rounded-xl p-8 border border-primary/10 text-center">
              <div className="font-display-xl text-primary text-headline-lg mb-2">{metric.value}</div>
              <p className="font-body-md text-on-surface-variant">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="safe-padding pb-stack-lg">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-on-secondary-fixed rounded-xl p-10 md:p-14 overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
            <BarChart3 className="w-56 h-56 text-white" />
          </div>
          <div className="absolute -bottom-10 -left-10 p-8 opacity-10 hidden md:block">
            <Globe className="w-44 h-44 text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shrink-0">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-yellow-300" />
            </div>
            <div className="text-center md:text-left">
              <p className="font-headline-md text-headline-md text-white leading-tight">
                "{page.quote}"
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center md:justify-start">
                <ShieldCheck className="w-5 h-5 text-green-300" />
                <span className="text-white/80 text-sm font-medium tracking-wide italic">Enfoque ejecutivo, resultados medibles y activación real.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="safe-padding pb-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <button 
            onClick={onContact}
            className="group relative bg-primary text-on-primary px-10 py-5 rounded-full font-title-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {page.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

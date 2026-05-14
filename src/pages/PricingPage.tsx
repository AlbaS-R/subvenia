import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield, Zap, HelpCircle, ChevronDown, ChevronUp, Landmark, Building2, GraduationCap, BarChart3, Calendar } from 'lucide-react';
import { MotionReveal } from '../components/MotionReveal';
import { BentoCard } from '../components/BentoCard';
import { subvenia_translations } from '../lib/subvenia_translations';

export function PricingPage({ onBookDemo }: { onBookDemo: () => void }) {
  const t = subvenia_translations.ES;
  const tp = t.pricingPage;
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="method-page relative overflow-hidden text-white pt-24">
      {/* Background Pattern & AI Core */}
      <div aria-hidden className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <MotionReveal>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-wide uppercase">
                <Shield className="w-3.5 h-3.5" />
                {t.home.badge}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
                <Zap className="w-3.5 h-3.5" />
                {t.home.platformBadge}
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <MotionReveal>
            <h1 className="font-h1 text-4xl md:text-6xl lg:text-7xl mb-8 tracking-tighter leading-[1.1]">
              <span className="method-gradient-headline inline-block">
                {tp.title}
              </span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-body-soft leading-relaxed max-w-2xl mx-auto">
              {tp.subtitle}
            </p>
          </MotionReveal>
        </div>

        {/* Trust Badges */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            <MotionReveal className="text-center mb-16">
              <p className="font-label-caps text-secondary/60">
                {tp.trustTitle}
              </p>
            </MotionReveal>
            <div className="bento-grid">
              {[
                { icon: <Landmark className="w-8 h-8" />, label: tp.trust1, sub: tp.trust1Sub },
                { icon: <Building2 className="w-8 h-8" />, label: tp.trust2, sub: tp.trust2Sub },
                { icon: <GraduationCap className="w-8 h-8" />, label: tp.trust3, sub: tp.trust3Sub },
                { icon: <BarChart3 className="w-8 h-8" />, label: tp.trust4, sub: tp.trust4Sub }
              ].map((item, i) => (
                <MotionReveal 
                  key={i} 
                  delay={i * 0.1} 
                  direction="up"
                  className="bento-item"
                  style={{ '--bento-span': 3 } as any}
                >
                  <BentoCard innerClassName="items-center text-center gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{item.label}</h4>
                      <p className="text-xs font-black text-body-soft/60 tracking-widest uppercase">{item.sub}</p>
                    </div>
                  </BentoCard>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-20 scroll-mt-24">
          <MotionReveal className="text-center mb-16">
            <h2 className="font-h2 text-4xl text-white mb-4">{tp.pricingTitle}</h2>
            <p className="text-lg text-body-soft">{tp.pricingSubtitle}</p>
          </MotionReveal>

          <div className="bento-grid max-w-7xl mx-auto items-stretch mb-12">
            {/* Essential */}
            <MotionReveal 
              delay={0.1} 
              direction="up" 
              className="bento-item h-full"
              style={{ '--bento-span': 4 } as any}
            >
              <BentoCard className="flex flex-col h-full">
                <div className="h-full flex flex-col p-4">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{tp.card1Title}</h3>
                  <p className="text-body-soft text-sm leading-relaxed">{tp.card1Desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">{tp.card1Price}</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {[tp.card1Feat1, tp.card1Feat2, tp.card1Feat3].map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-sm text-body-soft">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={onBookDemo}
                  className="w-full py-4 rounded-2xl font-bold text-secondary bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all flex items-center justify-center gap-2 group"
                >
                  {tp.card1CTA} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
              </BentoCard>
            </MotionReveal>

            {/* Professional */}
            <MotionReveal 
              delay={0.2} 
              direction="up" 
              className="bento-item h-full"
              style={{ '--bento-span': 4 } as any}
            >
              <BentoCard overflowVisible={true} className="flex flex-col h-full border-secondary/40 bg-secondary/10 lg:scale-105 shadow-2xl shadow-secondary/20 relative z-20 transition-transform duration-500">
                <div aria-hidden className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#44edcc] text-[#00382e] px-8 py-2 rounded-full text-[12px] font-black tracking-[0.25em] uppercase z-30 shadow-[0_0_35px_rgba(68,237,204,0.6)] border border-white/40 animate-pulse">
                  RECOMENDADO
                </div>
                <div className="h-full flex flex-col p-4">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{tp.card2Title}</h3>
                  <p className="text-body-soft text-sm leading-relaxed">{tp.card2Desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">{tp.card2Price}</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {[tp.card2Feat1, tp.card2Feat2, tp.card2Feat3].map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-sm text-white font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={onBookDemo}
                  className="w-full py-4 rounded-2xl font-bold text-on-secondary bg-secondary hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  {tp.card2CTA} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
              </BentoCard>
            </MotionReveal>

            {/* Enterprise */}
            <MotionReveal 
              delay={0.3} 
              direction="up" 
              className="bento-item h-full"
              style={{ '--bento-span': 4 } as any}
            >
              <BentoCard className="flex flex-col h-full">
                <div className="h-full flex flex-col p-4">
                <div className="mb-6 mt-4">
                  <h3 className="text-2xl font-bold text-white mb-3">{tp.card3Title}</h3>
                  <p className="text-body-soft text-sm leading-relaxed">{tp.card3Desc}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 mb-8">
                  <p className="text-3xl font-black text-white mb-1">{tp.card3Price}</p>
                  <p className="text-xs font-semibold leading-normal text-body-soft">{tp.card3OfferDesc}</p>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {[tp.card3Feat1, tp.card3Feat2, tp.card3Feat3, tp.card3Feat4].map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-sm text-body-soft">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={onBookDemo}
                  className="w-full py-4 rounded-2xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
                >
                  {tp.card3CTA} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
              </BentoCard>
            </MotionReveal>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20 scroll-mt-24">
          <MotionReveal className="text-center mb-16">
            <h2 className="font-h2 text-4xl text-white mb-4">{tp.faqTitle}</h2>
          </MotionReveal>
          
          <div className="space-y-12">
            {tp.faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px bg-white/10 flex-grow" />
                  <h3 className="font-label-caps text-secondary px-4">
                    {category.title}
                  </h3>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                
                <div className="space-y-4">
                  {category.items.map((faq, i) => {
                    const globalIndex = `${catIndex}-${i}`;
                    return (
                      <div key={i}>
                        <BentoCard className="!p-0">
                          <button
                            onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <HelpCircle className="w-5 h-5 text-secondary shrink-0" />
                              <span className="font-semibold text-white">{faq.q}</span>
                            </div>
                            {openFaq === globalIndex ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                          <AnimatePresence>
                            {openFaq === globalIndex && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-6 pb-6 pt-0 text-body-soft leading-relaxed border-t border-white/5"
                              >
                                <div className="mt-4 text-base">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </BentoCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Band */}
      <section className="relative py-20 overflow-hidden border-t border-white/5 bg-slate-900/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <MotionReveal className="max-w-2xl">
              <h3 className="font-h1 text-4xl md:text-6xl mb-6 tracking-tight">
                {tp.ctaText}
              </h3>
              <p className="font-body-lg text-body-soft text-xl">
                {tp.ctaSubtitle}
              </p>
            </MotionReveal>
            <MotionReveal>
              <button
                onClick={onBookDemo}
                className="px-12 py-6 rounded-[2rem] font-black text-on-secondary bg-secondary transition-all flex items-center gap-4 shadow-2xl shadow-secondary/20 text-xl uppercase tracking-widest whitespace-nowrap hover:scale-105 active:scale-95"
              >
                <Calendar className="w-6 h-6" />
                {tp.ctaButtonFinal}
              </button>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

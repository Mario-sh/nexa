import { motion } from 'motion/react';
import { Check, Flame, Award, HelpCircle, Zap, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../types';

interface OffersProps {
  currentLang: Language;
  onSelectOffer: (offerName: string) => void;
}

export default function Offers({ currentLang, onSelectOffer }: OffersProps) {
  const t = translations[currentLang].servicesSection;

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 select-none overflow-hidden z-20 scroll-mt-20" id="services-section">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16" id="services-header-container">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/50 text-[10px] font-bold text-[#141414] uppercase tracking-widest mb-4">
            <span>Formulas & Packs • Transparent pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-neutral-900 leading-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl text-center leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* OFFERS TWO COLUMN GRID - ASYMMETRICAL & BRUTALIST GLASS STYLES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto" id="offers-columns-grid">
          
          {/* Offer 1: Landing Page Flash (750€) - occupying 5 grid cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-12 xl:col-span-5 relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-neutral-200 shadow-md hover:shadow-xl transition-all duration-300"
            id="offer-card-flash"
          >
            {/* Soft backdrop decorator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-200/50 rounded-full blur-2xl -z-10" />

            {/* Header copy and pricing */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#141414] px-3 py-1 bg-neutral-100 rounded-md select-none">
                  Single-Page Hero
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600">
                  SEO Optimized
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#141414] tracking-tight">
                {t.flashName}
              </h3>
              
              <div className="my-5 flex items-baseline gap-1" id="pricing-flash">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141414]">
                  750€
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold">
                  HT / Page Unique
                </span>
              </div>

              <p className="text-[13px] sm:text-[14px] text-neutral-500 leading-relaxed mb-6 font-normal">
                {t.flashShort}
              </p>

              {/* Features checkmark loop */}
              <div className="flex flex-col gap-3 pb-8" id="features-flash-list">
                {t.flashFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-600 font-medium">
                    <div className="p-0.5 bg-indigo-50 text-indigo-600 rounded-md mt-0.5 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Choose button / trigger modal callback */}
            <button
              onClick={() => onSelectOffer(`${t.flashName} (750€)`)}
              className="w-full py-3 bg-[#131313] hover:bg-neutral-800 text-white rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
            >
              <span>{t.ctaSelect}</span>
              <Check size={13} strokeWidth={2.5} />
            </button>
          </motion.div>

          {/* Offer 2: Site Vitrine Authority Kit (2500€) - occupying 7 grid cols - Highlighted best value */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-12 xl:col-span-7 relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-indigo-950 text-white border-2 border-indigo-500 shadow-xl hover:shadow-[0_10px_35px_rgba(99,102,241,0.15)] transition-all duration-300"
            id="offer-card-authority"
          >
            {/* Ribbon Badge */}
            <div className="absolute -top-3 right-6 bg-amber-500 text-neutral-950 text-[9.5px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md select-none">
              Ultimate Choice
            </div>

            {/* Header and pricing info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#3f2bff] px-3 py-1 bg-white rounded-md font-bold">
                  5 Complete Pages
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-300">
                  Bot IA & Blog inclus
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                {t.authorityName}
              </h3>

              <div className="my-5 flex items-baseline gap-1.5" id="pricing-authority">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  2500€
                </span>
                <span className="text-xs text-indigo-300 uppercase tracking-widest font-bold">
                  HT / Projet clé en main
                </span>
              </div>

              <p className="text-[13px] sm:text-[14px] text-indigo-200/90 leading-relaxed mb-8 max-w-xl font-normal">
                {t.authorityShort}
              </p>

              {/* Two Column Grid lists of Authority Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pb-8" id="features-authority-list">
                {t.authorityFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-indigo-100 font-semibold">
                    <div className="p-0.5 bg-white/10 text-white rounded-md mt-0.5 shrink-0 border border-white/5">
                      <Check size={11} strokeWidth={3} className="text-amber-400" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive chooser CTA */}
            <button
              onClick={() => onSelectOffer(`${t.authorityName} (2500€)`)}
              className="w-full py-3.5 bg-white hover:bg-neutral-100 active:scale-95 text-indigo-950 rounded-2xl text-[12.5px] font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <span>{t.ctaSelect}</span>
              <Award size={14} className="stroke-[2.5]" />
            </button>
            
            {/* Trust disclaimer badge of Authority Plan */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-indigo-300/80 font-medium select-none">
              <ShieldCheck size={13} className="text-emerald-400" /> Fully scalable next-gen system backed by our structural diagnostics plan.
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

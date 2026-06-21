import { motion } from 'motion/react';
import { Server, Users, Award, ShieldAlert, Laptop, Briefcase } from 'lucide-react';
import { Language, translations } from '../types';

interface AudienceProps {
  currentLang: Language;
}

export default function Audience({ currentLang }: AudienceProps) {
  const t = translations[currentLang].audience;

  const targetCards = [
    {
      id: 'saas',
      title: t.saasTitle,
      description: t.saasDesc,
      icon: Laptop,
      colorClass: 'text-sky-500 bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-900/30',
      badge: 'SaaS / Tech',
    },
    {
      id: 'coach',
      title: t.coachTitle,
      description: t.coachDesc,
      icon: Users,
      colorClass: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/30',
      badge: 'Infopreneurs & Coaches',
    },
    {
      id: 'pme',
      title: t.pmeTitle,
      description: t.pmeDesc,
      icon: Briefcase,
      colorClass: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/30',
      badge: 'SMEs & Corporates',
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 select-none overflow-hidden z-20 scroll-mt-20" id="target-section">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14" id="audience-header-block">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/50 text-[10px] font-bold uppercase tracking-widest text-[#141414] mb-4">
            <span>Target Sectors • Publics Cibles</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-neutral-900">
            {t.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl text-center leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* ASYMMETRIC GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="audience-cards-grid">
          {targetCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-neutral-150 shadow-sm hover:shadow-xl hover:border-indigo-500/10 transition-all duration-300"
                id={`audience-card-${card.id}`}
              >
                {/* Background glow subtle effect */}
                <div className="absolute inset-0 bg-radial from-indigo-500/0 hover:from-indigo-500/3 opacity-30 transition-all rounded-3xl" />
                
                <div>
                  {/* Card head icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${card.colorClass}`}>
                      <IconComponent size={21} className="transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-2.5 py-1 bg-neutral-100/50 rounded-md">
                      {card.badge}
                    </span>
                  </div>

                  {/* Content copy */}
                  <h3 className="text-xl font-extrabold text-[#141414] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-neutral-500 leading-relaxed font-semibold">
                    {card.description}
                  </p>
                </div>

                {/* Foot indicators for conversions */}
                <div className="border-t border-neutral-100 pt-4 mt-6 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[9.5px]">
                    🚀 High-Performance Built
                  </span>
                  <span className="font-semibold text-indigo-500 hover:underline cursor-pointer">
                    View Demo →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2026 BRUTALIST ACCENT WARNING BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-indigo-50/45 dark:bg-indigo-950/15 border border-indigo-100/40 dark:border-indigo-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-5xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg dark:bg-indigo-900/60 dark:text-indigo-400 mt-1 sm:mt-0">
              <Award size={16} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Our Promise: Absolute Transparency</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">We maintain structured source delivery, clean hand-offs, detailed design kits, and fully documented integrations. No vendor lock-in.</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('services-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-5 py-2.5 bg-[#141414] hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shrink-0 inline-flex items-center gap-2"
          >
            Explore Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}

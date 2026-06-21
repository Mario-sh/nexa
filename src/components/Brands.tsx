import { motion } from 'motion/react';
import { Language, translations } from '../types';

interface BrandsProps {
  currentLang: Language;
}

export default function Brands({ currentLang }: BrandsProps) {
  const t = translations[currentLang].brands;

  return (
    <section className="relative py-12 px-6 md:px-12 select-none z-10" id="awake-brands-section">
      <div className="max-w-7xl mx-auto">
        
        {/* INTERSECTING DIVIDER TEXT */}
        <div className="relative flex items-center justify-center mb-12" id="brands-text-divider">
          <div className="absolute left-0 right-0 h-[1.5px] bg-neutral-200/40 dark:bg-white/5" />
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="relative px-6 bg-white dark:bg-[#0a0a0c] text-[10.5px] md:text-[11.5px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest text-center transition-colors duration-700"
          >
            {t.lovedBy}
          </motion.span>
        </div>

        {/* 5 HD BRAND LOGOS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-center justify-center gap-y-8 gap-x-12 md:gap-x-14 lg:gap-x-16 px-4" id="brands-horizontal-row">
          
          {/* Brand 1: Solar Ring */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 group cursor-pointer text-neutral-400 hover:text-orange-500 transition-colors duration-300"
            id="brand-logo-1"
          >
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3M12 19v3M4 12H1M23 12h-3" />
            </svg>
            <span className="font-sans font-extrabold text-[15px] sm:text-[16px] tracking-tight text-neutral-800 dark:text-neutral-200 transition-colors group-hover:text-neutral-955">
              SaaSify
            </span>
          </motion.div>

          {/* Brand 2: Infinity Waves */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 group cursor-pointer text-neutral-400 hover:text-[#09b0a0] transition-colors duration-300"
            id="brand-logo-2"
          >
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="font-sans font-bold text-[15px] sm:text-[16px] tracking-tight text-neutral-800 dark:text-neutral-200 transition-colors lowercase">
              authen.co
            </span>
          </motion.div>

          {/* Brand 3: Shield/University */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 group cursor-pointer text-neutral-400 hover:text-emerald-500 transition-colors duration-300"
            id="brand-logo-3"
          >
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans font-extrabold text-[13px] tracking-tight text-neutral-800 dark:text-neutral-200 transition-colors">
                Kreator
              </span>
              <span className="text-[8px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                Academy
              </span>
            </div>
          </motion.div>

          {/* Brand 4: Molecular Bubble */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 group cursor-pointer text-neutral-400 hover:text-indigo-500 transition-colors duration-300"
            id="brand-logo-4"
          >
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
              <path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 5h20c0-2-1-3.75-2.5-5" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="font-sans font-extrabold text-[15px] sm:text-[16px] tracking-tight text-neutral-800 dark:text-neutral-200 transition-colors">
              PME.tech
            </span>
          </motion.div>

          {/* Brand 5: Helix loop-ribbon */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 group cursor-pointer text-neutral-400 hover:text-violet-500 transition-colors duration-300"
            id="brand-logo-5"
          >
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <span className="font-sans font-extrabold text-[15px] sm:text-[16px] tracking-tight text-[#141414] dark:text-neutral-100 transition-colors">
              NexaVitra
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

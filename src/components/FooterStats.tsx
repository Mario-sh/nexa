import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Language, translations } from '../types';

interface FooterStatsProps {
  currentLang: Language;
}

// Custom Counter component to run dynamic countups
function Counter({ value, suffix = '', duration = 1.3 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState<number>(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function FooterStats({ currentLang }: FooterStatsProps) {
  const t = translations[currentLang].fusion;

  // Stats data configuration focused strictly on conversion optimization and speed metrics
  const stats = [
    {
      value: 98,
      suffix: '%',
      label: currentLang === 'en' ? 'Client Satisfaction' : 'Satisfaction Client',
      desc: currentLang === 'en' ? 'Tailored to secure elite SaaS & Coach targets.' : 'Conçu pour satisfaire les Créateurs, SaaS et PME.',
    },
    {
      value: 3,
      suffix: 'x',
      label: currentLang === 'en' ? 'Lead Conversion Lift' : 'Multiplicateur de Prospect',
      desc: currentLang === 'en' ? 'Transforming standard traffic into active warm leads.' : 'Augmentation mesurée des conversions de formulaires.',
    },
    {
      value: 100,
      suffix: '%',
      label: currentLang === 'en' ? 'Lighthouse Score Target' : 'Vitesse & SEO Score',
      desc: currentLang === 'en' ? 'Ensuring structural load speeds below 1.2s.' : 'Optimisation sémantique et temps de chargement ultra rapide.',
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 select-none overflow-hidden z-20" id="awake-stats-section">
      <div className="max-w-5xl mx-auto">
        
        {/* WE FUSE INLINE PILLS CONTENT PARAGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center leading-[1.3] text-[24px] sm:text-[34px] md:text-[44px] font-extrabold text-[#141414] dark:text-white max-w-4xl mx-auto tracking-[-0.035em] mb-12"
          id="fusion-paragraph-container"
        >
          {t.preText}{' '}
          
          {/* Creativity Pill */}
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center px-4 py-1 mx-1 my-1 rounded-full bg-purple-50 hover:bg-purple-100/50 text-[#a855f7] border border-purple-200/30 shadow-xs transition-all duration-200 cursor-pointer text-[14px] sm:text-[22px] md:text-[24px] font-serif italic font-medium leading-none"
            id="pill-creativity"
          >
            <span>{t.creativity}</span>
          </motion.span>{' '}
          
          {/* Innovation Pill */}
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center px-4 py-1 mx-1 my-1 rounded-full bg-blue-50 hover:bg-blue-100/50 text-[#3b82f6] border border-blue-200/30 shadow-xs transition-all duration-200 cursor-pointer text-[14px] sm:text-[22px] md:text-[24px] font-sans font-semibold leading-none"
            id="pill-innovation"
          >
            <span>{t.innovation}</span>
          </motion.span>{' '}
          
          &{' '}
          
          {/* Strategy Pill */}
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center px-4 py-1 mx-1 my-1 rounded-full bg-amber-50 hover:bg-amber-100/50 text-[#f59e0b] border border-amber-200/30 shadow-xs transition-all duration-200 cursor-pointer text-[14px] sm:text-[22px] md:text-[24px] font-sans font-bold leading-none tracking-normal"
            id="pill-strategy"
          >
            <span>{t.strategy}</span>
          </motion.span>{' '}
          
          <span className="text-neutral-900 dark:text-neutral-100 font-extrabold block sm:inline mt-2 sm:mt-0 lg:ml-1.5 text-[17px] sm:text-[28px] md:text-[38px] leading-[1.35] font-sans">
            {t.postText}
          </span>
        </motion.div>

        {/* METRICS COUNT-UP NUMBERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 border-t border-neutral-150 dark:border-white/5 pt-16 mt-20" id="stats-counter-grid">
          {stats.map((st, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start text-center md:text-left px-4 group"
              id={`stat-col-${index}`}
            >
              <div className="text-[52px] md:text-[68px] font-black text-[#141414] dark:text-white leading-none tracking-tight flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-400">
                <Counter value={st.value} suffix={st.suffix} />
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-neutral-800 dark:text-neutral-200 tracking-wide uppercase mt-4">
                {st.label}
              </h3>
              <p className="text-[12px] md:text-[13px] text-neutral-400 dark:text-neutral-500 mt-1.5 font-medium select-none">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

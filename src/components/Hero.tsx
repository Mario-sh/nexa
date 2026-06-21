import { motion } from 'motion/react';
import { ArrowUpRight, Star, Sparkles, Compass } from 'lucide-react';
import { Language, translations } from '../types';

interface HeroProps {
  currentLang: Language;
  onOpenCollab: () => void;
}

export default function Hero({ currentLang, onOpenCollab }: HeroProps) {
  const t = translations[currentLang].hero;

  // Premium avatars representing top-tier founders, coaches, and tech leaders
  const avatars = [
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
      alt: 'Sarah, SaaS Founder (Paris)'
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
      alt: 'David, Executive Coach (Berlin)'
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
      alt: 'Lena, Growth VP (London)'
    },
    {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
      alt: 'Marc, PME Director (Lyon)'
    }
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-28 sm:pt-36 sm:pb-36 lg:pt-44 lg:pb-44 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden z-10" id="nexa-hero-section">
      
      {/* Decorative Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/50 text-[#141414] text-[10.5px] font-bold uppercase tracking-widest mb-8 shadow-xs select-none"
      >
        <span>{t.badge}</span>
      </motion.div>

      {/* STAGGERED HEADINGS */}
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <h1 
          className="font-sans font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.04em] text-[34px] xs:text-[44px] sm:text-[62px] md:text-[76px] lg:text-[84px] max-w-5xl text-center select-none text-neutral-950 dark:text-white"
          id="hero-main-heading"
        >
          {/* First part */}
          <motion.span
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block text-neutral-950 dark:text-white"
          >
            {t.headingPart1}
          </motion.span>
          
          {/* Second part with signature serif font */}
          <motion.span
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-1 sm:mt-2 text-neutral-900 dark:text-neutral-100"
          >
            {t.headingPart2}{' '}
            <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400 tracking-[-0.010em] lowercase ml-1 md:ml-3">
              {t.headingSerif}
            </span>
          </motion.span>
        </h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-neutral-500 dark:text-neutral-400 text-center text-xs sm:text-[14px] md:text-[15px] leading-[1.65] max-w-xl md:max-w-3xl px-4 font-normal"
          id="hero-description"
        >
          {t.description}
        </motion.p>

        {/* MULTIPLE CTA BUTTONS FOR FAST RE-DIRECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg mx-auto"
          id="hero-action-pills-row"
        >
          
          {/* Option A: Landing Page Flash CTA button */}
          <button
            onClick={() => handleScrollToSection('services-section')}
            className="group relative bg-[#131313] hover:bg-neutral-800 active:scale-95 text-white h-12 w-full sm:w-auto px-6 rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer text-[12.5px] font-bold tracking-wide shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
            id="hero-flash-cta-button"
          >
            <span>{t.ctaFlash}</span>
            <ArrowUpRight strokeWidth={2.5} size={15} className="text-zinc-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Option B: Site Vitrine Authority Kit Custom Callout */}
          <button
            onClick={() => handleScrollToSection('services-section')}
            className="group relative bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white h-12 w-full sm:w-auto px-6 rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer text-[12.5px] font-bold tracking-wide shadow-lg shadow-indigo-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            id="hero-authority-cta-button"
          >
            <span>{t.ctaAuthority}</span>
            <div className="w-6 h-6 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <Compass size={13} className="text-white" />
            </div>
          </button>

        </motion.div>

        {/* SOCIAL PROOF: trusted by startups, coaches & European PMEs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.52 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 select-none"
          id="hero-proof-line"
        >
          {/* Overlapping Avatars */}
          <div className="flex -space-x-2.5">
            {avatars.map((ava, ix) => (
              <motion.div
                key={ix}
                whileHover={{ y: -4, scale: 1.08, zIndex: 10 }}
                transition={{ duration: 0.2 }}
                className="relative w-8 h-8 rounded-full border-2 border-white dark:border-neutral-950 cursor-pointer shadow-xs bg-neutral-150 overflow-hidden"
              >
                <img
                  src={ava.src}
                  alt={ava.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Star ratings and Trusted Text */}
          <div className="flex flex-col sm:items-start justify-center text-center sm:text-left">
            {/* Stars Row */}
            <div className="flex items-center justify-center gap-0.5" id="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11.5}
                  className="fill-[#F39C12] text-[#F39C12]"
                />
              ))}
            </div>
            {/* Text label */}
            <span className="text-[11px] md:text-[12px] font-bold text-neutral-500 dark:text-neutral-400 mt-0.5">
              {t.trustedBy}
            </span>
          </div>

        </motion.div>

        {/* INTERACTIVE LIVE PREVIEW DASHBOARD MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full max-w-4xl mx-auto rounded-3xl bg-white/70 dark:bg-neutral-950/45 backdrop-blur-xl border border-neutral-200 dark:border-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden"
          id="hero-dashboard-mockup"
        >
          {/* Top Window chrome */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-150/60 bg-neutral-50/55">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-150" />
            </div>
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5 select-none">
              Nexa Conversion Architecture Dashboard
            </div>
            <div className="w-12 h-1 rounded bg-neutral-200" />
          </div>

          {/* Core Mockup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 text-left">
            {/* Left sidebar metric pane */}
            <div className="md:col-span-4 p-5 sm:p-6 border-r border-neutral-150/60 flex flex-col gap-4 bg-neutral-50/20">
              <div className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#141414] px-2.5 py-1 bg-white border border-neutral-200/50 w-fit rounded-md select-none">
                Performance Indices
              </div>
              
              {/* Stat rows */}
              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-white border border-neutral-150 shadow-xs">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Average Load speed</span>
                  <div className="text-sm font-bold mt-1 text-[#141414] flex items-center gap-1.5">
                    0.82 seconds
                    <span className="text-[8.5px] font-extrabold text-neutral-600 bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded uppercase tracking-wider">99% Score</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-neutral-150 shadow-xs">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Conversion Lift multiplier</span>
                  <div className="text-sm font-bold mt-1 text-[#141414] flex items-center gap-1.5">
                    3.41x Increase
                    <span className="text-[8.5px] font-extrabold text-[#4f46e5] bg-[#4f46e5]/5 border border-[#4f46e5]/10 px-1.5 py-0.5 rounded uppercase tracking-wider">Validated</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-neutral-150 shadow-xs">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">AI Bot Lead Capture</span>
                  <div className="text-sm font-bold mt-1 text-[#141414]">
                    42.8% Conversion
                  </div>
                </div>
              </div>
            </div>

            {/* Right main visualization pane */}
            <div className="md:col-span-8 p-5 sm:p-6 flex flex-col justify-between gap-5 bg-white/40">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[11px] font-extrabold text-neutral-900 uppercase tracking-wider">Historical Conversion Engine Velocity</h4>
                  <p className="text-[9.5px] text-neutral-400">Comparing Standard Template (grey) vs Nexa Bespoke Architecture (indigo)</p>
                </div>
                <div className="text-[9px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-150/40 px-2.5 py-1 rounded-md hidden sm:block uppercase tracking-wider select-none">
                  Active Optimization Flow
                </div>
              </div>

              {/* Vector SVG line graph */}
              <div className="h-44 relative flex items-end">
                <svg className="w-full h-full absolute inset-0 text-indigo-500 overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {/* Subtle Grid reference lines */}
                  <line x1="0" y1="20" x2="400" y2="20" className="stroke-neutral-200" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="50" x2="400" y2="50" className="stroke-neutral-200" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="80" x2="400" y2="80" className="stroke-neutral-200" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Standard Template graph curve */}
                  <path
                    d="M 0,90 Q 50,85 100,88 T 200,80 T 300,85 T 400,82"
                    fill="none"
                    className="stroke-neutral-300"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />

                  {/* Nexa Bespoke Engine graph curve */}
                  <path
                    d="M 0,85 Q 50,60 100,50 T 200,30 T 300,20 T 400,10"
                    fill="none"
                    className="stroke-indigo-500"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Little node at exit point */}
                  <circle cx="400" cy="10" r="4" className="fill-indigo-600 stroke-2 stroke-white" />
                </svg>

                {/* Grid X coordinate markers */}
                <div className="absolute bottom-0 w-full flex justify-between text-[8px] text-neutral-400 uppercase tracking-widest font-bold">
                  <span>Day 1</span>
                  <span>Day 4</span>
                  <span>Day 8</span>
                  <span>Day 12</span>
                  <span>Diagnostics Complete</span>
                </div>
              </div>

              {/* User review state preview cards */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 border-t border-neutral-150/60 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9.5px] uppercase font-extrabold text-neutral-400 tracking-wider">AIDA Blueprint:</span>
                </div>
                <div className="text-[10px] sm:text-[11px] leading-relaxed text-neutral-500 font-medium text-center sm:text-left font-sans">
                  We structure components dynamically on <strong>First Paint</strong> to bypass visitor cognitive fatigue and lock attention.
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

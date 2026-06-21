import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Check, Globe } from 'lucide-react';
import { Language, translations } from '../types';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  onOpenCollab: () => void;
  currentBgTheme: string;
}

export default function Header({ currentLang, setLang, onOpenCollab, currentBgTheme }: HeaderProps) {
  const t = translations[currentLang].nav;
  const [activeItem, setActiveItem] = useState<string>('services');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Monitor scroll state for styling header gently on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services-section', label: t.services },
    { id: 'target-section', label: t.target },
    { id: 'creations-section', label: t.pricing },
  ];

  const handleScrollTo = (id: string) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset of scrolled header height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isDarkTheme = currentBgTheme === 'midnight';

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4 ${
        isScrolled 
          ? isDarkTheme
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/5 shadow-xl py-3'
            : 'bg-white/85 backdrop-blur-md border-b border-neutral-200/40 shadow-sm py-3' 
          : 'bg-transparent'
      }`}
      id="nexa-header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO: Isometric 3D architectural brand mark and elegant high-contrast typographic pairing */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group cursor-pointer select-none" 
          id="nexa-logo-container"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:rotate-6"
            >
              <defs>
                {/* Top Face Gradient */}
                <linearGradient id="cube-top-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
                {/* Left Face Gradient */}
                <linearGradient id="cube-left-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
                {/* Right Face Gradient */}
                <linearGradient id="cube-right-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>

              {/* Left Face */}
              <polygon 
                points="20,32 50,50 50,85 20,67" 
                fill="url(#cube-left-grad)" 
              />
              
              {/* Right Face */}
              <polygon 
                points="50,50 80,32 80,67 50,85" 
                fill="url(#cube-right-grad)" 
                opacity={isDarkTheme ? 0.95 : 0.85}
              />

              {/* Top Face */}
              <polygon 
                points="50,15 80,32 50,50 20,32" 
                fill="url(#cube-top-grad)" 
              />
            </svg>
          </div>
          
          <div className="flex flex-col items-start leading-[1.1]" id="nexa-brand-text">
            <span className={`font-sans font-black text-[18px] sm:text-[20px] tracking-[0.06em] transition-colors ${
              isDarkTheme ? 'text-white' : 'text-[#141414]'
            }`}>
              NEXA
            </span>
            <span className={`font-sans text-[9px] font-bold tracking-[0.25em] transition-colors ${
              isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              STUDIO
            </span>
          </div>
        </div>

        {/* CENTER CAPSULE NAVIGATION */}
        <div className="hidden md:flex items-center" id="nexa-desktop-nav">
          <div className={`flex items-center gap-1.5 backdrop-blur-sm border rounded-full px-2 py-1.5 transition-all duration-300 ${
            isDarkTheme 
              ? 'bg-neutral-900/50 hover:bg-neutral-900/80 border-white/10' 
              : 'bg-neutral-100/60 hover:bg-neutral-100/85 border-neutral-200/50'
          }`}>
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive 
                      ? isDarkTheme ? 'text-white font-semibold' : 'text-neutral-900 font-semibold' 
                      : isDarkTheme ? 'text-neutral-400 hover:text-neutral-100' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className={`absolute inset-0 border shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-full ${
                        isDarkTheme 
                          ? 'bg-neutral-800 border-white/5' 
                          : 'bg-white border-neutral-100/50'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT BUTTONS GROUP: Lang Toggle + Collaborate */}
        <div className="flex items-center gap-3" id="nexa-right-actions">
          
          {/* Language Pill Toggle */}
          <div className={`hidden sm:flex items-center border rounded-full p-1 text-xs font-semibold select-none shadow-xs ${
            isDarkTheme ? 'bg-neutral-900/60 border-white/5' : 'bg-neutral-100/50 border-neutral-200/40'
          }`}>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentLang === 'en' 
                  ? isDarkTheme ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-neutral-900 shadow-xs font-bold' 
                  : isDarkTheme ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('fr')}
              className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentLang === 'fr' 
                  ? isDarkTheme ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-neutral-900 shadow-xs font-bold' 
                  : isDarkTheme ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              FR
            </button>
          </div>

          {/* Let's Collaborate key CTA */}
          <button
            onClick={onOpenCollab}
            className="group relative bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white py-1.5 pl-4.5 pr-2.5 rounded-full flex items-center gap-3 transition-all duration-300 ease-out cursor-pointer text-[12px] font-semibold tracking-wide shadow-md shadow-indigo-600/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            id="nexa-collaborate-button"
          >
            <span>{t.collaborate}</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black shadow-xs overflow-hidden transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight strokeWidth={2.5} size={14} className="text-indigo-600 transition-colors" />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              isDarkTheme ? 'hover:bg-neutral-800 text-white' : 'hover:bg-neutral-100 text-neutral-800'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="nexa-mobile-menu-trigger"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN NAVIGATION */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`md:hidden absolute top-full left-0 right-0 px-6 py-6 shadow-xl flex flex-col gap-4 overflow-hidden border-b ${
              isDarkTheme 
                ? 'bg-neutral-950/95 backdrop-blur-lg border-white/5 text-white' 
                : 'bg-white/95 backdrop-blur-lg border-neutral-200 text-[#141414]'
            }`}
            id="nexa-mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                    activeItem === item.id 
                      ? 'bg-indigo-600 text-white' 
                      : isDarkTheme ? 'text-neutral-400 hover:bg-neutral-900' : 'text-neutral-500 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Language Selector for Mobile */}
            <div className={`flex items-center justify-between border-t pt-4 px-4 ${
              isDarkTheme ? 'border-white/5' : 'border-neutral-100'
            }`}>
              <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Globe size={14} /> Langue
              </span>
              <div className={`flex p-1 rounded-full text-xs font-semibold ${
                isDarkTheme ? 'bg-neutral-900' : 'bg-neutral-100'
              }`}>
                <button 
                  onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
                  className={`px-4 py-1.5 rounded-full transition-all ${currentLang === 'en' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-400'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => { setLang('fr'); setIsMobileMenuOpen(false); }}
                  className={`px-4 py-1.5 rounded-full transition-all ${currentLang === 'fr' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-400'}`}
                >
                  FR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

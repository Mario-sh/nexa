import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe, Shield, Landmark } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const isFrench = currentLang === 'fr';

  // Navigation handlers
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="w-full bg-[#fafafa] dark:bg-[#070707] border-t border-neutral-150/80 dark:border-neutral-900 pt-16 pb-12 transition-colors duration-400 relative z-20"
      id="nexa-prestige-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-14 border-b border-neutral-200/50 dark:border-neutral-900">
          
          {/* Brand/Logo Column */}
          <div className="col-span-1 md:col-span-4 space-y-5">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              {/* Logo block */}
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                  <defs>
                    <linearGradient id="footer-cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                    <linearGradient id="footer-cube-left" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#312e81" />
                    </linearGradient>
                  </defs>
                  <polygon points="20,32 50,50 50,85 20,67" fill="url(#footer-cube-left)" />
                  <polygon points="50,50 80,32 80,67 50,85" fill="#1e1b4b" />
                  <polygon points="50,15 80,32 50,50 20,32" fill="url(#footer-cube-top)" />
                </svg>
              </div>

              <div className="flex flex-col items-start leading-[1.1]">
                <span className="font-sans font-black text-[16px] sm:text-[18px] tracking-[0.06em] text-neutral-900 dark:text-white">
                  NEXA
                </span>
                <span className="font-sans text-[8px] font-bold tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                  STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
              {isFrench 
                ? "Nexa Studio est une agence de design d'élite. Nous marions une esthétique suisse rigoureuse et des architectures web haute performance pour catalyser votre croissance."
                : "Nexa Studio is an elite frontend engineering firm. We merge structural Swiss discipline with high-conversion frameworks to establish unmatched digital authority."}
            </p>

            {/* Social links handles */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
                aria-label="Nexa Studio on LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
                aria-label="Nexa Studio on Twitter / X"
              >
                <Twitter size={14} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
                aria-label="Nexa Studio on GitHub"
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#141414] dark:text-neutral-300">
              {isFrench ? "Explorer" : "Navigation"}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              <li>
                <button 
                  onClick={() => handleScrollTo('services-section')}
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {isFrench ? "Nos Formules" : "Our Formulas"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('target-section')}
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {isFrench ? "Cibles Élite" : "Target Audience"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('creations-section')}
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {isFrench ? "Réalisations" : "Executive Showcase"}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('contact-section')}
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {isFrench ? "Nous Contacter" : "Contact Partner"}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Custom Framework specs */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#141414] dark:text-neutral-300">
              {isFrench ? "Architecture Technique" : "Engineering Specs"}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-500 dark:text-neutral-400 font-semibold select-none">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Largest Contentful Paint &lt; 0.8s</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Vite Dev & Production Pipelines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>WCAG AA Accessibility Compliant</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>Tailwind CSS Native Engine</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Physical Headquarters & details */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#141414] dark:text-neutral-300">
              {isFrench ? "Bureaux Européens" : "European Offices"}
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#141414] dark:text-neutral-200 block text-xs font-bold">Paris</span>
                  <span className="text-[11px] block text-neutral-450 mt-0.5">8 Boulevard Malesherbes, 75008 Paris</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#141414] dark:text-neutral-200 block text-xs font-bold">London</span>
                  <span className="text-[11px] block text-neutral-450 mt-0.5">60 Turnmill St, Farringdon, EC1M 5RR</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits / Legal Compliance Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider select-none">
          
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} NEXA STUDIO</span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-800">|</span>
            <span className="flex items-center gap-1">
              <Globe size={11} className="text-emerald-500" />
              <span>Paris & London</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1 font-semibold text-[10px]">
              <Shield size={12} className="text-indigo-500" /> GDPR & RGPD Compliant
            </span>
            <span className="flex items-center gap-1 font-semibold text-[10px]">
              <Landmark size={12} className="text-emerald-500" /> SSL SECURE ENVELOPE
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

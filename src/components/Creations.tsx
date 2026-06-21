import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check, Star, ExternalLink, ArrowRight, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface CreationsProps {
  currentLang: Language;
}

interface Project {
  id: string;
  category: { en: string; fr: string };
  categoryKey: 'saas' | 'coach' | 'sme';
  title: { en: string; fr: string };
  tagline: { en: string; fr: string };
  metric: string;
  metricLabel: { en: string; fr: string };
  description: { en: string; fr: string };
  features: { en: string[]; fr: string[] };
  clientQuote: string;
  clientAuthor: string;
  clientTitle: { en: string; fr: string };
}

export default function Creations({ currentLang }: CreationsProps) {
  const isFrench = currentLang === 'fr';

  // Real, elite digital achievements showcase
  const projects: Project[] = [
    {
      id: 'lumina-dashboard',
      category: { en: 'SaaS Startups', fr: 'Startups SaaS' },
      categoryKey: 'saas',
      title: { en: 'Lumina Analytics', fr: 'Lumina Analytics' },
      tagline: { en: 'Modern visual data engine for high-velocity tech teams', fr: 'Tableau de bord de données temps réel pour équipes agiles' },
      metric: '+142%',
      metricLabel: { en: 'Increase in organic signups', fr: 'De croissance des inscriptions' },
      description: {
        en: 'A gorgeous dark-mode native dashboard leveraging optimized micro-interactions. Clean, lightweight state machines deliver deep metrics without page bloat.',
        fr: 'Un tableau de bord natif en mode sombre doté de micro-interactions optimisées. Un travail approfondi sur la vitesse de rendu et les graphes vectoriels sans ralentissement.'
      },
      features: {
        en: ['Ultra-responsive grid structure', 'Native dark-mode preference', '0.8s Largest Contentful Paint (LCP)'],
        fr: ['Structure en grille asymétrique', 'Thème sombre optimisé oeil', 'Temps de chargement initial < 0.8s']
      },
      clientQuote: isFrench 
        ? "Nexa Studio a redéfini notre produit. Nos investisseurs ont adoré le nouvel écosystème visuel dès la première démonstration."
        : "Nexa Studio completely transformed our landing flow. The sheer attention to detail instantly elevated our authority with global investors.",
      clientAuthor: 'Thibault R.',
      clientTitle: { en: 'CEO at Lumina Tech', fr: 'Directeur Technique, Lumina Tech' }
    },
    {
      id: 'aura-coaching',
      category: { en: 'Coaches & Creators', fr: 'Créateurs & Coachs' },
      categoryKey: 'coach',
      title: { en: 'Aura Premium System', fr: 'Méthode Aura Premium' },
      tagline: { en: 'Consulting automation with a majestic, clean serif interface', fr: 'Tunnel d’acquisition prestige pour séminaires et formation' },
      metric: '3.1x',
      metricLabel: { en: 'Email capture rate multiplier', fr: 'Multiplication des e-mails qualifiés' },
      description: {
        en: 'Designed with editorial aesthetics, this platform establishes immediate prestige, automates high-ticket consultation forms, and secures lead captures on auto-pilot.',
        fr: 'Bâtie sur des codes de design haut de gamme et un copywriting AIDA captivant. Parfaite pour capter les e-mails de décideurs et de clients fortunés.'
      },
      features: {
        en: ['AIDA framework copywriting', 'Flawless zero-friction payment gateways', 'Aesthetic typography pairings'],
        fr: ['Rédaction persuasive structurée', 'Tunnels d’achat simplifiés en 2 clics', 'Mariage typographique haut de gamme']
      },
      clientQuote: isFrench
        ? "Notre taux de capture e-mail a explosé sans augmenter notre budget publicitaire. La fluidité esthétique fait toute la différence."
        : "The conversion and onboarding process is exceptionally clean. We doubled high-ticket bookings in less than three weeks.",
      clientAuthor: 'Audrey M.',
      clientTitle: { en: 'Lead Consulting Partner', fr: 'Directrice de Cabinet, Aura International' }
    },
    {
      id: 'verne-heritage',
      category: { en: 'European SMEs', fr: 'PME Européennes' },
      categoryKey: 'sme',
      title: { en: 'Verne Architecture', fr: 'Cabinet Verne Architecture' },
      tagline: { en: 'Prestige digital showroom for architectural consulting firm', fr: 'Showroom digital haut de gamme pour agence d’architecture' },
      metric: '+85%',
      metricLabel: { en: 'Qualified local lead requests', fr: 'De demandes qualifiées formulées' },
      description: {
        en: 'A luxury showroom presenting structural projects in a breathtaking minimalist format. Fully compatible with Google Core Web Vitals and rigid European privacy/GDPR standards.',
        fr: 'Un portail épuré mettant en valeur les réalisations architecturales à l’aide d’une grille fluide. Entièrement conforme aux normes RGPD et doté d’une vitesse éclair.'
      },
      features: {
        en: ['Prestige serif headings', 'Multi-region local SEO rankings', 'Zero third-party trackers'],
        fr: ['Typographies classiques nobles', 'Optimisation SEO localisé', 'Fichiers ultra-légers conformes RGPD']
      },
      clientQuote: isFrench
        ? "Enfin un site internet qui reflète la qualité physique de nos chantiers. Le référencement organique nous apporte désormais de grands projets."
        : "We wanted structural elegance and robust local performance. Nexa Studio executed this with true artistic direction and precision.",
      clientAuthor: 'Marc-Antoine V.',
      clientTitle: { en: 'Principal Architect', fr: 'Architecte Associé, Cabinet Verne & Fils' }
    }
  ];

  // Filters State
  const [activeFilter, setActiveFilter] = useState<'all' | 'saas' | 'coach' | 'sme'>('all');
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeFilter);

  // Carousel Navigation State
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Wrap index to avoid running out of bounds
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const handleFilterChange = (filter: 'all' | 'saas' | 'coach' | 'sme') => {
    setActiveFilter(filter);
    setCurrentIndex(0); // Reset index on filter change
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section 
      className="w-full py-20 sm:py-24 bg-white dark:bg-[#0a0a0a] border-t border-neutral-100 dark:border-neutral-900 overflow-hidden" 
      id="creations-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14" id="creations-header-block">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-105 dark:bg-neutral-900 border border-neutral-200/50 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#141414] dark:text-neutral-300 mb-4 select-none">
            <span>🎨 {isFrench ? "Quelques réalisations" : "Executive Showcase • Selected Works"}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-neutral-900 dark:text-white leading-tight">
            {isFrench ? "Nos Ouvrages & Succès Digitaux" : "Digital Masterpieces Crafted for Impact"}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl text-center leading-relaxed">
            {isFrench 
              ? "Découvrez comment nous traduisons l’exigence de nos clients en architectures web haute conversion qui imposent le respect."
              : "Explore how we transform complex business models into highly authoritative, lightweight, and pixel-perfect web systems."}
          </p>
        </div>

        {/* FILTERS TABS BAR */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="creations-filters-container">
          {(['all', 'saas', 'coach', 'sme'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            const labels = {
              all: isFrench ? 'Tous les projets' : 'All Projects',
              saas: isFrench ? 'Startups SaaS' : 'SaaS Startups',
              coach: isFrench ? 'Créateurs & Coachs' : 'Coaches & Creators',
              sme: isFrench ? 'PME Européennes' : 'European SMEs'
            };

            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/15 scale-102' 
                    : 'bg-neutral-100 hover:bg-neutral-200/70 text-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-400'
                }`}
                id={`filter-btn-${filter}`}
              >
                {labels[filter]}
              </button>
            );
          })}
        </div>

        {/* CAROUSEL WRAPPER WITH BOTH SPLIT COLUMNS (DETAILS vs VIRTUAL DESIGN SCREENSHOT) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-neutral-400 text-sm font-semibold">
            {isFrench ? "Aucun projet disponible dans cette catégorie." : "No projects found in this category."}
          </div>
        ) : (
          <div className="relative group/carousel max-w-6xl mx-auto" id="creations-carousel-inner">
            
            {/* CAROUSEL NAVIGATION OVERLAYS (DESKTOP SIDED) */}
            <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-16 -translate-y-1/2 z-10 hidden md:block">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-90 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={isFrench ? "Précédent" : "Previous slide"}
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-16 -translate-y-1/2 z-10 hidden md:block">
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-90 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={isFrench ? "Suivant" : "Next slide"}
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* MAIN PORTFOLIO CARD GRID VIEW */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#111111] border border-neutral-200/50 dark:border-neutral-900 shadow-xl"
                id={`project-slide-${currentProject.id}`}
              >
                
                {/* LEFT COLUMN: CORE SPECS, STORY, METRICS, VERBATIM */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="project-copy-area">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 mb-4 select-none">
                      <Layers size={11} className="text-indigo-500" />
                      <span>{currentProject.category[currentLang]}</span>
                    </div>

                    {/* Highly aesthetic Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                      {currentProject.title[currentLang]}
                    </h3>
                    
                    <p className="mt-2 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wide">
                      {currentProject.tagline[currentLang]}
                    </p>

                    <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                      {currentProject.description[currentLang]}
                    </p>

                    {/* Features list */}
                    <div className="mt-6 space-y-2.5" id="project-features-list">
                      {currentProject.features[currentLang].map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-semibold">
                          <div className="p-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded">
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High conversion focal block metric */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#161616] border border-neutral-200/40 dark:border-white/5 flex items-center gap-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight shrink-0">
                      {currentProject.metric}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 leading-tight">
                      {currentProject.metricLabel[currentLang]}
                    </div>
                  </div>

                  {/* Clean Quote Block */}
                  <div className="border-l-2 border-amber-400 pl-4 py-1" id="project-verbatim">
                    <div className="flex gap-0.5 text-amber-400 mb-1.5 select-none text-[10px]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-xs italic text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                      "{currentProject.clientQuote}"
                    </p>
                    <div className="mt-2 text-[10px] uppercase font-bold tracking-widest text-[#141414] dark:text-white">
                      {currentProject.clientAuthor} • <span className="text-neutral-400 font-medium">{currentProject.clientTitle[currentLang]}</span>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN: HIGH-FIDELITY LIVE UI MOCKUP RENDERED DIRECTLY IN CSS */}
                <div 
                  className="lg:col-span-7 relative flex items-center justify-center p-2 bg-neutral-100 dark:bg-[#1a1a1a] rounded-2xl border border-neutral-200/30 dark:border-white/5 overflow-hidden group/browser shadow-inner" 
                  id="project-rendering-canvas"
                >
                  
                  {/* Subtle dark layout grid decorator */}
                  <div className="absolute inset-0 bg-radial-grid opacity-[0.03] pointer-events-none" />

                  {/* Browser Window Wrapper */}
                  <div className="w-full h-[320px] sm:h-[380px] bg-white dark:bg-[#0f0f0f] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col">
                    
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2 bg-neutral-55 dark:bg-[#161616] border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between shrink-0 select-none">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="px-5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-250/20 dark:border-neutral-800 text-[10px] text-neutral-400 w-1/3 truncate text-center font-mono">
                        {currentProject.id}.nexastudio.io
                      </div>
                      <div className="text-neutral-400">
                        <ExternalLink size={10} />
                      </div>
                    </div>

                    {/* Dynamic Simulated UI contents (Pure responsive HTML elements matching slide's aesthetic) */}
                    <div className="flex-1 p-5 overflow-y-auto no-scrollbar scroll-smooth text-[#141414] dark:text-neutral-200 flex flex-col justify-between">
                      
                      {/* SAAS PORTFOLIO PREVIEW */}
                      {currentProject.categoryKey === 'saas' && (
                        <div className="space-y-4 flex-1 flex flex-col justify-between" id="simulated-saas-dashboard">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">L</div>
                              <span className="text-[11px] font-extrabold tracking-tight">Lumina Engine</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="text-[8px] bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase">Live</span>
                              <span className="text-[8px] bg-indigo-50 text-indigo-600 dark:bg-indigo-950/20 dark:text-indigo-400 px-2 py-0.5 rounded-full font-bold uppercase">v2.4</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200/40 dark:border-white/5">
                              <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold">Unique Visitors</span>
                              <div className="text-[13px] font-extrabold mt-0.5 tracking-tight">42,912</div>
                              <span className="text-[8px] text-emerald-500 font-bold">↑ 24.3%</span>
                            </div>
                            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200/40 dark:border-white/5">
                              <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold">Inbound Leads</span>
                              <div className="text-[13px] font-extrabold mt-0.5 tracking-tight">1,824</div>
                              <span className="text-[8px] text-emerald-500 font-bold">↑ 142%</span>
                            </div>
                            <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200/20">
                              <span className="text-[8px] uppercase tracking-wider text-indigo-450 dark:text-indigo-400 font-bold">Conversion</span>
                              <div className="text-[13px] font-extrabold mt-0.5 tracking-tight text-indigo-600 dark:text-indigo-400">4.25%</div>
                              <span className="text-[8px] text-emerald-500 font-bold">Optimal</span>
                            </div>
                          </div>

                          {/* Beautiful Animated Polyline SVG Chart representation */}
                          <div className="p-3.5 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200/40 dark:border-white/5 flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[9px] font-bold text-neutral-400">Conversion Multiplier (Last 30 jours)</span>
                              <span className="text-[8px] font-mono font-bold text-emerald-500">Fast Speed Engine Active</span>
                            </div>
                            <div className="h-16 flex items-end relative overflow-hidden">
                              <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.25"/>
                                    <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0"/>
                                  </linearGradient>
                                </defs>
                                <path 
                                  d="M 0 25 Q 15 20, 25 10 T 50 15 T 75 5 T 100 3" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <path 
                                  d="M 0 25 Q 15 20, 25 10 T 50 15 T 75 5 T 100 3 L 100 30 L 0 30 Z" 
                                  fill="url(#chartGrad)"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* COACHING PORTFOLIO PREVIEW */}
                      {currentProject.categoryKey === 'coach' && (
                        <div className="space-y-4 flex-1 flex flex-col justify-between text-center py-2" id="simulated-coach-landing">
                          <span className="text-[10px] font-serif tracking-widest text-amber-600 uppercase">AURA ACADEMY</span>
                          
                          <div className="max-w-md mx-auto">
                            <h4 className="font-serif text-lg leading-snug tracking-tight text-[#141414] dark:text-white">
                              Transformez vos connaissances en autorité absolue.
                            </h4>
                            <p className="text-[9px] text-neutral-400 mt-1.5 px-6">
                              Rejoignez le cercle fermé des leaders d’opinion européens. Programme d’accélération de 12 semaines pour coachs d’affaires et consultants indépendants.
                            </p>
                          </div>

                          {/* Simulated lead capsule form */}
                          <div className="max-w-xs mx-auto w-full space-y-2 bg-neutral-50 dark:bg-neutral-900 p-3 rounded-lg border border-neutral-200/40 dark:border-white/5">
                            <div className="flex gap-1.5">
                              <div className="flex-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-[#333] px-2.5 py-1 text-left text-[9px] text-neutral-400 rounded-md">
                                dylan@holding-ltd.com
                              </div>
                              <button className="bg-[#141414] dark:bg-white text-white dark:text-[#141414] px-2.5 py-1 rounded-md text-[8px] font-bold uppercase tracking-widest leading-none flex items-center gap-1 select-none">
                                <span>Rejoindre</span>
                                <ArrowRight size={8} />
                              </button>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-[7.5px] text-neutral-400 font-semibold select-none">
                              <ShieldCheck size={10} className="text-emerald-500" /> Pas de spam. Accès direct en 1 minute.
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SME PORTFOLIO PREVIEW */}
                      {currentProject.categoryKey === 'sme' && (
                        <div className="space-y-3 flex-1 flex flex-col justify-between" id="simulated-sme-portfolio">
                          <div className="flex justify-between items-center pb-2 border-b border-neutral-100 dark:border-neutral-900">
                            <span className="font-serif italic font-bold tracking-tight text-neutral-900 dark:text-white text-xs">Verne & Fils</span>
                            <div className="flex gap-3 text-[9px] font-semibold text-neutral-400">
                              <span>Réalisations</span>
                              <span>Philosophie</span>
                              <span>Contact</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 flex-1 items-stretch">
                            <div className="p-2.5 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200/40 dark:border-white/5 flex flex-col justify-between">
                              <div>
                                <span className="text-[7px] uppercase font-bold tracking-widest text-[#141414] dark:text-neutral-300">DOMAINE LA TOUR</span>
                                <h5 className="font-serif text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">Restauration complète d'un domaine du XVIIIe en Provence.</h5>
                              </div>
                              <span className="text-[8px] text-indigo-500 font-bold hover:underline cursor-pointer mt-2">Visiter l'œuvre →</span>
                            </div>
                            
                            {/* Showcase miniature image background simulation */}
                            <div className="relative rounded-lg overflow-hidden border border-neutral-200/30 dark:border-white/5 flex flex-col justify-end p-2.5 bg-neutral-400">
                              {/* Background placeholder seed-based for luxury architecture */}
                              <img 
                                src="https://picsum.photos/seed/luxury-home/400/300?blur=1" 
                                alt="Luxurious architectural work placeholder" 
                                className="absolute inset-0 w-full h-full object-cover -z-10 group-hover/browser:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 -z-10" />
                              <div className="text-white">
                                <span className="text-[6.5px] uppercase font-extrabold tracking-wider text-amber-400 block">PROJET SÉLECTIONNÉ</span>
                                <span className="text-[9.5px] font-bold block leading-none mt-0.5">Villa Minérale</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Common Footer bar */}
                      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-[7.5px] text-neutral-400 shrink-0 font-medium">
                        <span>© SECURE NEXA VISUAL SYSTEM</span>
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> 
                          SSL Active • Performance optimal
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

            {/* CAROUSEL CONTROLS LOWER TOGGLES FOR MOBILE VIEWYARDS */}
            <div className="flex md:hidden justify-center items-center gap-5 mt-6" id="creations-mobile-arrows">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shadow-md active:scale-90 transition-all cursor-pointer"
                aria-label={isFrench ? "Précédent" : "Previous slide"}
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>
              
              {/* Pagination Dots Indicator */}
              <div className="text-xs font-mono font-bold text-neutral-500 select-none">
                {currentIndex + 1} / {filteredProjects.length}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shadow-md active:scale-90 transition-all cursor-pointer"
                aria-label={isFrench ? "Suivant" : "Next slide"}
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Pagination Numerical watchmaking metadata top-right style (for Desktop) */}
            <div className="hidden md:absolute md:-top-7 md:right-4 md:flex items-center gap-2 text-xs font-mono font-extrabold tracking-widest text-[#141414] dark:text-neutral-300 select-none">
              <span>0{currentIndex + 1}</span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span>0{filteredProjects.length}</span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

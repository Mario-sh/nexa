import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface FaqSectionProps {
  currentLang: Language;
}

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection({ currentLang }: FaqSectionProps) {
  const isFrench = currentLang === 'fr';

  const faqs: FaqItem[] = isFrench ? [
    {
      q: "Quelle est la différence fondamentale entre les deux formules ?",
      a: "La formule Landing Page Flash (750€) produit une page unique ultra-optimisée avec 5 sections stratégiques, idéale pour tester un concept SaaS ou lancer une formation. L'Authority Kit (2500€) produit un écosystème de 5 pages complet, un espace blog géré, et un Chatbot IA entraîné de façon autonome pour capturer vos prospects."
    },
    {
      q: "L'optimisation SEO de pointe est-elle vraiment incluse ?",
      a: "Absolument. Nous configurons les balises sémantiques, le balisage JSON-LD de structure, et garantissons un temps de chargement inférieur à 1.2 seconde. Vos pages mobiles passeront les tests de vitesse haut la main."
    },
    {
      q: "Fournissez-vous le copywriting littéraire des contenus ?",
      a: "Oui, notre équipe de copywriting d'élite structure l'ensemble de vos textes en suivant les protocoles d'AIDA (Attention, Intérêt, Désir, Action) pour maximiser le taux de conversion de votre trafic cible."
    },
    {
      q: "Quelles technologies intégrez-vous sur nos projets ?",
      a: "Nous lions des architectures légères, sécurisées et ultra-rapides. Pas de thèmes Wordpress lourds : nous utilisons React 19, Tailwind CSS, et des APIs d'intélligence artificielle server-side (Gemini de Google/Anthropic) pour garantir une pérennité absolue."
    },
    {
      q: "Existe-t-il des frais cachés ou abonnements obligatoires ?",
      a: "Aucun. Vous êtes propriétaire de 100% de votre code source et de vos hébergements. L'hébergement Cloud moderne que nous mettons en place coûte généralement 0€/mois pour un trafic standard."
    }
  ] : [
    {
      q: "What is the primary difference between both formulas?",
      a: "The Landing Page Flash (€750) delivers a high-conversion, single-page experience (5 structured sections), perfect for rapid SaaS validates or coach launches. The Authority Kit (€2500) delivers a complete 5-page platform, integrated custom AI Chatbot, organic SEO blog, and custom GDPR/legal templates."
    },
    {
      q: "Is SEO architecture genuinely included by default?",
      a: "Yes, fully. We build semantic HTML5, structure JSON-LD schemas, and secure load speeds below 1.2s to satisfy mobile web guidelines."
    },
    {
      q: "Do you handle copywriting or do I need to supply texts?",
      a: "Our elite conversion writers direct all marketing content under the premium AIDA structural funnel, aligning targets to take core strategic actions."
    },
    {
      q: "What clean workspace stack do you compile on?",
      a: "We steer clear of bloated design platforms. We hand-write production-grade React, tailwind utility components, and connect server-to-server AI models (Google Gemini API) to guarantee absolute layout longevity."
    },
    {
      q: "Are there periodic subscription fees or lock-ins?",
      a: "Zero. You own 100% of the hand-crafted React files and workspace code. Hosting accounts we set up typically run on a perpetual free-tier baseline for standard traffics."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 select-none overflow-hidden z-20 scroll-mt-20" id="faq-section">
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14" id="faq-header-block">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/50 text-[10px] font-bold uppercase tracking-widest text-[#141414] mb-4">
            <span>Any Reservations? • Questions Fréquentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-neutral-900 leading-tight">
            {isFrench ? "Des questions sur l'implémentation ?" : "Let's align on clarifications"}
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-neutral-500">
            {isFrench ? "Tout ce dont vous avez besoin de savoir pour lancer votre projet en toute confiance." : "Answers crafted to empower founders, training leaders, and modern corporate stakeholders."}
          </p>
        </div>

        {/* ACCORDION WRAPPER */}
        <div className="flex flex-col gap-3 max-w-3xl mx-auto" id="faq-accordion-container">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white dark:bg-neutral-950/40 border border-neutral-200 dark:border-white/5 shadow-xs overflow-hidden transition-all duration-300 hover:border-neutral-300 dark:hover:border-white/10"
                id={`faq-item-card-${i}`}
              >
                
                {/* Trigger Row */}
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full px-5 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#141414] dark:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="leading-tight">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : ''
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Content collapse thread using AnimatePresence */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal border-t border-neutral-50/60 dark:border-white/3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* CONTACT BOX ADVICE */}
        <div className="mt-12 text-center bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-150 dark:border-white/5 p-6 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2 ml-1 bg-white dark:bg-neutral-950 text-indigo-600 rounded-xl">
              <MessageSquare size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#141414] dark:text-white">Besoin d'une réponse sur-mesure ?</h4>
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">Posez d'autres questions directement à notre assistant IA ou remplissez une demande.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('ai-chatbot-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            Discuter en Direct
          </button>
        </div>

      </div>
    </section>
  );
}

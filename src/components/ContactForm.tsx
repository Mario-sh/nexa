import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ChevronDown, Calendar, ShieldCheck, Mail, User, Briefcase, DollarSign, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ContactFormProps {
  currentLang: Language;
}

export default function ContactForm({ currentLang }: ContactFormProps) {
  const isFrench = currentLang === 'fr';

  // Forms states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'saas',
    budget: 'authority',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Translations
  const t = {
    title: isFrench ? "Donnons Vie à Votre Projet" : "Let's Scale Your Digital Presence",
    subtitle: isFrench 
      ? "Prêt à bâtir une interface d'exception ? Décrivez vos objectifs et recevez un diagnostic stratégique gratuit sous 24 heures."
      : "Ready to establish flawless digital authority? Describe your requirements and receive a complimentary strategic review within 24 hours.",
    badge: isFrench ? "⚡ CONTACT & CONVERSION" : "⚡ FAST SECURE CHANNELS",
    
    // Labels
    nameLabel: isFrench ? "Nom complet ou Entreprise" : "Full Name or Company",
    namePlaceholder: isFrench ? "ex. Marc-Antoine de Verne" : "e.g. Marc-Antoine Verne",
    emailLabel: isFrench ? "E-mail professionnel" : "Business Email",
    emailPlaceholder: isFrench ? "ex. marc@verne-architecture.com" : "e.g. marc@verne-architecture.com",
    companyLabel: isFrench ? "Nom de l'entreprise (Optionnel)" : "Company Name (Optional)",
    companyPlaceholder: isFrench ? "ex. Verne & Fils" : "e.g. Verne Systems Ltd",
    
    // Dropdowns
    typeLabel: isFrench ? "Secteur d'activité" : "Business Sector",
    budgetLabel: isFrench ? "Formule souhaitée" : "Requested Package",
    
    // Types
    typeSaas: isFrench ? "Startup SaaS" : "SaaS Startup",
    typeCoach: isFrench ? "Créateur & Coach" : "Coaches & Creators",
    typeSme: isFrench ? "PME / Entreprise locale" : "European SME",
    typeOther: isFrench ? "Autre projet haute-conversion" : "Other Custom Project",
    
    // Budgets
    budgetFlash: isFrench ? "Landing Page Flash — 750€" : "Landing Page Flash — €750",
    budgetAuthority: isFrench ? "Site Vitrine Authority Kit — 2500€" : "Site Vitrine Authority Kit — €2500",
    budgetCustom: isFrench ? "Refonte stratégique sur-mesure — Devis" : "Custom Strategic Redesign — Quote",
    
    // Message
    messageLabel: isFrench ? "Votre vision ou spécifications du projet" : "Your Vision & Project Specifications",
    messagePlaceholder: isFrench 
      ? "Décrivez brièvement vos attentes : nombre de pages, vitesse requise, positionnement de prix, etc..." 
      : "Describe your goals briefly: page counts, target speed, conversion metrics, desired brand status, etc...",
    
    // Submit button
    submitBtn: isFrench ? "Initier la Collaboration" : "Initiate Collaboration Plan",
    submitting: isFrench ? "Vérification cryptographique..." : "Securing Data Transfer...",
    compliance: isFrench 
      ? "Conformité RGPD garantie. Vos données restent strictement confidentielles et chiffrées." 
      : "GDPR Certified. Your data is strictly kept confidential and secure under European encryption.",
      
    // Success View
    successTitle: isFrench ? "Demande Enregistrée avec Succès • Nexa Studio" : "Strategic Submission Acknowledged • Nexa Studio",
    successDesc: isFrench 
      ? "Merci pour votre esprit d'initiative. Notre directeur de création étudie actuellement vos éléments pour préparer votre maquette d'architecture digitale."
      : "Thank you for initiating your project. Our creative director is currently reviewing your business variables to draft your custom visual system map.",
    successDetails: isFrench 
      ? "Un appel de diagnostic stratégique de 15 minutes vous a été réservé par e-mail dans votre boîte de réception." 
      : "A 15-minute strategic review invitation has been transmitted directly to your email inbox.",
    successAction: isFrench ? "Fermer le message" : "Back to Showcase"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError(isFrench ? "Veuillez renseigner votre nom et votre adresse e-mail." : "Please provide both your name and professional email address.");
      return;
    }

    // Regexp simple check for email validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(isFrench ? "Veuillez inscrire un e-mail valide." : "Please enter a valid business email address.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate premium visual loading
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section 
      className="w-full py-24 sm:py-32 bg-neutral-50 dark:bg-[#080808] border-t border-b border-neutral-150/45 dark:border-neutral-900 overflow-hidden relative" 
      id="contact-section"
    >
      {/* Background Decorative Aura Sphere */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-indigo-200/5 dark:bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-amber-100/10 dark:bg-amber-950/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* HEADER SECTION WRAPPER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16" id="contact-header-block">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/20 text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4 select-none">
            <Sparkles size={11} className="mr-1.5 animate-pulse" />
            <span>{t.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-neutral-900 dark:text-white leading-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* CONTAINER FOR SHADOW BOX */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0f0f0f] border border-neutral-200/60 dark:border-neutral-900 rounded-3xl overflow-hidden shadow-2xl relative" id="contact-form-glass-card">
          
          {/* Subtle Accent top header border line */}
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 w-full" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form-fields"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-10 md:p-12 space-y-8"
              >
                {/* Client Side Error state bubble banner */}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-rose-50 dark:bg-rose-950/15 text-rose-600 dark:text-rose-400 text-xs font-bold rounded-xl border border-rose-100"
                    id="contact-error-banner"
                  >
                    ⚠️ {error}
                  </motion.div>
                )}

                {/* Grid layout fields row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  
                  {/* FULL NAME */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                      <User size={13} className="text-indigo-505 dark:text-indigo-400" />
                      <span>{t.nameLabel} <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.namePlaceholder}
                      className="w-full bg-neutral-50/55 dark:bg-[#151515] hover:bg-neutral-100/30 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-450 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-semibold"
                    />
                  </div>

                  {/* BUSINESS EMAIL */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                      <Mail size={13} className="text-indigo-505 dark:text-indigo-400" />
                      <span>{t.emailLabel} <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-neutral-50/55 dark:bg-[#151515] hover:bg-neutral-100/30 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-450 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-semibold"
                    />
                  </div>

                  {/* COMPANY (Optional) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                      <Briefcase size={13} className="text-indigo-505 dark:text-indigo-400" />
                      <span>{t.companyLabel}</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t.companyPlaceholder}
                      className="w-full bg-neutral-50/55 dark:bg-[#151515] hover:bg-neutral-100/30 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-450 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-semibold"
                    />
                  </div>

                  {/* SECTOR PROJECT SELECT dropdown */}
                  <div className="space-y-2 relative">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                      {t.typeLabel}
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50/55 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white appearance-none pr-10 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-semibold cursor-pointer"
                      >
                        <option value="saas">{t.typeSaas}</option>
                        <option value="coach">{t.typeCoach}</option>
                        <option value="sme">{t.typeSme}</option>
                        <option value="other">{t.typeOther}</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-450 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* BUDGET ESTIMATUM SELECT dropdown in full width */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                    <DollarSign size={13} className="text-indigo-505 dark:text-indigo-400" />
                    <span>{t.budgetLabel}</span>
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-50/55 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white appearance-none pr-11 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-semibold cursor-pointer"
                    >
                      <option value="flash">{t.budgetFlash}</option>
                      <option value="authority">{t.budgetAuthority}</option>
                      <option value="custom">{t.budgetCustom}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-450 pointer-events-none" />
                  </div>
                </div>

                {/* SPECS/DESCRIPTION EXPLAIN MESSAGE BOX */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {t.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.messagePlaceholder}
                    className="w-full bg-neutral-50/55 dark:bg-[#151515] hover:bg-neutral-100/30 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-450 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-medium leading-relaxed resize-y min-h-[110px]"
                  />
                </div>

                {/* FOOTER CTA & COMPLIANCE BAR */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Compliance check flag */}
                  <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-semibold select-none">
                    <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                    <span>{t.compliance}</span>
                  </div>

                  {/* Submission Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold uppercase tracking-wider text-xs px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/15 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.submitBtn}</span>
                        <Send size={13} />
                      </>
                    )}
                  </motion.button>

                </div>

              </motion.form>
            ) : (
              // SUBMITTED CONFIRMATION SCREEN
              <motion.div
                key="submitted-success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-14 text-center flex flex-col items-center justify-center space-y-6"
                id="contact-form-success-wrapper"
              >
                
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={36} strokeWidth={2.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                    {t.successDesc}
                  </p>
                </div>

                {/* Dynamic automated booking metadata card */}
                <div className="p-4 bg-neutral-50 dark:bg-[#161616] border border-neutral-200/50 dark:border-white/5 rounded-2xl flex items-center gap-3.5 max-w-md w-full select-none text-left">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded-lg">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block leading-non">Calendar Invite Sent</span>
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1 block">
                      {t.successDetails}
                    </span>
                  </div>
                </div>

                {/* Back button resets form */}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all select-none cursor-pointer"
                >
                  {t.successAction}
                </button>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Send, Sparkles, Wand2, ShieldCheck, Mail, Briefcase, Zap } from 'lucide-react';
import { Language } from '../types';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialOffer?: string; // Preselected values e.g. "Landing Page Flash (750€)" or "Site Vitrine Authority Kit (2500€)"
}

export default function CollaborationModal({ isOpen, onClose, currentLang, initialOffer = '' }: CollaborationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    needs: 'flash',
    message: '',
  });

  // Dynamically adapt form when specific pricing tier was chosen in price list
  useEffect(() => {
    if (initialOffer) {
      if (initialOffer.includes('Flash') || initialOffer.includes('750')) {
        setFormData(prev => ({ ...prev, needs: 'flash' }));
      } else if (initialOffer.includes('Authority') || initialOffer.includes('2500')) {
        setFormData(prev => ({ ...prev, needs: 'authority' }));
      } else {
        setFormData(prev => ({ ...prev, needs: 'custom' }));
      }
    }
  }, [initialOffer, isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-fidelity lead insertion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      brandName: '',
      needs: initialOffer ? (initialOffer.includes('750') ? 'flash' : 'authority') : 'flash',
      message: '',
    });
    setIsSuccess(false);
  };

  const t = {
    title: currentLang === 'en' ? 'Launch Your Nexa Venture' : 'Lancez votre site d’exception',
    subtitle: currentLang === 'en' 
      ? 'Connect with deep conversion engineers. Our diagnostic blueprint maps SaaS, coach, and SME designs tailored for traffic.' 
      : 'Connectez-vous avec nos ingénieurs de conversion. Nous générons des structures sur-mesure pour SaaS, coachs et PME.',
    placeholderName: currentLang === 'en' ? 'Your Name' : 'Votre Nom',
    placeholderEmail: currentLang === 'en' ? 'your.email@example.com' : 'votre.adresse@email.com',
    placeholderBrand: currentLang === 'en' ? 'Startup / Brand Name' : 'Nom de votre entreprise',
    labelNeeds: currentLang === 'en' ? 'Select Formula' : 'Formule Sélectionnée',
    labelMessage: currentLang === 'en' ? 'Tell us about your conversion/growth targets' : 'Décrivez vos objectifs de conversion ou de croissance',
    btnSend: currentLang === 'en' ? 'Initiate Project Booking' : 'Lancer ma demande d’analyse',
    successTitle: currentLang === 'en' ? 'Project Diagnostic Initiated!' : 'Analyse de Projet Lancée !',
    successMsg: currentLang === 'en' 
      ? 'We have received your details. Our design engineers are mapping out a specialized conversion blueprint. We will connect with you under 2 hours.' 
      : 'Vos informations ont été reçues. Nos ingénieurs préparent un parcours de conversion personnalisé sous 2 heures ouvrées.',
    btnReset: currentLang === 'en' ? 'Submit another target' : 'Faire une nouvelle demande',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/75 backdrop-blur-md cursor-pointer"
            id="modal-backdrop"
          />

          {/* Modal Card Content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white dark:bg-[#0a0a0c] border border-neutral-150 dark:border-white/5 rounded-3xl shadow-2xl p-6 md:p-8 max-w-lg w-full overflow-hidden select-none"
            id="modal-content-card"
          >
            {/* Background subtle indicator circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-full blur-2xl -z-10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-all cursor-pointer focus-visible:outline-none"
              id="modal-close-button"
              aria-label="Close"
            >
              <X size={15} strokeWidth={2.5} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Header title */}
                <div className="mb-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-2 select-none">
                    <Sparkles size={11} className="text-indigo-500 dark:text-indigo-400" />
                    NEXA STUDIO • FAST TRACK
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#141414] dark:text-white tracking-tight">
                    {t.title}
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium leading-relaxed">
                    {t.subtitle}
                  </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    required
                    placeholder={t.placeholderName}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/5 focus:border-indigo-500 bg-neutral-50/50 dark:bg-neutral-900/40 text-slate-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>
 
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder={t.placeholderEmail}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/5 focus:border-indigo-500 bg-neutral-50/50 dark:bg-neutral-900/40 text-slate-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>
 
                {/* Brand Name */}
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    required
                    placeholder={t.placeholderBrand}
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/5 focus:border-indigo-500 bg-neutral-50/50 dark:bg-neutral-900/40 text-slate-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>
 
                {/* Formula Dropdowns Needs */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-1">
                    {t.labelNeeds}
                  </label>
                  <select
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-900/40 text-neutral-800 dark:text-zinc-200 text-xs sm:text-sm focus:border-indigo-500 outline-none cursor-pointer transition-all"
                  >
                    <option value="flash">Landing Page Flash (750€) - Page Unique</option>
                    <option value="authority">Site Vitrine Authority Kit (2500€) - 5 Pages + Chatbot</option>
                    <option value="custom">Sur-Mesure / Enterprise Strategy Code</option>
                  </select>
                </div>
 
                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <textarea
                    rows={2}
                    placeholder={formData.brandName ? `How can Nexa maximize conversions for "${formData.brandName}"?` : t.labelMessage}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/5 focus:border-indigo-500 bg-neutral-50/50 dark:bg-neutral-900/40 text-slate-900 dark:text-white placeholder-neutral-400 text-xs sm:text-sm outline-none resize-none transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11.5 bg-indigo-600 hover:bg-indigo-700 font-bold text-white rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md shadow-indigo-600/10 transition-all duration-300 disabled:opacity-50 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.btnSend}</span>
                      <Send size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-6 text-neutral-800 dark:text-white"
                id="modal-success-state"
              >
                {/* Glowing Success Checklist Circle */}
                <div className="relative w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-5 border border-emerald-150 shadow-md">
                  <Check size={26} strokeWidth={3} />
                </div>

                <h3 className="text-lg font-extrabold tracking-tight">
                  {t.successTitle}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm mt-3 font-medium">
                  {t.successMsg}
                </p>

                {/* Lead Project Diagnostic Container */}
                <div className="mt-5 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-150 dark:border-white/5 flex flex-col items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 w-full max-w-xs">
                  <div className="font-extrabold text-[#141414] dark:text-white uppercase tracking-widest text-[9.5px] text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                    <Wand2 size={12} />
                    Project Diagnostic Blueprint
                  </div>
                  <div>
                    Estimated Handshake: <strong className="text-neutral-900 dark:text-white font-bold">Within 2 business hours</strong>
                  </div>
                  <div className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 flex items-center gap-1 justify-center">
                    <ShieldCheck size={11.5} className="text-emerald-500" />
                    100% Secure. Non-committal assessment.
                  </div>
                </div>

                <div className="flex flex-col w-full gap-2 mt-6">
                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 font-bold rounded-xl text-[11px] transition-colors cursor-pointer"
                  >
                    {t.btnReset}
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 bg-[#131313] hover:bg-neutral-800 text-white font-bold rounded-xl text-[11px] transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

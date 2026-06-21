import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, User, X, MessageSquare, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Language, translations } from '../types';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

interface AiChatbotProps {
  currentLang: Language;
}

export default function AiChatbot({ currentLang }: AiChatbotProps) {
  const t = translations[currentLang].chatbotDemo;
  const isFrench = currentLang === 'fr';

  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Automatically fade out the notification tooltip after 10 seconds empty-scrolled
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Smart Pre-programmed replies to guarantee instant luxury answers
  const quickQuestions = isFrench ? [
    "Quels sont vos délais pour la Landing Flash ?",
    "Qu'y a-t-il dans l'Authority Kit à 2500€ ?",
    "Pouvez-vous faire une refonte pour une PME ?",
    "Le chatbot IA est-il personnalisé ?"
  ] : [
    "What are timelines for the Flash Landing?",
    "What is included in the Authority Kit?",
    "Can you upgrade an existing SME platform?",
    "Is the integrated AI Chatbot customized?"
  ];

  const smartAnswers: Record<string, string> = isFrench ? {
    "delais": "Nos délais pour la Landing Page Flash (750€) sont de 5 à 7 jours ouvrés après réception de vos éléments. Pour l'Authority Kit (2500€), notre standard exige 14 jours de développement.",
    "timelines": "Our timelines for the Flash Landing (€750) are 5 to 7 business days. The complete Authority Kit (€2500) requires a structured 14-day cycle.",
    "authority": "L'Authority Kit à 2500€ comprend : 5 pages d'exception, un chatbot IA personnalisé entrainé pour votre business, un blog optimisé pour capturer du trafic organique, et vos documents légaux & RGPD.",
    "kit": "The €2500 Authority Kit includes: 5 outstanding pages, fully automated AI Chatbot integration, a ready-to-run blog for organic SEO growth, and all legal documents.",
    "pme": "Absolument ! Les PME européennes représentent notre cœur de cible historique. Nous créons des refontes modernes, fluides, avec une vitesse de chargement instantanée et une identité de prestige.",
    "sme": "Absolutely! European SMEs represent our legacy focus. We specialize in modernizing complex business layouts into fast, clean, prestige-level aesthetic experiences.",
    "chatbot": "Oui, entièrement ! Le Chatbot IA inclus dans le pack vitrine est connecté et entraîné sur votre documentation produit/service. Il répond à vos prospects, qualifie leurs besoins et capture leurs contacts.",
    "customized": "Yes, completely! The integrated AI chatbot is trained exclusively on your products, services, and brand documents to qualify leads, capture contacts, and automate customer service."
  } : {
    "delais": "Our timelines for the Flash Landing (€750) are 5 to 7 business days. The complete Authority Kit (€2500) requires a structured 14-day cycle.",
    "timelines": "Our timelines for the Flash Landing (€750) are 5 to 7 days. The complete Authority Kit (€2500) requires 14 business days.",
    "authority": "The €2500 Authority Kit includes: 5 outstanding pages, fully automated AI Chatbot integration, a ready-to-run blog for organic SEO growth, and all legal documents.",
    "kit": "The €2500 Authority Kit includes: 5 outstanding pages, fully automated AI Chatbot integration, a ready-to-run blog for organic SEO growth, and all legal documents.",
    "pme": "Absolutely! European SMEs represent our legacy focus. We specialize in modernizing complex business layouts into fast, clean, prestige-level experiences.",
    "sme": "Absolutely! European SMEs represent our legacy focus. We specialize in modernizing complex business layouts into fast, clean, prestige-level experiences.",
    "chatbot": "Yes, completely! The integrated AI chatbot is trained exclusively on your products, services, and brand documents to qualify leads, capture contacts, and automate customer service.",
    "customized": "Yes, completely! The integrated AI chatbot is trained exclusively on your products, services, and brand documents to qualify leads, capture contacts, and automate customer service."
  };

  const getSmartReply = (userQuery: string): string => {
    const q = userQuery.toLowerCase();
    if (q.includes('delai') || q.includes('délai') || q.includes('time') || q.includes('line') || q.includes('flash')) {
      return isFrench ? smartAnswers["delais"] : smartAnswers["timelines"];
    }
    if (q.includes('kit') || q.includes('authority') || q.includes('autorit') || q.includes('2500')) {
      return isFrench ? smartAnswers["authority"] : smartAnswers["kit"];
    }
    if (q.includes('pme') || q.includes('sme') || q.includes('refonte') || q.includes('exist')) {
      return isFrench ? smartAnswers["pme"] : smartAnswers["sme"];
    }
    if (q.includes('chatbot') || q.includes('ia') || q.includes('ai') || q.includes('personnalis')) {
      return isFrench ? smartAnswers["chatbot"] : smartAnswers["customized"];
    }
    return isFrench 
      ? "Nexa Studio conçoit des écosystèmes web d’une précision chirurgicale. Pour démarrer votre diagnostic personnalisé de marque pour Startups, Créateurs ou PME, nous vous invitons à cliquer sur le bouton 'Lancer un Projet'."
      : "Nexa Studio Engineers custom, luxury conversion websites. To discover how our systems can support your specific SaaS, educational academy, or corporate SME, select 'Launch Your Project' from the menu.";
  };

  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: t.welcomeMsg, time: '12:00' }
  ]);
  const [inp, setInp] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll down chats
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Add user message
    setMessages(prev => [...prev, { sender: 'user', text: textToSend, time: currentTime }]);
    setInp('');
    setIsTyping(true);

    // Fade out tooltips on user interaction
    setShowTooltip(false);

    // 2. Generate simulated smart AI reply with premium typing feel
    setTimeout(() => {
      const reply = getSmartReply(textToSend);
      setMessages(prev => [...prev, { sender: 'bot', text: reply, time: currentTime }]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON & TOOLTIP */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end" 
        id="floating-chat-anchor"
      >
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="mb-3.5 mr-1 p-3 rounded-2xl bg-[#141414] text-white border border-neutral-800 shadow-2xl flex items-center gap-2.5 max-w-[280px] pointer-events-auto"
              id="chatbot-tooltip-bubble"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                <Bot size={11} className="text-white" />
              </div>
              <div className="text-[11px] font-semibold leading-snug">
                {isFrench 
                  ? "Une question ? Testez notre Assistant IA"
                  : "Have a question? Try our live AI Assistant"}
              </div>
              <button 
                onClick={() => setShowTooltip(false)}
                className="text-neutral-400 hover:text-white p-0.5"
                aria-label="Close message"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Trigger */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            if (showTooltip) setShowTooltip(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
            isOpen 
              ? 'bg-[#141414] hover:bg-[#202020] text-white border border-neutral-800' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
          aria-label={isFrench ? "Ouvrir le Chatbot" : "Open Assistant Chat"}
          id="floating-chatbot-toggle-btn"
        >
          {isOpen ? (
            <X size={24} className="stroke-[2.5]" />
          ) : (
            <>
              <MessageSquare size={24} className="stroke-[2.2] animate-pulse" />
              {/* Active green status light */}
              <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-neutral-950 rounded-full" />
            </>
          )}
        </motion.button>
      </div>

      {/* COMPACT FLOATING CHAT PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[385px] h-[520px] max-h-[80vh] bg-white dark:bg-[#0f0f0f] border border-neutral-200 dark:border-neutral-900 rounded-3xl shadow-2xl overflow-hidden z-50 flex flex-col shadow-indigo-600/5"
            id="floating-chat-panel"
          >
            {/* Top header bar */}
            <div className="px-4 py-3.5 bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-150/60 dark:border-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8.5 h-8.5 bg-indigo-600 rounded-full flex items-center justify-center text-white shrink-0">
                  <Bot size={16} />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-white dark:border-neutral-950 rounded-full" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">NexaBot • Assistant</h4>
                  <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">{t.botRole}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[8px] sm:text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                  Live Chat
                </span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="Close Chat"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* MESSAGES BODY */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3.5" id="floating-chat-thread">
              
              {/* Explanatory introduction disclaimer info */}
              <div className="p-3 bg-indigo-50/40 dark:bg-indigo-950/20 rounded-xl border border-indigo-100/30 dark:border-indigo-900/10 text-[10px] text-neutral-500 dark:text-neutral-400 leading-snug flex gap-2 mb-1.5 select-none animate-fade-in">
                <ShieldCheck size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-800 dark:text-neutral-200 font-bold block mb-0.5">Automated Conversion Preview</span>
                  {isFrench 
                    ? "Ce chatbot simule l'assistant dynamique inclus dans la formule Authority Kit pour qualifier et orienter automatiquement vos leads." 
                    : "This chatbot previews the custom assistant included in our Authority Kit formula to capture, profile, and convert cold traffic on autopilot."}
                </div>
              </div>

              {messages.map((msg, i) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={i}
                    className={`flex items-end gap-2 max-w-[85%] ${
                      isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${
                      isUser ? 'bg-neutral-800 text-white' : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'
                    }`}>
                      {isUser ? <User size={11} /> : <Bot size={11} />}
                    </div>

                    <div className={`p-3 rounded-2xl text-[11.5px] leading-relaxed font-semibold ${
                      isUser 
                        ? 'bg-[#141414] text-white rounded-br-none' 
                        : 'bg-neutral-100 dark:bg-[#161616] text-neutral-800 dark:text-neutral-200 rounded-bl-none border border-neutral-200/50 dark:border-neutral-900'
                    }`}>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <span className="block text-[8px] text-right mt-1 opacity-55">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-end gap-2 mr-auto">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950/45 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Bot size={11} />
                  </div>
                  <div className="p-3.5 bg-neutral-100 dark:bg-[#161616] rounded-2xl rounded-bl-none border border-neutral-200/50 dark:border-neutral-900">
                    <div className="flex items-center gap-1.5 px-1.5">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* QUICK PRESET CHIPS BAR */}
            <div className="px-4 pb-2.5 flex flex-col gap-1 shrink-0 border-t border-neutral-100 dark:border-neutral-900 pt-2.5">
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-neutral-400 dark:text-neutral-500 mb-0.5 px-1 select-none">
                {isFrench ? "Suggestions :" : "Suggest Questions :"}
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto no-scrollbar" id="preset-replies-holder">
                {quickQuestions.map((qq, ix) => (
                  <button
                    key={ix}
                    disabled={isTyping}
                    onClick={() => handleSendMessage(qq)}
                    className="rounded-lg border border-neutral-200 dark:border-neutral-900 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-2.5 py-1 text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 transition-all cursor-pointer text-left truncate max-w-full"
                  >
                    {qq}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Input Area */}
            <div className="p-2.5 bg-neutral-50 dark:bg-neutral-900/10 border-t border-neutral-150/60 dark:border-neutral-900 flex gap-1.5 shrink-0">
              <input
                type="text"
                placeholder={t.placeholder}
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(inp);
                }}
                className="flex-1 bg-white dark:bg-[#161616] px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-900 text-xs text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button
                disabled={!inp.trim() || isTyping}
                onClick={() => handleSendMessage(inp)}
                className="w-8.5 h-8.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm disabled:opacity-45 cursor-pointer shrink-0"
              >
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

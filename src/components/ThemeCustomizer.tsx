import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, Settings, Eye } from 'lucide-react';

export interface BgTheme {
  id: string;
  name: string;
  bgClass: string;
  textClass: string;
  subTextClass: string;
  cardClass: string;
}

export const themes: BgTheme[] = [
  {
    id: 'midnight',
    name: 'Lux Carbon (Premium Dark)',
    bgClass: 'background: radial-gradient(circle at 25% 25%, rgba(20, 18, 56, 0.45) 0%, transparent 60%), radial-gradient(circle at 75% 15%, rgba(45, 10, 48, 0.35) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(10, 10, 12, 1) 0%, rgba(10, 10, 12, 1) 100%)',
    textClass: 'text-white',
    subTextClass: 'text-zinc-400',
    cardClass: 'bg-zinc-900/40 border-zinc-800/50',
  },
  {
    id: 'original',
    name: 'Original Soft Aura',
    // Matches the delicate blue left to soft cream/peach right aura precisely
    bgClass: 'background: radial-gradient(circle at 10% 20%, rgba(220, 238, 255, 0.45) 0%, transparent 45%), radial-gradient(circle at 90% 25%, rgba(255, 244, 210, 0.55) 0%, transparent 55%), radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
    textClass: 'text-[#141414]',
    subTextClass: 'text-neutral-500',
    cardClass: 'bg-white/80 border-neutral-200/40',
  },
  {
    id: 'golden',
    name: 'Golden Hour Velvet',
    bgClass: 'background: radial-gradient(circle at 15% 20%, rgba(254, 226, 226, 0.45) 0%, transparent 48%), radial-gradient(circle at 85% 30%, rgba(254, 243, 199, 0.5) 0%, transparent 50%), radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
    textClass: 'text-stone-900',
    subTextClass: 'text-stone-500',
    cardClass: 'bg-[#fffcf7]/80 border-amber-200/30',
  },
  {
    id: 'polar',
    name: 'Polar Mint Breeze',
    bgClass: 'background: radial-gradient(circle at 20% 30%, rgba(240, 253, 250, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(243, 232, 255, 0.5) 0%, transparent 45%), radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
    textClass: 'text-slate-900',
    subTextClass: 'text-slate-500',
    cardClass: 'bg-white/70 border-zinc-200/40',
  },
];

interface ThemeCustomizerProps {
  currentTheme: BgTheme;
  setTheme: (theme: BgTheme) => void;
}

export default function ThemeCustomizer({ currentTheme, setTheme }: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none font-sans" id="theme-customizer-root">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="mb-3.5 bg-white dark:bg-neutral-950 border border-neutral-150/70 dark:border-white/10 p-4 rounded-2xl shadow-xl w-64 flex flex-col gap-2.5"
            id="theme-selection-card"
          >
            {/* Header label */}
            <div className="flex items-center gap-1.5 px-1 py-0.5 border-b border-neutral-100 dark:border-white/5 pb-2">
              <Eye size={13} className="text-neutral-500 dark:text-neutral-400" />
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest leading-none">
                Aesthetic Aura Theme
              </span>
            </div>
 
            {/* List triggers */}
            <div className="flex flex-col gap-1.5 font-bold">
              {themes.map((th) => {
                const isSelected = th.id === currentTheme.id;
                return (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-neutral-100/95 dark:bg-neutral-900 text-[#141414] dark:text-neutral-50 border border-neutral-200/40 dark:border-white/5' 
                        : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{th.name}</span>
                    {isSelected && <Check size={12} className="text-[#3f2bff] stroke-[3.5]" />}
                  </button>
                );
              })}
            </div>
            
            {/* Disclaimer info */}
            <p className="text-[9px] text-neutral-400 font-semibold text-center mt-1">
              Customizer handles light & dark flipping.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Gear Trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-[#131313] hover:bg-[#3f2bff] text-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        id="theme-customizer-floating-trigger"
      >
        {isOpen ? <Settings className="animate-spin text-white" size={18} /> : <Palette size={18} />}
      </motion.button>
    </div>
  );
}

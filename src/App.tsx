import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Audience from './components/Audience';
import Offers from './components/Offers';
import AiChatbot from './components/AiChatbot';
import Creations from './components/Creations';
import FaqSection from './components/FaqSection';
import FooterStats from './components/FooterStats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CollaborationModal from './components/CollaborationModal';
import { Language } from './types';

export default function App() {
  // Support English and French dynamically
  const [currentLang, setCurrentLang] = useState<Language>('fr'); // Default to French as requested by additional instructions
  const [isCollabOpen, setIsCollabOpen] = useState<boolean>(false);
  const [selectedOffer, setSelectedOffer] = useState<string>('');

  const handleSelectOffer = (offerName: string) => {
    setSelectedOffer(offerName);
    setIsCollabOpen(true);
  };

  const handleOpenGeneralCollab = () => {
    setSelectedOffer('');
    setIsCollabOpen(true);
  };

  return (
    <div 
      className="min-h-screen relative bg-white transition-all duration-700 ease-out bg-noise pb-16"
      style={{
        // Default original soft aura gradient matching pixel-for-pixel the screenshot
        background: 'radial-gradient(circle at 10% 20%, rgba(215, 235, 252, 0.55) 0%, transparent 50%), radial-gradient(circle at 90% 22%, rgba(254, 243, 199, 0.55) 0%, transparent 55%), radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)'
      }}
      id="nexa-app-root"
    >
      {/* Absolute high-end noise overlay to match real premium designs */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-60 z-0" />

      {/* Embedded Decorative Ambient Glow Top-Left / Top-Right for even more physical depth */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none -y-10 z-0 select-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-104 h-104 bg-indigo-100/25 rounded-full blur-[110px]" />
        <div className="absolute -top-32 -right-32 w-104 h-104 bg-amber-100/30 rounded-full blur-[110px]" />
      </div>

      {/* HEADER SECTION: Desktop-friendly navigation + interactive pills */}
      <Header 
        currentLang={currentLang} 
        setLang={setCurrentLang} 
        onOpenCollab={handleOpenGeneralCollab}
        currentBgTheme="original"
      />

      {/* MAIN CONTAINER */}
      <main className="relative max-w-7xl mx-auto text-[#141414]">
        
        {/* HERO COMPONENT: Heading, sub-paragraphs, star review rows & premium avatars */}
        <Hero 
          currentLang={currentLang} 
          onOpenCollab={handleOpenGeneralCollab} 
        />

        {/* BRANDS COMPONENT: Clean horizontal separator + 5 vectorized brand SVGs */}
        <Brands 
          currentLang={currentLang} 
        />

        {/* TARGET SECTOR GROUP COMPONENT */}
        <Audience
          currentLang={currentLang}
        />

        {/* OFFERS / SERVICES SECTION */}
        <Offers
          currentLang={currentLang}
          onSelectOffer={handleSelectOffer}
        />

        {/* CREATIONS PORTFOLIO SLIDER COMPONENT */}
        <Creations
          currentLang={currentLang}
        />

         {/* FAQ SECTIONS COMPONENT */}
        <FaqSection
          currentLang={currentLang}
        />

        {/* FOOTER & STATS COMPONENT: "We Fuse" interactive capsules + 3 counting metrics indices */}
        <FooterStats 
          currentLang={currentLang} 
        />

        {/* SECURE HIGH-CONVERSION CONTACT FORM */}
        <ContactForm 
          currentLang={currentLang}
        />

      </main>

      {/* INTERACTIVE WORKFLOW DIALOG OVERLAY */}
      <CollaborationModal 
        isOpen={isCollabOpen} 
        onClose={() => setIsCollabOpen(false)} 
        currentLang={currentLang}
        initialOffer={selectedOffer}
      />

      {/* FLOATING CONV_BOT INTELLIGENT AGENT */}
      <AiChatbot 
        currentLang={currentLang}
      />

      {/* PRESTIGE MULTI-COLUMNS FOOTER */}
      <Footer 
        currentLang={currentLang}
      />
    </div>
  );
}

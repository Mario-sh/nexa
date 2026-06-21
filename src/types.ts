export type Language = 'en' | 'fr';

export interface TranslationSchema {
  nav: {
    services: string;
    target: string;
    pricing: string;
    demoChat: string;
    faq: string;
    collaborate: string;
  };
  hero: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    headingSerif: string;
    description: string;
    ctaFlash: string;
    ctaAuthority: string;
    trustedBy: string;
  };
  brands: {
    lovedBy: string;
  };
  audience: {
    title: string;
    subtitle: string;
    saasTitle: string;
    saasDesc: string;
    coachTitle: string;
    coachDesc: string;
    pmeTitle: string;
    pmeDesc: string;
  };
  servicesSection: {
    title: string;
    subtitle: string;
    flashName: string;
    flashPrice: string;
    flashShort: string;
    flashFeatures: string[];
    authorityName: string;
    authorityPrice: string;
    authorityShort: string;
    authorityFeatures: string[];
    ctaSelect: string;
  };
  chatbotDemo: {
    title: string;
    subtitle: string;
    placeholder: string;
    welcomeMsg: string;
    botRole: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    trafficInput: string;
    conversionInput: string;
    valueInput: string;
    roiCardTitle: string;
    leadsMonthly: string;
    revMonthly: string;
    roiFlash: string;
    roiAuthority: string;
  };
  fusion: {
    preText: string;
    creativity: string;
    innovation: string;
    strategy: string;
    postText: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      services: 'Our Offers',
      target: 'Target Audience',
      pricing: 'Realizations',
      demoChat: 'Live AI Demo',
      faq: 'FAQ',
      collaborate: 'Launch Your Project',
    },
    hero: {
      badge: 'NEXA STUDIO • Digital Architecture for High Conversions',
      headingPart1: 'We build high-converting websites',
      headingPart2: 'engineered for',
      headingSerif: 'unmatched authority',
      description: 'Nexa Studio crafts pixel-perfect web assets with extreme attention to aesthetic details, SEO optimization, and integrated AI capabilities. Specifically engineered to launch SaaS startups, empower online coaches, and modernize European SMEs.',
      ctaFlash: 'Get Flash Landing (€750)',
      ctaAuthority: 'Get Authority Kit (€2500)',
      trustedBy: 'Loved by 240+ startups & creators',
    },
    brands: {
      lovedBy: 'Engineered for fast-growing companies & ambitious creators around the world',
    },
    audience: {
      title: 'Designed for High-Discipline Leaders',
      subtitle: 'We do not build generic templates. We build bespoke digital instruments for three specific sectors.',
      saasTitle: 'SaaS Startups',
      saasDesc: 'Highly optimized templates with rapid deployment, structural hooks, and modular UI cards to showcase interactive code blocks and custom pricing plans with zero friction.',
      coachTitle: 'Coaches & Educators',
      coachDesc: 'Establish instant authority, drive digital subscriptions, capture premium email lists, and automate your consulting requests on auto-pilot.',
      pmeTitle: 'European SMEs',
      pmeDesc: 'Give your business a prestige-level modern redesign. Integrate ultra-clean typography, state-of-the-art contact builders, and high-performance layouts.',
    },
    servicesSection: {
      title: 'Our Hyper-Focused Formulas',
      subtitle: 'No complex hourly contracts. Clear, transparent packages constructed for rapid market entry and high conversion.',
      flashName: 'Landing Page Flash',
      flashPrice: '750',
      flashShort: 'Go to market instantly. A high-converting, single-page framework tailored for ultra-speed launches and performance.',
      flashFeatures: [
        'Single Premium Page Architecture',
        '5 Conversion-Centered Sections',
        'Premium Mobile-First Responsive Design',
        'Integrated Elite SEO Architecture',
        'Subtle Kinetic Animations & Load Speed < 1.2s',
        'High-converting CTAs & Social Proof Layout',
      ],
      authorityName: 'Site Vitrine Authority Kit',
      authorityPrice: '2500',
      authorityShort: 'Complete structural supremacy. 5 complete pages with a custom AI chatbot configured to automate your inbound pipelines.',
      authorityFeatures: [
        '5 High-Performance Custom Pages',
        'Fully Integrated & Automated AI Chatbot',
        'Fully-managed Authority Blog Architecture',
        'Legal & RGPD Compliant Documents Included',
        'Custom interactive ROI calculator widget',
        '3 Months Priority Support & Schema Upgrades',
      ],
      ctaSelect: 'Select Formula & Plan',
    },
    chatbotDemo: {
      title: 'Test-Drive Our AI Integration',
      subtitle: 'The Site Vitrine Authority Kit (€2500) includes a custom-trained, server-side AI chatbot to capture and convert traffic 24/7. Interact with it live below!',
      placeholder: 'Ask about our designs, timelines, or your ROI...',
      welcomeMsg: "Hello! I am NexaBot. I am part of the Authority Kit. Ask me how Nexa Studio can redesign your SaaS startup, training platform, or Euro-SME to boost your conversions by 40%!",
      botRole: 'Nexa Studio Strategy Partner',
    },
    calculator: {
      title: 'ROI Conversion Optimizer',
      subtitle: 'Input your metrics to visualize the financial impact of Nexa Studio’s high-conversion web layout on your traffic.',
      trafficInput: 'Estimated Monthly Traffic',
      conversionInput: 'Expected Conversion Rate (%)',
      valueInput: 'Average Lead Value (€)',
      roiCardTitle: 'Nexa Inbound Projections',
      leadsMonthly: 'Monthly Leads Generated',
      revMonthly: 'Additional Monthly Revenue',
      roiFlash: 'Flash Page Payback Period',
      roiAuthority: 'Authority Kit Payback Period',
    },
    fusion: {
      preText: 'We fuse',
      creativity: 'Creativity',
      innovation: 'Innovation',
      strategy: 'Strategy',
      postText: 'to craft state-of-the-art conversion architecture.',
    },
  },
  fr: {
    nav: {
      services: 'Nos Formules',
      target: 'Cibles Élite',
      pricing: 'Réalisations',
      demoChat: 'Démo Chat IA',
      faq: 'FAQ',
      collaborate: 'Lancer un Projet',
    },
    hero: {
      badge: 'NEXA STUDIO • Architecture Digitale Haute Conversion',
      headingPart1: 'Nous bâtissons des sites d’exception',
      headingPart2: 'conçus pour',
      headingSerif: 'votre autorité digitale',
      description: 'Nexa Studio conçoit des écosystèmes web d’une précision chirurgicale, alliant esthétique premium, optimisation SEO maximale et intégration d’intelligence artificielle. Spécifiquement taillé pour propulser les startups SaaS, les coachs et infopreneurs, et moderniser les PME européennes.',
      ctaFlash: 'Découvrir la Landing Flash (750€)',
      ctaAuthority: 'Obtenir le Kit Autorité (2500€)',
      trustedBy: 'Validé par +240 startups & créateurs exigeants',
    },
    brands: {
      lovedBy: 'Bâtir l’avenir visuel des entreprises ambitieuses et des créateurs de contenu',
    },
    audience: {
      title: 'Une Architecture pour Leaders Exigeants',
      subtitle: 'Pas de templates génériques. Nous concevons de véritables instruments de conversion sur-mesure pour 3 grands secteurs.',
      saasTitle: 'Startups SaaS',
      saasDesc: 'Une expérience fluide pour mettre en valeur vos abonnements, des visuels épurés pour présenter vos tableaux de bord et des micro-animations de démonstration produit à fort impact.',
      coachTitle: 'Créateurs & Coachs',
      coachDesc: 'Établissez une autorité instantanée, capturez des e-mails qualifiés en masse, présentez vos programmes de formation et automatisez vos réservations de consulting.',
      pmeTitle: 'PME Européennes',
      pmeDesc: 'Offrez une véritable refonte prestige à votre structure. Intégrez une typographie élégante, des formulaires de contact haute performance et une vitesse de chargement instantanée.',
    },
    servicesSection: {
      title: 'Nos Deux Formules Radicales',
      subtitle: 'Pas de facturation horaire opaque. Deux forfaits clés en main pour dominer votre marché de façon immédiate.',
      flashName: 'Landing Page Flash',
      flashPrice: '750',
      flashShort: 'Prenez d’assaut le marché. Une page unique et redoutable conçue pour capturer immédiatement l’attention de vos visiteurs.',
      flashFeatures: [
        'Architecture de Page Unique Premium',
        '5 Sections axées sur la Conversion pure',
        'Design Mobile-First 100% Responsive',
        'Optimisation SEO Technique de pointe',
        'Animations Fluides (Temps de chargement < 1.2s)',
        'Copywriting orienté AIDA & preuve sociale',
      ],
      authorityName: 'Site Vitrine Authority Kit',
      authorityPrice: '2500',
      authorityShort: 'La suprématie digitale absolue. Un site complet de 5 pages équipé d’un chatbot IA personnalisé pour qualifier vos prospects 24h/24.',
      authorityFeatures: [
        '5 Pages Complètes Haute Performance',
        'Chatbot IA Intégré de dernière génération',
        'Blog d’Autorité pour votre SEO organique',
        'Textes Légaux, RGPD et Mentions inclus',
        'Calculateur interactif de ROI intégré',
        '3 Mois de Support Prioritaire & Optimisations',
      ],
      ctaSelect: 'Choisir cette formule',
    },
    chatbotDemo: {
      title: 'Testez le Chatbot IA Intégré',
      subtitle: 'Notre formule Site Vitrine Authority Kit (2500€) intègre un assistant IA conversationnel connecté en temps réel pour convertir vos leads. Essayez-le ci-dessous !',
      placeholder: 'Posez une question sur nos services, délais, etc...',
      welcomeMsg: "Bonjour ! Je suis NexaBot. Je fais partie intégrante du Authority Kit. Demandez-moi comment Nexa Studio peut propulser votre croissance de +40% !",
      botRole: 'Partenaire Stratégique Nexa Studio',
    },
    calculator: {
      title: 'Simulateur de ROI & Rentabilité',
      subtitle: 'Estimez et visualisez instantanément le chiffre d’affaires additionnel et l’impact sur votre activité.',
      trafficInput: 'Trafic Mensuel Estimé',
      conversionInput: 'Taux de Conversion Attendu (%)',
      valueInput: 'Valeur Moyenne d’un Prospect (€)',
      roiCardTitle: 'Projections d’Inbound Nexa',
      leadsMonthly: 'Prospects Générés par Mois',
      revMonthly: 'Revenus Additionnels Mensuels',
      roiFlash: 'Amortissement de la Landing Flash',
      roiAuthority: 'Amortissement de l’Authority Kit',
    },
    fusion: {
      preText: 'Nous fusionnons',
      creativity: 'Créativité',
      innovation: 'Innovation',
      strategy: 'Stratégie',
      postText: 'pour bâtir des architectures de conversion uniques.',
    },
  },
};

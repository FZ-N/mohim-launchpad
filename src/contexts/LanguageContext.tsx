import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.usecase': 'Use Case',
    'nav.technology': 'Technology',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'MOHIM',
    'home.subtitle': "Morocco's Digital Health Transformation Initiative",
    'home.tagline': 'Connecting systems. Securing data. Empowering care.',
    'home.description': 'MOHIM unites public, private, and academic partners to accelerate interoperability, promote innovation, and ensure digital trust in healthcare.',
    'home.cta.sandbox': 'Explore the Sandbox',
    'home.cta.vision': 'Discover the Vision',
    
    // About
    'about.title': 'About MOHIM',
    'about.intro': 'MOHIM is the national platform dedicated to digital health interoperability, aligned with international standards — FAIR, FHIR, IHE, and WHO Smart Trust.',
    'about.mission': 'Through its interoperability sandbox, MOHIM enables testing, validation, and innovation in a secure, sovereign ecosystem.',
    'about.partners': 'Partners: Ministry of Health, WHO, academic institutions, and private innovation hubs.',
    
    // Use Case
    'usecase.title': 'Use Case: Rabat to Mecca',
    'usecase.step1': 'Patient data from OpenMRS in Rabat synchronizes with MOHIM\'s FAIR API',
    'usecase.step2': 'A secure QR code allows instant access abroad via WHO Smart Trust GDHCN network',
    'usecase.step3': 'Data returns seamlessly to Morocco, ensuring continuity of care',
    
    // Technology
    'tech.title': 'Technology & Standards',
    'tech.sandbox': 'Interoperability Sandbox',
    'tech.fair': 'FAIR APIs',
    'tech.pki': 'PKI-based Digital Signing',
    'tech.ips': 'International Patient Summary (IPS)',
    'tech.who': 'WHO Smart Trust Integration',
    'tech.subtitle': 'Each innovation aligns with global interoperability standards to strengthen Morocco\'s digital health maturity.',
    
    // Contact
    'contact.title': 'Join the MOHIM Ecosystem',
    'contact.subtitle': 'Partner, test, and innovate with us.',
    'contact.email': 'Email',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.usecase': 'Cas d\'usage',
    'nav.technology': 'Technologie',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'MOHIM',
    'home.subtitle': 'Initiative de Transformation Numérique de la Santé au Maroc',
    'home.tagline': 'Connecter les systèmes. Sécuriser les données. Renforcer les soins.',
    'home.description': 'MOHIM unit les partenaires publics, privés et académiques pour accélérer l\'interopérabilité, promouvoir l\'innovation et assurer la confiance numérique dans les soins de santé.',
    'home.cta.sandbox': 'Explorer le Sandbox',
    'home.cta.vision': 'Découvrir la Vision',
    
    // About
    'about.title': 'À propos de MOHIM',
    'about.intro': 'MOHIM est la plateforme nationale dédiée à l\'interopérabilité de la santé numérique, alignée sur les normes internationales — FAIR, FHIR, IHE et WHO Smart Trust.',
    'about.mission': 'Grâce à son sandbox d\'interopérabilité, MOHIM permet le test, la validation et l\'innovation dans un écosystème sécurisé et souverain.',
    'about.partners': 'Partenaires : Ministère de la Santé, OMS, institutions académiques et pôles d\'innovation privés.',
    
    // Use Case
    'usecase.title': 'Cas d\'usage : Rabat à La Mecque',
    'usecase.step1': 'Les données patient d\'OpenMRS à Rabat se synchronisent avec l\'API FAIR de MOHIM',
    'usecase.step2': 'Un QR code sécurisé permet un accès instantané à l\'étranger via le réseau WHO Smart Trust GDHCN',
    'usecase.step3': 'Les données retournent de manière transparente au Maroc, assurant la continuité des soins',
    
    // Technology
    'tech.title': 'Technologie & Normes',
    'tech.sandbox': 'Sandbox d\'Interopérabilité',
    'tech.fair': 'APIs FAIR',
    'tech.pki': 'Signature Numérique PKI',
    'tech.ips': 'Résumé International du Patient (IPS)',
    'tech.who': 'Intégration WHO Smart Trust',
    'tech.subtitle': 'Chaque innovation s\'aligne sur les normes mondiales d\'interopérabilité pour renforcer la maturité numérique de la santé au Maroc.',
    
    // Contact
    'contact.title': 'Rejoindre l\'Écosystème MOHIM',
    'contact.subtitle': 'Partenariat, test et innovation avec nous.',
    'contact.email': 'Email',
    'contact.name': 'Nom',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

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
    'nav.events': 'Forum 2025',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'MOHIM',
    'home.subtitle': "Morocco Health Interoperability & Maturity Lab",
    'home.tagline': 'Connecting systems. Securing data. Empowering care.',
    'home.description': 'MOHIM unites public, private, and academic partners to accelerate interoperability, promote innovation, and ensure digital trust in healthcare.',
    'home.cta.sandbox': 'Explore the Sandbox',
    'home.cta.vision': 'Discover the Vision',
    
    // About
    'about.title': 'About MOHIM',
    'about.intro': 'MOHIM is the national platform dedicated to digital health interoperability, aligned with international standards — FHIR, IHE, and HIMSS.',
    'about.mission': 'Through its interoperability sandbox, MOHIM enables testing, validation, and innovation in a secure, sovereign ecosystem.',
    'about.partners': 'Partners: Ministry of Health, WHO, academic institutions, and private innovation hubs.',
    
    // Use Case
    'usecase.title': 'Use Case: Rabat to Mecca',
    'usecase.step1': 'Patient data from OpenMRS in Rabat synchronizes with MOHIM\'s API',
    'usecase.step2': 'A secure QR code allows instant access abroad via global health networks',
    'usecase.step3': 'Data returns seamlessly to Morocco, ensuring continuity of care',
    
    // Technology
    'tech.title': 'Technology & Standards',
    'tech.sandbox': 'Interoperability Sandbox',
    'tech.data': 'Data Standards',
    'tech.pki': 'PKI-based Digital Signing',
    'tech.ips': 'International Patient Summary (IPS)',
    'tech.interop': 'Global Health Interoperability',
    'tech.subtitle': 'Each innovation aligns with global interoperability standards to strengthen Morocco\'s digital health maturity.',
    
    // Contact
    'contact.title': 'Join the MOHIM Ecosystem',
    'contact.subtitle': 'Partner, test, and innovate with us.',
    'contact.email': 'Email',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Events
    'events.title': 'eHealth Morocco Forum 2025',
    'events.subtitle': 'From Vision to Impact: Advancing Digital Health for All',
    'events.speakers': 'Featured Speakers',
    'events.speakersDesc': 'Industry leaders and experts sharing insights on digital health transformation',
    'events.agenda': 'Event Agenda',
    'events.agendaDesc': 'Three days of workshops, demonstrations, and networking',
    'events.registration': 'Registration & Welcome Coffee',
    'events.opening': 'Opening Ceremony',
    'events.keynote': 'Keynote: Digital Health Transformation',
    'events.lunch': 'Networking Lunch',
    'events.workshop1': 'Workshop: FHIR & IHE Standards',
    'events.workshop2': 'Workshop: EMRAM Assessment',
    'events.demo': 'Live Demo: MOHIM Sandbox',
    'events.technical': 'Technical Session: Interoperability Architecture',
    'events.hajj': 'Case Study: Hajj Patient Journey & IPS',
    'events.panel': 'Panel: Future of Digital Health in Morocco',
    'events.emram': 'EMRAM Deep Dive Session',
    'events.partners': 'Partners Showcase & Networking',
    'events.closing': 'Closing Ceremony & Awards',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.usecase': 'Cas d\'usage',
    'nav.technology': 'Technologie',
    'nav.events': 'Forum 2025',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'MOHIM',
    'home.subtitle': 'Laboratoire Marocain d\'Interopérabilité et de Maturité Santé',
    'home.tagline': 'Connecter les systèmes. Sécuriser les données. Renforcer les soins.',
    'home.description': 'MOHIM unit les partenaires publics, privés et académiques pour accélérer l\'interopérabilité, promouvoir l\'innovation et assurer la confiance numérique dans les soins de santé.',
    'home.cta.sandbox': 'Explorer le Sandbox',
    'home.cta.vision': 'Découvrir la Vision',
    
    // About
    'about.title': 'À propos de MOHIM',
    'about.intro': 'MOHIM est la plateforme nationale dédiée à l\'interopérabilité de la santé numérique, alignée sur les normes internationales — FHIR, IHE et HIMSS.',
    'about.mission': 'Grâce à son sandbox d\'interopérabilité, MOHIM permet le test, la validation et l\'innovation dans un écosystème sécurisé et souverain.',
    'about.partners': 'Partenaires : Ministère de la Santé, OMS, institutions académiques et pôles d\'innovation privés.',
    
    // Use Case
    'usecase.title': 'Cas d\'usage : Rabat à La Mecque',
    'usecase.step1': 'Les données patient d\'OpenMRS à Rabat se synchronisent avec l\'API de MOHIM',
    'usecase.step2': 'Un QR code sécurisé permet un accès instantané à l\'étranger via les réseaux de santé mondiaux',
    'usecase.step3': 'Les données retournent de manière transparente au Maroc, assurant la continuité des soins',
    
    // Technology
    'tech.title': 'Technologie & Normes',
    'tech.sandbox': 'Sandbox d\'Interopérabilité',
    'tech.data': 'Normes de Données',
    'tech.pki': 'Signature Numérique PKI',
    'tech.ips': 'Résumé International du Patient (IPS)',
    'tech.interop': 'Interopérabilité Santé Mondiale',
    'tech.subtitle': 'Chaque innovation s\'aligne sur les normes mondiales d\'interopérabilité pour renforcer la maturité numérique de la santé au Maroc.',
    
    // Contact
    'contact.title': 'Rejoindre l\'Écosystème MOHIM',
    'contact.subtitle': 'Partenariat, test et innovation avec nous.',
    'contact.email': 'Email',
    'contact.name': 'Nom',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    
    // Events
    'events.title': 'Forum eHealth Maroc 2025',
    'events.subtitle': 'De la Vision à l\'Impact : Faire Progresser la Santé Numérique pour Tous',
    'events.speakers': 'Conférenciers Invités',
    'events.speakersDesc': 'Leaders de l\'industrie et experts partageant leurs perspectives sur la transformation de la santé numérique',
    'events.agenda': 'Programme de l\'Événement',
    'events.agendaDesc': 'Trois jours d\'ateliers, de démonstrations et de réseautage',
    'events.registration': 'Inscription & Café d\'Accueil',
    'events.opening': 'Cérémonie d\'Ouverture',
    'events.keynote': 'Discours Principal : Transformation Santé Numérique',
    'events.lunch': 'Déjeuner Networking',
    'events.workshop1': 'Atelier : Normes FHIR & IHE',
    'events.workshop2': 'Atelier : Évaluation EMRAM',
    'events.demo': 'Démo Live : Sandbox MOHIM',
    'events.technical': 'Session Technique : Architecture d\'Interopérabilité',
    'events.hajj': 'Étude de Cas : Parcours Patient Hajj & IPS',
    'events.panel': 'Table Ronde : Avenir de la Santé Numérique au Maroc',
    'events.emram': 'Session Approfondie EMRAM',
    'events.partners': 'Showcase Partenaires & Networking',
    'events.closing': 'Cérémonie de Clôture & Remise de Prix',
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

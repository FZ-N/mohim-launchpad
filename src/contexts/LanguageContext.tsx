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
    'nav.gallery': 'Gallery',
    'nav.presentations': 'Presentations',
    'nav.contact': 'Contact',
    
    // Presentations
    'presentations': 'Presentations',
    'presentationsDescription': 'Access presentation files, slides, and documents from MOHIM events and workshops.',
    'presentationFiles': 'Presentation Files',
    'openInDrive': 'Open in Google Drive',
    
    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Explore moments from MOHIM events, workshops, and partnerships',
    'gallery.viewMore': 'Click on images to view full size in Google Drive',
    
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
    
    // Lab Services
    'lab.title': 'Interoperability Lab Services',
    'lab.subtitle': 'Building Capacity, Ensuring Excellence',
    'lab.training.title': 'Training and Certification',
    'lab.training.subtitle': 'Health System Interoperability Specialists',
    'lab.training.desc1': 'Establish a certified training program in partnership with HIMSS, IHE, and Moroccan universities.',
    'lab.training.desc2': 'Train professionals capable of designing, implementing, and evaluating systems aligned with international standards such as HL7 FHIR, DICOM, and IHE profiles.',
    'lab.assessment.title': 'Hospital Information System Maturity Assessment',
    'lab.assessment.desc1': 'Apply the EMRAM model in multiple public hospitals to identify strengths and weaknesses of existing systems.',
    'lab.assessment.desc2': 'Align institutions with security and interoperability standards.',
    'lab.assessment.desc3': 'Support progress toward EMRAM Stage 4, a prerequisite for integration into the future national Health Information Exchange (HIE).',
    'lab.needs.title': 'Supporting the Needs of the Moroccan Health System',
    'lab.needs.desc1': 'Ensure seamless connection between care providers and payers across both public and private sectors.',
    'lab.needs.desc2': 'Enable the exchange of high-quality documents compliant with international standards.',
    'lab.needs.desc3': 'The lab will contribute directly to the development of the national HIE, enhancing care continuity and medical service quality.',
    'lab.strategic.title': 'Strategic Axes',
    'lab.strategic.axis1': 'Training and certification',
    'lab.strategic.axis2': 'Pilot projects to test interoperability standards',
    'lab.strategic.axis3': 'Regular evaluation of hospital information systems',
    'lab.strategic.axis4': 'IHE Morocco: contribute to developing the Moroccan interoperability framework and localizing profiles adapted to the national context',
    'lab.asset.title': 'A Key Asset for Digital Health in Morocco and Africa',
    'lab.asset.desc1': 'This Interoperability Lab will be a major asset for Morocco—and eventually Africa—by addressing critical needs in care coordination, capacity building, and alignment with global standards.',
    'lab.asset.desc2': 'The collaboration between HIMSS Analytics, IHE Catalyst, and CIeS provides a strong foundation to achieve these goals.',
    'lab.asset.desc3': 'We recommend rapid validation of this project and the designation of a pilot team to begin the first implementation phases.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.usecase': 'Cas d\'usage',
    'nav.technology': 'Technologie',
    'nav.events': 'Forum 2025',
    'nav.gallery': 'Galerie',
    'nav.presentations': 'Présentations',
    'nav.contact': 'Contact',
    
    // Presentations
    'presentations': 'Présentations',
    'presentationsDescription': 'Accédez aux fichiers de présentation, diapositives et documents des événements et ateliers MOHIM.',
    'presentationFiles': 'Fichiers de Présentation',
    'openInDrive': 'Ouvrir dans Google Drive',
    
    // Gallery
    'gallery.title': 'Galerie Photos',
    'gallery.subtitle': 'Découvrez les moments des événements, ateliers et partenariats MOHIM',
    'gallery.viewMore': 'Cliquez sur les images pour les voir en taille réelle dans Google Drive',
    
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
    
    // Lab Services
    'lab.title': 'Services du Laboratoire d\'Interopérabilité',
    'lab.subtitle': 'Renforcer les Capacités, Garantir l\'Excellence',
    'lab.training.title': 'Formation et Certification',
    'lab.training.subtitle': 'Spécialistes en Interopérabilité des Systèmes de Santé',
    'lab.training.desc1': 'Mettre en place un programme de formation certifiant en partenariat avec HIMSS, IHE et les universités marocaines.',
    'lab.training.desc2': 'Former des professionnels capables de concevoir, d\'implémenter et d\'évaluer des systèmes conformes aux standards internationaux tels que HL7 FHIR, DICOM et les profils IHE.',
    'lab.assessment.title': 'Évaluation de la Maturité des Systèmes d\'Information Hospitaliers',
    'lab.assessment.desc1': 'Appliquer le modèle EMRAM dans plusieurs établissements publics pour identifier les forces et faiblesses des systèmes existants.',
    'lab.assessment.desc2': 'Aligner les établissements avec les standards de sécurité et d\'interopérabilité.',
    'lab.assessment.desc3': 'Favoriser l\'évolution vers le niveau 4 d\'EMRAM, préalable à l\'intégration au futur HIE national.',
    'lab.needs.title': 'Répondre aux Besoins du Système de Santé Marocain',
    'lab.needs.desc1': 'Assurer une connexion fluide entre fournisseurs de soins et payeurs, dans les secteurs public et privé.',
    'lab.needs.desc2': 'Permettre l\'échange de documents de qualité conformes aux standards internationaux.',
    'lab.needs.desc3': 'Le laboratoire contribuera directement à la mise en place du HIE national, améliorant ainsi la continuité des soins et la qualité des services médicaux.',
    'lab.strategic.title': 'Axes Stratégiques',
    'lab.strategic.axis1': 'Formation et certification',
    'lab.strategic.axis2': 'Mise en place de projets pilotes pour tester les standards',
    'lab.strategic.axis3': 'Évaluation régulière des SIH',
    'lab.strategic.axis4': 'IHE Maroc : contribution au cadre marocain d\'interopérabilité et adaptation des profils IHE au contexte national',
    'lab.asset.title': 'Un Atout Majeur pour la Santé Numérique au Maroc et en Afrique',
    'lab.asset.desc1': 'Ce Laboratoire d\'Interopérabilité constituera un levier structurant pour l\'écosystème marocain — puis africain — en répondant aux besoins urgents de coordination des soins, de montée en compétences et d\'alignement aux standards internationaux.',
    'lab.asset.desc2': 'La collaboration entre HIMSS Analytics, IHE Catalyst et le CIeS offrira un cadre solide pour atteindre ces objectifs.',
    'lab.asset.desc3': 'Nous recommandons une validation rapide de ce projet et la mise en place d\'une équipe pilote pour démarrer les premières phases.',
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

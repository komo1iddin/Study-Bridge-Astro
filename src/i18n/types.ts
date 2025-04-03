// src/i18n/types.ts
import type { Lang } from './langUtils';

// Define the structure of our translations
export interface TranslationSchema {
  hero: {
    stats: {
      universities: string;
      students: string;
      success: string;
      experience: string;
    };
    cards: {
      scholarship: {
        title: string;
        desc: string;
      };
      admission: {
        title: string;
        desc: string;
      };
    };
    badge: {
      enrollment: string;
    };
    title: {
      first: string;
      highlight: string;
    };
    description: string;
    buttons: {
      apply: string;
      programs: string;
    };
    image: {
      alt: string;
    };
    tooltip: {
      label: string;
      content: string;
    };
  };
  common: {
    home: string;
    about: string;
    contact: string;
    universities: string;
    programs: string;
    blog: string;
  };
  nav: {
    home: string;
    about: {
      _value: string;
      us: string;
      reviews: string;
      studentPath: string;
      contacts: string;
      faq: string;
    };
    programs: string;
    universities: string;
    grants: string;
    blog: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
    submitApplication: string;
  };
  languages: {
    ru: string;
    uz: string;
    en: string;
  };
  header: {
    cta: string;
  };
  contact: {
    modal: {
      title: string;
      description: string;
    };
    form: {
      name: {
        _value: string;
        placeholder: string;
      };
      phone: {
        _value: string;
        placeholder: string;
      };
      email: {
        _value: string;
        placeholder: string;
      };
      submit: string;
      success: string;
      privacy?: {
        text: string;
        link: string;
      };
    };
  };
  universities: {
    featured: {
      badge: string;
      title: string;
      subtitle: string;
      view_all: string;
      swipeToSlide?: string;
      students?: string;
      faculties?: string;
      moreInfo?: string;
    };
    title: string;
    filters: string;
    reset: string;
    location: string;
    top: string;
    students: string;
    tuition: string;
    rating: string;
    programs: string;
    fields: string;
    count_found: string;
    campus: string;
    annual_fee: string;
    details: string;
    no_results: string;
    no_fields: string;
    no_programs: string;
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  contacts?: {
    badge: string;
    title: string;
    subtitle: string;
    methods: {
      phone: string;
      email: string;
      telegram: string;
      whatsapp: string;
    };
    offices: {
      title: string;
      hours: string;
      address: string;
    };
    form: {
      title: string;
      description: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      message_placeholder: string;
      submit: string;
      privacy: {
        text: string;
        link: string;
      };
    };
    social: {
      title: string;
    };
  };
  comparison?: {
    badge: string;
    title: string;
    subtitle: string;
    category: string;
    china: string;
    uzbekistan: string;
    cta: {
      _value: string;
      button: string;
    };
    stories: {
      title: string;
      story1: {
        name: string;
        university: string;
        year: string;
        position: string;
        quote: string;
      };
      story2: {
        name: string;
        university: string;
        year: string;
        position: string;
        quote: string;
      };
      story3: {
        name: string;
        university: string;
        year: string;
        position: string;
        quote: string;
      };
    };
    education: {
      category: string;
      china: string;
      uzbekistan: string;
    };
    tuition: {
      category: string;
      china: string;
      uzbekistan: string;
    };
    opportunities: {
      category: string;
      china: string;
      uzbekistan: string;
    };
    technology: {
      category: string;
      china: string;
      uzbekistan: string;
    };
  };
  guarantees?: {
    badge: string;
    title: string;
    subtitle: string;
    ourGuarantees: string;
    ourAchievements: string;
    servicesDescription: string;
    achievementsDescription: string;
    getConsultation: string;
    list: {
      enrollment: string;
      visa: string;
      adaptation: string;
      living: string;
      program: string;
      finance: string;
    };
    stats: {
      studentsEnrolled: string;
      successfulEnrollments: string;
      partnerUniversities: string;
      satisfiedClients: string;
    };
  };
  whyChina?: {
    badge: string;
    title: {
      main: string;
      highlight: string;
    };
    subtitle: string;
  };
  success?: {
    badge: string;
    title: string;
    subtitle: string;
    team_title?: string;
    team_description?: string;
    position1?: string;
    position2?: string;
    position3?: string;
    position4?: string;
    team?: {
      title: string;
      description: string;
      position1: string;
      position2: string;
      position3: string;
      position4: string;
    };
    values: {
      mainTitle: string;
      title1: string;
      desc1: string;
      title2: string;
      desc2?: string;
      title3: string;
      desc3: string;
    };
  };
  education?: {
    mission: {
      badge: string;
      title: string;
      subtitle: string;
    };
  };
  stats?: {
    students: {
      label: string;
      description: string;
    };
    universities: {
      label: string;
      description: string;
    };
    success: {
      label: string;
      description: string;
    };
    experience: {
      label: string;
      description: string;
    };
  };
  special: {
    offer: {
      badge: string;
      title: string;
      subtitle: string;
      companyName: string;
      companySlogan: string;
      mainHeading: {
        first: string;
        highlight: string;
      };
      description: {
        first: string;
        discount: string;
        second: string;
      };
      price: {
        label: string;
        amount: string;
        period: string;
        discountBadge: string;
      };
      included: {
        title: string;
      };
      features: {
        campus: string;
        insurance: string;
        materials: string;
      };
      buttons: {
        getOffer: string;
        moreInfo: string;
      };
      image: {
        alt: string;
        caption: string;
      };
      importantDates: {
        title: string;
      };
      deadlines: {
        spring: {
          date: string;
          text: string;
        };
        summer: {
          date: string;
          text: string;
        };
      };
      contact: {
        label: string;
        phone: string;
      };
      badges: {
        accredited: string;
        partners: string;
      };
    };
  };
  advantages?: {
    education: {
      title: string;
      description: string;
    };
    price: {
      title: string;
      description: string;
    };
    career: {
      title: string;
      description: string;
    };
    study: {
      title: string;
      description: string;
    };
    life: {
      title: string;
      description: string;
    };
    work: {
      title: string;
      description: string;
    };
  };
  sucess?: {
    values: {
      desc2: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    notFoundQuestion: string;
    askQuestion: string;
    search?: {
      placeholder: string;
      noResults: string;
    };
    categories?: {
      admission: string;
      documents: string;
      study: string;
      life: string;
      finance: string;
      scholarships: string;
      transfer: string;
      language: string;
    };
    common?: {
      readMore: string;
      showAll: string;
      hideAll: string;
      relatedQuestions: string;
    };
    guides?: {
      title: string;
    };
    popularQuestions?: string;
    contactUs?: string;
    meta?: {
      title: string;
      description: string;
    };
    wizard?: {
      title: string;
      description: string;
      step1: string;
      step2: string;
      step3: string;
      categoriesGroup: string;
      backButton: string;
      nextButton: string;
      restartButton: string;
    };
    pageTitle?: string;
  };
  howWeWork: {
    badge: string;
    title: string;
    subtitle: string;
  };
  // Добавить в TranslationSchema
  studentPath: {
    pageTitle: string;
    hero: {
      title: string;
      subtitle: string;
      buttons: {
        consultation: string;
        learnProcess: string;
      };
    };
    journey: {
      title: string;
      subtitle: string;
      exploration: {
        title: string;
        description: string;
        services: {
          consultation: string;
          selection: string;
          costAnalysis: string;
          scholarships: string;
        };
      };
      preparation: {
        title: string;
        description: string;
        services: {
          hskCourses: string;
          motivationLetter: string;
          interview: string;
          requirements: string;
        };
      };
      application: {
        title: string;
        description: string;
        services: {
          documents: string;
          translation: string;
          submission: string;
          tracking: string;
        };
      };
      documentation: {
        title: string;
        description: string;
        services: {
          visaDocuments: string;
          visaInterview: string;
          tickets: string;
          insurance: string;
        };
      };
      arrival: {
        title: string;
        description: string;
        services: {
          airportPickup: string;
          accommodation: string;
          registration: string;
          simCard: string;
        };
      };
      study: {
        title: string;
        description: string;
        services: {
          academicSupport: string;
          adaptation: string;
          extraClasses: string;
          events: string;
        };
      };
      career: {
        title: string;
        description: string;
        services: {
          employment: string;
          resume: string;
          interviews: string;
          internships: string;
        };
      };
      network: {
        title: string;
        description: string;
        services: {
          alumni: string;
          projects: string;
          contacts: string;
          events: string;
        };
      };
    };
  };
  // Popup translations
  popup: {
    offer_badge: string;
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
    phone: string;
  };
}

// Define the complete translations object type
export type Translations = Record<Lang, TranslationSchema>;

// Define a type for nested paths in the translation schema
export type TranslationPath = string;

// Define a type for the translation function
export type TranslationFunction = (path: TranslationPath, ...args: any[]) => string;

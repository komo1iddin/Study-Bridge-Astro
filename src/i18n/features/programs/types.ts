export interface ProgramsTranslations {
  main: {
    title: string;
    subtitle: string;
  };
  categories: {
    bachelor: {
      title: string;
      description: string;
      duration: string;
      benefits: string[];
    };
    master: {
      title: string;
      description: string;
      duration: string;
      benefits: string[];
    };
    language: {
      title: string;
      description: string;
      duration: string;
      benefits: string[];
    };
  };
  filter: {
    title: string;
    language: string;
    duration: string;
    priceRange: string;
    clearFilters: string;
  };
  labels: {
    duration: string;
    benefits: string;
    price: string;
    originalPrice: string;
    discountedPrice: string;
    deadline: string;
    programs: string;
    viewAll: string;
    applyNow: string;
    learnMore: string;
    noResults: string;
    studyLevels: string;
    fields: string;
  };
  common: {
    discount: string;
    discountedUntil: string;
  };
} 
export interface UniversityFilterTranslations {
  title: string;
  reset: string;
  quickFilters: string;
  featured: string;
  educationType: {
    title: string;
    placeholder: string;
    all: string;
    bachelor: string;
    master: string;
    language: string;
    program: string;
  };
  location: {
    title: string;
    placeholder: string;
    all: string;
  };
  ranking: {
    title: string;
    placeholder: string;
    all: string;
    top5: string;
    top10: string;
    top20: string;
    other: string;
  };
  grants: {
    title: string;
    placeholder: string;
    all: string;
    available: string;
    notAvailable: string;
  };
}

export interface UniversityCardTranslations {
  viewDetails: string;
  founded: string;
  students: string;
  featured: string;
  grantsAvailable: string;
  rank: string;
}

export interface UniversityListTranslations {
  title: string;
  featuredUniversities: string;
  showing: string;
  noResults: string;
  pagination: {
    prev: string;
    next: string;
  };
}

export interface InfoCardTranslations {
  title: string;
  description: string;
  stats: {
    universities: {
      value: string;
      description: string;
    };
    programs: {
      value: string;
      description: string;
    };
    students: {
      value: string;
      description: string;
    };
    scholarships: {
      value: string;
      description: string;
    };
  };
}

export interface UniversityPageTranslations {
  breadcrumb: {
    home: string;
    universities: string;
  };
  loading: string;
  filters: UniversityFilterTranslations;
  card: UniversityCardTranslations;
  list: UniversityListTranslations;
  infoCard: InfoCardTranslations;
  mobileFilters: {
    title: string;
    close: string;
    open: string;
  };
} 
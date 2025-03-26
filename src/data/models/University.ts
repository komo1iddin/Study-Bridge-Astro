// src/data/models/University.ts
export interface University {
  id: string;
  name: string;
  location: string | { city: string; country: string };
  description: string;
  ranking: number;
  rating?: number; // Alias for ranking in some places
  foundedYear: number;
  established?: number; // Alias for foundedYear in some places
  studentsCount: number;
  internationalStudents: number;
  programs: string[]; // Program IDs
  hasGrants: boolean;
  featured: boolean;
  isTopUniversity?: boolean; // Alias for featured in some places
  logo: string;
  logoImage?: string; // Alias for logo in some components
  city: string;
  students?: string; // Formatted student count
  faculties?: string[]; // Used in some components
  fields?: string[]; // Alias for faculties in some components
  features: {
    title: string;
    description: string;
  }[];
  images: {
    main: string;
    gallery: string[];
  };
  image?: string; // Alias for images.main in some places
  price?: {
    amount: number;
    currency: string;
  };
  priceRange?: string;
  tuitionRange?: {
    min: number;
    max: number;
    currency: string;
  };
  careerOpportunities?: {
    companies: string[];
    salaryRanges: string[];
  };
  costs?: {
    tuition: string[];
    additional: string[];
  };
  scholarships?: any[];
  educationType?: string[];
  programTypes?: string[];
}

// Interface for multilingual content
export interface I18nContent {
  uz: string;
  ru: string;
  en: string;
}

// Interface for university data from YAML files
export interface UniversityYaml {
  name: I18nContent;
  location: string;
  ranking?: number;
  rating?: number;
  foundedYear?: number;
  established?: number;
  description?: I18nContent | string;
  students?: I18nContent | string;
  internationalStudents?: number;
  studentsCount?: number;
  image?: string;
  logo?: string;
  featured?: boolean;
  programs?: string[];
  annualFee?: number;
  priceRange?: string;
  hasGrants?: boolean;
  grants?: {
    available: boolean;
    types?: {
      name: I18nContent;
      coverage: string;
    }[];
  };
  faculties?: string[] | {
    uz: string[];
    ru: string[];
    en: string[];
  };
  careerOpportunities?: {
    companies: string[];
    salaryRanges: string[];
  };
  costs?: {
    tuition: string[];
    additional: string[];
  };
  scholarships?: any[];
  educationType?: string[];
  programTypes?: string[];
  city?: string;
}

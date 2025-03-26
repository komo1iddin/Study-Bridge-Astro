// src/types/university.ts

export interface I18nText {
  uz: string;
  ru: string;
  en: string;
}

export type Lang = 'uz' | 'ru' | 'en';

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  faqs: FAQ[];
}

export interface DormInfo {
  name: string;
  image: string;
  description: string;
  roomTypes: string[];
  amenities: string[];
  mealPlan: string;
  yearBuilt: number;
  distanceToCampus: string;
}

export interface FacilityCategory {
  name: string;
  description: string;
  facilities: {
    name: string;
    description: string;
    icon?: string;
  }[];
}

export interface ScholarshipInfo {
  name: string;
  description: string;
  amount?: string;
  eligibility?: string[];
}

export type ProgramsType = string[] | {
  [key in Lang]?: string[];
};

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryCategory {
  name: string;
  images: GalleryImage[];
}

export interface University {
  id: string;
  name: string;
  city: string;
  rating: number;
  students: string;
  fields: string[];
  priceRange: string;
  image: string;
  logoImage?: string;
  logo?: string;
  shortDescription?: string;
  description?: string | I18nText;
  isTopUniversity: boolean;
  featured?: boolean;
  hasGrants?: boolean;
  established?: number | string;
  foundedYear?: number | string;
  ranking?: number;
  location: {
    city: string;
    country: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  tuitionRange: {
    min: number;
    max: number;
    currency: string;
  };
  programs: string[];
  educationType?: string[];
  // Additional fields for detail page
  faqs?: FAQCategory[];
  dorms?: DormInfo[];
  facilities?: FacilityCategory[];
  scholarships?: ScholarshipInfo[];
  galleryCategories?: GalleryCategory[];
  careerOpportunities?: {
    companies?: string[];
    salaryRanges?: string[];
  };
  costs?: {
    tuition?: string[];
    additional?: string[];
  };
  admissionRequirements?: {
    requirement: string;
    required: boolean;
  }[];
  admissionDeadlines?: {
    round: string;
    deadline: string;
    notification: string;
  }[];
}

export interface UniversityI18n {
  id: string;
  name: I18nText;
  city: string;
  rating: number;
  students: I18nText;
  fields: {
    [key in Lang]: string[];
  };
  priceRange: string;
  image: string;
  logoImage?: string;
  shortDescription?: string;
  isTopUniversity: boolean;
  location: {
    city: string;
    country: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  tuitionRange: {
    min: number;
    max: number;
    currency: string;
  };
  programs: string[];
}

export type UniversityFilter = {
  location?: string;
  rankingRange?: {
    min: number;
    max: number;
  };
  programType?: string;
};

export interface UniversityEntry {
  id: string;
  data: {
    name: string | I18nText;
    students?: string | I18nText;
    fields?:
      | string[]
      | {
          [key in Lang]: string[];
        };
    location?: string;
    rating?: number;
    featured?: boolean;
    priceRange?: string;
    image?: string;
    logo?: string;
    annualFee?: number;
    description?: string | I18nText;
    tuitionRange?: {
      min: number;
      max: number;
      currency: string;
    };
    programs?: ProgramsType;
    faqs?: FAQCategory[];
    dorms?: DormInfo[];
    facilities?: FacilityCategory[];
    scholarships?: ScholarshipInfo[];
    galleryCategories?: GalleryCategory[];
    careerOpportunities?: {
      companies?: string[];
      salaryRanges?: string[];
    };
    costs?: {
      tuition?: string[];
      additional?: string[];
    };
    admissionRequirements?: {
      requirement: string;
      required: boolean;
    }[];
    admissionDeadlines?: {
      round: string;
      deadline: string;
      notification: string;
    }[];
    educationType?: string[];
    hasGrants?: boolean;
    established?: number | string;
    foundedYear?: number | string;
    ranking?: number;
    [key: string]: unknown;
  };
}

function parseLocation(locationString: string | undefined): { city: string; country: string } {
  if (!locationString) {
    return { city: '', country: '' };
  }

  const parts = locationString.split(',').map((part) => part.trim());
  return {
    city: parts[0] || '',
    country: parts[1] || '',
  };
}

function getDefaultTuitionRange(): { min: number; max: number; currency: string } {
  return {
    min: 0,
    max: 0,
    currency: 'USD',
  };
}

export function localizeUniversity(university: UniversityI18n, lang: Lang): University {
  const name = university.name[lang] || university.name.en || '';
  const students = university.students[lang] || university.students.en || '';
  const fields = university.fields[lang] || university.fields.en || [];
  const shortDescription = university.shortDescription
    ? university.shortDescription[lang] || university.shortDescription.en || ''
    : undefined;

  return {
    ...university,
    name,
    students,
    fields,
    shortDescription,
  };
}

export function localizeUniversities(universities: UniversityI18n[], lang: Lang): University[] {
  return universities.map((uni) => localizeUniversity(uni, lang));
}

// Safe function to extract programs from either array or i18n object
function extractProgramsByLang(programs: unknown, lang: Lang): string[] {
  if (!programs) {
    return [];
  }
  
  if (Array.isArray(programs)) {
    return programs;
  }
  
  if (typeof programs === 'object' && programs !== null) {
    // Use type assertion to properly type the programs object
    const programsObj = programs as Record<string, unknown>;
    
    // Try to get programs for the specified language
    const langPrograms = programsObj[lang];
    if (Array.isArray(langPrograms)) {
      return langPrograms;
    }
    
    // Fall back to English
    const enPrograms = programsObj['en'];
    if (Array.isArray(enPrograms)) {
      return enPrograms;
    }
  }
  
  return [];
}

export function convertEntryToUniversity(entry: UniversityEntry, lang: Lang): University {
  if (!entry || !entry.data) {
    throw new Error('Invalid university entry data');
  }

  const data = entry.data;
  const slug = entry.id.replace(/\.(md|yaml)$/, '');
  const location = parseLocation(data.location);

  const isI18n =
    data.name &&
    typeof data.name === 'object' &&
    ('uz' in data.name || 'ru' in data.name || 'en' in data.name);

  // Process programs data
  const processedPrograms = extractProgramsByLang(data.programs, lang);

  // Get any additional fields
  const faqs = data.faqs || undefined;
  const dorms = data.dorms || undefined;
  const facilities = data.facilities || undefined;
  const scholarships = data.scholarships || undefined;
  const galleryCategories = data.galleryCategories || undefined;
  const careerOpportunities = data.careerOpportunities || undefined;
  const costs = data.costs || undefined;
  const admissionRequirements = data.admissionRequirements || undefined;
  const admissionDeadlines = data.admissionDeadlines || undefined;
  const educationType = data.educationType || undefined;
  const featured = !!data.featured;
  const hasGrants = !!data.hasGrants;
  const established = data.established || data.foundedYear || undefined;
  const ranking = data.ranking || 0;

  if (isI18n) {
    const i18nData: UniversityI18n = {
      id: slug,
      name: data.name as I18nText,
      city: location.city,
      rating: data.rating || 0,
      students: (data.students as I18nText) || { uz: '', ru: '', en: '' },
      fields: (data.fields as { [key in Lang]: string[] }) || { uz: [], ru: [], en: [] },
      priceRange: data.priceRange || '',
      image: data.image || '',
      logoImage: data.logo || '',
      shortDescription: (data.description as string) || '', 
      isTopUniversity: featured,
      location,
      price: {
        amount: data.annualFee || 0,
        currency: 'USD',
      },
      tuitionRange: data.tuitionRange || getDefaultTuitionRange(),
      programs: processedPrograms,
    };

    const university = localizeUniversity(i18nData, lang);
    
    // Add additional fields
    return {
      ...university,
      featured,
      hasGrants,
      established,
      ranking,
      educationType,
      faqs,
      dorms,
      facilities,
      scholarships,
      galleryCategories,
      careerOpportunities,
      costs,
      admissionRequirements,
      admissionDeadlines,
      description: data.description,
      logo: data.logo,
    };
  } else {
    return {
      id: slug,
      name: (data.name as string) || '',
      city: location.city,
      rating: data.rating || 0,
      students: (data.students as string) || '',
      fields: Array.isArray(data.fields) ? data.fields : [],
      priceRange: data.priceRange || '',
      image: data.image || '',
      logoImage: data.logo || '', 
      shortDescription: (data.description as string) || '',
      isTopUniversity: featured,
      location,
      price: {
        amount: data.annualFee || 0,
        currency: 'USD',
      },
      tuitionRange: data.tuitionRange || getDefaultTuitionRange(),
      programs: processedPrograms,
      // Additional fields
      featured,
      hasGrants,
      established,
      ranking,
      educationType,
      faqs,
      dorms,
      facilities,
      scholarships,
      galleryCategories,
      careerOpportunities,
      costs,
      admissionRequirements,
      admissionDeadlines,
      description: data.description,
      logo: data.logo,
    };
  }
}

export function convertEntriesToUniversities(entries: UniversityEntry[], lang: Lang): University[] {
  if (!entries || !Array.isArray(entries)) {
    return [];
  }

  return entries.map((entry) => {
    try {
      return convertEntryToUniversity(entry, lang);
    } catch (error) {
      console.error(`Error converting entry ${entry?.id || 'unknown'}:`, error);

      return {
        id: entry?.id || 'error',
        name: 'Error loading university',
        city: '',
        rating: 0,
        students: '',
        fields: [],
        priceRange: '',
        image: '',
        isTopUniversity: false,
        location: { city: '', country: '' },
        price: { amount: 0, currency: 'USD' },
        tuitionRange: { min: 0, max: 0, currency: 'USD' },
        programs: [],
      };
    }
  });
}
// src/types/university.ts

export interface I18nText {
  uz: string;
  ru: string;
  en: string;
}

export type Lang = 'uz' | 'ru' | 'en';

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
    description?: string;
    tuitionRange?: {
      min: number;
      max: number;
      currency: string;
    };
    programs?: string[];
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
      isTopUniversity: !!data.featured,
      location,
      price: {
        amount: data.annualFee || 0,
        currency: 'USD',
      },
      tuitionRange: data.tuitionRange || getDefaultTuitionRange(),
      programs: data.programs || [],
    };

    return localizeUniversity(i18nData, lang);
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
      isTopUniversity: !!data.featured,
      location,
      price: {
        amount: data.annualFee || 0,
        currency: 'USD',
      },
      tuitionRange: data.tuitionRange || getDefaultTuitionRange(),
      programs: data.programs || [],
    };
  }
}

/**

 */
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
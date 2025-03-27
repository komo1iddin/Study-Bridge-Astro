import { universityPageEn } from './en';
import { universityPageRu } from './ru';
import { universityPageUz } from './uz';
import type { 
  UniversityPageTranslations,
  UniversityFilterTranslations,
  UniversityCardTranslations,
  UniversityListTranslations
} from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { 
  UniversityPageTranslations,
  UniversityFilterTranslations,
  UniversityCardTranslations,
  UniversityListTranslations
};

// Export translations by language
export const universityPageTranslations: Record<Lang, UniversityPageTranslations> = {
  en: universityPageEn,
  ru: universityPageRu,
  uz: universityPageUz
};

// Helper function to get translations for a specific language
export function getUniversityPageTranslations(lang: Lang): UniversityPageTranslations {
  return universityPageTranslations[lang] || universityPageUz; // Default to Uzbek if language not found
} 
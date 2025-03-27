import { universityDetailEn } from './en';
import { universityDetailRu } from './ru';
import { universityDetailUz } from './uz';
import type { 
  UniversityDetailTranslations, 
  UniversityTabTranslations,
  UniversityStatisticsTranslations,
  UniversityApplicationTranslations,
  UniversityContactTranslations,
  UniversityBadgeTranslations
} from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { 
  UniversityDetailTranslations, 
  UniversityTabTranslations,
  UniversityStatisticsTranslations,
  UniversityApplicationTranslations,
  UniversityContactTranslations,
  UniversityBadgeTranslations
};

// Export translations by language
export const universityDetailTranslations: Record<Lang, UniversityDetailTranslations> = {
  en: universityDetailEn,
  ru: universityDetailRu,
  uz: universityDetailUz
};

// Helper function to get translations for a specific language
export function getUniversityDetailTranslations(lang: Lang): UniversityDetailTranslations {
  return universityDetailTranslations[lang] || universityDetailUz; // Default to Uzbek if language not found
} 
import { commonEn } from './en';
import { commonRu } from './ru';
import { commonUz } from './uz';
import type { CommonTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { CommonTranslations };

// Export translations by language
export const commonTranslations: Record<Lang, CommonTranslations> = {
  en: commonEn,
  ru: commonRu,
  uz: commonUz
};

// Getter function
export function getCommonTranslations(lang: Lang): CommonTranslations {
  return commonTranslations[lang] || commonTranslations.uz;
} 
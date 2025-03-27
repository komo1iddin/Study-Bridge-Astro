// src/i18n/features/home/partners/index.ts
import { partnersEn } from './en';
import { partnersRu } from './ru';
import { partnersUz } from './uz';
import type { PartnersTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { PartnersTranslations };

// Export translations by language
export const partnersTranslations: Record<Lang, PartnersTranslations> = {
  en: partnersEn,
  ru: partnersRu,
  uz: partnersUz
};

// Helper function to get translations for a specific language
export function getPartnersTranslations(lang: Lang): PartnersTranslations {
  return partnersTranslations[lang] || partnersUz; // Default to Uzbek if language not found
} 
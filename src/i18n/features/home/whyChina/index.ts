// src/i18n/features/home/whyChina/index.ts
import { whyEn } from './en';
import { whyRu } from './ru';
import { whyUz } from './uz';
import type { WhyTranslations, ReasonItem } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { WhyTranslations, ReasonItem };

// Export translations by language
export const whyTranslations: Record<Lang, WhyTranslations> = {
  en: whyEn,
  ru: whyRu,
  uz: whyUz
};

// Helper function to get translations for a specific language
export function getWhyTranslations(lang: Lang): WhyTranslations {
  return whyTranslations[lang] || whyUz; // Default to Uzbek if language not found
} 
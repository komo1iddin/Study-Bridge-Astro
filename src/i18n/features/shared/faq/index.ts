import { faqEn } from './en';
import { faqRu } from './ru';
import { faqUz } from './uz';
import type { FAQTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { FAQTranslations };

// Export translations by language
export const faqTranslations: Record<Lang, FAQTranslations> = {
  en: faqEn,
  ru: faqRu,
  uz: faqUz
};

/**
 * Helper function to get translations for a specific language
 * @param lang Language code
 * @returns FAQ translations for the specified language
 */
export function getFAQTranslations(lang: Lang): FAQTranslations {
  return faqTranslations[lang] || faqUz;
} 
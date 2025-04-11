import { blogCommonEn } from './en';
import { blogCommonRu } from './ru';
import { blogCommonUz } from './uz';
import type { BlogCommonTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { BlogCommonTranslations };

// Export translations by language
export const blogCommonTranslations: Record<Lang, BlogCommonTranslations> = {
  en: blogCommonEn,
  ru: blogCommonRu,
  uz: blogCommonUz
};

/**
 * Helper function to get blog common translations for a specific language
 * @param lang Language code
 * @returns Blog common translations for the specified language
 */
export function getBlogCommonTranslations(lang: Lang): BlogCommonTranslations {
  return blogCommonTranslations[lang] || blogCommonUz;
} 
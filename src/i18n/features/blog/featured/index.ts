import { featuredBlogEn } from './en';
import { featuredBlogRu } from './ru';
import { featuredBlogUz } from './uz';
import type { FeaturedBlogTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { FeaturedBlogTranslations };

// Export translations by language
export const featuredBlogTranslations: Record<Lang, FeaturedBlogTranslations> = {
  en: featuredBlogEn,
  ru: featuredBlogRu,
  uz: featuredBlogUz
};

/**
 * Helper function to get featured blog translations for a specific language
 * @param lang Language code
 * @returns Featured blog translations for the specified language
 */
export function getFeaturedBlogTranslations(lang: Lang): FeaturedBlogTranslations {
  return featuredBlogTranslations[lang] || featuredBlogUz;
} 
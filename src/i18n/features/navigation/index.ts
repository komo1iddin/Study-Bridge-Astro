// src/i18n/features/navigation/index.ts
import { navigationEn } from './en';
import { navigationRu } from './ru';
import { navigationUz } from './uz';
import type { NavigationTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { NavigationTranslations };

// Export translations by language
export const navigationTranslations: Record<Lang, NavigationTranslations> = {
  en: navigationEn,
  ru: navigationRu,
  uz: navigationUz
};

// Helper function to get translations for a specific language
export function getNavigationTranslations(lang: Lang): NavigationTranslations {
  return navigationTranslations[lang] || navigationUz; // Default to Uzbek if language not found
} 
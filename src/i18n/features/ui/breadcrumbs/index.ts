// src/i18n/features/ui/breadcrumbs/index.ts
import { breadcrumbsEn } from './en';
import { breadcrumbsRu } from './ru';
import { breadcrumbsUz } from './uz';
import type { BreadcrumbsTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { BreadcrumbsTranslations };

// Export translations by language
export const breadcrumbsTranslations: Record<Lang, BreadcrumbsTranslations> = {
  en: breadcrumbsEn,
  ru: breadcrumbsRu,
  uz: breadcrumbsUz
};

// Helper function to get translations for a specific language
export function getBreadcrumbsTranslations(lang: Lang): BreadcrumbsTranslations {
  return breadcrumbsTranslations[lang] || breadcrumbsUz; // Default to Uzbek if language not found
} 
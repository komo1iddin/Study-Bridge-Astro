// src/i18n/features/ui/section/index.ts
import { sectionEn } from './en';
import { sectionRu } from './ru';
import { sectionUz } from './uz';
import type { SectionTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { SectionTranslations };

// Export translations by language
export const sectionTranslations: Record<Lang, SectionTranslations> = {
  en: sectionEn,
  ru: sectionRu,
  uz: sectionUz
};

// Helper function to get translations for a specific language
export function getSectionTranslations(lang: Lang): SectionTranslations {
  return sectionTranslations[lang] || sectionUz; // Default to Uzbek if language not found
} 
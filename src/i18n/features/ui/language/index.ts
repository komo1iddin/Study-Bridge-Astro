// src/i18n/features/ui/language/index.ts
import { languageSelectorEn } from './en';
import { languageSelectorRu } from './ru';
import { languageSelectorUz } from './uz';
import type { LanguageSelectorTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { LanguageSelectorTranslations };

// Export translations by language
export const languageSelectorTranslations: Record<Lang, LanguageSelectorTranslations> = {
  en: languageSelectorEn,
  ru: languageSelectorRu,
  uz: languageSelectorUz
};

// Helper function to get translations for a specific language
export function getLanguageSelectorTranslations(lang: Lang): LanguageSelectorTranslations {
  return languageSelectorTranslations[lang] || languageSelectorUz; // Default to Uzbek if language not found
} 
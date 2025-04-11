// src/i18n/features/ui/cta/index.ts
import { ctaEn } from './en';
import { ctaRu } from './ru';
import { ctaUz } from './uz';
import type { CTATranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { CTATranslations };

// Export translations by language
export const ctaTranslations: Record<Lang, CTATranslations> = {
  en: ctaEn,
  ru: ctaRu,
  uz: ctaUz
};

// Helper function to get translations for a specific language
export function getCTATranslations(lang: Lang): CTATranslations {
  return ctaTranslations[lang] || ctaUz; // Default to Uzbek if language not found
} 
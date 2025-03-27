// src/i18n/features/home/successPath/index.ts
import { successPathEn } from './en';
import { successPathRu } from './ru';
import { successPathUz } from './uz';
import type { SuccessPathTranslations, Step, StepBenefit } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { SuccessPathTranslations, Step, StepBenefit };

// Export translations by language
export const successPathTranslations: Record<Lang, SuccessPathTranslations> = {
  en: successPathEn,
  ru: successPathRu,
  uz: successPathUz
};

// Helper function to get translations for a specific language
export function getSuccessPathTranslations(lang: Lang): SuccessPathTranslations {
  return successPathTranslations[lang] || successPathUz; // Default to Uzbek if language not found
} 
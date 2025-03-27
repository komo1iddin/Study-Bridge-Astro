// src/i18n/features/home/hero/index.ts
import { heroEn } from './en';
import { heroRu } from './ru';
import { heroUz } from './uz';
import type { HeroTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

// Export types
export type { HeroTranslations };

// Export translations by language
export const heroTranslations: Record<Lang, HeroTranslations> = {
  en: heroEn,
  ru: heroRu,
  uz: heroUz
};

// Helper function to get translations for a specific language
export function getHeroTranslations(lang: Lang): HeroTranslations {
  return heroTranslations[lang] || heroUz; // Default to Uzbek if language not found
} 
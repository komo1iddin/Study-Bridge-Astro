import { comparisonEn } from './en';
import { comparisonRu } from './ru';
import { comparisonUz } from './uz';
import type { ComparisonTranslations } from './types';
import type { Lang } from '@/i18n/langUtils';

export type { ComparisonTranslations };

export const comparisonTranslations: Record<Lang, ComparisonTranslations> = {
  en: comparisonEn,
  ru: comparisonRu,
  uz: comparisonUz
};

export function getComparisonTranslations(lang: Lang): ComparisonTranslations {
  return comparisonTranslations[lang] || comparisonUz;
} 
import { universityFeatureEn } from './en';
import { universityFeatureRu } from './ru';
import { universityFeatureUz } from './uz';
import type { UniversityFeatureTranslations } from './types';
import type { Lang } from '../../../../i18n/langUtils';

export type { UniversityFeatureTranslations };

export const universityFeatureTranslations: Record<Lang, UniversityFeatureTranslations> = {
  en: universityFeatureEn,
  ru: universityFeatureRu,
  uz: universityFeatureUz
}; 
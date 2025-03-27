import { en } from './en';
import { ru } from './ru';
import { uz } from './uz';
import type { Lang } from '@/i18n/langUtils';
import type { ProgramsTranslations } from './types';

const translations = {
  en,
  ru,
  uz
};

export function getProgramsTranslations(lang: Lang): ProgramsTranslations {
  return translations[lang] || translations.uz;
}

export type { ProgramsTranslations }; 
// src/i18n/utils.ts
import type { Lang } from './langUtils';
import { createTranslationFunction } from './translationUtils';

/**
 * For backward compatibility with existing code
 * This function now directly uses the new translation system
 */
export function useTranslations(lang: Lang) {
  return createTranslationFunction(lang);
}

/**
 * Static paths function for i18n routes
 */
export function getStaticPaths() {
  const languages: Lang[] = ['uz', 'ru', 'en'];
  return languages.map((lang) => ({
    params: { lang },
  }));
}

// src/i18n/translationUtils.ts
import type { Lang } from './langUtils';
import type { TranslationPath } from './types';
import { translations } from './translations/new-index';

// Development mode flag - set this to false for production
const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 * Get a value from a nested object using a dot-notation path
 * @param obj The object to get the value from
 * @param path The path to the value, using dot notation (e.g., 'hero.title.first')
 * @param fallback Optional fallback value if the path doesn't exist
 */
export function getNestedValue(obj: any, path: string, fallback?: string): string {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current === undefined || current === null) {
      return fallback || path;
    }
    current = current[key];
  }

  return current !== undefined && current !== null ? current : fallback || path;
}

/**
 * Get a translation with fallback to another language and path display
 * @param lang The current language
 * @param path The path to the translation
 * @param args Optional arguments for string interpolation
 */
export function getTranslation(lang: Lang, path: TranslationPath, ...args: any[]): string {
  // Try to get the translation for the current language
  let translation = getNestedValue(translations[lang], path);

  // If translation is the same as the path (meaning it wasn't found), try the default language
  if (translation === path && lang !== 'uz') {
    translation = getNestedValue(translations['uz'], path);

    // If we still don't have a translation, log a warning in development
    if (translation === path && isDevelopment) {
      console.warn(`Missing translation: ${path} (${lang})`);
    }
  }

  // Apply string interpolation if needed
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      translation = translation.replace(`{${i}}`, args[i]);
    }
  }

  return translation;
}

/**
 * Create a translation function for a specific language
 * @param lang The language to create the translation function for
 */
export function createTranslationFunction(lang: Lang) {
  return function t(path: TranslationPath, ...args: any[]): string {
    return getTranslation(lang, path, ...args);
  };
}

/**
 * Check if a translation exists for a given path and language
 * @param lang The language to check
 * @param path The path to check
 */
export function hasTranslation(lang: Lang, path: TranslationPath): boolean {
  const translation = getNestedValue(translations[lang], path);
  return translation !== path;
}

/**
 * Get all missing translations for a language compared to the default language
 * @param lang The language to check
 * @param defaultLang The default language to compare against
 */
export function getMissingTranslations(lang: Lang, defaultLang: Lang = 'uz'): string[] {
  const missingTranslations: string[] = [];

  function traverseObject(obj: any, currentPath: string = '') {
    for (const key in obj) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        traverseObject(obj[key], newPath);
      } else {
        if (!hasTranslation(lang, newPath) && hasTranslation(defaultLang, newPath)) {
          missingTranslations.push(newPath);
        }
      }
    }
  }

  traverseObject(translations[defaultLang]);
  return missingTranslations;
}

/**
 * Utility to help migrate from flat to nested translations
 * @param flatTranslations Object with flat translation keys
 */
export function convertFlatToNested(flatTranslations: Record<string, string>): any {
  const result: any = {};

  for (const key in flatTranslations) {
    const keys = key.split('.');
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const isLast = i === keys.length - 1;
      const currentKey = keys[i];

      if (isLast) {
        current[currentKey] = flatTranslations[key];
      } else {
        current[currentKey] = current[currentKey] || {};
        current = current[currentKey];
      }
    }
  }

  return result;
}

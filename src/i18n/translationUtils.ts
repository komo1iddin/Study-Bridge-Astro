// src/i18n/translationUtils.ts
import type { Lang } from './langUtils';
import type { TranslationPath } from './types';
import { featureTranslations, getFeatureTranslation } from './features';

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
 * This uses the feature-based translation system for better performance.
 * Format: feature:key (e.g., "hero:title.first")
 * @param lang The current language
 * @param path The path to the translation
 * @param args Optional arguments for string interpolation
 */
export function getTranslation(lang: Lang, path: TranslationPath, ...args: any[]): string {
  if (!path.includes(':')) {
    console.warn(`Invalid translation path format: ${path}. Use "feature:key" format.`);
    return path;
  }

  const [featureName, key] = path.split(':');
  if (!featureName || !key) {
    console.warn(`Invalid feature in translation path: ${path}`);
    return path;
  }

  try {
    // Check if feature exists in featureTranslations
    if (featureName in featureTranslations) {
      return getFeatureTranslation(
        featureName as keyof typeof featureTranslations, 
        lang, 
        key, 
        ...args
      );
    } else {
      console.warn(`Feature "${featureName}" not found in translation path: ${path}`);
      return path;
    }
  } catch (error) {
    console.error(`Error getting translation for ${path}:`, error);
    return path;
  }
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
  try {
    if (!path.includes(':')) return false;
    
    const [featureName, key] = path.split(':');
    if (!featureName || !key) return false;
    
    // Check if feature exists in featureTranslations
    if (featureName in featureTranslations) {
      const translation = getFeatureTranslation(
        featureName as keyof typeof featureTranslations, 
        lang, 
        key
      );
      return translation !== key;
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

// The following functions are deprecated and should be updated to use the new feature system
// They are left here for backward compatibility

/**
 * Get all missing translations for a language compared to the default language
 * @deprecated Use the feature-based system instead
 * @param lang The language to check
 * @param defaultLang The default language to compare against
 */
export function getMissingTranslations(lang: Lang, defaultLang: Lang = 'uz'): string[] {
  console.warn('getMissingTranslations is deprecated. Use the feature-based system instead.');
  return [];
}

/**
 * Utility to help migrate from flat to nested translations
 * @deprecated Use the feature-based system instead
 * @param flatTranslations Object with flat translation keys
 */
export function convertFlatToNested(flatTranslations: Record<string, string>): any {
  console.warn('convertFlatToNested is deprecated. Use the feature-based system instead.');
  return {};
}

import { getLangFromUrl } from '@/i18n/langUtils';
import { getHowWeWorkTranslations } from './index';
import type { Lang } from '@/i18n/langUtils';

/**
 * Example of how to use the howWeWork translations in a component
 * 
 * @example In an Astro component:
 * 
 * ```astro
 * ---
 * import { getLangFromUrl } from '@/i18n/langUtils';
 * import { getHowWeWorkTranslations } from '@/i18n/features/home/howWeWork';
 * 
 * const lang = getLangFromUrl(Astro.url);
 * const t = getHowWeWorkTranslations(lang);
 * ---
 * 
 * <h1>{t.title}</h1>
 * <p>{t.subtitle}</p>
 * 
 * <!-- Example of accessing nested step translations -->
 * <div>
 *   <h2>{t.steps.step1.title}</h2>
 *   <p>{t.steps.step1.description}</p>
 * </div>
 * ```
 */

// Example function that shows how to get translations for a specific language
export function getExampleTranslations(lang: Lang) {
  // Get translations for the specified language
  const t = getHowWeWorkTranslations(lang);
  
  // Return some example values to demonstrate usage
  return {
    title: t.title,
    subtitle: t.subtitle,
    firstStepTitle: t.steps.step1.title,
    firstStepDescription: t.steps.step1.description
  };
}

// Example usage with all three languages
export function demonstrateAllLanguages() {
  const languages: Lang[] = ['en', 'ru', 'uz'];
  
  // Log translations for each language
  const examples = languages.map(lang => ({
    lang,
    translations: getHowWeWorkTranslations(lang)
  }));
  
  return examples;
}

// If you need to use the translations in a vanilla JS context
export function getTranslationsForCurrentPage(url: URL) {
  const lang = getLangFromUrl(url);
  return getHowWeWorkTranslations(lang);
} 
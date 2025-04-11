import { getLangFromUrl } from '@/i18n/langUtils';
import { getComparisonTranslations } from './index';
import type { Lang } from '@/i18n/langUtils';

/**
 * Example of how to use the Comparison translations in a component
 * 
 * @example In an Astro component:
 * 
 * ```astro
 * ---
 * import { getLangFromUrl } from '@/i18n/langUtils';
 * import { getComparisonTranslations } from '@/i18n/features/home/comparison';
 * 
 * const lang = getLangFromUrl(Astro.url);
 * const t = getComparisonTranslations(lang);
 * ---
 * 
 * <section>
 *   <h2>{t.title}</h2>
 *   <p>{t.subtitle}</p>
 *   
 *   <!-- Category selector -->
 *   <div>
 *     <label>{t.selectCategory}</label>
 *     <select>
 *       <option value="education">{t.categories.education.title}</option>
 *       <option value="programs">{t.categories.programs.title}</option>
 *       <option value="infrastructure">{t.categories.infrastructure.title}</option>
 *       <option value="teachers">{t.categories.teachers.title}</option>
 *     </select>
 *   </div>
 *   
 *   <!-- Comparison table -->
 *   <div>
 *     <h3>{t.categories.education.title}</h3>
 *     
 *     <div>
 *       <h4>{t.countries.china}</h4>
 *       <ul>
 *         {t.categories.education.china.map(item => (
 *           <li>{item}</li>
 *         ))}
 *       </ul>
 *     </div>
 *     
 *     <div>
 *       <h4>{t.countries.uzbekistan}</h4>
 *       <ul>
 *         {t.categories.education.uzb.map(item => (
 *           <li>{item}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   </div>
 * </section>
 * ```
 */

// Example function that shows how to get translations for a specific language
export function getExampleTranslations(lang: Lang) {
  // Get translations for the specified language
  const t = getComparisonTranslations(lang);
  
  // Return a subset of translations to demonstrate usage
  return {
    title: t.title,
    subtitle: t.subtitle,
    educationTitle: t.categories.education.title,
    chinaEducation: t.categories.education.china,
    uzbEducation: t.categories.education.uzb,
    chinaLabel: t.countries.china,
    uzbLabel: t.countries.uzbekistan
  };
}

// Example usage with all three languages
export function demonstrateAllLanguages() {
  const languages: Lang[] = ['en', 'ru', 'uz'];
  
  // Get translations for each language
  const examples = languages.map(lang => ({
    lang,
    translations: getComparisonTranslations(lang)
  }));
  
  return examples;
}

// If you need to use the translations in a vanilla JS context
export function getTranslationsForCurrentPage(url: URL) {
  const lang = getLangFromUrl(url);
  return getComparisonTranslations(lang);
}
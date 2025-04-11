import { getLangFromUrl } from '@/i18n/langUtils';
import { getTestimonialsTranslations } from './index';
import type { Lang } from '@/i18n/langUtils';

/**
 * Example of how to use the testimonials translations in a component
 * 
 * @example In an Astro component:
 * 
 * ```astro
 * ---
 * import { getLangFromUrl } from '@/i18n/langUtils';
 * import { getTestimonialsTranslations } from '@/i18n/features/shared/testimonials';
 * import SectionHeader from '@/components/ui/SectionHeader.astro';
 * 
 * const lang = getLangFromUrl(Astro.url);
 * const t = getTestimonialsTranslations(lang);
 * ---
 * 
 * <!-- For the main testimonials section on the home page -->
 * <section>
 *   <SectionHeader 
 *     title={t.main.title}
 *     subtitle={t.main.subtitle}
 *   />
 *   
 *   <!-- Testimonials cards would go here -->
 * </section>
 * 
 * <!-- For the testimonials page -->
 * <section>
 *   <h1>{t.page.title}</h1>
 *   <p>{t.page.subtitle}</p>
 *   
 *   <!-- Testimonials content -->
 *   
 *   <!-- CTA section -->
 *   <div>
 *     <h2>{t.page.cta.title}</h2>
 *     <button>{t.page.cta.button}</button>
 *   </div>
 * </section>
 * 
 * <!-- For statistics section -->
 * <div>
 *   <div>
 *     <span>{t.stats.satisfiedClients.value}</span>
 *     <p>{t.stats.satisfiedClients.label}</p>
 *   </div>
 *   
 *   <div>
 *     <span>{t.stats.successfulEnrollments.value}</span>
 *     <p>{t.stats.successfulEnrollments.label}</p>
 *   </div>
 *   
 *   <div>
 *     <span>{t.stats.partnerUniversities.value}</span>
 *     <p>{t.stats.partnerUniversities.label}</p>
 *   </div>
 * </div>
 * ```
 */

// Example function that shows how to get translations for a specific language
export function getExampleTranslations(lang: Lang) {
  // Get translations for the specified language
  const t = getTestimonialsTranslations(lang);
  
  // Return a subset of translations to demonstrate usage
  return {
    mainTitle: t.main.title,
    mainSubtitle: t.main.subtitle,
    pageTitle: t.page.title,
    pageSubtitle: t.page.subtitle,
    ctaTitle: t.page.cta.title,
    ctaButton: t.page.cta.button,
    satisfiedClientsValue: t.stats.satisfiedClients.value,
    satisfiedClientsLabel: t.stats.satisfiedClients.label
  };
}

// Example usage with all three languages
export function demonstrateAllLanguages() {
  const languages: Lang[] = ['en', 'ru', 'uz'];
  
  // Get translations for each language
  const examples = languages.map(lang => ({
    lang,
    translations: getTestimonialsTranslations(lang)
  }));
  
  return examples;
}

// If you need to use the translations in a vanilla JS context
export function getTranslationsForCurrentPage(url: URL) {
  const lang = getLangFromUrl(url);
  return getTestimonialsTranslations(lang);
} 
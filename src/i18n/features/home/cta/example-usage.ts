import { getLangFromUrl } from '@/i18n/langUtils';
import { getCTATranslations } from './index';
import type { Lang } from '@/i18n/langUtils';

/**
 * Example of how to use the CTA translations in a component
 * 
 * @example In an Astro component:
 * 
 * ```astro
 * ---
 * import { getLangFromUrl } from '@/i18n/langUtils';
 * import { getCTATranslations } from '@/i18n/features/home/cta';
 * import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-astro';
 * 
 * const lang = getLangFromUrl(Astro.url);
 * const t = getCTATranslations(lang);
 * ---
 * 
 * <div class="cta-section">
 *   <a href="#contact" class="flex items-center space-x-2">
 *     <span>{t.contactUs}</span>
 *     <ArrowRight class="w-5 h-5" />
 *   </a>
 *   <div class="contact-methods flex space-x-4">
 *     <a href="tel:+1234567890" class="flex items-center">
 *       <Phone class="w-5 h-5 mr-2" />
 *       <span>{t.callUs}</span>
 *     </a>
 *     <a href="mailto:info@example.com" class="flex items-center">
 *       <Mail class="w-5 h-5 mr-2" />
 *       <span>{t.emailUs}</span>
 *     </a>
 *     <a href="https://wa.me/1234567890" class="flex items-center">
 *       <MessageSquare class="w-5 h-5 mr-2" />
 *       <span>{t.whatsApp}</span>
 *     </a>
 *   </div>
 * </div>
 * ```
 */

// Example function that shows how to get translations for a specific language
export function getExampleTranslations(lang: Lang) {
  // Get translations for the specified language
  const t = getCTATranslations(lang);
  
  // Return all translations to demonstrate usage
  return {
    contactUs: t.contactUs,
    callUs: t.callUs,
    emailUs: t.emailUs,
    whatsApp: t.whatsApp
  };
}

// Example usage with all three languages
export function demonstrateAllLanguages() {
  const languages: Lang[] = ['en', 'ru', 'uz'];
  
  // Log translations for each language
  const examples = languages.map(lang => ({
    lang,
    translations: getCTATranslations(lang)
  }));
  
  return examples;
}

// If you need to use the translations in a vanilla JS context
export function getTranslationsForCurrentPage(url: URL) {
  const lang = getLangFromUrl(url);
  return getCTATranslations(lang);
} 
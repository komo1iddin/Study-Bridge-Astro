import type { Lang } from './langUtils';
import { defaultLang, languages } from './langUtils';

const LANG_PREF_KEY = 'user-lang-preference';

/**
 * Save the user's language preference to local storage
 * @param lang The language preference to save
 */
export function saveLanguagePreference(lang: Lang): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LANG_PREF_KEY, lang);
    }
  } catch (error) {
    console.error('Failed to save language preference:', error);
  }
}

/**
 * Get the user's saved language preference
 * @returns The saved language or undefined if not found
 */
export function getSavedLanguagePreference(): Lang | undefined {
  try {
    if (typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem(LANG_PREF_KEY) as Lang | null;
      
      if (savedLang && languages.includes(savedLang)) {
        return savedLang;
      }
    }
  } catch (error) {
    console.error('Failed to retrieve language preference:', error);
  }
  
  return undefined;
}

/**
 * Detect the user's preferred language from browser settings
 * @returns The detected language or the default language
 */
export function detectBrowserLanguage(): Lang {
  try {
    if (typeof navigator !== 'undefined') {
      // Get language from navigator
      const browserLangs = navigator.languages || 
        [navigator.language || (navigator as any).userLanguage || defaultLang];
      
      // Try to match the browser languages with our supported languages
      for (const browserLang of browserLangs) {
        const langCode = browserLang.substring(0, 2).toLowerCase();
        
        if (languages.includes(langCode as Lang)) {
          return langCode as Lang;
        }
      }
    }
  } catch (error) {
    console.error('Failed to detect browser language:', error);
  }
  
  return defaultLang;
}

/**
 * Get the user's preferred language, with this priority:
 * 1. Saved preference in localStorage
 * 2. Browser language settings
 * 3. Default language
 * @returns The best language to use for this user
 */
export function getUserPreferredLanguage(): Lang {
  return getSavedLanguagePreference() || detectBrowserLanguage() || defaultLang;
}

/**
 * Set up event listeners to save language preferences when the user changes language
 */
export function setupLanguageChangeListeners(): void {
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const langLink = target.closest('a[hreflang]');
      
      if (langLink) {
        const lang = langLink.getAttribute('hreflang');
        if (lang && languages.includes(lang as Lang)) {
          saveLanguagePreference(lang as Lang);
        }
      }
    });
  }
} 
/**
 * Types for LanguageSelector UI component translations
 */
export interface LanguageSelectorTranslations {
  /**
   * Button aria-label for the language dropdown toggle
   */
  selectLanguage: string;
  
  /**
   * Language display names (shown in the UI)
   */
  languageNames: {
    uz: string;
    ru: string;
    en: string;
  };
  
  /**
   * Keyboard shortcuts for switching languages
   */
  shortcuts?: {
    uz: string;
    ru: string;
    en: string;
  };
  
  /**
   * Accessibility labels
   */
  aria?: {
    /**
     * Aria label for the language menu
     */
    languageMenu?: string;
    
    /**
     * Aria label for current language indicator
     */
    current?: string;
  };
} 
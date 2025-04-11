/**
 * Types for FAQ section translations
 */
export interface FAQTranslations {
  /**
   * Title for the FAQ section
   */
  title: string;
  
  /**
   * Subtitle for the FAQ section
   */
  subtitle: string;
  
  /**
   * Text shown when a user's question is not found
   */
  notFoundQuestion: string;
  
  /**
   * Text for the button to ask a question
   */
  askQuestion: string;
  
  /**
   * Search related translations
   */
  search?: {
    /**
     * Placeholder text for search input
     */
    placeholder: string;
    
    /**
     * Text shown when no results are found
     */
    noResults: string;
  };
  
  /**
   * FAQ categories
   */
  categories?: {
    admission: string;
    documents: string;
    study: string;
    life: string;
    finance: string;
    scholarships: string;
    transfer: string;
    language: string;
  };
  
  /**
   * Common action texts
   */
  common?: {
    readMore: string;
    showAll: string;
    hideAll: string;
    relatedQuestions: string;
  };
  
  /**
   * Guides section
   */
  guides?: {
    title: string;
  };
  
  /**
   * Popular questions title
   */
  popularQuestions?: string;
  
  /**
   * Contact us text
   */
  contactUs?: string;
  
  /**
   * Meta information for SEO
   */
  meta?: {
    title: string;
    description: string;
  };
  
  /**
   * FAQ wizard translations
   */
  wizard?: {
    title: string;
    description: string;
    step1: string;
    step2: string;
    step3: string;
    categoriesGroup: string;
    backButton: string;
    nextButton: string;
    restartButton: string;
  };
  
  /**
   * Page title
   */
  pageTitle?: string;
} 
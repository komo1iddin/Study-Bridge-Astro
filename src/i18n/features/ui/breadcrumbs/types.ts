/**
 * Types for Breadcrumbs UI component translations
 */
export interface BreadcrumbsTranslations {
  /**
   * Home text for breadcrumb
   */
  home: string;
  
  /**
   * Text for aria-label of the navigation
   */
  ariaLabel?: string;
  
  /**
   * Common pages translations that might be used in breadcrumbs
   */
  common?: {
    universities: string;
    programs: string;
    about: string;
    contact: string;
    blog: string;
    faq: string;
  };
} 
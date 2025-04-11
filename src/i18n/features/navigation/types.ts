/**
 * Types for Navigation component translations
 */
export interface NavigationTranslations {
  home: string;
  about: {
    _value: string; // Top-level "About" menu item
    us: string; // "About Us" sub-menu
    reviews: string; // "Reviews" sub-menu
    studentPath: string; // "Student Path" sub-menu
    contacts: string; // "Contacts" sub-menu
    faq: string; // "FAQ" sub-menu
  };
  programs: string;
  universities: string;
  grants: string;
  blog: string;
  menu: string;
  openMenu: string;
  closeMenu: string;
  selectLanguage: string;
  submitApplication: string;
  
  // Language names
  languages: {
    ru: string;
    uz: string;
    en: string;
  };
} 
export interface ComparisonTranslations {
  title: string;
  subtitle: string;
  selectCategory: string;
  compareAnalysis: string;
  readArticle: string;
  dataFrom: string;
  categories: {
    education: {
      title: string;
      china: string[];
      uzb: string[];
    };
    programs: {
      title: string;
      china: string[];
      uzb: string[];
    };
    infrastructure: {
      title: string;
      china: string[];
      uzb: string[];
    };
    teachers: {
      title: string;
      china: string[];
      uzb: string[];
    };
  };
  countries: {
    china: string;
    uzbekistan: string;
  };
} 
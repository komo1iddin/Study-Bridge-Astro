import type { ProgramsTranslations } from './types';

export const en: ProgramsTranslations = {
  main: {
    title: "Our Programs",
    subtitle: "Discover educational opportunities that will help you achieve your career goals",
  },
  categories: {
    bachelor: {
      title: "Bachelor's Programs",
      description: "Professional education programs that meet international standards",
      duration: "4 years",
      benefits: [
        "Guaranteed employment assistance",
        "Scholarship opportunities",
        "International certificates"
      ]
    },
    master: {
      title: "Master's Programs",
      description: "Advanced program for training highly qualified specialists",
      duration: "2 years",
      benefits: [
        "Research opportunities",
        "Participation in international conferences",
        "Highly qualified faculty"
      ]
    },
    language: {
      title: "Language Courses",
      description: "Intensive courses to improve your HSK level and learn Chinese at a professional level",
      duration: "6 months",
      benefits: [
        "Guaranteed results",
        "Small groups",
        "Native-speaking teachers"
      ]
    }
  },
  filter: {
    title: "Filter Programs",
    language: "Language",
    duration: "Duration",
    priceRange: "Price Range",
    clearFilters: "Clear Filters"
  },
  labels: {
    duration: "Duration",
    benefits: "Program Benefits",
    price: "Program Price",
    originalPrice: "Original Price",
    discountedPrice: "Discounted Price",
    deadline: "Application Deadline",
    programs: "Programs",
    viewAll: "View All Programs",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    noResults: "No programs found matching your criteria"
  },
  common: {
    discount: "Discount",
    discountedUntil: "Discounted until"
  }
}; 
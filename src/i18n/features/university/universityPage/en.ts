import type { UniversityPageTranslations } from './types';

export const universityPageEn: UniversityPageTranslations = {
  breadcrumb: {
    home: 'Home',
    universities: 'Universities'
  },
  loading: 'Loading...',
  filters: {
    title: 'Filters',
    reset: 'Reset',
    quickFilters: 'Quick Filters',
    featured: 'Featured universities only',
    educationType: {
      title: 'Education Type',
      placeholder: 'Select education type',
      all: 'All types',
      bachelor: 'Bachelor',
      master: 'Master\'s',
      language: 'Language Course',
      program: '1+2 Program'
    },
    location: {
      title: 'Location',
      placeholder: 'Select city',
      all: 'All cities'
    },
    ranking: {
      title: 'University Ranking',
      placeholder: 'Select ranking range',
      all: 'All rankings',
      top5: 'Top 5',
      top10: '6-10',
      top20: '11-20',
      other: '21+'
    },
    grants: {
      title: 'Grant Opportunities',
      placeholder: 'Select grant status',
      all: 'All',
      available: 'Available',
      notAvailable: 'Not Available'
    }
  },
  card: {
    viewDetails: 'View Details',
    founded: 'Founded',
    students: 'Students',
    featured: 'Featured',
    grantsAvailable: 'Grants Available',
    rank: 'Rank #{rank}'
  },
  list: {
    title: 'Universities',
    featuredUniversities: 'Featured Universities',
    showing: 'Showing {current} of {total} universities',
    noResults: 'No universities found matching your filters',
    pagination: {
      prev: 'Previous',
      next: 'Next'
    }
  },
  infoCard: {
    title: 'Education in China',
    description: 'China has become one of the most popular educational destinations for international students, offering world-class education at affordable prices.',
    stats: {
      universities: {
        value: '2,900+ Universities',
        description: 'Across all provinces'
      },
      programs: {
        value: '500,000+ Programs',
        description: 'From Bachelor\'s to Doctoral degrees'
      },
      students: {
        value: '500,000+ International students',
        description: 'From 200+ countries'
      },
      scholarships: {
        value: '30,000+ Scholarships',
        description: 'Government and university-funded'
      }
    }
  },
  mobileFilters: {
    title: 'Filters',
    close: 'Close',
    open: 'Filter'
  }
}; 
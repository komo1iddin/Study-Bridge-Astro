export interface UniversityTabTranslations {
  overview: string;
  programs: string;
  admission: string;
  facilities: string;
  images: string;
  dorms: string;
  faq: string;
}

export interface UniversityStatisticsTranslations {
  title: string;
  internationalStudents: string;
  acceptanceRate: string;
  graduationRate: string;
  facultyStudentRatio: string;
}

export interface UniversityApplicationTranslations {
  title: string;
  subtitle: string;
  deadline: string;
  processingTime: string;
  applicationFee: string;
  applyButton: string;
  moreInfo: string;
}

export interface UniversityContactTranslations {
  title: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  visitWebsite: string;
}

export interface UniversityBadgeTranslations {
  featured: string;
  grantsAvailable: string;
  rank: string;
}

export interface UniversityDetailTranslations {
  breadcrumb: {
    home: string;
    universities: string;
  };
  viewGallery: string;
  tabs: UniversityTabTranslations;
  statistics: UniversityStatisticsTranslations;
  application: UniversityApplicationTranslations;
  contact: UniversityContactTranslations;
  badges: UniversityBadgeTranslations;
  loadingText: string;
  selectSection: string;
} 
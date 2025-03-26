import type { University, UniversityYaml, I18nContent } from '../data/models/University';
import type { Lang } from '../i18n/langUtils';
import type { UniversityFeatureItem } from '../components/features/university/UniversityFeature/types';

/**
 * Parse location string into city and country
 */
function parseLocation(location?: string): { city: string; country: string } {
  if (!location) return { city: '', country: '' };
  
  const parts = location.split(',').map(part => part.trim());
  return {
    city: parts[0] || '',
    country: parts[1] || 'China'
  };
}

/**
 * Get default tuition range
 */
function getDefaultTuitionRange(): { min: number; max: number; currency: string } {
  return {
    min: 0,
    max: 0,
    currency: 'USD'
  };
}

/**
 * Converts data from Astro collection to University object
 */
export function convertEntryToUniversity(entry: any, lang: Lang): University {
  const { id, data } = entry;
  
  // Extract localized data
  const name = typeof data.name === 'string' ? data.name : data.name[lang] || data.name.en;
  const students = typeof data.students === 'string' ? data.students : data.students?.[lang] || data.students?.en || '';
  
  // Use faculties instead of fields
  const faculties = Array.isArray(data.faculties) 
    ? data.faculties 
    : data.faculties?.[lang] || data.faculties?.en || [];
  
  // Process location
  const locationObj = parseLocation(data.location);
  
  // Extract description
  const description = typeof data.description === 'string' ? 
    data.description : 
    data.description?.[lang] || data.description?.en || '';
  
  return {
    id,
    name,
    city: locationObj.city,
    ranking: data.rating || 0,
    students,
    faculties,
    priceRange: data.priceRange || '',
    image: data.image || '',
    logoImage: data.logo,
    isTopUniversity: data.featured || false,
    location: locationObj,
    price: {
      amount: data.annualFee || 0,
      currency: 'USD'
    },
    tuitionRange: getDefaultTuitionRange(),
    programs: data.programs || [],
    established: data.established,
    hasGrants: false,
    featured: false,
    foundedYear: 0,
    internationalStudents: 0,
    studentsCount: 0,
    features: [],
    images: {
      main: data.image || '',
      gallery: []
    },
    description: description,
    logo: data.logo || '/placeholder.svg'
  };
}

export function convertYamlToUniversity(yamlData: UniversityYaml, id: string, lang: Lang): University {
  // Extract city from location (e.g., "Beijing, China" -> "Beijing")
  const locationObj = parseLocation(yamlData.location);
  const city = locationObj.city;
  
  // Handle multilingual properties with null/undefined checks
  const name = yamlData.name ? (yamlData.name[lang] || yamlData.name.en || '') : '';
  
  // Handle students field which may be a string, multilingual object, or derived from studentsCount
  let students = '';
  if (yamlData.students) {
    students = typeof yamlData.students === 'string' ? 
      yamlData.students : 
      yamlData.students[lang] || yamlData.students.en || '';
  } else if (yamlData.studentsCount) {
    students = `${yamlData.studentsCount}+`;
  }
  
  // Handle description which may be a string or multilingual object
  let description = '';
  if (yamlData.description) {
    description = typeof yamlData.description === 'string' ? 
      yamlData.description : 
      yamlData.description[lang] || yamlData.description.en || '';
  }
  
  // Handle faculties/fields which may be arrays or multilingual objects
  const faculties = Array.isArray(yamlData.faculties) ? 
    yamlData.faculties : 
    yamlData.faculties?.[lang] || yamlData.faculties?.en || [];
  
  // Use either ranking or rating, whichever is available
  const ranking = yamlData.ranking || yamlData.rating || 0;
  
  // Use either foundedYear or established, whichever is available
  const foundedYear = yamlData.foundedYear || yamlData.established || 0;
  
  // Handle programs array if available
  const programs = yamlData.programs || [];
  
  // Handle annualFee which may be used for price calculations
  const annualFee = yamlData.annualFee || 0;
  
  return {
    id,
    name,
    location: locationObj,
    city,
    description,
    ranking,
    rating: ranking, // Ensure both rating and ranking are populated
    foundedYear,
    established: foundedYear,
    studentsCount: yamlData.studentsCount || 0,
    internationalStudents: yamlData.internationalStudents || 0,
    students,
    faculties,
    fields: faculties, // Ensure both faculties and fields are populated
    programs,
    hasGrants: yamlData.grants?.available || yamlData.hasGrants || false,
    featured: yamlData.featured || false,
    isTopUniversity: yamlData.featured || false, // For compatibility
    logo: yamlData.logo || "/placeholder.svg",
    logoImage: yamlData.logo || "/placeholder.svg", // For compatibility
    image: yamlData.image || "/placeholder.svg",
    priceRange: yamlData.priceRange || `${annualFee} - ${annualFee * 2}`,
    price: {
      amount: annualFee,
      currency: 'USD'
    },
    tuitionRange: {
      min: annualFee,
      max: annualFee * 2,
      currency: 'USD'
    },
    careerOpportunities: yamlData.careerOpportunities || {
      companies: [],
      salaryRanges: []
    },
    costs: yamlData.costs || {
      tuition: [],
      additional: []
    },
    scholarships: yamlData.scholarships || [],
    features: [],
    images: {
      main: yamlData.image || "/placeholder.svg",
      gallery: []
    },
    educationType: yamlData.educationType || [],
    programTypes: yamlData.programTypes || []
  };
}

/**
 * Convert YAML university data to UniversityFeatureItem format for the featured universities component
 */
export function convertYamlToUniversityFeatureItem(yamlData: UniversityYaml, id: string, lang: Lang): UniversityFeatureItem {
  // Extract city from location (e.g., "Beijing, China" -> "Beijing")
  const city = parseLocation(yamlData.location).city;
  
  // Convert faculties array based on language
  const faculties = Array.isArray(yamlData.faculties) 
    ? yamlData.faculties 
    : yamlData.faculties?.[lang] || yamlData.faculties?.en || [];
  
  // Format students count as string
  const students = yamlData.studentsCount ? `${yamlData.studentsCount}+` : 
                  (typeof yamlData.students === 'string' ? yamlData.students : 
                   yamlData.students?.[lang] || yamlData.students?.en || '');
  
  // Safely access name with null/undefined check
  const name = yamlData.name ? (yamlData.name[lang] || yamlData.name.en || '') : '';
  
  return {
    id: parseInt(id.replace(/\D/g, '')) || Math.floor(Math.random() * 1000),
    name,
    location: city,
    rating: yamlData.ranking || yamlData.rating || 0,
    students: students,
    faculties: faculties,
    image: yamlData.image || "/placeholder.svg",
    logo: yamlData.logo || "/placeholder.svg",
    established: yamlData.foundedYear || yamlData.established || 0
  };
}

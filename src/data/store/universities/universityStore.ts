import { atom } from 'nanostores';
import type { 
  University as TypeUniversity, 
  UniversityFilter, 
  Lang
} from '../../../types/university';

import { localizeUniversities, localizeUniversity } from '../../../types/university';
import { universities as mockUniversitiesI18n } from '../../mock/universities';

export const $universities = atom<TypeUniversity[]>([]);
export const $universityFilter = atom<UniversityFilter>({});
export const $currentLang = atom<Lang>('uz');

export const universityStore = {
  async loadUniversities(filter?: UniversityFilter) {
    const currentLang = $currentLang.get();
    
    let localizedUniversities = localizeUniversities(mockUniversitiesI18n, currentLang);
    
    if (filter) {
      if (filter.location) {
        localizedUniversities = localizedUniversities.filter(u => {
          const searchLocation = filter.location?.toLowerCase() || '';
          const locationString = `${u.location.city.toLowerCase()} ${u.location.country.toLowerCase()}`;
          return locationString.includes(searchLocation);
        });
      }
      if (filter.rankingRange) {
        const { min, max } = filter.rankingRange;
        localizedUniversities = localizedUniversities.filter(u => 
          u.rating >= min && u.rating <= max
        );
      }
      if (filter.programType) {
        localizedUniversities = localizedUniversities.filter(u => 
          filter.programType && u.programs.includes(filter.programType)
        );
      }
      $universityFilter.set(filter);
    }

    $universities.set(localizedUniversities);
  },

  async getUniversityById(id: string) {
    const currentLang = $currentLang.get();
    
    const university = mockUniversitiesI18n.find(u => u.id === id);
    if (!university) return null;
    
    return localizeUniversity(university, currentLang);
  },

  clearFilter() {
    $universityFilter.set({});
    this.loadUniversities();
  },
  
  setLanguage(lang: Lang) {
    $currentLang.set(lang);
    this.loadUniversities($universityFilter.get());
  }
};
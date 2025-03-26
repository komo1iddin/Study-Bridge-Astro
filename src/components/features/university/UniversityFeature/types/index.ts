import type { Lang } from '@/i18n/langUtils'

export interface UniversityFeatureItem {
  id: number
  name: string
  location: string
  rating: number
  students: string
  faculties: string[]
  image: string
  logo: string
  established: number
  slug?: string
}

export interface UniversityCardProps {
  lang: Lang
  universities: UniversityFeatureItem[]
  translations: {
    leadingUniversities: string
    discoverText: string
    students: string
    faculties: string
    moreInfo: string
    swipeToSlide: string
    viewAll: string
    allUniversities?: string
  }
}

export interface UniversityCardItemProps {
  university: UniversityFeatureItem
  translations: UniversityCardProps['translations']
  lang: Lang
}

// For backward compatibility
export interface University extends UniversityFeatureItem {}
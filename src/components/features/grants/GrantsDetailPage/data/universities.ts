export interface University {
  id: string
  name: string
  location: string
  rating: number
  logoUrl?: string
}

export interface UniversitiesData {
  id: string
  title: string
  description: string
  universities: University[]
  viewAllButtonText: string
}

export const konfutsiyUniversitiesData: UniversitiesData = {
  id: "konfutsiy-universities",
  title: "Universitetlar",
  description: "Konfutsiy instituti granti bilan o'qish mumkin bo'lgan universitetlar",
  universities: [
    {
      id: "beijing",
      name: "Pekin Universiteti",
      location: "Pekin, Xitoy",
      rating: 5,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "shanghai",
      name: "Shanxay Universiteti",
      location: "Shanxay, Xitoy",
      rating: 4,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "guangzhou",
      name: "Guangzhou Universiteti",
      location: "Guangzhou, Xitoy",
      rating: 4,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "xian",
      name: "Xian Universiteti",
      location: "Xian, Xitoy",
      rating: 4,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
  ],
  viewAllButtonText: "Barcha universitetlarni ko'rish",
}

export const erasmusUniversitiesData: UniversitiesData = {
  id: "erasmus-universities",
  title: "Hamkor universitetlar",
  description: "Erasmus+ dasturi doirasida o'qish mumkin bo'lgan universitetlar",
  universities: [
    {
      id: "sorbonne",
      name: "Sorbonne Universiteti",
      location: "Parij, Fransiya",
      rating: 5,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "humboldt",
      name: "Humboldt Universiteti",
      location: "Berlin, Germaniya",
      rating: 5,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "bologna",
      name: "Bolonya Universiteti",
      location: "Bolonya, Italiya",
      rating: 4,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "barcelona",
      name: "Barselona Universiteti",
      location: "Barselona, Ispaniya",
      rating: 4,
      logoUrl: "/placeholder.svg?height=60&width=60",
    },
  ],
  viewAllButtonText: "Barcha universitetlarni ko'rish",
}

// Map to store all universities data by scholarship ID
export const universitiesDataMap: Record<string, UniversitiesData> = {
  "konfutsiy-2024": konfutsiyUniversitiesData,
  "erasmus-2024": erasmusUniversitiesData,
}


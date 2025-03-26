
import { useState, useEffect } from "react"
import { Home } from "lucide-react"
import type { University } from '@/types/university'
import type { Lang } from '@/i18n/langUtils'
import "./styles/universities.css"

// Import section components
import HeaderCard from "./components/header-card"
import OverviewSection from "./components/overview-section"
import ProgramsSection from "./components/programs-section"
import AdmissionSection from "./components/admission-section"
import FacilitiesSection from "./components/facilities-section"
import ImagesSection from "./components/images-section"
import DormsSection from "./components/dorms-section"
import FAQSection from "./components/faq-section"
import BackgroundDecoration from "./components/background-decoration"

// Import sidebar components
import ApplicationCard from "./components/sidebar/application-card"
import StatsCard from "./components/sidebar/stats-card"
import ContactCard from "../../grants/GrantsDetailPage/components/sidebar/contact-card"

// Default university data
const defaultUniversity: University = {
  id: "default",
  name: "University Information",
  description: {
    uz: "Ma'lumot mavjud emas",
    ru: "Информация недоступна",
    en: "University details are currently unavailable"
  },
  city: "Unknown Location",
  ranking: 0,
  students: {
    uz: "Ma'lumot mavjud emas",
    ru: "Нет данных",
    en: "N/A"
  },
  educationType: [],
  programs: {
    uz: [],
    ru: [],
    en: []
  },
  image: "/placeholder.svg",
  logo: "/placeholder.svg",
  featured: false,
  hasGrants: false
}

interface UniversityDetailPageProps {
  university?: University
  lang?: Lang
}

const LoadingState = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative">
    <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-200" />
          <div className="h-4 w-48 bg-blue-200 rounded" />
          <div className="h-3 w-32 bg-blue-100 rounded" />
        </div>
      </div>
    </div>
  </div>
)

const TabContent = ({ 
  activeTab, 
  university, 
  lang 
}: { 
  activeTab: string
  university: University
  lang: Lang 
}) => {
  const tabComponents = {
    overview: <OverviewSection university={university} lang={lang} />,
    programs: <ProgramsSection university={university} lang={lang} />,
    admission: <AdmissionSection university={university} lang={lang} />,
    facilities: <FacilitiesSection university={university} lang={lang} />,
    images: <ImagesSection university={university} lang={lang} />,
    dorms: <DormsSection university={university} lang={lang} />,
    faq: <FAQSection university={university} lang={lang} />
  }

  return tabComponents[activeTab as keyof typeof tabComponents] || null
}

export default function UniversityDetailPage({
  university = defaultUniversity,
  lang = "en",
}: UniversityDetailPageProps) {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    setIsLoading(false)
  }, [])

  const handleTabChange = (value: string) => {
    if (!mounted) return
    setActiveTab(value)
  }

  if (!mounted || isLoading) {
    return <LoadingState />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative">
      <BackgroundDecoration />

      <div className="container mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-2">
          <Home className="h-3.5 w-3.5 flex-shrink-0" />
          <span>/</span>
          <span>Universities</span>
          <span>/</span>
          <span className="text-slate-900 font-medium">{university.name}</span>
        </div>

        <main className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            <HeaderCard 
              university={university} 
              activeTab={activeTab} 
              onTabChange={handleTabChange} 
              lang={lang}
            />

            <TabContent 
              activeTab={activeTab} 
              university={university} 
              lang={lang} 
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <ApplicationCard university={university} lang={lang} />
            <StatsCard university={university} lang={lang} />
            <ContactCard university={university} lang={lang} />
          </div>
        </main>
      </div>
    </div>
  )
}
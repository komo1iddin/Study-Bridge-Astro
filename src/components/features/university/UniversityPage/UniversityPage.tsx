
import { useState, useEffect } from "react"
import { Home } from "lucide-react"
import type { Lang } from '@/i18n/langUtils'
import type { Filters, University } from "./lib/data"
import { DEFAULT_FILTERS } from "./lib/constants"

import "./styles/universitiesPage.css"
import BackgroundDecoration from "./components/background-decoration"
import { UniversityList } from "./components/university-list"
import { MobileFilters } from "./components/mobile-filters"
import { Sidebar } from "./components/sidebar/sidebar"

export interface UniversityPageProps {
  universities?: University[]
  cities?: string[]
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

const Breadcrumb = () => (
  <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
    <Home className="h-3.5 w-3.5" />
    <span>/</span>
    <span className="text-slate-900 font-medium">Universitetlar</span>
  </div>
)

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden">
    <BackgroundDecoration />
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  </div>
)

export default function UniversityPage({ 
  universities = [],
  cities = [],
  lang = "en" 
}: UniversityPageProps) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const resetFilters = () => setFilters(DEFAULT_FILTERS)

  if (!mounted) {
    return <LoadingState />
  }

  return (
    <Layout>
      <Breadcrumb />
      
      {/* Mobile filters */}
      <div className="lg:hidden mb-6">
        <MobileFilters 
          filters={filters} 
          onChange={handleFilterChange} 
          onReset={resetFilters} 
        />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block sticky top-8 h-fit md:w-64 lg:w-72 xl:w-80">
          <Sidebar 
            filters={filters} 
            onChange={handleFilterChange} 
            onReset={resetFilters} 
          />
        </aside>
        
        {/* Main content */}
        <main className="flex-1 max-w-full lg:max-w-[calc(100%-20rem)] xl:max-w-[calc(100%-22rem)]">
          <UniversityList 
            universities={universities} 
            filters={filters} 
          />
        </main>
      </div>
    </Layout>
  )
}
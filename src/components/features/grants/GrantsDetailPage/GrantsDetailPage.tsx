import { useState, useEffect } from "react"
import { Home } from "lucide-react"
import "./styles/grants.css"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'
import BackgroundDecoration from "./components/background-decoration"
import HeaderCard from "./components/header-card"
import OverviewSection from "./components/overview-section"
import BenefitsSection from "./components/benefits-section"
import RequirementsSection from "./components/requirements-section"
import ProcessSection from "./components/process-section"
import FAQSection from "./components/faq-section"
import ApplicationCard from "./components/sidebar/application-card"
import ImportantDatesCard from "./components/sidebar/important-dates-card"
import ContactCard from "./components/sidebar/contact-card"
import StatsCard from "./components/sidebar/stats-card"

interface GrantsDetailPageProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function GrantsDetailPage({ grant, lang }: GrantsDetailPageProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview")
  
  // Effect for mounted state
  useEffect(() => {
    setMounted(true);
    return () => {};
  }, []);
  
  // Tab change handler
  const handleTabChange = (value: string) => {
    if (!mounted) return;
    setActiveTab(value);
  };

  // Don't render content until fully hydrated
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-blue-50 relative">
        <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-blue-50 relative">
      <BackgroundDecoration />

      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Home className="h-3.5 w-3.5" />
          <span>/</span>
          <span>Grantlar</span>
          <span>/</span>
          <span className="text-slate-900 font-medium">{grant.title}</span>
        </div>

        <main className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <HeaderCard 
              grant={grant}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            {activeTab === "overview" && (
              <OverviewSection
                grant={grant}
                lang={lang}
              />
            )}

            {activeTab === "benefits" && (
              <BenefitsSection 
                grant={grant}
                lang={lang}
              />
            )}

            {activeTab === "requirements" && (
              <RequirementsSection 
                grant={grant}
                lang={lang}
              />
            )}

            {activeTab === "process" && (
              <ProcessSection 
                grant={grant}
                lang={lang}
              />
            )}

            <FAQSection 
              grant={grant}
              lang={lang}
            />
          </div>

          <div className="space-y-6">
            <ApplicationCard 
              grant={grant}
              lang={lang}
            />
            <ImportantDatesCard 
              grant={grant}
              lang={lang}
            />
            <ContactCard 
              grant={grant}
              lang={lang}
            />
            <StatsCard 
              grant={grant}
              lang={lang}
            />
          </div>
        </main>
      </div>
    </div>
  )
}
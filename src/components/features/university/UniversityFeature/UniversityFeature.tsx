import { useState, useEffect, memo, useCallback } from "react"
import { Hand, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'

import ButtonView from '@/components/ui/react/button-view'
import SectionHeader from "@/components/ui/react/section-header"
import { UniversityCardSkeleton } from "./components/UniversityCardSkeleton"
import { UniversityCardItem } from "./components/UniversityCardItem"
import type { UniversityCardProps } from "./types"
import BackgroundDecoration from "./components/background-decoration"

const UniversityCard: React.FC<UniversityCardProps> = ({ lang, translations, universities }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [visibleUniversities, setVisibleUniversities] = useState(universities || [])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [swipeAnimationActive, setSwipeAnimationActive] = useState(true)

  const autoplay = useCallback(() => Autoplay({ delay: 4000, stopOnInteraction: true }), [])
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      inViewThreshold: 0.7,
      startIndex: 0,
      dragFree: false,
      containScroll: "trimSnaps",
      watchDrag: true,
      speed: 20,
    },
    [autoplay()]
  )

  // Check for mobile devices
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
      checkIfMobile()
      window.addEventListener('resize', checkIfMobile)
      return () => window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  // Load universities with delay for loading effect
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      try {
        setVisibleUniversities(universities || [])
        setLoading(false)
      } catch (err) {
        setError('Маълумотларни юклашда хатолик юз берди')
        setLoading(false)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [universities])

  // Embla carousel setup
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    emblaApi.scrollTo(0)
    
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Swipe animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSwipeAnimationActive(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    )
  }

  return (
    <div className="w-full bg-[#F5F9FB] py-12 relative">
      <BackgroundDecoration />
      <div className="w-full max-w-[1920px] mx-auto px-4 relative z-10">
        <SectionHeader 
          title={translations.leadingUniversities || "Leading universities"}
          subtitle={translations.discoverText || "Description"}
        />

        <div className="flex justify-end mb-4">
          <div className={`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${
            swipeAnimationActive ? "translate-x-2" : "-translate-x-2"
          }`}>
            <Hand className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">
              {translations.swipeToSlide || 'Swipe to Slide'}
            </span>
          </div>
        </div>

        <div className="relative mb-8 pb-6">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div 
                    key={`loading-skeleton-${index}`} 
                    className="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4"
                  >
                    <UniversityCardSkeleton />
                  </div>
                ))
              ) : visibleUniversities.length > 0 ? (
                visibleUniversities.map((university) => (
                  <div 
                    key={`university-${university.id}`} 
                    className="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4"
                  >
                    <UniversityCardItem 
                      university={university} 
                      translations={translations} 
                      lang={lang} 
                    />
                  </div>
                ))
              ) : (
                <div className="text-center py-10 w-full">
                  <p className="text-gray-500">No universities found</p>
                </div>
              )}
            </div>
          </div>

          {!isMobile && visibleUniversities.length > 0 && (
            <div className="absolute -bottom-2 left-4 flex items-center gap-2 z-10">
              <button 
                onClick={scrollPrev} 
                className="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white/90 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {visibleUniversities.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300" 
                style={{
                  width: `${100 / (visibleUniversities.length || 1)}%`,
                  transform: `translateX(${selectedIndex * 100}%)`,
                }}
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <ButtonView
            href={`/${lang}/universities`} 
            text={translations?.viewAll || "Barcha universitetlar"} 
            variant="desktop" 
            showOnMobile={false}
          />
          <ButtonView
            href={`/${lang}/universities`} 
            text={translations?.viewAll || "Barcha universitetlar"} 
            variant="mobile" 
            showOnDesktop={false}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(UniversityCard)
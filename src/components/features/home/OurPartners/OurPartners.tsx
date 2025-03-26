"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Hand, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'

import ButtonView from '@/components/ui/react/button-view'
import SectionHeader from "@/components/ui/react/section-header"
import { PartnerCardItem } from "./components/PartnerCardItem"
import BackgroundDecoration from "./components/background-decoration"
import { partners } from "./data/partners"

function OurPartners({ lang, translations }) {
  const [isMobile, setIsMobile] = useState(false)
  const [swipeAnimationActive, setSwipeAnimationActive] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true })
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: true,
      containScroll: "trimSnaps",
      watchDrag: true,
      speed: 20,
      startIndex: 0,
      breakpoints: {
        "(min-width: 320px)": { slidesToScroll: 1 },
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
        "(min-width: 1280px)": { slidesToScroll: 4 }
      }
    },
    [autoplay]
  )

  // Handle carousel selection
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Handle swipe animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSwipeAnimationActive(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Handle mobile detection
  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIfMobile()
    
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-full bg-[#F5F9FB] py-12 relative">
      <BackgroundDecoration />
      <div className="w-full max-w-[1920px] mx-auto px-4 relative z-10">
        <SectionHeader 
          title={translations.partnersTitle || "Our Partners"}
          subtitle={translations.partnersDescription || ""}
        />

        <div className="flex justify-end mb-4">
          <div 
            className={`flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full shadow-sm transition-transform duration-700 ${
              swipeAnimationActive ? "translate-x-2" : "-translate-x-2"
            }`}
          >
            <Hand className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">
              {translations.swipeToSlide || "Swipe to slide"}
            </span>
          </div>
        </div>

        <div className="relative mb-8 pb-6">
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing" 
            ref={emblaRef}
          >
            <div className="flex">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="min-w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px] px-2 pb-4"
                >
                  <PartnerCardItem partner={partner} />
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div className="absolute -bottom-2 left-4 hidden md:flex items-center gap-2 z-10">
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

        <div className="text-center mt-12">
          <ButtonView
            href={`/${lang}/partners`} 
            text={translations.viewAllPartners || "View All Partners"} 
            variant="desktop" 
            showOnMobile={false}
          />
          <ButtonView
            href={`/${lang}/partners`} 
            text={translations.viewAllPartners || "View All Partners"} 
            variant="mobile" 
            showOnDesktop={false}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(OurPartners)
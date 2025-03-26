"use client"
import { useMemo, useState, useEffect } from 'react'
import type { University, Filters } from "../lib/data"
import { UniversityCard } from "./university-card"
import { Button } from "@/components/ui/react/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface UniversityListProps {
  universities: University[]
  filters: Filters
}

const RANKING_RANGES = {
  '1-5': { min: 1, max: 5 },
  '6-10': { min: 6, max: 10 },
  '11-20': { min: 11, max: 20 },
  '21+': { min: 21, max: Infinity }
} as const

const ITEMS_PER_PAGE = 4;

export function UniversityList({ universities, filters }: UniversityListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      if (
        filters.educationType &&
        filters.educationType !== "all" &&
        Array.isArray(university.educationType) &&
        !university.educationType.includes(filters.educationType)
      ) {
        return false
      }

      if (filters.city && filters.city !== "all" && university.city !== filters.city) {
        return false
      }

      if (filters.hasGrants && filters.hasGrants !== "all") {
        const hasGrants = filters.hasGrants === "true"
        if (university.hasGrants !== hasGrants) return false
      }

      if (filters.ranking && filters.ranking !== "all") {
        const range = RANKING_RANGES[filters.ranking as keyof typeof RANKING_RANGES]
        if (range && (university.ranking < range.min || university.ranking > range.max)) {
          return false
        }
      }

      if (filters.featured === "true" && !university.featured) {
        return false
      }

      return true
    })
  }, [universities, filters])

  const sortedUniversities = useMemo(() => {
    return [...filteredUniversities].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return (a.ranking || 999) - (b.ranking || 999)
    })
  }, [filteredUniversities])

  const displayUniversities = useMemo(() => {
    return sortedUniversities // Show all universities
  }, [sortedUniversities])

  const paginatedUniversities = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    if (filters.featured === "true") {
      return sortedUniversities.filter(uni => uni.featured);
    }

    return displayUniversities.slice(startIndex, endIndex);
  }, [displayUniversities, currentPage, filters.featured, sortedUniversities]);

  const totalPages = Math.ceil(
    (filters.featured === "true" 
      ? sortedUniversities.filter(uni => uni.featured).length 
      : displayUniversities.length) 
    / ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (filteredUniversities.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
        <p className="text-muted-foreground">Sizning filterlaringizga mos universitetlar topilmadi</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-bold hidden sm:block">Universitetlar</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Ko'rsatilmoqda {Math.min((currentPage * ITEMS_PER_PAGE), filteredUniversities.length)} / {universities.length} universitet
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className="min-w-[2.5rem]"
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold sm:hidden">
          Universitetlar
        </h2>
        {filters.featured === "true" && (
          <h2 className="text-base sm:text-lg lg:text-xl font-medium">
            Tavsiya etilgan universitetlar
          </h2>
        )}
        <div className="flex flex-col gap-4 sm:gap-6">
          {paginatedUniversities.map((university) => (
            <div key={university.id} className="w-full">
              <UniversityCard university={university} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
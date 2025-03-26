"use client"

import { Filter } from "lucide-react"
import { Button } from "@/components/ui/react/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/react/sheet"
import { Sidebar } from "./sidebar/sidebar"
import { educationTypes, rankingRanges, type Filters } from "../lib/data"

interface MobileFiltersProps {
  filters: Filters
  onChange: (key: keyof Filters, value: string) => void
  onReset: () => void
  cities?: string[]
}

export function MobileFilters({ filters, onChange, onReset, cities = [] }: MobileFiltersProps) {
  return (
    <div className="flex items-center justify-between md:hidden">
      <h1 className="text-2xl font-bold">Universities</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <div className="py-4">
            <Sidebar filters={filters} onChange={onChange} onReset={onReset} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}


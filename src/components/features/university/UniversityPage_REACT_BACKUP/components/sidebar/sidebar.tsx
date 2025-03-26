"use client"

import { SidebarFilters } from "./filters"
import { InfoCard } from "./info-card"
import { educationTypes, rankingRanges, type Filters } from "../../lib/data"

// Shaharlar endi props orqali olinadi
interface SidebarProps {
  filters: Filters
  onChange: (key: keyof Filters, value: string) => void
  onReset: () => void
  cities?: string[]
}

export function Sidebar({ filters, onChange, onReset, cities = [] }: SidebarProps) {
  return (
    <div className="w-full space-y-6 md:w-72">
      <div className="rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
        <SidebarFilters filters={filters} onChange={onChange} onReset={onReset} />
      </div>

      <InfoCard />

      <div className="rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
        <h3 className="mb-2 text-sm font-medium text-slate-800">Need Help?</h3>
        <p className="mb-4 text-xs text-slate-600">
          Our education consultants can help you find the perfect university and program in China.
        </p>
        <div className="rounded-md bg-blue-50 p-3 text-center text-sm">
          <p className="font-medium text-blue-700">Contact Us</p>
          <p className="mt-1 text-xs text-blue-600">We'll guide you through the application process</p>
        </div>
      </div>
    </div>
  )
}


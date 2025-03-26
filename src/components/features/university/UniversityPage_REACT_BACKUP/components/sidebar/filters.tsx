
import { type Filters, educationTypes, cities, rankingRanges } from "../../lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/react/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/react/accordion"
import { Switch } from "@/components/ui/react/switch"
import { Label } from "@/components/ui/react/label"
import { Button } from "@/components/ui/react/button"
import { RotateCcw } from "lucide-react"

interface SidebarFiltersProps {
  filters: Filters
  onChange: (key: keyof Filters, value: string) => void
  onReset: () => void
}

// Выносим конфигурацию фильтров
const FILTER_SECTIONS = [
  {
    id: "education",
    title: "Ta'lim turi",
    placeholder: "Ta'lim turini tanlang",
    options: [
      { value: "all", label: "Barcha turlar" },
      ...educationTypes
    ],
    filterKey: "educationType" as keyof Filters
  },
  {
    id: "location",
    title: "Joylashuv",
    placeholder: "Shaharni tanlang",
    options: [
      { value: "all", label: "Barcha shaharlar" },
      ...cities.map(city => ({ value: city, label: city }))
    ],
    filterKey: "city" as keyof Filters
  },
  {
    id: "ranking",
    title: "Universitet reytingi",
    placeholder: "Reyting oralig'ini tanlang",
    options: [
      { value: "all", label: "Barcha reytinglar" },
      ...rankingRanges
    ],
    filterKey: "ranking" as keyof Filters
  },
  {
    id: "grants",
    title: "Grant imkoniyatlari",
    placeholder: "Grant holatini tanlang",
    options: [
      { value: "all", label: "Barchasi" },
      { value: "true", label: "Mavjud" },
      { value: "false", label: "Mavjud emas" }
    ],
    filterKey: "hasGrants" as keyof Filters
  }
]

// Компонент для переиспользуемого селекта
const FilterSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  id 
}: {
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string, label: string }>
  placeholder: string
  id: string
}) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger id={id} className="h-9">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map(({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

export function SidebarFilters({ filters, onChange, onReset }: SidebarFiltersProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filterlar</h3>
        <Button variant="ghost" size="sm" onClick={onReset} className="h-8 px-2 text-xs">
          <RotateCcw className="mr-1 h-3 w-3" />
          Qayta o'rnatish
        </Button>
      </div>

      <Accordion 
        type="multiple" 
        defaultValue={FILTER_SECTIONS.map(section => section.id)}
      >
        {FILTER_SECTIONS.map(section => (
          <AccordionItem key={section.id} value={section.id} className="border-b">
            <AccordionTrigger className="py-3 text-sm hover:no-underline">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-3">
              <FilterSelect
                id={section.id}
                value={filters[section.filterKey]}
                onChange={(value) => onChange(section.filterKey, value)}
                options={section.options}
                placeholder={section.placeholder}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="space-y-4 rounded-lg border bg-card p-4">
        <h3 className="text-sm font-medium">Tezkor filterlar</h3>
        <div className="flex items-center justify-between">
          <Label htmlFor="featured" className="text-sm">
            Faqat tavsiya etilgan universitetlar
          </Label>
          <Switch
            id="featured"
            checked={filters.featured === "true"}
            onCheckedChange={(checked) => onChange("featured", checked ? "true" : "all")}
          />
        </div>
      </div>
    </div>
  )
}
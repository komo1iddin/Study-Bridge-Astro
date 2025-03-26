import { Card, CardContent } from "@/components/ui/react/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/react/tabs"
import { GraduationCap, MapPin, Star, Users, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/react/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/react/select"
import type { HeaderCardProps } from "../types"

export default function HeaderCard({ university, activeTab, onTabChange, lang }: HeaderCardProps) {
  const description = typeof university.description === 'object' 
    ? university.description[lang] || university.description.en 
    : university.description;

  const students = typeof university.students === 'object'
    ? university.students[lang] || university.students.en
    : university.students;

  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "programs", label: "Programs" },
    { value: "admission", label: "Admission" },
    { value: "facilities", label: "Facilities" },
    { value: "images", label: "Images" },
    { value: "dorms", label: "Dorms" },
    { value: "faq", label: "FAQ" }
  ];

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-6 md:p-8 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {university.featured && (
              <Badge className="bg-amber-50 text-amber-700 border border-amber-200">
                Featured
              </Badge>
            )}
            {university.hasGrants && (
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200">
                Grants Available
              </Badge>
            )}
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
              Rank #{university.ranking || 'N/A'}
            </Badge>
          </div>

          <div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold">{university.name}</h1>
            <p className="text-white/80 mt-2 text-base">
              {description}
            </p>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3">
              {university.educationType && university.educationType.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {university.educationType.map((type) => (
                    <Badge 
                      key={type}
                      className="bg-indigo-50/10 text-white border border-white/20 text-xs"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 text-base">
              <div className="flex items-center gap-1">
                <Users className="h-5 w-5" />
                <span>{students}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-5 w-5" />
                <span>{university.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-0">
        {/* Mobile Tab Select */}
        <div className="md:hidden p-2 bg-slate-100">
          <Select value={activeTab} onValueChange={onTabChange}>
            <SelectTrigger className="w-full bg-white border-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none">
              <SelectValue placeholder="Select section" className="text-base" />
            </SelectTrigger>
            <SelectContent className="border-none shadow-md">
              {tabs.map(tab => (
                <SelectItem 
                  key={tab.value} 
                  value={tab.value}
                  className="text-base focus:bg-slate-50 cursor-pointer"
                >
                  {tab.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="grid grid-cols-7 bg-slate-100 rounded-none h-auto p-0">
              {tabs.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="py-3 rounded-none data-[state=active]:bg-white"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
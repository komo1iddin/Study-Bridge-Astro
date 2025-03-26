"use client"

import type { University } from "../lib/data"
import { educationTypes } from "../lib/data"
import { Button } from "@/components/ui/react/button"
import { Card } from "@/components/ui/react/card"
import { Badge } from "@/components/ui/react/badge"
import { Trophy, ArrowRight } from "lucide-react"

interface UniversityCardProps {
  university: University
}

export function UniversityCard({ university }: UniversityCardProps) {
  const educationTypeArray = Array.isArray(university.educationType) 
    ? university.educationType 
    : [];

  const handleViewDetails = () => {
    const currentPath = window.location.pathname;
    const langMatch = currentPath.match(/^\/(uz|ru|en)/);
    const lang = langMatch ? langMatch[1] : 'uz';
    const detailUrl = `/${lang}/universities/${university.id}`;
    
    // Use standard anchor navigation instead of JavaScript navigation
    window.location.href = detailUrl;
  };

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg w-full h-full flex flex-col">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side - Image */}
        <div className="relative w-full md:w-[280px] h-[200px] md:h-auto flex-shrink-0">
          <img 
            src={university.image || "/placeholder.svg"} 
            alt={university.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 z-10">
            <div className="bg-white p-2 rounded-full shadow-md flex items-center justify-center">
              <img 
                src={university.logo || "/placeholder.svg"} 
                alt={`${university.name} logo`}
                className="w-12 h-12 rounded-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Title and Featured Badge */}
            <div className="flex justify-between items-start gap-2 mb-3">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{university.name}</h3>
              {university.featured && (
                <Badge className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 text-xs whitespace-nowrap font-medium hover:bg-amber-50">
                  Tavsiya etilgan
                </Badge>
              )}
            </div>

            {/* Ranking and City Badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border border-blue-100">
                <Trophy className="w-3.5 h-3.5 mr-1" />
                #{university.ranking || 'N/A'}
              </Badge>
              <Badge variant="outline" className="bg-slate-50 text-slate-600 border border-slate-100">
                {university.city}
              </Badge>
            </div>

            {/* Description */}
            <div className="relative mb-4 h-[4.8rem] overflow-hidden">
              <p className="text-gray-600 text-sm">
                {university.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" 
                   style={{ 
                     background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)' 
                   }}>
              </div>
            </div>

            {/* Education Types and Grants Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {educationTypeArray.map((type) => (
                <Badge key={type} variant="outline" className="bg-indigo-50 text-indigo-600 border border-indigo-100 text-xs px-2 py-0.5 font-normal hover:bg-indigo-50">
                  {educationTypes.find((t) => t.value === type)?.label || type}
                </Badge>
              ))}
              {university.hasGrants && (
                <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2 py-0.5 font-normal hover:bg-emerald-50">
                  Grant mavjud
                </Badge>
              )}
            </div>
          </div>

          {/* Action Button */}
          <Button 
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto"
            onClick={handleViewDetails}
          >
            Batafsil ma'lumot
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

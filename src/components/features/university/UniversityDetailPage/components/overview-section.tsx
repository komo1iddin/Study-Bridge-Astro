import { MapPin, Calendar, Users, GraduationCap, Star, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/react/avatar"
import type { SectionProps } from "../types"

export default function OverviewSection({ university, lang }: SectionProps) {
  const fields = Array.isArray(university.fields) ? university.fields : [];
  
  return (
    <>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">About University</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-24 w-24 border-2 border-white shadow-md">
              <AvatarImage 
                src={university.logo} 
                alt={university.name} 
              />
              <AvatarFallback>{university.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-slate-800">{university.name}</h2>
              <div className="flex items-center gap-2 text-slate-600 mt-1">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>{university.city}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 mt-1">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>Established: {university.established || 'N/A'}</span>
              </div>
            </div>
          </div>
          
          <p className="text-slate-600">
            {typeof university.description === 'object' 
              ? university.description[lang] || 'No description available' 
              : university.description || 'No description available'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Students</h3>
              </div>
              <p className="text-slate-600 text-sm">
                {typeof university.students === 'string' ? university.students : university.students?.[lang] || 'N/A'}
              </p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Programs</h3>
              </div>
              <p className="text-slate-600 text-sm">{fields.length} Academic Programs</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Rating</h3>
              </div>
              <p className="text-slate-600 text-sm">{university.rating}/5 Overall Rating</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-slate-800">Key Information</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            <div className="p-6 flex items-center gap-3">
              <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium">{university.city}</p>
              </div>
            </div>
            
            <div className="p-6 flex items-center gap-3">
              <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
                <Award className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Ranking</p>
                <p className="font-medium">Top {Math.floor(Math.random() * 100) + 1} in Asia</p>
              </div>
            </div>
            
            <div className="p-6 flex items-center gap-3">
              <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Academic Year</p>
                <p className="font-medium">September - June</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
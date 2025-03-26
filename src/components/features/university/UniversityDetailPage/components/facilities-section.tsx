import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/react/card"
import type { SectionProps } from "../types"

export default function FacilitiesSection({ university, lang }: SectionProps) {
  const facilities = [
    { name: "Library", description: "Modern library with extensive collection of books and digital resources" },
    { name: "Laboratories", description: "State-of-the-art research and teaching laboratories" },
    { name: "Sports Complex", description: "Indoor and outdoor sports facilities including gym, swimming pool, and courts" },
    { name: "Student Housing", description: "On-campus dormitories and apartments for students" },
    { name: "Dining Halls", description: "Multiple dining options with diverse food choices" },
    { name: "Medical Center", description: "On-campus health services for students and staff" }
  ];
  
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Campus Facilities</CardTitle>
        <CardDescription>
          Facilities and amenities available at {university.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="grid gap-4 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
            >
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800">{facility.name}</h3>
                <p className="text-slate-600 text-sm mt-1">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
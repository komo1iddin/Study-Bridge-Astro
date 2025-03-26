import { Bed, Check, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/react/card"
import type { SectionProps } from "../types"

export default function DormsSection({ university, lang }: SectionProps) {
  const dormitories = [
    {
      name: "Main Residence Hall",
      description: "Modern dormitory with single and double rooms, shared kitchen and lounge areas",
      amenities: ["Wi-Fi", "Laundry", "Study Rooms", "24/7 Security"],
      priceRange: "$3,000 - $4,500 per semester"
    },
    {
      name: "Graduate Housing",
      description: "Apartment-style housing for graduate students with private bedrooms and shared living spaces",
      amenities: ["Private Bathrooms", "Fully Equipped Kitchen", "Wi-Fi", "Gym Access"],
      priceRange: "$4,500 - $6,000 per semester"
    },
    {
      name: "International House",
      description: "Dedicated housing for international students with cultural programs and support services",
      amenities: ["Cultural Events", "Language Exchange", "Airport Pickup", "Orientation Programs"],
      priceRange: "$3,500 - $5,000 per semester"
    }
  ];
  
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Student Dormitories</CardTitle>
        <CardDescription>
          On-campus housing options at {university.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="grid gap-6 md:grid-cols-1">
          {dormitories.map((dorm, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h3 className="font-medium text-slate-800 text-lg">{dorm.name}</h3>
                <p className="text-slate-600 mt-1">{dorm.description}</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bed className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-slate-700">Amenities</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {dorm.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-slate-600">{amenity}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <span className="text-sm text-slate-500">Price Range</span>
                  <span className="font-medium text-slate-800">{dorm.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <Info className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-slate-800">Housing Information</h3>
              <p className="text-slate-600 mt-1 text-sm">
                Housing availability varies by semester. Early application is recommended. Contact the university's housing office for current availability and detailed pricing.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
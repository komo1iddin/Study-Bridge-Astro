import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/react/card"
import type { SectionProps } from "../types"

export default function ImagesSection({ university, lang }: SectionProps) {
  // Sample images for demonstration
  const images = [
    { id: 1, src: `/images/universities/${university.id}/campus1.jpg`, alt: "Campus Main Building" },
    { id: 2, src: `/images/universities/${university.id}/campus2.jpg`, alt: "Library" },
    { id: 3, src: `/images/universities/${university.id}/campus3.jpg`, alt: "Student Center" },
    { id: 4, src: `/images/universities/${university.id}/campus4.jpg`, alt: "Sports Facilities" },
  ];
  
  // Fallback images if university-specific ones aren't available
  const fallbackImages = [
    { id: 1, src: "/images/university-campus-1.jpg", alt: "University Campus" },
    { id: 2, src: "/images/university-library.jpg", alt: "University Library" },
    { id: 3, src: "/images/university-classroom.jpg", alt: "University Classroom" },
    { id: 4, src: "/images/university-lab.jpg", alt: "University Laboratory" },
  ];
  
  // Use fallback images if no university-specific images
  const displayImages = images.some(img => img.src.includes(university.id)) ? images : fallbackImages;
  
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Campus Gallery</CardTitle>
        <CardDescription>
          Images of {university.name} campus and facilities
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg border border-slate-200">
              <div className="aspect-video relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = "/images/university-placeholder.jpg";
                  }}
                />
              </div>
              <div className="p-3 bg-slate-50">
                <p className="text-sm font-medium text-slate-700">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
import { MapPin, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/react/card"
import { Button } from "@/components/ui/react/button"
import type { SidebarCardProps } from "../../types"

export default function ContactCard({ university, lang }: SidebarCardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-1">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-slate-800 text-lg">Contact Information</h3>
            <p className="text-slate-600 mt-2">
              Get in touch with {university.name} for more information
            </p>
            <div className="mt-4 space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact University
              </Button>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>
                  {typeof university.location === 'object' 
                    ? `${university.location.city || ''}, ${university.location.country || ''}` 
                    : university.city || ''}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="h-4 w-4" />
                <span>admissions@{university.name.toLowerCase().replace(/\s+/g, '')}.edu</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <span>+1 (123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
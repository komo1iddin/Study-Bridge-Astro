import { Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/react/card"
import { Button } from "@/components/ui/react/button"
import type { SidebarCardProps } from "../../types"

export default function ApplicationCard({ university, lang }: SidebarCardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
        <h3 className="font-bold text-lg">Apply Now</h3>
        <p className="text-white/80 text-sm mt-1">
          Start your application to {university.name}
        </p>
      </div>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Application Deadline</span>
            </div>
            <span className="text-sm font-bold">June 30, 2023</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Processing Time</span>
            </div>
            <span className="text-sm font-bold">4-6 weeks</span>
          </div>
          
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="text-sm text-slate-600">
              Application Fee: <span className="font-bold text-slate-800">$50 - $100</span>
            </p>
          </div>
          
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Apply Online
          </Button>
          
          <p className="text-xs text-slate-500 text-center">
            For more information about the application process, please visit the university's official website.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
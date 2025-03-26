import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import type { SidebarCardProps } from "../../types"

export default function StatsCard({ university, lang }: SidebarCardProps) {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-slate-800">University Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-600">International Students</span>
            <span className="text-sm font-medium text-slate-900">25%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-600">Acceptance Rate</span>
            <span className="text-sm font-medium text-slate-900">65%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-600">Graduation Rate</span>
            <span className="text-sm font-medium text-slate-900">85%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-600">Faculty-Student Ratio</span>
            <span className="text-sm font-medium text-slate-900">1:15</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
import { GraduationCap, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/react/card"
import type { SectionProps } from "../types"

export default function ProgramsSection({ university, lang }: SectionProps) {
  const fields = Array.isArray(university.fields) ? university.fields : [];
  
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Academic Programs</CardTitle>
        <CardDescription>Available programs and specializations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        {fields.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{field}</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Bachelor's, Master's, and PhD programs available
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500">
            No program information available
          </div>
        )}

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <Info className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-slate-800">Program Information</h3>
              <p className="text-slate-600 mt-1 text-sm">
                For detailed program information, curriculum, and credit requirements, please contact the university directly.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
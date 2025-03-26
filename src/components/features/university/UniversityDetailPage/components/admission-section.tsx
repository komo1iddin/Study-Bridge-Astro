import { Check, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/react/card"
import type { SectionProps } from "../types"

export default function AdmissionSection({ university, lang }: SectionProps) {
  const requirements = [
    "Completed application form",
    "High school diploma or equivalent",
    "Transcripts from previous educational institutions",
    "Standardized test scores (if applicable)",
    "Proof of language proficiency",
    "Letters of recommendation",
    "Personal statement or essay"
  ];
  
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Admission Requirements</CardTitle>
        <CardDescription>
          Requirements for applying to {university.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="grid gap-4 md:grid-cols-2">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
            >
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800">{requirement}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium text-slate-800">Important Notice</h3>
              <p className="text-slate-600 mt-1 text-sm">
                Requirements may vary by program and academic level. Please check the university's official website for the most up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
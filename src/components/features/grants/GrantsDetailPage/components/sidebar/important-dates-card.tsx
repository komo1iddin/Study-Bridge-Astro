import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Calendar } from "lucide-react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface ImportantDatesCardProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function ImportantDatesCard({ grant, lang }: ImportantDatesCardProps) {
  const importantDates = [
    {
      id: 1,
      title: "Ariza qabul qilish boshlanishi",
      date: "2024-01-15",
      isHighlighted: false
    },
    {
      id: 2,
      title: "Ariza qabul qilish tugashi",
      date: grant.deadline,
      isHighlighted: true
    },
    {
      id: 3,
      title: "Natijalar e'lon qilinishi",
      date: "2024-05-15",
      isHighlighted: false
    }
  ]

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-slate-50 to-blue-50">
        <CardTitle className="text-lg font-bold text-slate-800">Muhim sanalar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="space-y-4">
          {importantDates.map((date) => (
            <div
              key={date.id}
              className={`flex gap-3 p-3 rounded-lg ${
                date.isHighlighted 
                  ? "bg-blue-50 border border-blue-100" 
                  : "hover:bg-slate-50 transition-colors"
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-slate-800">{date.title}</p>
                <p className="text-sm text-slate-500">{date.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


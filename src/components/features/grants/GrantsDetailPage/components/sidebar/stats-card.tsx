import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface StatsCardProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function StatsCard({ grant, lang }: StatsCardProps) {
  const stats = [
    {
      id: 1,
      value: "1000+",
      label: "Talabalar"
    },
    {
      id: 2,
      value: "50+",
      label: "Universitetlar"
    },
    {
      id: 3,
      value: "100%",
      label: "Muvaffaqiyat"
    },
    {
      id: 4,
      value: "24/7",
      label: "Qo'llab-quvvatlash"
    }
  ]

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-slate-800">Statistika</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center"
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


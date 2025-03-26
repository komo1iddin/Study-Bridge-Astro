import { Card, CardContent } from "@/components/ui/react/card"
import { Button } from "@/components/ui/react/button"
import { Download } from "lucide-react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface ApplicationCardProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function ApplicationCard({ grant, lang }: ApplicationCardProps) {
  return (
    <Card className="border-none shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <h3 className="font-medium">Ariza topshirish muddati</h3>
        <p className="text-3xl font-bold mt-2">{grant.deadline}</p>
        <p className="text-sm text-blue-100">gacha</p>
        <div className="mt-4 bg-white/10 rounded-full h-1.5">
          <div 
            className="bg-white h-1.5 rounded-full" 
            style={{ width: `${grant.progressPercentage}%` }}
          />
        </div>
        <p className="text-sm mt-2 text-blue-100">
          Muddat tugashiga {grant.daysRemaining} kun qoldi
        </p>
      </div>
      <CardContent className="p-6 space-y-4 bg-gradient-to-b from-white to-blue-50">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
          Ariza topshirish
          <Download className="h-5 w-5 ml-2" />
        </Button>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-100"
        >
          Hujjatlar ro'yxatini ko'rish
          <Download className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}


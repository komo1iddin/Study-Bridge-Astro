import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Calendar } from "lucide-react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface ProcessSectionProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function ProcessSection({ grant, lang }: ProcessSectionProps) {
  const steps = [
    { id: 1, title: "Hujjatlarni tayyorlash", description: "Barcha kerakli hujjatlarni to'plash va tayyorlash" },
    { id: 2, title: "Ariza topshirish", description: "Online platformada ro'yxatdan o'tish va arizani to'ldirish" },
    { id: 3, title: "Hujjatlarni yuborish", description: "Tayyorlangan hujjatlar to'plamini yuborish" },
    { id: 4, title: "Natijani kutish", description: "Ariza ko'rib chiqilishini kutish" }
  ]

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Ariza topshirish jarayoni</CardTitle>
        <CardDescription>Grant dasturiga ariza topshirish bosqichlari</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100"></div>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-12">
                <div className="absolute left-0 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {step.id}
                </div>
                <h3 className="font-medium text-slate-800 text-lg">{step.title}</h3>
                <p className="text-slate-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-slate-800">Muhim sana</h3>
              <p className="text-slate-600 mt-1 text-sm">
                Ariza topshirish muddati: {grant?.deadline || 'Belgilanmagan'} gacha
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
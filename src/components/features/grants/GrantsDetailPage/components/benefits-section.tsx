import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Check, Info } from "lucide-react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface BenefitsSectionProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function BenefitsSection({ grant, lang }: BenefitsSectionProps) {
  // Проверяем наличие benefits и устанавливаем значение по умолчанию
  const benefits = grant?.benefits || [];

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Imtiyozlar</CardTitle>
        <CardDescription>Grant dasturi tomonidan taqdim etiladigan imtiyozlar</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        {benefits.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{benefit || ''}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500">
            Hozircha imtiyozlar mavjud emas
          </div>
        )}

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <Info className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-slate-800">Muhim eslatma</h3>
              <p className="text-slate-600 mt-1 text-sm">
                Barcha imtiyozlar grant dasturi shartlariga ko'ra taqdim etiladi
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
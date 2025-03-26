import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/react/accordion"
import { CheckCircle, AlertCircle } from "lucide-react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface RequirementsSectionProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function RequirementsSection({ grant, lang }: RequirementsSectionProps) {
  const requirements = grant?.requirements || [];
  const documents = grant?.documents?.split(', ') || [];

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Talablar</CardTitle>
        <CardDescription>
          Grant dasturida ishtirok etish uchun qo'yilgan talablar
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
                <CheckCircle className="h-6 w-6 text-blue-600" />
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
              <h3 className="font-medium text-slate-800">Muhim eslatma</h3>
              <p className="text-slate-600 mt-1 text-sm">
                Barcha talablar grant dasturi shartlariga ko'ra bajarilishi shart
              </p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-slate-800 font-medium">
              Kerakli hujjatlar ro'yxati
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-slate-600">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
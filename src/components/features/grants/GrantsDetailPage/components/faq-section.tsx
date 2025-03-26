import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/react/accordion"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface FAQSectionProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function FAQSection({ grant, lang }: FAQSectionProps) {
  const faqs = grant?.faq || [];

  if (faqs.length === 0) {
    return (
      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-slate-800">Ko'p so'raladigan savollar</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-slate-500 text-center py-4">
            Hozircha savollar mavjud emas
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Ko'p so'raladigan savollar</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <Accordion 
          type="single" 
          collapsible
          className="w-full"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={faq.id || `faq-${index}`} 
              value={faq.id?.toString() || `faq-${index}`}
              className="overflow-hidden border-b last:border-0"
            >
              <AccordionTrigger className="hover:no-underline text-left py-4 transition-all">
                <span className="text-slate-800 font-medium">{faq.question || ''}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <div className="text-slate-600 whitespace-pre-wrap">
                  {faq.answer || ''}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
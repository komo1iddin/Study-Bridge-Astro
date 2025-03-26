import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/react/accordion"
import type { SectionProps } from "../types"

export default function FAQSection({ university, lang }: SectionProps) {
  const faqs = [
    {
      id: "faq1",
      question: "What is the application deadline?",
      answer: "Application deadlines vary by program. For most undergraduate programs, the deadline is typically March 1 for fall admission and October 1 for spring admission."
    },
    {
      id: "faq2",
      question: "Are scholarships available?",
      answer: "Yes, the university offers various scholarships based on academic merit, financial need, and special talents. International students are also eligible for certain scholarships."
    },
    {
      id: "faq3",
      question: "What language proficiency tests are accepted?",
      answer: "The university accepts TOEFL, IELTS, and Duolingo English Test for English language proficiency. Minimum score requirements vary by program."
    },
    {
      id: "faq4",
      question: "Is on-campus housing guaranteed?",
      answer: "On-campus housing is not guaranteed and is allocated on a first-come, first-served basis. Early application is recommended."
    },
    {
      id: "faq5",
      question: "Can international students work while studying?",
      answer: "International students may be eligible to work on campus for up to 20 hours per week during the academic year and full-time during breaks, subject to visa regulations."
    }
  ];
  
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-slate-800">Frequently Asked Questions</CardTitle>
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
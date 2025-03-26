import { Card, CardContent } from "@/components/ui/react/card"
import { Button } from "@/components/ui/react/button"
import { Mail, Phone, MapPin } from "lucide-react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface ContactCardProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function ContactCard({ grant, lang }: ContactCardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="flex gap-3">
          <div className="flex-shrink-0 mt-1">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-slate-800 text-lg">Biz bilan bog'laning</h3>
            <p className="text-slate-600 mt-2">
              Grant dasturi bo'yicha savollaringiz bo'lsa, biz bilan bog'laning
            </p>
            <div className="mt-4 space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Xabar yozish
              </Button>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="h-4 w-4" />
                <span>info@astrostudy.uz</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>Toshkent shahri, Chilonzor tumani</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


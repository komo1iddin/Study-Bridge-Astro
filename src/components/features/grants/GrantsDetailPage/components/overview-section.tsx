import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/react/card"
import { Button } from "@/components/ui/react/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/react/avatar"
import { Star } from "lucide-react"
import { getIconByName } from "../types/icon-types"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'
import type { Lang } from '@/i18n/langUtils'

interface OverviewSectionProps {
  grant: TransformedGrantData;
  lang: Lang;
}

export default function OverviewSection({ grant, lang }: OverviewSectionProps) {
  return (
    <>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Grant haqida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(grant.description?.split('\n') || []).map((paragraph, index) => (
            <p key={index} className="text-slate-600">
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {(grant.features || []).map((feature) => {
              const FeatureIcon = getIconByName(feature.icon)
              return (
                <div key={feature.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FeatureIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-slate-800">Asosiy ma'lumotlar</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            {(grant.keyInfo || []).map((info) => {
              const InfoIcon = getIconByName(info.icon)
              return (
                <div key={info.id} className="p-6 flex items-center gap-3">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
                    <InfoIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-slate-800">Hamkor universitetlar</CardTitle>
          <CardDescription>Grant dasturi doirasida o'qish mumkin bo'lgan universitetlar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <div className="grid gap-4 md:grid-cols-2">
            {(grant.universities || []).map((university) => {
              const SchoolIcon = getIconByName("School")
              return (
                <div
                  key={university.id}
                  className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-shrink-0 bg-white p-2 rounded-full border">
                    <SchoolIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{university.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{university.location}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < university.rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <Button variant="outline" className="w-full mt-2">
            Barcha universitetlarni ko'rish
          </Button>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-slate-800">Bitiruvchilar fikrlari</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <div className="grid gap-4 md:grid-cols-2">
            {(grant.testimonials || []).map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarUrl} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500">{testimonial.graduationYear}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}


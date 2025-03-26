import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/react/card"
import { GraduationCap, School, Users, Award } from "lucide-react"

export function InfoCard() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Xitoyda ta'lim</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p>
          Xitoy xalqaro talabalar uchun eng mashhur ta'lim yo'nalishlaridan biriga aylandi va arzon narxlarda jahon darajasidagi ta'lim taklif etmoqda.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <School className="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <p className="font-medium">2,900+ Universitet</p>
              <p className="text-xs text-muted-foreground">Barcha viloyatlar bo'ylab</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
              <GraduationCap className="h-4 w-4 text-indigo-700" />
            </div>
            <div>
              <p className="font-medium">500,000+ Dasturlar</p>
              <p className="text-xs text-muted-foreground">Bakalavr darajasidan doktoranturagacha</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
              <Users className="h-4 w-4 text-purple-700" />
            </div>
            <div>
              <p className="font-medium">500,000+ Xalqaro talabalar</p>
              <p className="text-xs text-muted-foreground">200+ mamlakatdan</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <Award className="h-4 w-4 text-green-700" />
            </div>
            <div>
              <p className="font-medium">30,000+ Stipendiyalar</p>
              <p className="text-xs text-muted-foreground">Davlat va universitet tomonidan moliyalashtirilgan</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from '../../../../../../components/ui/svelte';
  import { GraduationCap, School, Users, Award } from 'lucide-svelte';
</script>

<Card class="bg-gradient-to-br from-blue-50 to-indigo-50">
  <CardHeader class="pb-2">
    <CardTitle class="text-base">Xitoyda ta'lim</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4 text-sm">
    <p>
      Xitoy xalqaro talabalar uchun eng mashhur ta'lim yo'nalishlaridan biriga aylandi va arzon narxlarda jahon darajasidagi ta'lim taklif etmoqda.
    </p>

    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
          <School class="h-4 w-4 text-blue-700" />
        </div>
        <div>
          <p class="font-medium">2,900+ Universitet</p>
          <p class="text-xs text-muted-foreground">Barcha viloyatlar bo'ylab</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
          <GraduationCap class="h-4 w-4 text-indigo-700" />
        </div>
        <div>
          <p class="font-medium">500,000+ Dasturlar</p>
          <p class="text-xs text-muted-foreground">Bakalavr darajasidan doktoranturagacha</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
          <Users class="h-4 w-4 text-purple-700" />
        </div>
        <div>
          <p class="font-medium">500,000+ Xalqaro talabalar</p>
          <p class="text-xs text-muted-foreground">200+ mamlakatdan</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <Award class="h-4 w-4 text-green-700" />
        </div>
        <div>
          <p class="font-medium">30,000+ Stipendiyalar</p>
          <p class="text-xs text-muted-foreground">Davlat va universitet tomonidan moliyalashtirilgan</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
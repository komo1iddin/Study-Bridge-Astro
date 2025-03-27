<script lang="ts">
  import type { UniversityPageTranslations } from '../../../../../../i18n/features/university/universityPage';
  import type { Lang } from '../../../../../../i18n/langUtils';
  import { Card, CardContent, CardHeader, CardTitle } from '../../../../../../components/ui/svelte';
  import { GraduationCap, School, Users, Award } from 'lucide-svelte';
  
  export let t: UniversityPageTranslations;
  export let lang: Lang = 'uz';
</script>

<Card class="bg-gradient-to-br from-blue-50 to-indigo-50">
  <CardHeader class="pb-2">
    <CardTitle class="text-base">{t.infoCard.title}</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4 text-sm">
    <p>
      {t.infoCard.description}
    </p>

    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
          <School class="h-4 w-4 text-blue-700" />
        </div>
        <div>
          <p class="font-medium">{t.infoCard.stats.universities.value}</p>
          <p class="text-xs text-muted-foreground">{t.infoCard.stats.universities.description}</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
          <GraduationCap class="h-4 w-4 text-indigo-700" />
        </div>
        <div>
          <p class="font-medium">{t.infoCard.stats.programs.value}</p>
          <p class="text-xs text-muted-foreground">{t.infoCard.stats.programs.description}</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
          <Users class="h-4 w-4 text-purple-700" />
        </div>
        <div>
          <p class="font-medium">{t.infoCard.stats.students.value}</p>
          <p class="text-xs text-muted-foreground">{t.infoCard.stats.students.description}</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <Award class="h-4 w-4 text-green-700" />
        </div>
        <div>
          <p class="font-medium">{t.infoCard.stats.scholarships.value}</p>
          <p class="text-xs text-muted-foreground">{t.infoCard.stats.scholarships.description}</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
<script lang="ts">
  import type { UniversityPageTranslations } from '../../../../../../i18n/features/university/universityPage';
  import type { Lang } from '../../../../../../i18n/langUtils';
  import { Card, CardContent, CardHeader, CardTitle } from '../../../../../../components/ui/svelte';
  import { GraduationCap, School, Users, Award } from 'lucide-svelte';
  
  export let t: UniversityPageTranslations;
  export let lang: Lang = 'uz';
  
  // Default values in case translations aren't available
  $: title = t?.infoCard?.title || 'Education in China';
  $: description = t?.infoCard?.description || 'Information about education in China';
  $: stats = t?.infoCard?.stats || {
    universities: {
      value: '2,900+ Universities',
      description: 'Across all provinces'
    },
    programs: {
      value: '500,000+ Programs',
      description: 'From Bachelor\'s to Doctoral degrees'
    },
    students: {
      value: '500,000+ International students',
      description: 'From 200+ countries'
    },
    scholarships: {
      value: '30,000+ Scholarships',
      description: 'Government and university-funded'
    }
  };
</script>

<Card class="bg-gradient-to-br from-blue-50 to-indigo-50">
  <CardHeader class="pb-2">
    <CardTitle class="text-base">{title}</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4 text-sm">
    <p>
      {description}
    </p>

    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
          <School class="h-4 w-4 text-blue-700" />
        </div>
        <div>
          <p class="font-medium">{stats.universities.value}</p>
          <p class="text-xs text-muted-foreground">{stats.universities.description}</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
          <GraduationCap class="h-4 w-4 text-indigo-700" />
        </div>
        <div>
          <p class="font-medium">{stats.programs.value}</p>
          <p class="text-xs text-muted-foreground">{stats.programs.description}</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
          <Users class="h-4 w-4 text-purple-700" />
        </div>
        <div>
          <p class="font-medium">{stats.students.value}</p>
          <p class="text-xs text-muted-foreground">{stats.students.description}</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <Award class="h-4 w-4 text-green-700" />
        </div>
        <div>
          <p class="font-medium">{stats.scholarships.value}</p>
          <p class="text-xs text-muted-foreground">{stats.scholarships.description}</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
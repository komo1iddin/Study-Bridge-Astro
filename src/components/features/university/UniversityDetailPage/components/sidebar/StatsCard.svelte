<script lang="ts">
  import { Users, Calendar, Award, UserCheck } from "lucide-svelte";
  import { Card, CardContent } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  import type { UniversityDetailTranslations } from "@/i18n/features/university/universityDetail";

  export let university: University;
  export let lang: Lang;
  export let t: UniversityDetailTranslations;

  const stats = [
    {
      key: "internationalStudents",
      value: "20%",
      icon: Users
    },
    {
      key: "acceptanceRate",
      value: "65%",
      icon: UserCheck
    },
    {
      key: "graduationRate",
      value: "94%",
      icon: Award
    },
    {
      key: "facultyStudentRatio",
      value: "1:12",
      icon: Calendar
    }
  ];
</script>

<Card class="border-none shadow-md overflow-hidden">
  <CardContent class="p-0">
    <div class="border-b p-4">
      <h3 class="font-semibold text-lg text-slate-800">{t.statistics.title}</h3>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-2 gap-4">
        {#each stats as stat}
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-1.5">
              <svelte:component this={stat.icon} class="h-4 w-4 text-blue-600" />
              <span class="text-xs text-slate-600">{t.statistics[stat.key]}</span>
            </div>
            <div class="font-semibold text-slate-900">{stat.value}</div>
          </div>
        {/each}
      </div>
    </div>
  </CardContent>
</Card> 
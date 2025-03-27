<script lang="ts">
  import { Calendar, Clock } from "lucide-svelte";
  import { Card, CardContent } from "@/components/ui/svelte";
  import { Button } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  import type { UniversityDetailTranslations } from "@/i18n/features/university/universityDetail";

  export let university: University;
  export let lang: Lang;
  export let t: UniversityDetailTranslations;
  
  $: subtitle = t.application.subtitle.replace('{university}', university.name);
</script>

<Card class="border-none shadow-md overflow-hidden">
  <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
    <h3 class="font-bold text-lg">{t.application.title}</h3>
    <p class="text-white/80 text-sm mt-1">
      {subtitle}
    </p>
  </div>
  <CardContent class="p-4">
    <div class="space-y-4">
      <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
        <div class="flex items-center gap-2">
          <Calendar class="h-5 w-5 text-blue-600" />
          <span class="text-sm font-medium">{t.application.deadline}</span>
        </div>
        <span class="text-sm font-bold">June 30, 2023</span>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
        <div class="flex items-center gap-2">
          <Clock class="h-5 w-5 text-blue-600" />
          <span class="text-sm font-medium">{t.application.processingTime}</span>
        </div>
        <span class="text-sm font-bold">4-6 weeks</span>
      </div>
      
      <div class="bg-slate-50 p-3 rounded-lg">
        <p class="text-sm text-slate-600">
          {t.application.applicationFee} <span class="font-bold text-slate-800">$50 - $100</span>
        </p>
      </div>
      
      <Button class="w-full bg-blue-600 hover:bg-blue-700">
        {t.application.applyButton}
      </Button>
      
      <p class="text-xs text-slate-500 text-center">
        {t.application.moreInfo}
      </p>
    </div>
  </CardContent>
</Card> 
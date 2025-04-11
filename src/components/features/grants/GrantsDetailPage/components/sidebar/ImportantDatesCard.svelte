<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Calendar } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  // Debug the grant date values
  console.log("Grant dates:", {
    startDate: grant.applicationStartDate,
    endDate: grant.applicationEndDate,
    resultsDate: grant.resultsAnnouncedDate,
    deadline: grant.deadline
  });

  // Localization for titles
  const dateTitles = {
    uz: {
      startDate: "Ariza qabul qilish boshlanishi",
      endDate: "Ariza qabul qilish tugashi",
      resultsDate: "Natijalar e'lon qilinishi",
      header: "Muhim sanalar"
    },
    ru: {
      startDate: "Начало приема заявок",
      endDate: "Окончание приема заявок",
      resultsDate: "Объявление результатов",
      header: "Важные даты"
    },
    en: {
      startDate: "Application Start Date",
      endDate: "Application End Date",
      resultsDate: "Results Announcement Date",
      header: "Important Dates"
    }
  };
  const localizedTitles = dateTitles[lang] || dateTitles.en;

  // Dynamically create importantDates array
  $: importantDates = [
    {
      id: 1,
      title: localizedTitles.startDate,
      date: grant.applicationStartDate,
      isHighlighted: false
    },
    {
      id: 2,
      title: localizedTitles.endDate,
      date: grant.applicationEndDate || grant.deadline, // Fallback to deadline if endDate is missing
      isHighlighted: true
    },
    {
      id: 3,
      title: localizedTitles.resultsDate,
      date: grant.resultsAnnouncedDate,
      isHighlighted: false
    }
  ].filter(d => {
    // Add debugging
    console.log(`Date ${d.title}:`, d.date);
    return d.date;
  }); // Filter out dates that are not provided
</script>

<Card class="border-none shadow-md overflow-hidden">
  <CardHeader class="pb-2 bg-gradient-to-r from-slate-50 to-blue-50">
    <CardTitle class="text-lg font-bold text-slate-800">{localizedTitles.header}</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4 pt-4">
    <div class="space-y-4">
      {#each importantDates as date (date.id)}
        <div
          class={`flex gap-3 p-3 rounded-lg ${
            date.isHighlighted 
              ? "bg-blue-50 border border-blue-100" 
              : "hover:bg-slate-50 transition-colors"
          }`}
        >
          <div class="flex-shrink-0 mt-1">
            <Calendar class="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p class="font-medium text-slate-800">{date.title}</p>
            <p class="text-sm text-slate-500">{date.date}</p>
          </div>
        </div>
      {/each}
    </div>
  </CardContent>
</Card> 
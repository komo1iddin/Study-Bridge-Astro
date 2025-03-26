<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Calendar } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  const importantDates = [
    {
      id: 1,
      title: "Ariza qabul qilish boshlanishi",
      date: "2024-01-15",
      isHighlighted: false
    },
    {
      id: 2,
      title: "Ariza qabul qilish tugashi",
      date: grant.deadline,
      isHighlighted: true
    },
    {
      id: 3,
      title: "Natijalar e'lon qilinishi",
      date: "2024-05-15",
      isHighlighted: false
    }
  ];
</script>

<Card class="border-none shadow-md overflow-hidden">
  <CardHeader class="pb-2 bg-gradient-to-r from-slate-50 to-blue-50">
    <CardTitle class="text-lg font-bold text-slate-800">Muhim sanalar</CardTitle>
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
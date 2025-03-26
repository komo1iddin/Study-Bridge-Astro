<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  const stats = [
    {
      id: 1,
      value: "1000+",
      label: "Talabalar"
    },
    {
      id: 2,
      value: "50+",
      label: "Universitetlar"
    },
    {
      id: 3,
      value: "100%",
      label: "Muvaffaqiyat"
    },
    {
      id: 4,
      value: "24/7",
      label: "Qo'llab-quvvatlash"
    }
  ];
</script>

<Card class="border-none shadow-md overflow-hidden">
  <CardHeader class="pb-2">
    <CardTitle class="text-lg font-bold text-slate-800">Statistika</CardTitle>
  </CardHeader>
  <CardContent class="pt-2">
    <div class="grid grid-cols-2 gap-4">
      {#each stats as stat (stat.id)}
        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
          <p class="text-3xl font-bold text-blue-600">{stat.value}</p>
          <p class="text-sm text-slate-600 mt-1">{stat.label}</p>
        </div>
      {/each}
    </div>
  </CardContent>
</Card> 
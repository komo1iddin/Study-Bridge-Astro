<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Check, Info } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  // Ensure benefits exists with default fallback
  $: benefits = grant?.benefits || [];
</script>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Imtiyozlar</CardTitle>
    <CardDescription>Grant dasturi tomonidan taqdim etiladigan imtiyozlar</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6 pt-4">
    {#if benefits.length > 0}
      <div class="grid gap-4 md:grid-cols-2">
        {#each benefits as benefit, index}
          <div
            class="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div class="flex-shrink-0 bg-green-100 p-2 rounded-full">
              <Check class="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 class="font-medium text-slate-800">{benefit || ''}</h3>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center text-slate-500">
        Hozircha imtiyozlar mavjud emas
      </div>
    {/if}

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
          <Info class="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 class="font-medium text-slate-800">Muhim eslatma</h3>
          <p class="text-slate-600 mt-1 text-sm">
            Barcha imtiyozlar grant dasturi shartlariga ko'ra taqdim etiladi
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Calendar } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  const steps = [
    { id: 1, title: "Hujjatlarni tayyorlash", description: "Barcha kerakli hujjatlarni to'plash va tayyorlash" },
    { id: 2, title: "Ariza topshirish", description: "Online platformada ro'yxatdan o'tish va arizani to'ldirish" },
    { id: 3, title: "Hujjatlarni yuborish", description: "Tayyorlangan hujjatlar to'plamini yuborish" },
    { id: 4, title: "Natijani kutish", description: "Ariza ko'rib chiqilishini kutish" }
  ];
</script>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Ariza topshirish jarayoni</CardTitle>
    <CardDescription>Grant dasturiga ariza topshirish bosqichlari</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6 pt-4">
    <div class="relative">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100"></div>
      <div class="space-y-8">
        {#each steps as step}
          <div class="relative pl-12">
            <div class="absolute left-0 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              {step.id}
            </div>
            <h3 class="font-medium text-slate-800 text-lg">{step.title}</h3>
            <p class="text-slate-600 mt-2">{step.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
          <Calendar class="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 class="font-medium text-slate-800">Muhim sana</h3>
          <p class="text-slate-600 mt-1 text-sm">
            Ariza topshirish muddati: {grant?.deadline || 'Belgilanmagan'} gacha
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
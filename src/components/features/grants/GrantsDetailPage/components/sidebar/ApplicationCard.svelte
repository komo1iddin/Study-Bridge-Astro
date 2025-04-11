<script lang="ts">
  import { Card, CardContent } from "@/components/ui/svelte";
  import { Button } from "@/components/ui/svelte";
  import { Download, Circle } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export const lang: Lang = 'en';
</script>

<Card class="border-none shadow-lg overflow-hidden">
  <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
    <div class="absolute top-0 right-0 w-24 h-24 opacity-10">
      <Circle size={80} strokeWidth={1} class="absolute" style="top: 10px; right: 10px;" />
      <Circle size={70} strokeWidth={1} class="absolute" style="top: 15px; right: 15px;" />
      <Circle size={60} strokeWidth={1} class="absolute" style="top: 20px; right: 20px;" />
    </div>
    <h3 class="font-medium">Ariza topshirish muddati</h3>
    <p class="text-3xl font-bold mt-2">{grant.deadline}</p>
    <p class="text-sm text-blue-100">gacha</p>
    <div class="mt-4 bg-white/10 rounded-full h-1.5">
      <div 
        class="bg-white h-1.5 rounded-full" 
        style="width: {grant.progressPercentage}%"
      ></div>
    </div>
    <p class="text-sm mt-2 text-blue-100">
      Muddat tugashiga {grant.daysRemaining} kun qoldi
    </p>
  </div>
  <CardContent class="p-6 space-y-4 bg-gradient-to-b from-white to-blue-50">
    <Button class="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
      Ariza topshirish
      <Download class="h-5 w-5 ml-2" />
    </Button>
    <Button 
      variant="outline" 
      class="w-full flex items-center justify-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-100"
    >
      Hujjatlar ro'yxatini ko'rish
      <Download class="h-4 w-4" />
    </Button>
  </CardContent>
</Card> 
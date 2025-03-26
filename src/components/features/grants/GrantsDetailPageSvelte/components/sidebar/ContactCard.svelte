<script lang="ts">
  import { Card, CardContent } from "@/components/ui/svelte";
  import { Button } from "@/components/ui/svelte";
  import { Mail, Phone, MapPin } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;
</script>

<Card class="border-none shadow-md overflow-hidden">
  <CardContent class="p-6">
    <div class="flex gap-3">
      <div class="flex-shrink-0 mt-1">
        <Mail class="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 class="font-medium text-slate-800 text-lg">Biz bilan bog'laning</h3>
        <p class="text-slate-600 mt-2">
          Grant dasturi bo'yicha savollaringiz bo'lsa, biz bilan bog'laning
        </p>
        <div class="mt-4 space-y-3">
          <Button class="w-full bg-blue-600 hover:bg-blue-700">
            Xabar yozish
          </Button>
          <div class="flex items-center gap-2 text-slate-600">
            <Mail class="h-4 w-4" />
            <span>info@astrostudy.uz</span>
          </div>
          <div class="flex items-center gap-2 text-slate-600">
            <Phone class="h-4 w-4" />
            <span>+998 90 123 45 67</span>
          </div>
          <div class="flex items-center gap-2 text-slate-600">
            <MapPin class="h-4 w-4" />
            <span>Toshkent shahri, Chilonzor tumani</span>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
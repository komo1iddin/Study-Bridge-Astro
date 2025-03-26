<script lang="ts">
  import { CheckCircle2 } from "lucide-svelte";
  
  export let benefit: string;
  export let color: string;
  export let bgColor: string;
  export let index: number;
</script>

<div 
  class="flex items-start gap-3 p-4 md:p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
>
  <div
    class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
    style="background-color: {bgColor};"
  >
    <CheckCircle2 size={20} color={color} strokeWidth={2} />
  </div>
  <span class="text-gray-700 text-sm md:text-base">{benefit}</span>
</div> 
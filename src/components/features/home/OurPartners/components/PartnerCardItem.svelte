<script>
  import Card from '@/components/ui/svelte/Card.svelte';
  
  // Props
  export let partner;
  export let className = '';
</script>

<Card 
  class={`min-h-[200px] overflow-hidden group transition-all duration-300 rounded-xl w-full
  border border-gray-200
  bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.9),rgba(255,255,255,0.8))]
  backdrop-blur-[10px]
  shadow-[0_1px_3px_0px_rgba(0,0,0,0.06)]
  hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
  hover:border-[rgba(59,130,246,0.2)] ${className}`}
>
  <div class="p-4 flex flex-col items-center justify-center h-full gap-4">
    <div class="flex items-center justify-center w-full h-[120px]">
      <img 
        src={partner.logo} 
        alt={partner.name}
        class="max-w-[80%] max-h-full object-contain transition-transform duration-300"
      />
    </div>
    <h3 class="text-sm font-bold text-gray-700 text-center line-clamp-2">
      {partner.name}
    </h3>
  </div>
</Card> 
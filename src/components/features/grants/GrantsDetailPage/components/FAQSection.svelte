<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { ChevronDown } from "lucide-svelte";
  import { slide } from 'svelte/transition';
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  $: faqs = grant?.faq || [];
  
  // Keep track of which FAQ item is open
  let openItemId: string | null = null;
  
  function toggleItem(id: string) {
    openItemId = openItemId === id ? null : id;
  }
</script>

<style>
  .faq-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
    cursor: pointer;
  }
  
  .faq-trigger:hover .faq-question {
    color: #2563eb;
  }
  
  .faq-icon {
    transition: transform 0.3s ease;
  }
  
  .faq-icon.open {
    transform: rotate(180deg);
  }
  
  .faq-content {
    padding: 0.5rem 0 1.5rem 0;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .last-item {
    border-bottom: none;
  }
</style>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Ko'p so'raladigan savollar</CardTitle>
  </CardHeader>
  <CardContent class="pt-2">
    {#if faqs.length === 0}
      <p class="text-slate-500 text-center py-4">
        Hozircha savollar mavjud emas
      </p>
    {:else}
      <div class="w-full">
        {#each faqs as faq, index}
          {@const itemId = faq.id?.toString() || `faq-${index}`}
          {@const isLast = index === faqs.length - 1}
          
          <div class={isLast ? 'last-item' : ''}>
            <button 
              class="faq-trigger" 
              on:click={() => toggleItem(itemId)}
              aria-expanded={openItemId === itemId}
            >
              <span class="faq-question text-slate-800 font-medium">{faq.question || ''}</span>
              <ChevronDown class={`faq-icon h-5 w-5 ${openItemId === itemId ? 'open' : ''}`} />
            </button>
            
            {#if openItemId === itemId}
              <div class="faq-content" transition:slide={{ duration: 300 }}>
                <div class="text-slate-600 whitespace-pre-wrap">
                  {faq.answer || ''}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </CardContent>
</Card> 
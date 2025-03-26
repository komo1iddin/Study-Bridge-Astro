<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { CheckCircle, AlertCircle, ChevronDown } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';
  import { slide } from 'svelte/transition';

  export let grant: TransformedGrantData;
  export let lang: Lang;

  $: requirements = grant?.requirements || [];
  $: documents = grant?.documents?.split(', ') || [];
  
  // Custom accordion state
  let isOpen = false;
  
  function toggleAccordion() {
    isOpen = !isOpen;
  }
</script>

<style>
  .accordion-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    text-align: left;
    cursor: pointer;
  }
  
  .accordion-trigger:hover {
    background-color: #f1f5f9;
  }
  
  .accordion-icon {
    transition: transform 0.3s ease;
  }
  
  .accordion-icon.open {
    transform: rotate(180deg);
  }
  
  .accordion-content {
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-top: none;
    border-radius: 0 0 0.375rem 0.375rem;
    background-color: white;
  }
</style>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Talablar</CardTitle>
    <CardDescription>
      Grant dasturida ishtirok etish uchun qo'yilgan talablar
    </CardDescription>
  </CardHeader>
  <CardContent class="space-y-6 pt-4">
    <div class="grid gap-4 md:grid-cols-2">
      {#each requirements as requirement, index}
        <div
          class="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
        >
          <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
            <CheckCircle class="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 class="font-medium text-slate-800">{requirement}</h3>
          </div>
        </div>
      {/each}
    </div>

    <div class="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mt-6">
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
          <AlertCircle class="h-5 w-5 text-yellow-600" />
        </div>
        <div>
          <h3 class="font-medium text-slate-800">Muhim eslatma</h3>
          <p class="text-slate-600 mt-1 text-sm">
            Barcha talablar grant dasturi shartlariga ko'ra bajarilishi shart
          </p>
        </div>
      </div>
    </div>

    <!-- Custom Accordion Implementation -->
    <div class="w-full">
      <button class="accordion-trigger" on:click={toggleAccordion}>
        <span class="text-slate-800 font-medium">Kerakli hujjatlar ro'yxati</span>
        <ChevronDown class={`accordion-icon h-5 w-5 ${isOpen ? 'open' : ''}`} />
      </button>
      
      {#if isOpen}
        <div class="accordion-content" transition:slide={{ duration: 300 }}>
          <ul class="space-y-2 text-slate-600">
            {#each documents as doc, index}
              <li class="flex items-center gap-2">
                <CheckCircle class="h-4 w-4 text-green-600" />
                <span>{doc}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </CardContent>
</Card> 
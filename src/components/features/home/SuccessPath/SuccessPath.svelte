<script lang="ts">
  import SectionHeader from '@/components/ui/svelte/SectionHeader.svelte';
  import ButtonView from '@/components/ui/svelte/ButtonView.svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { Lang } from '@/i18n/langUtils';
  import type { SuccessPathTranslations } from '@/i18n/features/home/successPath';
  import { CheckCircle2 } from 'lucide-svelte';
  
  export let lang: Lang;
  export let translations: SuccessPathTranslations;
  
  let visibleSteps: number[] = [];
  
  // Function to simulate the framer-motion whileInView functionality
  function handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stepId = Number(entry.target.getAttribute('data-step-id'));
        if (!visibleSteps.includes(stepId)) {
          visibleSteps = [...visibleSteps, stepId];
        }
      }
    });
  }
  
  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    const stepElements = document.querySelectorAll('.step-item');
    stepElements.forEach(el => observer.observe(el));
    
    return () => {
      observer.disconnect();
    };
  });

  // Colors for steps - could be moved to a constants file if needed
  const stepColors = [
    "#2563eb", // Blue
    "#C82220", // Red
    "#16a34a", // Green
    "#003c91", // Dark Blue
    "#1e293b", // Slate
    "#0051df"  // Primary Blue
  ];
</script>

<section class="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-20 overflow-hidden">
  <!-- Background decorations -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
    <div class="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Section Header with translations -->
    <SectionHeader
      title={translations.title}
      subtitle={translations.subtitle}
    />

    <!-- Steps Timeline using translations.steps -->
    <div class="max-w-4xl mx-auto mt-16">
      {#each translations.steps as step, index}
        <div 
          class="relative step-item" 
          data-step-id={step.id}
        >
          {#if visibleSteps.includes(step.id)}
            <div 
              class="flex items-start gap-8 mb-12"
              in:fly={{ y: 20, duration: 500, delay: index * 100 }}
            >
              <!-- Step Number and Line -->
              <div class="hidden md:flex flex-col items-center">
                <div 
                  class="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                  style="background-color: {stepColors[index % stepColors.length]}"
                >
                  {step.id}
                </div>
                {#if index < translations.steps.length - 1}
                  <div class="w-0.5 h-32 bg-gray-200"></div>
                {/if}
              </div>

              <!-- Step Content -->
              <div class="flex-1">
                <div 
                  class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  style="border-left-color: {stepColors[index % stepColors.length]}; border-left-width: 4px;"
                >
                  <div class="flex items-center gap-4 mb-4">
                    <div class="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold" style="background-color: {stepColors[index % stepColors.length]}">
                      {step.id}
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p class="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-4 mt-6">
                    {#each step.benefits as benefit}
                      <div 
                        class="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircle2 class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span class="text-gray-700">{benefit}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          {:else}
            <div class="flex items-start gap-8 mb-12 opacity-0">
              <div class="hidden md:flex flex-col items-center">
                <div class="w-12 h-12 rounded-full"></div>
                {#if index < translations.steps.length - 1}
                  <div class="w-0.5 h-32"></div>
                {/if}
              </div>
              <div class="flex-1">
                <div class="p-6">
                  <div style="height: 100px;"></div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- CTA Section -->
    <div class="text-center mt-16">
      <ButtonView
        href={`/${lang}/student-path`}
        text={translations.detailsButtonText}
        variant="desktop"
        showOnMobile={false}
      />
      <ButtonView
        href={`/${lang}/student-path`}
        text={translations.detailsButtonText}
        variant="mobile"
        showOnDesktop={false}
      />
    </div>
  </div>
</section> 
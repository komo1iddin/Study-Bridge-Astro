<script lang="ts">
  import { onMount } from "svelte";
  import { Home } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';
  
  // Import styles
  import "./styles/grants.css";
  
  // Import section components
  import BackgroundDecoration from "./components/BackgroundDecoration.svelte";
  import HeaderCard from "./components/HeaderCard.svelte";
  import OverviewSection from "./components/OverviewSection.svelte";
  import BenefitsSection from "./components/BenefitsSection.svelte";
  import RequirementsSection from "./components/RequirementsSection.svelte";
  import ProcessSection from "./components/ProcessSection.svelte";
  import FAQSection from "./components/FAQSection.svelte";
  
  // Import sidebar components
  import ApplicationCard from "./components/sidebar/ApplicationCard.svelte";
  import ImportantDatesCard from "./components/sidebar/ImportantDatesCard.svelte";
  import ContactCard from "./components/sidebar/ContactCard.svelte";
  import StatsCard from "./components/sidebar/StatsCard.svelte";

  export let grant: TransformedGrantData;
  export let lang: Lang;

  // State
  let mounted = false;
  let activeTab = "overview";
  
  // Effect for mounted state
  onMount(() => {
    console.log("GrantsDetailPage mounted");
    mounted = true;
    return () => {
      console.log("GrantsDetailPage unmounted");
    };
  });
  
  // Tab change handler
  function handleTabChange(event: CustomEvent<string>) {
    if (!mounted) return;
    activeTab = event.detail;
    console.log("Tab changed to:", activeTab);
  }
</script>

{#if !mounted}
  <!-- Updated Skeleton UI for Grants Detail Page -->
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-blue-50 relative animate-pulse">
    <div class="container mx-auto py-8 px-4 md:px-6 relative z-10">
      <!-- Breadcrumb Skeleton -->
      <div class="flex items-center gap-2 h-4 mb-6">
        <div class="h-3.5 w-3.5 bg-gray-200 rounded"></div>
        <div class="h-2 w-1 bg-gray-200 rounded"></div>
        <div class="h-3 w-16 bg-gray-200 rounded"></div>
        <div class="h-2 w-1 bg-gray-200 rounded"></div>
        <div class="h-3 w-24 bg-gray-300 rounded"></div>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <!-- Main Content Skeleton -->
        <div class="md:col-span-2 space-y-8">
          <!-- Header Card Skeleton -->
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex flex-col sm:flex-row gap-4 mb-4">
               <div class="h-16 w-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
               <div class="flex-1 space-y-3">
                 <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
                 <div class="h-4 w-1/2 bg-gray-200 rounded"></div>
               </div>
            </div>
             <div class="h-10 bg-gray-100 rounded-md flex items-center px-2 space-x-4">
              <div class="h-6 w-16 bg-gray-200 rounded"></div>
              <div class="h-6 w-16 bg-gray-200 rounded"></div>
              <div class="h-6 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
          <!-- Content Area Skeleton -->
          <div class="bg-white rounded-lg shadow p-6 space-y-4">
            <div class="h-5 w-1/3 bg-gray-300 rounded"></div>
            <div class="h-4 w-full bg-gray-200 rounded"></div>
            <div class="h-4 w-full bg-gray-200 rounded"></div>
            <div class="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>

        <!-- Sidebar Skeleton -->
        <div class="space-y-6">
          <div class="bg-white rounded-lg shadow p-6 space-y-3">
             <div class="h-5 w-1/2 bg-gray-300 rounded"></div>
             <div class="h-8 w-full bg-gray-200 rounded-lg"></div>
          </div>
          <div class="bg-white rounded-lg shadow p-6 space-y-3">
             <div class="h-5 w-1/2 bg-gray-300 rounded"></div>
             <div class="h-4 w-3/4 bg-gray-200 rounded"></div>
             <div class="h-4 w-1/2 bg-gray-200 rounded"></div>
             <div class="h-4 w-3/4 bg-gray-200 rounded mt-2"></div>
          </div>
           <div class="bg-white rounded-lg shadow p-6 space-y-3">
             <div class="h-5 w-1/2 bg-gray-300 rounded"></div>
             <div class="h-4 w-full bg-gray-200 rounded"></div>
             <div class="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Actual Content -->
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-blue-50 relative">
    <BackgroundDecoration />

    <div class="container mx-auto py-8 px-4 md:px-6 relative z-10">
      <div class="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Home class="h-3.5 w-3.5" />
        <span>/</span>
        <span>Grantlar</span>
        <span>/</span>
        <span class="text-slate-900 font-medium">{grant.title}</span>
      </div>

      <main class="grid gap-8 md:grid-cols-3">
        <div class="md:col-span-2 space-y-8">
          <HeaderCard 
            {grant}
            {activeTab}
            on:change={handleTabChange}
          />

          {#if activeTab === "overview"}
            <OverviewSection {grant} {lang} />
          {:else if activeTab === "benefits"}
            <BenefitsSection {grant} {lang} />
          {:else if activeTab === "requirements"}
            <RequirementsSection {grant} {lang} />
          {:else if activeTab === "process"}
            <ProcessSection {grant} {lang} />
          {/if}
          
          {#if activeTab === "overview" || activeTab === "process"}
            <FAQSection {grant} {lang} />
          {/if}
        </div>

        <div class="space-y-6">
          <ApplicationCard {grant} {lang} />
          <ImportantDatesCard {grant} {lang} />
          <ContactCard {grant} {lang} />
          <StatsCard {grant} {lang} />
        </div>
      </main>
    </div>
  </div>
{/if}

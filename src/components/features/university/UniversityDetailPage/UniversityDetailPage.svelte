<script lang="ts">
  import { onMount } from "svelte";
  import { Home } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  import { getUniversityDetailTranslations } from "@/i18n/features/university/universityDetail";
  import type { UniversityDetailTranslations } from "@/i18n/features/university/universityDetail";

  // Import section components
  import HeaderCard from "./components/HeaderCard.svelte";
  import OverviewSection from "./components/OverviewSection.svelte";
  import ProgramsSection from "./components/ProgramsSection.svelte";
  import AdmissionSection from "./components/AdmissionSection.svelte";
  import FacilitiesSection from "./components/FacilitiesSection.svelte";
  import ImagesSection from "./components/ImagesSection.svelte";
  import DormsSection from "./components/DormsSection.svelte";
  import FAQSection from "./components/FAQSection.svelte";
  import BackgroundDecoration from "./components/BackgroundDecoration.svelte";

  // Import sidebar components
  import ApplicationCard from "./components/sidebar/ApplicationCard.svelte";
  import StatsCard from "./components/sidebar/StatsCard.svelte";
  import ContactCard from "./components/sidebar/ContactCard.svelte";

  // Props
  export let university: University;
  export let lang: Lang = "en";

  // Get translations
  $: t = getUniversityDetailTranslations(lang);
  $: translationsReady = t && t.breadcrumb && Boolean(university);

  // State
  let activeTab = "overview";

  // Debug the university object
  console.log("University object in main component:", university);
  console.log("Gallery categories:", university?.galleryCategories);

  // Check URL for active tab
  function checkUrlForTab() {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      if (url.includes("#images")) {
        activeTab = "images";
      }
    }
  }

  onMount(() => {
    console.log("UniversityDetailPage component mounted");
    checkUrlForTab();
  });

  // Tab change handler
  function handleTabChange(event: CustomEvent<string>) {
    activeTab = event.detail;
    console.log("Tab changed to:", activeTab);
    
    // Update URL hash for shareable links
    if (typeof window !== "undefined") {
      window.location.hash = activeTab;
    }
  }

  // Helper function to navigate specifically to the images tab
  function showImages() {
    activeTab = "images";
  }
</script>

{#if translationsReady}
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden">
    <BackgroundDecoration />

    <div class="w-full max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 relative z-10">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-slate-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-2">
        <Home class="h-3.5 w-3.5 flex-shrink-0" />
        <span>/</span>
        <span>{t.breadcrumb.universities}</span>
        <span>/</span>
        <span class="text-slate-900 font-medium truncate">{university.name}</span>
      </div>

      <main class="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
        <!-- Main Content -->
        <div class="md:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
          <HeaderCard 
            {university}
            {t}
            {activeTab}
            {lang}
            on:change={handleTabChange}
          />

          <!-- Render active section content -->
          {#if activeTab === "overview"}
            <OverviewSection {university} {lang} />
          {:else if activeTab === "programs"}
            <ProgramsSection {university} {lang} />
          {:else if activeTab === "admission"}
            <AdmissionSection {university} {lang} />
          {:else if activeTab === "images"}
            <ImagesSection {university} {lang} />
          {:else if activeTab === "dorms"}
            <DormsSection {university} {lang} />
          {:else if activeTab === "faq"}
            <FAQSection {university} {lang} />
          {/if}
        </div>

        <!-- Sidebar -->
        <div class="space-y-4 sm:space-y-6">
          <ApplicationCard {university} {t} {lang} />
          <StatsCard {university} {t} {lang} />
          <ContactCard {university} {t} {lang} />
          
          <!-- Add a button to view gallery -->
          <button 
            class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            on:click={showImages}
          >
            {t.viewGallery}
          </button>
        </div>
      </main>
    </div>
  </div>
{/if} 
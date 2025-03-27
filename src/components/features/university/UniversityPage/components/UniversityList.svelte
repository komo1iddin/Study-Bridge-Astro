<script lang="ts">
  import { Button, Pagination } from "../../../../../components/ui/svelte";
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import UniversityCard from './UniversityCard.svelte';
  import type { University, Filters } from "../lib/data";
  import { RANKING_RANGES } from "../lib/data";
  import { ITEMS_PER_PAGE } from "../lib/constants";
  import type { UniversityPageTranslations } from "../../../../../i18n/features/university/universityPage";
  import type { Lang } from "../../../../../i18n/langUtils";
  
  export let universities: University[] = [];
  export let filters: Filters;
  export let t: UniversityPageTranslations;
  export let lang: Lang = 'uz';
  
  let currentPage = 1;
  
  // Reactive computed properties
  $: filteredUniversities = universities.filter((university) => {
    if (
      filters.educationType &&
      filters.educationType !== "all" &&
      Array.isArray(university.educationType) &&
      !university.educationType.includes(filters.educationType)
    ) {
      return false;
    }

    if (filters.city && filters.city !== "all" && university.city !== filters.city) {
      return false;
    }

    if (filters.hasGrants && filters.hasGrants !== "all") {
      const hasGrants = filters.hasGrants === "true";
      if (university.hasGrants !== hasGrants) return false;
    }

    if (filters.ranking && filters.ranking !== "all") {
      const range = RANKING_RANGES[filters.ranking as keyof typeof RANKING_RANGES];
      if (range && (university.ranking < range.min || university.ranking > range.max)) {
        return false;
      }
    }

    if (filters.featured === "true" && !university.featured) {
      return false;
    }

    return true;
  });
  
  $: sortedUniversities = [...filteredUniversities].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (a.ranking || 999) - (b.ranking || 999);
  });
  
  $: displayUniversities = sortedUniversities;
  
  $: paginatedUniversities = (() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    if (filters.featured === "true") {
      return sortedUniversities.filter(uni => uni.featured);
    }
    
    return displayUniversities.slice(startIndex, endIndex);
  })();
  
  $: totalPages = Math.ceil(
    (filters.featured === "true" 
      ? sortedUniversities.filter(uni => uni.featured).length 
      : displayUniversities.length) 
    / ITEMS_PER_PAGE
  );
  
  // When filters change, reset to first page
  $: {
    if (filters) {
      currentPage = 1;
    }
  }
  
  function handlePageChange(page: number) {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="space-y-6">
  {#if filteredUniversities.length === 0}
    <div class="flex h-40 items-center justify-center rounded-lg border border-dashed">
      <p class="text-muted-foreground">{t.list.noResults}</p>
    </div>
  {:else}
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h1 class="text-xl sm:text-2xl font-bold hidden sm:block">{t.list.title}</h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <p class="text-xs sm:text-sm text-muted-foreground">
          {t.list.showing.replace('{current}', String(Math.min((currentPage * ITEMS_PER_PAGE), filteredUniversities.length))).replace('{total}', String(universities.length))}
        </p>
        
        {#if totalPages > 1}
          <div class="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              on:click={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft class="h-4 w-4" />
              <span class="sr-only">{t.list.pagination.prev}</span>
            </Button>
            
            {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
              <Button
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                on:click={() => handlePageChange(page)}
                class="min-w-[2.5rem]"
              >
                {page}
              </Button>
            {/each}
            
            <Button
              variant="outline"
              size="sm"
              on:click={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight class="h-4 w-4" />
              <span class="sr-only">{t.list.pagination.next}</span>
            </Button>
          </div>
        {/if}
      </div>
    </div>

    <div class="space-y-3">
      <h2 class="text-xl font-bold sm:hidden">
        {t.list.title}
      </h2>
      {#if filters.featured === "true"}
        <h2 class="text-base sm:text-lg lg:text-xl font-medium">
          {t.list.featuredUniversities}
        </h2>
      {/if}
      <div class="flex flex-col gap-4 sm:gap-6">
        {#each paginatedUniversities as university (university.id)}
          <div class="w-full">
            <UniversityCard {university} {t} {lang} />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
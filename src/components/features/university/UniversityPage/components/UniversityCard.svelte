<script lang="ts">
  import type { University } from "../lib/data";
  import { Button } from "../../../../../components/ui/svelte";
  import { cn } from "../../../../../lib/utils";
  import { ArrowRight } from "lucide-svelte";
  import type { UniversityPageTranslations } from "../../../../../i18n/features/university/universityPage";
  import type { Lang } from "../../../../../i18n/langUtils";
  
  export let university: University;
  export let t: UniversityPageTranslations;
  export let lang: Lang = 'uz';

  // Default logo if not provided
  const defaultLogo = "https://placehold.co/200x200/e2e8f0/1e293b?text=U";
  
  // Format large numbers with commas
  function formatNumber(num: number | undefined): string {
    if (num === undefined) return "N/A";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Handle navigation to university detail page
  function handleViewDetails() {
    const currentPath = window.location.pathname;
    const langMatch = currentPath.match(/^\/(uz|ru|en)/);
    const lang = langMatch ? langMatch[1] : 'uz';
    
    // Ensure we're using the correct ID format from the data source
    // This ensures the link points to the same ID format used in src/content
    const detailUrl = `/${lang}/universities/${university.id}`;
    
    // Navigate to the detail page
    window.location.href = detailUrl;
  }
</script>

<style>
  .university-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .university-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .university-logo {
    width: 150px; /* Mobile size */
    height: auto;
    object-fit: contain;
    max-height: 100%;
  }
  
  @media (min-width: 768px) {
    .university-logo {
      width: 210px; /* Desktop size */
    }
  }
  
  .badge {
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    font-weight: 500;
    line-height: 1;
  }
  
  .badge-primary {
    background-color: rgb(59 130 246 / 0.1);
    color: rgb(59 130 246);
  }
  
  .badge-outline {
    background-color: transparent;
    border: 1px solid rgb(203 213 225);
  }
  
  .badge-green {
    background-color: rgb(34 197 94 / 0.1);
    color: rgb(34 197 94);
  }

  .arrow-icon {
    transition: transform 0.2s;
  }
  
  .btn-details:hover .arrow-icon {
    transform: translateX(3px);
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    border-top: 1px solid rgb(226 232 240);
    margin-top: 0.75rem;
    gap: 1rem;
  }
  
  @media (max-width: 767px) {
    .card-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
    
    .card-footer-stats {
      width: 100%;
      justify-content: space-between;
    }
    
    .card-footer-button {
      width: 100%;
    }
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 60px;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    background-color: rgba(241, 245, 249, 0.7);
    text-align: center;
  }
</style>

<div class="w-full border rounded-lg shadow-sm overflow-hidden bg-card university-card">
  <div class="flex flex-col md:flex-row md:min-h-[260px]">
    <!-- Left side: University logo -->
    <div class="relative md:w-1/3 h-40 md:h-auto flex items-center justify-center p-3 bg-white">
      <!-- Logo as main image with standardized size and white background -->
      <div class="logo-container">
        <img 
          src={university.logo || defaultLogo} 
          alt={`${university.name} logo`}
          class="university-logo"
        />
      </div>
      
      <!-- Featured badge -->
      {#if university.featured}
        <div class="absolute top-3 right-3">
          <span class="badge badge-primary text-xs md:text-sm">{t.card.featured}</span>
        </div>
      {/if}
    </div>
    
    <!-- Right side: University info -->
    <div class="p-3 md:p-4 md:w-2/3">
      <div class="card-content">
        <div class="flex-grow">
          <!-- University name and ranking -->
          <div class="flex items-start justify-between mb-2 gap-2">
            <h3 class="text-lg md:text-xl font-bold line-clamp-2">{university.name}</h3>
            {#if university.ranking}
              <span class="badge badge-outline border-blue-300 text-blue-700 whitespace-nowrap text-xs md:text-sm">
                {t.card.rank.replace('{rank}', university.ranking.toString())}
              </span>
            {/if}
          </div>
          
          <!-- Location -->
          <p class="text-muted-foreground text-xs md:text-sm mb-2">
            {university.city}
          </p>
          
          <!-- Description -->
          <p class="text-xs md:text-sm line-clamp-3 mb-3">
            {university.description}
          </p>
          
          <!-- Tags and badges -->
          <div class="flex flex-wrap gap-1 md:gap-1.5 mb-3">
            {#if university.hasGrants}
              <span class="badge badge-green text-xs md:text-sm">{t.card.grantsAvailable}</span>
            {/if}
            
            {#if university.educationType && university.educationType.length > 0}
              {#each university.educationType as type}
                <span class="badge badge-outline text-xs md:text-sm">{type}</span>
              {/each}
            {/if}
          </div>
        </div>
        
        <!-- Stats and action button -->
        <div class="card-footer">
          <div class="flex gap-3 card-footer-stats">
            {#if university.foundedYear}
              <div class="stat-item">
                <p class="text-xs text-muted-foreground">{t.card.founded}</p>
                <p class="text-xs md:text-sm font-semibold">{university.foundedYear}</p>
              </div>
            {/if}
            
            {#if university.studentsCount}
              <div class="stat-item">
                <p class="text-xs text-muted-foreground">{t.card.students}</p>
                <p class="text-xs md:text-sm font-semibold">{formatNumber(university.studentsCount)}</p>
              </div>
            {/if}
          </div>
          
          <Button 
            variant="default" 
            class="whitespace-nowrap btn-details flex items-center justify-center gap-2 card-footer-button"
            on:click={handleViewDetails}
            size="sm"
          >
            {t.card.viewDetails}
            <ArrowRight class="w-3 h-3 md:w-3.5 md:h-3.5 arrow-icon" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</div> 
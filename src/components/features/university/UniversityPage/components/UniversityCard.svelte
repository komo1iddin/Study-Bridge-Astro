<script lang="ts">
  import type { University } from "../lib/data";
  import { Button } from "../../../../../components/ui/svelte";
  import { cn } from "../../../../../lib/utils";
  import { ArrowRight } from "lucide-svelte";
  
  export let university: University;

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
  .logo-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  
  .university-logo {
    width: 210px;
    height: 210px;
    object-fit: contain;
    padding: 6px;
  }
  
  .card-content {
    min-height: 220px;
    display: flex;
    flex-direction: column;
  }
  
  .card-footer {
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  
  .university-card {
    transition: all 0.2s ease-in-out;
  }
  
  .university-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  
  .arrow-icon {
    transition: transform 0.2s ease-in-out;
  }
  
  :global(.btn-details:hover) .arrow-icon {
    transform: translateX(3px);
  }
</style>

<div class="w-full border rounded-lg shadow-sm overflow-hidden bg-card university-card">
  <div class="flex flex-col md:flex-row md:min-h-[260px]">
    <!-- Left side: University logo -->
    <div class="relative md:w-1/3 h-48 md:h-auto flex items-center justify-center p-3 bg-white">
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
          <span class="badge badge-primary">Featured</span>
        </div>
      {/if}
    </div>
    
    <!-- Right side: University info -->
    <div class="p-4 md:w-2/3">
      <div class="card-content">
        <div class="flex-grow">
          <!-- University name and ranking -->
          <div class="flex items-start justify-between mb-2 gap-2">
            <h3 class="text-xl font-bold line-clamp-2">{university.name}</h3>
            {#if university.ranking}
              <span class="badge badge-outline border-blue-300 text-blue-700 whitespace-nowrap">
                Rank #{university.ranking}
              </span>
            {/if}
          </div>
          
          <!-- Location -->
          <p class="text-muted-foreground text-sm mb-2">
            {university.city}
          </p>
          
          <!-- Description -->
          <p class="text-sm line-clamp-3 mb-3">
            {university.description}
          </p>
          
          <!-- Tags and badges -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            {#if university.hasGrants}
              <span class="badge badge-green">Grants Available</span>
            {/if}
            
            {#if university.educationType && university.educationType.length > 0}
              {#each university.educationType as type}
                <span class="badge badge-outline">{type}</span>
              {/each}
            {/if}
          </div>
        </div>
        
        <!-- Stats and action button -->
        <div class="card-footer">
          <div class="flex gap-4">
            {#if university.foundedYear}
              <div class="text-center">
                <p class="text-xs text-muted-foreground">Founded</p>
                <p class="text-sm font-semibold">{university.foundedYear}</p>
              </div>
            {/if}
            
            {#if university.studentsCount}
              <div class="text-center">
                <p class="text-xs text-muted-foreground">Students</p>
                <p class="text-sm font-semibold">{formatNumber(university.studentsCount)}</p>
              </div>
            {/if}
          </div>
          
          <Button 
            variant="default" 
            class="whitespace-nowrap btn-details flex items-center gap-2"
            on:click={handleViewDetails}
          >
            View Details
            <ArrowRight class="w-3.5 h-3.5 arrow-icon" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</div> 
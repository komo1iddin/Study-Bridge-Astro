<script lang="ts">
  import type { University } from "../lib/data";
  import { Button } from "../../../../../components/ui/svelte";
  import { cn } from "../../../../../lib/utils";
  
  export let university: University;

  // Default image if not provided
  const defaultImage = "https://images.unsplash.com/photo-1568792923760-d70635a89fdd?q=80&w=3540&auto=format&fit=crop";
  const defaultLogo = "https://placehold.co/80x80/e2e8f0/1e293b?text=U";
  
  // Format large numbers with commas
  function formatNumber(num: number | undefined): string {
    if (num === undefined) return "N/A";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<div class="w-full border rounded-lg shadow-sm overflow-hidden bg-card card-hover-effect">
  <div class="flex flex-col md:flex-row md:h-60">
    <!-- Left side: University image with logo -->
    <div class="relative md:w-1/3 h-48 md:h-full">
      <!-- Background image -->
      <img 
        src={university.image || defaultImage} 
        alt={university.name}
        class="absolute inset-0 w-full h-full object-cover"
      />
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <!-- Logo in bottom left corner -->
      <div class="absolute bottom-3 left-3 p-1.5 bg-white rounded-md">
        <img 
          src={university.logo || defaultLogo} 
          alt={`${university.name} logo`}
          class="w-12 h-12 object-contain"
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
    <div class="p-5 md:w-2/3 flex flex-col">
      <div class="flex-1">
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
        <p class="text-sm line-clamp-3 mb-4">
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
      <div class="mt-auto flex items-center justify-between gap-2 pt-2 border-t">
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
        
        <Button variant="default" class="whitespace-nowrap">
          View Details
        </Button>
      </div>
    </div>
  </div>
</div> 
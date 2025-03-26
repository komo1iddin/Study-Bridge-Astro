<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Label } from "../../../../../../components/ui/svelte";
  import type { Filters } from '../../lib/data';
  import { educationTypes, rankingRanges } from '../../lib/data';
  
  export let filters: Filters;
  export let cities: string[] = [];
  
  const dispatch = createEventDispatcher<{
    change: { key: keyof Filters; value: string };
  }>();
  
  function handleChange(key: keyof Filters, value: string) {
    dispatch('change', { key, value });
  }
</script>

<div class="space-y-6">
  <!-- Education Types -->
  <div class="space-y-3">
    <h3 class="text-sm font-medium">Education Type</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="education-all"
          value="all"
          checked={filters.educationType === "all"}
          on:change={() => handleChange("educationType", "all")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="education-all">All</Label>
      </div>
      
      {#each educationTypes as type}
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            id={`education-${type.value}`}
            value={type.value}
            checked={filters.educationType === type.value}
            on:change={() => handleChange("educationType", type.value)}
            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label for={`education-${type.value}`}>{type.label}</Label>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Cities -->
  <div class="space-y-3">
    <h3 class="text-sm font-medium">City</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="city-all"
          value="all"
          checked={filters.city === "all"}
          on:change={() => handleChange("city", "all")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="city-all">All</Label>
      </div>
      
      {#each cities as city}
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            id={`city-${city}`}
            value={city}
            checked={filters.city === city}
            on:change={() => handleChange("city", city)}
            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label for={`city-${city}`}>{city}</Label>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Has Grants -->
  <div class="space-y-3">
    <h3 class="text-sm font-medium">Grants</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="grants-all"
          value="all"
          checked={filters.hasGrants === "all"}
          on:change={() => handleChange("hasGrants", "all")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="grants-all">All</Label>
      </div>
      
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="grants-true"
          value="true"
          checked={filters.hasGrants === "true"}
          on:change={() => handleChange("hasGrants", "true")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="grants-true">With Grants</Label>
      </div>
    </div>
  </div>
  
  <!-- Ranking -->
  <div class="space-y-3">
    <h3 class="text-sm font-medium">Ranking</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="ranking-all"
          value="all"
          checked={filters.ranking === "all"}
          on:change={() => handleChange("ranking", "all")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="ranking-all">All</Label>
      </div>
      
      {#each rankingRanges as range}
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            id={`ranking-${range.value}`}
            value={range.value}
            checked={filters.ranking === range.value}
            on:change={() => handleChange("ranking", range.value)}
            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label for={`ranking-${range.value}`}>{range.label}</Label>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Featured -->
  <div class="space-y-3">
    <h3 class="text-sm font-medium">Featured</h3>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="featured-all"
          value="all"
          checked={filters.featured === "all"}
          on:change={() => handleChange("featured", "all")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="featured-all">All</Label>
      </div>
      
      <div class="flex items-center space-x-2">
        <input
          type="radio"
          id="featured-true"
          value="true"
          checked={filters.featured === "true"}
          on:change={() => handleChange("featured", "true")}
          class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label for="featured-true">Featured Only</Label>
      </div>
    </div>
  </div>
</div> 
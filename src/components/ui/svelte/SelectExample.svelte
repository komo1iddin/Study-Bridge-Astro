<script lang="ts">
  import Select from '@/components/ui/svelte/Select.svelte';
  import SelectItem from '@/components/ui/svelte/SelectItem.svelte';
  import { onMount } from 'svelte';
  
  let selectedCountry = '';
  
  function handleValueChange(event: CustomEvent) {
    console.log('Selected country:', event.detail.value);
    selectedCountry = event.detail.value;
  }
  
  onMount(() => {
    console.log('SelectExample component mounted');
  });
</script>

<div class="space-y-4 w-full max-w-md p-4">
  <div>
    <label class="text-sm font-medium leading-none mb-2 block">
      Country
    </label>
    
    <Select 
      value={selectedCountry} 
      placeholder="Select a country"
      id="country-select"
      on:change={handleValueChange}
    >
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="au">Australia</SelectItem>
      <SelectItem value="jp">Japan</SelectItem>
    </Select>
  </div>
  
  {#if selectedCountry}
    <div class="p-4 bg-muted rounded-md">
      Selected country: {selectedCountry}
    </div>
  {/if}
</div> 
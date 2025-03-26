<script lang="ts">
  import { cn } from "@/lib/utils";
  import { getContext, onMount, afterUpdate } from 'svelte';
  
  export let value = "";
  export let disabled = false;
  export let id: string | undefined = undefined;
  let className = "";
  export { className as class };
  
  const radioGroup = getContext('RadioGroup');
  let checked = false;
  
  // Update checked state whenever the component updates
  function updateCheckedState() {
    if (radioGroup) {
      checked = radioGroup.getValue() === value;
    }
  }
  
  onMount(updateCheckedState);
  afterUpdate(updateCheckedState);
  
  function handleSelect() {
    if (!disabled && radioGroup) {
      radioGroup.setValue(value);
      updateCheckedState();
    }
  }
</script>

<div class={cn("inline-flex items-center", className)}>
  <button
    type="button"
    role="radio"
    aria-checked={checked}
    data-state={checked ? "checked" : "unchecked"}
    {id}
    disabled={disabled || (radioGroup && radioGroup.isDisabled())}
    class="relative h-4 w-4 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    on:click={handleSelect}
  >
    {#if checked}
      <span class="absolute inset-0 flex items-center justify-center">
        <span class="h-2 w-2 rounded-full bg-primary"></span>
      </span>
    {/if}
  </button>
</div>
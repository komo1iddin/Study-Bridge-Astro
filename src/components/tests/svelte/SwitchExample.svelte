<script>
  import { Switch } from '@/components/ui/svelte';
  
  let options = [
    { id: 'airplane-mode', label: 'Airplane Mode', checked: false },
    { id: 'wifi', label: 'Wi-Fi', checked: true },
    { id: 'bluetooth', label: 'Bluetooth', checked: true },
    { id: 'notifications', label: 'Notifications', checked: false },
    { id: 'dark-mode', label: 'Dark Mode', checked: false, disabled: false },
  ];
  
  // Function to handle switch changes
  function handleSwitchChange(index, event) {
    console.log(`Switch ${options[index].id} changed:`, event.detail.checked);
    options[index].checked = event.detail.checked;
    options = [...options]; // Trigger reactivity
  }
  
  // Toggle all switches
  function toggleAll(value) {
    options = options.map(option => ({ ...option, checked: value }));
  }
  
  // Toggle disabled state for an option
  function toggleDisabled(index) {
    options[index].disabled = !options[index].disabled;
    options = [...options]; // Trigger reactivity
  }
</script>

<div class="space-y-8">
  <div>
    <h3 class="text-lg font-medium mb-4">Switch Examples</h3>
    
    <div class="border rounded-md p-4 mb-6">
      <div class="space-y-4">
        {#each options as option, i}
          <div class="flex items-center justify-between">
            <div class="space-y-0.5">
              <label for={option.id} class="text-sm font-medium">{option.label}</label>
              {#if option.description}
                <p class="text-xs text-muted-foreground">{option.description}</p>
              {/if}
            </div>
            <Switch 
              id={option.id}
              checked={option.checked}
              disabled={option.disabled}
              on:change={(e) => handleSwitchChange(i, e)}
            />
          </div>
        {/each}
      </div>
    </div>
    
    <div class="flex flex-wrap gap-2 mb-6">
      <button 
        class="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => toggleAll(true)}
      >
        Enable All
      </button>
      <button 
        class="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => toggleAll(false)}
      >
        Disable All
      </button>
      <button 
        class="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => toggleDisabled(4)}
      >
        Toggle "Dark Mode" Disabled State
      </button>
    </div>
    
    <div class="border rounded-md p-4">
      <h4 class="font-medium mb-3">Current Settings</h4>
      <pre class="bg-gray-100 p-2 rounded text-xs">{JSON.stringify(options, null, 2)}</pre>
    </div>
  </div>
</div> 
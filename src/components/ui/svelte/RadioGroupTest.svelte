<script>
  import { RadioGroup, RadioGroupItem, Label } from "./index";
  
  let plan = "free";
  
  $: console.log('Current plan:', plan);

  function handleChange(event) {
    console.log('Change event:', event.detail);
    plan = event.detail.value;
  }
  
  function selectPlan(newPlan) {
    plan = newPlan;
  }
</script>

<div class="w-full max-w-md p-6 bg-background rounded-lg border">
  <h2 class="text-xl font-semibold mb-4">Subscription Plan</h2>
  
  <RadioGroup value={plan} on:change={handleChange} class="space-y-3">
    <div class="flex items-center space-x-2 py-1">
      <RadioGroupItem value="free" id="free-plan" />
      <Label for="free-plan" class="font-medium">Free Plan</Label>
    </div>
    
    <div class="flex items-center space-x-2 py-1">
      <RadioGroupItem value="pro" id="pro-plan" />
      <Label for="pro-plan" class="font-medium">Pro Plan</Label>
    </div>
    
    <div class="flex items-center space-x-2 py-1">
      <RadioGroupItem value="enterprise" id="enterprise-plan" />
      <Label for="enterprise-plan" class="font-medium">Enterprise Plan</Label>
    </div>
  </RadioGroup>
  
  <div class="mt-4 p-2 bg-slate-100 rounded">
    Selected: <strong>{plan}</strong>
  </div>
  
  <div class="mt-6">
    <h3 class="text-sm font-medium mb-2">Manually select:</h3>
    <div class="flex gap-2">
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => selectPlan("free")}
      >
        Select Free
      </button>
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => selectPlan("pro")}
      >
        Select Pro
      </button>
      <button 
        class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
        on:click={() => selectPlan("enterprise")}
      >
        Select Enterprise
      </button>
    </div>
  </div>
</div>
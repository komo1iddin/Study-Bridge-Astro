<script>
  import { RadioGroup, RadioGroupItem } from "@/components/ui/svelte";
  import { Label } from "@/components/ui/svelte";
  import { onMount } from "svelte";

  let selectedFruit = "apple";
  
  function handleValueChange(newValue) {
    console.log("Selected fruit changed to:", newValue);
    selectedFruit = newValue;
  }
  
  onMount(() => {
    console.log("RadioGroupExample mounted");
  });
</script>

<div class="space-y-6">
  <h3 class="text-lg font-medium">Radio Group Example</h3>
  
  <RadioGroup value={selectedFruit} onValueChange={handleValueChange}>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="apple" id="apple" />
      <Label for="apple">Apple</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="banana" id="banana" />
      <Label for="banana">Banana</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="orange" id="orange" />
      <Label for="orange">Orange</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="grape" id="grape" />
      <Label for="grape">Grape</Label>
    </div>
  </RadioGroup>
  
  <div class="mt-4 p-3 bg-slate-100 rounded">
    <p>Selected fruit: <strong>{selectedFruit}</strong></p>
  </div>
</div> 
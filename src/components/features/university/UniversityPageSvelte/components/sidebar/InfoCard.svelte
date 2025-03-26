<script lang="ts">
  import { Button } from "../../../../../../components/ui/svelte";
  import { HelpCircle } from 'lucide-svelte';
</script>

<div class="rounded-lg border bg-card p-5 shadow-sm">
  <div class="flex items-start gap-2">
    <HelpCircle class="h-5 w-5 text-primary" />
    <div>
      <h4 class="text-base font-semibold mb-2">Need Help Choosing?</h4>
      <p class="text-sm text-muted-foreground mb-3">
        We can help you find the perfect university based on your preferences.
      </p>
      <Button variant="outline" size="sm" class="w-full">Get Advice</Button>
    </div>
  </div>
</div> 
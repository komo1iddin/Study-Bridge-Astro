<script lang="ts">
  import { Button } from "../../../../../../components/ui/svelte";
  import { HelpCircle } from 'lucide-svelte';
</script>

<div class="rounded-lg border bg-white p-4 shadow-sm">
  <div class="flex items-start gap-3">
    <HelpCircle class="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
    <div>
      <h4 class="text-base font-semibold mb-2">Universitetni tanlashda yordam kerakmi?</h4>
      <p class="text-sm text-muted-foreground mb-3">
        Biz sizga o'z imkoniyatlaringizga mos universitetni tanlashga yordam beramiz.
      </p>
      <Button variant="outline" size="sm" class="w-full">Maslahat olish</Button>
    </div>
  </div>
</div> 
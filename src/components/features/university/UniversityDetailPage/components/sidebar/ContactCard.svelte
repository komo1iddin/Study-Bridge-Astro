<script lang="ts">
  import { MapPin, Mail, Phone } from "lucide-svelte";
  import { Card, CardContent } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;
</script>

<Card class="border-none shadow-md overflow-hidden">
  <CardContent class="p-5">
    <h3 class="font-semibold text-lg mb-4">Contact Information</h3>
    
    <div class="space-y-3">
      {#if university.city}
        <div class="flex items-start gap-3">
          <div class="shrink-0 mt-1">
            <MapPin class="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p class="text-gray-800">{university.city}</p>
          </div>
        </div>
      {/if}
      
      <div class="flex items-start gap-3">
        <div class="shrink-0 mt-1">
          <Mail class="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <a href="mailto:info@{university.name.toLowerCase().replace(/\s+/g, '')}.edu" class="text-blue-600 hover:underline">
            info@{university.name.toLowerCase().replace(/\s+/g, '')}.edu
          </a>
        </div>
      </div>
      
      <div class="flex items-start gap-3">
        <div class="shrink-0 mt-1">
          <Phone class="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <a href="tel:+1234567890" class="text-blue-600 hover:underline">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
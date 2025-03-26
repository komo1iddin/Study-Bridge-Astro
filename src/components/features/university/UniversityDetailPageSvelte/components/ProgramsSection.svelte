<script lang="ts">
  import { GraduationCap, Info } from "lucide-svelte";
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;

  $: fields = Array.isArray(university.fields) ? university.fields : [];
  
  $: programs = university.programs && university.programs[lang] 
    ? university.programs[lang]
    : university.programs?.en || [];
</script>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Academic Programs</CardTitle>
    <CardDescription>Available programs and specializations</CardDescription>
  </CardHeader>
  <CardContent class="space-y-6 pt-4">
    {#if programs.length > 0}
      <div class="grid gap-4 md:grid-cols-2">
        {#each programs as program, index}
          <div
            class="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <GraduationCap class="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 class="font-medium text-slate-800">{program}</h3>
              <p class="text-slate-600 text-sm mt-1">
                Bachelor's, Master's, and PhD programs available
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else if fields.length > 0}
      <div class="grid gap-4 md:grid-cols-2">
        {#each fields as field, index}
          <div
            class="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <GraduationCap class="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 class="font-medium text-slate-800">{field}</h3>
              <p class="text-slate-600 text-sm mt-1">
                Bachelor's, Master's, and PhD programs available
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center text-slate-500">
        No program information available
      </div>
    {/if}

    <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
          <Info class="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 class="font-medium text-slate-800">Program Information</h3>
          <p class="text-slate-600 mt-1 text-sm">
            For detailed program information, curriculum, and credit requirements, please contact the university directly.
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
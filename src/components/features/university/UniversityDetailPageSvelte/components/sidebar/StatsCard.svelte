<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;
</script>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-lg font-bold text-slate-800">University Statistics</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4">
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-slate-600">International Students</span>
        <span class="text-sm font-medium text-slate-900">25%</span>
      </div>
      <div class="w-full bg-slate-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full" style="width: 25%"></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-slate-600">Acceptance Rate</span>
        <span class="text-sm font-medium text-slate-900">65%</span>
      </div>
      <div class="w-full bg-slate-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full" style="width: 65%"></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-slate-600">Graduation Rate</span>
        <span class="text-sm font-medium text-slate-900">85%</span>
      </div>
      <div class="w-full bg-slate-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-slate-600">Faculty-Student Ratio</span>
        <span class="text-sm font-medium text-slate-900">1:15</span>
      </div>
      <div class="w-full bg-slate-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
      </div>
    </div>
  </CardContent>
</Card> 
<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Button } from "@/components/ui/svelte";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/svelte";
  import { Star } from "lucide-svelte";
  import type { TransformedGrantData } from '@/lib/transformers/grantTransformer';
  import type { Lang } from '@/i18n/langUtils';

  // A simple utility function to get icon components by name
  // In a real implementation, this would import from a proper icon registry
  function getIconByName(name: string) {
    // This is a simple placeholder - in real implementation, we'd have more icons
    return Star;
  }

  export let grant: TransformedGrantData;
  export let lang: Lang;
</script>

<Card class="border-none shadow-md">
  <CardHeader>
    <CardTitle class="text-xl font-bold text-slate-800">Grant haqida</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4">
    {#each (grant.description?.split('\n') || []) as paragraph, index}
      <p class="text-slate-600">
        {paragraph}
      </p>
    {/each}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {#each (grant.features || []) as feature}
        {@const FeatureIcon = getIconByName(feature.icon)}
        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
          <div class="flex items-center gap-3 mb-2">
            <div class="bg-blue-100 p-2 rounded-full">
              <svelte:component this={FeatureIcon} class="h-5 w-5 text-blue-600" />
            </div>
            <h3 class="font-medium">{feature.title}</h3>
          </div>
          <p class="text-slate-600 text-sm">{feature.description}</p>
        </div>
      {/each}
    </div>
  </CardContent>
</Card>

<Card class="border-none shadow-md overflow-hidden">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Asosiy ma'lumotlar</CardTitle>
  </CardHeader>
  <CardContent class="p-0">
    <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
      {#each (grant.keyInfo || []) as info}
        {@const InfoIcon = getIconByName(info.icon)}
        <div class="p-6 flex items-center gap-3">
          <div class="flex-shrink-0 bg-blue-50 p-2 rounded-full">
            <svelte:component this={InfoIcon} class="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p class="text-sm text-slate-500">{info.title}</p>
            <p class="font-medium">{info.value}</p>
          </div>
        </div>
      {/each}
    </div>
  </CardContent>
</Card>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Hamkor universitetlar</CardTitle>
    <CardDescription>Grant dasturi doirasida o'qish mumkin bo'lgan universitetlar</CardDescription>
  </CardHeader>
  <CardContent class="space-y-4 pt-2">
    <div class="grid gap-4 md:grid-cols-2">
      {#each (grant.universities || []) as university}
        {@const SchoolIcon = getIconByName("School")}
        <div class="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
          <div class="flex-shrink-0 bg-white p-2 rounded-full border">
            <svelte:component this={SchoolIcon} class="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 class="font-medium">{university.name}</h3>
            <p class="text-sm text-slate-500 mt-1">{university.location}</p>
            <div class="flex items-center gap-1 mt-2">
              {#each Array(5) as _, i}
                <Star class={`h-3 w-3 ${i < university.rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"}`} />
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    <Button variant="outline" class="w-full mt-2">
      Barcha universitetlarni ko'rish
    </Button>
  </CardContent>
</Card>

<Card class="border-none shadow-md">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Bitiruvchilar fikrlari</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4 pt-2">
    <div class="grid gap-4 md:grid-cols-2">
      {#each (grant.testimonials || []) as testimonial}
        <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
          <div class="flex items-start gap-3 mb-3">
            <Avatar>
              <AvatarImage src={testimonial.avatarUrl} />
              <AvatarFallback>{testimonial.initials}</AvatarFallback>
            </Avatar>
            <div>
              <h3 class="font-medium">{testimonial.name}</h3>
              <p class="text-sm text-slate-500">{testimonial.graduationYear}</p>
            </div>
          </div>
          <p class="text-slate-600 text-sm">{testimonial.testimonial}</p>
        </div>
      {/each}
    </div>
  </CardContent>
</Card> 
<script lang="ts">
  import { MapPin, Calendar, Users, GraduationCap, Star, Award } from "lucide-svelte";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;

  $: fields = Array.isArray(university.fields) ? university.fields : [];
  
  $: description = typeof university.description === 'object' 
    ? university.description[lang] || 'No description available' 
    : university.description || 'No description available';
    
  $: students = typeof university.students === 'string' 
    ? university.students 
    : university.students?.[lang] || 'N/A';
</script>

<Card class="border-none shadow-md">
  <CardHeader>
    <CardTitle class="text-xl font-bold text-slate-800">About University</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4">
    <div class="flex items-center gap-4 mb-6">
      <Avatar class="h-24 w-24 border-2 border-white shadow-md">
        <AvatarImage 
          src={university.logo} 
          alt={university.name} 
        />
        <AvatarFallback>{university.name.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div>
        <h2 class="text-xl font-bold text-slate-800">{university.name}</h2>
        <div class="flex items-center gap-2 text-slate-600 mt-1">
          <MapPin class="h-4 w-4 text-blue-600" />
          <span>{university.city}</span>
        </div>
        <div class="flex items-center gap-2 text-slate-600 mt-1">
          <Calendar class="h-4 w-4 text-blue-600" />
          <span>Established: {university.established || 'N/A'}</span>
        </div>
      </div>
    </div>
    
    <p class="text-slate-600">
      {description}
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
        <div class="flex items-center gap-3 mb-2">
          <div class="bg-blue-100 p-2 rounded-full">
            <Users class="h-5 w-5 text-blue-600" />
          </div>
          <h3 class="font-medium">Students</h3>
        </div>
        <p class="text-slate-600 text-sm">
          {students}
        </p>
      </div>
      
      <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
        <div class="flex items-center gap-3 mb-2">
          <div class="bg-blue-100 p-2 rounded-full">
            <GraduationCap class="h-5 w-5 text-blue-600" />
          </div>
          <h3 class="font-medium">Programs</h3>
        </div>
        <p class="text-slate-600 text-sm">{fields.length} Academic Programs</p>
      </div>
      
      <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
        <div class="flex items-center gap-3 mb-2">
          <div class="bg-blue-100 p-2 rounded-full">
            <Star class="h-5 w-5 text-blue-600" />
          </div>
          <h3 class="font-medium">Rating</h3>
        </div>
        <p class="text-slate-600 text-sm">{university.rating || '4'}/5 Overall Rating</p>
      </div>
    </div>
  </CardContent>
</Card>

<Card class="border-none shadow-md overflow-hidden">
  <CardHeader class="pb-2">
    <CardTitle class="text-xl font-bold text-slate-800">Key Information</CardTitle>
  </CardHeader>
  <CardContent class="p-0">
    <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
      <div class="p-6 flex items-center gap-3">
        <div class="flex-shrink-0 bg-blue-50 p-2 rounded-full">
          <MapPin class="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <p class="text-sm text-slate-500">Location</p>
          <p class="font-medium">{university.city}</p>
        </div>
      </div>
      
      <div class="p-6 flex items-center gap-3">
        <div class="flex-shrink-0 bg-blue-50 p-2 rounded-full">
          <Award class="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <p class="text-sm text-slate-500">Ranking</p>
          <p class="font-medium">Top {university.ranking || Math.floor(Math.random() * 100) + 1} in Asia</p>
        </div>
      </div>
      
      <div class="p-6 flex items-center gap-3">
        <div class="flex-shrink-0 bg-blue-50 p-2 rounded-full">
          <Calendar class="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <p class="text-sm text-slate-500">Academic Year</p>
          <p class="font-medium">September - June</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card> 
<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/svelte";
  import { BookOpen, Coffee, Utensils, Wifi, Monitor, Dumbbell, Microscope, Map } from "lucide-svelte";
  import type { University, FacilityCategory } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;
  
  // Example facilities data - in a real app, this would come from university data
  const sampleFacilityCategories: FacilityCategory[] = [
    {
      name: "Academic Facilities",
      description: "Resources to support learning and research",
      facilities: [
        { name: "Main Library", description: "Over 5 million volumes and extensive digital resources", icon: "BookOpen" },
        { name: "Computer Labs", description: "24/7 access to advanced computing equipment", icon: "Monitor" },
        { name: "Research Laboratories", description: "State-of-the-art research facilities across disciplines", icon: "Microscope" }
      ]
    },
    {
      name: "Recreational Facilities",
      description: "Places to relax and stay active",
      facilities: [
        { name: "Student Center", description: "Central hub for student activities and relaxation", icon: "Coffee" },
        { name: "Fitness Center", description: "Modern gym equipment and fitness classes", icon: "Dumbbell" },
        { name: "Sports Fields", description: "Indoor and outdoor facilities for various sports", icon: "Map" }
      ]
    },
    {
      name: "Living Facilities",
      description: "Amenities for comfortable campus life",
      facilities: [
        { name: "Dining Halls", description: "Multiple dining options with diverse menu choices", icon: "Utensils" },
        { name: "Campus Wi-Fi", description: "High-speed internet access throughout campus", icon: "Wifi" }
      ]
    }
  ];
  
  // Use university facilities data if available, otherwise use sample data
  $: facilityCategories = university.facilities && Array.isArray(university.facilities) && university.facilities.length > 0
    ? university.facilities
    : sampleFacilityCategories;
    
  // Icon mapping for facility icons
  const iconMapping = {
    "BookOpen": BookOpen,
    "Coffee": Coffee,
    "Utensils": Utensils,
    "Wifi": Wifi,
    "Monitor": Monitor,
    "Dumbbell": Dumbbell,
    "Microscope": Microscope,
    "Map": Map
  };
  
  // Function to get the appropriate icon component
  function getIconComponent(iconName: string | undefined) {
    if (!iconName) return Coffee;
    return iconMapping[iconName] || Coffee;
  }
</script>

<div class="space-y-6">
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Campus Facilities</CardTitle>
      <CardDescription>Explore the facilities available at {university.name}</CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-slate-600 mb-6">
        {university.name} offers a wide range of modern facilities designed to enhance the academic 
        experience and support student life. Our campus provides everything students need for successful 
        studies and a balanced lifestyle.
      </p>
      
      <div class="grid gap-6">
        {#each facilityCategories as category}
          <div>
            <h3 class="text-lg font-semibold text-slate-800 mb-2">{category.name}</h3>
            <p class="text-slate-600 text-sm mb-3">{category.description}</p>
            
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {#each category.facilities as facility}
                <div class="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div class="flex gap-3">
                    <div class="flex-shrink-0">
                      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svelte:component this={getIconComponent(facility.icon)} class="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-medium text-slate-800">{facility.name}</h4>
                      <p class="text-sm text-slate-600 mt-1">{facility.description}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Campus Map</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="aspect-video bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
        <div class="text-center p-6">
          <Map class="h-12 w-12 text-slate-400 mx-auto mb-2" />
          <p class="text-slate-500">Interactive campus map would be displayed here</p>
          <p class="text-sm text-slate-400 mt-1">Click and drag to explore the campus</p>
        </div>
      </div>
      
      <div class="mt-4 p-3 bg-slate-50 rounded-lg">
        <p class="text-sm text-slate-600">
          <strong>Campus Tours:</strong> In-person guided tours are available Monday through Friday at 10:00 AM and 2:00 PM, 
          and on Saturdays at 11:00 AM. Virtual tours can be accessed anytime through our website.
        </p>
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Accessibility</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-slate-600 mb-4">
        {university.name} is committed to providing an accessible campus for all students. Our facilities include:
      </p>
      
      <ul class="space-y-2 text-slate-600">
        <li class="flex items-center gap-2">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span>Wheelchair accessible entrances at all major buildings</span>
        </li>
        <li class="flex items-center gap-2">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span>Elevators in all multi-story buildings</span>
        </li>
        <li class="flex items-center gap-2">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span>Accessible restrooms throughout campus</span>
        </li>
        <li class="flex items-center gap-2">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span>Assistive technology in libraries and computer labs</span>
        </li>
        <li class="flex items-center gap-2">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span>Dedicated Office of Disability Services</span>
        </li>
      </ul>
    </CardContent>
  </Card>
</div> 
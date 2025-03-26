<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/svelte";
  import { Wifi, Utensils, Coffee, ShowerHead, Building, DoorClosed } from "lucide-svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;
  
  // Sample dorm data - in a real app, this would come from university data
  const dorms = [
    {
      name: "Freshman Residence Hall",
      image: "https://images.unsplash.com/photo-1555854877-5b30fa8ad95e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ybXxlbnwwfHwwfHx8MA%3D%3D&w=800&q=80",
      description: "Modern residence hall primarily for first-year students, featuring shared rooms and community bathrooms.",
      roomTypes: ["Double (shared)", "Triple (shared)"],
      amenities: ["Community Bathroom", "Lounge Areas", "Laundry Facilities", "Wi-Fi", "Study Rooms"],
      mealPlan: "Required",
      yearBuilt: 2015,
      distanceToCampus: "On campus"
    },
    {
      name: "Sophomore Apartments",
      image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvcm18ZW58MHx8MHx8fDA%3D&w=800&q=80",
      description: "Suite-style living for second-year students with shared common areas and private bedrooms.",
      roomTypes: ["Single (private)", "Double (shared)"],
      amenities: ["Private Bathroom", "Kitchen", "Living Room", "Wi-Fi", "Laundry Facilities"],
      mealPlan: "Optional",
      yearBuilt: 2018,
      distanceToCampus: "On campus"
    },
    {
      name: "Graduate Housing",
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&w=800&q=80",
      description: "Apartment-style housing designed for graduate students and families, with full kitchens and private spaces.",
      roomTypes: ["Studio", "One-Bedroom", "Two-Bedroom"],
      amenities: ["Full Kitchen", "Private Bathroom", "Living Room", "Wi-Fi", "Parking"],
      mealPlan: "Not Available",
      yearBuilt: 2010,
      distanceToCampus: "0.5 miles from main campus"
    }
  ];
  
  // Icons for amenities
  const amenityIcons = {
    "Wi-Fi": Wifi,
    "Kitchen": Utensils,
    "Full Kitchen": Utensils,
    "Community Bathroom": ShowerHead,
    "Private Bathroom": ShowerHead,
    "Lounge Areas": Coffee,
    "Living Room": Coffee,
    "Laundry Facilities": Building,
    "Study Rooms": Building,
    "Parking": Building
  };
</script>

<div class="space-y-6">
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Student Housing Options</CardTitle>
      <CardDescription>Explore dormitory and housing options at {university.name}</CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-slate-600 mb-6">
        {university.name} offers a variety of housing options designed to meet the needs of all students,
        from first-year undergraduates to graduate students and families. All residence halls and apartments
        are designed to support academic success and community building.
      </p>
      
      <div class="space-y-8">
        {#each dorms as dorm}
          <div class="border border-slate-200 rounded-lg overflow-hidden">
            <div class="grid md:grid-cols-3">
              <!-- Dorm Image -->
              <div class="aspect-video md:aspect-auto md:h-full">
                <img 
                  src={dorm.image} 
                  alt={dorm.name}
                  class="w-full h-full object-cover"
                />
              </div>
              
              <!-- Dorm Details -->
              <div class="p-4 md:col-span-2">
                <h3 class="text-lg font-semibold text-slate-800">{dorm.name}</h3>
                <p class="text-slate-600 mt-1 mb-3">{dorm.description}</p>
                
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-medium text-slate-700 mb-1">Room Types</h4>
                    <ul class="space-y-1">
                      {#each dorm.roomTypes as roomType}
                        <li class="flex items-center gap-2 text-sm text-slate-600">
                          <DoorClosed class="h-4 w-4 text-blue-600" />
                          <span>{roomType}</span>
                        </li>
                      {/each}
                    </ul>
                    
                    <div class="mt-3">
                      <h4 class="font-medium text-slate-700 mb-1">Details</h4>
                      <div class="text-sm text-slate-600 space-y-1">
                        <div>Year Built: {dorm.yearBuilt}</div>
                        <div>Location: {dorm.distanceToCampus}</div>
                        <div>Meal Plan: {dorm.mealPlan}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-medium text-slate-700 mb-1">Amenities</h4>
                    <div class="flex flex-wrap gap-2">
                      {#each dorm.amenities as amenity}
                        <div class="bg-slate-50 px-2 py-1 rounded text-xs flex items-center gap-1">
                          {#if amenityIcons[amenity]}
                            <svelte:component this={amenityIcons[amenity]} class="h-3 w-3 text-blue-600" />
                          {/if}
                          <span>{amenity}</span>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Housing Application Process</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <p class="text-slate-600">
          To apply for on-campus housing at {university.name}, follow these steps:
        </p>
        
        <ol class="list-decimal list-inside space-y-2 text-slate-600 ml-4">
          <li>Accept your offer of admission and pay your enrollment deposit</li>
          <li>Log in to the student housing portal using your student credentials</li>
          <li>Complete the housing preference form, indicating your building and room preferences</li>
          <li>Pay the housing application fee</li>
          <li>Wait for your housing assignment (typically sent 4-6 weeks before the semester begins)</li>
        </ol>
        
        <div class="bg-blue-50 p-3 rounded-lg mt-2">
          <p class="text-sm text-blue-800">
            <strong>Note:</strong> Housing assignments for first-year students are made on a first-come, first-served basis. 
            We recommend applying early for the best chance of receiving your preferred housing option.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Off-Campus Housing</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-slate-600 mb-4">
        While {university.name} encourages students to live on campus, we recognize that some students prefer 
        off-campus housing options. The university maintains relationships with several approved off-campus 
        housing providers that meet our safety and quality standards.
      </p>
      
      <div class="bg-slate-50 p-3 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-1">Off-Campus Housing Resources</h4>
        <ul class="text-sm text-slate-600 space-y-1">
          <li>• Off-Campus Housing Database</li>
          <li>• Roommate Matching Service</li>
          <li>• Transportation Information</li>
          <li>• Landlord/Tenant Rights Guide</li>
          <li>• Safety and Security Tips</li>
        </ul>
      </div>
    </CardContent>
  </Card>
</div> 
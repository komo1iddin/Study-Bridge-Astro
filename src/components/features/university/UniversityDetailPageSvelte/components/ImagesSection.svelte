<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import type { University } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";

  export let university: University;
  export let lang: Lang;
  
  // Example gallery data - in a real app, this would come from university data
  const galleryCategories = [
    {
      name: "Campus",
      images: [
        { src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=800&q=80", alt: "Campus Main Building", caption: "The iconic main building" },
        { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2UlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D&w=800&q=80", alt: "Campus Quad", caption: "Central quad area" },
        { src: "https://images.unsplash.com/photo-1592494804071-faea15d93a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2UlMjBsaWJyYXJ5fGVufDB8fDB8fHww&w=800&q=80", alt: "University Library", caption: "The main library" }
      ]
    },
    {
      name: "Student Life",
      images: [
        { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D&w=800&q=80", alt: "Students Studying", caption: "Collaborative learning" },
        { src: "https://images.unsplash.com/photo-1593347535897-20ab3e4c8acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRlbnQlMjBsaWZlfGVufDB8fDB8fHww&w=800&q=80", alt: "Campus Event", caption: "Annual student festival" },
        { src: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHMlMjBjYWZldGVyaWF8ZW58MHx8MHx8fDA%3D&w=800&q=80", alt: "Student Cafeteria", caption: "Main dining hall" }
      ]
    },
    {
      name: "Facilities",
      images: [
        { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D&w=800&q=80", alt: "Science Lab", caption: "Advanced research laboratory" },
        { src: "https://images.unsplash.com/photo-1574269910231-bc508bcb68ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlY3R1cmUlMjBoYWxsfGVufDB8fDB8fHww&w=800&q=80", alt: "Lecture Hall", caption: "Modern lecture facilities" },
        { src: "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D&w=800&q=80", alt: "Fitness Center", caption: "State-of-the-art gym" }
      ]
    }
  ];
  
  let selectedImage = galleryCategories[0].images[0];
  
  function selectImage(image) {
    selectedImage = image;
  }
</script>

<div class="space-y-6">
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Photo Gallery</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-slate-600 mb-6">
        Explore {university.name} through our photo gallery. Get a glimpse of our beautiful campus, 
        facilities, and student life.
      </p>
      
      <!-- Featured Image -->
      <div class="mb-6">
        <div class="aspect-video rounded-lg overflow-hidden bg-slate-100">
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            class="w-full h-full object-cover"
          />
        </div>
        <p class="text-sm text-slate-600 mt-2">{selectedImage.caption}</p>
      </div>
      
      <!-- Categories and thumbnails -->
      <div class="space-y-6">
        {#each galleryCategories as category}
          <div>
            <h3 class="text-lg font-semibold text-slate-800 mb-3">{category.name}</h3>
            <div class="grid grid-cols-3 gap-3">
              {#each category.images as image}
                <button 
                  class="aspect-video rounded-lg overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  class:border-blue-500={selectedImage.src === image.src}
                  class:border-transparent={selectedImage.src !== image.src}
                  on:click={() => selectImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    class="w-full h-full object-cover"
                  />
                </button>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>
  
  <Card class="border-none shadow-md">
    <CardHeader>
      <CardTitle class="text-xl font-bold text-slate-800">Virtual Tour</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
        <div class="text-center p-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-slate-400"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          <p class="text-slate-500">360° Virtual Campus Tour</p>
          <p class="text-sm text-slate-400 mt-1">Click to explore our campus virtually</p>
        </div>
      </div>
      
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div class="p-3 bg-slate-50 rounded-lg">
          <h4 class="font-medium text-slate-800 mb-1">Download Virtual Tour App</h4>
          <p class="text-sm text-slate-600">
            Experience our campus in VR/AR with our dedicated mobile app.
          </p>
        </div>
        
        <div class="p-3 bg-slate-50 rounded-lg">
          <h4 class="font-medium text-slate-800 mb-1">Schedule Guided Tour</h4>
          <p class="text-sm text-slate-600">
            Book an in-person guided tour with our student ambassadors.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div> 
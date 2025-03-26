<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/svelte";
  import type { University, GalleryCategory, GalleryImage } from "@/types/university";
  import type { Lang } from "@/i18n/langUtils";
  import { onMount } from "svelte";
  import { useLazyLoad } from "@/utils/componentLazyLoader";

  export let university: University;
  export let lang: Lang;
  
  // Create lazy loading action
  const lazyGallery = useLazyLoad('gallery-thumbnails', {
    rootMargin: '100px',
    threshold: 0.1
  });
  
  let isLoaded = false;
  let hasError = false;
  
  // Example gallery data - in a real app, this would come from university data
  const sampleGalleryCategories: GalleryCategory[] = [
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
  
  // Debug logs
  onMount(() => {
    console.log('ImagesSection mounted');
    console.log('University:', university);
    console.log('University galleryCategories:', university?.galleryCategories);
    console.log('Using sample gallery data?', !university?.galleryCategories);
    
    // Make sure we have valid data before proceeding
    if (!galleryData || galleryData.length === 0) {
      console.warn('No gallery data available, using sample data');
      _galleryData = sampleGalleryCategories;
    }

    // Update selected image if it's not set
    if (!selectedImage && galleryData.length > 0 && galleryData[0].images && galleryData[0].images.length > 0) {
      selectedImage = galleryData[0].images[0];
    }
    
    // Set loading state after data is ready
    setTimeout(() => {
      isLoaded = true;
    }, 200);
  });
  
  // Local copy of gallery data to ensure we can mutate it safely
  let _galleryData = [];
  
  // Use university gallery data if available, otherwise use sample data
  $: {
    if (university?.galleryCategories && university.galleryCategories.length > 0) {
      _galleryData = [...university.galleryCategories];
      console.log('Using university gallery data', _galleryData);
    } else {
      _galleryData = [...sampleGalleryCategories];
      console.log('Using sample gallery data', _galleryData);
    }
  }
  
  // Reactive reference to gallery data for the template
  $: galleryData = _galleryData || [];
  
  // Default fallback image
  const fallbackImage = { 
    src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&w=800&q=80", 
    alt: university?.name || "University Campus", 
    caption: "Campus view" 
  };
  
  // Select the first image as default (with safety checks)
  $: defaultImg = galleryData && galleryData.length > 0 && 
                 galleryData[0]?.images && galleryData[0].images.length > 0 
                 ? galleryData[0].images[0] 
                 : { 
                     src: university?.image || fallbackImage.src, 
                     alt: university?.name || fallbackImage.alt, 
                     caption: fallbackImage.caption 
                   };
  
  // Initialize with default image
  let selectedImage = defaultImg;
  
  // Safely select an image, with error checking
  function selectImage(image: GalleryImage) {
    if (!image) {
      console.error('Attempted to select undefined image');
      return;
    }
    console.log('Selected image:', image);
    selectedImage = image;
  }
  
  // Function to handle image load errors
  function handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/800x450?text=Image+Not+Available";
    hasError = true;
  }

  // Safety check function to verify an image is valid
  function isValidImage(image: any): boolean {
    return image && typeof image === 'object' && typeof image.src === 'string';
  }

  // Function to optimize image URLs
  function optimizeImageUrl(url: string, width: number = 800): string {
    if (!url) return '';
    
    // If it's already a local URL or doesn't need optimization, return as is
    if (url.startsWith('/') || url.includes('placeholder')) {
      return url;
    }
    
    // For Unsplash images, we can use their built-in optimization
    if (url.includes('unsplash.com')) {
      // Add width and quality parameters to Unsplash URLs
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?w=${width}&q=75&auto=format`;
    }
    
    // Add width and height parameters to other image URLs when possible
    if (url.includes('?')) {
      // URL already has query parameters
      if (!url.includes('width=') && !url.includes('w=')) {
        return `${url}&width=${width}`;
      }
      return url;
    } else {
      // URL has no query parameters
      return `${url}?width=${width}`;
    }
  }
</script>

{#if !isLoaded}
  <div class="space-y-6">
    <Card class="border-none shadow-md">
      <CardHeader>
        <div class="h-6 w-32 bg-slate-200 rounded animate-pulse"></div>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <div class="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
          
          <div class="aspect-video rounded-lg bg-slate-200 animate-pulse"></div>
          
          <div class="space-y-4">
            <div class="h-5 w-24 bg-slate-200 rounded animate-pulse"></div>
            <div class="grid grid-cols-3 gap-3">
              {#each Array(3) as _, i}
                <div class="aspect-video rounded-lg bg-slate-200 animate-pulse"></div>
              {/each}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
{:else}
  <div class="space-y-6">
    <Card class="border-none shadow-md">
      <CardHeader>
        <CardTitle class="text-xl font-bold text-slate-800">Photo Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-slate-600 mb-6">
          Explore {university?.name || 'the university'} through our photo gallery. Get a glimpse of our beautiful campus, 
          facilities, and student life.
        </p>
        
        <!-- Featured Image -->
        {#if selectedImage && isValidImage(selectedImage)}
          <div class="mb-6">
            <div class="aspect-video rounded-lg overflow-hidden bg-slate-100">
              <img 
                src={optimizeImageUrl(selectedImage.src, 1200)} 
                alt={selectedImage.alt || 'University image'}
                class="w-full h-full object-cover"
                loading="eager" 
                fetchpriority="high"
                on:error={handleImageError}
              />
            </div>
            <p class="text-sm text-slate-600 mt-2">{selectedImage.caption || 'University campus'}</p>
            {#if hasError}
              <p class="text-xs text-amber-600 mt-1">Some images may not be available</p>
            {/if}
          </div>
        {:else}
          <div class="mb-6">
            <div class="aspect-video rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
              <p class="text-slate-400">No image available</p>
            </div>
          </div>
        {/if}
        
        <!-- Categories and thumbnails -->
        <div class="space-y-6" use:lazyGallery>
          {#if galleryData && galleryData.length > 0}
            {#each galleryData as category}
              {#if category && category.images && category.images.length > 0}
                <div>
                  <h3 class="text-lg font-semibold text-slate-800 mb-3">{category.name || 'Gallery'}</h3>
                  <div class="grid grid-cols-3 gap-3">
                    {#each category.images.filter(img => isValidImage(img)) as image}
                      <button 
                        class="aspect-video rounded-lg overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        class:border-blue-500={selectedImage && image && selectedImage.src === image.src}
                        class:border-transparent={!selectedImage || !image || selectedImage.src !== image.src}
                        on:click={() => selectImage(image)}
                      >
                        <img 
                          src={optimizeImageUrl(image.src, 400)} 
                          alt={image.alt || 'Gallery image'}
                          class="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          on:error={handleImageError}
                        />
                      </button>
                    {/each}
                  </div>
                </div>
              {/if}
            {/each}
          {:else}
            <p class="text-center text-slate-500">No gallery images available</p>
          {/if}
        </div>
      </CardContent>
    </Card>
  </div>
{/if} 
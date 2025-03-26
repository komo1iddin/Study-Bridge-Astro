# University Detail Page - Gallery Feature

This README provides information on the newly added gallery feature for the university detail page.

## Overview

The gallery feature allows users to view photos of the university organized by categories. It includes:

- Photo gallery organized by categories (Campus, Student Life, etc.)
- Large featured image display with caption
- Thumbnail navigation for each category
- Virtual tour card (placeholder for future implementation)

## How to Access the Gallery

There are several ways to access the gallery:

1. **URL Hash Navigation**: Append `#images` to the URL
   ```
   http://localhost:4321/en/universities/test-university#images
   ```

2. **Tab Navigation**: Click on the "Images" tab in the university detail page navigation

3. **View Gallery Button**: Click on the "View Gallery" button in the sidebar

## Data Structure

The gallery data is stored in the university YAML files under `galleryCategories`:

```yaml
galleryCategories:
  - name: "Campus"
    images:
      - src: "https://example.com/image1.jpg"
        alt: "University Main Building"
        caption: "Our iconic main administration building"
      - src: "https://example.com/image2.jpg"
        alt: "Campus Green"
        caption: "The central campus green area"
  - name: "Student Life"
    images:
      - src: "https://example.com/image3.jpg"
        alt: "Student Study Group"
        caption: "Collaborative learning is encouraged through study groups"
```

## Components

- **ImagesSection.svelte**: Main component for displaying the gallery
- **UniversityDetailPage.svelte**: Parent component that manages tab navigation and includes the ImagesSection

## Fallback Behavior

If a university doesn't have gallery data defined, the component will display sample images as a fallback. This ensures users always see content in the gallery section, even if data is incomplete.

## Error Handling

The component includes error handling for images that fail to load, automatically replacing them with a placeholder image. Users will see a subtle message indicating that some images may not be available.

## Testing

You can test the gallery feature using the test HTML page located at:

```
/src/components/features/university/UniversityDetailPageSvelte/ImagesPageTest.html
```

This page includes instructions and scripts for testing different aspects of the gallery feature.

## Known Issues and Limitations

- TypeScript linter errors in the IDE are expected and don't affect functionality
- In development mode, there might be a brief loading state while the component initializes
- The Virtual Tour section is currently a placeholder 
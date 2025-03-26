// optimize-images.js
// A script to generate optimized images in different formats and sizes
// Run with: node scripts/optimize-images.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const sourceDir = path.join(__dirname, '../public/images/hero');
const outputDir = sourceDir; // Same directory for simplicity
const imageSizes = [400, 800, 1686]; // Width in pixels
const formats = ['jpg', 'webp'];

// Check if imagemagick is installed
try {
  execSync('convert -version', { stdio: 'ignore' });
} catch (error) {
  console.error('Error: ImageMagick is not installed. Please install it first.');
  console.log('For macOS: brew install imagemagick');
  process.exit(1);
}

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process images
function processImages() {
  // Get all image files from source directory
  const files = fs.readdirSync(sourceDir)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext);
    })
    .filter(file => !file.includes('-400') && !file.includes('-800')); // Skip already processed files

  if (files.length === 0) {
    console.log('No images found to process.');
    return;
  }

  console.log(`Found ${files.length} images to process.`);

  files.forEach(file => {
    const filePath = path.join(sourceDir, file);
    const fileNameWithoutExt = path.basename(file, path.extname(file));
    
    console.log(`Processing ${file}...`);

    // Generate different sizes and formats
    imageSizes.forEach(size => {
      // Skip original size for the original file
      if (size === 1686 && !fileNameWithoutExt.includes('-')) {
        return;
      }

      formats.forEach(format => {
        const outputFileName = size === 1686 
          ? `${fileNameWithoutExt}.${format}`
          : `${fileNameWithoutExt}-${size}.${format}`;
        const outputPath = path.join(outputDir, outputFileName);
        
        // Skip if file already exists
        if (fs.existsSync(outputPath)) {
          console.log(`  - ${outputFileName} already exists, skipping.`);
          return;
        }

        try {
          // Use ImageMagick to resize and convert
          const command = `convert "${filePath}" -resize ${size}x -quality 85 "${outputPath}"`;
          execSync(command);
          console.log(`  - Created ${outputFileName}`);
        } catch (error) {
          console.error(`  - Error creating ${outputFileName}:`, error.message);
        }
      });
    });
  });

  console.log('Image processing completed!');
}

processImages();

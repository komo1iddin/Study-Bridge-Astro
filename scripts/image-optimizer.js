/**
 * Image Optimizer Script
 * 
 * This script optimizes images in the project by:
 * 1. Converting images to WebP format for better compression
 * 2. Resizing images to different sizes for responsive loading
 * 3. Compressing images to reduce file size
 * 
 * Usage: node scripts/image-optimizer.js
 */

import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharp from 'sharp';

// Get current file's directory (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Configuration
const IMAGE_DIRECTORIES = [
  'public/images',
  'src/assets/images'
];

const OUTPUT_DIRECTORY = 'public/optimized-images';
const IMAGE_SIZES = [400, 800, 1200, 1600]; // Different sizes for responsive images
const IMAGE_FORMATS = ['webp', 'jpg']; // Formats to convert to
const QUALITY = 80; // Image quality (0-100)

// Ensure the output directory exists
async function ensureOutputDirectory() {
  if (!fs.existsSync(OUTPUT_DIRECTORY)) {
    await fsPromises.mkdir(OUTPUT_DIRECTORY, { recursive: true });
    console.log(`✅ Created output directory: ${OUTPUT_DIRECTORY}`);
  }
}

// Get all image files recursively
async function getAllImageFiles(directory) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  let imageFiles = [];
  
  try {
    // Check if directory exists
    if (!fs.existsSync(directory)) {
      console.log(`ℹ️ Directory ${directory} does not exist, skipping`);
      return imageFiles;
    }
    
    const files = await fsPromises.readdir(directory, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(directory, file.name);
      
      if (file.isDirectory()) {
        // Recursively scan subdirectories
        const subDirImages = await getAllImageFiles(fullPath);
        imageFiles = [...imageFiles, ...subDirImages];
      } else {
        // Check if file is an image
        const ext = path.extname(file.name).toLowerCase();
        if (imageExtensions.includes(ext)) {
          imageFiles.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error scanning directory ${directory}:`, error);
  }
  
  return imageFiles;
}

// Optimize a single image
async function optimizeImage(imagePath) {
  const filename = path.basename(imagePath, path.extname(imagePath));
  const relativePath = path.relative(process.cwd(), imagePath);
  console.log(`🔄 Processing: ${relativePath}`);
  
  // Create subdirectory structure in output directory
  const relativeDir = path.dirname(relativePath);
  const outputSubDir = path.join(OUTPUT_DIRECTORY, relativeDir);
  
  if (!fs.existsSync(outputSubDir)) {
    await fsPromises.mkdir(outputSubDir, { recursive: true });
  }
  
  try {
    // Read the image once
    const imageBuffer = await fsPromises.readFile(imagePath);
    
    // Process for different sizes and formats
    for (const size of IMAGE_SIZES) {
      for (const format of IMAGE_FORMATS) {
        const outputFilename = `${filename}-${size}.${format}`;
        const outputPath = path.join(outputSubDir, outputFilename);
        
        // Skip if file already exists
        if (fs.existsSync(outputPath)) {
          console.log(`  ⏩ ${outputFilename} already exists, skipping`);
          continue;
        }
        
        try {
          // Create a base sharp instance for this size
          const resizedImage = sharp(imageBuffer)
            .resize(size)
            .withMetadata(); // Preserve metadata like EXIF
          
          // Handle different formats
          if (format === 'webp') {
            await resizedImage
              .webp({ quality: QUALITY })
              .toFile(outputPath);
          } else if (format === 'jpg' || format === 'jpeg') {
            await resizedImage
              .jpeg({ quality: QUALITY, mozjpeg: true }) // mozjpeg for better compression
              .toFile(outputPath);
          } else if (format === 'png') {
            await resizedImage
              .png({ quality: QUALITY })
              .toFile(outputPath);
          } else if (format === 'avif') {
            await resizedImage
              .avif({ quality: QUALITY })
              .toFile(outputPath);
          }
          
          console.log(`  ✅ Created ${outputFilename}`);
        } catch (error) {
          console.error(`  ❌ Error creating ${outputFilename}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${relativePath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting image optimization...');
  
  // Ensure output directory exists
  await ensureOutputDirectory();
  
  // Process all image directories
  let allImages = [];
  for (const directory of IMAGE_DIRECTORIES) {
    const fullPath = path.join(projectRoot, directory);
    console.log(`🔍 Scanning ${directory} for images...`);
    const images = await getAllImageFiles(fullPath);
    console.log(`  📊 Found ${images.length} images in ${directory}`);
    allImages = [...allImages, ...images];
  }
  
  console.log(`📊 Total images found: ${allImages.length}`);
  
  // Optimize each image
  for (const imagePath of allImages) {
    await optimizeImage(imagePath);
  }
  
  console.log('🎉 Image optimization completed!');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}); 
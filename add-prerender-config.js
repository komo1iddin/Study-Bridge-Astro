// Script to add prerender = false to all files in the [lang] directory
import fs from 'fs';
import { execSync } from 'child_process';

// Find all Astro files in the [lang] directory
const files = execSync('find "src/pages/[lang]" -type f -name "*.astro"')
  .toString()
  .trim()
  .split('\n');

console.log(`Found ${files.length} files to update`);

// Files processed counter
let processedCount = 0;

files.forEach(file => {
  try {
    // Read file content
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Skip files that already have prerender = false
    if (content.includes('export const prerender = false')) {
      console.log(`Skipping already updated file: ${file}`);
      return;
    }

    // Find the closing frontmatter delimiter
    const frontmatterEndIndex = content.indexOf('---', 3);
    if (frontmatterEndIndex !== -1) {
      // Insert the prerender directive before the frontmatter closing
      const beforeClose = content.substring(0, frontmatterEndIndex);
      const afterClose = content.substring(frontmatterEndIndex);
      
      content = `${beforeClose}\n// Server-side render this page\nexport const prerender = false;${afterClose}`;
      modified = true;
    }

    // Write back to the file if modified
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      processedCount++;
      console.log(`Updated: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
});

console.log(`Processed ${processedCount} files`);
console.log('Done!'); 
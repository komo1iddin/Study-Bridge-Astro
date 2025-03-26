// Script to fix frontmatter delimiters in [lang] files
import fs from 'fs';
import { execSync } from 'child_process';

// Find all Astro files in the [lang] directory
const files = execSync('find "src/pages/[lang]" -type f -name "*.astro"')
  .toString()
  .trim()
  .split('\n');

console.log(`Found ${files.length} files to check`);

// Files processed counter
let processedCount = 0;

files.forEach(file => {
  try {
    // Read file content
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if there's a missing newline before the frontmatter closing
    const endFrontmatterPattern = /([^\n])---\n/;
    const match = content.match(endFrontmatterPattern);
    
    if (match) {
      // Fix by adding a newline before the closing delimiter
      content = content.replace(endFrontmatterPattern, '$1\n---\n');
      
      // Write back to the file
      fs.writeFileSync(file, content, 'utf8');
      processedCount++;
      console.log(`Fixed frontmatter in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
});

console.log(`Fixed ${processedCount} files`);
console.log('Done!'); 
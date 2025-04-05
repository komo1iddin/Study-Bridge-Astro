// Script to fix translation function usage in the [lang] directory
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

    // Find the closing frontmatter delimiter
    const frontmatterEndIndex = content.indexOf('---', 3);
    if (frontmatterEndIndex !== -1) {
      const frontmatter = content.substring(0, frontmatterEndIndex);
      
      // Skip files that already have the translation function
      if (frontmatter.includes('const t = (key: string)')) {
        console.log(`Skipping already updated file: ${file}`);
        return;
      }
      
      // Check if file uses t() function but doesn't define it
      if (content.includes('t(') && !frontmatter.includes('const t =')) {
        // Add the translation function import and definition
        const translationCode = `\n// Use the language parameter to get translations
import { getTranslation } from '@/i18n/translationUtils';
const t = (key: string) => getTranslation(lang as Lang, key);`;
        
        // Insert before the closing frontmatter
        const beforeClose = content.substring(0, frontmatterEndIndex);
        const afterClose = content.substring(frontmatterEndIndex);
        
        content = `${beforeClose}${translationCode}${afterClose}`;
        modified = true;
      }
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
// Script to update files in [lang] directory to use the dynamic language parameter
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all Astro files in the [lang] directory
const files = execSync('find "src/pages/[lang]" -type f -name "*.astro"')
  .toString()
  .trim()
  .split('\n');

console.log(`Found ${files.length} files to update`);

// The old import pattern
const oldImports = [
  `import { getLangFromUrl } from '@/i18n/langUtils';`, 
  `import { useTranslations } from '@/i18n/utils';`,
  `import { getStaticPaths } from '@/i18n/utils';`
];

// The new import pattern for dynamic language handling
const newImports = `import { languages, type Lang } from '@/i18n/langUtils';`;

// The old language detection pattern
const oldLangPattern = `const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

export { getStaticPaths };`;

// Files processed counter
let processedCount = 0;

files.forEach(file => {
  try {
    // Read file content
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Skip files that are already updated
    if (content.includes('const { lang } = Astro.params;')) {
      console.log(`Skipping already updated file: ${file}`);
      return;
    }

    // Replace imports
    for (const oldImport of oldImports) {
      if (content.includes(oldImport)) {
        content = content.replace(oldImport, '');
        modified = true;
      }
    }

    // Add the new import if it doesn't exist
    if (!content.includes(newImports)) {
      // Find the first import statement
      const importIndex = content.indexOf('import');
      if (importIndex !== -1) {
        // Insert our import after the first import line
        const lines = content.split('\n');
        let insertLine = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) {
            insertLine = i;
            break;
          }
        }
        lines.splice(insertLine + 1, 0, newImports);
        content = lines.join('\n');
        modified = true;
      }
    }

    // Replace language detection pattern
    if (content.includes(oldLangPattern)) {
      const newLangPattern = `// Get the language from the URL parameter
const { lang } = Astro.params;

// Validate the language parameter
if (!lang || !languages.includes(lang as Lang)) {
  return Astro.redirect('/uz/'); // Redirect to default language if invalid
}`;
      
      content = content.replace(oldLangPattern, newLangPattern);
      modified = true;
    } else if (content.includes('const lang = getLangFromUrl(Astro.url);')) {
      // Handle cases where the pattern isn't exactly the same
      const newLangPattern = `// Get the language from the URL parameter
const { lang } = Astro.params;

// Validate the language parameter
if (!lang || !languages.includes(lang as Lang)) {
  return Astro.redirect('/uz/'); // Redirect to default language if invalid
}`;
      
      content = content.replace(/const lang = getLangFromUrl\(Astro\.url\);[^\n]*\n[^\n]*useTranslations[^\n]*\n/, newLangPattern);
      modified = true;
    }

    // Update Layout usage to use meta instead of title/description
    if (content.includes('<Layout title={') && !content.includes('<Layout meta={')) {
      content = content.replace(/<Layout title=\{.*?}\>/, '<Layout meta={{ title: "Page Title", description: "Page Description" }}>');
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
console.log('NOTE: You may need to manually update some translations and fix specific components in each file.'); 
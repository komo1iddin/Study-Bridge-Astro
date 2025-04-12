/**
 * Helper functions to handle university data
 */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

/**
 * Read YAML files from the universities directory
 */
export async function readYamlFiles() {
  try {
    const universitiesDir = path.join(process.cwd(), 'src/content/universities');
    const files = await fs.promises.readdir(universitiesDir);
    const yamlFiles = files.filter(file => file.endsWith('.yaml') && !file.startsWith('.'));
    
    return Promise.all(yamlFiles.map(async (file) => {
      const content = await fs.promises.readFile(path.join(universitiesDir, file), 'utf-8');
      return {
        id: file.replace('.yaml', ''),
        data: yaml.load(content)
      };
    }));
  } catch (error) {
    console.error('Error reading YAML files:', error);
    return [];
  }
}

/**
 * Get university entries from either YAML files or collections
 */
export async function getUniversityEntries() {
  try {
    // First try to read from YAML files
    const yamlData = await readYamlFiles();
    if (yamlData.length > 0) {
      console.log(`Successfully loaded ${yamlData.length} universities from YAML files`);
      return yamlData;
    }
    
    // If no YAML data, try to use collections
    console.log('No YAML data found, trying collections...');
    try {
      // Import getCollection dynamically to avoid issues
      const { getCollection } = await import('astro:content');
      
      // Use 'as any' to avoid type issues with dynamic import
      const entries = await (getCollection as any)('universities');
      if (!entries || entries.length === 0) {
        const entriesMd = await (getCollection as any)('universities-md');
        return entriesMd || [];
      }
      return entries;
    } catch (collectionError) {
      console.error('Error fetching from collections:', collectionError);
      return [];
    }
  } catch (error) {
    console.error('Error in getUniversityEntries:', error);
    return [];
  }
} 
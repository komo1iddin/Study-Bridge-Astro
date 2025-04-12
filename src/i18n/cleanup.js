#!/usr/bin/env node

/**
 * i18n Cleanup Script
 * 
 * This script removes obsolete files from the i18n system after 
 * migration to the feature-based translation system.
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

// Get current file directory (ES Module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files and directories to be removed
const OBSOLETE_FILES = [
  'src/i18n/translations',
  'src/i18n/translationHelper.ts',
  'src/i18n/MIGRATION_PLAN.md',
  'src/i18n/OPTIMIZATION_PLAN.md',
];

// Root directory (project root)
const ROOT_DIR = path.resolve(__dirname, '../..');

// Function to safely remove a file or directory
function safelyRemove(filePath) {
  const fullPath = path.join(ROOT_DIR, filePath);
  
  try {
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      console.log(`Removing directory: ${filePath}`);
      fs.rmSync(fullPath, { recursive: true, force: true });
    } else {
      console.log(`Removing file: ${filePath}`);
      fs.unlinkSync(fullPath);
    }
    
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File/directory does not exist: ${filePath}`);
    } else {
      console.error(`Error removing ${filePath}:`, err.message);
    }
    
    return false;
  }
}

// Main function
async function cleanup() {
  console.log('=== i18n Cleanup ===');
  console.log('Removing obsolete files and directories...');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const file of OBSOLETE_FILES) {
    const success = safelyRemove(file);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log('\nCleanup complete!');
  console.log(`Successfully removed: ${successCount} items`);
  if (failCount > 0) {
    console.log(`Failed to remove: ${failCount} items`);
  }
  
  // Run git status to show what has been removed
  console.log('\nGit status:');
  exec('git status --short', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running git status: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Git status stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
    
    console.log('\nNext steps:');
    console.log('1. Review the changes and ensure everything works as expected');
    console.log('2. Run tests to ensure the application works correctly');
    console.log('3. Commit the changes if everything looks good');
  });
}

// Run the cleanup
cleanup().catch(err => {
  console.error('Error during cleanup:', err);
  process.exit(1);
}); 
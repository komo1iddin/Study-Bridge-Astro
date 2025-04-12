/**
 * i18n Cleanup Utility
 * 
 * This script helps identify unused translations and files that can be safely removed
 * after migrating to the feature-based translation system.
 * 
 * Usage:
 * 1. Import this file in a Node.js script
 * 2. Call the analyzeTranslations() function
 * 3. Check the console output for files that can be safely removed
 */

import fs from 'fs';
import path from 'path';
import { featureTranslations } from './features';
import { defaultLang, languages } from './langUtils';

/**
 * Files that are safe to delete after migrating to the feature-based system
 */
const OBSOLETE_FILES = [
  'src/i18n/translations',
  'src/i18n/translationHelper.ts',
  'src/i18n/MIGRATION_PLAN.md',
  'src/i18n/OPTIMIZATION_PLAN.md',
];

/**
 * Analyze the translation system and identify optimization opportunities
 */
export function analyzeTranslations() {
  console.log('=== i18n Cleanup Analysis ===');
  
  // 1. Check for completion of feature translations
  const featureCompleteness = analyzeFeatureCompleteness();
  console.log('\n== Feature Translation Completeness ==');
  console.log('Features with incomplete translations:');
  
  Object.entries(featureCompleteness)
    .filter(([_, status]) => !status.complete)
    .forEach(([feature, status]) => {
      console.log(`- ${feature}: ${status.completedLanguages.length}/${languages.length} languages`);
      console.log(`  Missing: ${status.missingLanguages.join(', ')}`);
    });

  // 2. List obsolete files that can be removed
  console.log('\n== Files Safe to Remove ==');
  OBSOLETE_FILES.forEach(file => {
    console.log(`- ${file}`);
  });

  // 3. Additional recommendations
  console.log('\n== Recommendations ==');
  console.log('1. Remove imports from src/i18n/translations in all files');
  console.log('2. Update components to use the feature-based translation system');
  console.log('3. Run unit tests after removing files to ensure everything works');
  
  return {
    featureCompleteness,
    obsoleteFiles: OBSOLETE_FILES,
  };
}

/**
 * Analyze the completeness of feature translations across all languages
 */
function analyzeFeatureCompleteness() {
  const result: Record<string, {
    complete: boolean;
    completedLanguages: string[];
    missingLanguages: string[];
  }> = {};

  for (const feature in featureTranslations) {
    const featureTranslation = featureTranslations[feature as keyof typeof featureTranslations];
    const completedLanguages = languages.filter(lang => !!featureTranslation[lang]);
    const missingLanguages = languages.filter(lang => !featureTranslation[lang]);
    
    result[feature] = {
      complete: missingLanguages.length === 0,
      completedLanguages,
      missingLanguages,
    };
  }

  return result;
}

// If this script is run directly
if (require.main === module) {
  analyzeTranslations();
} 
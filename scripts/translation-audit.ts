#!/usr/bin/env node
/**
 * Translation Audit Tool
 * 
 * This script analyzes the i18n feature translations and generates a report of:
 * 1. Missing translations in each language compared to the default language
 * 2. Unused translations that exist in the legacy system but not in features
 * 3. Coverage percentage for each feature and language
 * 
 * Usage:
 *   npx ts-node scripts/translation-audit.ts
 */

import fs from 'fs';
import path from 'path';
import { featureTranslations } from '../src/i18n/features';
import { translations } from '../src/i18n/translations/new-index';
import { getMissingTranslations } from '../src/i18n/translationUtils';
import type { Lang } from '../src/i18n/langUtils';

const DEFAULT_LANG: Lang = 'uz';
const OUTPUT_FILE = path.join(process.cwd(), 'translation-audit-report.md');

interface FeatureReport {
  feature: string;
  missingEn: string[];
  missingRu: string[];
  coverageEn: number;
  coverageRu: number;
}

/**
 * Recursively traverses an object and returns all keys in dot notation
 */
function getAllKeys(obj: any, prefix = ''): string[] {
  if (!obj || typeof obj !== 'object') return [];

  return Object.keys(obj).reduce((acc: string[], key) => {
    const currentKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      return [...acc, ...getAllKeys(obj[key], currentKey)];
    }
    
    return [...acc, currentKey];
  }, []);
}

/**
 * Calculates coverage percentage
 */
function calculateCoverage(total: number, missing: number): number {
  if (total === 0) return 100;
  return Math.round(((total - missing) / total) * 100);
}

/**
 * Generate report for feature-based translations
 */
function auditFeatureTranslations(): FeatureReport[] {
  const report: FeatureReport[] = [];
  
  // Using type assertion to fix TypeScript errors
  const features = Object.keys(featureTranslations) as Array<keyof typeof featureTranslations>;
  
  features.forEach(feature => {
    try {
      const defaultLangKeys = getAllKeys(featureTranslations[feature][DEFAULT_LANG]);
      const missingEn: string[] = [];
      const missingRu: string[] = [];
      
      defaultLangKeys.forEach(key => {
        // Check English translations
        const enValue = key.split('.').reduce((obj, k) => obj && obj[k], featureTranslations[feature]['en' as keyof typeof featureTranslations[typeof feature]]);
        if (enValue === undefined) missingEn.push(key);
        
        // Check Russian translations
        const ruValue = key.split('.').reduce((obj, k) => obj && obj[k], featureTranslations[feature]['ru' as keyof typeof featureTranslations[typeof feature]]);
        if (ruValue === undefined) missingRu.push(key);
      });
      
      report.push({
        feature: feature as string,
        missingEn,
        missingRu,
        coverageEn: calculateCoverage(defaultLangKeys.length, missingEn.length),
        coverageRu: calculateCoverage(defaultLangKeys.length, missingRu.length)
      });
    } catch (error) {
      console.error(`Error auditing feature ${feature}:`, error);
    }
  });
  
  return report;
}

/**
 * Generate the full report and write to file
 */
function generateReport() {
  const featureReports = auditFeatureTranslations();
  
  // Get global missing translations (legacy system)
  const globalMissingEn = getMissingTranslations('en', DEFAULT_LANG);
  const globalMissingRu = getMissingTranslations('ru', DEFAULT_LANG);
  
  // Generate markdown report
  let markdown = `# Translation Audit Report\n\n`;
  markdown += `Generated on: ${new Date().toLocaleString()}\n\n`;
  
  // Overall statistics
  const totalFeatures = featureReports.length;
  const avgCoverageEn = Math.round(featureReports.reduce((sum, r) => sum + r.coverageEn, 0) / totalFeatures);
  const avgCoverageRu = Math.round(featureReports.reduce((sum, r) => sum + r.coverageRu, 0) / totalFeatures);
  
  markdown += `## Overall Statistics\n\n`;
  markdown += `- **Features Migrated**: ${totalFeatures}\n`;
  markdown += `- **English Coverage**: ${avgCoverageEn}%\n`;
  markdown += `- **Russian Coverage**: ${avgCoverageRu}%\n`;
  markdown += `- **Global Missing Translations**:\n`;
  markdown += `  - English: ${globalMissingEn.length}\n`;
  markdown += `  - Russian: ${globalMissingRu.length}\n\n`;
  
  // Feature reports
  markdown += `## Feature Translation Coverage\n\n`;
  markdown += `| Feature | English Coverage | Russian Coverage |\n`;
  markdown += `|---------|-----------------|------------------|\n`;
  
  featureReports.forEach(report => {
    markdown += `| ${report.feature} | ${report.coverageEn}% | ${report.coverageRu}% |\n`;
  });
  
  // Detailed missing translations
  markdown += `\n## Detailed Missing Translations\n\n`;
  
  featureReports.forEach(report => {
    if (report.missingEn.length > 0 || report.missingRu.length > 0) {
      markdown += `### ${report.feature}\n\n`;
      
      if (report.missingEn.length > 0) {
        markdown += `**Missing in English:**\n\n`;
        report.missingEn.forEach(key => {
          markdown += `- \`${key}\`\n`;
        });
        markdown += `\n`;
      }
      
      if (report.missingRu.length > 0) {
        markdown += `**Missing in Russian:**\n\n`;
        report.missingRu.forEach(key => {
          markdown += `- \`${key}\`\n`;
        });
        markdown += `\n`;
      }
    }
  });
  
  // Write to file
  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');
  console.log(`Report generated at: ${OUTPUT_FILE}`);
}

// Run the report
generateReport(); 
/**
 * This script ensures that all universities from the old data structure
 * are properly migrated to the new YAML-based structure.
 * 
 * Run this script once to migrate data.
 */
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { universities } from '../components/features/university/UniversityFeature/data/universities';

const contentDir = path.join(process.cwd(), 'src', 'content', 'universities');

// Ensure the directory exists
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Convert each university to YAML format
universities.forEach(university => {
  const yamlData = {
    name: {
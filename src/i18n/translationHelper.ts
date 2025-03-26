import type { Lang } from './langUtils';
import { getMissingTranslations, getTranslation } from './translationUtils';
import { translations } from './translations/new-index';

/**
 * Interface representing a translation suggestion
 */
export interface TranslationSuggestion {
  path: string;
  sourceLang: Lang;
  targetLang: Lang;
  sourceText: string;
  suggestedText: string;
}

/**
 * Generates translation suggestions for missing translations in a target language
 * @param targetLang The language needing translations
 * @param sourceLang The source language to translate from (default is 'uz')
 * @param limit Maximum number of suggestions to return (default is 10)
 * @returns An array of translation suggestions
 */
export async function generateTranslationSuggestions(
  targetLang: Lang,
  sourceLang: Lang = 'uz',
  limit: number = 10
): Promise<TranslationSuggestion[]> {
  // Get paths of missing translations
  const missingPaths = getMissingTranslations(targetLang, sourceLang);
  
  // No missing translations
  if (missingPaths.length === 0) {
    return [];
  }
  
  const suggestions: TranslationSuggestion[] = [];
  
  // Process only up to the limit
  const pathsToProcess = missingPaths.slice(0, limit);
  
  for (const path of pathsToProcess) {
    const sourceText = getTranslation(sourceLang, path);
    
    try {
      // Create a suggestion with machine-translated text
      // In a real app, you would call a translation API here
      const suggestedText = await simulateTranslation(sourceText, sourceLang, targetLang);
      
      suggestions.push({
        path,
        sourceLang,
        targetLang,
        sourceText,
        suggestedText
      });
    } catch (error) {
      console.error(`Failed to generate suggestion for ${path}:`, error);
    }
  }
  
  return suggestions;
}

/**
 * Helper function that simulates machine translation
 * In production, this would be replaced with a call to a real translation API
 */
async function simulateTranslation(
  text: string,
  sourceLang: Lang,
  targetLang: Lang
): Promise<string> {
  // This is a placeholder - in a real app you would use something like:
  // - Google Cloud Translation API
  // - Azure Translator
  // - DeepL API
  // - OpenAI API
  
  // Simple simulation for demonstration purposes
  if (targetLang === sourceLang) return text;
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Apply simple transformations to simulate translation
  // This is just for demonstration - real translation would use an API
  if (targetLang === 'ru') {
    return text
      .replace(/Hello/gi, 'Привет')
      .replace(/Welcome/gi, 'Добро пожаловать')
      .replace(/Learn more/gi, 'Узнать больше')
      .replace(/About/gi, 'О нас')
      .replace(/Contact/gi, 'Контакт');
  } else if (targetLang === 'en') {
    return text
      .replace(/Salom/gi, 'Hello')
      .replace(/Haqida/gi, 'About')
      .replace(/Bog'lanish/gi, 'Contact')
      .replace(/Ko'proq/gi, 'More');
  }
  
  // Default fallback
  return `[${targetLang}] ${text}`;
}

/**
 * Applies a translation suggestion by updating the translations object
 * @param suggestion The translation suggestion to apply
 */
export function applyTranslationSuggestion(suggestion: TranslationSuggestion): void {
  const { path, targetLang, suggestedText } = suggestion;
  
  // Split the path into parts to navigate the nested object
  const pathParts = path.split('.');
  
  // Start with the root translations object for target language
  let current: any = translations[targetLang];
  
  // Navigate to the parent object
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    
    // Create parent objects if they don't exist
    if (!current[part]) {
      current[part] = {};
    }
    
    current = current[part];
  }
  
  // Set the translated text on the last key
  const lastKey = pathParts[pathParts.length - 1];
  current[lastKey] = suggestedText;
}

/**
 * Find translation keys containing a search term
 * @param searchTerm The term to search for
 * @param lang The language to search in (defaults to 'uz')
 * @returns An array of translation paths that match the search
 */
export function searchTranslations(searchTerm: string, lang: Lang = 'uz'): string[] {
  const results: string[] = [];
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
  function searchObject(obj: any, currentPath: string = '') {
    for (const key in obj) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recurse into nested objects
        searchObject(obj[key], newPath);
      } else if (
        typeof obj[key] === 'string' && 
        obj[key].toLowerCase().includes(lowerCaseSearchTerm)
      ) {
        // If the value is a string and contains the search term, add it to results
        results.push(newPath);
      }
    }
  }
  
  searchObject(translations[lang]);
  return results;
} 
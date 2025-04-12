// src/lib/fileSystemReader.ts
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import type { Lang } from '../i18n/langUtils';
import { getCachedData } from './cache';
import { convertYamlToUniversity } from '../utils/universityUtils';
import type { UniversityYaml } from '../data/models/University';
import type { UniversityFeatureItem } from '../components/features/university/UniversityFeature/types';
import { getCollection } from 'astro:content';

// Base content directory
const contentDir = path.join(process.cwd(), 'src', 'content');

// A simple in-memory cache for file existence checks to avoid excessive fs operations
const DEV_MODE = process.env.NODE_ENV !== 'production';
const fileExistsCache = new Map<string, boolean>();
const directoryCache = new Map<string, string[]>();

// Increase cache TTL for production to reduce file system operations
const CACHE_TTL = DEV_MODE 
  ? 1000 * 60 * 10    // 10 minutes in dev
  : 1000 * 60 * 60;   // 60 minutes in production

// Read a YAML file and parse its contents
export async function readYamlFile(filePath: string) {
  try {
    // Use cached file existence check instead of logging attempts
    if (!await fileExists(filePath)) {
      return null;
    }
    
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const content = yaml.load(fileContent);
    return content;
  } catch (error) {
    // Reduce noise by only logging unexpected errors
    if (DEV_MODE) {
      console.error(`Error reading file ${filePath}:`, error);
    }
    return null;
  }
}

// Helper to check if file exists with caching
async function fileExists(filePath: string): Promise<boolean> {
  if (fileExistsCache.has(filePath)) {
    return fileExistsCache.get(filePath) || false;
  }
  
  try {
    await fs.promises.access(filePath);
    fileExistsCache.set(filePath, true);
    return true;
  } catch (e) {
    fileExistsCache.set(filePath, false);
    return false;
  }
}

// Read a Markdown file and parse its frontmatter
export async function readMdFile(filePath: string) {
  try {
    // Use cached file existence check instead of logging attempts
    if (!await fileExists(filePath)) {
      return null;
    }
    
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    
    // Extract frontmatter between --- markers
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
    
    if (frontmatterMatch && frontmatterMatch[1]) {
      const frontmatter = yaml.load(frontmatterMatch[1]);
      return frontmatter;
    }
    
    return null;
  } catch (error) {
    if (DEV_MODE) {
      console.error(`Error reading file ${filePath}:`, error);
    }
    return null;
  }
}

// Get all files in a directory with a specific extension
export async function getFilesInDirectory(dirPath: string, extension: string) {
  // Check cache first
  const cacheKey = `${dirPath}-${extension}`;
  if (directoryCache.has(cacheKey)) {
    return directoryCache.get(cacheKey) || [];
  }
  
  try {
    // Check if directory exists
    try {
      await fs.promises.access(dirPath);
    } catch (e) {
      directoryCache.set(cacheKey, []);
      return [];
    }
    
    const files = await fs.promises.readdir(dirPath);
    const matchingFiles = files.filter(file => file.endsWith(extension));
    
    // Cache result
    directoryCache.set(cacheKey, matchingFiles);
    return matchingFiles;
  } catch (error) {
    if (DEV_MODE) {
      console.error(`Error reading directory ${dirPath}:`, error);
    }
    directoryCache.set(cacheKey, []);
    return [];
  }
}

// Get all universities
export async function getAllUniversities(lang: Lang) {
  // Remove log statement in production for better performance
  if (DEV_MODE) {
    console.log(`Getting all universities for language: ${lang}`);
  }
  
  return getCachedData(`universities-all-${lang}`, async () => {
    const universitiesDir = path.join(contentDir, 'universities');
    const yamlFiles = await getFilesInDirectory(universitiesDir, '.yaml');
    
    const universities = [];
    
    for (const file of yamlFiles) {
      const filePath = path.join(universitiesDir, file);
      const universityData = await readYamlFile(filePath) as UniversityYaml;
      
      if (universityData) {
        // Extract university ID from filename (remove extension)
        const id = file.replace('.yaml', '');
        
        // Convert YAML data to University model
        const university = convertYamlToUniversity(universityData, id, lang);
        universities.push(university);
      }
    }
    
    return universities;
  }, CACHE_TTL); // Use longer cache TTL
}

// Get a single university by ID
export async function getUniversityById(id: string, lang: Lang) {
  // Remove log statement in production for better performance
  if (DEV_MODE) {
    console.log(`Getting university with ID: ${id} for language: ${lang}`);
  }
  
  return getCachedData(`university-${id}-${lang}`, async () => {
    const filePath = path.join(contentDir, 'universities', `${id}.yaml`);
    const universityData = await readYamlFile(filePath) as UniversityYaml;
    
    if (universityData) {
      // Convert YAML data to University model
      return convertYamlToUniversity(universityData, id, lang);
    }
    
    return null;
  }, CACHE_TTL); // Use longer cache TTL
}

// Get a single university by slug
export async function getUniversity(slug: string, lang: Lang) {
  return getCachedData(`university-${slug}-${lang}`, async () => {
    // Try MD file first
    const mdFilePath = path.join(contentDir, 'universities-md', `${slug}.md`);
    const yamlFilePath = path.join(contentDir, 'universities', `${slug}.yaml`);
    
    // Check if MD file exists
    try {
      await fs.promises.access(mdFilePath);
      const data = await readMdFile(mdFilePath);
      if (data) {
        return {
          slug,
          data,
        };
      }
    } catch (e) {
      console.log(`MD file for university ${slug} does not exist`);
    }
    
    // Try YAML file
    try {
      await fs.promises.access(yamlFilePath);
      const data = await readYamlFile(yamlFilePath);
      if (data) {
        return {
          slug,
          data,
        };
      }
    } catch (e) {
      console.log(`YAML file for university ${slug} does not exist`);
    }
    
    return null;
  });
}

// Define interfaces for post data
export interface PostData {
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
  publishedDate: string;
  author: string;
  authorImage?: string;
  authorRole?: Record<Lang, string>;
  image: string;
  category?: Record<Lang, string>;
  featured?: boolean;
}

export interface Post {
  slug: string;
  data: PostData;
}

// Define interface for testimonial data
export interface TestimonialData {
  name: string;
  university: string;
  quote: Record<Lang, string>;
  image: string;
  rating: number;
  featured: boolean;
}

export interface Testimonial {
  slug: string;
  data: TestimonialData;
}

// Define interfaces for FAQ and Features data
export interface FAQData {
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
}

export interface FAQ {
  slug: string;
  data: FAQData;
}

export interface FeatureData {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
}

export interface Feature {
  slug: string;
  data: FeatureData;
}

// Similar functions for posts and testimonials
export async function getAllPosts(lang: Lang): Promise<Post[]> {
  return getCachedData(`posts-all-${lang}`, async () => {
    const yamlDirPath = path.join(contentDir, 'posts');
    const mdDirPath = path.join(contentDir, 'posts-md');
    
    // Check if directories exist
    let yamlDirExists = false;
    let mdDirExists = false;
    
    try {
      await fs.promises.access(yamlDirPath);
      yamlDirExists = true;
      console.log('posts directory exists');
    } catch (e) {
      console.log('posts directory does not exist');
    }
    
    try {
      await fs.promises.access(mdDirPath);
      mdDirExists = true;
      console.log('posts-md directory exists');
    } catch (e) {
      console.log('posts-md directory does not exist');
    }
    
    // Try to read YAML files first
    if (yamlDirExists) {
      const yamlFiles = await getFilesInDirectory(yamlDirPath, '.yaml');
      
      console.log('Reading posts from YAML files:', yamlFiles);
      console.log('First post data sample:', yamlFiles.length > 0 ? await readYamlFile(path.join(yamlDirPath, yamlFiles[0])) : 'No posts found');
      
      if (yamlFiles.length > 0) {
        const posts = await Promise.all(
          yamlFiles.map(async file => {
            const filePath = path.join(yamlDirPath, file);
            const rawData = await readYamlFile(filePath) as any; // Explicitly type rawData
            
            if (rawData) {
              // Ma'lumotlarni to'g'ri formatlash
              const data: PostData = {
                title: typeof rawData.title === 'object' ? rawData.title : { [lang]: rawData.title || '' },
                excerpt: typeof rawData.excerpt === 'object' ? rawData.excerpt : { [lang]: rawData.excerpt || '' },
                content: typeof rawData.content === 'object' ? rawData.content : { [lang]: rawData.content || '' },
                publishedDate: rawData.publishedDate || rawData.date || new Date().toISOString(),
                author: rawData.author || 'Unknown',
                authorImage: rawData.authorImage || '/images/posts/placeholder/author.jpg',
                authorRole: typeof rawData.authorRole === 'object' ? rawData.authorRole : { [lang]: rawData.authorRole || '' },
                image: rawData.image || '/images/posts/placeholder/post.jpeg',
                category: typeof rawData.category === 'object' ? rawData.category : { [lang]: rawData.category || 'Ta\'lim' },
                featured: rawData.featured || false
              };

              return {
                slug: file.replace('.yaml', ''),
                data
              };
            }
            return null;
          })
        );
        
        const validPosts = posts
          .filter((p): p is Post => p !== null) // Type guard
          .sort((a, b) => {
            return new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime();
          });
        
        if (validPosts.length > 0) {
          return validPosts;
        }
      }
    }
    
    // If no YAML files or no valid YAML posts, try MD files
    if (mdDirExists) {
      const mdFiles = await getFilesInDirectory(mdDirPath, '.md');
      console.log(`Looking for .md files in: ${mdDirPath}`);
      console.log(`Found ${mdFiles.length} .md files in ${mdDirPath}`);
      
      if (mdFiles.length > 0) {
        const posts = await Promise.all(
          mdFiles.map(async file => {
            const filePath = path.join(mdDirPath, file);
            console.log(`Attempting to read MD file: ${filePath}`);
            const data = await readMdFile(filePath) as PostData | null; // Explicitly type data
            if (data) console.log(`Successfully read MD file: ${filePath}`);
            return {
              slug: file.replace('.md', ''),
              data,
            };
          })
        );
        
        const validPosts = posts
          .filter((p): p is Post => p.data !== null) // Type guard
          .sort((a, b) => {
            // Ensure data is not null before accessing publishedDate
            const dateA = a.data?.publishedDate ? new Date(a.data.publishedDate).getTime() : 0;
            const dateB = b.data?.publishedDate ? new Date(b.data.publishedDate).getTime() : 0;
            return dateB - dateA;
          });
        
        console.log(`Found ${validPosts.length} valid MD posts`);
        return validPosts;
      }
    }
    
    // If no files found, return empty array
    return [];
  });
}

// Get all testimonials
export async function getAllTestimonials(lang: Lang): Promise<Testimonial[]> {
  return getCachedData(`testimonials-all-${lang}`, async () => {
    // First try MD files
    const mdDirPath = path.join(contentDir, 'testimonials-md');
    const yamlDirPath = path.join(contentDir, 'testimonials');
    
    // Check if directories exist
    let mdDirExists = false;
    let yamlDirExists = false;
    
    try {
      await fs.promises.access(mdDirPath);
      mdDirExists = true;
    } catch (e) {
      console.log('testimonials-md directory does not exist');
    }
    
    try {
      await fs.promises.access(yamlDirPath);
      yamlDirExists = true;
    } catch (e) {
      console.log('testimonials directory does not exist');
    }
    
    // Try to read MD files first
    if (mdDirExists) {
      const mdFiles = await getFilesInDirectory(mdDirPath, '.md');
      
      if (mdFiles.length > 0) {
        const testimonials = await Promise.all(
          mdFiles.map(async file => {
            const filePath = path.join(mdDirPath, file);
            const data = await readMdFile(filePath) as TestimonialData | null; // Explicitly type data
            return {
              slug: file.replace('.md', ''),
              data,
            };
          })
        );
        
        // Use type guard to filter nulls and satisfy TypeScript
        return testimonials.filter((t): t is Testimonial => t.data !== null);
      }
    }
    
    // If no MD files, try YAML files
    if (yamlDirExists) {
      const yamlFiles = await getFilesInDirectory(yamlDirPath, '.yaml');
      
      if (yamlFiles.length > 0) {
        const testimonials = await Promise.all(
          yamlFiles.map(async file => {
            const filePath = path.join(yamlDirPath, file);
            const data = await readYamlFile(filePath) as TestimonialData | null; // Explicitly type data
            return {
              slug: file.replace('.md', ''), // Corrected extension removal
              data,
            };
          })
        );
        
        // Use type guard to filter nulls and satisfy TypeScript
        return testimonials.filter((t): t is Testimonial => t.data !== null);
      }
    }
    
    // If no files found, return empty array
    return [];
  });
}

// Get all FAQ items
export async function getAllFAQ(lang: Lang): Promise<FAQ[]> {
  return getCachedData(`faq-all-${lang}`, async () => {
    const yamlDirPath = path.join(contentDir, 'faq');
    
    try {
      await fs.promises.access(yamlDirPath);
      const yamlFiles = await getFilesInDirectory(yamlDirPath, '.yaml');
      
      if (yamlFiles.length > 0) {
        const faqItems = await Promise.all(
          yamlFiles.map(async file => {
            const filePath = path.join(yamlDirPath, file);
            const data = await readYamlFile(filePath) as FAQData | null; // Explicitly type data
            return {
              slug: file.replace('.yaml', ''),
              data,
            };
          })
        );
        
        // Use type guard to filter nulls and satisfy TypeScript
        return faqItems.filter((item): item is FAQ => item.data !== null);
      }
    } catch (e) {
      console.log('FAQ directory does not exist or is empty');
    }
    
    return [];
  });
}

// Get all features
export async function getAllFeatures(lang: Lang): Promise<Feature[]> {
  return getCachedData(`features-all-${lang}`, async () => {
    const yamlDirPath = path.join(contentDir, 'features');
    
    try {
      await fs.promises.access(yamlDirPath);
      const yamlFiles = await getFilesInDirectory(yamlDirPath, '.yaml');
      
      if (yamlFiles.length > 0) {
        const features = await Promise.all(
          yamlFiles.map(async file => {
            const filePath = path.join(yamlDirPath, file);
            const data = await readYamlFile(filePath) as FeatureData | null; // Explicitly type data
            return {
              slug: file.replace('.yaml', ''),
              data,
            };
          })
        );
        
        // Use type guard to filter nulls and satisfy TypeScript
        return features.filter((feature): feature is Feature => feature.data !== null);
      }
    } catch (e) {
      console.log('Features directory does not exist or is empty');
    }
    
    return [];
  });
}

// Get all cities from universities
export async function getAllCities(lang: Lang) {
  console.log(`Getting all cities for language: ${lang}`);
  return getCachedData(`cities-all-${lang}`, async () => {
    const universities = await getAllUniversities(lang);
    const cities = [...new Set(universities.map(uni => uni.city))];
    return cities;
  });
}

export async function getFeaturedUniversities(lang: Lang, limit = 8): Promise<UniversityFeatureItem[]> {
  // Use a long TTL for this data since universities don't change frequently 
  return getCachedData(`universities-featured-${lang}-${limit}`, async () => {
    try {
      const universitiesCollection = await getCollection('universities');
      
      const universities = universitiesCollection.map((entry): UniversityFeatureItem => {
        // Safely extract city from location - but don't include in object
        const city = entry.data.location?.split(',')[0]?.trim() || 'Unknown City';
        
        // Get student data as string
        let studentsString = '';
        const studentsData = entry.data.students;
        if (typeof studentsData === 'string') {
          studentsString = studentsData;
        } else if (typeof studentsData === 'object' && studentsData !== null) {
          studentsString = studentsData[lang] || studentsData.en || ''; // Prefer lang, fallback to en
        }
        
        // Try to convert id to number or use an index as fallback
        // Extract numeric ID if possible or generate one
        let numericId = parseInt(entry.id, 10);
        if (isNaN(numericId)) {
          // Use hash of string as numeric id
          numericId = Math.abs(entry.id.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
          }, 0));
        }
        
        return {
          id: numericId, // Use numeric ID
          name: typeof entry.data.name === 'object' ? entry.data.name[lang] || entry.data.name.en : entry.data.name,
          location: entry.data.location,
          rating: entry.data.rating || 0,
          students: studentsString,
          faculties: Array.isArray(entry.data.faculties) 
            ? entry.data.faculties 
            : entry.data.faculties?.[lang] || entry.data.faculties?.en || [],
          image: entry.data.image || '/placeholder.jpg',
          logo: entry.data.logo || '/placeholder.jpg',
          established: Number(entry.data.established || entry.data.foundedYear || 0)
        };
      });

      return universities
        .sort((a, b) => {
          // Sort by rating only
          return (b.rating || 0) - (a.rating || 0);
        })
        .slice(0, limit);
    } catch (error) {
      if (DEV_MODE) {
        console.error("Error fetching universities:", error);
      }
      return [];
    }
  }, 1000 * 60 * 60); // Cache for 1 hour - very long TTL for development
}

// Get a single post by slug
export async function getPostBySlug(slug: string, lang: Lang): Promise<Post | null> {
  // Remove excessive logging in production
  if (DEV_MODE) {
    console.log(`Getting post with slug: ${slug} for language: ${lang}`);
  }
  
  try {
    const yamlDirPath = path.join(contentDir, 'posts');
    const filePath = path.join(yamlDirPath, `${slug}.yaml`);
    
    // Check if file exists
    if (!await fileExists(filePath)) {
      if (DEV_MODE) {
        console.error(`Post file does not exist: ${filePath}`);
      }
      return null;
    }
    
    // Read and parse YAML file
    const postData = await readYamlFile(filePath) as PostData | null; // Explicitly type data
    if (!postData) {
      if (DEV_MODE) {
        console.error(`Failed to parse post YAML: ${filePath}`);
      }
      return null;
    }
    
    if (DEV_MODE) {
      console.log(`Successfully loaded post data for: ${slug}`);
    }
    
    return {
      slug,
      data: postData
    };
  } catch (e) {
    if (DEV_MODE) {
      console.error(`Error getting post by slug ${slug}:`, e);
    }
    return null;
  }
}

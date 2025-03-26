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
console.log('Content directory path:', contentDir);

// Read a YAML file and parse its contents
export async function readYamlFile(filePath: string) {
  try {
    console.log(`Attempting to read YAML file: ${filePath}`);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const content = yaml.load(fileContent);
    console.log(`Successfully read YAML file: ${filePath}`);
    return content;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// Read a Markdown file and parse its frontmatter
export async function readMdFile(filePath: string) {
  try {
    console.log(`Attempting to read MD file: ${filePath}`);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    
    // Extract frontmatter between --- markers
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
    
    if (frontmatterMatch && frontmatterMatch[1]) {
      const frontmatter = yaml.load(frontmatterMatch[1]);
      console.log(`Successfully read MD file: ${filePath}`);
      return frontmatter;
    }
    
    console.warn(`No frontmatter found in MD file: ${filePath}`);
    return null;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// Get all files in a directory with a specific extension
export async function getFilesInDirectory(dirPath: string, extension: string) {
  try {
    console.log(`Looking for ${extension} files in: ${dirPath}`);
    const files = await fs.promises.readdir(dirPath);
    const matchingFiles = files.filter(file => file.endsWith(extension));
    console.log(`Found ${matchingFiles.length} ${extension} files in ${dirPath}`);
    return matchingFiles;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

// Get all universities
export async function getAllUniversities(lang: Lang) {
  console.log(`Getting all universities for language: ${lang}`);
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
  });
}

// Get a single university by ID
export async function getUniversityById(id: string, lang: Lang) {
  console.log(`Getting university with ID: ${id} for language: ${lang}`);
  return getCachedData(`university-${id}-${lang}`, async () => {
    const filePath = path.join(contentDir, 'universities', `${id}.yaml`);
    const universityData = await readYamlFile(filePath) as UniversityYaml;
    
    if (universityData) {
      // Convert YAML data to University model
      return convertYamlToUniversity(universityData, id, lang);
    }
    
    return null;
  });
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
      
      if (yamlFiles.length > 0) {
        const posts = await Promise.all(
          yamlFiles.map(async file => {
            const filePath = path.join(yamlDirPath, file);
            const rawData = await readYamlFile(filePath);
            
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
          .filter(p => p !== null)
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
            const data = await readMdFile(filePath);
            if (data) console.log(`Successfully read MD file: ${filePath}`);
            return {
              slug: file.replace('.md', ''),
              data,
            };
          })
        );
        
        const validPosts = posts
          .filter(p => p.data !== null)
          .sort((a, b) => {
            return new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime();
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
            const data = await readMdFile(filePath);
            return {
              slug: file.replace('.md', ''),
              data,
            };
          })
        );
        
        return testimonials.filter(t => t.data !== null);
      }
    }
    
    // If no MD files, try YAML files
    if (yamlDirExists) {
      const yamlFiles = await getFilesInDirectory(yamlDirPath, '.yaml');
      
      if (yamlFiles.length > 0) {
        const testimonials = await Promise.all(
          yamlFiles.map(async file => {
            const filePath = path.join(yamlDirPath, file);
            const data = await readYamlFile(filePath);
            return {
              slug: file.replace('.yaml', ''),
              data,
            };
          })
        );
        
        return testimonials.filter(t => t.data !== null);
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
            const data = await readYamlFile(filePath);
            return {
              slug: file.replace('.yaml', ''),
              data,
            };
          })
        );
        
        return faqItems.filter(item => item.data !== null);
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
            const data = await readYamlFile(filePath);
            return {
              slug: file.replace('.yaml', ''),
              data,
            };
          })
        );
        
        return features.filter(feature => feature.data !== null);
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
  try {
    const universitiesCollection = await getCollection('universities');
    
    const universities = universitiesCollection.map(entry => ({
      id: entry.id,
      name: typeof entry.data.name === 'object' ? entry.data.name[lang] || entry.data.name.en : entry.data.name,
      description: typeof entry.data.description === 'object' ? entry.data.description[lang] || entry.data.description.en : entry.data.description,
      location: entry.data.location,
      city: entry.data.city || entry.data.location?.split(',')[0]?.trim(),
      rating: entry.data.rating || 0,
      ranking: entry.data.ranking || 0,
      students: typeof entry.data.students === 'object' ? entry.data.students[lang] || entry.data.students.en : entry.data.students,
      faculties: Array.isArray(entry.data.faculties) ? entry.data.faculties : entry.data.faculties?.[lang] || entry.data.faculties?.en || [],
      image: entry.data.image || '/placeholder.jpg',
      logo: entry.data.logo || '/placeholder.jpg',
      featured: entry.data.featured || false,
      hasGrants: entry.data.hasGrants || false,
      educationType: entry.data.educationType || []
    }));

    return universities
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (b.rating || 0) - (a.rating || 0);
      })
      .slice(0, limit);
  } catch (error) {
    console.error("Error fetching universities:", error);
    return [];
  }
}

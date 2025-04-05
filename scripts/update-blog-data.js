// Script to update blog-data.ts with converted article data
// This script reads article-data.ts, converts articles to blog posts format, and updates blog-data.ts

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const ARTICLE_DATA_PATH = '../bak/studyblog-navigator-main/src/lib/article-data.ts';
const BLOG_DATA_PATH = '../src/lib/blog-data.ts';
const BACKUP_PATH = '../src/lib/blog-data.ts.bak';

console.log('Starting conversion from article-data.ts to blog-data.ts');
console.log('Reading article data from:', ARTICLE_DATA_PATH);

// Check if article-data.ts exists
if (!fs.existsSync(path.resolve(__dirname, ARTICLE_DATA_PATH))) {
  console.error(`File not found: ${ARTICLE_DATA_PATH}`);
  process.exit(1);
}

// Read article-data.ts
const articleDataContent = fs.readFileSync(path.resolve(__dirname, ARTICLE_DATA_PATH), 'utf8');

// Extract articles array using a regex - now matches the type annotation format
const articlesMatch = articleDataContent.match(/export\s+const\s+articles\s*:\s*Article\[\]\s*=\s*(\[[\s\S]*?\]);/m);
if (!articlesMatch || !articlesMatch[1]) {
  console.error('Could not find articles array in article-data.ts');
  process.exit(1);
}

// We'll use a direct evaluation approach since dynamic imports can be complex with raw code
let articlesData;
try {
  // This is a simple one-time conversion script, so using eval is acceptable here
  // In a production app, we would use a proper TypeScript parser
  // eslint-disable-next-line no-eval
  articlesData = eval(`(${articlesMatch[1]})`);
  console.log(`Successfully loaded ${articlesData.length} articles`);
} catch (error) {
  console.error('Error evaluating article data:', error);
  process.exit(1);
}

// Check if blog-data.ts exists
if (!fs.existsSync(path.resolve(__dirname, BLOG_DATA_PATH))) {
  console.error(`File not found: ${BLOG_DATA_PATH}`);
  process.exit(1);
}

// Read blog-data.ts
let blogDataContent = fs.readFileSync(path.resolve(__dirname, BLOG_DATA_PATH), 'utf8');

// Create a backup of the original file
const backupPath = path.resolve(__dirname, BACKUP_PATH);
fs.writeFileSync(backupPath, blogDataContent);
console.log(`Created backup at: blog-data.ts.bak`);

// Extract existing blog posts from blog-data.ts
const existingBlogPostsMatch = blogDataContent.match(/export\s+const\s+blogPosts\s*:\s*BlogPost\[\]\s*=\s*(\[[\s\S]*?\]);/m);
let existingBlogPosts = [];

if (existingBlogPostsMatch && existingBlogPostsMatch[1]) {
  try {
    // Parse existing blog posts
    // eslint-disable-next-line no-eval
    existingBlogPosts = eval(`(${existingBlogPostsMatch[1]})`);
    console.log(`Found ${existingBlogPosts.length} existing blog posts`);
  } catch (error) {
    console.warn('Could not parse existing blog posts, starting fresh:', error);
  }
}

// Enhanced function to process sections recursively and create HTML content
function processSections(sections, level = 2) {
  if (!sections || sections.length === 0) return '';
  
  return sections.map(section => {
    let html = '';
    
    // Add section heading if it exists (with appropriate heading level)
    if (section.title) {
      const headingLevel = Math.min(level, 6); // H1-H6 limitation
      html += `<h${headingLevel} class="text-${headingLevel === 2 ? '2xl' : headingLevel === 3 ? 'xl' : 'lg'} font-bold mt-8 mb-4" id="${section.id}">${section.title}</h${headingLevel}>\n`;
    }
    
    // Add section content if it exists
    if (section.content) {
      // Preserve the original HTML content
      html += section.content;
    }
    
    // For article-data.ts the nested sections are called "subsections"
    if (section.subsections && section.subsections.length > 0) {
      // Increment heading level for subsections
      html += processSections(section.subsections, level + 1);
    }
    
    return html;
  }).join('\n');
}

// Map article categories to blog categories
function mapCategories(article) {
  // This function maps article categories or determines them based on content
  // Default to 'academic' if we can't determine
  const categoryMap = {
    // Map common categories
    'университет': 'academic',
    'образование': 'academic',
    'обучение': 'study-tips',
    'советы': 'study-tips',
    'карьера': 'career',
    'студенческая жизнь': 'student-life',
    'технологии': 'technology'
  };
  
  // Extract categories from title or content
  const lowerTitle = article.title.toLowerCase();
  
  // Initialize with a default category
  const mappedCategories = new Set(['academic']);
  
  // Check title for category hints
  Object.entries(categoryMap).forEach(([key, value]) => {
    if (lowerTitle.includes(key)) {
      mappedCategories.add(value);
    }
  });
  
  // Check sections for more category hints
  article.sections.forEach(section => {
    const sectionTitle = section.title?.toLowerCase() || '';
    Object.entries(categoryMap).forEach(([key, value]) => {
      if (sectionTitle.includes(key)) {
        mappedCategories.add(value);
      }
    });
  });
  
  // Limit to 2 categories max
  return Array.from(mappedCategories).slice(0, 2);
}

// Convert article to blog post format with improved content preservation
function convertArticleToBlogPost(article) {
  // Use the existing slug or generate an ID from the title
  const id = article.slug || article.title
    .toLowerCase()
    .replace(/[^а-яa-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
  
  // Process all sections to generate HTML content
  const content = processSections(article.sections);
  
  // Verify that content was properly processed
  if (!content || content.length < 100) {
    console.warn(`Warning: Generated content for "${article.title}" is suspiciously short (${content.length} chars). Check the output.`);
  }
  
  // Map article categories to blog categories
  // Ensure these are valid BlogCategory values
  const categories = mapCategories(article);
  
  // Create blog post object
  return {
    id,
    title: article.title,
    excerpt: article.excerpt || `${article.title} - полное руководство.`,
    content: content || article.content,
    publishedDate: article.publishedDate || new Date().toISOString().split('T')[0],
    readTime: article.readTime || '10 мин чтения',
    coverImage: article.coverImage || 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    categories, // This is now a BlogCategory[] array
    author: {
      name: article.author?.name || 'Александр Иванов',
      avatar: article.author?.avatar || 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      bio: article.author?.bio || 'Образовательный консультант с 5-летним опытом работы с китайскими университетами'
    },
    featured: true
  };
}

// Convert all articles to blog posts
const convertedBlogPosts = articlesData.map(convertArticleToBlogPost);
console.log(`Converted ${convertedBlogPosts.length} articles to blog posts`);

// Log article title and content length to verify content preservation
convertedBlogPosts.forEach(post => {
  const contentLength = post.content?.length || 0;
  console.log(`Post: "${post.title}" - Content length: ${contentLength} chars`);
});

// Combine existing and new posts, avoiding duplicates by ID
const combinedPosts = [...existingBlogPosts];
for (const newPost of convertedBlogPosts) {
  // Check if a post with this ID already exists
  const existingIndex = combinedPosts.findIndex(post => post.id === newPost.id);
  
  if (existingIndex >= 0) {
    // Replace the existing post
    console.log(`Replacing existing post: ${newPost.id}`);
    combinedPosts[existingIndex] = newPost;
  } else {
    // Add the new post
    combinedPosts.push(newPost);
  }
}

console.log(`Combined ${existingBlogPosts.length} existing posts with ${convertedBlogPosts.length} converted posts`);
console.log(`Final blog post count: ${combinedPosts.length}`);

// Create new content for blog-data.ts with properly typed categories
const formattedBlogPosts = JSON.stringify(combinedPosts, null, 2)
  // Fix the categories by explicitly casting each string to BlogCategory
  .replace(/"categories": \[(.*?)\]/g, (match, categoriesContent) => {
    return `"categories": [${categoriesContent.replace(/"([^"]+)"/g, (catMatch, category) => {
      if (['all', 'academic', 'study-tips', 'career', 'student-life', 'technology'].includes(category)) {
        return `'${category}'`;
      }
      return `"${category}"`;
    })}]`;
  })
  // Ensure proper typing for the content
  .replace(/"content": "(.+?)"/g, (match, content) => {
    // Escape backticks, dollar signs, and backslashes in the content
    content = content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
    return `"content": \`${content}\``;
  });

// Create the replacement content with proper TypeScript typing
const newBlogPostsContent = `// Sample blog posts data
export const blogPosts: BlogPost[] = ${formattedBlogPosts};`;

// Replace only the blogPosts array in the file, not any surrounding code
const updatedContent = blogDataContent.replace(
  /\/\/ Sample blog posts data\s*\n\s*export const blogPosts\s*:\s*BlogPost\[\]\s*=\s*\[[\s\S]*?\];/m,
  newBlogPostsContent
);

// Verify the update was successful
if (updatedContent === blogDataContent) {
  console.error('Warning: The content replacement did not change the file. Check your regex pattern.');
}

// Write the updated content back to blog-data.ts
fs.writeFileSync(path.resolve(__dirname, BLOG_DATA_PATH), updatedContent);
console.log(`Updated blog-data.ts with ${combinedPosts.length} blog posts`);

console.log('Conversion complete!'); 
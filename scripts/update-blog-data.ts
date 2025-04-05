/**
 * Script to directly modify blog-data.ts with converted article data
 * 
 * This script:
 * 1. Reads article-data.ts from the backup directory
 * 2. Converts articles to blog post format
 * 3. Updates blog-data.ts
 * 
 * Usage:
 * npx ts-node scripts/update-blog-data.ts
 */

const fs = require('fs');
const path = require('path');

// Define paths
const ROOT_DIR = path.resolve(__dirname, '..');
const ARTICLE_DATA_PATH = path.resolve(ROOT_DIR, 'src/lib/article-data.ts');
const BLOG_DATA_PATH = path.resolve(ROOT_DIR, 'src/lib/blog-data.ts');

console.log('Starting conversion process...');
console.log(`Reading article data from: ${ARTICLE_DATA_PATH}`);
console.log(`Will update blog data at: ${BLOG_DATA_PATH}`);

// Read the article-data.ts file
const articleDataContent = fs.readFileSync(ARTICLE_DATA_PATH, 'utf8');

// Extract the article data using regex
const articlesMatch = articleDataContent.match(/export\s+const\s+articlesData\s*=\s*(\[[\s\S]*?\]);/);
if (!articlesMatch) {
  console.error('Could not find articlesData in article-data.ts');
  process.exit(1);
}

const articlesDataStr = articlesMatch[1];

// Create a temporary file to evaluate the articles data
const tempFile = path.resolve(__dirname, 'temp-articles.js');
fs.writeFileSync(tempFile, `
// This is a temporary file created by the conversion script
module.exports = ${articlesDataStr};
`);

// Load the article data
let articlesData;
try {
  articlesData = require(tempFile);
  console.log(`Successfully loaded ${articlesData.length} articles`);
} catch (error) {
  console.error('Error loading article data:', error);
  process.exit(1);
} finally {
  // Clean up temp file
  if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
  }
}

// Read the blog-data.ts file
const blogDataContent = fs.readFileSync(BLOG_DATA_PATH, 'utf8');

// Function to process sections recursively and generate content
function processSections(sections) {
  if (!sections || !sections.length) return '';
  
  let content = '';
  
  sections.forEach(section => {
    content += `<section id="${section.id}">`;
    content += `<h2>${section.title}</h2>`;
    content += section.content || '';
    
    if (section.subsections && section.subsections.length) {
      content += processSections(section.subsections);
    }
    
    content += '</section>';
  });
  
  return content;
}

// Convert an article to blog post format
function convertArticleToBlogPost(article, index) {
  return {
    id: article.id || `blog-${index + 1}`,
    title: article.title,
    excerpt: article.excerpt,
    content: processSections(article.sections),
    publishedDate: article.publishedDate,
    readTime: article.readTime,
    coverImage: article.coverImage,
    categories: [{ id: 'default', name: 'Default' }], // Default category since we don't have this in articles
    author: {
      name: article.author?.name || 'Unknown',
      avatar: article.author?.avatar || '/img/authors/default.jpg',
      bio: ''
    },
    featured: index < 3 // First 3 articles are featured
  };
}

// Convert all articles to blog posts
const blogPosts = articlesData.map(convertArticleToBlogPost);

console.log(`Converted ${blogPosts.length} articles to blog posts`);

// Create the new content for blog-data.ts
const blogPostsStr = JSON.stringify(blogPosts, null, 2)
  .replace(/"([^"]+)":/g, '$1:') // Convert "key": to key:
  .replace(/"/g, "'"); // Replace double quotes with single quotes

const newBlogDataContent = blogDataContent.replace(
  /export\s+const\s+blogPosts\s*=\s*(\[[\s\S]*?\]);/,
  `export const blogPosts = ${blogPostsStr};`
);

// Write the updated content back to blog-data.ts
fs.writeFileSync(BLOG_DATA_PATH, newBlogDataContent, 'utf8');

console.log(`Successfully updated blog-data.ts with ${blogPosts.length} blog posts`);
console.log('Conversion complete!'); 
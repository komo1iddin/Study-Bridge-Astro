/**
 * Script to convert article-data.ts format to blog-data.ts format
 * 
 * This script takes the hierarchical article sections structure and flattens it 
 * into a single content string for blog posts.
 * 
 * Usage:
 * 1. Copy the article data you want to convert
 * 2. Run: node scripts/convert-article-to-blog.js
 * 3. The converted data will be output to the console, ready to paste into blog-data.ts
 */

// STEP 1: Paste your articles array from article-data.ts here
const articlesData = [
  // Paste your articles array here
  // Example format:
  // {
  //   id: "article-1",
  //   slug: "article-one",
  //   title: "Article One",
  //   excerpt: "This is article one",
  //   coverImage: "/images/article1.jpg",
  //   publishedDate: "2023-01-01",
  //   author: {
  //     name: "Author Name",
  //     avatar: "/images/author.jpg"
  //   },
  //   readTime: "5 min read",
  //   sections: [
  //     {
  //       id: "section-1",
  //       title: "Section One",
  //       content: "<p>Section one content</p>",
  //       subsections: []
  //     }
  //   ]
  // }
];

/**
 * Recursively process sections and subsections to build a flat HTML content string
 */
function processSections(sections) {
  let content = '';
  
  sections.forEach(section => {
    // Add section heading with ID for navigation
    content += `<h2 id="${section.id}" class="text-2xl font-bold mt-8 mb-4">${section.title}</h2>\n`;
    
    // Add section content
    content += section.content + '\n';
    
    // Process subsections if any
    if (section.subsections && section.subsections.length > 0) {
      section.subsections.forEach(subsection => {
        content += `<h3 id="${subsection.id}" class="text-xl font-semibold mb-4 mt-6">${subsection.title}</h3>\n`;
        content += subsection.content + '\n';
        
        // Handle nested subsections (if any)
        if (subsection.subsections && subsection.subsections.length > 0) {
          subsection.subsections.forEach(nestedSubsection => {
            content += `<h4 id="${nestedSubsection.id}" class="text-lg font-medium mb-3 mt-5">${nestedSubsection.title}</h4>\n`;
            content += nestedSubsection.content + '\n';
          });
        }
      });
    }
  });
  
  return content;
}

/**
 * Convert article format to blog post format
 */
function convertArticleToBlogPost(article) {
  // Default categories if not present
  const categories = article.categories || ['academic'];
  
  // Process all sections into a single content string
  const content = processSections(article.sections);
  
  // Create blog post object
  return {
    id: article.id || article.slug,
    title: article.title,
    excerpt: article.excerpt,
    content: content,
    publishedDate: article.publishedDate,
    readTime: article.readTime,
    coverImage: article.coverImage,
    categories: categories,
    author: {
      name: article.author.name,
      avatar: article.author.avatar,
      bio: article.author.bio || `Author of "${article.title}"` // Default bio if not present
    },
    featured: article.featured || false
  };
}

// STEP 2: Convert all articles to blog posts
const blogPosts = articlesData.map(convertArticleToBlogPost);

// STEP 3: Output the converted data
console.log('// Converted blog posts');
console.log('export const blogPosts: BlogPost[] = [');
blogPosts.forEach((post, index) => {
  console.log('  {');
  console.log(`    id: '${post.id}',`);
  console.log(`    title: '${post.title}',`);
  console.log(`    excerpt: '${post.excerpt}',`);
  console.log(`    content: \`${post.content}\`,`);
  console.log(`    publishedDate: '${post.publishedDate}',`);
  console.log(`    readTime: '${post.readTime}',`);
  console.log(`    coverImage: '${post.coverImage}',`);
  console.log(`    categories: [${post.categories.map(c => `'${c}'`).join(', ')}],`);
  console.log(`    author: {`);
  console.log(`      name: '${post.author.name}',`);
  console.log(`      avatar: '${post.author.avatar}',`);
  console.log(`      bio: '${post.author.bio}'`);
  console.log(`    },`);
  console.log(`    featured: ${post.featured}`);
  console.log(`  }${index < blogPosts.length - 1 ? ',' : ''}`);
});
console.log('];');

console.log('\n// Successfully converted', blogPosts.length, 'articles to blog posts!');
console.log('// Copy the output above and paste it into your blog-data.ts file'); 
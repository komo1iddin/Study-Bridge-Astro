/**
 * TypeScript script to convert article-data.ts format to blog-data.ts format
 * 
 * This script takes the hierarchical article sections structure and flattens it 
 * into a single content string for blog posts.
 * 
 * Usage:
 * 1. Copy the article data you want to convert
 * 2. Run: npx ts-node scripts/convert-article-to-blog.ts
 * 3. The converted data will be output to the console, ready to paste into blog-data.ts
 */

// Article data types (from article-data.ts)
interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: ArticleSection[];
}

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
    bio?: string;
  };
  readTime: string;
  sections: ArticleSection[];
  categories?: string[];
  featured?: boolean;
}

// Blog data types (from blog-data.ts)
type BlogCategory = 'academic' | 'study-tips' | 'career' | 'student-life' | 'technology' | 'all';

interface BlogAuthor {
  name: string;
  avatar: string;
  bio?: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  categories: BlogCategory[];
  author: BlogAuthor;
  featured?: boolean;
}

// STEP 1: Paste your articles array from article-data.ts here
const articlesData: Article[] = [
  // Paste your articles array here
  // Example:
  // {
  //   id: "studying-in-china",
  //   slug: "studying-in-china",
  //   title: "Обучение в Китае: Полное руководство для иностранных студентов",
  //   excerpt: "Все, что вам нужно знать о поступлении, учебе и жизни в китайских университетах.",
  //   coverImage: "https://images.unsplash.com/photo-1517872912252-e27375686af4",
  //   publishedDate: "2023-07-15",
  //   author: {
  //     name: "Александр Иванов",
  //     avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40",
  //     bio: "Образовательный консультант с 5-летним опытом работы с китайскими университетами"
  //   },
  //   readTime: "15 мин чтения",
  //   sections: [
  //     {
  //       id: "intro",
  //       title: "Введение",
  //       content: "<p>Китай становится все более популярным направлением...</p>"
  //     }
  //   ]
  // }
];

/**
 * Recursively process sections and subsections to build a flat HTML content string
 */
function processSections(sections: ArticleSection[]): string {
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
 * Maps string categories to BlogCategory type
 */
function mapCategories(categories: string[] = ['academic']): BlogCategory[] {
  const validCategories: BlogCategory[] = [];
  
  categories.forEach(category => {
    // Check if category is valid BlogCategory
    if (['academic', 'study-tips', 'career', 'student-life', 'technology'].includes(category)) {
      validCategories.push(category as BlogCategory);
    } else {
      // Default to academic if not valid
      if (!validCategories.includes('academic')) {
        validCategories.push('academic');
      }
    }
  });
  
  // Ensure there's at least one category
  if (validCategories.length === 0) {
    validCategories.push('academic');
  }
  
  return validCategories;
}

/**
 * Convert article format to blog post format
 */
function convertArticleToBlogPost(article: Article): BlogPost {
  // Process all sections into a single content string
  const content = processSections(article.sections);
  
  // Map categories
  const categories = mapCategories(article.categories);
  
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
  if (post.author.bio) {
    console.log(`      bio: '${post.author.bio}'`);
  }
  console.log(`    },`);
  console.log(`    featured: ${post.featured}`);
  console.log(`  }${index < blogPosts.length - 1 ? ',' : ''}`);
});
console.log('];');

console.log('\n// Successfully converted', blogPosts.length, 'articles to blog posts!');
console.log('// Copy the output above and paste it into your blog-data.ts file'); 
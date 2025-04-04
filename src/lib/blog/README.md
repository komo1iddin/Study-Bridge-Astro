# Blog System

This directory contains the blog posts and related types for the Study in China application.

## Structure

- `types.ts` - Contains types, categories, and author definitions
- `index.ts` - Exports all blog posts and utility functions
- `posts/` - Individual blog post files (one file per post)

## How to Add a New Blog Post

1. Create a new file in the `posts/` directory with the post's ID as the filename (e.g., `your-post-id.ts`)

2. Use the following template for your file:

```typescript
import { BlogPost } from '../types';
import { authors } from '../types';

export const post: BlogPost = {
  id: "your-post-id", // Must match the filename
  title: "Your Post Title",
  excerpt: "A short excerpt of your blog post (1-2 sentences)",
  content: `<h2 class="text-2xl font-bold mt-8 mb-4" id="introduction">Introduction</h2>
<p>Your blog post content here. You can use HTML for formatting.</p>
          
<h2 class="text-2xl font-bold mt-8 mb-4" id="section-1">First Section</h2>
<p>More content here...</p>`,
  publishedDate: "YYYY-MM-DD",
  readTime: "X мин чтения",
  coverImage: "URL to an image",
  categories: ['category1', 'category2'], // Choose from available categories in types.ts
  author: authors.authorName, // Choose from available authors in types.ts
  featured: false // Set to true if you want this post to appear in featured posts
};
```

3. Import and add your post to the `blogPosts` array in `index.ts`:

```typescript
import { post as yourNewPost } from './posts/your-post-id';

// Combine all blog posts
export const blogPosts: BlogPost[] = [
  // Existing posts...
  yourNewPost,
  // New posts will be added here
];
```

## Available Categories

- `academic` - Academic-related content
- `study-tips` - Tips for studying
- `career` - Career advice and opportunities
- `student-life` - Student lifestyle and experiences
- `technology` - Technology-related content

## Blog Post Best Practices

1. Use section IDs for navigation (`id="section-name"` in heading tags)
2. Include at least one image in your post
3. Keep paragraphs short and readable (3-5 sentences)
4. Use HTML formatting for:
   - Headings (`<h2>`, `<h3>`)
   - Lists (`<ul>`, `<ol>`)
   - Emphasis (`<strong>`, `<em>`)
   - Images with captions
5. Test your post on all screen sizes 
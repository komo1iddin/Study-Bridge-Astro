#!/usr/bin/env python3
"""
Fix circular import in article-data.ts and convert to blog-data.ts

This script:
1. Fixes the circular import issue in article-data.ts
2. Extracts article data from the file
3. Converts the article to blog post format
4. Updates blog-data.ts with the converted content
"""

import os
import re
import shutil
from datetime import datetime

# File paths
ARTICLE_DATA_PATH = "src/lib/article-data.ts"
BLOG_DATA_PATH = "src/lib/blog-data.ts"
BACKUP_PATH = "src/lib/blog-data.ts.bak"
ARTICLE_BACKUP_PATH = "src/lib/article-data.ts.bak"

def main():
    print("Starting article-data.ts fix and conversion to blog-data.ts")
    
    # Create backups
    if os.path.exists(ARTICLE_DATA_PATH):
        shutil.copy2(ARTICLE_DATA_PATH, ARTICLE_BACKUP_PATH)
        print(f"Created backup of article-data.ts at: {ARTICLE_BACKUP_PATH}")
    
    if os.path.exists(BLOG_DATA_PATH):
        shutil.copy2(BLOG_DATA_PATH, BACKUP_PATH)
        print(f"Created backup of blog-data.ts at: {BACKUP_PATH}")
    
    # Read article-data.ts content
    with open(ARTICLE_DATA_PATH, 'r', encoding='utf-8') as file:
        article_content = file.read()
    
    # Fix circular import
    fixed_article_content = fix_circular_import(article_content)
    
    # Write fixed content back to article-data.ts
    with open(ARTICLE_DATA_PATH, 'w', encoding='utf-8') as file:
        file.write(fixed_article_content)
    print("Fixed circular import in article-data.ts")
    
    # Extract article data
    article = extract_article_data(fixed_article_content)
    if not article:
        print("Failed to extract article data")
        return
    
    # Extract sections
    sections = extract_sections(fixed_article_content)
    if not sections:
        print("Failed to extract article sections")
        return
    
    print(f"Extracted article: {article['title']} with {len(sections)} sections")
    
    # Convert to blog post format
    blog_post = convert_to_blog_post(article, sections)
    print(f"Converted article to blog post format")
    
    # Update blog-data.ts
    update_blog_data(blog_post)
    print("Updated blog-data.ts with the new blog post")
    
    print("Conversion complete!")

def fix_circular_import(content):
    """Fix circular import by replacing it with proper type definition"""
    # Check if there's a circular import
    if "import { Article } from './article-data';" in content:
        # Replace the import with interface definition
        interface_def = """
export interface Article {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  sections: ArticleSection[];
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: ArticleSection[];
}
"""
        # Replace the circular import
        fixed_content = content.replace("import { Article } from './article-data';", interface_def)
        return fixed_content
    
    return content

def extract_article_data(content):
    """Extract the article data from the file"""
    # Try to find the moving-to-china article
    article_match = re.search(r'export const movingToChinaArticle: Article = ({[\s\S]*?});', content)
    if not article_match:
        # Try to find any article definition
        article_match = re.search(r'export const .*?Article: Article = ({[\s\S]*?});', content)
    
    if not article_match:
        # Try a more generic approach
        article_match = re.search(r'({[\s\S]*?id: [\'"].*?[\'"][\s\S]*?title: [\'"].*?[\'"][\s\S]*?});', content)
    
    if article_match:
        article_text = article_match.group(1)
        
        # Extract key fields using regex
        id_match = re.search(r'id: [\'"]([^\'"]*)[\'"]', article_text)
        title_match = re.search(r'title: [\'"]([^\'"]*)[\'"]', article_text)
        excerpt_match = re.search(r'excerpt: [\'"]([^\'"]*)[\'"]', article_text)
        cover_match = re.search(r'coverImage: [\'"]([^\'"]*)[\'"]', article_text)
        date_match = re.search(r'publishedDate: [\'"]([^\'"]*)[\'"]', article_text)
        author_name_match = re.search(r'name: [\'"]([^\'"]*)[\'"]', article_text)
        author_avatar_match = re.search(r'avatar: [\'"]([^\'"]*)[\'"]', article_text)
        read_time_match = re.search(r'readTime: [\'"]([^\'"]*)[\'"]', article_text)
        
        # Create article object
        article = {
            "id": id_match.group(1) if id_match else "moving-to-china",
            "title": title_match.group(1) if title_match else "Обучение в Китае",
            "excerpt": excerpt_match.group(1) if excerpt_match else "",
            "coverImage": cover_match.group(1) if cover_match else "",
            "publishedDate": date_match.group(1) if date_match else datetime.now().strftime("%Y-%m-%d"),
            "author": {
                "name": author_name_match.group(1) if author_name_match else "Автор",
                "avatar": author_avatar_match.group(1) if author_avatar_match else "",
            },
            "readTime": read_time_match.group(1) if read_time_match else "10 мин чтения",
        }
        
        return article
    
    return None

def extract_sections(content):
    """Extract sections from the article content"""
    sections = []
    
    # Find all sections in the content
    section_pattern = r'{[\s\S]*?id: [\'"]([^\'"]*)[\'"],[\s\S]*?title: [\'"]([^\'"]*)[\'"],[\s\S]*?content: `([\s\S]*?)`'
    section_matches = re.finditer(section_pattern, content)
    
    for match in section_matches:
        section_id = match.group(1)
        section_title = match.group(2)
        section_content = match.group(3)
        
        sections.append({
            "id": section_id,
            "title": section_title,
            "content": section_content
        })
    
    return sections

def convert_to_blog_post(article, sections):
    """Convert article data to blog post format"""
    # Process sections into HTML content
    html_content = ""
    for section in sections:
        html_content += f'<h2 class="text-2xl font-bold mt-8 mb-4" id="{section["id"]}">{section["title"]}</h2>\n'
        html_content += section["content"].strip() + "\n\n"
    
    # Create blog post with proper fields
    blog_post = {
        "id": article["id"],
        "title": article["title"],
        "excerpt": article["excerpt"],
        "content": html_content,
        "publishedDate": article["publishedDate"],
        "readTime": article["readTime"],
        "coverImage": article["coverImage"],
        "categories": ["academic", "study-tips"],
        "author": {
            "name": article["author"]["name"],
            "avatar": article["author"]["avatar"],
            "bio": "Образовательный консультант с опытом работы с китайскими университетами"
        },
        "featured": True
    }
    
    return blog_post

def update_blog_data(blog_post):
    """Update blog-data.ts with the new blog post"""
    try:
        # Read current blog-data.ts
        with open(BLOG_DATA_PATH, 'r', encoding='utf-8') as file:
            blog_content = file.read()
        
        # Create the blog post entry string
        blog_post_str = f"""
  {{
    "id": "{blog_post['id']}",
    "title": "{blog_post['title']}",
    "excerpt": "{blog_post['excerpt']}",
    "content": `{blog_post['content']}`,
    "publishedDate": "{blog_post['publishedDate']}",
    "readTime": "{blog_post['readTime']}",
    "coverImage": "{blog_post['coverImage']}",
    "categories": ['academic', 'study-tips'],
    "author": {{
      "name": "{blog_post['author']['name']}",
      "avatar": "{blog_post['author']['avatar']}",
      "bio": "{blog_post['author']['bio']}"
    }},
    "featured": true
  }}"""
        
        # Find and replace the blogPosts array
        blog_posts_pattern = r'export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];'
        
        # Check if the pattern exists
        if re.search(blog_posts_pattern, blog_content):
            # Replace the existing content
            new_blog_content = re.sub(blog_posts_pattern, f'export const blogPosts: BlogPost[] = [{blog_post_str}\n];', blog_content)
        else:
            # Create a new blog-data.ts file
            new_blog_content = f"""// Types for blog data
export type BlogCategory = 'all' | 'academic' | 'study-tips' | 'career' | 'student-life' | 'technology';

export interface BlogAuthor {{
  name: string;
  avatar: string;
  bio?: string;
}}

export interface BlogPost {{
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  categories: BlogCategory[];
  author: BlogAuthor;
  featured?: boolean;
}}

// Sample blog posts data
export const blogPosts: BlogPost[] = [{blog_post_str}
];

// Get all blog posts
export const getAllBlogPosts = () => {{
  return blogPosts;
}};

// Get blog posts by category
export const getBlogPostsByCategory = (category: BlogCategory) => {{
  if (category === 'all') {{
    return blogPosts;
  }}
  return blogPosts.filter(post => post.categories.includes(category));
}};

// Get featured blog posts
export const getFeaturedBlogPosts = () => {{
  return blogPosts.filter(post => post.featured);
}};

// Get recent blog posts
export const getRecentBlogPosts = (count: number = 3) => {{
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
}};

// Get blog post by ID
export const getBlogPostById = (postId: string) => {{
  const currentPost = blogPosts.find(post => post.id === postId);
  if (!currentPost) {{
    throw new Error(`Blog post with ID "${{postId}}" not found`);
  }}
  return currentPost;
}};

// Get related blog posts
export const getRelatedBlogPosts = (postId: string, count: number = 3) => {{
  const currentPost = blogPosts.find(post => post.id === postId);
  if (!currentPost) return [];

  const relatedPosts = blogPosts
    .filter(post => post.id !== postId && post.categories.some(cat => currentPost.categories.includes(cat)))
    .slice(0, count);

  return relatedPosts;
}};"""
        
        # Write the updated content back to the file
        with open(BLOG_DATA_PATH, 'w', encoding='utf-8') as file:
            file.write(new_blog_content)
        
    except Exception as e:
        print(f"Error updating blog-data.ts: {e}")

if __name__ == "__main__":
    main()
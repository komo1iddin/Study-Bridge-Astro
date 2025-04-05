#!/usr/bin/env python3
"""
Simple Article to Blog Post Converter

This script directly reads article-data.ts and writes to blog-data.ts
with minimal parsing complexity.
"""

import os
import re
import json
from datetime import datetime

# File paths
ARTICLE_DATA_PATH = "src/lib/article-data.ts"
BLOG_DATA_PATH = "src/lib/blog-data.ts"
BACKUP_PATH = "src/lib/blog-data.ts.bak"

def main():
    print("Starting direct conversion from article-data.ts to blog-data.ts")
    
    # Create backup of blog-data.ts
    if os.path.exists(BLOG_DATA_PATH):
        with open(BLOG_DATA_PATH, 'r', encoding='utf-8') as source:
            with open(BACKUP_PATH, 'w', encoding='utf-8') as target:
                target.write(source.read())
        print(f"Created backup at: {BACKUP_PATH}")
    
    # Read article-data.ts raw content
    with open(ARTICLE_DATA_PATH, 'r', encoding='utf-8') as file:
        article_content = file.read()
    
    # Read blog-data.ts for structure
    with open(BLOG_DATA_PATH, 'r', encoding='utf-8') as file:
        blog_content = file.read()
    
    # Extract the article
    # We know there's one article in the file with id "1" and slug "studying-in-china"
    article = {
        "id": "studying-in-china",
        "title": "Обучение в Китае: полное руководство для иностранных студентов",
        "excerpt": "Исчерпывающее руководство по поступлению, обучению и жизни в университетах Китая, с советами по стипендиям, языковой подготовке и культурной адаптации.",
        "coverImage": "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "publishedDate": "2023-09-15",
        "author": {
            "name": "Алексей Петров",
            "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
            "bio": "Образовательный консультант с 5-летним опытом работы с китайскими университетами"
        },
        "readTime": "15 мин чтения",
        "categories": ["academic", "study-tips"],
        "featured": True
    }
    
    # Extract all sections and combine them into HTML content
    sections_pattern = r'id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`'
    sections = re.findall(sections_pattern, article_content)
    
    # Process sections into HTML content
    html_content = ""
    for section_id, section_title, section_content in sections:
        html_content += f'<h2 class="text-2xl font-bold mt-8 mb-4" id="{section_id}">{section_title}</h2>\n'
        html_content += section_content.strip() + "\n\n"
    
    # Add the content to the article
    article["content"] = html_content
    
    # Create blog post entry
    blog_post_str = f"""
  {{
    "id": "{article['id']}",
    "title": "{article['title']}",
    "excerpt": "{article['excerpt']}",
    "content": `{article['content']}`,
    "publishedDate": "{article['publishedDate']}",
    "readTime": "{article['readTime']}",
    "coverImage": "{article['coverImage']}",
    "categories": ['academic', 'study-tips'],
    "author": {{
      "name": "{article['author']['name']}",
      "avatar": "{article['author']['avatar']}",
      "bio": "{article['author']['bio']}"
    }},
    "featured": true
  }}
"""

    # Replace the existing blog posts array with our new content
    blog_posts_pattern = r'export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];'
    new_blog_content = re.sub(blog_posts_pattern, f'export const blogPosts: BlogPost[] = [{blog_post_str}\n];', blog_content)
    
    # Write the updated content back to blog-data.ts
    with open(BLOG_DATA_PATH, 'w', encoding='utf-8') as file:
        file.write(new_blog_content)
    
    print(f"Successfully converted article to blog post")
    print(f"Content length: {len(article['content'])} characters")
    print("Conversion complete!")

if __name__ == "__main__":
    main()
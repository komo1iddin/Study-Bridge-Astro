# Article Data Conversion Scripts

This directory contains scripts for converting articles from the `article-data.ts` format to the `blog-data.ts` format.

## Scripts Overview

### update-blog-data.js

This script reads articles from `src/lib/article-data.ts` and converts them to the blog post format used in `src/lib/blog-data.ts`.

```sh
# Run the script
node scripts/update-blog-data.js
```

## Key Transformations

The conversion process includes the following transformations:

1. **Content Transformation**: Converts structured article sections to flat HTML content
   - Preserves section IDs for linking
   - Maintains the heading structure
   - Includes all subsections in the generated content

2. **Category Mapping**: Maps article content to blog categories
   - Uses the article title to determine appropriate categories
   - Falls back to 'academic' as default category

3. **Metadata Handling**: Ensures all required blog post fields are populated
   - Preserves original fields like title, excerpt, coverImage
   - Adds author information and other required fields
   - Sets the first few articles as featured posts

## Usage Notes

- The script creates a backup of `blog-data.ts` before making changes
- When running the script, ensure that both source files exist
- Check the console output for confirmation of successful conversion
- The script will exit with an error if it cannot find the required files or data

## Troubleshooting

If you encounter issues with the script:

1. Make sure `article-data.ts` exists and contains the expected structure
2. Check that the article array follows the expected format
3. Verify that `blog-data.ts` exists and has a `blogPosts` array
4. If the script errors when evaluating the article data, check for syntax issues in `article-data.ts`

## Adding New Articles

To add new articles:

1. Add the article to `article-data.ts` following the existing format
2. Run the conversion script
3. Verify the updated `blog-data.ts` file contains the new article

Alternatively, you can add posts directly to `blog-data.ts` following the blog post format. 
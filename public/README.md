# Public Directory

This directory contains static assets that are served directly by Next.js.

## Structure

- `/images/` - General images (logos, hero images, etc.)
- `/icons/` - Icons and favicons
- `/favicon.ico` - Main favicon
- `/robots.txt` - SEO robots file
- `/sitemap.xml` - Site map for search engines

## Usage

Files in this directory can be referenced from the root `/` in your code:

```jsx
// For an image at public/images/logo.png
<img src="/images/logo.png" alt="Logo" />

// Or using Next.js Image component
import Image from 'next/image'
<Image src="/images/logo.png" alt="Logo" width={100} height={100} />
```

## Important Notes

- Files must be static at build time
- Don't put sensitive files here (they're publicly accessible)
- Optimize images before placing them here
- Consider using Next.js Image component for better performance

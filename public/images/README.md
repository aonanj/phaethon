# Example images for your Phaethon LLC website

## Logo Usage

The logo.svg file can be used in your components like this:

```jsx
// Using regular img tag
<img src="/images/logo.svg" alt="Phaethon LLC Logo" width={100} height={100} />

// Using Next.js Image component (recommended)
import Image from 'next/image'
<Image src="/images/logo.svg" alt="Phaethon LLC Logo" width={100} height={100} />
```

## Adding More Images

Place your images in this directory and reference them from the root:
- `/images/hero-banner.jpg` → `<img src="/images/hero-banner.jpg" />`
- `/images/team/john-doe.jpg` → `<img src="/images/team/john-doe.jpg" />`

## Optimization Tips

1. Use WebP format for better compression
2. Use Next.js Image component for automatic optimization
3. Consider using CDN for large images
4. Keep file sizes reasonable for web performance

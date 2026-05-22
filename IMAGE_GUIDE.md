# Image Management Guide

## Image Formats
- **SVG**: Preferred format for diagrams, logos, and vector graphics
- **PNG/JPG**: For photographs and complex images

## Directory Structure
```
public/
├── images/
│   ├── news/          # News article images
│   ├── products/      # Product images
│   └── about/         # About page images
├── og-image.jpg       # Open Graph social media image
└── favicon.svg        # Website favicon
```

## Image Naming Convention
- Use lowercase letters and hyphens
- Format: `category-description.svg`
- Examples: `news-factory.svg`, `products-steel-pipe.svg`

## Updating Images

### 1. Adding News Images
1. Place SVG file in `public/images/news/`
2. Update reference in `src/data/news.ts`

### 2. Adding Product Images
1. Place SVG file in `public/images/products/`
2. Update reference in `src/data/products.ts`

### 3. Replacing Placeholder Images
To replace a placeholder with a real photo:
1. Save new image in the appropriate directory
2. Update the file extension in data files (e.g., .svg → .jpg)
3. Verify the image loads correctly

## Creating Good Placeholder SVGs
- Use company brand colors (primary, secondary)
- Include "FableTech Group" text
- Keep aspect ratio consistent (4:3 recommended)
- Use clear, simple designs

# Project Blueprint: Face-to-Face Website

## Overview
This project is a simple, framework-less web application designed to demonstrate face recognition and related AI concepts. It consists of several HTML pages, CSS styling, and JavaScript functionality. The goal is to create a visually appealing, responsive, and accessible website.

## Current State (After SEO Optimization)
The project currently includes:
- `index.html`: Main landing page, optimized for SEO with descriptive title, meta description, robots tag, and accurate Open Graph/Twitter Card meta tags.
- `about.html`: About Us page, optimized for SEO with descriptive title, meta description, robots tag, and Open Graph/Twitter Card meta tags.
- `articles.html`: Page listing articles, optimized for SEO with descriptive title, meta description, robots tag, and Open Graph/Twitter Card meta tags.
- `privacy.html`: Privacy Policy page, optimized for SEO with descriptive title, meta description, `noindex, follow` robots tag, and Open Graph/Twitter Card meta tags.
- `animal_face_test.html`: AI Animal Face Test page, optimized for SEO with descriptive title, meta description, robots tag, and Open Graph/Twitter Card meta tags. Dynamic title setting in inline script removed to allow static SEO-friendly title to persist.
- `article-ai-face-recognition.html`: Article on AI face recognition, optimized for SEO with descriptive title, meta description, robots tag, and Open Graph/Twitter Card meta tags.
- `article-ethics-of-ai.html`: Article on AI ethics, optimized for SEO with descriptive title, meta description, robots tag, and Open Graph/Twitter Card meta tags.
- `face_test.html`: This file was found to be empty and thus does not require SEO optimization.
- `style.css`: Global CSS styles.
- `main.js`: Main JavaScript file for interactive elements, updated to conditionally set document title only for `index.html`.
- `images/`: Directory for images, including placeholder SVGs with `alt` attributes.
- `ads.txt`: Verified to be correctly configured.
- `.idx/dev.nix`, `.idx/mcp.json`: Firebase Studio environment configuration.

The site is deployed at `https://face-to-face-7a1.pages.dev/`.

## Design and Features

### Aesthetics
- Modern, clean layout with a focus on visual balance and clear spacing.
- Usage of placeholder images (`.svg`) for visual elements with descriptive `alt` attributes.
- Basic navigation structure.

### Accessibility (A11Y)
- General commitment to accessibility, with semantic HTML and descriptive image `alt` attributes contributing to better accessibility.

## Completed Task: SEO Optimization

### Plan
The task to optimize the website for Search Engine Optimization (SEO) based on recommendations from Google and Naver has been completed. This involved improving the discoverability and ranking of the website in search engine results.

### Steps Taken
1.  **Fetched SEO Guide Content**: Read content from Google and Naver SEO guides to understand recommendations.
2.  **Analyzed and Optimized `index.html`**:
    *   Updated `<title>` tag to be descriptive and keyword-rich.
    *   Updated `<meta name="description">` with relevant keywords.
    *   Ensured `<meta name="viewport">` is correctly configured.
    *   Added `alt` attributes to all `<img>` tags (already present for most).
    *   Updated Open Graph and Twitter Card meta tags with actual deployment URL and relevant image.
    *   Added `meta name="robots"` tag set to `index, follow`.
3.  **Optimized other HTML files**: Applied similar SEO best practices to `about.html`, `articles.html`, `privacy.html`, `animal_face_test.html`, `article-ai-face-recognition.html`, and `article-ethics-of-ai.html`.
    *   For `privacy.html`, used `noindex, follow` in the robots meta tag.
    *   Removed dynamic title setting from `animal_face_test.html`'s inline script.
4.  **Modified `main.js`**: Updated `setLanguage` function to conditionally set `document.title` only for `index.html` to prevent conflicts with SEO-optimized titles on other pages.
5.  **Verified `ads.txt`**: Confirmed `ads.txt` is correctly configured.
6.  `face_test.html` was identified as an empty file and skipped for SEO optimization.
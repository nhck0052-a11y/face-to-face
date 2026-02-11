# Project Blueprint: Face-to-Face Website

## Overview
This project is a simple, framework-less web application designed to demonstrate face recognition and related AI concepts. It consists of several HTML pages, CSS styling, and JavaScript functionality. The goal is to create a visually appealing, responsive, accessible, and now, Generative Engine Optimized (GEO) website.

## Current State (After SEO & GEO Optimization)
The project currently includes:
- `index.html`: Main landing page, optimized for SEO with descriptive title, meta description, robots tag, accurate Open Graph/Twitter Card meta tags, canonical link, WebSite structured data, asynchronously loaded Font Awesome, and a new FAQ section for GEO.
- `about.html`: About Us page, optimized for SEO with descriptive title, meta description, robots tag, Open Graph/Twitter Card meta tags, and canonical link. Also includes `favicon.ico` link.
- `articles.html`: Page listing articles, optimized for SEO with descriptive title, meta description, robots tag, Open Graph/Twitter Card meta tags, and canonical link. Also includes `favicon.ico` link.
- `privacy.html`: Privacy Policy page, optimized for SEO with descriptive title, meta description, `noindex, follow` robots tag, Open Graph/Twitter Card meta tags, and canonical link. Also includes `favicon.ico` link.
- `animal_face_test.html`: AI Animal Face Test page, optimized for SEO with descriptive title, meta description, robots tag, Open Graph/Twitter Card meta tags, canonical link, and deferred loading for TensorFlow, Teachable Machine, and Canvas Confetti scripts. Also includes `favicon.ico` link.
- `article-ai-face-recognition.html`: Article on AI face recognition, optimized for SEO with descriptive title, meta description, robots tag, Open Graph/Twitter Card meta tags, and canonical link. Also includes `favicon.ico` link.
- `article-ethics-of-ai.html`: Article on AI ethics, optimized for SEO with descriptive title, meta description, robots tag, Open Graph/Twitter Card meta tags, and canonical link. Also includes `favicon.ico` link.
- `404.html`: Custom 404 error page with helpful links. Includes `favicon.ico` link, canonical link, meta description, and robots `noindex, nofollow`.
- `face_test.html`: This file was found to be empty and thus does not require SEO optimization.
- `style.css`: Global CSS styles.
- `main.js`: Main JavaScript file for interactive elements, updated to conditionally set document title only for `index.html`.
- `images/`: Directory for images, including placeholder SVGs with `alt` attributes.
- `ads.txt`: Verified to be correctly configured.
- `sitemap.xml`: Created to help search engines crawl the site.
- `favicon.ico`: Added a reference for broader compatibility.
- `.idx/dev.nix`, `.idx/mcp.json`: Firebase Studio environment configuration.

The site is deployed at `https://face-to-face-7a1.pages.dev/`.

## Design and Features

### Aesthetics
- Modern, clean layout with a focus on visual balance and clear spacing.
- Usage of placeholder images (`.svg`) for visual elements with descriptive `alt` attributes.
- Basic navigation structure.

### Accessibility (A11Y)
- General commitment to accessibility, with semantic HTML and descriptive image `alt` attributes contributing to better accessibility.

## Completed Task: SEO & GEO Optimization

### Plan
The task to optimize the website for Search Engine Optimization (SEO) and Generative Engine Optimization (GEO) based on recommendations from Google, Naver, and a Toss Payments article has been completed.

### Steps Taken for SEO
1.  **URL Canonicalization**: Added `<link rel="canonical">` tags to all relevant HTML pages pointing to their preferred URLs.
2.  **Eliminate Render-Blocking Resources**:
    *   Font Awesome CSS in `index.html` is now loaded asynchronously using `preload` and `onload` attributes.
    *   TensorFlow, Teachable Machine, and Canvas Confetti scripts in `animal_face_test.html` now use the `defer` attribute.
3.  **Add Sitemap File**: Generated a `sitemap.xml` file listing all public HTML pages.
4.  **Custom 404 Error Page**: Created a `404.html` with helpful links and meta tags.
5.  **Structured Data**: Added basic `WebSite` structured data (JSON-LD) to `index.html`.
6.  **Favicon**: Added a reference to `favicon.ico` alongside the existing `favicon.svg` for broader compatibility across all HTML pages.
7.  **`main.js` Modification**: Updated `setLanguage` function to conditionally set `document.title` only for `index.html` to prevent conflicts with SEO-optimized titles on other pages.
8.  **`firebase-debug.log`**: Untracked `firebase-debug.log` from git.

### Steps Taken for GEO
1.  **Conversational Content**: Added a "자주 묻는 질문 (FAQ)" section to `index.html` with example questions and user-centric answers to enhance conversational content.

### Items for User's Consideration (Beyond direct code modification)
1.  **SPF Record**: Requires DNS configuration.
2.  **Strict-Transport-Security Header**: Requires server/hosting configuration.
3.  **Using More Than 20 HTTP Requests**: Partially addressed by render-blocking resource optimization. Further reduction would require more in-depth build optimizations (e.g., asset bundling, minification, image sprites).

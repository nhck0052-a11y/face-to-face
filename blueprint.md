# Project Blueprint: Face-to-Face

## Overview
This project is a user-friendly, interactive web application designed to provide entertainment and fun through two main features: a "Lucky Draw" game and an AI-powered "Animal Face Test." The site has been significantly enhanced to meet Google AdSense quality guidelines, featuring a professional and consistent design, clear navigation, substantial content, and important trust-building pages like "About Us" and a "Privacy Policy." The application is fully bilingual (Korean/English) and responsive.

## High-Quality Site Enhancements for AdSense
To align with AdSense program policies and best practices for creating a high-quality site, the following major improvements have been implemented:

- **Creation of Essential Pages:**
    - **`about.html`:** An "About Us" page has been created to clearly explain the website's purpose, its features, and its mission to provide enjoyable content.
    - **`privacy.html`:** A comprehensive "Privacy Policy" page has been added, detailing data handling practices (including for the contact form and Google AdSense), which is a critical factor for user trust and AdSense approval.

- **Improved Site Structure & Navigation:**
    - **Consistent Header:** A sticky navigation header has been implemented across all pages (`index.html`, `animal_face_test.html`, `about.html`, `privacy.html`), featuring the site title, and links to major sections ("Animal Face Test," "About Us"), language selectors, and a contact button.
    - **Consistent Footer:** A site-wide footer has been added, containing links to the "About Us" and "Privacy Policy" pages, and a copyright notice.
    - This unified structure provides a predictable and user-friendly navigation experience.

- **Enhanced Content Quantity and Quality:**
    - **Home Page (`index.html`):** The main page now includes a detailed introduction to the website and its features, providing users with clear, valuable information upfront. The "Lucky Draw" section also has more descriptive text.
    - **Animal Face Test Page (`animal_face_test.html`):** This page now includes a proper title and a description of the feature, enriching the user's understanding and increasing the page's content.

## Core Features

- **Lucky Draw Game (`index.html`):**
    - Users can click a "Draw" button to receive a random prize from a predefined list.
    - A celebratory confetti animation is displayed upon winning.
    - A "Share" button allows users to share their results.

- **Animal Face Test (`animal_face_test.html`):**
    - **AI Model Integration:** Integrates a Teachable Machine Image Model to classify user-uploaded photos into different "animal faces" (e.g., Dog, Cat, Pig).
    - **Robust File Upload:** The image upload functionality is implemented via a standard `<button>` that programmatically triggers a hidden `<input type="file">`. This ensures maximum compatibility across desktop and mobile browsers.
    - **Error Handling:** The `loadModel` function is enhanced to prevent users from attempting to upload an image before the AI model is fully loaded. The upload button is `disabled` during loading and hidden if loading fails.
    - **Rich Results:** The test displays the resulting animal face type along with a detailed, engaging description of its characteristics.

- **Bilingual Support (Korean/English):**
    - All text content across the entire site, including navigation, footers, and dynamically generated content, is translatable.
    - The user's language preference is saved in `localStorage` to persist across sessions.

- **Contact Form:**
    - A modal-based contact form for partnership inquiries, submitting data to Formspree.

## Google AdSense Integration
- **AdSense Script**: The Google AdSense script and meta tag have been added to the `<head>` section of both `index.html` and `animal_face_test.html` for ad serving and account verification.
- **`ads.txt`**: An `ads.txt` file has been created in the root directory to authorize ad sellers.

## Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- `canvas-confetti` library (via CDN)
- Formspree for form submission
- TensorFlow.js and Teachable Machine Image library for the AI model

## Code-level Improvements
- **JavaScript Refactoring:** All page-specific JavaScript, including DOM element selections and event listeners, is now wrapped in a `DOMContentLoaded` event handler. This ensures that the script only executes after the DOM is fully parsed and ready, preventing race conditions and improving reliability.
- **CSS Restructuring:** The stylesheet has been overhauled to support the new site structure, removing obsolete rules and adding new styles for the header, footer, and navigation to create a clean, modern, and responsive design.
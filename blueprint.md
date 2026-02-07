# Project Blueprint: Face-to-Face

## Overview
This project is a simple web-based "lucky draw" application. Users click a button to randomly receive a prize, which is then displayed on the screen along with a confetti animation. There's also an option to share the result on Instagram. The application is built using plain HTML, CSS, and JavaScript, and it leverages the `canvas-confetti` library for animations.

## Current Features
- **Lucky Draw Mechanism**: A button triggers a random selection from a predefined list of prizes.
- **Confetti Animation**: A celebratory confetti effect is displayed upon winning a prize.
- **Result Display**: The selected prize is shown to the user.
- **Share Functionality**: Users can share their winning message on Instagram (simulated via an alert and opening a new tab).
- **Basic Styling**: Responsive design with a clean, modern aesthetic.
- **Firebase Configuration**: The project is pre-configured with Firebase for potential deployment.

## New Feature: Partnership Inquiry Contact Form
- **Formspree Integration**: A contact form for partnership inquiries, submitting data to Formspree.
- **Form Fields**: Includes fields for Name, Email, and Message.
- **Navigation**: A navigation button for "제휴 문의" (Partnership Inquiry) in the main application's header (index.html), positioned in the top-left corner.

## New Feature: Animal Face Test (Teachable Machine Integration)
- **Teachable Machine Model Integration**: Integrates a Teachable Machine Image Model (URL: `https://teachablemachine.withgoogle.com/models/ANIMAL_MODEL_PLACEHOLDER/`) for an animal face reading test, classifying faces into "개상" (Dog Face), "고양이상" (Cat Face), or "돼지상" (Pig Face).
- **Input Method**: Uses file upload for image analysis.
- **Real-time Prediction**: Displays predictions from the Teachable Machine model based on the uploaded image.
- **Enhanced Results Display**: Focuses on displaying only the highest probability prediction class with translated, engaging names (e.g., "개상", "고양이상", "돼지상") and detailed, expert-like descriptions that include plausible facial feature analysis and their significance.
- **Visual Effects**: A confetti burst effect is triggered for "개상" (Dog Face) predictions.
- **Social Sharing**: Includes a "Share on Instagram" button, allowing users to easily share their animal face reading results.
- **Dedicated Page**: The feature resides on a separate page (`animal_face_test.html`).
- **Navigation**: A navigation button for "동물상 테스트" in the main application's header (index.html) leads to this test page, positioned in the top-left corner next to the "제휴문의" (Partnership Inquiry) button, and a link on the test page allows users to return to the home page.
- **Language Support**: All static text on the animal face test page is translatable (Korean/English).

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- `canvas-confetti` library (via CDN)
- Formspree for form submission handling
- TensorFlow.js and Teachable Machine Image library for the AI model.

## Responsive Design Improvements
- **Absolute Positioning for Nav Elements**: Navigation buttons (Partnership Inquiry, Animal Face Test) and language selectors are now absolutely positioned in the top-left and top-right corners respectively, ensuring consistent placement across devices.
- **Media Queries for Mobile**: Implemented media queries to adjust the size and positioning of buttons and text for smaller screens, improving usability and layout on mobile devices.
- **Back-to-Home Button Adjustment**: The "홈으로 돌아가기" button's size is also adjusted for mobile screens within media queries.
- **Back-to-Home Button Repositioning**: The "홈으로 돌아가기" button is now positioned at the bottom center of the animal face test page, making it more accessible on mobile devices.
- **Back-to-Home Button Styling**: The "홈으로 돌아가기" button is now styled with a green background color and white text for better visibility and consistency.
- **Loading Message for User Experience**: A "잠시만 기다려주세요..." loading message is displayed while the Teachable Machine model is loading, and it disappears once the model is ready or an image is selected, improving user experience.
- **Z-Index Management**: Carefully managed z-index of overlapping elements, especially for navigation buttons and the confetti canvas, to ensure all interactive elements are clickable.

## Current Language
The application is currently entirely in Korean.

## Plan for Current Request: Add Language Selection (Korean/English) and Deployment

### Objective
To enable users to switch between Korean and English for all text content within the application and to provide deployment instructions using Firebase.

### Steps
1.  **Examine existing project files (index.html, main.js, style.css, .idx/mcp.json).** (Completed)
2.  **Update/Create blueprint.md with current project overview.** (In Progress)
3.  **Implement language selection UI in index.html.**
    *   Add a dropdown or buttons to the header or a suitable location for "한국어" and "English".
    *   Style the language selector in `style.css`.
4.  **Prepare translation data in main.js.**
    *   Create a JavaScript object (`translations`) to store key-value pairs for all user-facing text, with nested objects for each language (e.g., `translations.ko`, `translations.en`).
5.  **Implement language switching logic in main.js to update content.**
    *   Add a function (`setLanguage`) that takes a language code (e.g., 'ko', 'en') as input.
    *   This function will iterate through elements with a specific data attribute (e.g., `data-i18n-key`) and update their `textContent` based on the selected language and the `translations` object.
    *   Store the user's language preference in `localStorage` to persist it across sessions.
    *   Call `setLanguage` on page load based on `localStorage` or a default.
6.  **Update existing content in index.html and main.js to use translation keys.**
    *   Replace hardcoded Korean strings in `index.html` with `data-i18n-key` attributes.
    *   Replace hardcoded Korean strings in `main.js` (e.g., prize names, alert messages) with references to the `translations` object.
7.  **Configure Firebase Hosting by updating .idx/mcp.json.**
    *   Verify that the `.idx/mcp.json` is correctly set up for Firebase as per `GEMINI.md` guidelines. (Already done)
8.  **Provide instructions for deployment.**
    *   Explain how to build (if necessary) and deploy the application using Firebase Hosting.
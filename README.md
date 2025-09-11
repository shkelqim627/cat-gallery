Mini Cat Gallery
This is a mini web application built with Vue.js that displays a gallery of random cat photos from The Cat API.
Features
* Dynamic Gallery: Fetches and displays a grid of random cat images on page load and with a "Refresh Cats" button.
* Full-Screen Modal: Clicking any cat image opens a clean, full-screen modal showing a larger version of the photo.
* Responsive Design: The app and its modal are fully responsive and look great on both desktop and mobile devices.
* Centralized State Management: The application's loading state is managed efficiently in the parent component (App.vue) to avoid conflicts and ensure a smooth user experience.
* Styled Components: Custom CSS is used for a modern, aesthetic look, including card shadows, button hover effects, and a dark, stylish modal overlay.
* External Service: All API-related logic is kept separate in CatService.js, which keeps the Vue components clean and focused on rendering.
Technical Details
* CSS: The project uses a single styles.css file to manage all of the application's visual styling.
* Fonts: The app uses the Poppins font for a clean, modern look.
* API: All cat data is fetched from The Cat API.
How to Run
1. Ensure you have a recent version of Node.js installed.
2. Install the project dependencies with npm install.
3. Start the development server with npm run dev.
4. Open the application in your browser.
# Resume Website

This is a React-based resume/portfolio website.

## Profile Picture

To add your profile picture:

1. Replace the placeholder file at `src/assets/profile.jpg` with your actual profile picture
2. Make sure the image is in JPG or JPEG format
3. For best results, use a square image (1:1 aspect ratio)
4. Recommended size: 400x400 pixels or larger

### Interactive Profile Picture Positioning

If your profile picture doesn't show your face properly in the circular crop, you can adjust it directly on the website:

1. Simply click on your profile picture to cycle through different position options
2. The position will automatically be saved in your browser's localStorage
3. Continue clicking until you find the position that displays your face properly
4. The available positions cycle through: top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, and bottom-right

This feature is especially helpful for vertically-oriented photos taken on mobile phones.

## Automatic Dark/Light Mode

The application automatically switches between light and dark mode based on the time of day:

1. **Light Mode (7 AM - 7 PM)**: During daytime hours, the application defaults to light mode
2. **Dark Mode (7 PM - 7 AM)**: During evening and night hours, the application defaults to dark mode
3. **User Preference**: If you manually toggle the theme using the theme button, your preference is saved and will override the automatic time-based setting
4. **Persistence**: Your theme preference is saved in localStorage and will be remembered across visits

## Development

To run the development server:

```bash
npm install
npm start
```

## Building for Production

To build the application for production:

```bash
npm run build
```

## Deployment on GitHub Pages

After building, copy the build files to your GitHub Pages repository:

```bash
cp -r build/* ..  # If your GitHub Pages repo is the parent directory
```

## Features Implemented

- Responsive design for mobile and desktop
- Dark/light theme toggle with time-based defaults
- Job status indicator
- Timeline-based navigation
- Two-way scrolling between job status indicator and job status section
- Interactive profile picture positioning
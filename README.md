# DroneFX - Drone Video Simulation Website

A modern, responsive static website for a drone video simulation service. This website allows users to upload videos and specify the number of drones to generate a top-down aerial simulation of how the drones would recreate the video in the sky.

## Features

- Clean, modern design with responsive layout
- Mobile-friendly navigation
- Video upload and drone count input form
- Contact form with validation
- Interactive Google Maps integration
- Smooth animations and transitions
- Cross-browser compatibility

## Technologies Used

- HTML5
- CSS3 (with TailwindCSS)
- JavaScript (Vanilla)
- Google Maps Embed API
- TailwindCSS (via CDN)

## Project Structure

```
drone_website/
├── index.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/drone_website.git
   cd drone_website
   ```

2. No build process is required as this is a static website using TailwindCSS via CDN.

3. Open `index.html` in your browser to view the website locally.

## Deployment to GitHub Pages

1. Create a new repository on GitHub.

2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/drone_website.git
   git push -u origin main
   ```

3. Go to your repository settings on GitHub.

4. Scroll down to the "GitHub Pages" section.

5. Select the `main` branch as the source.

6. Click "Save" and wait a few minutes for your site to be deployed.

Your website will be available at: `https://yourusername.github.io/drone_website/`

## Customization

### Changing Colors

The website uses TailwindCSS utility classes for styling. To change colors, modify the corresponding color classes in the HTML files. For example:

- Primary color: `text-blue-600`, `bg-blue-600`
- Secondary color: `text-gray-800`, `bg-gray-800`
- Accent colors: Can be modified by changing the color classes

### Adding Content

1. Modify the content in `index.html` and `contact.html` as needed.
2. Update the contact information in `contact.html`.
3. Replace the Google Maps embed URL with your desired location.

### Custom Styling

Additional custom styles can be added in `css/styles.css`. The file is already set up with some custom styles that complement TailwindCSS.

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/drone_website 
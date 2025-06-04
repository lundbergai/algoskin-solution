# AlgoSkin Solution Landing Page

A sleek, modern landing page for AlgoSkin Solution featuring interactive visualizations and animations.

## Requirements

### Node.js Version

This project requires **Node.js 20.x** or later.

To check your Node.js version:

\`\`\`bash
node --version
\`\`\`

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/algoskin-solution.git
cd algoskin-solution

# Install dependencies with legacy peer deps flag
# This flag is needed to resolve potential dependency conflicts
npm install --legacy-peer-deps
\`\`\`

## Development

\`\`\`bash
# Start the development server
npm run dev
\`\`\`

This will start the Vite development server at [http://localhost:5173](http://localhost:5173).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Production Deployment

### Building for Production

\`\`\`bash
# Build the project
npm run build
\`\`\`

This creates a `dist` folder with optimized production files.

### Deployment Options

#### Option 1: Static File Server

The simplest way to deploy:

\`\`\`bash
# Install serve globally
npm install -g serve

# Serve the dist folder
serve -s dist
\`\`\`

#### Option 2: Node.js Server

If you prefer running with Node.js:

\`\`\`bash
# Install a production server
npm install -g http-server

# Serve the dist folder
http-server dist -p 3000
\`\`\`

#### Option 3: Docker Deployment

Create a `Dockerfile`:
\`\`\`dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

Build and run:
\`\`\`bash
docker build -t algoskin-solution .
docker run -p 80:80 algoskin-solution
\`\`\`

### Popular Hosting Platforms

- **Vercel:** `npm run build` then deploy `dist/` folder
- **Netlify:** Connect your repository and set build command to `npm run build`
- **GitHub Pages:** Deploy the `dist/` folder to `gh-pages` branch
- **AWS S3 + CloudFront:** Upload `dist/` contents to S3 bucket

## Project Structure

\`\`\`
algoskin-solution/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── LandingPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
\`\`\`

## Features

- ✨ **Modern Tech Stack:** Vite + React + TypeScript
- 🎨 **Tailwind CSS:** Utility-first styling
- 📱 **Responsive Design:** Mobile-first approach
- 🌟 **Interactive Animations:** Smooth CSS animations
- 🎯 **Performance Optimized:** Fast loading and rendering
- 🔧 **Developer Experience:** Hot reload, TypeScript support

## Visual Components

- **World Map Visualization:** Animated dotted world map background
- **Neural Network:** AI-inspired animated network visualization
- **Profit Chart:** Dynamic upward trending chart
- **Geometric Elements:** Holographic diamond accents
- **Gradient Typography:** Eye-catching brand presentation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions or support, contact: [viktor@lundberg.ai](mailto:viktor@lundberg.ai)

## License

Private project - All rights reserved.

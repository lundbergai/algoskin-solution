# AlgoSkin Solution Landing Page

A sleek, modern landing page for AlgoSkin Solution featuring interactive visualizations and animations.

## Requirements

### Node.js Version

This project requires **Node.js 20.x** or later.

To check your Node.js version:

```bash
node --version
```

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/algoskin-solution.git
cd algoskin-solution

# Install dependencies with legacy peer deps flag
# This flag is needed to resolve potential dependency conflicts
npm install --legacy-peer-deps
```

## Development

```bash
# Start the development server
npm run dev
```

This will start the Vite development server at [http://localhost:5173](http://localhost:5173).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to production server (runs deploy.sh)
- `npm run deploy:production` - Quick production deployment (inline commands)

## Production Deployment

### Automated Deployment

This project includes automated deployment scripts for easy production deployment:

#### Option 1: Full Deployment Script (Recommended)

```bash
npm run deploy
```

This runs the `deploy.sh` script which:
- 🚀 Installs dependencies with legacy peer deps
- 🔨 Builds the project for production
- 📂 Deploys to `/var/www/algo.skin/`
- 🔧 Sets proper file permissions
- 🔄 Reloads nginx
- ✅ Provides deployment status feedback

#### Option 2: Quick Production Deployment

```bash
npm run deploy:production
```

This is a streamlined deployment that:
- Builds with production environment
- Copies files to web directory
- Sets ownership and permissions
- Reloads nginx

### Prerequisites for Automated Deployment

Before using the deployment scripts, ensure:

1. **Server Setup:**
   - Nginx is installed and configured
   - Web directory `/var/www/algo.skin/` exists
   - Proper sudo permissions for deployment user

2. **Nginx Configuration:**
   ```nginx
   server {
       listen 80;
       server_name algo.skin www.algo.skin;
       root /var/www/algo.skin;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Permissions:**
   - User has sudo access for file operations and nginx reload
   - Web directory is writable

### Manual Deployment Options

#### Building for Production

```bash
# Build the project
npm run build
```

This creates a `dist` folder with optimized production files.

#### Option 1: Static File Server

The simplest way to deploy:

```bash
# Install serve globally
npm install -g serve

# Serve the dist folder
serve -s dist
```

#### Option 2: Node.js Server

If you prefer running with Node.js:

```bash
# Install a production server
npm install -g http-server

# Serve the dist folder
http-server dist -p 3000
```

#### Option 3: Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t algoskin-solution .
docker run -p 80:80 algoskin-solution
```

### Popular Hosting Platforms

- **Vercel:** `npm run build` then deploy `dist/` folder
- **Netlify:** Connect your repository and set build command to `npm run build`
- **GitHub Pages:** Deploy the `dist/` folder to `gh-pages` branch
- **AWS S3 + CloudFront:** Upload `dist/` contents to S3 bucket

## Project Structure

```
algoskin-solution/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── LandingPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── deploy.sh              # Automated deployment script
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Features

- ✨ **Modern Tech Stack:** Vite + React + TypeScript
- 🎨 **Tailwind CSS:** Utility-first styling
- 📱 **Responsive Design:** Mobile-first approach
- 🌟 **Interactive Animations:** Smooth CSS animations
- 🎯 **Performance Optimized:** Fast loading and rendering
- 🔧 **Developer Experience:** Hot reload, TypeScript support
- 🚀 **Automated Deployment:** One-command production deployment

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

## Troubleshooting

### Deployment Issues

If deployment fails:

1. **Check permissions:**
   ```bash
   sudo chown -R $USER:$USER /var/www/algo.skin/
   ```

2. **Verify nginx status:**
   ```bash
   sudo systemctl status nginx
   ```

3. **Check build output:**
   ```bash
   npm run build
   ls -la dist/
   ```

## Contact

For questions or support, contact: [viktor@lundberg.ai](mailto:viktor@lundberg.ai)

## License

Private project - All rights reserved.

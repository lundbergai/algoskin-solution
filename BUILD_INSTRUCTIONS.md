# Build Instructions for AlgoSkin Solution

## Prerequisites

- **Node.js 20.x** or later
- **npm 9.x** or later

## Installation Steps

### 1. Clean Installation

If you're having build issues, start with a clean installation:

\`\`\`bash
# Remove existing node_modules and lock files
rm -rf node_modules
rm -f package-lock.json

# Install with legacy peer deps
npm install --legacy-peer-deps
\`\`\`

### 2. Alternative Installation Method

You can also use the npm script:

\`\`\`bash
npm run install:legacy
\`\`\`

### 3. Development

\`\`\`bash
npm run dev
\`\`\`

### 4. Production Build

\`\`\`bash
npm run build
\`\`\`

## Troubleshooting

### Common Issues

1. **Peer Dependency Conflicts**
   - Solution: Always use `--legacy-peer-deps` flag
   - The `.npmrc` file should handle this automatically

2. **Node Version Issues**
   - Ensure you're using Node.js 20.x or later
   - Check with: `node --version`

3. **Build Failures**
   - Clear cache: `npm cache clean --force`
   - Remove node_modules: `rm -rf node_modules`
   - Reinstall: `npm install --legacy-peer-deps`

### Environment Setup

Create a `.env` file if needed:
\`\`\`
# Add any environment variables here
VITE_APP_NAME=AlgoSkin Solution
\`\`\`

## CI/CD Configuration

For automated builds, ensure your CI/CD pipeline uses:

\`\`\`yaml
# Example GitHub Actions
- name: Install dependencies
  run: npm install --legacy-peer-deps

- name: Build
  run: npm run build
\`\`\`

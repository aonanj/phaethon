# Deployment Guide

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your project:
   ```bash
   vercel
   ```

4. For production deployments:
   ```bash
   vercel --prod
   ```

### Option 2: Using Git Integration

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Configure your build settings (Next.js is detected automatically)
6. Deploy!

### Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables in `.env.local`

3. For production, add your environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables

### Custom Domain

1. In your Vercel project dashboard
2. Go to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## Deploy to Other Platforms

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `out` folder to Netlify

### Deploy to Railway

1. Connect your GitHub repository
2. Railway will automatically detect Next.js and deploy

### Deploy to AWS, Azure, or Google Cloud

Use the Docker option or deploy the built static files to your preferred cloud provider.

## Build Commands

- Development: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm start`
- Type checking: `npm run type-check`
- Linting: `npm run lint`

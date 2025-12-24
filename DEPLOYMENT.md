# Deployment Guide

This guide covers deploying your scrollytelling project to various hosting platforms. All platforms support free hosting for static sites.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Deploy to Vercel](#deploy-to-vercel)
- [Deploy to Netlify](#deploy-to-netlify)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Deploy to Cloudflare Pages](#deploy-to-cloudflare-pages)
- [Local Development](#local-development)
- [Custom Domain Setup](#custom-domain-setup)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- [x] A GitHub account
- [x] Git installed locally
- [x] Your code pushed to a GitHub repository

---

## Deploy to Vercel

Vercel offers the fastest and easiest deployment for static sites.

### Method 1: Using Vercel Dashboard (Recommended)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import your repository**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it as a static site

3. **Configure deployment**
   - Framework Preset: `Other`
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Install Command: (leave empty)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~30 seconds!

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (run from project root)
vercel

# Deploy to production
vercel --prod
```

**Your site will be available at:** `https://your-project-name.vercel.app`

### Vercel Features

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview URLs for pull requests
- ✅ Zero configuration needed

---

## Deploy to Netlify

Netlify is another excellent platform with generous free tier.

### Method 1: Using Netlify Dashboard (Recommended)

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Create new site**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize Netlify

3. **Configure deployment**
   - Pick your repository
   - Build command: (leave empty)
   - Publish directory: `.`

4. **Deploy**
   - Click "Deploy site"
   - Site will be live in ~1 minute

### Method 2: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
netlify deploy --prod
```

### Method 3: Drag and Drop

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Instant deployment!

**Your site will be available at:** `https://your-site-name.netlify.app`

### Netlify Features

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment
- ✅ Form handling
- ✅ Split testing
- ✅ `netlify.toml` configuration included

---

## Deploy to GitHub Pages

GitHub Pages is perfect if you want to keep everything in GitHub.

### Setup Instructions

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select your main branch
   - Folder: `/ (root)`
   - Click Save

2. **Wait for deployment**
   - GitHub Actions will build and deploy automatically
   - Check the Actions tab for progress

**Your site will be available at:** `https://yourusername.github.io/scrollytellingtest`

### Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

### GitHub Pages Features

- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Integrated with your repository
- ⚠️ Site is public (even for private repos)

---

## Deploy to Cloudflare Pages

Cloudflare Pages offers excellent performance with their global network.

### Deployment Steps

1. **Sign up for Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up and connect your GitHub

2. **Create new project**
   - Click "Create a project"
   - Select your GitHub repository

3. **Configure build**
   - Framework preset: `None`
   - Build command: (leave empty)
   - Build output directory: `/`

4. **Deploy**
   - Click "Save and Deploy"

**Your site will be available at:** `https://your-project.pages.dev`

### Cloudflare Features

- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ Global CDN (200+ cities)
- ✅ DDoS protection
- ✅ Web Analytics

---

## Local Development

Test your site locally before deploying:

### Option 1: Python HTTP Server (Simplest)

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Option 2: Using npm script

```bash
npm run dev
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 4: Node.js http-server

```bash
# Install globally
npm install -g http-server

# Run
http-server
```

---

## Custom Domain Setup

### For Vercel

1. Go to your project settings
2. Domains → Add domain
3. Enter your custom domain
4. Add DNS records provided by Vercel

### For Netlify

1. Domain settings → Add custom domain
2. Follow DNS configuration instructions
3. SSL certificate auto-provisions

### For GitHub Pages

1. Add a `CNAME` file to your repository:
   ```
   yourdomain.com
   ```
2. Configure your DNS:
   - Add A records pointing to GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add CNAME pointing to `yourusername.github.io`

### For Cloudflare Pages

1. Already using Cloudflare DNS
2. Just add your domain in project settings
3. Instant SSL and CDN

---

## Environment Variables

While this is a static site and doesn't need environment variables, if you add API keys or secrets:

### Vercel
```bash
vercel env add
```

### Netlify
Settings → Environment variables → Add variable

### GitHub Pages
Use GitHub Secrets in Actions workflow

---

## Performance Optimization

Your site is already optimized with:

- ✅ Minified code (manual minification recommended for production)
- ✅ Efficient CSS and JS
- ✅ Lazy loading support
- ✅ Optimized animations
- ✅ Proper caching headers

### Additional Optimizations

1. **Minify HTML/CSS/JS**
   ```bash
   npm install -g html-minifier clean-css-cli uglify-js

   html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
   cleancss -o styles.min.css styles.css
   uglifyjs script.js -o script.min.js
   ```

2. **Add a CDN for fonts** (if you add custom fonts)

3. **Compress images** (when you add images)
   - Use WebP format
   - Compress with tools like TinyPNG

---

## Monitoring and Analytics

### Add Google Analytics

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Alternatives

- **Plausible Analytics** - Privacy-friendly
- **Cloudflare Analytics** - Free with Cloudflare Pages
- **Vercel Analytics** - Built-in to Vercel

---

## Troubleshooting

### Site not loading

1. Check your deployment logs
2. Verify all files are committed and pushed
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for errors

### Animations not working

1. Verify JavaScript is enabled
2. Check browser console for errors
3. Test in different browsers
4. Verify all files are loading (Network tab)

### 404 Errors

- Ensure `index.html` is in the root directory
- Check deployment configuration
- Verify publish directory is set to `.` or root

### Slow performance

1. Check if you're using a CDN
2. Verify caching headers are set
3. Minify your code
4. Check network throttling in DevTools

### HTTPS not working

- Wait 5-10 minutes after deployment
- All platforms auto-provision SSL
- Check domain DNS propagation

---

## Updating Your Site

All platforms support continuous deployment:

1. Make changes locally
2. Commit and push to GitHub
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Site auto-deploys in ~30 seconds

---

## Comparison Table

| Feature | Vercel | Netlify | GitHub Pages | Cloudflare |
|---------|--------|---------|--------------|------------|
| Free tier | ✅ | ✅ | ✅ | ✅ |
| Custom domain | ✅ | ✅ | ✅ | ✅ |
| Auto SSL | ✅ | ✅ | ✅ | ✅ |
| CDN | ✅ | ✅ | ✅ | ✅ (Best) |
| Build time | ~30s | ~1m | ~2m | ~1m |
| Bandwidth | 100GB | 100GB | Soft 100GB | Unlimited |
| Deploy previews | ✅ | ✅ | ❌ | ✅ |
| Analytics | Paid | ✅ | ❌ | ✅ |

---

## Recommended Platform

**For beginners:** Vercel or Netlify (easiest setup)

**For GitHub users:** GitHub Pages (all-in-one)

**For best performance:** Cloudflare Pages (fastest CDN)

**For features:** Netlify (most features on free tier)

---

## Next Steps

1. Choose your preferred platform
2. Follow the deployment steps above
3. Share your live URL!
4. Optional: Set up a custom domain
5. Optional: Add analytics

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Cloudflare Pages:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

---

## License

This project is open source and available under the MIT License.

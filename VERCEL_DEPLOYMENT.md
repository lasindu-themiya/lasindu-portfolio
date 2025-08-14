# 🚀 Vercel Deployment Guide for Your Portfolio

## Prerequisites ✅
- [x] Vercel account (create at [vercel.com](https://vercel.com))
- [x] GitHub account
- [x] Project files ready

## 📁 Project Structure (Ready!)
```
portfolio/
├── api/
│   └── contact.js          # ✅ Serverless function for email
├── src/                    # ✅ React components
├── public/                 # ✅ Static assets
├── vercel.json            # ✅ Vercel configuration
└── package.json           # ✅ Dependencies & build scripts
```

## 🌐 Manual Deployment Steps

### Option 1: GitHub + Vercel (Recommended)

1. **Create GitHub Repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name: `portfolio` or `lasindu-portfolio`
   - Make it public or private
   - Don't initialize with README (you already have files)

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React app
   - Click "Deploy"

### Option 2: Direct Upload to Vercel

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## ⚙️ Environment Variables Setup

After deployment, add these environment variables in Vercel dashboard:

1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add each variable:

| Variable | Value |
|----------|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `lasinduthemiya96@gmail.com` |
| `SMTP_PASS` | `fqva baev gjff bowk` |
| `ADMIN_EMAIL` | `lasinduthemiya96@gmail.com` |

## 🎯 Custom Domain (Optional)

1. In Vercel dashboard → "Settings" → "Domains"
2. Add your custom domain (e.g., `lasindu-themiya.dev`)
3. Update DNS settings as instructed

## 🔧 Post-Deployment

- Your portfolio will be live at: `https://your-project-name.vercel.app`
- Contact form will work with email functionality
- All routes will work properly
- SSL certificate automatically provided

## 🛠️ Troubleshooting

### Email Not Working?
- Check environment variables in Vercel dashboard
- Verify Gmail app password is correct
- Check Vercel function logs

### Build Errors?
- Check Vercel build logs
- Ensure all dependencies are in package.json
- Verify TypeScript compiles locally

### Contact Form Errors?
- Check browser console for API errors
- Verify API endpoint is accessible
- Check CORS settings

## 📞 Support

If you encounter issues:
1. Check Vercel dashboard logs
2. Review environment variables
3. Test locally with `npm run build`

## 🎉 Your Portfolio Features

✅ **Responsive Design**
✅ **Contact Form with Email**
✅ **Modern React + TypeScript**
✅ **Professional Animations**
✅ **SEO Optimized**
✅ **Fast Loading**
✅ **SSL Secured**

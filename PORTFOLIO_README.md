# Professional Portfolio

A modern, responsive portfolio website built with React and TypeScript featuring smooth animations, professional design, and comprehensive sections showcasing skills, experience, and projects.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Filterable project gallery with live demos and source code links
- **Skills Visualization**: Organized skill categories with interactive elements
- **Timeline Experience**: Professional timeline showing work experience
- **Social Integration**: Links to LinkedIn, GitHub, and other social profiles

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/data/portfolioData.ts` to update:

- **Personal Info**: Name, title, bio, profile image
- **Contact Information**: Email, phone, location, social links
- **Experience**: Work history, positions, achievements
- **Projects**: Portfolio projects with descriptions and links
- **Skills**: Technical and soft skills organized by categories
- **Education & Certifications**: Academic background and professional certifications

### 2. Styling and Theme

Modify `src/styles/GlobalStyles.ts` to customize:

- **Colors**: Primary, secondary, background colors
- **Typography**: Font families, sizes, weights
- **Spacing**: Margins, paddings, gaps
- **Breakpoints**: Responsive design breakpoints
- **Shadows**: Box shadow styles

### 3. Images

Add your images to the `public/images/` directory:

- `profile.jpg` - Your profile photo
- `project-name.jpg` - Project screenshots
- Any other images referenced in your data

### 4. Documents

Add your resume/CV to `public/documents/`:

- `Your_Name_Resume.pdf` - Your resume file
- Update the download link in `src/components/Hero.tsx`

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large screens: 1200px and above

## 🎯 Sections Overview

1. **Hero/Landing**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal story, statistics, education, and certifications
3. **Experience**: Professional work history in timeline format
4. **Projects**: Showcased projects with filtering and live demos
5. **Skills**: Technical and soft skills organized by categories
6. **Contact**: Contact form and social media links
7. **Footer**: Additional links and contact information

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Your site is live!

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

---

**Happy coding!** 🚀

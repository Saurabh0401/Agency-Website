# Desi Automations - Marketing Website

A modern, single-page marketing website for **Desi Automations**, an AI automation agency for recruiting & staffing. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
├── public/
│   ├── favicon.svg              # Favicon
│   └── ...
├── src/
│   ├── components/              # React components
│   │   ├── Header.jsx          # Navigation header with sticky behavior
│   │   ├── Hero.jsx            # Hero section with CTAs
│   │   ├── Services.jsx        # 8 service cards with features
│   │   ├── Benefits.jsx        # Animated metrics and benefits
│   │   ├── Demo.jsx            # Interactive demo walkthrough
│   │   ├── Contact.jsx         # Contact form (Netlify-ready)
│   │   └── Footer.jsx          # Footer with links and social
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template with SEO metadata
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎨 Design Features

- **Dark Theme**: Professional dark design with teal/cyan accents
- **Mobile-First**: Responsive design that works on all devices
- **Animations**: Subtle Framer Motion animations with reduced-motion support
- **Accessibility**: ARIA labels, focus styles, semantic HTML
- **Performance**: Optimized loading with system fonts and minimal assets

## 📝 Content Management

### Updating Company Information

**Logo & Branding:**
- Update logo in `src/components/Header.jsx` and `src/components/Footer.jsx`
- Change company name in multiple files (search for "Desi Automations")
- Update favicon in `public/favicon.svg`

**Contact Information:**
- Email: Update in `src/components/Contact.jsx` and `src/components/Footer.jsx`
- Social links: Update in `src/components/Footer.jsx`
- Address: Update in `src/components/Footer.jsx`

**SEO Metadata:**
- Update `index.html` meta tags, JSON-LD schema
- Change company description and keywords
- Update Open Graph images and URLs

### Updating Services Content

Edit the `services` array in `src/components/Services.jsx`:
```javascript
{
  title: "Your Service Name",
  summary: "Brief description of the service",
  benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
  icon: (/* Your SVG icon */)
}
```

### Updating Metrics

Edit the `metrics` array in `src/components/Benefits.jsx`:
```javascript
{
  value: 70,        // The number to count up to
  suffix: '%',      // Suffix (%, x, +, etc.)
  label: 'Metric name',
  description: 'Brief description'
}
```

## 📧 Contact Form Setup

The contact form is configured for **Netlify Forms** by default:

### For Netlify Deployment:
1. Deploy to Netlify
2. The form will work automatically (uses `data-netlify="true"`)
3. View submissions in Netlify dashboard under "Forms"

### For Formspree (Alternative):
1. Sign up at [Formspree.io](https://formspree.io)
2. Get your form endpoint URL
3. Update the form action in `src/components/Contact.jsx`:
   ```javascript
   <form
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
     // Remove data-netlify="true"
   >
   ```

### For Custom Backend:
1. Remove `data-netlify="true"` from the form
2. Update the `handleSubmit` function in `src/components/Contact.jsx`
3. Replace the simulated submission with your API call

## 🔧 Environment Variables

Create a `.env` file for environment-specific configuration:

```env
# API Keys (never commit actual keys)
VITE_ANALYTICS_ID=your_analytics_id
VITE_FORMSPREE_ID=your_formspree_id

# Feature Flags
VITE_ENABLE_CHAT=false
VITE_ENABLE_TRACKING=true

# Branding
VITE_COMPANY_NAME="Desi Automations"
VITE_COMPANY_EMAIL="hello@desiautomations.com"
```

Access in components:
```javascript
const companyEmail = import.meta.env.VITE_COMPANY_EMAIL
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Vercel
1. Connect repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your server to serve `index.html` for all routes

## 🎯 SEO Optimization

**Current SEO Features:**
- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph and Twitter Card metadata
- JSON-LD structured data
- Optimized heading hierarchy (H1, H2, etc.)
- Alt text for images
- Canonical URLs

**SEO Keywords Included:**
- recruiting automation
- AI for recruiting
- candidate reactivation
- interview summarizer
- ATS automation
- talent sourcing
- candidate engagement
- resume formatter
- onboarding automation
- recruitment AI agency

## 🔍 Performance Optimization

**Current Optimizations:**
- System font stack (no external font loading)
- Optimized Tailwind CSS (purged unused styles)
- SVG icons (no icon fonts)
- Minimal JavaScript bundle
- Lazy loading for images
- Preconnect hints for external resources

**Performance Monitoring:**
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Test on slow networks and devices

## 🛠️ Development Tips

**Adding New Sections:**
1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`
4. Update anchor scrolling functionality

**Customizing Animations:**
- Edit Framer Motion variants in components
- Respect `prefers-reduced-motion` (already implemented)
- Test animations on low-powered devices

**Tailwind Customization:**
- Edit `tailwind.config.js` for custom colors, fonts, etc.
- Use the `theme.extend` object to preserve defaults
- Custom CSS in `src/index.css` using `@layer` directives

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Common Issues:**

1. **Tailwind styles not working:**
   - Check `tailwind.config.js` content paths
   - Ensure PostCSS is configured correctly
   - Restart development server

2. **Animations not smooth:**
   - Check for `prefers-reduced-motion` settings
   - Ensure GPU acceleration with `transform` properties
   - Reduce animation complexity on mobile

3. **Form submissions not working:**
   - Verify Netlify forms configuration
   - Check network tab for form submission errors
   - Ensure form fields have proper `name` attributes

4. **Build errors:**
   - Clear `node_modules` and reinstall dependencies
   - Check for missing imports or typos
   - Verify environment variables are set correctly

## 📄 License

This project is proprietary to Desi Automations. All rights reserved.

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly on multiple devices
4. Submit a pull request with detailed description

---

**Need Help?** Contact the development team at [dev@desiautomations.example](mailto:dev@desiautomations.example)

# Website Customization Guide

This guide will help you personalize your website and make it truly yours.

## 🎨 Visual Customization

### 1. Color Scheme

Edit `assets/css/style.scss` and modify the color variables:

```css
:root {
  --primary-color: #2c5aa0;      /* Main brand color */
  --secondary-color: #1a3a6b;    /* Darker accent */
  --accent-color: #4a90e2;       /* Highlight color */
  --text-color: #333;            /* Main text */
  --light-text: #666;            /* Secondary text */
  --bg-color: #ffffff;           /* Background */
  --card-bg: #f8f9fa;           /* Card backgrounds */
  --border-color: #e1e4e8;      /* Borders */
  --success-color: #28a745;      /* Success/checkmarks */
}
```

**Color Palette Suggestions:**
- **Professional Blue**: `#2c5aa0`, `#1a3a6b`, `#4a90e2` (current)
- **Modern Purple**: `#6C63FF`, `#4B42C0`, `#8B85FF`
- **Tech Green**: `#10B981`, `#059669`, `#34D399`
- **Corporate Gray**: `#374151`, `#1F2937`, `#6B7280`

### 2. Fonts

To change fonts, add to `assets/css/style.scss`:

```css
/* Add custom Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### 3. Logo/Favicon

1. Create or obtain your logo/favicon
2. Save in `assets/images/`
3. Add to `_config.yml`:

```yaml
logo: "/assets/images/logo.png"
favicon: "/assets/images/favicon.ico"
```

## 📝 Content Customization

### Personal Information

#### _config.yml
Update these key fields:

```yaml
title: "Your Name"
tagline: "Your Professional Title"
description: "Your professional description"

author:
  name: "Your Name"
  email: "your.email@example.com"
  linkedin: "your-linkedin-username"
  github: "your-github-username"
  location: "Your Location"
  bio: "Your bio"

url: "https://yourusername.github.io"
```

#### About Page (about.md)
Replace placeholder content with:
- Your actual education details
- Your real work experience
- Your authentic story
- Your specific achievements
- Your genuine interests

#### Experience Page (experience.md)
Update with:
- Your actual job titles and dates
- Your real companies (or keep anonymous)
- Your specific achievements
- Your actual education
- Your real certifications

#### Skills Page (skills.md)
Customize to include:
- Your actual technical skills
- Your programming languages
- Your domain expertise
- Your tools and technologies

### Projects

Edit `projects.md` to showcase your work:

```markdown
<div class="card">

### Your Project Title

**Challenge**: Describe the problem you solved

**Approach**: How you approached it

**Technologies Used**:
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">Your Tech</span>
</div>

**Results & Impact**:
- Your specific results
- Quantifiable outcomes

</div>
```

## 📱 Social Media Integration

### LinkedIn

Update throughout your site:
```markdown
[LinkedIn](https://www.linkedin.com/in/your-username/)
```

### GitHub

Update your GitHub username:
```markdown
[GitHub](https://github.com/your-username)
```

### Twitter/X (Optional)

Add to `_config.yml`:
```yaml
twitter:
  username: your_username
  card: summary
```

### Add Social Icons

Edit `contact.md` to add more platforms:

```markdown
<div class="contact-card">
  <div class="icon">🐦</div>
  <h3>Twitter</h3>
  <p>Follow for updates</p>
  <a href="https://twitter.com/your_username">@your_username</a>
</div>
```

## 📊 Analytics & SEO

### Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to `_config.yml`:

```yaml
google_analytics: G-XXXXXXXXXX
```

### SEO Optimization

Update `_config.yml`:

```yaml
# SEO tags
title: "Your Name - Data Scientist"
description: "Your compelling description for search engines"
author: "Your Name"

# Social
social:
  name: Your Name
  links:
    - https://www.linkedin.com/in/your-profile
    - https://github.com/your-username
    - https://twitter.com/your-username
```

### Meta Tags

Jekyll SEO Tag plugin automatically generates:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags

## 🎯 Feature Additions

### Add Resume/CV Download

1. Create `assets/files/` directory
2. Add your resume PDF
3. Add button to contact or experience page:

```markdown
<a href="/assets/files/resume.pdf" download class="btn">Download Resume</a>
```

### Add Newsletter Subscription

Integrate services like:
- Mailchimp
- ConvertKit
- Substack

Add form to blog.md:

```html
<form action="your-service-endpoint" method="post">
  <input type="email" placeholder="Your email" required>
  <button type="submit">Subscribe</button>
</form>
```

### Add Comments to Blog Posts

Use services like:
- Disqus
- Utterances (GitHub-based)
- Giscus

Add to `_layouts/post.html`:

```html
<!-- Utterances Comments -->
<script src="https://utteranc.es/client.js"
        repo="your-username/your-repo"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

### Add Search Functionality

Add Simple Jekyll Search:

1. Add to `_config.yml`:
```yaml
plugins:
  - jekyll-search
```

2. Create search page

## 🌐 Advanced Customization

### Custom Domain

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Create `CNAME` file in root:
```
yourdomain.com
```
3. Update DNS settings:
```
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Host: www
Value: your-username.github.io
```

### Add Portfolio Images

1. Create `assets/images/projects/`
2. Add project screenshots
3. Reference in projects:

```markdown
![Project Screenshot](/assets/images/projects/project1.png)
```

### Add Testimonials Section

Create `testimonials.md`:

```markdown
## 💬 Testimonials

<div class="card">
  <blockquote>
    "Working with Anuj was fantastic..."
  </blockquote>
  <p><strong>- Client Name</strong>, Position, Company</p>
</div>
```

### Add Publications Section

Create separate `publications.md` or add to experience:

```markdown
## 📚 Publications

1. **Paper Title**  
   Authors, Journal Name, Year  
   [DOI Link](https://doi.org/...)
```

## 🔧 Performance Optimization

### Optimize Images

1. Use WebP format for better compression
2. Resize images to appropriate dimensions
3. Use lazy loading:

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### Minify CSS

Jekyll automatically minifies in production.

### Enable Caching

Add `_headers` file for Netlify:
```
/*
  Cache-Control: public, max-age=31536000
```

## 🎨 Layout Customization

### Create Custom Layouts

Add new layout in `_layouts/`:

```html
---
layout: default
---
<div class="custom-layout">
  {{ content }}
</div>
```

### Modify Hero Section

Edit `assets/css/style.scss`:

```css
.hero {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
  padding: 100px 20px; /* Adjust size */
}
```

### Change Card Styles

```css
.card {
  border-radius: 15px; /* More rounded corners */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); /* Stronger shadow */
}
```

## 📱 Mobile Optimization

Test on different devices and adjust breakpoints in `style.scss`:

```css
@media (max-width: 768px) {
  /* Your mobile-specific styles */
}

@media (max-width: 480px) {
  /* Your small phone styles */
}
```

## 🔐 Privacy & Legal

### Add Privacy Policy

Create `privacy.md`:

```markdown
---
layout: page
title: "Privacy Policy"
---

## What information do we collect?
...
```

### Add Terms of Use

Create `terms.md` with your terms.

### Cookie Consent

If using analytics, add cookie consent banner.

## 🚀 Deployment Options

### GitHub Pages (Current)
- Free
- Automatic builds
- Custom domain support

### Netlify
- Advanced features
- Better build times
- Form handling

### Vercel
- Excellent performance
- Edge functions
- Analytics

## 📊 Monitoring

### Set Up Alerts

- Google Search Console for SEO
- Uptime Robot for availability
- Analytics for traffic

### Track Performance

- Google PageSpeed Insights
- Lighthouse scores
- WebPageTest

## 💡 Pro Tips

1. **Keep Content Fresh**: Update blog monthly
2. **Optimize for Mobile**: 60%+ visitors are mobile
3. **Use Clear CTAs**: Make it easy to contact you
4. **Show Personality**: Be authentic
5. **Quantify Achievements**: Use numbers and metrics
6. **Keep Loading Fast**: Optimize images and code
7. **Update Regularly**: Show you're active
8. **Cross-link Content**: Guide visitors through your site

## 🎯 Checklist Before Launch

- [ ] Update all personal information
- [ ] Replace placeholder content
- [ ] Add your real projects
- [ ] Update contact information
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Set up analytics
- [ ] Add favicon
- [ ] Test on multiple browsers
- [ ] Proofread all content
- [ ] Set up custom domain (optional)
- [ ] Submit to search engines

---

## 🆘 Need Help?

Refer to:
- `README.md` for technical setup
- `GETTING_STARTED.md` for quick start
- [Jekyll Documentation](https://jekyllrb.com/)
- [GitHub Pages Guide](https://pages.github.com/)

---

**Remember**: Your website is a reflection of you. Make it authentic, professional, and uniquely yours!


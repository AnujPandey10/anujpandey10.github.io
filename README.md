# Anuj Pandey - Professional Website

A modern, professional Jekyll-based website showcasing data science and AI work in pharmaceutical manufacturing.

## 🌟 Features

- **Modern Design**: Custom CSS with professional styling and smooth animations
- **Comprehensive Sections**:
  - Home page with hero section
  - About page with detailed background
  - Skills & expertise showcase
  - Professional experience timeline
  - Project portfolio with detailed case studies
  - Blog with technical articles
  - Contact page with multiple connection methods

- **Responsive Layout**: Works beautifully on desktop, tablet, and mobile
- **SEO Optimized**: Built-in SEO tags and sitemap
- **Blog Ready**: Jekyll blog with custom post layout
- **Professional Theme**: Clean, modern design optimized for technical professionals

## 🚀 Quick Start

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make

### Local Development

1. **Install Dependencies**
```bash
bundle install
```

2. **Run Local Server**
```bash
bundle exec jekyll serve
```

3. **View Site**
Open your browser to `http://localhost:4000`

### Making Changes

- **Content Pages**: Edit `.md` files in the root directory
- **Blog Posts**: Add new posts to `_posts/` directory
- **Styling**: Modify `assets/css/style.scss`
- **Configuration**: Update `_config.yml`

## 📁 Site Structure

```
anujpandey10.github.io/
├── _config.yml           # Site configuration
├── _layouts/             # Custom layouts
│   └── post.html        # Blog post layout
├── _posts/               # Blog posts
│   ├── 2025-01-01-why-doe-still-matters.md
│   └── 2025-01-05-ai-in-bioprocessing.md
├── assets/
│   └── css/
│       └── style.scss   # Custom CSS styling
├── index.md             # Homepage
├── about.md             # About page
├── skills.md            # Skills page
├── experience.md        # Experience page
├── projects.md          # Projects page
├── blog.md              # Blog landing page
├── contact.md           # Contact page
└── Gemfile              # Ruby dependencies
```

## 📝 Adding New Content

### Adding a Blog Post

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [Category1, Category2]
author: Anuj Pandey
---
```

3. Write your content in Markdown
4. The post will automatically appear on the blog page

### Adding a Project

Edit `projects.md` and add a new project card following the existing format.

### Updating Skills

Edit `skills.md` to add new skills or categories.

## 🎨 Customization

### Colors

Edit the CSS variables in `assets/css/style.scss`:

```css
:root {
  --primary-color: #2c5aa0;
  --secondary-color: #1a3a6b;
  --accent-color: #4a90e2;
  /* ... more variables */
}
```

### Navigation

Update the `header_pages` list in `_config.yml`:

```yaml
header_pages:
  - index.md
  - about.md
  - experience.md
  # ... add more pages
```

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. **Enable GitHub Pages**
- Go to repository Settings
- Navigate to Pages section
- Select main branch as source
- Save

3. **Wait for Build**
GitHub will automatically build and deploy your site.

4. **Access Your Site**
Visit `https://anujpandey10.github.io`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain provider
3. Update `url` in `_config.yml`

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics tracking ID
2. Uncomment and update in `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXXX-X
```

## 🔧 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
bundle exec jekyll serve --port 4001
```

**Bundle Install Fails**
```bash
gem install bundler
bundle update
```

**Changes Not Showing**
- Clear browser cache
- Stop and restart Jekyll server
- Check for syntax errors in modified files

**Build Errors**
- Check YAML front matter syntax
- Ensure all required plugins are installed
- Verify file names follow conventions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- No user authentication required
- Static site (no database)
- All content is public
- Contact information can be updated in `contact.md` and `_config.yml`

## 📄 License

This is a personal website. Feel free to use the structure and design as inspiration for your own site.

## 🤝 Contributing

This is a personal website, but suggestions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Share feedback

## 📞 Contact

- **LinkedIn**: [linkedin.com/in/anuj-pandey9](https://www.linkedin.com/in/anuj-pandey9/)
- **GitHub**: [github.com/anuj-pandey](https://github.com/anuj-pandey)
- **Email**: anujpandey@email.com

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Theme inspired by modern professional portfolio sites

---

**Last Updated**: December 2025

For questions or support, please [open an issue](../../issues) or contact me directly.


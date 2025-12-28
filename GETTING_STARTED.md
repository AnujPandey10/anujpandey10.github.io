# Getting Started with Your Professional Website

This guide will help you get your website up and running quickly.

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Ruby and Bundler

**On macOS:**
```bash
# Ruby is pre-installed on macOS
# Just install Bundler
gem install bundler
```

**On Ubuntu/Debian:**
```bash
sudo apt-get install ruby-full build-essential
gem install bundler
```

**On Windows:**
- Download and install from [RubyInstaller](https://rubyinstaller.org/)

### Step 2: Install Dependencies

Navigate to your website directory and run:
```bash
cd ~/github_site/anujpandey10.github.io
bundle install
```

This will install Jekyll and all required plugins.

### Step 3: Start the Local Server

```bash
bundle exec jekyll serve
```

You should see output like:
```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

### Step 4: View Your Site

Open your browser and go to: `http://localhost:4000`

**🎉 That's it! Your site is now running locally.**

---

## ✏️ Making Your First Edits

### Update Your Personal Information

1. **Edit Contact Details** - `contact.md`
   - Update email address
   - Update GitHub username
   - Update LinkedIn URL

2. **Edit Site Configuration** - `_config.yml`
   - Update author information
   - Update social media links
   - Update description

3. **Customize About Page** - `about.md`
   - Add your specific experience
   - Update education details
   - Personalize your story

### Add a New Blog Post

1. Create a new file in `_posts/` directory:
   ```bash
   touch _posts/2025-12-28-my-first-post.md
   ```

2. Add front matter and content:
   ```markdown
   ---
   layout: post
   title: "My First Blog Post"
   date: 2025-12-28
   categories: [Data Science, AI]
   author: Anuj Pandey
   ---

   Your content here...
   ```

3. Save and refresh your browser - the new post will appear!

---

## 🚢 Deploying to GitHub Pages

### Prerequisites
- A GitHub account
- Git installed on your computer

### Steps

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it: `[your-username].github.io`
   - Example: `anujpandey10.github.io`

2. **Initialize Git (if not already done)**
   ```bash
   cd ~/github_site/anujpandey10.github.io
   git init
   git add .
   git commit -m "Initial commit - Professional website"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/[your-username]/[your-username].github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

5. **Wait for Deployment**
   - GitHub will build your site (takes 1-2 minutes)
   - You'll receive an email when it's ready
   - Visit: `https://[your-username].github.io`

---

## 🎨 Customization Tips

### Change Colors

Edit `assets/css/style.scss`:
```css
:root {
  --primary-color: #2c5aa0;    /* Change to your brand color */
  --secondary-color: #1a3a6b;   /* Darker shade */
  --accent-color: #4a90e2;      /* Highlight color */
}
```

### Add Your Photo

1. Create `assets/images/` directory
2. Add your photo: `assets/images/profile.jpg`
3. Reference in your pages:
   ```markdown
   ![Your Name](assets/images/profile.jpg)
   ```

### Customize Navigation

Edit `_data/navigation.yml` to change menu items.

### Add Google Analytics

1. Get your Google Analytics tracking ID
2. Edit `_config.yml`:
   ```yaml
   google_analytics: UA-XXXXXXXXX-X
   ```

---

## 🔧 Common Commands

```bash
# Start local server
bundle exec jekyll serve

# Build site (creates _site/ folder)
bundle exec jekyll build

# Start server on different port
bundle exec jekyll serve --port 4001

# Start with draft posts visible
bundle exec jekyll serve --drafts

# Clean build artifacts
bundle exec jekyll clean
```

---

## 📝 Content Organization

```
Your Website/
├── Pages (root .md files)
│   ├── index.md         → Homepage
│   ├── about.md         → About page
│   ├── skills.md        → Skills page
│   ├── experience.md    → Experience page
│   ├── projects.md      → Projects page
│   ├── blog.md          → Blog landing
│   └── contact.md       → Contact page
│
├── Blog Posts (_posts/)
│   └── YYYY-MM-DD-title.md
│
├── Styling (assets/css/)
│   └── style.scss       → Custom CSS
│
└── Configuration
    └── _config.yml      → Site settings
```

---

## 🆘 Troubleshooting

### Site not updating?
1. Stop the server (Ctrl+C)
2. Run `bundle exec jekyll clean`
3. Start server again

### Port already in use?
```bash
bundle exec jekyll serve --port 4001
```

### Bundle install fails?
```bash
gem install bundler
bundle update
```

### Changes not showing on GitHub Pages?
- Wait 2-3 minutes after pushing
- Check "Actions" tab for build status
- Clear browser cache

---

## 📚 Learn More

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Guide](https://shopify.github.io/liquid/)

---

## 🎯 Next Steps

1. ✅ Get site running locally
2. ✅ Update personal information
3. ✅ Customize colors and styling
4. ✅ Add your own projects
5. ✅ Write your first blog post
6. ✅ Deploy to GitHub Pages
7. ✅ Share your new site!

---

**Need Help?** Check README.md or [contact me](/contact/) with questions!


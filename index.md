---
layout: page
title: Home
---

<div class="hero">
  <h1>Anuj Pandey</h1>
  <p class="tagline">Data Scientist at Wockhardt Ltd. | IIT Kharagpur MTech</p>
  <p class="description">
    Applying AI, machine learning, and computational biology to accelerate innovation in biotechnology and pharmaceutical research.<br>
    Specializing in biosimilar development, LLM-powered solutions, and process optimization.
  </p>
  <div class="hero-buttons">
    <a href="/about/">Learn More</a>
    <a href="/projects/" class="secondary">View Projects</a>
    <a href="/contact/" class="secondary">Get in Touch</a>
  </div>
</div>


## 📝 Latest Insights

<div class="post-list">
  {% for post in site.posts limit:3 %}
  <div class="card">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
  {% endfor %}
</div>

<div class="text-center mt-2">
  <a href="/blog/" style="font-size: 1.1em; font-weight: 600;">View All Articles →</a>
</div>

---

## 🚀 Featured Projects

<div class="project-grid">

<div class="project-card compact">
  <h3>Insulin Manufacturing Optimization</h3>
  <p>Improved yield and consistency in insulin production through DOE and statistical modeling.</p>
  <div class="project-link"><a href="/projects/#insulin-manufacturing-optimization">Read Case Study →</a></div>
</div>

<div class="project-card compact">
  <h3>Local LLM for Manufacturing</h3>
  <p>RAG-based querying system for SOPs and process documents using LLaMA.</p>
  <div class="project-link"><a href="/projects/#ai-powered-manufacturing-knowledge-system">Read Case Study →</a></div>
</div>

<div class="project-card compact">
  <h3>PK/PD Prediction Model</h3>
  <p>Predicting study outcomes using particle size data and GLM analysis.</p>
  <div class="project-link"><a href="/projects/#predictive-modeling-for-pkpd-studies">Read Case Study →</a></div>
</div>

</div>

<div class="text-center mt-2">
  <a href="/projects/" style="font-size: 1.1em; font-weight: 600;">Explore All Projects →</a>
</div>


## 📫 Let's Connect

<div class="text-center section">

I'm always interested in discussing pharmaceutical data science challenges, exploring collaboration opportunities, or sharing knowledge with the community.

<div class="hero-buttons">
  <a href="/contact/">Get in Touch</a>
  <a href="https://www.linkedin.com/in/anuj-pandey9/" class="secondary" target="_blank">LinkedIn</a>
  <a href="https://github.com/anuj-pandey" class="secondary" target="_blank">GitHub</a>
</div>

</div>

<div class="text-center mt-2">
  <p><em>"Turning data into insights, insights into action, and action into better medicines."</em></p>
</div>

---
layout: page
title: "Projects Portfolio"
permalink: /projects/
---

<div class="section text-center">
  <h2>Transforming Pharmaceutical Manufacturing Through Data Science</h2>
  <p>A selection of projects demonstrating the application of advanced analytics, machine learning, and AI to real-world pharmaceutical manufacturing challenges.</p>
</div>

---

## 🔬 Insulin Manufacturing Optimization

<div class="card">

<h3>Challenge</h3>
<p>Insulin production processes exhibited significant batch-to-batch variability, impacting yield, quality, and manufacturing efficiency. The complexity of biological systems and numerous process parameters made optimization challenging using traditional trial-and-error approaches.</p>

<h3>Approach</h3>
<ul>
<li><strong>Statistical Analysis</strong>: Conducted comprehensive analysis of 100+ historical manufacturing batches</li>
<li><strong>DOE Implementation</strong>: Designed and executed factorial and response surface experiments</li>
<li><strong>Multivariate Modeling</strong>: Applied PLS regression and multivariate analysis to identify critical parameters</li>
<li><strong>Process Optimization</strong>: Developed predictive models to optimize operating conditions</li>
<li><strong>Validation</strong>: Validated models through prospective manufacturing runs</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">JMP Pro</span>
  <span class="badge">Minitab</span>
  <span class="badge">Pandas</span>
  <span class="badge">Scikit-learn</span>
  <span class="badge">DOE</span>
  <span class="badge">PLS Regression</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>15% improvement</strong> in average insulin yield</li>
<li>✅ <strong>40% reduction</strong> in batch-to-batch variability</li>
<li>✅ <strong>Identified 5 critical process parameters</strong> driving quality</li>
<li>✅ <strong>Established robust operating space</strong> meeting regulatory requirements</li>
<li>✅ <strong>Annual savings</strong> of $2M+ through improved yield</li>
</ul>

<h3>Key Learnings</h3>
<p>This project reinforced that <strong>process understanding is paramount</strong>. By combining domain knowledge with statistical rigor, we achieved sustainable improvements that pure data-mining approaches would have missed.</p>

</div>

---

## 🤖 AI-Powered Manufacturing Knowledge System

<div class="card">

<h3>Challenge</h3>
<p>Manufacturing teams struggled to quickly find relevant information across hundreds of SOPs, batch records, and technical documents. Critical knowledge was siloed, leading to:</p>
<ul>
<li>Extended decision-making times during manufacturing issues</li>
<li>Inconsistent application of best practices</li>
<li>Training challenges for new team members</li>
<li>Repeated questions to subject matter experts</li>
</ul>

<h3>Solution Architecture</h3>
<p>Built a Retrieval-Augmented Generation (RAG) system combining:</p>
<ul>
<li><strong>Document Processing</strong>: Automated ingestion and parsing of SOPs, batch records, and technical documents</li>
<li><strong>Vector Database</strong>: Embedded 500+ documents using state-of-the-art models</li>
<li><strong>Local LLM</strong>: Deployed LLaMA-based model for secure, on-premise inference</li>
<li><strong>Query Interface</strong>: User-friendly web interface with citation tracking</li>
<li><strong>Continuous Learning</strong>: Feedback mechanism to improve relevance</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">LLaMA 2</span>
  <span class="badge">Python</span>
  <span class="badge">LangChain</span>
  <span class="badge">ChromaDB</span>
  <span class="badge">FastAPI</span>
  <span class="badge">React</span>
  <span class="badge">Sentence Transformers</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>Reduced information retrieval time</strong> from hours to seconds</li>
<li>✅ <strong>90% accuracy</strong> in answering manufacturing questions</li>
<li>✅ <strong>500+ daily queries</strong> from manufacturing team</li>
<li>✅ <strong>Accelerated training</strong> for 20+ new employees</li>
<li>✅ <strong>Full traceability</strong> with source document citations</li>
</ul>

<h3>Technical Highlights</h3>
<ul>
<li>Implemented <strong>semantic chunking</strong> for optimal context windows</li>
<li>Developed <strong>custom relevance scoring</strong> for pharmaceutical content</li>
<li>Ensured <strong>GxP compliance</strong> with complete audit trails</li>
<li>Achieved <strong>sub-2-second response times</strong> on standard hardware</li>
</ul>

<h3>Validation & Compliance</h3>
<ul>
<li>Comprehensive validation package for GxP compliance</li>
<li>User acceptance testing with 50+ manufacturing personnel</li>
<li>Security assessment for data protection</li>
<li>Regular accuracy monitoring and model updates</li>
</ul>

</div>

---

## 📊 Predictive Modeling for PK/PD Studies

<div class="card">

<h3>Challenge</h3>
<p>Late-stage failures in PK/PD studies were costly and time-consuming. Early prediction of study outcomes based on formulation characteristics could save millions in development costs and accelerate time-to-market.</p>

<h3>Approach</h3>
<ul>
<li><strong>Data Integration</strong>: Combined particle size distribution data, formulation parameters, and historical study results</li>
<li><strong>Feature Engineering</strong>: Created meaningful features capturing distribution characteristics</li>
<li><strong>Model Development</strong>: Evaluated multiple algorithms (GLM, Random Forest, XGBoost)</li>
<li><strong>Interpretability Analysis</strong>: Applied SHAP values to understand key drivers</li>
<li><strong>Cross-Validation</strong>: Rigorous validation using temporal splits and bootstrapping</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">Scikit-learn</span>
  <span class="badge">XGBoost</span>
  <span class="badge">SHAP</span>
  <span class="badge">Pandas</span>
  <span class="badge">SciPy</span>
  <span class="badge">Plotly</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>85% accuracy</strong> in predicting PK/PD study outcomes</li>
<li>✅ <strong>Prevented 3 late-stage failures</strong> in first year</li>
<li>✅ <strong>Saved $5M+</strong> in avoided study costs</li>
<li>✅ <strong>Reduced development timeline</strong> by 6 months for 2 products</li>
<li>✅ <strong>Identified optimal particle size ranges</strong> for different formulations</li>
</ul>

<h3>Model Insights</h3>
<p>SHAP analysis revealed:</p>
<ul>
<li>D50 and D90 particle size parameters as primary drivers</li>
<li>Non-linear relationship between size distribution and bioavailability</li>
<li>Critical interaction between particle size and formulation excipients</li>
<li>Threshold effects requiring process control strategies</li>
</ul>

</div>

---

## 🔍 Real-Time Process Monitoring System

<div class="card">

<h3>Challenge</h3>
<p>Traditional end-of-batch quality testing meant defects were discovered too late, resulting in batch failures and resource waste. The goal was to develop an early warning system for process deviations.</p>

<h3>Solution</h3>
<ul>
<li><strong>Sensor Integration</strong>: Connected 50+ process sensors (temperature, pH, pressure, flow rates)</li>
<li><strong>Feature Engineering</strong>: Created derived features capturing process dynamics</li>
<li><strong>Anomaly Detection</strong>: Implemented multivariate statistical process control</li>
<li><strong>ML Models</strong>: Developed predictive models for quality attributes</li>
<li><strong>Dashboard</strong>: Real-time visualization and alerting system</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">TensorFlow</span>
  <span class="badge">Streamlit</span>
  <span class="badge">PostgreSQL</span>
  <span class="badge">InfluxDB</span>
  <span class="badge">Docker</span>
  <span class="badge">MSPC</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>Reduced batch failures</strong> by 60%</li>
<li>✅ <strong>Early detection</strong> of deviations 4-6 hours before quality impact</li>
<li>✅ <strong>Saved $3M annually</strong> through reduced waste</li>
<li>✅ <strong>Improved process understanding</strong> across manufacturing team</li>
<li>✅ <strong>Enabled proactive interventions</strong> before quality impact</li>
</ul>

</div>

---

## 📈 Process Capability Improvement Initiative

<div class="card">

<h3>Challenge</h3>
<p>Several critical process parameters had Cpk values below 1.33, indicating insufficient process capability and regulatory risk. Systematic improvement was needed.</p>

<h3>Methodology</h3>
<ul>
<li><strong>Capability Analysis</strong>: Established baseline metrics for 20+ critical parameters</li>
<li><strong>Root Cause Analysis</strong>: Used statistical tools to identify sources of variation</li>
<li><strong>DOE Studies</strong>: Designed experiments to optimize parameter settings</li>
<li><strong>Control Plans</strong>: Implemented enhanced process controls</li>
<li><strong>Continuous Monitoring</strong>: Established SPC systems for sustainability</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">JMP</span>
  <span class="badge">Minitab</span>
  <span class="badge">Python</span>
  <span class="badge">SPC</span>
  <span class="badge">Six Sigma</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>Improved average Cpk</strong> from 1.1 to 1.8</li>
<li>✅ <strong>Achieved Cpk > 1.33</strong> for all critical parameters</li>
<li>✅ <strong>Reduced process variation</strong> by 45%</li>
<li>✅ <strong>Zero regulatory observations</strong> in subsequent inspections</li>
<li>✅ <strong>Enhanced product consistency</strong> and reliability</li>
</ul>

</div>

---

## 🧬 Cell Culture Process Optimization

<div class="card">

<h3>Challenge</h3>
<p>Cell culture processes for recombinant protein production required optimization to improve productivity while maintaining product quality attributes.</p>

<h3>Approach</h3>
<ul>
<li><strong>Historical Analysis</strong>: Analyzed 80+ cell culture runs</li>
<li><strong>Factorial Design</strong>: Executed 2-level factorial experiments</li>
<li><strong>Response Surface</strong>: Optimized using central composite design</li>
<li><strong>Metabolic Profiling</strong>: Integrated metabolite data with productivity</li>
<li><strong>Scale-Up Validation</strong>: Confirmed results at production scale</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">R</span>
  <span class="badge">JMP</span>
  <span class="badge">DOE</span>
  <span class="badge">RSM</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>25% increase</strong> in cell density</li>
<li>✅ <strong>30% improvement</strong> in specific productivity</li>
<li>✅ <strong>Maintained product quality</strong> attributes within specs</li>
<li>✅ <strong>Reduced culture duration</strong> by 2 days</li>
<li>✅ <strong>Annual capacity increase</strong> equivalent to new production line</li>
</ul>

</div>

---

## 🛠️ Data Infrastructure & MLOps Platform

<div class="card">

<h3>Challenge</h3>
<p>Growing number of ML models required systematic approach to deployment, monitoring, and maintenance. Lack of infrastructure was creating technical debt and sustainability issues.</p>

<h3>Solution</h3>
<ul>
<li><strong>Data Pipeline</strong>: Automated ETL processes for manufacturing data</li>
<li><strong>Model Registry</strong>: Centralized repository for model versioning</li>
<li><strong>Deployment Framework</strong>: Containerized deployment with CI/CD</li>
<li><strong>Monitoring System</strong>: Real-time model performance tracking</li>
<li><strong>Governance</strong>: Established validation and change control procedures</li>
</ul>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">Docker</span>
  <span class="badge">Kubernetes</span>
  <span class="badge">MLflow</span>
  <span class="badge">Airflow</span>
  <span class="badge">GitLab CI/CD</span>
  <span class="badge">PostgreSQL</span>
</div>

<h3>Results & Impact</h3>
<ul>
<li>✅ <strong>Deployed 15+ models</strong> into production</li>
<li>✅ <strong>Reduced deployment time</strong> from weeks to days</li>
<li>✅ <strong>Automated retraining</strong> pipelines for 8 models</li>
<li>✅ <strong>Established validation framework</strong> for GxP compliance</li>
<li>✅ <strong>Enabled data science team</strong> to focus on value creation</li>
</ul>

</div>

---

## 🎯 More Projects in Development

<div class="skills-grid">

<div class="card">

<h3>Digital Twin Development</h3>
<p>Building a digital twin of insulin manufacturing process for scenario testing and optimization without physical experimentation.</p>

<p><span class="badge">In Progress</span></p>

</div>

<div class="card">

<h3>Automated Batch Release</h3>
<p>AI-assisted system for batch release decisions, combining quality data with statistical models.</p>

<p><span class="badge">Planning</span></p>

</div>

<div class="card">

<h3>Supply Chain Optimization</h3>
<p>ML-based demand forecasting and inventory optimization for pharmaceutical manufacturing.</p>

<p><span class="badge">Planning</span></p>

</div>

</div>

---

<div class="section text-center">

## 🚀 Interested in Collaboration?

I'm always interested in discussing new challenges in pharmaceutical data science and exploring collaboration opportunities.

<div class="mt-2">
  <a href="/contact/" style="display: inline-block; padding: 12px 30px; background: var(--primary-color); color: white; text-decoration: none; border-radius: 25px; font-weight: 600;">Get in Touch</a>
</div>

</div>

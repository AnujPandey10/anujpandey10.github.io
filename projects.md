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

### Challenge
Insulin production processes exhibited significant batch-to-batch variability, impacting yield, quality, and manufacturing efficiency. The complexity of biological systems and numerous process parameters made optimization challenging using traditional trial-and-error approaches.

### Approach
- **Statistical Analysis**: Conducted comprehensive analysis of 100+ historical manufacturing batches
- **DOE Implementation**: Designed and executed factorial and response surface experiments
- **Multivariate Modeling**: Applied PLS regression and multivariate analysis to identify critical parameters
- **Process Optimization**: Developed predictive models to optimize operating conditions
- **Validation**: Validated models through prospective manufacturing runs

### Technologies Used
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">JMP Pro</span>
  <span class="badge">Minitab</span>
  <span class="badge">Pandas</span>
  <span class="badge">Scikit-learn</span>
  <span class="badge">DOE</span>
  <span class="badge">PLS Regression</span>
</div>

### Results & Impact
- ✅ **15% improvement** in average insulin yield
- ✅ **40% reduction** in batch-to-batch variability
- ✅ **Identified 5 critical process parameters** driving quality
- ✅ **Established robust operating space** meeting regulatory requirements
- ✅ **Annual savings** of $2M+ through improved yield

### Key Learnings
This project reinforced that **process understanding is paramount**. By combining domain knowledge with statistical rigor, we achieved sustainable improvements that pure data-mining approaches would have missed.

</div>

---

## 🤖 AI-Powered Manufacturing Knowledge System

<div class="card">

### Challenge
Manufacturing teams struggled to quickly find relevant information across hundreds of SOPs, batch records, and technical documents. Critical knowledge was siloed, leading to:
- Extended decision-making times during manufacturing issues
- Inconsistent application of best practices
- Training challenges for new team members
- Repeated questions to subject matter experts

### Solution Architecture
Built a Retrieval-Augmented Generation (RAG) system combining:
- **Document Processing**: Automated ingestion and parsing of SOPs, batch records, and technical documents
- **Vector Database**: Embedded 500+ documents using state-of-the-art models
- **Local LLM**: Deployed LLaMA-based model for secure, on-premise inference
- **Query Interface**: User-friendly web interface with citation tracking
- **Continuous Learning**: Feedback mechanism to improve relevance

### Technologies Used
<div class="tech-stack">
  <span class="badge">LLaMA 2</span>
  <span class="badge">Python</span>
  <span class="badge">LangChain</span>
  <span class="badge">ChromaDB</span>
  <span class="badge">FastAPI</span>
  <span class="badge">React</span>
  <span class="badge">Sentence Transformers</span>
</div>

### Results & Impact
- ✅ **Reduced information retrieval time** from hours to seconds
- ✅ **90% accuracy** in answering manufacturing questions
- ✅ **500+ daily queries** from manufacturing team
- ✅ **Accelerated training** for 20+ new employees
- ✅ **Full traceability** with source document citations

### Technical Highlights
- Implemented **semantic chunking** for optimal context windows
- Developed **custom relevance scoring** for pharmaceutical content
- Ensured **GxP compliance** with complete audit trails
- Achieved **sub-2-second response times** on standard hardware

### Validation & Compliance
- Comprehensive validation package for GxP compliance
- User acceptance testing with 50+ manufacturing personnel
- Security assessment for data protection
- Regular accuracy monitoring and model updates

</div>

---

## 📊 Predictive Modeling for PK/PD Studies

<div class="card">

### Challenge
Late-stage failures in PK/PD studies were costly and time-consuming. Early prediction of study outcomes based on formulation characteristics could save millions in development costs and accelerate time-to-market.

### Approach
- **Data Integration**: Combined particle size distribution data, formulation parameters, and historical study results
- **Feature Engineering**: Created meaningful features capturing distribution characteristics
- **Model Development**: Evaluated multiple algorithms (GLM, Random Forest, XGBoost)
- **Interpretability Analysis**: Applied SHAP values to understand key drivers
- **Cross-Validation**: Rigorous validation using temporal splits and bootstrapping

### Technologies Used
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">Scikit-learn</span>
  <span class="badge">XGBoost</span>
  <span class="badge">SHAP</span>
  <span class="badge">Pandas</span>
  <span class="badge">SciPy</span>
  <span class="badge">Plotly</span>
</div>

### Results & Impact
- ✅ **85% accuracy** in predicting PK/PD study outcomes
- ✅ **Prevented 3 late-stage failures** in first year
- ✅ **Saved $5M+** in avoided study costs
- ✅ **Reduced development timeline** by 6 months for 2 products
- ✅ **Identified optimal particle size ranges** for different formulations

### Model Insights
SHAP analysis revealed:
- D50 and D90 particle size parameters as primary drivers
- Non-linear relationship between size distribution and bioavailability
- Critical interaction between particle size and formulation excipients
- Threshold effects requiring process control strategies

</div>

---

## 🔍 Real-Time Process Monitoring System

<div class="card">

### Challenge
Traditional end-of-batch quality testing meant defects were discovered too late, resulting in batch failures and resource waste. The goal was to develop an early warning system for process deviations.

### Solution
- **Sensor Integration**: Connected 50+ process sensors (temperature, pH, pressure, flow rates)
- **Feature Engineering**: Created derived features capturing process dynamics
- **Anomaly Detection**: Implemented multivariate statistical process control
- **ML Models**: Developed predictive models for quality attributes
- **Dashboard**: Real-time visualization and alerting system

### Technologies Used
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">TensorFlow</span>
  <span class="badge">Streamlit</span>
  <span class="badge">PostgreSQL</span>
  <span class="badge">InfluxDB</span>
  <span class="badge">Docker</span>
  <span class="badge">MSPC</span>
</div>

### Results & Impact
- ✅ **Reduced batch failures** by 60%
- ✅ **Early detection** of deviations 4-6 hours before quality impact
- ✅ **Saved $3M annually** through reduced waste
- ✅ **Improved process understanding** across manufacturing team
- ✅ **Enabled proactive interventions** before quality impact

</div>

---

## 📈 Process Capability Improvement Initiative

<div class="card">

### Challenge
Several critical process parameters had Cpk values below 1.33, indicating insufficient process capability and regulatory risk. Systematic improvement was needed.

### Methodology
- **Capability Analysis**: Established baseline metrics for 20+ critical parameters
- **Root Cause Analysis**: Used statistical tools to identify sources of variation
- **DOE Studies**: Designed experiments to optimize parameter settings
- **Control Plans**: Implemented enhanced process controls
- **Continuous Monitoring**: Established SPC systems for sustainability

### Technologies Used
<div class="tech-stack">
  <span class="badge">JMP</span>
  <span class="badge">Minitab</span>
  <span class="badge">Python</span>
  <span class="badge">SPC</span>
  <span class="badge">Six Sigma</span>
</div>

### Results & Impact
- ✅ **Improved average Cpk** from 1.1 to 1.8
- ✅ **Achieved Cpk > 1.33** for all critical parameters
- ✅ **Reduced process variation** by 45%
- ✅ **Zero regulatory observations** in subsequent inspections
- ✅ **Enhanced product consistency** and reliability

</div>

---

## 🧬 Cell Culture Process Optimization

<div class="card">

### Challenge
Cell culture processes for recombinant protein production required optimization to improve productivity while maintaining product quality attributes.

### Approach
- **Historical Analysis**: Analyzed 80+ cell culture runs
- **Factorial Design**: Executed 2-level factorial experiments
- **Response Surface**: Optimized using central composite design
- **Metabolic Profiling**: Integrated metabolite data with productivity
- **Scale-Up Validation**: Confirmed results at production scale

### Technologies Used
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">R</span>
  <span class="badge">JMP</span>
  <span class="badge">DOE</span>
  <span class="badge">RSM</span>
</div>

### Results & Impact
- ✅ **25% increase** in cell density
- ✅ **30% improvement** in specific productivity
- ✅ **Maintained product quality** attributes within specs
- ✅ **Reduced culture duration** by 2 days
- ✅ **Annual capacity increase** equivalent to new production line

</div>

---

## 🛠️ Data Infrastructure & MLOps Platform

<div class="card">

### Challenge
Growing number of ML models required systematic approach to deployment, monitoring, and maintenance. Lack of infrastructure was creating technical debt and sustainability issues.

### Solution
- **Data Pipeline**: Automated ETL processes for manufacturing data
- **Model Registry**: Centralized repository for model versioning
- **Deployment Framework**: Containerized deployment with CI/CD
- **Monitoring System**: Real-time model performance tracking
- **Governance**: Established validation and change control procedures

### Technologies Used
<div class="tech-stack">
  <span class="badge">Python</span>
  <span class="badge">Docker</span>
  <span class="badge">Kubernetes</span>
  <span class="badge">MLflow</span>
  <span class="badge">Airflow</span>
  <span class="badge">GitLab CI/CD</span>
  <span class="badge">PostgreSQL</span>
</div>

### Results & Impact
- ✅ **Deployed 15+ models** into production
- ✅ **Reduced deployment time** from weeks to days
- ✅ **Automated retraining** pipelines for 8 models
- ✅ **Established validation framework** for GxP compliance
- ✅ **Enabled data science team** to focus on value creation

</div>

---

## 🎯 More Projects in Development

<div class="skills-grid">

<div class="card">

### Digital Twin Development
Building a digital twin of insulin manufacturing process for scenario testing and optimization without physical experimentation.

<span class="badge">In Progress</span>

</div>

<div class="card">

### Automated Batch Release
AI-assisted system for batch release decisions, combining quality data with statistical models.

<span class="badge">Planning</span>

</div>

<div class="card">

### Supply Chain Optimization
ML-based demand forecasting and inventory optimization for pharmaceutical manufacturing.

<span class="badge">Planning</span>

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

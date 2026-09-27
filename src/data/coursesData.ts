export interface CourseModule {
  number: number;
  title: string;
  duration: string;
  topics: string[];
  projects: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'tech' | 'marketing' | 'job_plus' | 'college';
  categoryName: string;
  tagline: string;
  image: string;
  duration: string;
  level: string;
  format: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  price: string;
  originalPrice: string;
  emi: string;
  institute?: string;
  instituteBadge?: string;
  avgHike: string;
  skills: string[];
  highlights: string[];
  overview: string;
  mentor: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  modules: CourseModule[];
}

export const COURSES: Course[] = [
  // 1. Tech Certification
  {
    id: 'full-stack-ai',
    title: 'Full Stack Development with AI',
    category: 'tech',
    categoryName: 'Tech Certification',
    tagline: 'Build next-generation production web apps augmented with LLMs, Autonomous Agents & Cloud Architecture.',
    image: '/images/course_fullstack_ai_1790418887675.jpg',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    format: 'Live Weekend Cohort + Daily Labs',
    rating: 4.94,
    reviewsCount: 1840,
    badge: 'Bestseller',
    price: '₹54,999',
    originalPrice: '₹89,999',
    emi: '₹4,583/month',
    avgHike: '145% Avg Hike',
    skills: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'FastAPI', 'Gemini & OpenAI API', 'Docker', 'PostgreSQL', 'LangChain'],
    highlights: [
      '100% Placement Assistance with 250+ Tech Partners',
      '8 Industry-Grade Capstone Projects including AI SaaS',
      '1:1 Weekly Code Reviews by FAANG Staff Engineers',
      'Official AIYUG & NASSCOM Aligned Dual Credential'
    ],
    overview: 'Master modern full-stack web engineering infused with generative AI capabilities. Learn to architect scalable distributed systems, write clean TypeScript and Python, integrate retrieval-augmented generation (RAG) pipelines, and deploy production microservices.',
    mentor: {
      name: 'Rohan Sharma',
      role: 'Principal Architect',
      company: 'Ex-Google Cloud / Microsoft',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Modern Frontend & Architecture with React 19 & Next.js',
        duration: 'Weeks 1-5',
        topics: ['Deep Dive TypeScript', 'React 19 Server Components', 'State Machines & Zustand', 'Tailwind CSS & Responsive UX', 'Performance Optimization'],
        projects: ['High-Concurrency E-Commerce Engine', 'Real-Time Collaborative Dashboard']
      },
      {
        number: 2,
        title: 'Scalable Microservices, Python & PostgreSQL',
        duration: 'Weeks 6-10',
        topics: ['Node.js & FastAPI Microservices', 'PostgreSQL & Drizzle ORM', 'Redis In-Memory Caching', 'Authentication & OAuth 2.0', 'Event-Driven Kafka'],
        projects: ['High-Throughput Financial Ledger API', 'Distributed Event Bus Service']
      },
      {
        number: 3,
        title: 'AI Native Engineering & Agentic Workflows',
        duration: 'Weeks 11-16',
        topics: ['Vector Databases & Embeddings (Pinecone, pgvector)', 'RAG Pipelines with Gemini & Claude', 'LangChain & LangGraph Orchestration', 'Multi-Agent Tool Use', 'Evaluation & Guardrails'],
        projects: ['Autonomous Enterprise Customer Support Agent', 'Multimodal Document Query Engine']
      },
      {
        number: 4,
        title: 'DevOps, CI/CD, Containerization & Production Launch',
        duration: 'Weeks 17-24',
        topics: ['Docker & Kubernetes Orchestration', 'AWS / GCP Cloud Deployment', 'GitHub Actions CI/CD Pipeline', 'Security Audits & Load Testing', 'Final Capstone & Placement Prep'],
        projects: ['Enterprise AI Platform with Auto-scaling & Monitoring']
      }
    ]
  },
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    category: 'tech',
    categoryName: 'Tech Certification',
    tagline: 'Architect multi-cloud infrastructures with Kubernetes, Terraform, AWS, and GitOps pipelines.',
    image: '/images/hero_ai_learning_1790418868544.jpg',
    duration: '5 Months',
    level: 'Intermediate',
    format: 'Live Hands-On Virtual Cloud Labs',
    rating: 4.88,
    reviewsCount: 1290,
    badge: 'High Demand',
    price: '₹49,999',
    originalPrice: '₹79,999',
    emi: '₹4,166/month',
    avgHike: '130% Avg Hike',
    skills: ['AWS Solutions Architecture', 'Kubernetes (EKS)', 'Terraform IaC', 'Docker', 'ArgoCD', 'Prometheus & Grafana', 'CI/CD Pipelines'],
    highlights: [
      'AWS & CKA Certified Curriculum Structure',
      'Real Multi-Cloud Simulation Labs with Cloud Credits',
      'Zero-Downtime Deployment & Chaos Engineering Drills',
      'Direct Referrals to Top Cloud Infrastructure Consultancies'
    ],
    overview: 'Become a high-earning Site Reliability and DevOps Engineer. Design resilient, cost-optimized cloud architectures across AWS and GCP while automating deployments with Terraform and Kubernetes.',
    mentor: {
      name: 'Aditya Nair',
      role: 'Staff DevOps Lead',
      company: 'Amazon Web Services',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Linux Fundamentals & Cloud Networking Foundations',
        duration: 'Weeks 1-4',
        topics: ['Advanced Bash Scripting', 'TCP/IP, VPC, Subnets & Routing', 'SSH Security & Access Policies', 'System Performance Profiling'],
        projects: ['Hardened Bastion Host & Private Cloud VPC']
      },
      {
        number: 2,
        title: 'Containerization & Kubernetes Production Cluster',
        duration: 'Weeks 5-10',
        topics: ['Docker Multi-stage Builds', 'K8s Pods, Services & Ingress Controllers', 'StatefulSets & Persistent Volumes', 'Helm Charts Packaging'],
        projects: ['Production K8s Cluster with Ingress & SSL Management']
      },
      {
        number: 3,
        title: 'Infrastructure as Code (IaC) & GitOps Automation',
        duration: 'Weeks 11-15',
        topics: ['Terraform Modules & State Management', 'GitHub Actions Automation', 'ArgoCD Declarative GitOps', 'Ansible Configuration Mgmt'],
        projects: ['One-Click Disaster Recovery Deployment Pipeline']
      },
      {
        number: 4,
        title: 'Site Reliability Engineering, Observability & FinOps',
        duration: 'Weeks 16-20',
        topics: ['Prometheus Metrics & Grafana Dashboards', 'Distributed Tracing with Jaeger', 'Cloud Cost Optimization & FinOps', 'Chaos Engineering with Gremlin'],
        projects: ['High-Availability Fintech Observability Suite']
      }
    ]
  },
  {
    id: 'cybersecurity-professional',
    title: 'Cybersecurity Professional',
    category: 'tech',
    categoryName: 'Tech Certification',
    tagline: 'Defend enterprise infrastructure with Offensive & Defensive Security, Threat Hunting & SIEM.',
    image: '/images/course_fullstack_ai_1790418887675.jpg',
    duration: '6 Months',
    level: 'All Levels',
    format: 'Live Cyber Range Simulation + Capture The Flag (CTF)',
    rating: 4.91,
    reviewsCount: 960,
    badge: 'Critical Need',
    price: '₹52,999',
    originalPrice: '₹84,999',
    emi: '₹4,416/month',
    avgHike: '135% Avg Hike',
    skills: ['Ethical Hacking', 'SIEM & SOC Operations', 'Network Forensics', 'Penetration Testing', 'Burp Suite Pro', 'Wireshark', 'Metasploit', 'Splunk'],
    highlights: [
      'Over 60+ Hours of Live Virtual Cyber Range Labs',
      'Preparation for CEH & CompTIA Security+ Exams',
      'Hands-on SOC Analyst Simulation and Incident Response',
      'Mentorship from Defense & Enterprise Security Directors'
    ],
    overview: 'Tackle the modern threat landscape. Train as a certified cybersecurity defender or ethical hacker equipped with penetration testing, vulnerability assessment, cloud security, and real-time SOC incident management.',
    mentor: {
      name: 'Vikram Sengupta',
      role: 'Head of Threat Intelligence',
      company: 'Palo Alto Networks',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Network Defense & Cryptography Standards',
        duration: 'Weeks 1-5',
        topics: ['Network Protocols & Packet Inspection', 'Symmetric & Asymmetric Cryptography', 'Firewalls, IDS/IPS Configuration', 'Zero Trust Architecture'],
        projects: ['Defensive Network Perimeter Hardening']
      },
      {
        number: 2,
        title: 'Offensive Security & Web Application Pen-Testing',
        duration: 'Weeks 6-11',
        topics: ['OWASP Top 10 Vulnerabilities', 'Burp Suite Deep Dive', 'SQLi, XSS, CSRF & Auth Bypasses', 'Privilege Escalation Techniques'],
        projects: ['Full Scope Penetration Test on Banking App Clone']
      },
      {
        number: 3,
        title: 'SOC Operations, SIEM & Incident Triage',
        duration: 'Weeks 12-18',
        topics: ['Splunk & Elastic SIEM Rules', 'Threat Hunting & IOC Detection', 'Digital Forensics & Memory Analysis', 'Ransomware Containment Playbooks'],
        projects: ['Live SOC Cyber Attack Incident Response Drill']
      },
      {
        number: 4,
        title: 'Cloud & AI Security Governance',
        duration: 'Weeks 19-24',
        topics: ['AWS IAM & Security Hub', 'Prompt Injection & LLM Security Risks', 'Compliance: ISO 27001, SOC 2, GDPR', 'Career Portfolio & Interview Sprints'],
        projects: ['Enterprise Cloud Compliance & Audit Assessment']
      }
    ]
  },
  {
    id: 'ai-generative-ai',
    title: 'AI & Generative AI',
    category: 'tech',
    categoryName: 'Tech Certification',
    tagline: 'Master Deep Learning, Transformers, Large Language Models, Multi-Agent Systems & Vision AI.',
    image: '/images/hero_ai_learning_1790418868544.jpg',
    duration: '6 Months',
    level: 'Intermediate to Advanced',
    format: 'Live Interactive Masterclasses + GPU Cloud Access',
    rating: 4.97,
    reviewsCount: 2450,
    badge: 'Flagship Program',
    price: '₹59,999',
    originalPrice: '₹99,999',
    emi: '₹4,999/month',
    avgHike: '160% Avg Hike',
    skills: ['PyTorch', 'Transformers', 'Fine-Tuning (LoRA/QLoRA)', 'RAG Architecture', 'Multi-Agent Frameworks', 'Diffusion Models', 'LLMOps', 'vLLM'],
    highlights: [
      'Sponsored High-End A100 GPU Clusters for Training',
      'Direct Building of Custom Foundation Model Fine-tunes',
      'Guest Masterclasses from Silicon Valley AI Researchers',
      'Exclusive Access to AIYUG Venture Network & Incubator'
    ],
    overview: 'Step into the forefront of the AI revolution. Build deep foundational and applied mastery in modern Machine Learning, Transformer architectures, Parameter-Efficient Fine-Tuning (PEFT), and autonomous agent networks.',
    mentor: {
      name: 'Dr. Kavita Verma',
      role: 'Lead AI Research Scientist',
      company: 'Ex-DeepMind / Stanford Fellow',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Mathematics for ML & Deep Learning with PyTorch',
        duration: 'Weeks 1-5',
        topics: ['Linear Algebra & Vector Calculus for Neural Networks', 'Backpropagation from Scratch', 'PyTorch Tensor Operations', 'CNNs & Vision Transformers (ViT)'],
        projects: ['Custom ResNet Classifier with PyTorch from Ground Up']
      },
      {
        number: 2,
        title: 'Attention Mechanisms & Modern Transformer Architectures',
        duration: 'Weeks 6-11',
        topics: ['Self-Attention & Multi-Head Mathematics', 'GPT, BERT & LLaMA Architecture', 'Tokenization (BPE, SentencePiece)', 'Pre-training on Custom Datasets'],
        projects: ['Build a Miniature Transformer Model from Scratch']
      },
      {
        number: 3,
        title: 'Generative AI, Fine-Tuning & Multi-Modal Models',
        duration: 'Weeks 12-18',
        topics: ['PEFT, LoRA & QLoRA Quantization', 'RLHF & DPO Alignment', 'Diffusion Models for Image Generation', 'Whisper & Speech Synthesis'],
        projects: ['Domain-Specific Legal/Medical LLM Fine-Tune']
      },
      {
        number: 4,
        title: 'Agentic Architectures, Production LLMOps & Inference',
        duration: 'Weeks 19-24',
        topics: ['Autonomous Agents with LangGraph & CrewAI', 'High-Throughput Inference with vLLM & TensorRT', 'Guardrails, Safety & Red Teaming', 'Capstone Product Pitch'],
        projects: ['Autonomous Research Analyst with Web Browsing & Code Exec']
      }
    ]
  },
  {
    id: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning',
    category: 'tech',
    categoryName: 'Tech Certification',
    tagline: 'Master Predictive Modeling, Statistical Learning, Feature Engineering, Neural Networks & MLOps with Python.',
    image: '/images/course_datascience_ml_1790420035757.jpg',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    format: 'Live Weekend Cohort + GPU Cloud Labs',
    rating: 4.95,
    reviewsCount: 1960,
    badge: 'High Demand',
    price: '₹54,999',
    originalPrice: '₹89,999',
    emi: '₹4,583/month',
    avgHike: '150% Avg Hike',
    skills: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'Feature Engineering', 'TensorFlow & PyTorch', 'XGBoost', 'MLflow & Docker', 'Statistical Inference', 'Tableau & SQL'],
    highlights: [
      'Comprehensive Data Science lifecycle from raw telemetry to production ML pipelines',
      '12 Real-World Case Studies across Fintech, Healthcare & E-Commerce',
      '1:1 Mentorship from Senior Data Scientists at Tier-1 Tech Firms',
      'End-to-End MLOps deployment with MLflow, FastAPI & Docker'
    ],
    overview: 'Launch a high-impact career as a Data Scientist or Machine Learning Engineer. Learn statistical data wrangling, exploratory data science, predictive machine learning algorithms, deep neural representations, and robust cloud MLOps deployment.',
    mentor: {
      name: 'Dr. Siddharth Sen',
      role: 'Staff Data Scientist',
      company: 'Ex-Amazon / Walmart Labs',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Python for Data Science, Advanced SQL & Wrangling',
        duration: 'Weeks 1-5',
        topics: ['Advanced SQL Joins & Window Aggregations', 'Vectorized Operations with NumPy & Pandas', 'Data Imputation & Outlier Detection', 'Exploratory Data Analysis (EDA) Best Practices'],
        projects: ['Multi-Million Transaction E-Commerce Data Wrangling Pipeline']
      },
      {
        number: 2,
        title: 'Applied Statistics, Probability & Hypothesis Testing',
        duration: 'Weeks 6-10',
        topics: ['Probability Distributions & Central Limit Theorem', 'Parametric & Non-Parametric Hypothesis Tests', 'A/B Testing Rigor & Sample Size Calculation', 'ANOVA & Regression Diagnostics'],
        projects: ['Product Feature A/B Testing & Statistical Experimentation Suite']
      },
      {
        number: 3,
        title: 'Supervised & Unsupervised Machine Learning Algorithms',
        duration: 'Weeks 11-17',
        topics: ['Regularized Linear Models (Ridge/Lasso)', 'Tree Ensembles (Random Forest, XGBoost, LightGBM)', 'Unsupervised Clustering (K-Means, DBSCAN, PCA)', 'Model Hyperparameter Tuning & Cross-Validation'],
        projects: ['Fintech Credit Risk Default & Fraud Detection Model']
      },
      {
        number: 4,
        title: 'Deep Learning, Time Series Forecasting & MLOps Pipelines',
        duration: 'Weeks 18-24',
        topics: ['Neural Network Architectures with PyTorch & TensorFlow', 'Time Series Forecasting with ARIMA & Prophet', 'Model Packaging with FastAPI & Docker', 'MLOps Tracking with MLflow & Automated Retraining'],
        projects: ['Production Real-Time ML Scoring Engine Deployed on Cloud']
      }
    ]
  },

  // 2. Marketing with AI
  {
    id: 'digital-marketing-ai',
    title: 'Digital Marketing with AI',
    category: 'marketing',
    categoryName: 'Marketing with AI',
    tagline: 'Supercharge customer acquisition, search marketing, and creative production using predictive AI.',
    image: '/images/course_marketing_ai_1790418902211.jpg',
    duration: '4 Months',
    level: 'Beginner to Advanced',
    format: 'Live Strategy Sprints + Real Ad Budget Live Practice',
    rating: 4.89,
    reviewsCount: 1620,
    badge: 'Trending',
    price: '₹39,999',
    originalPrice: '₹64,999',
    emi: '₹3,333/month',
    avgHike: '125% Avg Hike',
    skills: ['AI Copywriting', 'Generative Creative Design', 'AI-Driven SEO', 'Google Ads Smart Bidding', 'Meta AI Campaigns', 'Midjourney for Ads', 'Analytics 4'],
    highlights: [
      '₹10,000 Live Ad Campaign Budget Provided for Real Hands-On Execution',
      '15+ AI Marketing Stack Tools Included (Jasper, AdCreative, ChatGPT Plus)',
      'Meta & Google Certified Partner Curriculum',
      'Portfolio with 5 Comprehensive Growth Marketing Case Studies'
    ],
    overview: 'Transform into a new-era CMO or Growth Lead. Discover how modern marketing departments combine data-driven conversion science with AI creative tools to cut customer acquisition costs by up to 60%.',
    mentor: {
      name: 'Ananya Deshmukh',
      role: 'Growth Marketing Director',
      company: 'Ex-Zomato & Nykaa',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'AI-Powered Market Research & Audience Persona Mapping',
        duration: 'Weeks 1-3',
        topics: ['AI Competitive Intelligence Gathering', 'Dynamic Persona Creation with LLMs', 'Value Proposition & Positioning', 'Conversion Funnel Strategy'],
        projects: ['Comprehensive Market Entry Deck for High-Growth D2C Brand']
      },
      {
        number: 2,
        title: 'Algorithmic Organic Search & AI Content Engines',
        duration: 'Weeks 4-7',
        topics: ['Semantic Search & EEAT Optimization', 'AI Keyword Clustering & Intent Mapping', 'Automated Content Pipeline Engineering', 'Technical SEO Audit Automation'],
        projects: ['Organic Traffic Scaling Engine Generating 50k+ Visits']
      },
      {
        number: 3,
        title: 'High-ROAS Paid Ads with Meta Advantage+ & Google PMax',
        duration: 'Weeks 8-12',
        topics: ['Meta AI Dynamic Creatives', 'Google Performance Max Optimization', 'AI Video Ad Scripting & Production', 'Conversion Rate Optimization (CRO) Drills'],
        projects: ['Live Multi-Channel Ad Campaign with Guaranteed ROAS Targets']
      },
      {
        number: 4,
        title: 'Omnichannel Attribution, Retention & AI Automation',
        duration: 'Weeks 13-16',
        topics: ['Google Analytics 4 & BigQuery Attribution', 'Klaviyo AI Email Flows', 'WhatsApp Automation & Chat Funnels', 'Agency Pitch & Placement Prep'],
        projects: ['360-Degree Growth Engine with Full Attribution Model']
      }
    ]
  },
  {
    id: 'integrated-marketing-comm',
    title: 'Integrated Marketing Communication',
    category: 'marketing',
    categoryName: 'Marketing with AI',
    tagline: 'Orchestrate unified omnichannel brand narratives across digital, PR, television, and influencer ecosystems.',
    image: '/images/course_marketing_ai_1790418902211.jpg',
    duration: '4 Months',
    level: 'All Levels',
    format: 'Executive Case Method + Live Creative Critiques',
    rating: 4.85,
    reviewsCount: 880,
    badge: 'Executive',
    price: '₹42,999',
    originalPrice: '₹69,999',
    emi: '₹3,583/month',
    avgHike: '120% Avg Hike',
    skills: ['Brand Architecture', 'Omnichannel Storytelling', 'Media Planning & Buying', 'PR Crisis Management', 'Influencer Strategy', 'Consumer Psychology'],
    highlights: [
      'Case Studies from Global Brands (Nike, Apple, Tata, Spotify)',
      '1:1 Strategy Reviews with Award-Winning Creative Directors',
      'Master Media Budget Allocation and Global Brand Guidelines',
      'Placement Support in Top Advertising & PR Networks (Ogilvy, Dentsu)'
    ],
    overview: 'Craft unforgettable brand stories that resonate synchronously across every touchpoint. Learn to integrate public relations, paid media, digital campaigns, and community advocacy into a single commanding voice.',
    mentor: {
      name: 'Siddharth Roy',
      role: 'Executive Creative Director',
      company: 'Global Advertising Network',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Foundations of Integrated Brand Storytelling',
        duration: 'Weeks 1-4',
        topics: ['Brand Archetypes & Core Identity', 'The Consumer Journey Map', 'Crafting the Central Creative Idea (Big Idea)', 'Cross-Channel Message Synergy'],
        projects: ['Brand Re-positioning Blueprint for Legacy Consumer Brand']
      },
      {
        number: 2,
        title: 'Media Planning, Buying & Budget Optimization',
        duration: 'Weeks 5-8',
        topics: ['Reach, Frequency & GRP Calculations', 'Traditional vs Digital Media Mix', 'Programmatic Media Buying', 'Negotiation Frameworks with Media Houses'],
        projects: ['Multi-Crore Media Allocation Schedule & Strategy']
      },
      {
        number: 3,
        title: 'Public Relations, Crisis Communications & Advocacy',
        duration: 'Weeks 9-12',
        topics: ['Brand Reputation Defense Protocols', 'Crisis Simulation Drills', 'Influencer & KOL Collaboration Matrices', 'Corporate Social Responsibility (CSR) Messaging'],
        projects: ['48-Hour Live Crisis Response War Room Simulation']
      },
      {
        number: 4,
        title: 'Measurement, Brand Equity & Global Campaigns',
        duration: 'Weeks 13-16',
        topics: ['Brand Lift Studies & Brand Equity Index', 'Global Campaign Localization', 'Marketing Technology (MarTech) Stack Integration', 'Final Boardroom Pitch'],
        projects: ['Global Product Launch IMC Campaign Pitch Deck']
      }
    ]
  },
  {
    id: 'performance-marketing-analytics',
    title: 'Performance Marketing & Analytics',
    category: 'marketing',
    categoryName: 'Marketing with AI',
    tagline: 'Master data-led customer acquisition, cohort LTV modeling, attribution science, and high-scale ad spend.',
    image: '/images/course_marketing_ai_1790418902211.jpg',
    duration: '4 Months',
    level: 'Intermediate',
    format: 'Live Data Sprints + Real Spend Experiments',
    rating: 4.93,
    reviewsCount: 1410,
    badge: 'High ROI',
    price: '₹44,999',
    originalPrice: '₹74,999',
    emi: '₹3,750/month',
    avgHike: '140% Avg Hike',
    skills: ['SQL for Marketers', 'Meta Ads Manager Pro', 'Google Performance Max', 'Mixpanel', 'Cohort Retention', 'CAC/LTV Optimization', 'Tableau'],
    highlights: [
      'Learn how to scale ad accounts from ₹1 Lakh to ₹50 Lakhs monthly',
      'Advanced SQL and Python for automated marketing analytics',
      'Attribution modeling (First touch, Last touch, Markov chain)',
      'Hiring partnerships with leading VC-backed unicorns'
    ],
    overview: 'Dive deep into the numbers driving multimillion-dollar growth engines. Learn quantitative media buying, statistical A/B testing, cohort analysis, and predictive lifetime value modeling to become an indispensable performance marketer.',
    mentor: {
      name: 'Tarun Mathur',
      role: 'Head of Growth & Performance',
      company: 'Fintech Unicorn',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Unit Economics & Quantitative Growth Foundations',
        duration: 'Weeks 1-4',
        topics: ['CAC, LTV, Payback Periods & Burn Multiple', 'Financial Modeling for Acquisition', 'Attribution Models & Pixel Telemetry', 'Server-Side Tagging (CAPI)'],
        projects: ['Unit Economic Health Dashboard & Forecast Model']
      },
      {
        number: 2,
        title: 'Paid Search, Social & Programmatic Engine Tuning',
        duration: 'Weeks 5-8',
        topics: ['Advanced Meta Auction Mechanics', 'Google Search & PMax Algorithm Hacking', 'LinkedIn B2B Account-Based Marketing (ABM)', 'Creative Fatigue Mitigation Algorithms'],
        projects: ['High-Velocity A/B Creative Testing Engine']
      },
      {
        number: 3,
        title: 'SQL, Python & Marketing Data Pipelines',
        duration: 'Weeks 9-12',
        topics: ['SQL Queries for Customer Segmentation', 'Cohort Retention Analysis', 'Python for Automated Bid & Spend Adjustments', 'Building Automated Executive Dashboards'],
        projects: ['Automated Anomaly Detection & Ad Pause Bot']
      },
      {
        number: 4,
        title: 'Scale Strategies, International Expansion & Interviews',
        duration: 'Weeks 13-16',
        topics: ['Scaling Budgets without CPA Degradation', 'Cross-Border Ad Compliance & Currency Management', 'Agency Operations vs In-House Team Leadership', 'Mock Senior Growth Interviews'],
        projects: ['10x Scaling Plan & Capstone Audit for Tier-1 Brand']
      }
    ]
  },
  {
    id: 'social-media-content-strategy',
    title: 'Social Media & Content Strategy',
    category: 'marketing',
    categoryName: 'Marketing with AI',
    tagline: 'Engineer viral organic distribution, creator ecosystems, and high-converting video content systems.',
    image: '/images/course_marketing_ai_1790418902211.jpg',
    duration: '3.5 Months',
    level: 'Beginner to Advanced',
    format: 'Live Studio Workshops + Content Laboratory',
    rating: 4.87,
    reviewsCount: 1120,
    badge: 'Viral Growth',
    price: '₹34,999',
    originalPrice: '₹59,999',
    emi: '₹2,916/month',
    avgHike: '115% Avg Hike',
    skills: ['Short-form Video Architecture', 'LinkedIn Thought Leadership', 'Community Building', 'AI Video Scriptwriting', 'CapCut & Premiere Pro', 'Algorithm Reverse Engineering'],
    highlights: [
      'Learn how to systematically produce viral reels and TikToks with 1M+ views',
      'Exclusive access to AI video creation workflows (Runway, HeyGen, Descript)',
      'Direct networking with creators managing 5M+ follower networks',
      'Build your personal brand or an agency client portfolio'
    ],
    overview: 'Stop guessing what the algorithm wants. Master the psychology of viral hooks, audience retention loops, creator partnerships, and scalable content workflows that turn casual viewers into loyal paying customers.',
    mentor: {
      name: 'Rhea Kapoor',
      role: 'Head of Content & Virality',
      company: 'Leading Creator Agency',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Virality Mechanics & Platform Algorithms',
        duration: 'Weeks 1-3',
        topics: ['Dopamine Loops & Retention Curve Dynamics', 'Instagram, YouTube Shorts & LinkedIn Algorithms', 'Trend Jacking & Cultural Velocity', 'Audience Empathy Frameworks'],
        projects: ['Viral Hook Playbook & First 3-Second Retention Blueprint']
      },
      {
        number: 2,
        title: 'AI Scriptwriting & High-Velocity Production Systems',
        duration: 'Weeks 4-7',
        topics: ['AI Script Generation with Custom Voice Models', 'B-Roll Sourcing & Visual Storytelling', 'Short-Form Video Editing Mechanics', 'Batch Production Workflow Sprints'],
        projects: ['30-Day Automated Video Content Engine']
      },
      {
        number: 3,
        title: 'Brand Communities & Creator Management',
        duration: 'Weeks 8-11',
        topics: ['Discord, WhatsApp & Slack Community Architecture', 'Sponsoring Creators & Measuring Organic ROI', 'User-Generated Content (UGC) Funnels', 'Brand Advocacy Programs'],
        projects: ['UGC Creator Campaign with 100+ Asset Pipeline']
      },
      {
        number: 4,
        title: 'Monetization, Personal Branding & Agency Scaling',
        duration: 'Weeks 12-14',
        topics: ['High-Ticket Brand Deals & Retainers', 'Executive Ghostwriting for CXOs', 'Building a Full-Service Social Agency', 'Final Showcase to Brand Executives'],
        projects: ['Executive Ghostwriting Portfolio & Agency Rate Card']
      }
    ]
  },

  // 3. Job+ Certification
  {
    id: 'job-plus-fullstack',
    title: 'Job+ Full Stack Developer',
    category: 'job_plus',
    categoryName: 'Job+ Certification',
    tagline: 'Guaranteed placement program with 100% money-back agreement. Get hired at top tech companies.',
    image: '/images/course_job_ready_1790418930750.jpg',
    duration: '9 Months',
    level: 'All Levels',
    format: 'Intensive Career BootCamp + Unlimited Placement Drives',
    rating: 4.96,
    reviewsCount: 2980,
    badge: '100% Placement Guarantee',
    price: '₹69,999',
    originalPrice: '₹1,19,999',
    emi: '₹5,833/month',
    avgHike: '165% Avg Hike',
    skills: ['Data Structures & Algorithms', 'System Design (LLD/HLD)', 'MERN Stack', 'Next.js', 'PostgreSQL', 'Microservices', 'Live Mock Interviews'],
    highlights: [
      'Guaranteed Minimum 15+ Job Interviews or 100% Tuition Refund',
      'Minimum CTC Package Guarantee of ₹8 LPA - ₹25 LPA',
      'Over 300+ LeetCode Medium/Hard Problems Solved with Mentors',
      'Dedicated Placement Officer & 1:1 Resume Optimization'
    ],
    overview: 'Our premier career-transformation bootcamp. Designed from scratch to take you from your current level into a high-paying software engineering position at product-based startups and global enterprises.',
    mentor: {
      name: 'Kunal Singhania',
      role: 'Director of Career Success',
      company: 'Ex-Amazon Tech Recruiter Lead',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Intensive Data Structures & Algorithms Mastery',
        duration: 'Months 1-3',
        topics: ['Time & Space Complexity', 'Arrays, Strings, HashMaps & Two Pointers', 'Recursion, Backtracking & Dynamic Programming', 'Trees, Graphs & Heaps', 'LeetCode Sprints'],
        projects: ['150 Hard DSA Problem Solve Matrix & Solution Portfolio']
      },
      {
        number: 2,
        title: 'Enterprise Full Stack Systems Architecture',
        duration: 'Months 4-6',
        topics: ['React 19 & Next.js Production Patterns', 'High Performance Node.js & TypeScript', 'PostgreSQL Schema Design & Query Optimization', 'Redis, Caching & Message Queues'],
        projects: ['Full-Scale Ride-Hailing Backend with Geospatial Indexing']
      },
      {
        number: 3,
        title: 'Low-Level & High-Level System Design (LLD & HLD)',
        duration: 'Month 7',
        topics: ['Object-Oriented Design & SOLID Principles', 'Design Patterns (Factory, Strategy, Observer)', 'Microservices, Rate Limiting & Load Balancers', 'CAP Theorem & Database Sharding'],
        projects: ['Complete System Architecture Design for YouTube & WhatsApp']
      },
      {
        number: 4,
        title: 'Placement Season: Mocks, HR Rounds & Hiring Drives',
        duration: 'Months 8-9',
        topics: ['5+ FAANG Mock Technical Interviews with Detailed Feedback', 'Behavioral STAR Method Preparation', 'GitHub & LinkedIn Profile Makeover', 'Exclusive Job Drives & Offer Negotiations'],
        projects: ['Direct Interviews with Tier-1 Partner Companies']
      }
    ]
  },
  {
    id: 'job-plus-data-analyst',
    title: 'Job+ Data Analyst',
    category: 'job_plus',
    categoryName: 'Job+ Certification',
    tagline: 'Guaranteed placement track in Data Analytics, Business Intelligence & Statistical Modeling.',
    image: '/images/course_job_ready_1790418930750.jpg',
    duration: '6 Months',
    level: 'All Levels',
    format: 'Live Project BootCamp + Placement Assurance',
    rating: 4.91,
    reviewsCount: 1750,
    badge: 'Guaranteed Interviews',
    price: '₹49,999',
    originalPrice: '₹84,999',
    emi: '₹4,166/month',
    avgHike: '140% Avg Hike',
    skills: ['Advanced SQL', 'Python for Data Analysis', 'Power BI & DAX', 'Tableau', 'Pandas & NumPy', 'Statistical Inference', 'Predictive Modeling'],
    highlights: [
      'Guaranteed Minimum 10+ Data Analyst Interviews',
      'Work on Real Anonymized Data Sets from Swiggy, Uber & FinTechs',
      'Tableau Desktop Specialist & Power BI Certification Guidance',
      'Average Starting Package of ₹6 LPA - ₹16 LPA'
    ],
    overview: 'Turn raw data into high-stakes executive business decisions. Master modern analytics tooling, automated BI dashboards, data warehousing, and business storytelling to land a role as a high-impact Data Analyst.',
    mentor: {
      name: 'Pooja Hegde',
      role: 'Lead Business Intelligence Architect',
      company: 'McKinsey & Company',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Advanced SQL, Relational Modeling & Warehousing',
        duration: 'Weeks 1-6',
        topics: ['Complex Joins, Subqueries & CTEs', 'Window Functions & Aggregations', 'Database Normalization & Star Schema', 'Snowflake & BigQuery Foundations'],
        projects: ['E-Commerce Revenue & Retention Analysis SQL Suite']
      },
      {
        number: 2,
        title: 'Python for Data Wrangling & Exploratory Analysis',
        duration: 'Weeks 7-14',
        topics: ['Pandas, NumPy & Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Data Visualization with Seaborn & Matplotlib', 'Automated Excel & CSV Processing'],
        projects: ['Customer Churn Prediction & Factor Analysis']
      },
      {
        number: 3,
        title: 'Executive BI Dashboards with Power BI & Tableau',
        duration: 'Weeks 15-20',
        topics: ['DAX Formulas & Calculated Columns', 'Interactive Drill-down Visualizations', 'Tableau Public Portfolio Building', 'Storytelling with Business Metrics'],
        projects: ['C-Suite Operational KPI Dashboard for Retail Conglomerate']
      },
      {
        number: 4,
        title: 'Business Problem Solving & Interview Placement Sprints',
        duration: 'Weeks 21-24',
        topics: ['Product Sense & Metric Tree Decomposition', 'A/B Testing Statistical Rigor', 'Live Case Study Rounds & Take-Home Assignments', 'Direct Partner Placement Drives'],
        projects: ['Live Business Case Deck & Job Placement Interviews']
      }
    ]
  },
  {
    id: 'job-plus-digital-marketer',
    title: 'Job+ Digital Marketer',
    category: 'job_plus',
    categoryName: 'Job+ Certification',
    tagline: 'Guaranteed placement track for high-growth Performance Marketing & SEO roles with direct agency hiring.',
    image: '/images/course_job_ready_1790418930750.jpg',
    duration: '5 Months',
    level: 'Beginner to Advanced',
    format: 'Live Agency Incubator + Placement Assurance',
    rating: 4.88,
    reviewsCount: 1340,
    badge: 'Guaranteed Placement',
    price: '₹44,999',
    originalPrice: '₹74,999',
    emi: '₹3,750/month',
    avgHike: '130% Avg Hike',
    skills: ['Performance Marketing', 'SEO Audit Pro', 'Google & Meta Ads', 'Conversion Rate Optimization', 'Shopify Marketing', 'HubSpot Inbound'],
    highlights: [
      'Guaranteed 12+ Placement Interviews at Top Digital Agencies & Brands',
      'Direct Hands-on Access to Live Client Accounts with Real Spend',
      'Official Meta Certified Digital Marketing Associate Guidance',
      'Personal Branding & Client Acquisition Pitch Coaching'
    ],
    overview: 'Break into the fast-paced digital marketing ecosystem with guaranteed interviews. Learn the complete playbook from paid media and organic search to customer retention and marketing automation.',
    mentor: {
      name: 'Nitin Sethi',
      role: 'Chief Marketing Officer',
      company: 'Digital Agency Network',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Growth Marketing Fundamentals & Funnel Architecture',
        duration: 'Weeks 1-4',
        topics: ['Pirate Metrics (AARRR)', 'Landing Page Wireframing & Copywriting', 'Psychology of Persuasion & Buying Triggers', 'Competitor Intelligence Analysis'],
        projects: ['High-Converting Landing Page & Campaign Structure']
      },
      {
        number: 2,
        title: 'Full-Spectrum Paid Acquisition (Search & Social)',
        duration: 'Weeks 5-10',
        topics: ['Google Ads Search, Display & YouTube Ads', 'Meta Ads Manager Mastery', 'Audience Retargeting & Lookalikes', 'Budget Scaling Without Margin Erosion'],
        projects: ['Full End-to-End Paid Advertising Campaign for D2C Brand']
      },
      {
        number: 3,
        title: 'Advanced SEO & Technical Organic Growth',
        duration: 'Weeks 11-15',
        topics: ['On-Page, Off-Page & Technical SEO Audits', 'Core Web Vitals Optimization', 'High-Authority Backlink Acquisition Strategies', 'Local SEO & Google Business Optimization'],
        projects: ['Comprehensive Technical & Content SEO Audit']
      },
      {
        number: 4,
        title: 'CRM, Email Automation & Placement Rounds',
        duration: 'Weeks 16-20',
        topics: ['Klaviyo & Mailchimp Automated Workflows', 'Customer Lifetime Value Maximization', 'Portfolio Presentation & Client Pitching', 'Direct Placement Drives with Hiring Partners'],
        projects: ['Live Agency Placement Interviews & Offer Selection']
      }
    ]
  },
  {
    id: 'job-plus-business-analyst',
    title: 'Job+ Business Analyst',
    category: 'job_plus',
    categoryName: 'Job+ Certification',
    tagline: 'Guaranteed placement track bridging business strategy, stakeholder management, and product analytics.',
    image: '/images/course_job_ready_1790418930750.jpg',
    duration: '6 Months',
    level: 'All Levels',
    format: 'Executive Case Method + Placement Assurance',
    rating: 4.89,
    reviewsCount: 1180,
    badge: 'High Placement',
    price: '₹47,999',
    originalPrice: '₹79,999',
    emi: '₹3,999/month',
    avgHike: '135% Avg Hike',
    skills: ['BRD / FRD Documentation', 'Agile & Scrum (JIRA)', 'SQL & Data Visualization', 'Process Flowcharting (BPMN)', 'Stakeholder Management', 'User Stories'],
    highlights: [
      'Guaranteed 10+ Business Analyst Interviews at IT & Consulting Firms',
      'Real-world BRD/FRD Document Portfolio with Industry Mentors',
      'Certified Scrum Master (CSM) Aligned Curriculum',
      'Average CTC Package of ₹7 LPA - ₹18 LPA'
    ],
    overview: 'Become the vital bridge between business vision and technical execution. Learn to elicit requirements, translate business problems into functional technical blueprints, and drive agile delivery.',
    mentor: {
      name: 'Deepak Chopra',
      role: 'Principal Business Consultant',
      company: 'Deloitte Consulting',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Requirements Engineering & SDLC Methodologies',
        duration: 'Weeks 1-5',
        topics: ['Agile vs Waterfall vs Scrum', 'Requirements Elicitation Workshops', 'Writing High-Impact BRD, FRD & PRD Documents', 'Use Case Modeling & BPMN Process Flows'],
        projects: ['Complete BRD & System Architecture Specification for Banking App']
      },
      {
        number: 2,
        title: 'Agile Delivery, JIRA & User Story Mapping',
        duration: 'Weeks 6-11',
        topics: ['Writing Acceptance Criteria (Gherkin Syntax)', 'Sprint Planning & Backlog Grooming in JIRA', 'Managing Scope Creep & Change Requests', 'Conflict Resolution with Tech Teams'],
        projects: ['End-to-End JIRA Sprint Board & Backlog Setup']
      },
      {
        number: 3,
        title: 'Data-Driven Business Analysis & SQL',
        duration: 'Weeks 12-17',
        topics: ['Business SQL Queries for KPI Tracking', 'Power BI Process Bottleneck Dashboards', 'Root Cause Analysis (Fishbone, 5 Whys)', 'Cost-Benefit Analysis & ROI Calculation'],
        projects: ['Operations Process Optimization & Cost Reduction Proposal']
      },
      {
        number: 4,
        title: 'Executive Presentations & Guaranteed Placement Drives',
        duration: 'Weeks 18-24',
        topics: ['Storytelling with Data for C-Level Executives', 'Mock Client Elicitation Interviews', 'Resume Transformation & Case Study Prep', 'Dedicated Placement Drives with Top Consulting Firms'],
        projects: ['Consulting Case Study Pitch & Placement Selection']
      }
    ]
  },
  {
    id: 'job-plus-ui-ux-designer',
    title: 'Job+ UI/UX Designer',
    category: 'job_plus',
    categoryName: 'Job+ Certification',
    tagline: 'Guaranteed placement track for modern Product & UI/UX Designers with production-grade Figma portfolios.',
    image: '/images/course_job_ready_1790418930750.jpg',
    duration: '6 Months',
    level: 'All Levels',
    format: 'Design Studio Lab + Portfolio Sprints + Placement Assurance',
    rating: 4.93,
    reviewsCount: 1590,
    badge: 'Design Portfolio Guaranteed',
    price: '₹48,999',
    originalPrice: '₹82,999',
    emi: '₹4,083/month',
    avgHike: '145% Avg Hike',
    skills: ['Figma Mastery', 'Design Systems & Tokens', 'User Research & Personas', 'Wireframing & Prototyping', 'Usability Testing', 'Micro-interactions', 'Design Handoff'],
    highlights: [
      'Guaranteed 10+ UI/UX & Product Design Interviews',
      'Graduate with 3 Polished, Case-Study-Backed Figma & Web Portfolios',
      'Weekly 1:1 Design Critiques with Design Leads at Uber & Swiggy',
      'Industry-standard UX Research & User Testing Methodologies'
    ],
    overview: 'Design intuitive, aesthetically arresting digital products that users love. From foundational design thinking and user research to advanced Figma component systems and interactive micro-animations.',
    mentor: {
      name: 'Maya Sen',
      role: 'Staff Product Designer',
      company: 'Ex-CRED / Swiggy Design',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Design Thinking, User Research & Information Architecture',
        duration: 'Weeks 1-5',
        topics: ['Double Diamond Design Framework', 'User Interviews & Empathy Mapping', 'Information Architecture & Card Sorting', 'User Flow Diagrams & Low-Fi Wireframing'],
        projects: ['In-Depth Healthcare/Fintech User Research Case Study']
      },
      {
        number: 2,
        title: 'Advanced Figma & Scalable Design Systems',
        duration: 'Weeks 6-12',
        topics: ['Auto Layout 5.0, Components & Variants', 'Design Tokens & Typography Scales', 'Dark Mode & Multi-Brand System Architecture', 'Micro-interactions & Smart Animate'],
        projects: ['Complete Enterprise SaaS Design System in Figma']
      },
      {
        number: 3,
        title: 'High-Fidelity Prototyping & Usability Testing',
        duration: 'Weeks 13-18',
        topics: ['Interactive Click-through Prototypes in Figma & ProtoPie', 'Moderated & Unmoderated Usability Testing', 'Quantitative UX Metrics (SUS, CES, Task Completion Rate)', 'Developer Handoff Best Practices'],
        projects: ['Next-Gen Consumer Mobile App Prototype with Full Testing Report']
      },
      {
        number: 4,
        title: 'Case Study Portfolio Crafting & Placement Drives',
        duration: 'Weeks 19-24',
        topics: ['Structuring Convincing UX Case Studies', 'Personal Portfolio Website Review', 'Design Whiteboard Challenge & App Critique Prep', 'Direct Placement Drives with Tech Unicorns'],
        projects: ['Live Portfolio Launch & Hiring Placement Interviews']
      }
    ]
  },

  // 4. College Certification
  {
    id: 'imt-ghaziabad-digital-marketing',
    title: 'IMT Ghaziabad - Digital Marketing',
    category: 'college',
    categoryName: 'College Certification',
    tagline: 'Premier Executive Certification from IMT Ghaziabad, AACSB accredited top management institution.',
    image: '/images/course_college_cert_1790418918161.jpg',
    duration: '5 Months',
    level: 'Executive',
    format: 'Faculty Masterclasses + On-Campus Immersion Option',
    rating: 4.92,
    reviewsCount: 1420,
    badge: 'Prestigious B-School',
    institute: 'IMT Ghaziabad',
    instituteBadge: 'AACSB Accredited',
    price: '₹64,999',
    originalPrice: '₹99,999',
    emi: '₹5,416/month',
    avgHike: '135% Avg Hike',
    skills: ['Strategic Brand Leadership', 'Digital Disruption', 'MarTech Stack Strategy', 'Consumer Behavior Analytics', 'Global Marketing Strategy'],
    highlights: [
      'Official Certificate of Completion awarded directly by IMT Ghaziabad',
      'Lectures by Distinguished Senior Management Faculty & Industry Veterans',
      'Executive Alumni Status & Networking Access to 15,000+ Leaders',
      'Optional 2-Day On-Campus Immersion & Graduation Ceremony at Ghaziabad'
    ],
    overview: 'Accelerate your leadership trajectory with an executive qualification from IMT Ghaziabad, consistently ranked among India’s top 10 business schools. Master the intersection of strategic management and digital marketing innovation.',
    mentor: {
      name: 'Prof. Rajesh K. Vats',
      role: 'Professor of Marketing',
      company: 'IMT Ghaziabad',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Strategic Marketing in the Digital Economy',
        duration: 'Month 1',
        topics: ['Digital Transformation of Business Models', 'Evolving Consumer Journeys in Omnichannel Markets', 'Competitive Advantage & Value Creation'],
        projects: ['Strategic Digital Transformation Analysis for Legacy Enterprise']
      },
      {
        number: 2,
        title: 'Data-Driven Consumer Insights & Analytics',
        duration: 'Month 2',
        topics: ['Customer Segmentation & Predictive Analytics', 'Attribution Modeling & Marketing ROI', 'Social Listening & Brand Health Metrics'],
        projects: ['Market Basket Analysis & Customer Retention Modeling']
      },
      {
        number: 3,
        title: 'Integrated Digital Campaigns & Media Management',
        duration: 'Months 3-4',
        topics: ['Performance Marketing Optimization', 'Content Marketing & Brand Resonance', 'E-commerce Growth Sprints', 'Budget Allocation & Governance'],
        projects: ['Comprehensive Strategic Marketing Plan for High-Growth Venture']
      },
      {
        number: 4,
        title: 'Executive Capstone Project & Leadership Immersion',
        duration: 'Month 5',
        topics: ['C-Suite Marketing Leadership', 'Ethics, Privacy & Regulatory Compliance', 'Executive Presentation to Faculty Panel', 'On-Campus Graduation & Convocation'],
        projects: ['Capstone Strategic Review Evaluated by IMT Ghaziabad Faculty']
      }
    ]
  },
  {
    id: 'iit-delhi-ai-ml',
    title: 'IIT Delhi - AI & Machine Learning',
    category: 'college',
    categoryName: 'College Certification',
    tagline: 'Flagship academic program in Advanced AI & Machine Learning curated with elite IIT Delhi faculty.',
    image: '/images/course_college_cert_1790418918161.jpg',
    duration: '6 Months',
    level: 'Executive & Advanced',
    format: 'Weekend Live Sessions by IIT Faculty + Hands-on Research Labs',
    rating: 4.98,
    reviewsCount: 3100,
    badge: 'Premier Academic Gold Standard',
    institute: 'IIT Delhi',
    instituteBadge: 'Institute of National Importance',
    price: '₹84,999',
    originalPrice: '₹1,39,999',
    emi: '₹7,083/month',
    avgHike: '170% Avg Hike',
    skills: ['Mathematical Foundations of AI', 'Statistical Machine Learning', 'Deep Neural Networks', 'Computer Vision', 'Natural Language Processing', 'AI Research Ethics'],
    highlights: [
      'Joint Executive Certificate bearing IIT Delhi Academic Seal',
      'Curriculum designed and delivered by Department of Computer Science & AI',
      'Access to IIT Delhi Research Papers, High-Compute Labs and Alumni Guild',
      'Eligible for Executive Networking Retreat at IIT Delhi Campus'
    ],
    overview: 'Experience the unmatched intellectual rigor of Indian Institute of Technology Delhi (IIT Delhi). Learn the fundamental mathematical principles, algorithmic mechanics, and bleeding-edge research driving the artificial intelligence revolution.',
    mentor: {
      name: 'Prof. Arvind Subramanian, Ph.D.',
      role: 'Chair Professor of Machine Learning',
      company: 'IIT Delhi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Rigorous Mathematical Foundations of Machine Learning',
        duration: 'Weeks 1-5',
        topics: ['Vector Spaces, Eigenvalues & SVD', 'Multivariate Calculus & Convex Optimization', 'Probability Distributions, Bayes Theorem & Estimation', 'Information Theory & Entropy'],
        projects: ['Mathematical Derivation & Custom Gradient Descent Implementation']
      },
      {
        number: 2,
        title: 'Statistical Learning Theory & Advanced Classifiers',
        duration: 'Weeks 6-11',
        topics: ['Support Vector Machines & Kernel Methods', 'Ensemble Methods (Random Forests, XGBoost)', 'Unsupervised Learning & Dimensionality Reduction', 'PAC Learning & Generalization Bounds'],
        projects: ['High-Dimensional Genomic Classification Engine']
      },
      {
        number: 3,
        title: 'Deep Learning Architectures & Modern Neural Networks',
        duration: 'Weeks 12-18',
        topics: ['Optimization: Adam, RMSProp & Regularization', 'Convolutional Networks for Medical Vision', 'Sequence Models, RNNs, LSTMs & Attention Mechanism', 'Transformer Architecture Deep Dive'],
        projects: ['Deep Vision Diagnostics System with PyTorch']
      },
      {
        number: 4,
        title: 'Applied Research Capstone & Faculty Evaluation',
        duration: 'Weeks 19-24',
        topics: ['Generative Adversarial Networks & Diffusion', 'Reinforcement Learning & Policy Gradients', 'AI Safety, Bias & Explainability (XAI)', 'Defense of Capstone Research Paper'],
        projects: ['Peer-Reviewed AI Research Paper & Executive Certificate']
      }
    ]
  },
  {
    id: 'xlri-business-management',
    title: 'XLRI - Business Management',
    category: 'college',
    categoryName: 'College Certification',
    tagline: 'Comprehensive Executive Business Management program from India’s oldest and most revered B-School.',
    image: '/images/course_college_cert_1790418918161.jpg',
    duration: '11 Months',
    level: 'Senior Executive',
    format: 'Interactive Virtual Classroom + 3-Day XLRI Campus Immersion',
    rating: 4.95,
    reviewsCount: 2200,
    badge: 'Elite Leadership',
    institute: 'XLRI Jamshedpur',
    instituteBadge: 'India’s #1 Private B-School',
    price: '₹1,24,999',
    originalPrice: '₹1,89,999',
    emi: '₹10,416/month',
    avgHike: '150% Avg Hike',
    skills: ['Strategic Management', 'Corporate Finance', 'Organizational Behavior', 'Supply Chain Excellence', 'Leadership & People Management', 'Digital Transformation'],
    highlights: [
      'Prestigious Executive Certification from XLRI Jamshedpur',
      'Exclusive XLRI Executive Alumni Status with Global Chapter Membership',
      '3-Day Mandatory Campus Immersion in Jamshedpur with Faculty',
      'Designed for Managers and Leaders aiming for CXO / Director roles'
    ],
    overview: 'Transform from a functional specialist into a visionary enterprise leader with XLRI Jamshedpur. Master financial decision-making, strategic game theory, organizational transformation, and market expansion.',
    mentor: {
      name: 'Dr. Madhukar Shukla',
      role: 'Dean of Executive Programs',
      company: 'XLRI Jamshedpur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Strategic Thinking, Competitive Dynamics & Corporate Strategy',
        duration: 'Months 1-3',
        topics: ['Industry Structure & Porter’s Five Forces', 'Resource-Based View of the Firm', 'Mergers, Acquisitions & Strategic Alliances', 'Corporate Governance & Ethical Leadership'],
        projects: ['Comprehensive Strategic Turnaround Plan for Conglomerate']
      },
      {
        number: 2,
        title: 'Financial Analysis, Corporate Finance & Value Creation',
        duration: 'Months 4-6',
        topics: ['Interpreting Balance Sheets & Cash Flow Statements', 'Capital Budgeting & WACC Calculations', 'Valuation Methodologies (DCF, Multiples)', 'Risk Management & Capital Structure'],
        projects: ['Corporate Valuation Model & Capital Allocation Strategy']
      },
      {
        number: 3,
        title: 'Operations Excellence, Supply Chain & Digital Strategy',
        duration: 'Months 7-9',
        topics: ['Six Sigma & Lean Methodologies', 'Global Supply Chain Risk Resilience', 'Digital Disruption & Platform Ecosystems', 'Managing Change & Organizational Culture'],
        projects: ['Global Supply Chain Re-Engineering Blueprint']
      },
      {
        number: 4,
        title: 'Leadership Lab, On-Campus Immersion & Capstone',
        duration: 'Months 10-11',
        topics: ['High-Stakes Negotiation & Conflict Resolution', 'Executive Presence & Stakeholder Influence', '3-Day Jamshedpur Campus Immersion', 'Convocation & Alumni Induction'],
        projects: ['Board-Level Enterprise Transformation Strategy Defense']
      }
    ]
  },
  {
    id: 'iim-calcutta-data-analytics',
    title: 'IIM Calcutta - Data Analytics',
    category: 'college',
    categoryName: 'College Certification',
    tagline: 'Advanced Analytics for Business Decision Making by the premier quantitative management institute of India.',
    image: '/images/course_college_cert_1790418918161.jpg',
    duration: '10 Months',
    level: 'Executive',
    format: 'Live Executive Masterclasses + 4-Day IIM Calcutta Campus Visit',
    rating: 4.97,
    reviewsCount: 2680,
    badge: 'Triple Crown Accredited (AACSB, AMBA, EQUIS)',
    institute: 'IIM Calcutta',
    instituteBadge: 'Triple Crown B-School',
    price: '₹1,15,999',
    originalPrice: '₹1,75,999',
    emi: '₹9,666/month',
    avgHike: '160% Avg Hike',
    skills: ['Econometric Modeling', 'Big Data Analytics', 'Predictive Modeling with R/Python', 'Supply Chain Analytics', 'Financial Risk Analytics', 'Prescriptive Optimization'],
    highlights: [
      'Executive Certificate in Data Analytics directly from IIM Calcutta',
      'IIM Calcutta Executive Education Alumni Status & Lifelong Network',
      '4-Day Residential Campus Immersion at Joka, Kolkata',
      'Real Big-Data Consulting Projects Supervised by IIM Professors'
    ],
    overview: 'Harness the formidable quantitative legacy of IIM Calcutta, Asia’s foremost management institute for analytics and finance. Learn to extract strategic insights from complex datasets and drive enterprise optimization.',
    mentor: {
      name: 'Prof. Soumyendra Ghosh',
      role: 'Professor of Operations & Analytics',
      company: 'IIM Calcutta (Joka)',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
    },
    modules: [
      {
        number: 1,
        title: 'Statistical Thinking & Managerial Economics',
        duration: 'Months 1-2',
        topics: ['Probability Distributions & Hypothesis Testing', 'Multiple Linear & Logistic Regression', 'Time Series Forecasting & Seasonality', 'Econometric Analysis with R'],
        projects: ['Macroeconomic Forecasting Model for FMCG Demand']
      },
      {
        number: 2,
        title: 'Machine Learning & Predictive Business Analytics',
        duration: 'Months 3-5',
        topics: ['Supervised Learning Algorithms (Trees, Bagging, Boosting)', 'Customer Lifetime Value & Churn Prediction', 'Text Analytics & Sentiment Mining', 'Unsupervised Clustering & Market Segmentation'],
        projects: ['Financial Credit Risk & Default Prediction Model']
      },
      {
        number: 3,
        title: 'Big Data Ecosystems, Cloud Analytics & Prescriptive Optimization',
        duration: 'Months 6-8',
        topics: ['Apache Spark & Distributed Computing', 'Linear & Integer Programming for Logistics', 'Dynamic Pricing Algorithms', 'A/B Testing & Causal Inference in Management'],
        projects: ['Supply Chain Route & Inventory Optimization Algorithm']
      },
      {
        number: 4,
        title: 'Capstone Consulting Project & Joka Campus Immersion',
        duration: 'Months 9-10',
        topics: ['Translating Analytics into Boardroom Action', 'Executive Communication of Quantitative Insights', '4-Day In-Person Immersion at IIM Calcutta Campus', 'Graduation Ceremony & Alumni Badge'],
        projects: ['Comprehensive Enterprise Analytics Capstone Evaluated by IIM Faculty']
      }
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'tech',
    name: 'Tech Certification',
    description: 'Industry-standard technical qualifications in Full Stack, Data Science, ML, Cloud & AI systems.',
    count: 5,
    highlight: 'Top Tech Placements'
  },
  {
    id: 'marketing',
    name: 'Marketing with AI',
    description: 'Revolutionize customer growth, paid media, organic reach, and brand communications using modern AI tooling.',
    count: 4,
    highlight: '₹10k Live Ad Budget'
  },
  {
    id: 'job_plus',
    name: 'Job+ Certification',
    description: 'Outcome-guaranteed bootcamps with 100% money-back agreement and dedicated corporate placement drives.',
    count: 5,
    highlight: '100% Placement Guarantee'
  },
  {
    id: 'college',
    name: 'College Certification',
    description: 'Executive credentials awarded directly by India’s top institutions: IIT Delhi, IIM Calcutta, XLRI & IMT.',
    count: 4,
    highlight: 'Executive Alumni Status'
  }
];

export const HIRING_PARTNERS = [
  { 
    name: 'Google', 
    category: 'Big Tech',
    logoType: 'google'
  },
  { 
    name: 'Microsoft', 
    category: 'Big Tech',
    logoType: 'microsoft'
  },
  { 
    name: 'Amazon', 
    category: 'Cloud & Tech',
    logoType: 'amazon'
  },
  { 
    name: 'Meta', 
    category: 'AI & Social',
    logoType: 'meta'
  },
  { 
    name: 'Swiggy', 
    category: 'Consumer Tech',
    logoType: 'swiggy'
  },
  { 
    name: 'Zomato', 
    category: 'Food Tech',
    logoType: 'zomato'
  },
  { 
    name: 'Razorpay', 
    category: 'FinTech',
    logoType: 'razorpay'
  },
  { 
    name: 'CRED', 
    category: 'FinTech Unicorn',
    logoType: 'cred'
  },
  { 
    name: 'Adobe', 
    category: 'Creative AI',
    logoType: 'adobe'
  },
  { 
    name: 'Goldman Sachs', 
    category: 'Investment Bank',
    logoType: 'goldman'
  },
  { 
    name: 'Flipkart', 
    category: 'E-Commerce',
    logoType: 'flipkart'
  },
  { 
    name: 'Deloitte', 
    category: 'Strategy & Cloud',
    logoType: 'deloitte'
  }
];

export const ALUMNI_STORIES = [
  {
    name: 'Aakash Verma',
    role: 'Senior AI Engineer at Microsoft',
    formerRole: 'Junior Support Engineer (3.2 LPA)',
    hike: '340% Salary Hike',
    program: 'Full Stack Development with AI',
    quote: 'The AIYUG curriculum was miles ahead of typical bootcamps. Learning agentic RAG and building production microservices gave me the exact skills needed to ace the Microsoft technical loops.',
    avatar: '/images/testimonial-avatar.svg'
  },
  {
    name: 'Priyanka Sen',
    role: 'Growth Marketing Lead at Swiggy',
    formerRole: 'Traditional Content Writer (4 LPA)',
    hike: '220% Salary Hike',
    program: 'Digital Marketing with AI',
    quote: 'Executing live ad campaigns with real budget during the program gave me actual ROAS metrics to show on my resume. Landed 3 offers in two weeks!',
    avatar: '/images/testimonial-avatar.svg'
  },
  {
    name: 'Rahul Singhal',
    role: 'Cloud Architect at Amazon AWS',
    formerRole: 'System Admin (5 LPA)',
    hike: '190% Salary Hike',
    program: 'Cloud Computing & DevOps',
    quote: 'The hands-on Kubernetes clusters and Terraform real-world chaos experiments made the AWS Solutions Architect interview feel like second nature.',
    avatar: '/images/testimonial-avatar.svg'
  }
];

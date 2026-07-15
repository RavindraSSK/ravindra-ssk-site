export const fullName = "Ravindra Siva Sai Kumar Medicharla";
export const displayName = "Ravindra SSK";
export const email = "ravindrassk1304@gmail.com";
export const location = "St. Louis, Missouri, USA";

export const resumePath: string | null = "/resume/Ravindra_SSK_Resume.pdf";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/RavindraSSK" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ravindra-ssk-medicharla-45ba44123/" },
  { label: "Email", href: `mailto:${email}` },
] as const;

export const heroTags = [
  "LLM Evaluation",
  "Computer Vision",
  "Explainable AI",
  "ML Deployment",
  "Graduate AI",
] as const;

export const profileCards = [
  {
    label: "Current Role",
    title: "Handshake AI",
    copy: "AI Trainer - LLM Evaluation & Model Assessment",
  },
  {
    label: "Previous Research",
    title: "AI-CHESS Lab",
    copy: "GeoAI, computer vision, deep learning, and satellite imagery research",
  },
  {
    label: "Education",
    title: "Saint Louis University",
    copy: "M.S. Artificial Intelligence - GPA 3.83 - AI coursework plus B.Tech foundation",
  },
  {
    label: "Location",
    title: "St. Louis, Missouri",
    copy: "Based in the United States",
  },
] as const;

export const stats = [
  {
    label: "Current focus",
    value: "LLM Evaluation",
    copy: "Blind response evaluation, factual accuracy, instruction following, and model failure-mode analysis.",
  },
  {
    label: "Healthcare AI",
    value: "0.9665 ROC-AUC",
    copy: "MediTrust final selected model: logistic regression with SHAP explainability.",
  },
  {
    label: "Object detection",
    value: "0.71 mAP@0.5",
    copy: "Campus-Objects detection pipeline trained on 3,000+ annotated campus images.",
  },
  {
    label: "Experience",
    value: "3+ Years",
    copy: "Experience spanning AI evaluation, machine learning research, statistics, data analytics, software projects, and technical problem-solving.",
    heading: "3+ Years of Analytical & Technical Experience",
  },
] as const;

export type Project = {
  slug: "meditrust" | "campus-objects" | "snaptune";
  title: string;
  subtitle: string;
  timeframe?: string;
  description: string;
  result?: string;
  tags: readonly string[];
  github?: string;
  demo?: string;
  caseStudyHref: string;
  sections: readonly {
    title: string;
    body: readonly string[];
  }[];
};

export const projects: readonly Project[] = [
  {
    slug: "meditrust",
    title: "MediTrust",
    subtitle: "Explainable AI healthcare platform",
    timeframe: "Spring 2026",
    description:
      "Explainable cardiovascular risk prediction platform using logistic regression, SHAP, FastAPI, PostgreSQL, Docker, and AWS, achieving 0.9665 ROC-AUC.",
    result: "0.9665 ROC-AUC",
    tags: ["Logistic Regression", "SHAP", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    caseStudyHref: "/portfolio/meditrust",
    sections: [
      {
        title: "Project summary",
        body: [
          "MediTrust is an explainable AI healthcare risk prediction platform for cardiovascular risk assessment.",
          "The final selected model is Logistic Regression, supported by SHAP explanations and a full-stack deployment architecture.",
        ],
      },
      {
        title: "Dataset",
        body: [
          "Dataset: UCI Cleveland Heart Disease dataset.",
          "The dataset contains 303 rows and 13 input features, split into 242 training records and 61 test records.",
        ],
      },
      {
        title: "Technical approach",
        body: [
          "The platform combines a Logistic Regression model, SHAP explainability, a FastAPI backend, PostgreSQL storage, Docker packaging, Gemini-generated summaries, and AWS EC2 deployment.",
          "XGBoost may have been evaluated during experimentation, but it is not presented as the final selected model.",
        ],
      },
      {
        title: "Evaluation",
        body: ["Final selected model: Logistic Regression.", "ROC-AUC: 0.9665. Accuracy: 0.8852. F1 Score: 0.8814."],
      },
      {
        title: "Explainability and deployment",
        body: [
          "SHAP explainability is used to support interpretable cardiovascular-risk outputs.",
          "The deployment stack includes FastAPI, PostgreSQL, Docker, Gemini-generated summaries, and AWS EC2.",
        ],
      },
      {
        title: "Challenges and limitations",
        body: [
          "The dataset is small, so the project should be treated as an educational and engineering portfolio system rather than a clinical decision product.",
        ],
      },
    ],
  },
  {
    slug: "campus-objects",
    title: "Campus-Objects",
    subtitle: "Object detection using LW-DETR",
    timeframe: "Fall 2025",
    description:
      "Object detection project using LW-DETR and PyTorch on 3,000+ annotated campus images, achieving 0.71 mAP@0.5.",
    result: "0.71 mAP@0.5",
    tags: ["PyTorch", "LW-DETR", "Object Detection", "COCO", "Computer Vision"],
    caseStudyHref: "/portfolio/campus-objects",
    sections: [
      {
        title: "Project summary",
        body: [
          "Campus-Objects is a multi-class object detection project built around annotated campus imagery and LW-DETR.",
        ],
      },
      {
        title: "Dataset",
        body: ["The project uses 3,000+ annotated campus images prepared for object detection workflows."],
      },
      {
        title: "Technical approach",
        body: [
          "The pipeline uses PyTorch and LW-DETR for object detection, with dataset preparation aligned to COCO-style training workflows.",
        ],
      },
      {
        title: "Evaluation and results",
        body: ["The model achieved 0.71 mAP@0.5 on the available evaluation setup."],
      },
      {
        title: "Challenges and limitations",
        body: [
          "The repository content does not provide enough detail to state deployment status, production usage, or per-class performance.",
        ],
      },
    ],
  },
  {
    slug: "snaptune",
    title: "SnapTune",
    subtitle: "Multimodal music recommender",
    timeframe: "Spring 2025",
    description:
      "Multimodal music recommendation app described in the existing portfolio as combining image captioning, mood inference, and Spotify search.",
    tags: ["Streamlit", "BLIP", "DistilGPT2", "Spotify API", "Multimodal AI"],
    caseStudyHref: "/portfolio/snaptune",
    sections: [
      {
        title: "Project summary",
        body: [
          "SnapTune is a multimodal music recommender that uses image context to support music recommendation workflows.",
        ],
      },
      {
        title: "Technical approach",
        body: [
          "Existing portfolio content describes BLIP captioning, GPT-based mood inference, DistilGPT2, Spotify API integration, and a Streamlit interface.",
        ],
      },
      {
        title: "Challenges and limitations",
        body: [
          "No repository-local source code or live demo URL is available in this workspace, so this case study avoids unverifiable metrics and deployment claims.",
        ],
      },
      {
        title: "Technology stack",
        body: ["Streamlit, BLIP, DistilGPT2, Spotify API, and multimodal recommendation logic are referenced in current site content."],
      },
    ],
  },
] as const;

export const experiences = [
  {
    org: "Handshake AI",
    role: "AI Trainer - LLM Evaluation & Model Assessment",
    dates: "April 2026 - Present",
    location: "Remote",
    badge: "HS",
    badgeClass: "logo-badge--handshake",
    bullets: [
      "Conduct blind evaluation of large language model responses across reasoning quality, factual accuracy, instruction following, and user experience.",
      "Review reference solutions and analyze prompt-response quality to identify model failure modes.",
      "Support human-feedback workflows without exposing confidential projects, private tests, or proprietary benchmark details.",
    ],
  },
  {
    org: "AI-CHESS Lab, Saint Louis University",
    role: "Graduate Researcher - GeoAI, Computer Vision & Deep Learning",
    dates: "October 2025 - March 2026",
    location: "St. Louis, Missouri",
    badge: "SLU",
    badgeClass: "logo-badge--slu",
    label: "Previous Research",
    bullets: [
      "Worked with satellite imagery, CNNs, GANs, and attention mechanisms for geospatial machine learning research.",
      "Used PyTorch, OpenCV, Rasterio, and GeoPandas across preprocessing, training, and analysis workflows.",
      "Explored shadow removal and spatial feature extraction for downstream geospatial analytics.",
    ],
  },
  {
    org: "Chegg India",
    role: "Statistics & Data Analytics Specialist - Mathematics",
    dates: "April 2021 - August 2023",
    location: "Remote",
    badge: "CG",
    badgeClass: "logo-badge--chegg",
    bullets: [
      "Produced technical solutions across probability, statistics, data interpretation, and analytical problem-solving.",
      "Applied R, Minitab, quality review, and step-by-step statistical reasoning across 500+ technical solutions.",
    ],
  },
] as const;

export const additionalExperiences = [
  {
    org: "Excelerate",
    role: "Data Visualization Associate - Project Lead Internship",
    dates: "February 2025 - March 2025",
    location: "Remote",
    badge: "EX",
    bullets: [
      "Managed an end-to-end data pipeline for 5,000+ student engagement records.",
      "Built interactive dashboards and KPI reporting in Google Data Studio for global stakeholders.",
      "Translated analysis into actionable insights for data-driven decision making.",
    ],
  },
  {
    org: "Salesforce",
    role: "Salesforce Administrator & Developer Internship",
    dates: "August 2023 - October 2023",
    location: "Remote",
    badge: "SF",
    bullets: [
      "Automated CRM workflows using Salesforce Flow and Process Builder.",
      "Customized data models, validation rules, access controls, and SOQL/SOSL-based reporting solutions.",
    ],
  },
  {
    org: "Indian Institute of Technology Bombay",
    role: "Research Intern - Terrestrial Laser Scanning & Spatial Reconstruction",
    dates: "June 2019 - August 2019",
    location: "Mumbai, India",
    badge: "IIT",
    bullets: [
      "Conducted research on terrestrial laser scanning and 3D point-cloud processing for spatial reconstruction.",
      "Processed large-scale spatial datasets using registration, filtering, and feature extraction workflows.",
      "Applied computer vision, spatial analytics, and geometric reconstruction concepts.",
    ],
  },
] as const;

export const education = {
  degree: "M.S. in Artificial Intelligence",
  school: "Saint Louis University",
  dates: "January 2025 - December 2026",
  gpa: "GPA: 3.83/4.0",
  location,
};

export const msCoursework = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Databases",
  "Software Development",
  "AI in Modern Software Development",
  "Object-Oriented Programming & Data Structures",
] as const;

export const educationHistory = [
  {
    level: "Graduate",
    degree: "M.S. in Artificial Intelligence",
    school: "Saint Louis University",
    location: "St. Louis, Missouri, USA",
    dates: "January 2025 - December 2026",
    result: "GPA: 3.83/4.0",
    badge: "SLU",
    notes: "Graduate coursework focused on AI systems, ML foundations, deep learning, computer vision, NLP, databases, and modern software development.",
  },
  {
    level: "Undergraduate",
    degree: "B.Tech in Civil Engineering",
    school: "Vel Tech R&D Institute of Science & Tech",
    location: "Chennai, India",
    dates: "July 2016 - August 2020",
    result: "GPA: 3.69/4.0",
    badge: "VT",
    notes: "Engineering foundation with research exposure in terrestrial laser scanning, spatial analytics, and infrastructure-focused problem solving.",
  },
  {
    level: "Intermediate",
    degree: "Intermediate - MPC",
    school: "Sasi Junior College",
    location: "Velivennu, India",
    dates: "Passed 2016",
    result: "967/1000",
    badge: "MPC",
    notes: "Mathematics, Physics, and Chemistry track.",
  },
  {
    level: "Secondary School",
    degree: "SSC",
    school: "Sasi English Medium School",
    location: "Velivennu, India",
    dates: "Passed 2016",
    result: "9.3/10",
    badge: "SSC",
    notes: "Secondary school academic foundation.",
  },
] as const;

export const skillGroups = [
  {
    title: "AI and evaluation",
    skills: ["LLM evaluation", "Prompt analysis", "Instruction following", "Factual accuracy", "Failure-mode analysis"],
  },
  {
    title: "Machine learning",
    skills: ["Logistic Regression", "PyTorch", "Computer Vision", "Object Detection", "Explainable AI", "SHAP"],
  },
  {
    title: "Engineering",
    skills: ["FastAPI", "PostgreSQL", "Docker", "AWS EC2", "Python", "Streamlit"],
  },
  {
    title: "GeoAI and data",
    skills: ["Rasterio", "GeoPandas", "OpenCV", "Satellite imagery", "Statistics", "R", "Minitab"],
  },
] as const;

export const publications = [
  {
    title: "BIM Usage in Construction Industry: Modal Integration and Clash Detection in Building Design",
    meta: "Conference paper and poster",
    detail: "ResearchGate DOI: 10.13140/RG.2.2.17527.24486",
  },
  {
    title: "As-Built Mapping Using Terrestrial Laser Scanner (TLS)",
    meta: "Published via Author Cafe and ResearchGate",
    detail: "ResearchGate DOI: 10.13140/RG.2.2.19204.96645",
  },
  {
    title: "TLS hardware and data-processing user manuals",
    meta: "Technical documentation",
    detail: "Developed manuals adopted as standard lab reference at IIT Bombay.",
  },
] as const;

export const certifications = [
  "AWS Certified Machine Learning Engineer - Associate",
  "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
  "NVIDIA DLI - Introduction to Deploying RAG Pipelines at Scale",
  "NVIDIA DLI - Fundamentals of Accelerated Computing with CUDA Python",
  "IBM Data Science Professional Certificate",
] as const;

export const awards = [
  {
    title: "Quality Champ - Chegg India",
    detail: "Recognized for outstanding accuracy and subject depth in Statistics & Probability.",
  },
  {
    title: "IAS Summer Research Fellowship - IIT Bombay",
    detail: "Selected by the Indian Academy of Sciences for research at IIT Bombay in 2019.",
  },
  {
    title: "Vel Tech Mahatma Gandhi Scholarship",
    detail: "Awarded for academic excellence; covered 75% of undergraduate tuition across the B.Tech program.",
  },
] as const;

export const leadership = [
  "Captained university handball team across inter-university tournaments, including All India University South Zone Handball Tournament.",
  "Collegiate shot-put athlete with multiple first-place finishes.",
  "Student Coordinator & Office Bearer - Indian Concrete Institute.",
  "Volunteer - National Service Scheme.",
  "Currently pursuing NASM Certified Personal Trainer certification.",
] as const;

export const latestPublication = {
  title: "The U.S. AI Job Market: A Complete Career Guide",
  href: "/explore/us-ai-job-market-guide",
  copy: "A practical guide to AI roles, skills, salaries, and hiring paths for students and early-career builders.",
};

export const beyondAi = [
  { title: "Photography", href: "/explore/photography", copy: "Visual studies and image-led observation." },
  { title: "Fitness & Health", href: "/explore/fitness-health", copy: "Training, consistency, and recovery systems." },
  { title: "Music", href: "/explore/music", copy: "Listening notes, playlists, and discovery." },
] as const;

export function getProject(slug: Project["slug"]) {
  return projects.find((project) => project.slug === slug);
}

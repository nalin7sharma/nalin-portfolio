import {
  Award,
  Binary,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

export const personal = {
  name: "Nalin Sharma",
  role: "AI/ML Engineer & Computer Science Student",
  location: "Delhi, India",
  email: "2005nalinsharma@gmail.com",
  phone: "+91 9310827546",
  website: "https://www.nalinsharma.co.in/",
  resume: "/resume/Nalin-Sharma-AI-ML.pdf",
  intro:
    "Motivated Computer Science student passionate about AI products, software engineering, and user-focused problem solving.",
  summary:
    "B.Tech CSE-AI student building applied AI systems across NLP, computer vision, healthcare AI, IoT data streams, and secure product engineering. Nalin focuses on turning models into reliable systems with clean pipelines, strong product thinking, and real-world impact.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/nalin7sharma",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nalin7sharma/",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:2005nalinsharma@gmail.com",
      icon: Mail,
    },
    {
      label: "Website",
      href: "https://www.nalinsharma.co.in/",
      icon: ExternalLink,
    },
  ],
  researchProfiles: [
    {
      label: "IEEE Collabratec",
      href: "https://ieee-collabratec.ieee.org/app/p/nalin7sharma",
    },
    {
      label: "ORCiD",
      href: "https://orcid.org/0009-0004-0830-6044",
    },
  ],
};

export const rotatingTitles = [
  "AI/ML Engineer",
  "AI Product Builder",
  "Computer Vision Developer",
  "NLP Engineer",
  "Full Stack AI Developer",
  "Research Enthusiast",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "4", suffix: "+", label: "AI projects shipped" },
  { value: "30", suffix: "+", label: "tools and technologies" },
  { value: "17", suffix: "", label: "certifications" },
  { value: "1", suffix: "", label: "accepted publication" },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    accent: "from-sky-400 to-cyan-300",
    skills: [
      { name: "Python", level: 92 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 82 },
      { name: "Bash", level: 62 },
    ],
  },
  {
    title: "AI/ML",
    icon: BrainCircuit,
    accent: "from-violet-400 to-fuchsia-300",
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "PyTorch", level: 78 },
      { name: "Scikit-learn", level: 84 },
      { name: "Hugging Face", level: 79 },
      { name: "Transformers", level: 82 },
      { name: "NLP", level: 84 },
      { name: "Computer Vision", level: 86 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Network,
    accent: "from-blue-400 to-indigo-300",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 73 },
      { name: "AWS Basics", level: 66 },
      { name: "GCP", level: 63 },
      { name: "Grafana", level: 62 },
      { name: "Prometheus", level: 60 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-emerald-300 to-cyan-300",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 72 },
      { name: "MySQL", level: 76 },
      { name: "InfluxDB", level: 70 },
    ],
  },
  {
    title: "Web & Tools",
    icon: Cpu,
    accent: "from-cyan-300 to-blue-400",
    skills: [
      { name: "Git", level: 82 },
      { name: "GitHub", level: 84 },
      { name: "Selenium", level: 72 },
      { name: "Scrapy", level: 70 },
    ],
  },
  {
    title: "AI Specializations",
    icon: Binary,
    accent: "from-fuchsia-300 to-sky-300",
    skills: [
      { name: "LLM Engineering", level: 78 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Risk Detection", level: 79 },
      { name: "Image Segmentation", level: 80 },
      { name: "Face Recognition", level: 82 },
      { name: "YOLO Object Detection", level: 84 },
    ],
  },
];

export const experience = [
  {
    role: "AI/ML Intern",
    company: "Infosys Springboard Internship 5.0",
    period: "October 25 - December 31, 2024",
    location: "India",
    project: "MediScan: AI-Powered Medical Image Analysis for Disease Diagnosis",
    certificate:
      "https://nalinsharma.co.in/certificates/NalinSharmaInfosysinternshipcertificate.pdf",
    highlights: [
      "Developed an AI-powered eye disease detection workflow for early diagnostic support.",
      "Implemented preprocessing and image segmentation techniques to improve model performance.",
      "Created feature extraction and model training pipelines with scalable deployment in mind.",
      "Applied statistical analysis to healthcare data for stronger diagnostic insights.",
    ],
    metrics: ["Healthcare AI", "Image segmentation", "ML pipelines", "Early detection"],
    stack: ["Python", "Computer Vision", "Segmentation", "Healthcare Data", "ML Pipelines"],
  },
];

export const projectFilters = ["All", "NLP", "Computer Vision", "IoT", "Security"];

export const projects = [
  {
    title: "AetherMind",
    category: "NLP",
    image: "/assets/projects/aethermind.svg",
    github: "https://github.com/nalin7sharma/AetherMind",
    live: "",
    featured: true,
    problem:
      "Mental health support products need fast intent detection, crisis classification, and secure handling of sensitive conversations.",
    summary:
      "AI-powered mental health support system using transformer-based NLP for intent and risk detection.",
    features: [
      "Transformer/BERT-based NLP",
      "Intent detection and crisis risk classification",
      "JWT authentication with role-based access control",
      "AES encrypted secure data pipelines",
    ],
    architecture: [
      "Containerized Python services",
      "PostgreSQL persistence with Redis-ready session workflows",
      "Kubernetes-oriented deployment structure",
    ],
    stack: ["Python", "NLP", "Docker", "Kubernetes", "PostgreSQL", "JWT", "AES"],
  },
  {
    title: "Cloudburst Early Warning System",
    category: "IoT",
    image: "/assets/projects/cloudburst.svg",
    github: "https://github.com/nalin7sharma/Cloudburst-Early-Warning-and-Alarm-System",
    live: "",
    featured: true,
    problem:
      "Remote hilly regions need reliable early warning systems that can process weather anomalies even with unstable power or connectivity.",
    summary:
      "Distributed AI + IoT disaster prediction system for cloudburst risk monitoring.",
    features: [
      "ConvLSTM anomaly detection on multi-sensor weather streams",
      "MQTT ingestion with InfluxDB time-series storage",
      "Streamlit monitoring interface and multi-channel alerts",
      "Hybrid power management with redundant communication",
    ],
    architecture: [
      "Raspberry Pi edge nodes",
      "LoRa communication path for remote reliability",
      "Off-grid-first sensor processing pipeline",
    ],
    stack: ["TensorFlow", "PyTorch", "MQTT", "InfluxDB", "Raspberry Pi", "LoRa", "Streamlit"],
  },
  {
    title: "YOLO Real-Time Object Detection",
    category: "Computer Vision",
    image: "/assets/projects/yolo.svg",
    github: "https://github.com/nalin7sharma/Real-Time-Object-Detection-Using-YOLO",
    live: "",
    featured: false,
    problem:
      "Live video analytics need fast detections with clean boxes, accurate labels, and stable frame-by-frame inference.",
    summary:
      "Real-time object detection system using YOLOv3 for webcam and video streams.",
    features: [
      "YOLOv3 model integration with OpenCV",
      "Live webcam and video-stream detection",
      "COCO class labels and confidence filtering",
      "Non-maximum suppression for cleaner detections",
    ],
    architecture: [
      "OpenCV video capture loop",
      "NumPy preprocessing path",
      "Real-time inference with bounding-box post-processing",
    ],
    stack: ["Python", "OpenCV", "YOLOv3", "NumPy", "NMS"],
  },
  {
    title: "Face Detection & Recognition System",
    category: "Computer Vision",
    image: "/assets/projects/face-recognition.svg",
    github: "https://github.com/nalin7sharma/AI-Based-Face-Detection-and-Recognition-System",
    live: "",
    featured: false,
    problem:
      "Recognition systems need reliable face crops, consistent embeddings, and fast similarity search for real-time identity matching.",
    summary:
      "AI-based face detection and recognition system with embedding similarity matching.",
    features: [
      "Haar Cascade-based face detection",
      "Face cropping, preprocessing, and embedding extraction",
      "Embedding similarity matching for identification",
      "PostgreSQL storage for searchable face vectors",
    ],
    architecture: [
      "OpenCV detection stage",
      "Imgbeddings feature extraction",
      "PostgreSQL-backed similarity lookup",
    ],
    stack: ["Python", "OpenCV", "Haar Cascade", "PostgreSQL", "Scikit-learn", "PIL"],
  },
];

export const publication = {
  title: "Decoding Visual Intelligence in Machines: A Comprehensive Review of CNNs",
  authors: "Nalin Sharma",
  venue: "Journal of Informatics and Mathematical Sciences",
  status: "Accepted for publication",
  year: "2026",
  link: "https://www.rgnpublications.com/journals/index.php/jims/forthcomingarticles",
  tags: ["Convolutional Neural Networks", "Computer Vision", "Visual Intelligence"],
};

export const education = [
  {
    title: "B.Tech in Computer Science & Engineering - Artificial Intelligence",
    institution:
      "Chhatrapati Shahu Ji Maharaj University, formerly Kanpur University",
    meta: "UGC Tier-I University, NAAC Rank A++",
    period: "2023 - 2027",
    location: "Kanpur, India",
    score: "CGPA 7.41/10, 5th semester / 3rd year",
    icon: GraduationCap,
  },
  {
    title: "12th Standard - CBSE",
    institution: "Lancer's Convent Senior Secondary School",
    meta: "Prashant Vihar, Rohini, Delhi",
    period: "2023",
    location: "Delhi, India",
    score: "72%",
    icon: BookOpen,
  },
  {
    title: "10th Standard - CBSE",
    institution: "Lancer's Convent Senior Secondary School",
    meta: "Prashant Vihar, Rohini, Delhi",
    period: "2021",
    location: "Delhi, India",
    score: "87%",
    icon: Trophy,
  },
];

export const certifications = [
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "December 2025",
    href: "https://nalinsharma.co.in/certificates/IntroductiontoDataScience.pdf",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C1-DataScience-NalinSharma.pdf",
  },
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C2-NaturalLanguageProcessing-NalinSharma.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C3-ArtificialIntelligence-NalinSharma.pdf",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C4-DeepLearning-NalinSharma.pdf",
  },
  {
    title: "Computer Vision 101",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C5-ComputerVision101-NalinSharma.pdf",
  },
  {
    title: "Introduction to OpenAI GPT Models",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C11-OpenAIGPTModels-NalinSharma.pdf",
  },
  {
    title: "GPT-3 for Developers",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C12-OpenAIGenerativePre-trainedTransformer3(GPT-3)forDevelopers-NalinSharma.pdf",
  },
  {
    title: "Generative Models for Developers",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C13-GenerativeModelsforDevelopers-NalinSharma.pdf",
  },
  {
    title: "Principles of Generative AI",
    issuer: "Infosys",
    date: "August 2024",
    href: "https://nalinsharma.co.in/certificates/C16-PrinciplesofGenerativeAICertification-NalinSharma.pdf",
  },
];

export const courses = [
  {
    title: "Blockchain Technology and Applications",
    issuer: "Birla Institute of Technology, Mesra-Ranchi-Noida Campus",
    date: "June 24 - June 28, 2024",
    href: "https://nalinsharma.co.in/certificates/bitmesrajune2024.pdf",
  },
  {
    title: "Blockchain and its Applications",
    issuer: "University Institute of Engineering & Technology, CSJMU",
    date: "June 2 - June 17, 2024",
    href: "https://nalinsharma.co.in/certificates/uietcsjmujune2024.pdf",
  },
  {
    title: "Research Oriented Technical Writing",
    issuer: "Department of Electrical Engineering, NIT Jamshedpur",
    date: "November 18 - November 22, 2024",
    href: "https://nalinsharma.co.in/certificates/NITJSR-EED-ROTW-2024-CC-53.pdf",
  },
];

export const memberships = [
  {
    title: "IEEE Society",
    id: "100576650",
    period: "2024 - 2026",
    icon: RadioTower,
    href: "https://ieee-collabratec.ieee.org/app/p/nalin7sharma",
    description:
      "Professional membership aligned with research, engineering practice, and global technical communities.",
  },
  {
    title: "IEEE Computer Society",
    id: "100576650",
    period: "2024 - 2026",
    icon: ShieldCheck,
    href: "https://ieee-collabratec.ieee.org/app/p/nalin7sharma",
    description:
      "Computer science community membership supporting software, AI systems, and computing research interests.",
  },
];

export const achievements = [
  {
    title: "Accepted Research Publication",
    detail:
      "CNN review accepted for publication in the Journal of Informatics and Mathematical Sciences.",
    icon: BookOpen,
  },
  {
    title: "Infosys Springboard AI/ML Internship",
    detail:
      "Completed MediScan healthcare AI project focused on eye disease detection and image segmentation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Applied AI Project Portfolio",
    detail:
      "Built AI systems across mental health NLP, disaster prediction, object detection, and face recognition.",
    icon: Trophy,
  },
];

export const focusAreas = [
  {
    title: "Applied AI Products",
    description:
      "Building user-focused systems where NLP, computer vision, and product thinking meet reliable software engineering.",
    icon: Sparkles,
  },
  {
    title: "Research Engineering",
    description:
      "Data preprocessing, feature engineering, model validation, and real-time inference workflows for AI research ideas.",
    icon: Award,
  },
  {
    title: "Scalable Systems",
    description:
      "Docker, Kubernetes, secure data pipelines, databases, monitoring, and cloud basics for production-aware AI apps.",
    icon: BriefcaseBusiness,
  },
];

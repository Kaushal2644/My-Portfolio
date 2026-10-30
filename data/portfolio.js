// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH.
// To add a project / internship / certification / skill, add one
// object to the matching array below. Cards, the /projects page,
// the detail pages and the counts all update automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Kaushal Patel",
  initials: "KP",
  // NEW: used for the browser tab title & SEO. Change to your target role.
  headline: "Full-Stack & Machine Learning Developer",
  siteDescription:
    "Portfolio of Kaushal Patel, a Computer Engineering student building MERN Stack, machine learning and IoT solutions.",
  badge: "Computer Science & Engineering Student",
  introLead: "Passionate about building innovative solutions with",
  focus: ["MERN Stack", "Machine Learning", "IoT"],
  location: "Bharuch, Gujarat",
  cgpa: "9.24",
  email: "kaushalpatel2506@gmail.com",
  phone: "+91 75748 45894",
  github: "https://github.com/Kaushal2644",
  linkedin: "https://linkedin.com/in/kaushal-patel-5a0543323",
  resume: "/assets/Kaushal_Patel_Resume.pdf",
  resumeName: "Kaushal_Patel_Resume.pdf",
  photo:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69120d07bb540407282c5eb5/4fc1e6cb9_Kaushal.jpg",
};

export const about = {
  // **text** renders as emphasised text
  paragraphs: [
    "I'm a passionate Computer Science & Engineering student at **Shri Sa'd Vidya Mandal Institute Of Technology, Bharuch**, with a strong foundation in software development and emerging technologies.",
    "My journey in technology has been driven by curiosity and a desire to create impactful solutions. From building **machine learning models** to developing **IoT-based applications**, I thrive on turning complex problems into elegant solutions.",
  ],
  coreSkills: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Artificial Intelligence",
    "Object-Oriented Programming",
    "Web Development",
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    institute: "Shri Sa'd Vidya Mandal Institute Of Technology, Bharuch",
    duration: "2023 – 2027",
    cgpa: "9.24/10.0",
  },
};

export const skillCategories = [
  {
    icon: "Code2",
    title: "Languages",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 50 },
      { name: "C", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: "Layout",
    title: "Frameworks",
    color: "from-cyan-500 to-cyan-600",
    skills: [
      { name: "ReactJS", level: 85 },
      { name: "NextJS", level: 80 },
      { name: "NodeJS", level: 80 },
      { name: "ExpressJS", level: 75 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    icon: "Wrench",
    title: "Tools & Technologies",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Git", level: 85 },
      { name: "Linux", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Android Studio", level: 70 },
      { name: "IntelliJ", level: 75 },
    ],
  },
];

// `featured: true` → shown on the home page. Everything is on /projects.
// `slug` (NEW) → the URL: /projects/<slug>
// NOTE: the `screenshots` below are your original Unsplash stock photos.
// Replace them with real screenshots (put files in /public/projects/...).
export const projects = [
  {
    slug: "impacthub",
    featured: true,
    title: "ImpactHub — Smart Community Volunteer Platform",
    shortDescription:
      "Built an AI-powered full-stack volunteer coordination platform for NGOs using MERN Stack and Google Gemini AI, enabling smart resource allocation by matching NGOs with community needs through an intelligent scoring algorithm.",
    fullDescription:
      "ImpactHub is a production-ready AI-powered smart resource allocation platform built for the Google Solution Challenge — Build with AI hackathon. The platform centralizes scattered community needs collected from field reports and surveys, making it easy for NGOs to identify, prioritize, and respond to the most urgent local problems. At its core is a Smart Match Algorithm that scores NGO-to-need assignments based on efficiency (40pts), location proximity (35pts), and skill specialization (25pts) — reducing manual coordination time by 70%. Integrated Google Gemini AI (gemini-2.5-flash) for four distinct intelligent features: AI field report analyzer that auto-suggests urgency and category, AI community insights generator, AI match explainer, and a context-aware chatbot assistant. Implemented secure authentication using JWT and Google OAuth 2.0 with role-based access control. Deployed backend on Google Cloud Run and frontend on Firebase Hosting with MongoDB Atlas as the cloud database.",
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS",
      "Google Gemini AI", "JWT", "Google OAuth 2.0", "Passport.js", "Google Cloud Run",
      "Firebase Hosting", "MongoDB Atlas", "Chart.js", "Vite", "REST API", "Git", "GitHub",
    ],
    icon: "Heart",
    gradient: "from-indigo-500 to-purple-600",
    githubUrl: "https://github.com/Kaushal2644/impacthub",
    liveUrl: "https://impact-hub-fresh.vercel.app/login",
    category: "Full Stack + AI",
    challenges: [
      "Designing a Smart Match Algorithm that accurately scores NGO-to-need assignments based on multiple weighted factors",
      "Integrating Google Gemini AI meaningfully across 4 distinct features without making it feel forced or superficial",
      "Handling Google OAuth 2.0 callback flow correctly across local and production environments",
      "Deploying a Node.js backend on Google Cloud Run without Docker using Buildpacks and resolving IAM permission issues",
      "Managing CORS policies between Firebase Hosting frontend and Google Cloud Run backend in production",
      "Ensuring real-time data consistency when field reports are converted into community needs",
    ],
    achievements: [
      "Built and deployed a complete AI-powered MERN Stack application for Google Solution Challenge Build with AI hackathon",
      "Integrated Google Gemini API (gemini-2.5-flash) for 4 intelligent features reducing manual NGO coordination time by 70%",
      "Developed Smart Match Algorithm with 3-factor scoring system pairing NGOs with community needs in seconds",
      "Implemented dual authentication system with JWT and Google OAuth 2.0 supporting Admin and Volunteer roles",
      "Successfully deployed on Google Cloud Run and Firebase Hosting with MongoDB Atlas as cloud database",
      "Addressed 5 UN Sustainable Development Goals through technology-driven community impact",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=400&fit=crop",
    ],
    team: {
      name: "Code Samuraai",
      institution: "Shri S'ad Vidya Mandal Institute of Technology",
      competition: "Google Solution Challenge — Build with AI",
      members: [
        { name: "Drashti Savaliya", role: "Team Leader" },
        { name: "Shreya Lad", role: "Frontend Developer & UI/UX Designer" },
        { name: "Kaushal Patel", role: "Backend Developer & AI Integration" },
        { name: "Manav Surti", role: "Database Architect & API Developer" },
      ],
    },
  },
  {
    slug: "employee-salary-prediction",
    featured: true,
    title: "Employee Salary Prediction",
    shortDescription:
      "Built a machine learning model using Python to predict employee salaries based on various features like experience, education, and role.",
    fullDescription:
      "Developed a comprehensive machine learning solution to predict employee salaries with high accuracy. The system analyzes multiple factors including years of experience, educational background, job role, location, and industry sector. Implemented various regression algorithms and performed extensive feature engineering to optimize prediction accuracy.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    icon: "Brain",
    gradient: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/Kaushal2644/Employ-Salary-Prediction.git",
    category: "Machine Learning",
    challenges: [
      "Handling missing and inconsistent data across different sources",
      "Feature selection from 20+ potential variables",
      "Achieving model accuracy above 85% threshold",
      "Balancing model complexity with interpretability",
    ],
    achievements: [
      "Achieved 87% prediction accuracy on test dataset",
      "Reduced prediction error by 23% compared to baseline model",
      "Implemented cross-validation for robust performance",
      "Created interactive visualizations for insights",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    ],
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb Clone",
    shortDescription:
      "Developed a full-stack Airbnb clone using Node.js, Express, MongoDB, and EJS, enabling users to create, manage, and explore property listings with authentication and review features.",
    fullDescription:
      "Built a production-ready full-stack web application inspired by Airbnb that allows users to browse listings, create and manage their own properties, and interact through reviews and ratings. Implemented secure user authentication and authorization to protect routes and ensure only owners can modify their content. Designed the application using MVC architecture for scalability and maintainability. Integrated Cloudinary for image uploads and Mapbox for location-based features. The project demonstrates strong understanding of RESTful APIs, CRUD operations, database relationships, and real-world full stack development practices.",
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "HTML", "CSS", "Bootstrap",
      "JavaScript", "Cloudinary", "Mapbox", "Passport.js", "Express-Session", "Git", "GitHub",
    ],
    icon: "Home",
    gradient: "from-cyan-500 to-blue-500",
    githubUrl: "https://github.com/Kaushal2644/delta-project.git",
    liveUrl: "https://delta-project-tibz.onrender.com/listings",
    category: "Full Stack",
    challenges: [
      "Implementing secure authentication and authorization for protected routes",
      "Designing a scalable MVC architecture for better code organization",
      "Handling image uploads and storage using Cloudinary",
      "Managing relationships between listings, users, and reviews in MongoDB",
      "Ensuring proper error handling for async operations and edge cases",
    ],
    achievements: [
      "Developed a full-stack application with complete CRUD functionality",
      "Implemented secure user authentication and role-based authorization",
      "Integrated Cloudinary and Mapbox for enhanced user experience",
      "Built a scalable and maintainable backend using MVC architecture",
      "Successfully deployed the application on Render for public access",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=400&fit=crop",
    ],
  },
  {
    slug: "skill-swap-platform",
    title: "Skill Swap Platform",
    shortDescription:
      "A MERN-based platform where users exchange skills, send requests, and manage interactive profiles.",
    fullDescription:
      "Developed a full-stack Skill Swap Platform using the MERN stack. Users can list skills they offer and want, browse others' profiles, send and accept swap requests, and manage their skill portfolio. The platform includes authentication using JWT, image uploads, admin moderation panel, and responsive UI built with React + Tailwind CSS. Deployed on Vercel and Render for smooth performance.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS", "Multer", "Bcrypt", "Vercel", "Render"],
    icon: "Users",
    gradient: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/Kaushal2644/Skill-Swap.git",
    liveUrl: "https://skill-swap-blond.vercel.app/",
    category: "Full Stack",
    challenges: [
      "Implementing secure user authentication and authorization",
      "Managing complex skill matching algorithms",
      "Handling real-time request notifications",
      "Optimizing image upload and storage",
    ],
    achievements: [
      "Built end-to-end MERN stack application",
      "Implemented JWT-based authentication system",
      "Created admin moderation panel for quality control",
      "Deployed successfully on cloud platforms",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    ],
  },
  {
    slug: "artisans-corner",
    featured: true,
    title: "Artisan’s Corner",
    shortDescription:
      "Artisan’s Corner is a full-stack MERN e-commerce platform that empowers local artisans to showcase and sell handmade products online. The application provides a seamless buying experience for customers while offering sellers a dedicated dashboard to manage inventory, orders, and reviews. Built with modern cloud infrastructure, it simulates a real-world production-ready system.",
    fullDescription:
      "Artisan’s Corner is a production-ready full-stack MERN e-commerce platform built to empower local artisans to sell handmade products online. The application provides secure user authentication and authorization using JWT, a dedicated seller dashboard for managing products and inventory, complete product CRUD operations, and a seamless shopping experience with cart and order management. Customers can explore products, leave reviews and ratings, and interact with a responsive and intuitive interface. The backend follows a RESTful API architecture and integrates MongoDB Atlas for cloud data storage and Cloudinary for optimized image uploads. Both the frontend and backend are fully deployed on Vercel to simulate a real-world cloud environment. A Razorpay payment gateway integration is planned and currently under progress to enable secure online transactions.",
    technologies: [
      "Frontend: React (Vite), Axios, Context API",
      "Backend: Node.js, Express.js",
      "Database: MongoDB Atlas",
      "Authentication: JWT",
      "Deployment: Vercel",
      "Media Storage: Cloudinary",
    ],
    icon: "ShoppingCart",
    gradient: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/Kaushal2644/Artisan-s.git",
    liveUrl: "https://artisan-s-corner.vercel.app/",
    category: "Full Stack",
    challenges: [
      "Handling CORS between separate frontend and backend deployments",
      "Configuring environment variables securely in production",
      "Managing MongoDB Atlas cloud connections on serverless architecture",
      "Implementing secure JWT authentication flows",
      "Optimizing image upload and storage using Cloudinary",
      "Debugging real-world deployment issues on Vercel",
    ],
    achievements: [
      "Built a complete end-to-end MERN stack application",
      "Designed scalable RESTful APIs",
      "Implemented JWT-based authentication & protected routes",
      "Successfully deployed frontend and backend on cloud infrastructure",
      "Created a production-ready architecture similar to real e-commerce platforms",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    ],
  },
];

export const internships = [
  {
    company: "IBM",
    role: "AI/ML Virtual Intern",
    duration: "2025",
    description:
      "Built an employee salary prediction model using machine learning algorithms. Gained hands-on experience with data preprocessing, model training, and evaluation techniques.",
    skills: ["Python", "Machine Learning", "Data Analysis", "Model Training"],
    // `logo` is kept for your records; the new design uses an icon instead
    // because these were random Unsplash photos, not real company logos.
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop",
    color: "from-blue-600 to-blue-700",
  },
  {
    company: "Google for Developer",
    role: "Android Developer Virtual Intern",
    duration: "2025",
    description:
      "Learned Android app development fundamentals including UI/UX design, activity lifecycle, and integration with backend services. Built practical Android applications.",
    skills: ["Android Studio", "Java", "Kotlin", "Material Design", "REST APIs"],
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    color: "from-green-600 to-green-700",
  },
];

export const certifications = [
  { title: "DSA with Java", provider: "Apna College", category: "Programming", color: "from-orange-500 to-orange-600" },
  { title: "Web Development", provider: "Apna College", category: "Full Stack", color: "from-blue-500 to-blue-600" },
  { title: "Introduction to SQL", provider: "Tops Technology", category: "Database", color: "from-cyan-500 to-cyan-600" },
  { title: "Android Developer Virtual Internship", provider: "Google for Developer", category: "Mobile Development", color: "from-green-500 to-green-600" },
  { title: "AI/ML Virtual Internship", provider: "IBM", category: "Artificial Intelligence", color: "from-purple-500 to-purple-600" },
  { title: "Software Engineering Job Simulation", provider: "JPMorgan Chase & Co.", category: "Software Engineering", color: "from-pink-500 to-pink-600" },
];

// Your EmailJS values are kept as fallbacks so the form keeps working.
// Better practice: set NEXT_PUBLIC_EMAILJS_* in Vercel → Environment Variables.
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_hojohiv",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xbb73qc",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "gMlslhFpAQodTntib",
};

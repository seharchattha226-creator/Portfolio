export const PERSONAL_INFO = {
  name: "Sehar Fiaz",
  role: "Full Stack Web Developer",
  location: "Lahore, Pakistan",
  email: "seharchattha226@gmail.com",
  phone: "+92 3444856203",
  github: "https://github.com/seharchattha226-creator",
  linkedin: "https://www.linkedin.com/in/sehar-chattha-66195437a/",
  resume: "/Sehar-Fiaz-Resume.html", // Add resume URL here
  education: [
    {
      degree: "BS Human Nutrition & Dietetics",
      institution: "Riphah International University Lahore",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Professional IT Skill College",
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Trainee",
      company: "Professional IT Skill College",
      period: "2026 - Present",
      description: "Working on various full-stack projects using MERN stack, focusing on responsive design and interactive user interfaces."
    }
  ],
  bio: "Full Stack Web Developer passionate about creating responsive, interactive, and user-focused web applications. With training in both frontend and backend development, I focus on building modern web experiences through creativity and code."
};

// Import images
import voidCanvas from '../assets/images/void-canvas.png';
import healthAi from '../assets/images/Health-Ai.jpg';
import aurexisWatches from '../assets/images/Auxeries-watches.jpg';
import confessionPlatform from '../assets/images/confession-platform.jpg';
import crypto from '../assets/images/crypto.jpg';
import fintech from '../assets/images/fintech.png';
import travelExplorer from '../assets/images/travel-explorer.jpg';
import uniqueWeb from '../assets/images/unique-web.jpg';
import cynthiaUgwu from '../assets/images/cynthia-ugwu-clone.png';
import model3D from '../assets/images/3D-model.jpg';
import startupCoFounder from '../assets/images/Startup Co-Founder.png';

export const SKILLS = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Founderlink AI",
    category: "AI",
    description: "AI-powered platform connecting startup founders with compatible co-founders using intelligent matching algorithms and networking features.",
    image: startupCoFounder,
    tech: ["React.js", "AI/ML", "Tailwind CSS", "Node.js"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7479021857879470081/",
    github: "https://github.com/seharchattha226-creator/Founderlink-ai.git",
    live: "https://founderlink-ai.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Dog Clone",
    category: "3D",
    description: "An immersive 3D dog-themed digital experience featuring smooth animations and high-quality rendering using modern web technologies.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop",
    tech: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7458163487027060736/",
    github: "https://github.com/seharchattha226-creator/dog-clone",
    live: "https://dog-clone-eight.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Void Canva",
    category: "AI",
    description: "A creative AI platform designed for digital artists and designers to generate and visualize unique artistic concepts seamlessly.",
    image: voidCanvas,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7456651759474647040/",
    github: "https://github.com/seharchattha226-creator/voidcanvas-ai",
    live: "https://voidcanvas-ai.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "Health AI",
    category: "Healthcare",
    description: "Intelligent healthcare solution utilizing AI to provide diagnostic insights and health recommendations for modern users.",
    image: healthAi,
    tech: ["React.js", "OpenAI API", "Tailwind CSS", "Framer Motion"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7455197773664071680/",
    github: "https://github.com/seharchattha226-creator/Health-AI",
    live: "https://health-ai-zxgh.vercel.app/",
    featured: true
  },
  {
    id: 5,
    title: "Unique Web",
    category: "Web App",
    description: "A highly interactive and modern web application focusing on exceptional user experience and cutting-edge design patterns.",
    image: uniqueWeb,
    tech: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7452376786677612544/",
    github: "https://github.com/seharchattha226-creator",
    live: "https://unique-web-intg.vercel.app/",
    featured: true
  },
  {
    id: 6,
    title: "Crypto Website",
    category: "Crypto",
    description: "A comprehensive cryptocurrency dashboard featuring real-time data tracking, interactive charts, and secure user interface.",
    image: crypto,
    tech: ["React.js", "CoinGecko API", "Tailwind CSS", "Chart.js"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7448766089636802560/",
    github: "https://github.com/seharchattha226-creator/Crypto",
    live: "https://crypto-2rpp.vercel.app/",
    featured: true
  },
  {
    id: 7,
    title: "Cynthia Ugwu Clone",
    category: "Clone",
    description: "A high-fidelity clone of the award-winning Cynthia Ugwu website, showcasing mastery in complex animations and layout.",
    image: cynthiaUgwu,
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Locomotive Scroll"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7446935765642698752/",
    github: "https://github.com/seharchattha226-creator/Cynthia-Ugwu",
    live: "https://cynthia-ugwu-flax.vercel.app/",
    featured: true
  },
  {
    id: 8,
    title: "Confession Platform",
    category: "Web App",
    description: "An anonymous social platform allowing users to share thoughts and experiences in a safe, moderated digital environment.",
    image: confessionPlatform,
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7442599685258780672/",
    github: "https://github.com/seharchattha226-creator/confessly-ultimate",
    live: "https://confessly-ultimate.vercel.app/",
    featured: false
  },
  {
    id: 9,
    title: "Aurexis",
    category: "Luxury",
    description: "Premium watch brand showcase with elegant design, scroll-triggered animations, and high-end aesthetic appeal.",
    image: aurexisWatches,
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7429943485991936000/",
    github: "https://github.com/seharchattha226-creator/AUREXIS-Time-Defined",
    live: "https://aurexis-time-defined-5pfp.vercel.app/",
    featured: false
  },
  {
    id: 10,
    title: "Nutri Fit",
    category: "Fitness",
    description: "Holistic fitness and nutrition application providing personalized workout and meal plans based on user health data.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7425771490408710144/",
    github: "https://github.com/seharchattha226-creator/NutriFit-Pro-Fitness-Nutrition-App",
    live: "https://nutri-fit-pro-fitness-nutrition-app-jnbg-hvpwxhsvt.vercel.app/",
    featured: false
  },
  {
    id: 11,
    title: "Ecosphere",
    category: "Luxury",
    description: "Environmentally conscious high-end platform showcasing sustainable luxury products and initiatives.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "AOS"],
    linkedin: "https://www.linkedin.com/posts/sehar-chattha-66195437a_webdevelopment-frontenddevelopment-html-activity-7424102757441404928-BsFI",
    github: "https://github.com/seharchattha226-creator/EcoSphere",
    live: "https://eco-sphere-beige.vercel.app/",
    featured: false
  },
  {
    id: 12,
    title: "Travel Explorer",
    category: "Travel",
    description: "Immersive travel planning platform with interactive maps and curated destination guides for modern explorers.",
    image: travelExplorer,
    tech: ["React.js", "Google Maps API", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/posts/sehar-chattha-66195437a_webdevelopment-frontenddeveloper-html-activity-7423294770262802432-P4Qa",
    github: "https://github.com/seharchattha226-creator/travel-explorer-website",
    live: "https://travel-explorer-website-beta.vercel.app/",
    featured: false
  },
  {
    id: 13,
    title: "FinTech 3D",
    category: "FinTech",
    description: "Modern financial technology landing page with interactive 3D elements and secure data visualization components.",
    image: fintech,
    tech: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/posts/sehar-chattha-66195437a_webdesign-uiuxdesign-digitalexperience-activity-7421948873482534912-JH9X",
    github: "https://github.com/seharchattha226-creator/fintech",
    live: "https://fintech-tyal.vercel.app/",
    featured: false
  },
  {
    id: 14,
    title: "3D Website",
    category: "3D",
    description: "Advanced 3D website demonstration showcasing smooth navigation and complex spatial layouts in a browser environment.",
    image: model3D,
    tech: ["React.js", "Three.js", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/posts/sehar-chattha-66195437a_webdevelopment-frontenddeveloper-html-activity-7421925077635670017-idLv",
    github: "https://github.com/seharchattha226-creator/3D-website",
    live: "https://3-d-website-hs5p.vercel.app/",
    featured: false
  }
];

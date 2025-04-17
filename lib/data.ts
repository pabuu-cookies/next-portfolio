export const personalInfo = {
  name: "Pabitra Kharel",
  email: "pkharel156@gmail.com",
  phone: "+977 9840677736",
  address: "Koteshwor – 32, Kathmandu",
  github: "https://github.com/pabuu-cookies",
  linkedin: "https://www.linkedin.com/in/kharel-pabitra-993949269/",
  portfolio: "https://www.pabitrakharel.com.np",
  about:
    "I'm a backend developer skilled in Node.js, Express, MongoDB, and TypeORM, with a strong focus on building secure and scalable APIs. I'm passionate about learning, writing clean code, and growing my expertise, and I'm now expanding my skill set to further strengthen my backend capabilities.",
  profileImage: "/pabitra.jpg", // Profile image for hero section
  aboutImage: "/pabitra.jpg", // Image for about section
};

export const experiences = [
  {
    id: 1,
    company: "W.A.S Media Marketing",
    position: "Backend Developer",
    duration: "Nov 2024 – Present",
    description:
      "Built and maintained secure, scalable backend systems with Node.js, MongoDB, and Express.js, improving performance.",
    projects: [
      "B.T.M.C. Foundation",
      "Dharma Ideal",
      "Trinity Waterproofing",
      "Ngyungne",
    ],
  },
  {
    id: 2,
    company: "Nimble Bees",
    position: "Backend Intern",
    duration: "Jun 2024 – Oct 2024",
    description:
      "Developed efficient backend systems using asynchronous programming, event-driven architecture, and optimized database design.",
    projects: ["Collaboration Platform", "To-Do Manager"],
  },
  {
    id: 3,
    company: "Velox Labs",
    position: "IT Development Intern",
    duration: "May 2023 – July 2023",
    description:
      "Optimized website SEO by enhancing metadata, keyword usage, and indexing based on search engine best practices",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ngyungne Practice",
    description: "Built backend with Next.js, MongoDB, and OAuth integration.",
    longDescription:
      "A comprehensive platform for Ngyungne Practice built with Next.js and MongoDB. The application features OAuth integration for secure authentication, user profiles, and a dashboard for tracking practice sessions. The backend is designed with scalability in mind, using efficient database queries and optimized API endpoints.",
    technologies: ["Next.js", "MongoDB", "OAuth", "TypeScript", "Tailwind CSS"],
    image: "/ngyunge.png",
    demoLink: "https://ngyungne.example.com",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Trinity Waterproofing",
    description:
      "Implemented RBAC and authentication using MERN stack backend.",
    longDescription:
      "A complete solution for Trinity Waterproofing company with role-based access control (RBAC) and robust authentication system. The MERN stack implementation includes a React frontend with Material UI, Express.js backend, MongoDB database, and Node.js server. The system manages inventory, customer orders, and employee access levels.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "RBAC"],
    image: "/trinity.jfif",
    demoLink: "https://trinity.example.com",
    githubLink: "https://github.com/example/trinity",
  },
  {
    id: 3,
    title: "B.T.M.C. Foundation",
    description:
      "Built secure MERN backend with Node.js and authentication support.",
    longDescription:
      "A feature-rich platform for B.T.M.C. Foundation with secure authentication and data management capabilities. The MERN stack application includes donor management, event organization, and financial tracking features. The backend is built with Node.js and Express, with MongoDB for data storage and React for the frontend interface.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
    image: "/btmcfoundation.png",
    demoLink: "https://btmc.example.com",
    githubLink: "https://github.com/example/btmc",
  },
  {
    id: 4,
    title: "Collaboration Platform",
    description:
      "Built backend in Node.js and Express.js with PostgresSQL database.",
    longDescription:
      "A robust collaboration platform that enables teams to work together efficiently. The backend is built with Node.js and Express.js, with a PostgreSQL database for data storage. Features include real-time messaging, task management, file sharing, and team organization. The API is designed with RESTful principles and includes comprehensive documentation.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Redis",
      "Docker",
    ],
    image: "/projects/collaboration.jpg",
    demoLink: "https://collab.example.com",
    githubLink: "https://github.com/example/collaboration",
  },
  {
    id: 5,
    title: "WanderMate-TourBot",
    description:
      "Created chatbot backend using MERN and integrated NLP.js library.",
    longDescription:
      "An intelligent chatbot for tourists that provides information about destinations, attractions, and travel tips. The backend is built with the MERN stack and integrates the NLP.js library for natural language processing. The chatbot can understand user queries, provide relevant information, and learn from interactions to improve responses over time.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "NLP.js",
      "WebSockets",
    ],
    image: "/projects/wandermate.jpg",
    demoLink: "https://wandermate.example.com",
    githubLink: "https://github.com/example/wandermate",
  },
  {
    id: 6,
    title: "College Management System",
    description: "Designed backend in Node.js, MySQL with HTML, CSS frontend.",
    longDescription:
      "A comprehensive college management system that handles student records, course management, attendance tracking, and grade calculation. The backend is built with Node.js and MySQL, with a frontend using HTML, CSS, and JavaScript. The system includes different access levels for administrators, teachers, and students.",
    technologies: [
      "Node.js",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
    ],
    image: "/projects/college.jpg",
    demoLink: "https://cms.example.com",
    githubLink: "https://github.com/example/cms",
  },
];

export const education = [
  {
    id: 1,
    institution: "Kathmandu Engineering College",
    location: "Kalimati, Kathmandu",
    degree: "B.E. in Computer Engineering",
    duration: "2021 - 2025",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
  ],
  frameworks: [
    { name: "React", level: 80 },
    { name: "NextJS", level: 85 },
    { name: "Express.js", level: 90 },
  ],
  frontendBackend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "NodeJS", level: 95 },
    { name: "ExpressJS", level: 90 },
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 90 },
  ],
  authSecurity: [
    { name: "JWT", level: 85 },
    { name: "OAuth", level: 80 },
    { name: "RBAC", level: 85 },
    { name: "API Security Best Practices", level: 90 },
  ],
  versionControl: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 85 },
  ],
  apiStateManagement: [
    { name: "Axios", level: 85 },
    { name: "Redux", level: 80 },
    { name: "Restful APIs", level: 90 },
    { name: "GraphQL", level: 75 },
  ],
  architecture: [
    { name: "Monolithic", level: 85 },
    { name: "Microservices", level: 80 },
  ],
};

export const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "REST API", icon: "api" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Docker", icon: "docker" },
      { name: "JWT", icon: "jwt" },
      { name: "OAuth", icon: "oauth" },
    ],
  },
];

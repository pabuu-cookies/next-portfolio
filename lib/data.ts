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
  aboutImage: "/about_me.jpeg", // Image for about section
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
    title: "Collaboration Platform",
    description:
      "Built backend in Node.js and Express.js with PostgresSQL database.",
    longDescription:
      `📘 <strong>Collaboration Platform – Internship Major Project</strong><br><br>
This project -Web Appplication- was one of the major assignments during my internship, where I was tasked with developing the backend of a robust collaboration platform. The platform enables teams to work efficiently together, featuring real-time messaging, task management, file sharing, and team organization functionalities.<br><br>

🧠 <strong>Learning and Development</strong><br>
This project was pivotal in reshaping my approach to software development. I was reintroduced to the fundamentals, this time intentionally focusing on best practices. I gained a deeper understanding of the actual project development process—from Figma designs, collaborating with frontend developers, to the backend integration.<br><br>

🎯 <strong>Project Vision and Goal</strong><br>
The primary goal of this collaboration platform was to provide teams with a unified space for communication, task management, and organization. It was designed to foster seamless collaboration, enabling users to efficiently share files, organize entities in organization, and manage their tasks.<br><br>

🛠️ <strong>Key Modules and Features</strong><br><br>

1. 🗂️ <strong>Task Management</strong><br>
   ✦ This feature allows teams to create, assign, and track tasks within their organization.<br>
   ✦ It also includes task priority levels, deadlines, and progress tracking, ensuring tasks are efficiently managed.<br><br>

2. 🧩 <strong>Team Organization</strong><br>
   ✦ This module helps organize teams into different groups, assign roles, and manage team structures.<br>
   ✦ It provides easy access to team information and ensures clear communication across different teams.<br><br>

3. 🧩 <strong>Project Organization</strong><br>
   ✦ This module allows teams to organize their work into multiple projects, each with its own set of tasks, members, and progress tracking.<br>
   ✦ It helps teams prioritize initiatives and maintain clarity on deliverables across different projects.<br><br>

4. 🧩 <strong>Customer Organization</strong><br>
   ✦ This module is designed for managing clients or customer entities the team is collaborating with.<br>
   ✦ It includes features like customer profiles, project assignments per customer, and centralized communication logs for better client handling.<br><br>

💡 <strong>Challenges and Learning Moments</strong><br>
<ul>
  <li>✦ <strong>Hashing, Salting, and Security</strong>: I was introduced to password hashing and salting techniques to enhance security. I also learned about JWT tokens, cookies, and sessions for secure authentication and authorization.</li><br>
  <li>✦ <strong>Working with Base Code</strong>: For the first time, I had to work with pre-existing code that was written by someone else. The code was modular and scalable, and I had to learn and adapt to it, which was initially challenging but gave me valuable experience in working with base code.</li><br>
  <li>✦ <strong>TypeScript and Node.js</strong>: This project was my first exposure to TypeScript, which helped me understand the importance of static typing and how it improves code quality, readability, and scalability. Working with Node.js and TypeScript also deepened my understanding of backend development and made my development process more structured and intentional.</li><br>
  <li>✦ <strong>Object-Oriented Programming</strong>: My understanding of object-oriented programming (OOP) was significantly enhanced. I learned to apply OOP principles more methodically, focusing on designing clean, maintainable, and scalable code.</li><br>
  <li>✦ <strong>API Optimization</strong>: I was responsible for designing the schema and creating optimized API endpoints. This taught me how to structure APIs efficiently, ensuring scalability and minimal latency during high-demand usage.</li><br>
</ul><br>

🧠 <strong>Technologies Used</strong><br>
<ul>
  <li>✦ Backend: Node.js, Express.js, TypeScript</li>
  <li>✦ Database: PostgreSQL</li>
  <li>✦ Other Tools: JWT, Postman</li>
</ul><br>

🔧 <strong>What I Learned</strong><br>
<ul>
  <li>✦ How to approach backend development in a more methodical, professional manner, focusing on best practices like security, optimization, and scalability.</li>
  <li>✦ Exposure to working with TypeScript, enhancing my understanding of static typing and improving my coding standards.</li>
  <li>✦ The importance of working with pre-existing code and learning to adapt to large, scalable codebases.</li>
  <li>✦ A deeper understanding of password security, authentication, and authorization methods like hashing, salting, JWT tokens, and sessions.</li>
  <li>✦ How to design efficient API endpoints and databases to ensure smooth, optimal performance of the application.</li>
</ul>
`,
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "reactJs",
      "TypeScript",
    ],
    image: "/collaboration-platform.jpg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "WanderMate-TourBot",
    description:
      "Created chatbot backend using MERN and integrated NLP.js library.",
    longDescription:
      `📘 <strong>WanderMate-TourBot – Personal Travel Assistant for Tourists</strong><br><br>
This project -Mobile Application - was developed to create an intelligent, all-in-one travel assistant for tourists, designed to help them explore new destinations, discover attractions, get travel tips, and more. I worked as the backend developer, with a team handling the frontend and chatbot training.<br><br>

🧠 <strong>Backend Development and Database Design</strong><br>
For this project, I was responsible for designing the backend and structuring the database. Initially, I considered using MySQL for the database but later switched to MongoDB due to the complexity of storing chat history, unique user bios for registered guides, and other dynamic content. MongoDB's flexibility allowed us to scale the database as the project grew.<br><br>

🎯 <strong>Project Vision and Goal</strong><br>
The goal of this chatbot is to assist tourists by providing quick, relevant information about destinations, available attractions, and travel-related questions. The chatbot is capable of understanding user queries, offering real-time suggestions, and learning from past interactions to improve its responses over time. We aimed to build a system that could scale seamlessly with user demand.<br><br>

🛠️ <strong>Key Modules and Features</strong><br><br>

1. 🤖 <strong>Chatbot Integration (Using NLP.js)</strong><br>
   ✦ The chatbot utilizes <strong>NLP.js</strong> for natural language processing. I worked on the backend integration, while my teammates were responsible for training the chatbot.<br>
   ✦ We set up the chatbot on a separate port to ensure scalability and flexibility, but later realized that this approach created issues when attempting to implement a contextual-based system. All logins shared the same NLP instance, making it less user-friendly for multiple users, leading me to understand the importance of synchronization in a microservices architecture.<br><br>

2. 🗺️ <strong>Tourist Recommendations</strong><br>
   ✦ The bot provides personalized recommendations for restaurants, attractions, and travel tips based on the user's preferences. It also links to guides who are registered within the app, offering a richer travel experience.<br><br>

3. 📝 <strong>Task Management (To-Do List)</strong><br>
   ✦ Tourists can use the app to keep track of their planned activities and to-dos while traveling. This helps them stay organized and ensures they don't miss out on any must-see attractions.<br><br>

4. 📚 <strong>Guide Registration and Management</strong><br>
   ✦ Local tour guides can register with the app and provide their profiles, which tourists can view when seeking personalized tours or guides. Each guide has a unique bio and specialized information about the destinations they cover.<br><br>

5. 🧳 <strong>Map and Navigation Features</strong><br>
   ✦ Integrated map functionalities allow tourists to find nearby attractions and get directions in real-time. The integration of this feature was crucial for user engagement.<br><br>

💡 <strong>Challenges and Learning Moments</strong><br>
<ul>
  <li>🤖 <strong>NLP.js Integration</strong>: Initially, our chatbot training was done in isolation, and the bot was hosted on a separate port. As we tried to make the system context-aware, we encountered issues with sharing the same NLP instance among different users. This taught me valuable lessons about synchronization, scaling, and performance in a microservices-based architecture.</li><br>
  <li>📱 <strong>React Native Development</strong>: Although I was focused on the backend, I got a chance to understand the workflow of React Native development, especially the importance of using the right console tools. React Native doesn't always show errors up front when integration issues arise, so it was crucial to implement strategic console logs to track progress and ensure everything was running smoothly.</li><br>
  <li>⚙️ <strong>Microservices and Scalability</strong>: One of the key realizations was how important it is to manage service interactions efficiently, especially when dealing with microservices. The lack of synchronization between different services could quickly lead to performance and usability issues.</li><br>
</ul>

🧠 <strong>Technologies Used</strong><br>
<ul>
  <li>Backend: MongoDB, Node.js, Express.js</li>
  <li>Frontend: React Native (handled by frontend team)</li>
  <li>Other Tools: NLP.js (handled by team), Puppeteer, Fuse.js, WebSockets</li>
</ul><br>

🔧 <strong>What I Learned</strong><br>
<ul>
  <li>✦How to design a flexible, scalable backend system with MongoDB, focusing on the dynamic nature of the data we were handling (chat history, guide profiles).</li>
  <li>✦Gained insight into the React Native development process and how to address errors and debugging challenges that arise during integration.</li>
  <li>✦The importance of synchronization between services and how failure to do so can impact user experience and performance.</li>
  <li>✦Real-time communication: We utilized WebSockets for real-time data updates, which was crucial for the chat functionalities.</li>
</ul>
<img src="/wandermate-recommandation.jpeg" alt="Tourist Recommendations" style="width: 150px; height: 150px; object-fit: contain;display: inline-block; margin-bottom: 20px;"><img src="/wandermate-guide.jpeg" alt="Guide Hiring" style="width: 150px; height: 150px; object-fit: contain;display: inline-block; margin-bottom: 20px;">

`,
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "NLP.js",
      "WebSockets",
    ],
    image: "/wandermate-login.jpeg",
    demoLink: "#",
    githubLink: "https://github.com/Kecc-2077-peafour/Majorproject--WanderMate",
  },
  {
    id: 3,
    title: "College Management System",
    description: "Designed backend in Django, MySQL with HTML, CSS frontend.",
    longDescription: 
  `📘 <strong>College Management System – 6th Semester Minor Project</strong><br><br>
This project -Web Application- was developed as part of my minor project in the 6th semester of my Bachelor’s degree, and it served as my very first full-stack application. It was a group project with four team members in total, and I was fully responsible for:<br>
<ul>
  <li>✦Backend development using Django and MySQL</li>
  <li>✦Schema design and database planning</li>
  <li>✦API integration and overall system integration</li>
</ul><br>

The frontend (HTML, CSS, and JavaScript) was handled by my teammates, while I focused entirely on the backend and integration.<br><br>

🎯 <strong>Project Aim and Vision</strong><br>
The goal of this project was to create a centralized digital platform where students, teachers, and administrators could interact, manage records, and access essential services.<br>
We envisioned an integrated portal that simplifies the communication and operational activities within a college.<br><br>

🧩 <strong>Core Modules in the Final Version</strong><br><br>

1. 📊 <strong>Exam Section Management System</strong><br>
This module was designed to streamline exam-related tasks and data handling for both faculty and students:<br>
<ul>
  <li>✦Students could securely log in to view their results.</li>
  <li>✦Faculty could:
    <ul>
      <li>✦Upload and edit exam scores directly via spreadsheet imports.</li>
      <li>✦Perform student performance analysis using configurable parameters.</li>
      <li>✦View, generate, and export detailed academic reports.</li>
      <li>✦Add new results, view subject lists by semester, and manage exam records efficiently.</li>
    </ul>
  </li>
  <li>✦Admins had access to analytics features for tracking performance, and report generation based on various criteria.</li>
</ul><br>

2. 🍽️ <strong>Canteen Management System</strong><br>
This module automated the campus canteen operations and enabled digital interactions between students and canteen staff:<br>
<ul>
  <li>✦Students could:
    <ul>
      <li>✦View the daily menu.</li>
      <li>✦Pre-order meals, helping reduce queues and improve service flow.</li>
    </ul>
  </li>
  <li>✦Admin/canteen staff could:
    <ul>
      <li>✦Edit menu items and update daily offerings.</li>
      <li>✦Manage order confirmations and generate sales records.</li>
      <li>✦View and track all ongoing orders and transaction history.</li>
    </ul>
  </li>
</ul><br>

🛠️ <strong>Key Features and Functionalities</strong><br>
<ul>
  <li>✦User authentication and session management based on email and user credentials.</li>
  <li>✦Role-based access levels for students, teachers, and administrators.</li>
  <li>✦Dynamic routing and basic authorization checks based on URL parameters and session state.</li>
  <li>✦Implemented a super admin role for easy data management via Django's built-in admin UI.</li>
  <li>✦Integrated modules for:
    <ul>
      <li>✦exam management</li>
      <li>✦canteen management</li>
    </ul>
  </li>
</ul><br>

💡 <strong>Lessons & Realizations During Development</strong><br>
This was my first hands-on experience with concepts like:<br>
<ul>
  <li>✦Authentication and authorization</li>
  <li>✦URL parameter security</li>
  <li>✦The importance of RBAC (Role-Based Access Control) ✦ although I  wasn’t able to fully implement it fully, I discovered the need for it.</li>
</ul><br>
Initially, I used simple numeric IDs (like /users/1, /users/2) in URLs for accessing data, but soon realized:<br>
<ul>
  <li>✦Anyone could access another user's data just by guessing the ID.</li>
  <li>✦This led to security flaws, which I learned to resolve by adding login checks and role validations.</li>
  <li>✦I revised and rebuilt the authentication logic at least three times to achieve a more secure and robust flow.</li>
</ul><br>
The project helped me understand the value of data protection, secure access, and validation, even if the implementation wasn’t perfect.<br><br>

👨‍💻 <strong>Technical Stack</strong><br>
<ul>
  <li>Backend: Django, MySQL, Sequelize</li>
  <li>Frontend: HTML(ejs), CSS, JavaScript</li>
  <li>Other Tools: Git, VSCode</li>
</ul><br>

🧠 <strong>What I Learned</strong><br>
<ul>
  <li>✦How to work and coordinate as a team</li>
  <li>✦How to divide roles, take ownership of entire backend development</li>
  <li>✦Real-world backend development processes: schema design, API development, integration, and bug fixing</li>
  <li>✦Basic project planning, feature prioritization, and iterative improvements</li>
</ul>`
,
    technologies: [
      "Django",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/college.png",
    demoLink: "#",
    githubLink: "https://github.com/Kecc-2077-peafour/CMS-webapplication/tree/master",
  },
  {
    id: 4,
    title: "Ngyungne Practice",
    description: "Built backend with Next.js, MongoDB, and OAuth integration.",
    longDescription:
      "A comprehensive platform for Ngyungne Practice built with Next.js and MongoDB. The application features OAuth integration for secure authentication, user profiles, and a dashboard for tracking practice sessions. The backend is designed with scalability in mind, using efficient database queries and optimized API endpoints.",
    technologies: ["Next.js", "MongoDB", "OAuth", "TypeScript", "Tailwind CSS"],
    image: "/ngyunge.png",
    demoLink: "https://ngyungne.com",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Trinity Waterproofing",
    description:
      "Implemented RBAC and authentication using MERN stack backend.",
    longDescription:
      "A complete solution for Trinity Waterproofing company with role-based access control (RBAC) and robust authentication system. The MERN stack implementation includes a React frontend with Material UI, Express.js backend, MongoDB database, and Node.js server. The system manages inventory, customer orders, and employee access levels.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "RBAC", "TypeScript"],
    image: "/trinity.jfif",
    demoLink: "https://trinitywaterproofing.com.np/",
    githubLink: "https://github.com/example/trinity",
  },
  {
    id: 6,
    title: "B.T.M.C. Foundation",
    description:
      "Built secure MERN backend with Node.js and authentication support.",
    longDescription:
      "A feature-rich platform for B.T.M.C. Foundation with secure authentication and data management capabilities. The MERN stack application includes donor management, event organization, and financial tracking features. The backend is built with Node.js and Express, with MongoDB for data storage and React for the frontend interface.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT", "TypeScript"],
    image: "/btmcfoundation.png",
    demoLink: "https://btmcfoundation.org/",
    githubLink: "#",
  },
  {
    id: 7,
    title: "Rock Paper Scissors Series",
    description: "A simple browser game built using HTML, CSS, and JavaScript.",
    longDescription: 
    `🎮 <strong>Rock Paper Scissors Series – Learning Project</strong><br><br>
  This project was my personal attempt to learn and practice the fundamentals of web development. Built entirely with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, the game runs in the browser with no external libraries.<br><br>
  
  🕹️ <strong>Game Features</strong><br>
  <ul>
    <li>✦ Play a single round, best of 3, or best of 5 matches.</li>
    <li>✦ All game logic is handled client-side using JavaScript.</li>
    <li>✦ Basic styling with CSS and dynamic updates through DOM manipulation.</li>
  </ul><br>
  
  🧠 <strong>What I Learned</strong><br>
  <ul>
    <li>✦ Practiced core JavaScript concepts like conditionals, loops, functions, and event handling, random number generation.</li>
    <li>✦ Learned to structure a basic interactive UI using HTML and CSS.</li>
    <li>✦ Understood how to build a small project from scratch, improving problem-solving and code organization.</li>
  </ul><br>`,
  
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image: "/rsp_project.png",
    demoLink: "#",
    githubLink: "https://github.com/pabuu-cookies/Rock-Paper-Scissors-Series",
  },
  {
    id: 8,
    title: "Tic Tac Toe (Python GUI)",
    description: "A customizable Tic Tac Toe game with Python and Tkinter.",
    longDescription: 
    `🧩 <strong>Tic Tac Toe – Python GUI Experiment</strong><br><br>
  This project was my exploration of building graphical interfaces without using any traditional frontend frameworks. Using <strong>Python</strong> and the <strong>Tkinter</strong> library, I created a flexible Tic Tac Toe game playable directly on the desktop.<br><br>
  
  🖥️ <strong>Key Features</strong><br>
  <ul>
    <li>✦ The game supports custom board sizes (N x N where N is odd).</li>
    <li>✦ Single-player mode with the computer using various strategies for challenging gameplay.</li>
    <li>✦ Fully implemented game logic and GUI in Python using Tkinter.</li>
  </ul><br>
  
  🧠 <strong>What I Explored</strong><br>
  <ul>
    <li>✦ Creating desktop apps in Python without needing web-based frontends.</li>
    <li>✦ Designing flexible logic that adapts to different board sizes and gameplay conditions.</li>
    <li>✦ Improved my comfort level with Python and GUI programming concepts.</li>
  </ul><br>`,
  
    technologies: [
      "Python",
      "Tkinter"
    ],
    image: "/TTT_project.png",
    demoLink: "#",
    githubLink: "https://github.com/pabuu-cookies/Tic-Tac-Toe",
  },
  {
    id: 9,
    title: "ToDo List App",
    description: "A simple MERN-based to-do list app with MySQL as the database.",
    longDescription: 
    `📝 <strong>ToDo List App – Internship Starter Project</strong><br><br>
  This was my very first full-stack project during my internship, primarily created to test and apply our existing knowledge. Although simple, it served as an important stepping stone in my journey into full-stack development.<br><br>
  
  🔧 <strong>My Role and Responsibilities</strong><br>
  <ul>
    <li>✦ I was solely responsible for designing the backend schema and developing RESTful API endpoints.</li>
    <li>✦ The backend was built using <strong>Node.js</strong> and <strong>Express.js</strong>, with <strong>MySQL</strong> as the database.</li>
    <li>✦ I focused on clean schema design and handling basic CRUD operations efficiently.</li>
  </ul><br>
  
  🧠 <strong>What I Learned</strong><br>
  <ul>
    <li>✦ Gained practical experience working with MySQL in a MERN stack environment.</li>
    <li>✦ Understood how a basic full-stack application is structured.</li>
    <li>✦ Reinforced concepts of API development, database interaction, and modular code structuring.</li>
  </ul><br>`,
  
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "MySQL"
    ],
    image: "/todolist.jpg",
    demoLink: "#",
    githubLink: "https://github.com/pabuu-cookies/ToDoList",
  }
  
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
    { name: "NextJS", level: 50 },
    { name: "Express.js", level: 90 },
  ],
  frontendBackend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Bootstrap", level: 50 },
    { name: "Tailwind CSS", level: 50 },
    { name: "NodeJS", level: 95 },
    { name: "ExpressJS", level: 90 },
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 70 },
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
    { name: "GraphQL", level: 40 },
  ],
  architecture: [
    { name: "Monolithic", level: 85 },
    { name: "Microservices", level: 40 },
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

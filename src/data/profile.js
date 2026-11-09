// Single source of truth for portfolio content.
// To update the site, edit this file — the components read everything from here.

export const profile = {
  name: "Saicharith Vaitla",
  roles: ["AI Workflow Engineer", "Full Stack Developer", "Software Engineer"],
  summary:
    "Software engineer at the University of Nebraska–Lincoln, currently building retrieval-augmented generation (RAG) workflows with Python, LangChain, AWS Bedrock, and vector search. Before that I shipped Java microservices and REST APIs for 500+ distributed election-system nodes at Election Systems & Software, built real-time monitoring and analytics for UNL's STOICH platform, and developed embedded data-collection tooling for CLAAS. I enjoy work that spans the stack — from database tuning and CI/CD to clean, usable interfaces.",
  links: {
    linkedin: "https://www.linkedin.com/in/sai-charith-vaitla-a21739235/",
    github: "https://github.com/SCVaitla",
    email: "mailto:svaitla3@huskers.unl.edu",
  },
};

export const experiences = [
  {
    company: "University of Nebraska–Lincoln",
    role: "AI Workflow Engineer",
    type: "Full-time",
    duration: "Aug 2025 – Present",
    location: "Lincoln, NE · On-site",
    current: true,
    image: "/images/Image.jpg",
    summary:
      "Engineering retrieval-augmented generation (RAG) workflows using Python, LangChain, AWS Bedrock, and vector search, enabling AI applications to retrieve and generate answers from research documents.",
    tags: ["Python", "LangChain", "AWS Bedrock", "RAG", "Vector Search"],
  },
  {
    company: "University of Nebraska–Lincoln",
    role: "Full Stack Developer Intern (Data Management Systems)",
    type: "Part-time",
    duration: "Jan 2024 – Aug 2025",
    location: "Lincoln, NE · Remote",
    image: "/images/Image.jpg",
    summary:
      "Led development and optimization of real-time monitoring, analytics, and microservices systems for the high-performance STOICH application, focused on user engagement and scalability.",
    bullets: [
      "Built responsive React interfaces backed by C# services and deployed on AWS with Docker.",
      "Implemented real-time data visualization and QAQC (quality assurance / quality control) modules, improving data accuracy and accessibility.",
      "Wrote unit and integration tests with Jest and JUnit to keep releases reliable.",
    ],
    tags: ["React", "C#", "AWS", "Docker", "Data Processing", "QAQC"],
  },
  {
    company: "Election Systems & Software",
    role: "Software Engineer",
    type: "Internship",
    duration: "May 2024 – Aug 2025",
    location: "Omaha, NE · On-site",
    image: "/images/ess.jpg",
    bullets: [
      "Developed Java microservices and REST APIs supporting telemetry and operational monitoring across 500+ distributed election-system nodes, giving engineering and operations teams access to system-status information.",
      "Worked on request-level traceability and audit logging to support investigation of API activity and operational issues in a regulated election-systems environment.",
      "Integrated TypeScript frontends, backend services, and relational databases into operator-facing workflows, making telemetry incidents easier to investigate without navigating multiple systems.",
      "Optimized MySQL and Oracle query paths through SQL tuning and indexing, improving the responsiveness of telemetry retrieval and monitoring.",
    ],
    tags: ["Java", "REST APIs", "TypeScript", "C#", "AngularJS", "MySQL", "Oracle"],
  },
  {
    company: "CLAAS",
    badge: "CLAAS",
    role: "Software Developer",
    type: "Contract",
    duration: "Aug 2024 – May 2025",
    location: "Lincoln, NE",
    summary:
      "Collaborative engineering project between CLAAS North America and the University of Nebraska–Lincoln to improve torque verification in agricultural machinery assembly through an automated witness-mark system.",
    bullets: [
      "Built a Python GUI to capture and label accelerometer data from torque tools, supporting calibration and detection-algorithm development.",
      "Programmed Arduino Nano microcontrollers to interface with MPU6050 sensors for motion tracking and event detection.",
      "Helped integrate a Dykem fluid-based pneumatic marking mechanism controlled by custom hardware and software.",
      "Coordinated with CLAAS engineers, faculty, and sponsors to align the system with assembly processes and quality standards.",
      "Tested and debugged across macOS environments to ensure reliability and performance.",
    ],
    tags: ["Python", "Arduino", "Embedded Systems", "Sensors"],
  },
  {
    company: "University of Nebraska System",
    badge: "NU",
    role: "Software Engineer",
    duration: "Jan 2022 – Apr 2024",
    location: "Lincoln, NE",
    bullets: [
      "Developed and integrated full-stack applications using Java, Spring Boot, React, PostgreSQL, and MongoDB to support data-driven university workflows.",
      "Owned integration and deployment troubleshooting across AWS EC2, S3, and Lambda, connecting frontends, backend APIs, and database services.",
      "Improved release consistency with Docker, Jenkins pipelines, and Git-based CI/CD, adding automated build and validation checks.",
      "Optimized database schemas, indexes, and SQL queries to improve responsiveness and simplify maintenance.",
    ],
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "MongoDB", "AWS", "Jenkins"],
  },
  {
    company: "University of Nebraska–Lincoln",
    role: "Undergraduate Research Assistant",
    type: "Internship",
    duration: "Jan 2023 – Jan 2024",
    location: "Lincoln, NE",
    image: "/images/Image.jpg",
    summary:
      "Worked on two faculty-led research projects spanning natural language processing, cognitive pattern analysis, and symbolic execution.",
    groups: [
      {
        title: "NLP & Eye-Tracking Systems",
        bullets: [
          "Developed a .NET application integrated with R for natural language processing, improving text-classification accuracy by 15%.",
          "Designed a normalized relational schema with NoSQL components to store and analyze eye-tracking data, improving data reliability by 10%.",
          "Built simulation models and digital twins of automated logistics systems in FlexTerm, boosting design-validation efficiency by 40%.",
        ],
      },
      {
        title: "Symbolic Execution with KLEE",
        bullets: [
          "Containerized KLEE for C environments with Docker, cutting symbolic-execution setup time by 30%.",
          "Optimized memory allocation in KLEE's constraint-handling engine, improving execution performance by 15%.",
        ],
      },
    ],
    tags: [".NET", "R", "NLP", "Docker", "KLEE"],
  },
];

export const projects = [
  {
    title: "MAARS Web Application",
    description:
      "Built a scalable, component-based web application using Angular, TypeScript, and SCSS, improving UI performance and maintainability. Developed reusable Angular services, including a Google Maps Loader Service that reduced API call latency and sped up map rendering.",
    tags: ["Angular", "TypeScript", "SCSS", "Google Maps API"],
  },
  {
    title: "NutriActive Supplements (E-commerce MVC)",
    description:
      "An e-commerce web application built with C#, ASP.NET MVC, and SQL Server for product browsing and transactions. Implemented secure authentication and optimized search, and tuned the database to cut query execution time by 20%.",
    tags: ["C#", "ASP.NET MVC", "SQL Server"],
  },
  {
    title: "Bumper Cars Invoice System",
    description:
      "A Java invoice-processing system using OOP principles, inheritance, and polymorphism to manage different purchase types. Designed a relational schema in SQL Server that reduced query execution time by 30%, with exception handling and JUnit tests for stability.",
    tags: ["Java", "SQL Server", "JUnit"],
  },
];

export const education = [
  { name: "University of Nebraska–Lincoln", detail: "Computer Science", years: "2021 – 2025", image: "/images/Image.jpg" },
  { name: "Narayana Jr College", years: "2019 – 2021", image: "/images/narayana.jpg" },
  { name: "Narayana Olympiad School", years: "2015 – 2019", image: "/images/narayana-2.jpg" },
  { name: "Delhi Public School", years: "2008 – 2015", image: "/images/dps.jpg" },
];

export const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain", icon: "fas fa-link", color: "#1c3c3c" },
      { name: "AWS Bedrock", icon: "fab fa-aws", color: "#232f3e" },
      { name: "RAG", icon: "fas fa-magnifying-glass", color: "#6d28d9" },
      { name: "Vector Search", icon: "fas fa-diagram-project", color: "#0e7490" },
      { name: "NLP", icon: "fas fa-language", color: "#b45309" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "fab fa-java", color: "#007396" },
      { name: "Python", icon: "fab fa-python", color: "#306998" },
      { name: "C#", icon: "fas fa-hashtag", color: "#9b4993" },
      { name: "JavaScript", icon: "fab fa-js", color: "#c9a900" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
      { name: "C", icon: "fas fa-c", color: "#5c6bc0" },
      { name: "C++", icon: "fas fa-code", color: "#00599c" },
      { name: "R", icon: "fas fa-r", color: "#4f7942" },
    ],
  },
  {
    title: "Frameworks & Frontend",
    skills: [
      { name: "React", icon: "fab fa-react", color: "#087ea4" },
      { name: "Angular", icon: "fab fa-angular", color: "#dd1b16" },
      { name: "Spring Boot", icon: "fas fa-leaf", color: "#4e9a2a" },
      { name: ".NET", icon: "fas fa-cubes", color: "#512bd4" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#3c873a" },
      { name: "Redux", icon: "fas fa-arrows-spin", color: "#764abc" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
      { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
      { name: "CSS3 / SCSS", icon: "fab fa-css3-alt", color: "#1572b6" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
      { name: "MySQL", icon: "fas fa-database", color: "#00758f" },
      { name: "Oracle", icon: "fas fa-database", color: "#c74634" },
      { name: "SQL Server", icon: "fas fa-server", color: "#a91d22" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#13aa52" },
    ],
  },
  {
    title: "Cloud, DevOps & Monitoring",
    skills: [
      { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078d4" },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
      { name: "Jenkins", icon: "fab fa-jenkins", color: "#d33833" },
      { name: "CI/CD", icon: "fas fa-arrows-rotate", color: "#2f855a" },
      { name: "Datadog", icon: "fas fa-chart-line", color: "#632ca6" },
    ],
  },
  {
    title: "Testing & APIs",
    skills: [
      { name: "REST APIs", icon: "fas fa-plug", color: "#0891b2" },
      { name: "Postman", icon: "fas fa-paper-plane", color: "#ef5b25" },
      { name: "Swagger", icon: "fas fa-file-code", color: "#2e9e2e" },
      { name: "JUnit", icon: "fas fa-vial", color: "#c2410c" },
      { name: "Jest", icon: "fas fa-flask", color: "#99425b" },
      { name: "Cypress", icon: "fas fa-vial-circle-check", color: "#1f8f5f" },
      { name: "Selenium", icon: "fas fa-robot", color: "#43b02a" },
    ],
  },
  {
    title: "Tools & Data Visualization",
    skills: [
      { name: "Git / GitHub", icon: "fab fa-github", color: "#24292f" },
      { name: "GitLab", icon: "fab fa-gitlab", color: "#e24329" },
      { name: "Jira", icon: "fab fa-jira", color: "#0052cc" },
      { name: "Figma", icon: "fab fa-figma", color: "#c2410c" },
      { name: "Tableau", icon: "fas fa-chart-pie", color: "#e97627" },
      { name: "Power BI", icon: "fas fa-chart-bar", color: "#b8960b" },
      { name: "Arduino", icon: "fas fa-microchip", color: "#00979d" },
    ],
  },
];

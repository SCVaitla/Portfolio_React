import { Link } from "react-router-dom";
import "../styles/Projects.css"; // Import the CSS file

const experiences = [
  {
    company: "Election Systems & Software",
    role: "Software Developer",
    duration: "May 2025 - Present",
    description: [
      "At Election Systems & Software (ES&S), I develop and optimize scalable software solutions for voter registration and election management systems. My work includes designing and enhancing front-end components, implementing RESTful APIs, optimizing SSRS reports, and improving system performance. I collaborate with cross-functional teams to integrate backend services, automate testing using Jest, JUnit, and Postman, and ensure seamless deployments through version control and CI/CD pipelines. My contributions have led to improved system efficiency, reduced page load times, and enhanced data visualization for election-related applications."
    ],
    image: "/images/ess.jpg", // Update with actual image path
  },
  {
    company: "University of Nebraska - Lincoln",
    role: "Full Stack Software Developer",
    duration: "Jan 2024 - Jan 2025",
    description: [
      "As a Full Stack Developer at the University of Nebraska - Lincoln, I designed and developed scalable web applications using React, C#, and AWS. My work included building responsive user interfaces, deploying cloud-based solutions with Docker and Kubernetes, and optimizing system performance. I implemented real-time data visualization and QAQC modules, improving data accuracy and accessibility. Additionally, I conducted unit and integration testing using Jest and JUnit, ensuring system reliability and seamless functionality across applications."
    ],
    image: "/images/Image.jpg",
  },
  {
    company: "University of Nebraska - Lincoln",
    role: "Undergraduate Research Assistant",
    duration: "Jan 2023 - Jan 2024",
    description: [
      "As an Undergraduate Research Assistant at the University of Nebraska - Lincoln, I worked on two distinct research projects:"
    ],
    bulletPoints: [
      "KLEE & Symbolic Execution: I conducted research on symbolic execution with KLEE, optimizing its integration and execution speed for software verification. I deployed KLEE in a Docker environment, reducing setup time by 40%, and contributed to its documentation and implementation within existing projects.",
      "Eye-Tracking & UML Diagrams: I analyzed user interaction patterns through eye-tracking studies to refine UML diagrams, improving interpretability and reducing cognitive load by 15%. I also designed and implemented relational database architecture to enhance the integrity of eye-tracking data, increasing accuracy by 10%. Additionally, I refined UML testing methodologies to align diagram structures with user cognition, leading to better training outcomes."
    ],
    image: "/images/Image.jpg",
  },
];

const projects = [
  {
    title: "MAARS Web Application:",
    description: "Built a scalable, component-based web application using Angular, TypeScript, and SCSS, improving UI performance and maintainability. Developed reusable Angular services, including a Google Maps Loader Service, which optimized API call latency and map rendering.",
  },
  {
    title: "E-commerce MVC Application:",
    description: "Developed NutriActive Supplements, an eCommerce web application using C#, ASP.NET MVC, and SQL Server, enabling seamless product browsing and transactions. Implemented secure authentication, optimized search functionality, and enhanced database performance, reducing query execution time by 20%.",
  },
  {
    title: "Bumper Cars Invoice System:",
    description: "Designed a Java-based invoice processing system, implementing OOP principles, inheritance, and polymorphism for managing various purchase types. Developed a relational database schema in SQL Server, reducing query execution time by 30% and improving system stability with exception handling and unit tests using JUnit.",
  },
];

function ExperienceProjects() {
  return (
    <div className="experience-projects-page">
      {/* Navigation */}
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
      </nav>

      {/* Experience Section */}
      <h1 className="section-title">Experience</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <img src={exp.image} alt={exp.company} className="experience-img" />
            <div className="experience-details">
              <h2 className="company-name">{exp.company}</h2>
              <p className="role">{exp.role}</p>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                {/* Add bullet points only if they exist */}
                {exp.bulletPoints && (
                  <ul>
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Add this new section */}
      <a
        href="https://github.com/SCVaitla"
        target="_blank"
        rel="noopener noreferrer"
        className="more-projects-link"
      >
        <span>For more projects</span>
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}

export default ExperienceProjects;

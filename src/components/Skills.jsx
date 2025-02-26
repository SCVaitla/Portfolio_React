import { Link } from "react-router-dom";
import "../styles/Skills.css"; // Import styles

const skillCategories = [
  {
    title: "Languages & Frameworks",
    isBold: true,
    skills: [
      { name: "Java", icon: "fab fa-java", color: "#007396" },
      { name: "C#", icon: "fas fa-code", color: "#9b4993" },
      { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
      { name: "TypeScript", icon: "fas fa-code", color: "#00273f" },
      { name: "Python", icon: "fab fa-python", color: "#306998" },
      { name: ".NET", icon: "fas fa-net skill-icon", color: "#8F00FF" },
      { name: "NodeJS", icon: "fab fa-node", color: "#68a063" },
      { name: "C", icon: "fas fa-code", color: "#ADD8E6" },
      { name: "C++", icon: "fas fa-code", color: "#00599c" },
      { name: "R", icon: "fas fa-code", color: "#4F7942" },
    ],
  },
  {
    title: "Web & Frontend Technologies",
    isBold: true,
    skills: [
      { name: "Angular", icon: "fab fa-angular", color: "#dd1b16" },
      { name: "React", icon: "fab fa-react", color: "#61DBFB" },
      { name: "Redux", icon: "fas fa-redux skill-icon", color: "#8F00FF" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
      { name: "SCSS", icon: "fas fa-code", color: "3BBAC1" },
      { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
      { name: "REST APIs", icon: "fas fa-rest api skill-icon", color: "#09BDF7" },
      { name: "Postman", icon: "fas fa-postman skill-icon", color: "#F78B09" },
    ],
  },
  {
    title: "Database & Data Management",
    isBold: false,
    skills: [{ name: "SQL", icon: "fas fa-database", color: "#4479a1" }],
  },
  {
    title: "Cloud, Deployment & Monitoring",
    isBold: false,
    skills: [
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078d4" },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
      { name: "DataDog", icon: "fas fa-chart-line skill-icon", color: "#7150B2" },
    ],
  },
  {
    title: "Testing & CI/CD",
    isBold: false,
    skills: [
      { name: "JUnit", icon: "fas fa-JUnit skill-icon", color: "#E86434" },
      { name: "Selenium", icon: "fab fa-searchengin", color: "#43b02a" },
      { name: "Cypress", icon: "fas fa-Cypress skill-icon", color: "#3DEE97" },
      { name: "Travis CI", icon: "fas fa-Travis CI skill-icon", color: "#B90E0A" },
      { name: "Jest", icon: "fas fa-Jest skill-icon", color: "#7E2811" },
    ],
  },
  {
    title: "Data Visualization",
    isBold: false,
    skills: [
      { name: "Tableau", icon: "fas fa-chart-pie", color: "#e97627" },
      { name: "Power BI", icon: "fas fa-chart-bar", color: "#f2c811" },
    ],
  },
  {
    title: "Tools & Version Control",
    isBold: false,
    skills: [
      { name: "GitHub", icon: "fab fa-github", color: "#000000" },
      { name: "GitLab", icon: "fab fa-gitlab", color: "#fc6d26" },
      { name: "JIRA", icon: "fab fa-jira", color: "#0052cc" },
      { name: "Swagger UI", icon: "fas fa-Swagger UI skill-icon", color: "#03AC13" },
      { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Endevours</Link>
      </nav>

      {/* Skills Section */}
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>

        {skillCategories.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className={category.isBold ? "category-title bold" : "category-title"}>
              {category.title}
            </h2>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-box" style={{ backgroundColor: skill.color || "#333" }}>
                  {skill.isSvg ? (
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  ) : (
                    <i className={`${skill.icon} skill-icon`} />
                  )}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

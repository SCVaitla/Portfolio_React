import Navbar from "./Navbar";
import { skillCategories } from "../data/profile";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="page page--skills">
      <Navbar />

      <main className="skills">
        <h1 className="section-title">Skills</h1>

        {skillCategories.map((category) => (
          <section key={category.title} className="skills__category">
            <h2 className="skills__category-title">{category.title}</h2>
            <ul className="skills__grid">
              {category.skills.map((skill) => (
                <li key={skill.name} className="skill-box" style={{ "--skill-color": skill.color }}>
                  <i className={`${skill.icon} skill-box__icon`} aria-hidden="true" />
                  <span className="skill-box__name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Skills;

import Navbar from "./Navbar";
import { experiences, projects, profile } from "../data/profile";
import "../styles/Projects.css";

function initials(name) {
  return name
    .replace(/[^A-Za-z ]/g, " ")
    .split(/\s+/)
    .filter((w) => w && w[0] === w[0].toUpperCase())
    .slice(0, 3)
    .map((w) => w[0])
    .join("");
}

function Tags({ tags }) {
  if (!tags?.length) return null;
  return (
    <ul className="tags">
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function BulletList({ items }) {
  return (
    <ul className="exp-card__bullets">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

function ExperienceCard({ exp }) {
  return (
    <article className={`exp-card${exp.current ? " exp-card--current" : ""}`}>
      <div className="exp-card__logo">
        {exp.image ? (
          <img src={exp.image} alt="" />
        ) : (
          <span aria-hidden="true" className={exp.badge?.length > 3 ? "is-long" : ""}>
            {exp.badge || initials(exp.company)}
          </span>
        )}
      </div>

      <div className="exp-card__body">
        <div className="exp-card__head">
          <div>
            <h3 className="exp-card__role">{exp.role}</h3>
            <p className="exp-card__company">
              {exp.company}
              {exp.type && <span> · {exp.type}</span>}
            </p>
          </div>
          {exp.current && <span className="badge-current">Current</span>}
        </div>
        <p className="exp-card__meta">
          {exp.duration}
          {exp.location && <> · {exp.location}</>}
        </p>

        {exp.summary && <p className="exp-card__summary">{exp.summary}</p>}
        {exp.bullets && <BulletList items={exp.bullets} />}
        {exp.groups?.map((g) => (
          <div key={g.title} className="exp-card__group">
            <h4>{g.title}</h4>
            <BulletList items={g.bullets} />
          </div>
        ))}
        <Tags tags={exp.tags} />
      </div>
    </article>
  );
}

function ExperienceProjects() {
  return (
    <div className="page page--projects">
      <Navbar />

      <main className="endeavors">
        <h1 className="section-title">Experience</h1>
        <div className="exp-list">
          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
          ))}
        </div>

        <h1 className="section-title">Projects</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <Tags tags={project.tags} />
            </article>
          ))}
        </div>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="more-projects-link"
        >
          <span>More projects on GitHub</span>
          <i className="fab fa-github" aria-hidden="true" />
        </a>
      </main>
    </div>
  );
}

export default ExperienceProjects;

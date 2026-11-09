import { Carousel } from "react-bootstrap";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { profile, education } from "../data/profile";
import "../styles/About.css";

function About() {
  return (
    <div className="page page--about">
      <Navbar />

      <main className="about">
        <section className="about__text">
          <p className="eyebrow">Hi there!</p>
          <h1>I&apos;m {profile.name}</h1>
          <p className="about__summary">{profile.summary}</p>
          <SocialLinks />
        </section>

        <section className="about__education" aria-label="Education">
          <h2 className="about__education-title">Education</h2>
          <Carousel indicators interval={3500} className="edu-carousel">
            {education.map((school) => (
              <Carousel.Item key={school.name}>
                <div className="edu-card">
                  <img src={school.image} alt={school.name} className="edu-card__img" />
                  <h3>{school.name}</h3>
                  {school.detail && <p className="edu-card__detail">{school.detail}</p>}
                  <p className="edu-card__years">{school.years}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </main>
    </div>
  );
}

export default About;

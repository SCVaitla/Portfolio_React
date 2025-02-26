import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "../styles/About.css"; // Importing About Page CSS

function About() {
  return (
    <div className="about-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Endeavors</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
      </nav>

      {/* Main About Section */}
      <div className="about-container">
        {/* Social Media Sidebar */}
        <div className="social-sidebar">
          <a href="https://www.linkedin.com/in/saicharith-vaitla-a21739235/" target="_blank">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/SCVaitla" target="_blank">
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a href="mailto:svaitla3@huskers.unl.edu">
            <i className="fas fa-envelope fa-3x"></i>
          </a>
        </div>

        {/* About Info */}
        <div className="about-text">
          <h1>Hi There!</h1>
          <h1>I&apos;m Saicharith Vaitla</h1>
          <p>
            Experienced Full Stack Developer with 2+ years of expertise in building scalable, high-performance applications using Java, React, SQL, and Azure. Strong background in secure coding, CI/CD pipelines, and test-driven development, ensuring robust and efficient software solutions. Adept at optimizing backend systems, developing intuitive UIs, and collaborating cross-functionally to drive innovation. Passionate about automation, problem-solving, and delivering impactful technology solutions.



          </p>
          <div className="about-details">
          </div>
        </div>

        {/* Education Carousel */}
        <div className="education-carousel">
          <Carousel indicators={false} controls={true} interval={3000}>
            <Carousel.Item>
              <img src="/images/Image.jpg" alt="University of Nebraska-Lincoln" className="carousel-img" />
              <div className="carousel-caption">
                <h2>University of Nebraska-Lincoln</h2>
                <h5>2021-2025</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/narayana.jpg" alt="Narayana Jr College" className="carousel-img" />
              <div className="carousel-caption">
                <h2>Narayana Jr College</h2>
                <h5>2019-2021</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/narayana-2.jpg" alt="Narayana Olympiad School" className="carousel-img" />
              <div className="carousel-caption">
                <h2>Narayana Olympiad School</h2>
                <h5>2015-2019</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/dps.jpg" alt="Delhi Public School" className="carousel-img" />
              <div className="carousel-caption">
                <h2>Delhi Public School</h2>
                <h5>2008-2015</h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;

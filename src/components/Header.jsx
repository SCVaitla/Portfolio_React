import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../index.css";


function Header() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Software Developer";


  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 300); // Removes cursor 300ms after typing
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (

    <header className="header">

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
      {/* Navigation Bar */}

      <nav className="nav-bar">
        <Link to="/about">About</Link>
        <Link to="/projects">Endeavors</Link>
        <Link to="/skills">Skills</Link>
      </nav>

      {/* Profile Image */}
      <img src="/images/profile.jpg" alt="Profile" className="profile-image" />



      {/* Name & Title */}
      <h1>Hey, I&apos;m Saicharith Vaitla</h1>
      <h2 className="animated-text">
        {text}
        {showCursor && <span className="cursor">|</span>} {/* Cursor disappears when showCursor is false */}
      </h2>
    </header>
  );

}

export default Header;

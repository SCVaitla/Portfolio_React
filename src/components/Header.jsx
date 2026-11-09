import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/profile";

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1600;

// Types each role, holds, deletes, and moves to the next one.
function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === word) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function Header() {
  const text = useTypewriter(profile.roles);

  return (
    <div className="page page--home">
      <Navbar />
      <header className="hero">
        <img src="/images/profile.jpg" alt={profile.name} className="profile-image" />
        <h1 className="hero__name">Hey, I&apos;m {profile.name}</h1>
        <h2 className="hero__role" aria-label={profile.roles.join(", ")}>
          <span aria-hidden="true">{text}</span>
          <span className="cursor" aria-hidden="true" />
        </h2>
        <p className="hero__current">
          Currently <strong>AI Workflow Engineer</strong> at the University of Nebraska–Lincoln
        </p>
        <div className="hero__actions">
          <Link to="/projects" className="btn-outline">View my work</Link>
          <a href={profile.links.email} className="btn-solid">Get in touch</a>
        </div>
        <SocialLinks />
      </header>
    </div>
  );
}

export default Header;

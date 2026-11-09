import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Endeavors" },
  { to: "/skills", label: "Skills" },
];

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;

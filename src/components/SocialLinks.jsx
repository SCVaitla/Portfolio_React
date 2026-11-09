import { profile } from "../data/profile";

const items = [
  { href: profile.links.linkedin, icon: "fab fa-linkedin", label: "LinkedIn", external: true },
  { href: profile.links.github, icon: "fab fa-github", label: "GitHub", external: true },
  { href: profile.links.email, icon: "fas fa-envelope", label: "Email" },
];

function SocialLinks() {
  return (
    <div className="social-links">
      {items.map(({ href, icon, label, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <i className={icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;

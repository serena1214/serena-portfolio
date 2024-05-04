import "./nav.css";

type Link = {
  label: string;
  id: string;
};
const links: Link[] = [
  { label: "about", id: "about_id" },
  { label: "project", id: "project_id" },
  { label: "visual", id: "visual_id" },
  { label: "video", id: "video_id" },
  { label: "contact", id: "contact_id" },
];

export default function Nav() {
  return (
    <nav className="NAV">
      <ul>
        {links.map((l) => {
          return (
            <li key={l.label} role="link" tabIndex={0}>
              {l.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

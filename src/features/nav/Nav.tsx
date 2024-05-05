import { Link, NavLink } from "react-router-dom";
import { RouteNames } from "../../stores/routeStore";
import "./nav.css";

type Link = {
  label: string;
  id: string;
};
const links: Link[] = Object.values(RouteNames).map((r) => ({
  label: r,
  id: `${r}_id`,
}));

export default function Nav() {
  return (
    <nav className="NAV">
      <ul>
        {links.map((l) => {
          if (l.label === RouteNames.home) {
            return null;
          }
          return (
            <li key={l.label} role="link" tabIndex={0}>
              <NavLink to={l.label}>{l.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

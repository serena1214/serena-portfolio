import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouteNames } from "../../stores/routeStore";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import "./home.css";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/${RouteNames.projects}`) {
      const projects = document.getElementById(`${RouteNames.projects}_id`)!;
      projects.scrollIntoView();
    }
  }, [location]);

  return (
    <div className="HOME">
      <Hero />
      <Projects />
    </div>
  );
}

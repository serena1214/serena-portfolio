import serenaName from "../../../assets/serena-name.png";
import FilmStrip from "../../../features/filmStrip/FilmStrip";
import polaroids from "../../../assets/serena-polaroids.png";
import actionOpen from "../../../assets/action-open.png";
import actionClosed from "../../../assets/action-closed.png";
import "./hero.css";
import { RouteNames } from "../../../stores/routeStore";

export default function Hero() {
  const navigateToProjects = () => {
    const projects = document.getElementById(`${RouteNames.projects}_id`)!;
    projects.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="HERO">
      <div className="hero__text">
        <span className="hero__text__one">
          <span style={{ width: "max-content" }}>Hey there, I'm</span>
          <img className="landing__serena_name" src={serenaName} />
        </span>
        <span className="hero__text__two">
          a UI/UX designer and video producer
        </span>
        <span className="hero__text__three">
          I'm all about creating digital stories
        </span>
        <span className="hero__text__four">
          that grab attention and keep users hooked.
        </span>
        <span>🌴 Los Angeles, California</span>
      </div>
      <div className="hero__visual">
        <img src={polaroids} />
        <FilmStrip />
      </div>
      <div className="hero__action_button__container">
        <div
          className="hero__action_button"
          role="button"
          tabIndex={0}
          onClick={navigateToProjects}
        >
          <img src={actionOpen} className="hero__action_button__open" />
          <img src={actionClosed} className="hero__action_button__closed" />
        </div>
      </div>
    </section>
  );
}

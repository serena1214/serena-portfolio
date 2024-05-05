import serenaFilm from "../../assets/serena-film-strip.jpg";
import "./filmStrip.css";

export default function FilmStrip() {
  return (
    <div className="FILM_STRIP">
      <img src={serenaFilm} />
      <img src={serenaFilm} />
      <img src={serenaFilm} />
    </div>
  );
}

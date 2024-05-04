import brownLogo from "../../assets/logo-brown.svg";
import Nav from "../nav/Nav";
import "./header.css";

export default function Header() {
  return (
    <header className="HEADER">
      <img className="header__logo" src={brownLogo} />
      <Nav />
    </header>
  );
}

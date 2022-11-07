import "../styles/Header.css";
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <div className="Header">
      <p className="header-Title">Kak</p>
      <div>
        <Link className="anchor-tag" to="/portfolio/">
          Inicio
        </Link>
        <Link className="anchor-tag" to="/portfolio/about">
          Acerca
        </Link>
        <Link className="anchor-tag" to="/portfolio/projects">
          Proyectos
        </Link>
        <Link className="anchor-tag" to="/portfolio/contact">
          Contacto
        </Link>
        <img src="./imgs/menu.png" alt="menu icon"></img>
      </div>
    </div>
  );
};

export default Header;

import "../styles/Header.css";
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <div className="Header">
      <p className="header-Title">Kak</p>
      <div>
        <Link className="anchor-tag" to="/">
          Inicio
        </Link>
        <Link className="anchor-tag" to="/about">
          Acerca
        </Link>
        <Link className="anchor-tag" to="/projects">
          Proyectos
        </Link>
        <Link className="anchor-tag" to="/contact">
          Contacto
        </Link>
        <img src="./imgs/menu.png" alt="menu icon"></img>
      </div>
    </div>
  );
};

export default Header;

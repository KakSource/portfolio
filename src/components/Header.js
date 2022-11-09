import "../styles/Header.css";
import { Link } from "react-router-dom";
import menu_img from "../assets/imgs/menu.png";
import { useState } from "react";

let Header = () => {
  const [musicPlayer, setMusicPlayer] = useState(false);
  const [memeMusicPlayer, setMemeMusicPlayer] = useState(false);

  return (
    <div className="Header">
      <p className="header-Title">Kak</p>
      <span className="musicPlayer">
        {!musicPlayer && (
          <>
            <p>I make music too! Do you want to listen?</p>
            <button onClick={() => setMusicPlayer((prevShown) => !prevShown)}>
              Yes
            </button>
          </>
        )}
        {musicPlayer && <div>(WIP *sad noises*)</div>}
        {memeMusicPlayer && <div>(WIP *sad noises*)</div>}
      </span>
      <div>
        <Link className="anchor-tag" to="/portfolio/">
          <p>Inicio</p>
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
        <img src={menu_img} alt="menu icon"></img>
      </div>
    </div>
  );
};

export default Header;

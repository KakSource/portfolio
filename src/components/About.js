import { useState } from "react";
import "../styles/About.css";
import downArrowImage from "../assets/imgs/down-arrow.png";

let About = () => {
  const [displayFirstParagraph, setDisplayFirstParagraph] = useState(false);
  const [displaySecondParagraph, setDisplaySecondParagraph] = useState(false);

  return (
    <div className="About">
      <div>
        <div className="inline-box">
          <h2>¿Quien soy?</h2>
          <img
            onClick={() => setDisplayFirstParagraph((prevShown) => !prevShown)}
            className="down-arrow"
            src={downArrowImage}
            alt="down arrow icon"
          ></img>
        </div>
        {displayFirstParagraph && (
          <p>
            Soy Gaston Bernardez, un desarrollador front-end en progreso, empeze
            hace 1-2 a;os mi carrera como programador autodidacta, siempre me
            gusto aprender cosas por mi cuenta, tocando todo, viendo como las
            cosas funcionan, el por que de que el reloj haga tick-tack, la
            realidad es que no lo pude hacer solo y lo hice con la gran ayuda de
            mentores como John Smilga de Coding Addict, Bob Ziroll en Scrimba, y
            bueno tambien en comunidades gratuitas como FreeCodeCamp (que de
            hecho ahi empeze el curso en el cual luego abandone para ver
            diferentes campos de programacion como c, c# y python, finalmente me
            decidi por el desarrollo web que era lo que tanto me habia esforzado
            por entender y queria terminar con una cosa primero, aunque terminar
            es algo imposible jaja).
          </p>
        )}
      </div>
      <div>
        <div className="inline-box">
          <h2>¿Te dedicas a algo mas ademas de la programacion?</h2>
          <img
            onClick={() => setDisplaySecondParagraph((prevShown) => !prevShown)}
            className="down-arrow"
            src={downArrowImage}
            alt="down arrow icon"
          ></img>
        </div>
        {displaySecondParagraph && (
          <p>
            Si, de hecho sigo trabajando como pintor que era mi rubro anterior
            pero siempre fui mas un geek de la pc, siempre pase mucho tiempo en
            la pc ya desde chico con los anos tuve que ir separando mi conexion
            de la pc por lo personal jaja pero siempre me dijeron, tenes que ser
            programador que esto que el otro... bueno, hace 2 anos me decidi y
            empeze a estudiar, no pense que me iba a gustar tanto, si bien
            todavia no puedo hacer lo que quiero realmente (tengo que aprender
            mucho mas) no bajo los brazos, sigo estudiando... Tambien hago
            musica en mis tiempos libres, el cual de hecho tengo un instagram
            propio dedicado a eso 'Maska Djabla' y un canal de Youtube, pero
            nunca me dedique a meterles tanta publicidad.
          </p>
        )}
      </div>
    </div>
  );
};

export default About;

import { useState } from "react";
import "../styles/About.css";
import downArrowImage from "../assets/imgs/down-arrow.png";

let About = () => {
  const [displayFirstParagraph, setDisplayFirstParagraph] = useState(false);
  const [displaySecondParagraph, setDisplaySecondParagraph] = useState(false);

  return (
    <div className="redundantFix">
      <div className="About">
        <div>
          <div className="inline-box">
            <h2
              onClick={() =>
                setDisplayFirstParagraph((prevShown) => !prevShown)
              }
            >
              ¿Quién soy?
            </h2>
            <img
              onClick={() =>
                setDisplayFirstParagraph((prevShown) => !prevShown)
              }
              className="down-arrow"
              src={downArrowImage}
              alt="down arrow icon"
            ></img>
          </div>
          {displayFirstParagraph && (
            <p>
              Soy <b>Gaston Bernardez</b>, un desarrollador front-end en
              crecimiento, empeze hace 1 año mi carrera como programador
              (autodidacta), siempre me gustó aprender cosas por mi cuenta,
              tocando todo, viendo como las cosas funcionan, por qué el reloj
              hace tick-tack, la realidad es que no lo pude hacer solo y lo hice
              con la gran ayuda de mentores como John Smilga de Coding Addict,
              Bob Ziroll en Scrimba, y bueno tambien en comunidades gratuitas
              como FreeCodeCamp (que de hecho ahí empecé el curso en el cual
              luego abandoné para ver diferentes campos de la programación como
              C, C# y Python, finalmente me decidí por el desarrollo web que era
              lo que tanto me habia esforzado por entender y queria terminar con
              una cosa primero, aunque terminar con esa cosa primero es algo
              imposible jaja).
            </p>
          )}
        </div>
        <div>
          <div className="inline-box">
            <h2
              onClick={() =>
                setDisplaySecondParagraph((prevShown) => !prevShown)
              }
            >
              ¿Te dedicás a algo más además de la programación?
            </h2>
            <img
              onClick={() =>
                setDisplaySecondParagraph((prevShown) => !prevShown)
              }
              className="down-arrow"
              src={downArrowImage}
              alt="down arrow icon"
            ></img>
          </div>
          {displaySecondParagraph && (
            <p>
              Sí, de hecho sigo trabajando como pintor en mi tiempos libres (más
              que nada porque me gusta) que era mi rubro anterior pero siempre
              fui mas un geek de la pc, siempre pase mucho tiempo en la pc ya
              desde chico con los años tuve que ir separando mi conexión de la
              pc por lo personal (trabajo, etc.) jaja.. pero siempre me dijeron,
              tenes que ser programador que esto que el otro... bueno, hace 1
              año y un poquito más me decidí y empecé a estudiar, no pense que
              me iba a gustar tanto, si bien todavia no puedo hacer lo que
              quiero realmente (tengo que aprender mucho más) no bajo los
              brazos, sigo estudiando... Tambien hago música en mis tiempos
              libres, el cual de hecho tengo un instagram propio dedicado a eso
              'Maska Djabla' y un canal de Youtube, pero nunca me dediqué a
              meterles tanta publicidad (no me siento tan seguro de mis
              habilidades pero I try anyways).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

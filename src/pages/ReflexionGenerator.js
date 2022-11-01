import "./styles/ReflexionGenerator.css";
import { useState } from "react";
import reflections from "./data/reflections.json";

let ReflexionGenerator = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  let RNG;

  let changer = () => {
    RNG = Math.floor(Math.random() * reflections.length);
    setUrl(reflections[RNG].url);
    setTitle(reflections[RNG].title);
    console.log(url);
  };

  return (
    <>
      <div className="ReflexionGenerator">
        <div className="holder">
          <button onClick={() => changer()}>REFLECTION</button>
          <h3>{title}</h3>
          <img src={url}></img>
        </div>
      </div>
    </>
  );
};

export default ReflexionGenerator;

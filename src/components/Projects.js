import "../styles/Projects.css";
import data from "../data/Projects.json";

let Projects = () => {
  let dataContent = data.map((item) => (
    <a href={item.url}>
      <h2>{item.title}</h2>
      <img src={item.img}></img>
    </a>
  ));

  return <div className="Projects">{dataContent}</div>;
};

export default Projects;

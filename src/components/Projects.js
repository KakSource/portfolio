import "../styles/Projects.css";
import backgroundShifter_img from "../assets/imgs/projects/background-shifter.png";
import dailySchedule_img from "../assets/imgs/projects/dailyschedule.png";
import reflectionGenerator_img from "../assets/imgs/projects/reflection-generator.png";
import toDoList_img from "../assets/imgs/projects/todolist.png";

let data = [
  {
    title: "Background Shifter",
    url: "http://localhost:3000/portfolio/backgroundshifter",
    img: backgroundShifter_img,
    alt: "background shifter image",
  },
  {
    title: "Daily Schedule",
    url: "http://localhost:3000/portfolio/dailyschedule",
    img: dailySchedule_img,
    alt: "daily schedule image",
  },
  {
    title: "To do list",
    url: "http://localhost:3000/portfolio/todolist",
    img: reflectionGenerator_img,
    alt: "reflection generator image",
  },
  {
    title: "Reflexion Generator",
    url: "http://localhost:3000/portfolio/reflexiongenerator",
    img: toDoList_img,
    alt: "to do list image",
  },
];

let Projects = () => {
  let dataContent = data.map((item) => (
    <a href={item.url}>
      <h2>{item.title}</h2>
      <img alt={item.alt} src={item.img}></img>
    </a>
  ));

  return <div className="Projects">{dataContent}</div>;
};

export default Projects;

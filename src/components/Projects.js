import "../styles/Projects.css";
import backgroundShifter_img from "../assets/imgs/projects/background-shifter.png";
import dailySchedule_img from "../assets/imgs/projects/dailyschedule.png";
import reflectionGenerator_img from "../assets/imgs/projects/reflection-generator.png";
import toDoList_img from "../assets/imgs/projects/todolist.png";

let data = [
  {
    title: "Background Shifter",
    url: `${window.location.href}/background-shifter`,
    img: backgroundShifter_img,
    alt: "Background Shifter Application image",
  },
  {
    title: "Daily Schedule",
    url: `${window.location.href}/daily-schedule`,
    img: dailySchedule_img,
    alt: "Daily Schedule Application image",
  },
  {
    title: "To do list",
    url: `${window.location.href}/to-do-list`,
    img: toDoList_img,
    alt: "Reflection Generator Application image",
  },
  {
    title: "Random Reflection Image",
    url: `${window.location.href}/random-reflections`,
    img: reflectionGenerator_img,
    alt: "Random Reflection Application Image",
  },
  {
    title: "Music Player (WIP)",
    url: `${window.location.href}/music-player`,
    img: "NONE",
    alt: "Music Player Application image",
  },
  {
    title: "Random Reflective Quotes (WIP)",
    url: `${window.location.href}/random-quotes`,
    img: "NONE",
    alt: "Random Quote Application image",
  },
  {
    title: "Meme Generator (WIP)",
    url: `${window.location.href}/meme-generator`,
    img: "NONE",
    alt: "Meme Generator Application image",
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

import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import BackgroundShifter from "./pages/BackgroundShifter";
import DailySchedule from "./pages/DailySchedule";
import ToDoList from "./pages/ToDoList";
import ReflexionGenerator from "./pages/ReflexionGenerator";
import RandomQuotes from "./pages/RandomQuotes";
import MusicPlayer from "./pages/MusicPlayer";
import MemeGenerator from "./pages/MemeGenerator";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portfolio/" element={<Body />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route
          path="/portfolio/projects/background-shifter"
          element={<BackgroundShifter />}
        />
        <Route
          path="/portfolio/projects/daily-schedule"
          element={<DailySchedule />}
        />
        <Route path="/portfolio/projects/to-do-list" element={<ToDoList />} />
        <Route
          path="/portfolio/projects/random-reflections"
          element={<RandomReflections />}
        />
        <Route />
        <Route
          path="/portfolio/projects/music-player"
          element={<MusicPlayer />}
        />
        <Route />
        <Route
          path="/portfolio/projects/random-quotes"
          element={<RandomQuotes />}
        />
        <Route
          path="/portfolio/projects/meme-generator"
          element={<MemeGenerator />}
        />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

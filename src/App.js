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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/backgroundshifter" element={<BackgroundShifter />} />
        <Route path="/dailyschedule" element={<DailySchedule />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/reflexiongenerator" element={<ReflexionGenerator />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

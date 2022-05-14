import Me from "./components/me";
import About from "./components/about";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Me />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default App;

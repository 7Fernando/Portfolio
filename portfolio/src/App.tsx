import Me from "./components/me";
import About from "./components/about";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Projects from "./components/projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Me />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

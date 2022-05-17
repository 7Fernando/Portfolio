import Me from "./components/me";
import About from "./components/about";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Cv from "./components/cv";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/cv2" element={<Cv />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Me />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;

import Home from "./component/pages/Home";
import NavBar from "./component/NavBar/NavBar";
import About from "./component/pages/About";
import Skills from "./component/pages/Skills";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-gray-950 text-white">
      <NavBar />
      <main>
        <section
          id="home"
          className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center bg-gray-900 "
        >
          <Home />
        </section>

        <section id="about" className="min-h-[calc(100vh-4rem)] scroll-mt-16 ">
          <About />
        </section>

        <section
          id="skills"
          className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center bg-gray-900"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center bg-gray-900"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;

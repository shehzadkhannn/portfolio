import { Eye } from "lucide-react";

import Props from "../../assets/propsdriling.png";
import NoteApp from "../../assets/noteApp.png";
import Pagenation from "../../assets/pegenation.png";

import Rps from "../../assets/rock-paper-scissor.png";
import Ttt from "../../assets/tik-tac-toe.png";
import Calculator from "../../assets/calculator.png";
import ZoomIn from "../animation/ZoomIn";

const Projects = () => {
  const Proj = [
    {
      imag: Props,
      preview: "https://shehzadkhannn.github.io/props-driling/",
      projName: "propsdriling",
    },
    {
      imag: NoteApp,
      preview: "https://shehzadkhannn.github.io/note-app/",
      projName: "Note App",
    },
    {
      imag: Pagenation,
      preview: "https://shehzadkhannn.github.io/pagination/",
      projName: "pagenation",
    },

    {
      imag: Rps,
      preview: "https://shehzadkhannn.github.io/rock-paper-scissor/",
      projName: "Rock paper-scissor",
    },
    {
      imag: Ttt,
      preview: "https://shehzadkhannn.github.io/tik-tak-toe/",
      projName: "tik-tak-toe",
    },
    {
      imag: Calculator,
      preview: "https://shehzadkhannn.github.io/calculator/",
      projName: "Calculator",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center md:mt-20 md:mb-20 mb-10 mt-10">
      <ZoomIn>
        {" "}
        <h1 className=" lg:text-5xl md:text-4xl text-3xl font-bold">
          Look at my <em className="text-orange-500"> Portfolio </em>
        </h1>
      </ZoomIn>
      <ZoomIn>
        {" "}
        <p className="lg:px-50 md:px-20 px-5 py-7 md:text-lg text-sm text-gray-300">
          I’m a Front-End Developer focused on creating responsive and
          interactive websites using React.js, JavaScript, HTML, CSS, and
          Tailwind CSS. This portfolio is designed to showcase my real-world
          projects, demonstrate my problem-solving and frontend development
          skills, and help potential clients and employers understand what I can
          build.
        </p>
      </ZoomIn>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5  ">
        {Proj.map((proj) => (
          <ZoomIn>
            {" "}
            <div
              key={proj.projName}
              className="group relative hover:scale-105 overflow-hidden rounded-3xl transition-transform duration-300 shadow-[0_0_8px_white] md:shadow-[0_0_15px_white]  "
            >
              <img
                className="group-hover:scale-110  rounded-3xl transition-transform duration-500 group-hover:blur-[1px]"
                src={proj.imag}
                alt={proj.projName}
              />
              <h3 className="absolute bottom-1 left-3 px-5 py-1 text-black bg-gray-500 rounded-2xl text-sm ">
                {proj.projName}
              </h3>
              <div className="  absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 ">
                <a
                  href={proj.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black rounded-full text-9xl bg-orange-500 p-3 border-2 border-black hover:bg-black hover:text-white"
                >
                  {" "}
                  <Eye size={35} />
                </a>
              </div>
            </div>
          </ZoomIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;

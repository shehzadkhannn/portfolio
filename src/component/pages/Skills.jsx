import Html from "../../assets/html-5.png";
import Css from "../../assets/css-3.png";
import JavaScript from "../../assets/java-script.png";
import React from "../../assets/React.png";
import Tailwind from "../../assets/Tailwind CSS.png";
import Git from "../../assets/icons8-git-96.png";
import Github from "../../assets/icons8-github-logo-375.png";
import ZoomIn from "../animation/ZoomIn";
const Skills = () => {
  const material = [
    {
      logo: Html,
      text: "HTML5",
    },
    {
      logo: Css,
      text: "CSS-3",
    },
    {
      logo: JavaScript,
      text: "JavaScript",
    },
    {
      logo: React,
      text: "React.js",
    },
    {
      logo: Tailwind,
      text: "Tailwind CSS",
    },
    {
      logo: Git,
      text: "Git",
    },
    {
      logo: Github,
      text: "Git Hub",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mb-8 md:mb-25 w-full md:mt-25  mt-8">
      <div className="flex flex-col items-center justify-center  gap-10">
        <ZoomIn>
          <h1 className="font-bold text-5xl">
            My Work <em className="text-orange-500"> Skills </em>
          </h1>
        </ZoomIn>
        <ZoomIn>
          <p className="lg:px-70 md:px-30 text-base text-gray-300 px-5">
            I have a strong foundation in frontend development, with a focus on
            creating modern, responsive, and user-friendly websites. I work with
            HTML, CSS, JavaScript, React.js, and Tailwind CSS to build clean and
            interactive web interfaces. I’m comfortable working with reusable
            React components, responsive layouts, modern UI design, and routing.
            I’m continuously improving my skills by building real-world projects
            and exploring better ways to create fast, accessible, and visually
            appealing web experiences.
          </p>
        </ZoomIn>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 box-border  w-full lg:px-30 md:px-20 px-5 mt-10 md:mt-20 ">
        {material.map((skill) => (
          <ZoomIn>
            {" "}
            <div
              className="transition-transform duration-500 ease-in-out hover:scale-105 lg:hover:scale-110 bg-gray-800  w-full h-70  gap-10 flex flex-col  rounded-2xl justify-center items-center min-w-0 border-2 border-gray-400 shadow-[0_0_8px_white] md:shadow-[0_0_15px_white]"
              key={skill.text}
            >
              <img
                className="w-15 h-15"
                src={skill.logo}
                alt={`${skill.text} logo`}
              />
              <p className="font-bold text-lg">{skill.text}</p>
            </div>
          </ZoomIn>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import Profile from "../../assets/shazy.jpeg";
import ZoomIn from "../animation/ZoomIn";
const Home = () => {
  return (
    <div className="text-white mb-40 flex flex-col-reverse ml-7 justify-center items-center lg:flex-row ">
      <div>
        <p className="bg-gray-800 px-5 py-3 rounded-4xl inline border-2 border-gray-400 ">
          Hillo!
        </p>

        <div className="mt-10">
          {" "}
          <ZoomIn>
            <div className="flex md:flex-col">
              <h1 className="lg:text-7xl font-bold md:text-5xl text-3xl">
                I'M MUHHAMAD SHEHZAD{" "}
              </h1>
            </div>
          </ZoomIn>
          <ZoomIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl">
              Frontend Developer
            </h2>
          </ZoomIn>
          <ZoomIn>
            <p className="mt-9">
              I’m a passionate Frontend Developer specializing in React.js and
              Tailwind CSS. I enjoy transforming ideas into clean, modern, and
              responsive web experiences that look great on every screen. With a
              focus on reusable components, smooth user interfaces, and
              responsive design, I’m constantly learning and improving my skills
              to build websites that are both visually appealing and easy to
              use. React .{" "}
            </p>
          </ZoomIn>
        </div>
        <ZoomIn>
          <div className="mt-10 w-fit hover:scale-110 transition-transform duration-500">
            <a
              href="#contact"
              className="px-5 py-3 rounded-3xl bg-gray-800  hover:bg-orange-500 font-bold  "
            >
              Hire me
            </a>
          </div>
        </ZoomIn>
      </div>
      <div className="p-5 lg:p-10 m-2 border-2 rounded-full border-amber-50 shrink-0 ">
        <ZoomIn>
          {" "}
          <img
            className="  shrink-0 rounded-full object-cover h-80 w-80 md:h-100 md:w-100 lg:h-150 lg:w-150"
            src={Profile}
            alt="profile pic"
          />
        </ZoomIn>
      </div>
    </div>
  );
};

export default Home;

import Profile from "../../assets/shazy.jpeg";
import ZoomIn from "../animation/ZoomIn";
const Home = () => {
  return (
    <div className="text-white mb-10 md:mb-40 flex flex-col-reverse px-7 justify-center items-center lg:flex-row ">
      <div className="mt-5 md:mt-1">
        <p className="bg-gray-800 px-5 py-3 rounded-4xl inline border-2 border-gray-400  ">
          Hillo!
        </p>

        <div className="mt-10">
          {" "}
          <ZoomIn>
            <div className="flex md:flex-col">
              <h1 className="lg:text-7xl font-bold md:text-5xl text-3xl">
                I'M MUHHAMAD <em className="text-orange-500"> SHEHZAD</em>{" "}
              </h1>
            </div>
          </ZoomIn>
          <ZoomIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl">
              Frontend Developer
            </h2>
          </ZoomIn>
          <ZoomIn>
            <p className="mt-9 text-sm md:text-base">
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
          <div className="mt-10 w-fit hover:scale-110 transition-transform duration-500 ">
            <a
              href="#contact"
              className="px-5 py-3 rounded-3xl bg-gray-800  hover:bg-orange-500 font-bold  border-2 border-gray-400"
            >
              Hire me
            </a>
          </div>
        </ZoomIn>
      </div>
      <div className="p-5 lg:p-10 m-2 border-2 md:rounded-full rounded-3xl border-amber-50 shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.7)] ">
        <ZoomIn>
          {" "}
          <img
            className="  shrink-0 md:rounded-full rounded-3xl object-cover h-60 w-60 md:h-100 md:w-100 lg:h-150 lg:w-150"
            src={Profile}
            alt="profile pic"
          />
        </ZoomIn>
      </div>
    </div>
  );
};

export default Home;

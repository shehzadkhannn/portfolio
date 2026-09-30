import Shazy from "../../assets/shaz2.jpeg";
import ZoomIn from "../animation/ZoomIn";
const About = () => {
  return (
    <div className="flex flex-col mb-40 lg:flex-row text-white p-13 justify-center items-center">
      {" "}
      <img
        className="  shrink-0 rounded-full object-cover h-80 w-80 md:h-100 md:w-100 lg:h-150 lg:w-150 m-7 border-7 border-orange-500"
        src={Shazy}
        alt="profile pic"
      />
      <div>
        <h1 className="bg-gray-800 px-5 py-3 rounded-3xl inline">About me</h1>

        <ZoomIn>
          <h1 className="font-bold lg:text-5xl md:text-4xl mt-15 text-3xl">
            Muhammad Shehzad
          </h1>
        </ZoomIn>
        <ZoomIn>
          {" "}
          <p className="mt-10 text-gray-300  lg:text-lg md:text-base  text-sm">
            I’m a Frontend Developer passionate about creating modern,
            responsive, and engaging web experiences with React.js and Tailwind
            CSS. I enjoy building clean user interfaces, reusable components,
            and websites that work seamlessly across different screen sizes. I’m
            constantly learning, experimenting, and turning ideas into
            real-world projects through code.
          </p>
        </ZoomIn>
        {/* this is card for nmbr name etc */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-gray-800 items-center p-8 mt-6 rounded-2xl gap-15">
          <ZoomIn>
            {" "}
            <div>
              <p className="text-orange-500">Name:</p>
              <h1>Muhammad shehzad</h1>
            </div>
            <div>
              <p className="text-orange-500">Phone</p>
              <a
                href="tel:+923473125155"
                className="hover:underline hover:text-orange-500"
              >
                03473125155
              </a>
            </div>
            <div>
              <p className="text-orange-500">Email</p>
              <a
                href="mailto:shehzadkhanagra@gmail.com"
                className="hover:underline hover:text-orange-500"
              >
                shehzadkhanagra@gmail.com
              </a>
            </div>
            <div>
              <p className="text-orange-500">GitHub</p>
              <a
                href="https://github.com/shehzadkhannn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:c"
              >
                shehzadkhannn
              </a>
            </div>
          </ZoomIn>
        </div>
        <ZoomIn>
          {" "}
          <div className="mt-8 origin-center hover:scale-110 transition-transform duration-500    w-fit">
            <a
              className="px-5 py-3  rounded-3xl bg-gray-700  hover:bg-orange-500 font-bold  "
              href="#contact"
            >
              Contact me
            </a>
          </div>
        </ZoomIn>
      </div>
    </div>
  );
};

export default About;

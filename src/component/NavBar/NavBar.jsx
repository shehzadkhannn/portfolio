import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const navLinkClasses =
  "rounded-4xl px-2 py-1 hover:scale-110 hover:bg-orange-500";

const NavBar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-20 flex justify-between p-4 bg-black text-white">
      <div className="flex ">
        <div className=" bg-blue-600 rounded-xl py-1 px-3 flex items-center justify-center lg:text-3xl md:text-2xl text-1.5xl">
          M
        </div>
        <div className="px-3">
          <h1 className="font-semibold lg:text-1xl md:text-[15px] text-sm">
            MUHAMMAD SHEHZAD
          </h1>
          <h3 className="font-extralight text-gray-400 text-[12px] lg:text-sm md:text-xs">
            Frontend Developer
          </h3>
        </div>
      </div>
      {/* this nav links for disktop */}
      <div className="hidden md:flex gap-8">
        <div className="flex lg:gap-3 md-2 rounded-4xl bg-gray-800 py-2 md:text-xs lg:text-sm px-4 items-center">
          {navItems.map(([label, section]) => (
            <a key={section} className={navLinkClasses} href={`#${section}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="bg-white px-3 py-2 rounded-xl text-black flex items-center lg:text-base md:text-sm">
          <h1>Lets work together</h1>
        </div>
      </div>
      {/* this is nav links for mobile */}
      <button
        onClick={() => {
          setIsOpen(!IsOpen);
        }}
        className="md:hidden bg-gray-900 p-2 rounded-xl cursor-pointer shadow-[0_0_8px_white]"
      >
        <Menu />
      </button>
      {IsOpen && (
        <div className="absolute left-4 right-4 top-full z-10 flex flex-col gap-3 rounded-xl bg-gray-800 p-4 text-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map(([label, section]) => (
              <a
                key={section}
                className={navLinkClasses}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="bg-white px-3 py-2 rounded-xl text-black flex items-center justify-center">
            <h1>Lets work together</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

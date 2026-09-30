import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-between px-4 md:px-8 rounded-3xl py-8 items-center bg-gray-900 border-t-2 border-amber-100 ">
      <div className="flex flex-col w-1/2">
        <h1 className="text-orange-500 md:text-lg text:sm">Muhammad Shehzad</h1>
        <p className="text-gray-400 text-xs md:text-sm">
          Thanks for dropping by my portfolio! I'm always open to exciting
          projects and collaborations. Feel free to reach out anytime.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <a
          className="hover:underline hover:text-orange-500 flex items-center justify-center gap-2 whitespace-nowrap"
          href="https://wa.me/923473125155"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
        </a>

        <a
          href="tel:+923473125155"
          className="flex items-center justify-center gap-2 whitespace-nowrap hover:underline hover:text-orange-500"
        >
          <FaPhone size={20} className="rotate-90" />
        </a>
        <a
          href="mailto:shehzadkhanagra@gmail.com"
          className="flex items-center justify-center gap-2 whitespace-nowrap text-sm hover:underline hover:text-orange-500"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/shehzadkhannn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 whitespace-nowrap hover:underline hover:text-orange-500"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="www.linkedin.com/in/muhammad-shehzad-b76005435"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 whitespace-nowrap hover:underline hover:text-orange-500"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

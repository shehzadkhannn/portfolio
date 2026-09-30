import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex w-full justify-center px-4 py-30 ">
      <div className="bg-black lg:px-40 md:px-30 md:py-20 px-15 py-15 lg:py-20 gap-10 flex flex-col rounded-4xl  shadow-[0_0_15px_orange] ">
        <div>
          {" "}
          <a
            className="hover:underline hover:text-orange-500 flex items-center justify-center gap-2 whitespace-nowrap"
            href="https://wa.me/923473125155"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} />
            <span> +923473125155</span>
          </a>
        </div>

        <div>
          <a
            href="tel:+923473125155"
            className="flex items-center justify-center gap-2 whitespace-nowrap hover:underline hover:text-orange-500"
          >
            <FaPhone size={20} className="rotate-90" />
            <span>+923473125155</span>
          </a>
        </div>
        <div>
          <a
            href="mailto:shehzadkhanagra@gmail.com"
            className="flex items-center justify-center gap-2 whitespace-nowrap text-sm hover:underline hover:text-orange-500"
          >
            <FaEnvelope size={20} />
            <span> shehzadkhanagra@gmail.com</span>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/shehzadkhannn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 whitespace-nowrap hover:underline hover:text-orange-500"
          >
            <FaGithub size={20} />
            <span> shehzadkhannn</span>
          </a>
        </div>
        <div>
          <a
            href="www.linkedin.com/in/muhammad-shehzad-b76005435"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 whitespace-nowrap hover:underline hover:text-orange-500"
          >
            <FaLinkedin size={20} />
            <span>MUHAMMAD SHEHZAD</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ZoomIn from "../animation/ZoomIn";
const Contact = () => {
  const Card = [
    {
      liveurl: "https://wa.me/923473125155",
      icon: <FaWhatsapp size={20} />,
      other: "+923473125155",
    },
    {
      liveurl: "tel:+923473125155",
      icon: <FaPhone size={20} className="rotate-90" />,
      other: "+923473125155",
    },
    {
      liveurl: "mailto:shehzadkhanagra@gmail.com",
      icon: <FaEnvelope size={20} />,
      other: "shehzadkhanagra@gmail.com",
    },
    {
      liveurl: "https://github.com/shehzadkhannn",
      icon: <FaGithub size={20} />,
      other: "shehzadkhannn",
    },
    {
      liveurl:
        "https://www.linkedin.com/in/muhammad-shehzad-b76005435/?isSelfProfile=true",
      icon: <FaLinkedin size={20} />,
      other: "MUHAMMAD SHEHZAD",
    },
  ];
  return (
    <div className="flex w-full justify-center px-4 py-30 ">
      <div className="bg-black lg:w-full  md:py-20 w-full px-3 py-15  gap-5 flex flex-col rounded-4xl  md:shadow-[0_0_15px_white] shadow-[0_0_8px_white]">
        {Card.map((contact) => (
          <ZoomIn>
            {" "}
            <div className=" key={contact.other} px-3 bg-gray-900 w-full rounded-2xl py-3 md:shadow-[0_0_10px_white] shadow-[0_0_7px_white] hover:bg-gray-800">
              {" "}
              <a
                className="hover:underline hover:text-orange-500 flex items-center justify-center gap-2 whitespace-nowrap"
                href={contact.liveurl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.icon}
                <span> {contact.other}</span>
              </a>
            </div>
          </ZoomIn>
        ))}
      </div>
    </div>
  );
};

export default Contact;

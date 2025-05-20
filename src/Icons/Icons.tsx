import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import "./icons.css";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "",
    bgColor: "#24d366",
    icon: <IoLogoWhatsapp className="Icon" />,
    arialLabel: "Icon WhatsApp",
  },
  {
    name: "LinkedIn",
    href: "",
    bgColor: "#0c66c2",
    icon: <RiLinkedinFill className="Icon" />,
    arialLabel: "Icon LinkedIn",
  },
  {
    name: "Telegram",
    href: "",
    bgColor: "#26a3e3",
    icon: <FaTelegramPlane className="Icon" />,
    arialLabel: "Icon Telegram",
  },
];

const Icons = () => {
  return (
    <section className="ShareContainer">
      <article>
        <h3 className="ShareText">{"Comparte mi currículum"}</h3>
        <p className="ShareSubText">
          {"Cuéntaselo a los demás y ayúdame a conseguir trabajo."}
        </p>
      </article>
      <article className="IconsContainer">
        {socialLinks.map((item, index) => (
          <a
            aria-label={item.arialLabel}
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="CircleIcons"
            style={{
              background: item.bgColor,
            }}
          >
            {item.icon}
          </a>
        ))}
      </article>
    </section>
  );
};
export default Icons;

import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import "./icons.css";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/send?text=http://localhost:5173/#personalInformation",
    bgColor: "#24d366",
    icon: <IoLogoWhatsapp className="Icon" />,
  },
  {
    name: "Twitter",
    href: "https://www.facebook.com/share_channel/#",
    bgColor: "#000000",
    icon: <FaXTwitter className="Icon" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/share_channel/#",
    bgColor: "#0c66c2",
    icon: <RiLinkedinFill className="Icon" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share_channel/#",
    bgColor: "#0b65fe",
    icon: <FaFacebookF className="Icon" />,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=https://midominio.com/cv/Brayan&text=Mira%20mi%20currículum",
    bgColor: "#26a3e3",
    icon: <FaTelegramPlane className="Icon" />,
  },
];

const Icons = () => {
  return (
    <main className="Information">
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
    </main>
  );
};
export default Icons;

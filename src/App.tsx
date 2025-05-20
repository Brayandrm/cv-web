import "./App.css";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import Icons from "./Icons/Icons";
import Experience from "./Experience/Experience";
import Interests from "./Interests/Interests";
import { useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

const Profile = () => {
  const [selected, setSelected] = useState("Personal information");

  const [menuOpen, setMenuOpen] = useState(false);

  const titles = [
    {
      title: "Personal information",
      link: "#personalInformation",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Education",
      link: "#education",
    },
    {
      title: "Achievements",
      link: "#achievements",
    },
    {
      title: "Interests",
      link: "#interests",
    },
  ];

  return (
    <main className="mainContainer">
      <section
        className={`menuProfile ${menuOpen ? "menuOpen" : "menuClosed"}`}
      >
        <img
          src="/Brayan.png"
          alt="Signature uploaded"
          className="imageProfile"
        />

        <section className="profileSection">
          {titles.map(({ title, link }) => (
            <nav key={title}>
              <a
                href={link}
                onClick={() => {
                  setSelected(title);
                  setMenuOpen(false);
                }}
                className={`menuProfileLink ${
                  selected === title ? "activeLink" : "inactiveLink"
                }`}
              >
                {title}
              </a>
            </nav>
          ))}
        </section>
      </section>
      <button aria-label="button arrow" className="btn">
        <FaCircleArrowUp className="btn buttonMobile" />
      </button>
      <section className="headerMobile">
        <button
          aria-label="button menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="headerButtonMenu "
        >
          <IoIosMenu className="iconMenu" />
        </button>
      </section>
      <section className={`scrollableSection ${menuOpen ? "blurred" : ""}`}>
        <PersonalInformation />
        <Experience />
        <Education />
        <Achievements />
        <Interests />
        <Icons />
      </section>
    </main>
  );
};

export default Profile;

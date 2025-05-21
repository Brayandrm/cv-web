import "./App.css";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import Icons from "./Icons/Icons";
import Experience from "./Experience/Experience";
import Interests from "./Interests/Interests";
import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import "../src/Common/Loading/Loading.css";

const Profile = () => {
  const [selected, setSelected] = useState("Personal information");

  const [menuOpen, setMenuOpen] = useState(false);

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      {loading ? (
        <article className="loaderContainer">
          <span className="loader">Load&nbsp;ng</span>
        </article>
      ) : (
        <section className="mainContainer">
          <section
            className={`menuProfile ${menuOpen ? "menuOpen" : "menuClosed"}`}
          >
            <section className="nameMobileContainer">
              <img
                src="/Brayan.png"
                alt="Signature uploaded"
                className="imageProfile"
              />
              <p className="nameMobile">Brayan Daniel Reyes Morera</p>
            </section>
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
        </section>
      )}
    </section>
  );
};

export default Profile;

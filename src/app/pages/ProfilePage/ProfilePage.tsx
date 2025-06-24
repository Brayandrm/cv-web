import { useEffect, useRef, useState } from "react";
import "../../../App.css";
import "../../components/Common/Loading/Loading.css";
import PersonalInformation from "../../components/PersonalInformation/PersonalInformation";
import Education from "../../components/Education/Education";
import Achievements from "../../components/Achievements/Achievements";
import Interests from "../../components/Interests/Interests";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import Icons from "../../../Icons/Icons";
import Experience from "../../components/Experience/Experience";

const Profile = () => {
  const [selected, setSelected] = useState("Personal information");

  const [menuOpen, setMenuOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      title: "Información personal",
      link: "#personalInformation",
      Component: PersonalInformation,
    },
    {
      title: "Experiencia",
      link: "#experience",
      Component: Experience,
    },
    {
      title: "Educación",
      link: "#education",
      Component: Education,
    },
    {
      title: "Logros",
      link: "#achievements",
      Component: Achievements,
    },
    {
      title: "Intereses",
      link: "#interests",
      Component: Interests,
    },
  ];

  const refs = useRef<(HTMLElement | null)[]>(sections.map(() => null));

  const handleScroll = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    refs.current[nextIndex]?.scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(nextIndex);
  };

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
                src="/cv-web/profile.png"
                alt="Signature uploaded"
                className="imageProfile"
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              />
              <p className="nameMobile">{"Brayan Daniel Reyes Morera"}</p>
            </section>
            <section className="profileSection">
              {sections.map(({ title, link }) => (
                <nav key={title}>
                  <a
                    href={link}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link)
                        ?.scrollIntoView({ behavior: "smooth" });
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
          <button
            aria-label="button arrow"
            className="btn"
            onClick={handleScroll}
          >
            {currentIndex < sections.length - 1 ? (
              <FaCircleArrowDown className="btn buttonMobile" />
            ) : (
              <FaCircleArrowUp className="btn buttonMobile" />
            )}
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
            {sections.map(({ title, Component }, i) => (
              <article
                key={title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <Component />
              </article>
            ))}
            <Icons />
          </section>
        </section>
      )}
    </section>
  );
};

export default Profile;

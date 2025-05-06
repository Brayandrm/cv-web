import "./App.css";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import Icons from "./Icons/Icons";
import Experience from "./Experience/Experience";
import Interests from "./Interests/Interests";

const Profile = () => {
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
      <section className="menuProfile">
        <img
          src="/profile.png"
          alt="Signature uploaded"
          className="imageProfile"
        />
        <section className="profileSection">
          {titles.map(({ title, link }) => (
            <nav>
              <a
                href={link}
                key={title}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                {title}
              </a>
            </nav>
          ))}
        </section>
      </section>
      <section
        style={{
          overflowX: "scroll",
        }}
      >
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

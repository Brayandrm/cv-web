import "./index.css";

interface Props {
  titleColor: string;
  contentColor: string;
}

const infoItems = [
  {
    label: "Email",
    value: "rmbd0603@gmail.com",
  },
  {
    label: "Address",
    value: "Carrera 104 a numero 56 F 44 Sur",
  },
  {
    label: "Phone number",
    value: "3124211748",
  },
  {
    label: "web",
    value: "app.coress.info",
    link: "https://www.coress.info",
  },
];

const PersonalInformation = ({ titleColor, contentColor }: Props) => {
  return (
    <section className="contentSectionsProfile">
      <h2
        id="personalInformation"
        className="titlesContents"
        style={{ background: titleColor }}
      >
        {"Brayan Daniel Reyes Morera"}
      </h2>
      <article style={{ background: contentColor }} className="Information">
        <section className="GridInformation">
          {infoItems.map(({ label, value, link }) => (
            <div key={label}>
              <h3>{label}</h3>
              <a href={link} target="_blank" rel="noreferrer">
                <p>{value}</p>
              </a>
            </div>
          ))}
        </section>
        <section>
          <p>
            {
              "Desarrollador FrontEnd con más de dos años de experiencia en el diseño y desarrollo de aplicaciones web. Especializado en tecnologías como JavaScript, TypeScript, React, Node.js, MUI, CSS y Docker. Destaco por crear interfaces eficientes y escalables, optimizando la experiencia de usuario y el flujo de trabajo en cada proyecto."
            }
          </p>
        </section>
      </article>
    </section>
  );
};

export default PersonalInformation;

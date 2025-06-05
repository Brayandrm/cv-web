import "./index.css";

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
    value: "CV Web",
    link: "cvWeb",
  },
];

const PersonalInformation = () => {
  return (
    <section id="personalInformation" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Brayan Daniel Reyes Morera"}</h2>
      </header>
      <section className="Information">
        <article className="responsive">
          <section className="GridInformation">
            {infoItems.map(({ label, value, link }) => (
              <nav key={label}>
                <h3>{label}</h3>
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer">
                    <p>{value}</p>
                  </a>
                ) : (
                  <p>{value}</p>
                )}
              </nav>
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
    </section>
  );
};

export default PersonalInformation;

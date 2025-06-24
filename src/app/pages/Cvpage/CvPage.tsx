import CodeCv from "../../components/Common/CodeCv/CodeCv";
import { Profile } from "../../resources/profile";
import "./index.css";

const CvPage = () => (
  <>
    <div className="splash">
      <div className="splash_logo">{"Cv web"}</div>
      <div className="splash_svg">
        <svg>
          <rect />
        </svg>
      </div>
      <div className="splash_minimize">
        <svg>
          <rect />
        </svg>
      </div>
    </div>
    <div className="containerText">
      <div className="text">
        <section className="containerContent">
          <section className="FooterInformation">
            <article className="information">
              <h1 className="name">{"Brayan Reyes"}</h1>
              <section className="contactUser">
                <p className="contact">
                  <strong>{"Dirección"}:</strong>
                  {" Carrera 104 a numero 56 f 44 Sur"}
                </p>
                <p className="contact">
                  <strong>{"Numero de telefono"}:</strong> {"3124211749"}
                </p>
                <p className="contact">
                  <strong>{"Correo electronico"}:</strong>
                  {" rmbd0603@gmail.com"}
                </p>
                <p className="contact">
                  <strong>Red:</strong>{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Brayandrm"
                  >
                    {"GitHub"}
                  </a>
                </p>
              </section>
            </article>
            <img
              src="/cv-web/Brayan.png"
              alt="Signature uploaded"
              className="imageProfile"
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
          </section>
          <section className="contentCv">
            <h3 className="titleCvWeb">{"Perfil"}</h3>
            <hr className="hr" />
            <p className="contentCbProfile">
              {
                "Desarrollador FrontEnd con más de dos años de experiencia en el diseño y desarrollo de aplicaciones web. Especializado en tecnologías como JavaScript, TypeScript, React, Node.js, MUI, CSS y Docker. Destaco por crear interfaces eficientes y escalables, optimizando la experiencia de usuario y el flujo de trabajo en cada proyecto."
              }
            </p>
          </section>

          {Profile.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <h3 className="titleCvWeb">{section.title}</h3>
              <hr className="hr" />
              {section.items.map((item, itemIndex) => (
                <CodeCv key={itemIndex} {...item} />
              ))}
            </section>
          ))}
        </section>
      </div>
    </div>
  </>
);

export default CvPage;

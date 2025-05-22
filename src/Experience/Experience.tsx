import ReusableCode from "../Common/ReusableCode";

const experiences = [
  {
    dateRange: "11/2023 – 12/2024",
    company: "CORESS",
    role: "Desarrollador Junior Frontend ",
    responsibilities: [
      "Coress, un startup de real state. En mi tiempo implemento funcionalidades claves y mejoras de la interfaz de usuario utilizando tecnologías como React.js, React Query, Zustand, TypeScript, MUI, Styled-components, y Next.js.Participé en la planificación y ejecución de tareas, con experiencia en herramientas como Git, Jira.",
    ],
  },
  {
    dateRange: "12/2022 – 10/2023",
    company: "PTC(Aeronova)",
    role: "Desarrollador Junior Freelance",
    responsibilities: [
      "Colaboré en el desarrollo de un sistema de gestión para una academia de vuelo utilizando tecnologías modernas como JavaScript, React, Node, MUI y CSS.",
      "Trabajé en estrecha colaboración con el equipo de desarrollo para garantizar la coherencia del código y la eficiencia del flujo de trabajo.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Experience"}</h2>
      </header>
      <section className="Information">
        <article className="responsive">
          {experiences.map((exp, index) => (
            <ReusableCode key={index} {...exp} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default Experience;

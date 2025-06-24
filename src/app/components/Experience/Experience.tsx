import { Experiences } from "../../resources/experiences";
import ReusableCode from "../Common/ReusableCode";

const Experience = () => {
  return (
    <section id="experience" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Experiencia"}</h2>
      </header>
      <section className="Information">
        <article className="responsive">
          {Experiences.map((exp, index) => (
            <ReusableCode key={index} {...exp} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default Experience;

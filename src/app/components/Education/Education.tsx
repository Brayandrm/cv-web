import { Educations } from "../../resources/educations";
import ReusableCode from "../Common/ReusableCode";

const Education = () => {
  return (
    <section id="education" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Educación"}</h2>
      </header>
      <section className="Information">
        <article className="responsive">
          {Educations.map((edu, index) => (
            <ReusableCode key={index} {...edu} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default Education;

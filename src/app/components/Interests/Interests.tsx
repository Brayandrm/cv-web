import { InterestList } from "../../resources/interests";
import "./index.css";

const Interests = () => {
  return (
    <section id="interests" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Intereses"}</h2>
      </header>
      <article className="Information">
        <div className="InterestsContainer">
          {InterestList.map((list, index) => (
            <p className="InterestsList" key={index}>
              # {list}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Interests;

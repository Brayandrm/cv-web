import "./index.css";

interface Props {
  titleColor: string;
  contentColor: string;
}

const Interests = ({ titleColor, contentColor }: Props) => {
  const interestList = [
    "Tegnologia",
    "Basket Ball",
    "Matematicas",
    "Natacion",
    "Culinaria",
  ];

  return (
    <section className="contentSectionsProfile">
      <h2
        id="interests"
        style={{ backgroundColor: titleColor }}
        className="titlesContents"
      >
        {"Interests"}
      </h2>
      <article
        style={{ backgroundColor: contentColor }}
        className="Information"
      >
        <div className="InterestsContainer">
          {interestList.map((list, index) => (
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

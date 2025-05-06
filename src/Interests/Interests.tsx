import "./index.css";

const Interests = () => {
  const interestList = [
    "Tegnologia",
    "Basket Ball",
    "Matematicas",
    "Natacion",
    "Culinaria",
  ];

  return (
    <section className="contentSectionsProfile">
      <h2 id="interests" className="titlesContents">
        {"Interests"}
      </h2>
      <article className="Information">
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

import "./index.css";

const Interests = () => {
  const interestList = [
    "Tegnologia",
    "Basket Ball",
    "Matematicas",
    "Natación",
    "Culinaria",
    "Gastronomia",
  ];

  return (
    <section id="interests" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Interests"}</h2>
      </header>
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

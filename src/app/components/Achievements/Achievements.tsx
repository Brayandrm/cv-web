import { AchievementsList } from "../../resources/Achievements";

const Achievements = () => {
  return (
    <section id="achievements" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Achievements"}</h2>
      </header>
      <section className="Information">
        <article className="responsive">
          <ul>
            {AchievementsList.map((list: string, index: number) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
};
export default Achievements;

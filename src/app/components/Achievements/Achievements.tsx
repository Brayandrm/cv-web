import { AchievementsList } from "../../resources/achievements";

const Achievements = () => {
  return (
    <section id="achievements" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Logros"}</h2>
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

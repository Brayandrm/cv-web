const AchievementsList = [
  "Crear modulo de score desde cero en figma y llevarlo a produccion",
  "Implementacion de diseños responsives",
  "Mejorar el rendimiento de una web",
  "Mejorar la experiencia de usuario",
  "Crear perfil",
];

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

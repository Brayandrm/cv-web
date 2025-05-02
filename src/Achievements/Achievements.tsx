const AchievementsList = [
  "Crear modulo de score desde cero en figma y llevarlo a produccion",
  "Implementacion de diseños responsives",
  "Mejorar el rendimiento de una web",
  "Mejorar la experiencia de usuario",
  "Crear perfil",
];

interface Props {
  titleColor: string;
  contentColor: string;
}

const Achievements = ({ titleColor, contentColor }: Props) => {
  return (
    <section className="contentSectionsProfile">
      <h2
        id="achievements"
        style={{ backgroundColor: contentColor }}
        className="titlesContents"
      >
        {"Achievements"}
      </h2>
      <article style={{ backgroundColor: titleColor }} className="Information">
        <ul style={{ color: "#544c4c" }}>
          {AchievementsList.map((list: string, index: number) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};
export default Achievements;

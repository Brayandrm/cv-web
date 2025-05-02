import ReusableCode from "../Common/ReusableCode";

const educations = [
  {
    dateRange: "07/2024 – Present",
    company: "Front End Developer",
    role: "Digital House",
    responsibilities: [
      "GIT-GITHUB",
      "CSS",
      "REACT",
      "NEXT.JS",
      "REACT QUERY",
      "TYPESCRIPT",
      "HTML",
      "REDUX",
      "STYLED COMPONENTS",
      "JAVASCRIPT",
      "REACT HOOK FORM",
    ],
  },
  {
    dateRange: "12/2021 – 01/2022",
    company: "Especialización Frontend Developer",
    role: "PLATZI",
    responsibilities: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "VUE.JS",
      "GIT-GITHUB",
    ],
  },
];

interface Props {
  titleColor: string;
  contentColor: string;
}

const Education = ({ titleColor, contentColor }: Props) => {
  return (
    <section className="contentSectionsProfile">
      <h2
        id="education"
        style={{ backgroundColor: titleColor }}
        className="titlesContents"
      >
        {"Education"}
      </h2>
      <div className="Information" style={{ backgroundColor: contentColor }}>
        {educations.map((edu, index) => (
          <ReusableCode key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;

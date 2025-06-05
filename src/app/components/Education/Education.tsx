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
    role: "Platzi",
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

const Education = () => {
  return (
    <section id="education" className="contentSectionsProfile">
      <header>
        <h2 className="titlesContents">{"Education"}</h2>
      </header>
      <section className="Information">
        <article className="responsive">
          {educations.map((edu, index) => (
            <ReusableCode key={index} {...edu} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default Education;

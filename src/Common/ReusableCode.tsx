import "../Experience/index.css";

interface ExperienceProps {
  dateRange: string;
  company: string;
  role: string;
  responsibilities: string[];
}

const ReusableCode = ({
  dateRange,
  role,
  company,
  responsibilities,
}: ExperienceProps) => {
  return (
    <section className="contentInformation">
      <p className="timeExperience">{dateRange}</p>
      <hr className="split" />
      <article className="experienceContainer">
        <section className="companyNameAndRole">
          <h3 className="roleName"> {role} </h3>
          <p className="companyName">{company}</p>
        </section>
        <section className="functionsCompany">
          <ul>
            {responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};

export default ReusableCode;

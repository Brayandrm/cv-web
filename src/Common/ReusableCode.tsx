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
    <section className="ContentInformation">
      <p className="TimeExperience">{dateRange}</p>
      <hr className="Split" />
      <article className="ExperienceContainer">
        <section className="CompanyNameAndRole">
          <h3 className="roleName"> {role} </h3>
          <p className="companyName">{company}</p>
        </section>
        <section className="FunctionsCompany">
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

import "../Experience/index.css";

interface ExperienceProps {
  dateRange: string;
  company: string;
  role: string;
  responsibilities: string[];
}

const ReusableCode = ({
  dateRange,
  company,
  role,
  responsibilities,
}: ExperienceProps) => {
  return (
    <main>
      <section className="ContentInformation">
        <p className="TimeExperience">{dateRange}</p>
        <hr className="Split" />
        <article className="ExperienceContainer">
          <section className="CompanyNameAndRole">
            <h3 className="CompanyName"> {company} </h3>
            <p>{role}</p>
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
    </main>
  );
};

export default ReusableCode;

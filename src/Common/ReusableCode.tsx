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
      <div className="ContentInformation">
        <div className="TimeExperience">{dateRange}</div>
        <div className="Split" />
        <div className="ExperienceContainer">
          <div className="CompanyNameAndRole">
            <h3 className="CompanyName"> {company} </h3>
            <div>{role}</div>
          </div>
          <div className="FunctionsCompany">
            <ul>
              {responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReusableCode;

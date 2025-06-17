import "./index.css";

interface Props {
  date: string;
  type: string;
  content: string[];
  company: string;
}

const CodeCv = (props: Props) => {
  return (
    <section className="contentContainer">
      <section className="dateContainer">
        <p>{props.date}</p>
        <p> {props.company} </p>
      </section>
      <section>
        <h3 className="titleItems"> {props.type} </h3>
        <ul className="sizeUl">
          {props.content.map((li, index: number) => (
            <li key={index}>{li}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};
export default CodeCv;

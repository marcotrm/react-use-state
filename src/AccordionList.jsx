import languages from "./assets/Languages";
import Accordion from "./Accordion";

export default function Accordionlist() {
  return (
    <div className="container">
      {languages.map((lang) => {
        <Accordion key={lang.id} title={lang.title} content={lang.content} />;
      })}
    </div>
  );
}

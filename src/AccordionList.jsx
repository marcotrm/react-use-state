import languages from "./assets/Languages";
import Accordion from "./Accordion";

export default function Accordionlist() {
  return (
    <div className="container">
      {languages.map((lang) => {
        return (
          <Accordion
            key={lang.id}
            title={lang.title}
            description={lang.description}
          />
        );
      })}
    </div>
  );
}

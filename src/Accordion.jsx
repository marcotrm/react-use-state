import languages from "./assets/Languages";

export default function Accordion() {
  return (
    <div className="container">
      {languages.map((lang) => {
        return (
          <div key={lang.id} className="accordion-item">
            <div className="accordion">
              <h1>{lang.title}</h1>
              <button>+</button>
            </div>
            <div className="accordion-description">
              <p>{lang.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

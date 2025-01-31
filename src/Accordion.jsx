export default function Accordion(title, description) {
  return (
    <div className="accordion-item">
      <div className="accordion">
        <h1>{title}</h1>
        <button>+</button>
      </div>
      <div className="accordion-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

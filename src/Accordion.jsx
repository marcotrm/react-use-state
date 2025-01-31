import { useState } from "react";

export default function Accordion({ title, description }) {
  const [isOpen, setIsopen] = useState(false);

  const toggleAccordion = () => {
    setIsopen((current) => !current);
  };

  return (
    <div className="accordion-item">
      <div className="accordion">
        <h1>{title}</h1>
        <button onClick={toggleAccordion}>{isOpen ? "-" : "+"}</button>
      </div>
      <div className="accordion-description">
        {isOpen && <p>{description}</p>}
      </div>
    </div>
  );
}

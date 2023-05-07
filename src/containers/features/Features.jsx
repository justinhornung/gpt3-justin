import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Est do magna sint eu.",
    text: "Minim sint exercitation anim in quis. Excepteur magna minim esse nostrud Lorem labore ipsum minim eiusmod officia et elit. Cillum aute culpa culpa consectetur consequat irure ea do. Sint eiusmod Lorem voluptate amet tempor dolor ad anim. Aliquip tempor ex incididunt duis id incididunt qui aliqua in ad culpa ut eu labore.",
  },
  {
    title: "Duis cillum elit ipsum consequat id.",
    text: "Consequat id nostrud laborum sunt occaecat veniam mollit ipsum adipisicing ad consequat incididunt adipisicing. Amet reprehenderit excepteur quis eu nisi ipsum reprehenderit ipsum ut nostrud eiusmod deserunt cillum non. Voluptate elit eu cupidatat incididunt deserunt officia dolor aliqua id sint.",
  },
  {
    title: "Et mollit ut sint tempor aute.",
    text: "Elit tempor Lorem magna voluptate tempor et. Deserunt nulla excepteur qui velit fugiat anim deserunt ad sint consequat adipisicing. Occaecat ad non laborum sit amet nulla.",
  },
  {
    title: "Non consectetur anim ipsum do aliquip reprehenderit.",
    text: "Eiusmod do sunt commodo exercitation nulla exercitation id labore. Consequat irure labore aliquip aliquip ex. Excepteur labore mollit fugiat dolor cupidatat anim nisi laborum ut do amet cillum.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future Is Now And You Just Need To Realize It. Step Into The Future Today & Make It Happen.
        </h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;

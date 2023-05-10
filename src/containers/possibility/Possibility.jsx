import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access To Get Started</h4>
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>
        Proident eu labore est do dolor excepteur esse mollit minim. Velit Lorem voluptate dolore commodo duis tempor
        anim culpa mollit magna ad. Adipisicing ipsum ut exercitation velit consequat. Enim magna sit dolore enim est
        culpa Lorem. Deserunt dolor id non duis cupidatat adipisicing.
      </p>
      <h4>Request Early Access To Get Started</h4>
    </div>
  </div>
);

export default Possibility;

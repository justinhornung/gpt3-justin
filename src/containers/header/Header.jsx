import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>

        <p>
          Ad pariatur laboris cupidatat reprehenderit aute laboris Lorem cillum qui laboris qui sunt proident elit.
          Nulla velit enim aute officia fugiat. Labore ut enim enim in Lorem pariatur elit tempor eu consectetur laboris
          velit duis. Excepteur voluptate magna fugiat incididunt do nisi minim proident aliquip laborum voluptate.
          Adipisicing eu pariatur exercitation cupidatat. Quis quis minim cupidatat fugiat et aliquip culpa adipisicing
          ex consequat. Consequat commodo cillum consequat consectetur id laborum nostrud ad fugiat magna proident
          veniam.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600+ people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;

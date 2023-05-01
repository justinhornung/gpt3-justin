import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="Qui minim dolor ipsum est id incididunt mollit ex reprehenderit aute est pariatur. Commodo commodo amet excepteur anim non pariatur nostrud in. Deserunt irure Lorem elit officia sint aliquip. Eu cillum quis velit voluptate sunt. Quis dolore sunt consequat minim. Dolore dolor laboris eu est sit fugiat cillum minim ea nulla nisi non cupidatat elit."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Duis fugiat amet est occaecat incididunt tempor nisi exercitation cupidatat eiusmod proident."
      />
      <Feature title="Knowledgebase" text="Do pariatur adipisicing dolore ipsum anim enim cillum labore." />
      <Feature title="Education" text="Tempor incididunt sint mollit mollit proident irure irure quis." />
    </div>
  </div>
);

export default WhatGPT3;

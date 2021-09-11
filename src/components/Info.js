import React from "react";
import Avatar from "./Avatar";
import GetInContact from "./GetInContact";
import SecondaryBox from "./SecondaryBox";
import Summary from "./Summary";
import Projects from "./Project";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Courses from "./Courses";

import "./styles.scss";

export default function Info() {
  const techSkills = [
    "html5/ css3/ sass",
    "git",
    "javascript(ec6)",
    "handlebars",
    "webpack",
    "react",
    "redux",
    "node.js",
    "rest api",
    "mongodb",
  ];
  const softSkills = ["creativity", "good communication", "teamwork"];
  const languages = [
    "english - intermediate(B1)",
    "ukrainian - perfect",
    "russian - perfect",
  ];

  return (
    <section className="section-info">
      <div className="container">
        <Avatar />
        <div className="info__flex-box">
          <div className="info__special">
            <GetInContact />
            <SecondaryBox title="Tech Skills" items={techSkills} />
            <SecondaryBox title="Soft Skills" items={softSkills} />
            <SecondaryBox title="Languages" items={languages} />
          </div>
          <div className="info__general">
            <Summary />
            <Projects />
            <WorkExp />
            <Education />
            <Courses />
          </div>
        </div>
        <div className="additional-container"></div>
      </div>
    </section>
  );
}

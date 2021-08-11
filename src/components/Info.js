import React from "react";
import Summary from "./Summary";
import Projects from "./Project";
import "./styles.scss";
import SecondaryBox from "./SecondaryBox";
import Education from "./Education";
import Courses from "./Courses";
import WorkExp from "./WorkExp";

export default function Info() {
  const techSkills = ["html5", "ccs3", "javascript(ec6)", "react", "node"];
  const softSkills = ["agile", "scrum", "teamwork"];
  const languages = [
    "english - intermediate(B1)",
    "ukrainian - perfect",
    "russian - perfect",
  ];
  return (
    <section className="section-info">
      <div className="container">
        <div className="info__flex-box">
          <div className="info__general">
            <Summary />
            <Projects />
          </div>
          <div className="info__special">
            <SecondaryBox title="Tech Skills" items={techSkills} />
            <SecondaryBox title="Soft Skills" items={softSkills} />
            <SecondaryBox title="Languages" items={languages} />
          </div>
        </div>
        <WorkExp />
        <Education />
        <Courses />
      </div>
    </section>
  );
}

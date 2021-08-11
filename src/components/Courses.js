import React from "react";

export default function Courses() {
  return (
    <div className="courses additional-box">
      <h2 className="title">Courses</h2>
      <ul className="courses-list">
        <li className="courses-list__item">
          <h3 className="courses__title">
            <span className="courses__name">"Go IT"</span> Front Developer
          </h3>
          <p className="date-period">September 2020 - July 2021 | Online</p>
        </li>
        <li className="courses-list__item">
          <h3 className="courses__title">
            <span className="courses__name">"All inclusive"</span> English
            intermediate
          </h3>
          <p className="date-period">September 2017 - march 2018 | Kyiv</p>
        </li>
      </ul>
    </div>
  );
}

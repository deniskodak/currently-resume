import React from "react";

export default function WorkExp() {
  return (
    <div className="work-experience additional-box">
      <h2 className="work-experience__title title">Work Experience</h2>
      <ul className="work-experience__list">
        <li className="work-experience__item">
          <h3 className="profession__title">
            Seasonal-worker in flower industry
          </h3>
          <p className="date-period">December 2020 - September 2021 | Norway</p>
          <ul className="work-experience__responsibilities-list">
            <li className="responsibilities-item">
              Formation of flower orders
            </li>
            <li className="responsibilities-item">
              Checking dispatches of various orders
            </li>
            <li className="responsibilities-item">
              Checking the quality of flowers for sending
            </li>
          </ul>
        </li>

        <li className="work-experience__item">
          <h3 className="profession__title">Intern at the pig farm</h3>
          <p className="date-period">April 2018 - September 2019 | Denmark</p>
          <ul className="work-experience__responsibilities-list">
            <li className="responsibilities-item">
              Manage piglets selling orders
            </li>
            <li className="responsibilities-item">
              Sorting, keeping and treatment piglets
            </li>
            <li className="responsibilities-item">
              Control of feeding systems and adjustment microclimate
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

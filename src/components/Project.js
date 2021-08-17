import React from "react";

export default function Projects() {
  return (
    <div className="info__content">
      <h3 className="title">Projects</h3>
      <ul className="projects__list">
        <li className="projects__item">
          <h4 className="projects__title">Ice-cream / CSS and HTML</h4>
          <p className="projects__text text">
            This adaptive website was created to help ice-cream producers to
            sell their products. Using git, scss and webpack.
          </p>
        </li>
        <li className="projects__item">
          <h4 className="projects__title">Event Booster / Javascript</h4>
          <p className="projects__text text">
            Music festival site. Clients can search any fests in any countries.
            Worked with API. Using pure Js, SCSS, HandleBars.
          </p>
        </li>
        <li className="projects__item">
          <h4 className="projects__title">React and Node</h4>
          <p className="projects__text text">
            The project is in the process...
          </p>
        </li>
      </ul>
    </div>
  );
}

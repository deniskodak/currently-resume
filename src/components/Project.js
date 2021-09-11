import React from "react";

export default function Projects() {
  return (
    <div className="info__content">
      <h3 className="title">Projects</h3>
      <ul className="projects__list">
        <li className="projects__item">
          <h4 className="projects__title">
            Barbershop
            <a
              className="projects__link"
              href="https://deniskodak.github.io/barbershop/"
              target="_blank"
              rel="noreferrer"
            >
              https://deniskodak.github.io/barbershop
            </a>
            <p className="projects__technologies">[HTML5, SASS]</p>
          </h4>

          <p className="projects__text text">
            {" "}
            A simple website for booking appointment in barbershop. First solo
            project.
          </p>
        </li>
        <li className="projects__item">
          <h4 className="projects__title">
            Ice-cream
            <a
              className="projects__link"
              href="https://katepodolsky.github.io/ice-creame/"
              target="_blank"
              rel="noreferrer"
            >
              https://katepodolsky.github.io/ice-creame
            </a>
            <p className="projects__technologies">[HTML5, SASS, GIT, PARCEL]</p>
          </h4>

          <p className="projects__text text">
            {" "}
            An adaptive single page website.My part is: section with cities.
          </p>
        </li>
        <li className="projects__item">
          <h4 className="projects__title">
            Event Booster
            <a
              className="projects__link"
              href="https://f957-cua.github.io/project_group_4/"
              target="_blank"
              rel="noreferrer"
            >
              https://f957-cua.github.io/project_group_4
            </a>{" "}
            <p className="projects__technologies">
              [HTML5, SASS, JS, REST Api, Handlebars, Webpack]
            </p>
          </h4>
          <p className="projects__text text">
            {" "}
            Also an adaptive single page website for search any available
            festival .My part is: custom select menu and all requests to the
            backend.
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

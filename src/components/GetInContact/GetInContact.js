import React from "react";
import "./styles.scss";
import sprite from "./sprite.svg";
import Avatar from "../Avatar";

export default function GetInContact() {
  return (
    <section className="contact-section">
      <div className="container">
        <Avatar />
        <div className="contact__info-box">
          <h2 className="contact__title">Get in contact</h2>
          <ul className="contact__list">
            <li className="contact__item">
              <a className="contact__link phone" href="phoneto:+380680000000">
                +380-68-*5-*7-**4
              </a>
            </li>
            <li className="contact__item">
              <a className="contact__link" href="mailto:denis.kodak@gmail.com">
                denis.kodak@gmail.com
              </a>
            </li>
          </ul>
          <a
            className="social__link"
            href="https://www.linkedin.com/in/denys-kodak-096594197/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="social__icon" width="40" height="40">
              <use href={sprite + "#icon-linkedin"}></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

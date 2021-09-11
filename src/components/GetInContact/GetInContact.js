import React from "react";
import "./styles.scss";

export default function GetInContact() {
  return (
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
        <li className="contact__item">
          <a
            className="contact__link social"
            href="https://www.linkedin.com/in/denys-kodak-096594197"
          >
            https://www.linkedin.com/in/denys-kodak-096594197
          </a>
        </li>
        <li className="contact__item">
          <a className="contact__link social" href="https://t.me/kodak_hi">
            https://t.me/kodak_hi
          </a>
        </li>
      </ul>
      <span>Kyiv, Ukraine</span>
    </div>
  );
}

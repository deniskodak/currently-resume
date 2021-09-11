import React from "react";

export default function SecondaryBox({ title, items }) {
  return (
    <div className="info__content">
      <h3 className="title">{title}</h3>
      <ul className="skills__list">
        {items.map((item, index) => (
          <li key={index} className="skills__item text">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title-container">
          <p className="header__subtitle">Frontend fullstack developer</p>
          <h1 className="header__title">Denys Kodak</h1>
        </div>
      </div>
    </header>
  );
}

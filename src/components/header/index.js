import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className="navbar is-light pr-6"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item">
          Expenses
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          href="#menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <button className="button is-light mt-1 navbar-link">Language</button>
          <div className="navbar-dropdown">
            <button
              className="button is-white mt-1 navbar-item"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="button is-white mt-1 navbar-item"
              onClick={() => changeLanguage("hi")}
            >
              Hindi
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

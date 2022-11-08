import React from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";

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
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://assets.website-files.com/6231e693006d733616e2ace5/62d596a500f3e87f2dafebf8_Centime_logo_1440_full%20(1).svg"
            alt="Centime: Logo"
            width="140"
            height="100"
          />
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
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <button class="button is-light mt-1 navbar-link">Language</button>
          <div class="navbar-dropdown">
            <button
              class="button is-white mt-1 navbar-item"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              class="button is-white mt-1 navbar-item"
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

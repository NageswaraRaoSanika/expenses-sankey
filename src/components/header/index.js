import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar is-light"
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
    </nav>
  );
};

export default Header;

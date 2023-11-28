import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl ">LOGO</h2>
          </a>
        </div>
        <div className="header-search"></div>
        <div className="menu-links"></div>
      </header>
    </div>
  );
};

export default Header;

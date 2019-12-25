import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#">
          Title
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Buy</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

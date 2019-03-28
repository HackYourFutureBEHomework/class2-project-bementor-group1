import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">BeMentor.</h1>
        </header>

        <nav>
          <ul className="header-navbar">
            <li className="header-nav-button">CONNECT</li>
            <li className="header-nav-button">CONTACT</li>
            <li className="header-nav-button">SEARCH MENTORS</li>
            <li className="header-nav-button">LOGIN</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

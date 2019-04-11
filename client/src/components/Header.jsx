import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">BeMentor.</h1>
        </header>

        <nav>
          <ul className="header-navbar">
            <li className="header-nav-button">
              <a href="/Home" title="Home">
                Home
              </a>
            </li>
            <li className="header-nav-button">
              <a href="/contact" title="Contact">
                Contact
              </a>
            </li>
            <li className="header-nav-button">
              <a href="/Mentors" title="Search Mentor">
                Search
              </a>
            </li>
            <li className="header-nav-button">
              <a href="/Registration" title="Registration">
                Registration
              </a>
            </li>
            <li className="header-nav-button">
              <a href="/Login" title="Login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

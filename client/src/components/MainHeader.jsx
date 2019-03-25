import React, { Component } from "react";

class MainHeader extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">BeMentor.</h1>
        </header>

        <nav>
          <ul className="nav-bar">
            <li className="nav-button">
              <a href="/page/Home" title="Home">
                Home
              </a>
            </li>
            <li className="nav-button">
              <a href="/page/contact" title="Contact">
                Contact
              </a>
            </li>
            <li className="nav-button">
              <a href="/page/contact" title="Search Mentor">
                Search
              </a>
            </li>
            <li className="nav-button">
              <a href="/page/contact" title="Login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainHeader;

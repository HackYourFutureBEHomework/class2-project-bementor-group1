import React, { Component } from "react";

class MainBody extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="main-background"> </div>

        <h1 className="main-title">Welcome</h1>
        <p className="main-text">
          {" "}
          BeMentor is an open source mentorship platform to connect women in
          technology.
        </p>
        <a href="http://localhost:3000/Registration" className="main-buttom">
          Register now!
        </a>
      </main>
    );
  }
}
export default MainBody;

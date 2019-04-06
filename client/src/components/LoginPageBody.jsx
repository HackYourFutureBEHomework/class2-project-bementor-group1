import React, { Component } from "react";

import "../assets/css/login-page.css";

class LoginPageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      loginErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="wrapper-login">
        <div className="form-wrapper-login">
          <h1 className="login-title">Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="login-firstname">
              <label htmlFor="name">Firstname</label>
              <input
                type="text"
                placeholder="user firstname "
                name="firstname"
                onChange={this.handleChange}
              />
            </div>
            <div className="login-lastname">
              <label htmlFor="name">Lasttname</label>
              <input
                type="text"
                placeholder="user lastname "
                name="lastname"
                onChange={this.handleChange}
              />
            </div>
            <div className="login-email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="user email "
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="login-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password*** "
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="button-Login" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPageBody;

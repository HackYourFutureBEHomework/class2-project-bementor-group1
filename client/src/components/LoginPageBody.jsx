import React, { Component } from "react";
import { loginuser } from "../api/users";
//import { loginUsers } from "../api/users";
import { Redirect } from "react-router-dom";
import "../assets/css/login-page.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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
      },
      redirect: false,
      redirectUrl: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();

    if (
      this.state.loginErrors.firstname.length === 0 &&
      this.state.loginErrors.lastname.length === 0 &&
      this.state.loginErrors.email.length === 0 &&
      this.state.loginErrors.password.length === 0
    ) {
      //console.log("        First Name: ", this.state.firstname);
      //console.log("        last Name: ", this.state.lastname);
      //console.log("        password : ", this.state.password);
      //console.log("        email : ", this.state.email);

      const fname = this.state.firstname;
      const lname = this.state.lastname;
      const email = this.state.email;
      const pword = this.state.password;

      const loginresult = await loginuser(fname, lname, email, pword);

      //console.log("loginresult", loginresult);

      // redirect to users page
      if (loginresult.success === true) {
        let redirectUser = "/userprofile/" + loginresult._id;
        this.setState({
          redirect: true,
          redirectUrl: redirectUser
        });
      } else {
        this.setState({
          redirect: true,
          redirectUrl: "/LoginFailed"
        });
      }
    } else {
      console.error(
        "FORM INVALID - DISPLAY ERROR MESSAGE",
        this.state.loginErrors
      );
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let loginErrors = this.state.loginErrors;

    switch (name) {
      case "email":
        loginErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email address";
        this.setState({
          email: value
        });
        break;
      case "password":
        loginErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        this.setState({
          password: value
        });
        break;
      default:
        break;
    }

    this.setState({ loginErrors, [name]: value }, () =>
      console.log(this.state)
    );
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to={this.state.redirectUrl} />;
    }
    return (
      <div className="wrapper-login">
        <div className="form-wrapper-login">
          <h1 className="login-title">Login</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
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

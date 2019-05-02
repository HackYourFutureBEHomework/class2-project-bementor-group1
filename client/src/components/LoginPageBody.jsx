import React, { Component } from "react";
import { loginuser } from "../api/users";
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
      auth: "",
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

  handleRegister = async e => {
    e.preventDefault();
    let redirectRegister = "/Registration";
    this.setState({
      redirect: true,
      redirectUrl: redirectRegister
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (
      this.state.loginErrors.firstname.length === 0 &&
      this.state.loginErrors.lastname.length === 0 &&
      this.state.loginErrors.email.length === 0 &&
      this.state.loginErrors.password.length === 0
    ) {
      const fname = this.state.firstname;
      const lname = this.state.lastname;
      const email = this.state.email;
      const pword = this.state.password;

      const loginresult = await loginuser(fname, lname, email, pword);
      console.log("loginresult", loginresult);

      // redirect to users page
      if (loginresult.success === true) {
        let redirectUser = "/userprofile/" + loginresult._id;
        this.setState({
          redirect: true,
          redirectUrl: redirectUser
        });
      } else {
        this.setState({
          auth: "Autentication Failed please register.."
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

    /*this.setState({ loginErrors, [name]: value }, () =>
      console.log(this.state)*/
    this.setState({ loginErrors, [name]: value });
  };
  render() {
    let { loginErrors, auth } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to={this.state.redirectUrl} />;
    }

    return (
      <div className="wrapper-login">
        <div className="form-wrapper-login">
          <h1 className="login-title">Login</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="login-email">
              <label htmlFor="email">Email</label>
              <input
                className={loginErrors.email.length > 0 ? "error" : null}
                type="text"
                placeholder="janice.doe@hyf.com "
                name="email"
                onChange={this.handleChange}
              />
              {loginErrors.email.length > 0 && (
                <span className="errorMessage">{loginErrors.email}</span>
              )}
            </div>
            <div className="login-password">
              <label htmlFor="password">Password</label>
              <input
                className={loginErrors.password.length > 0 ? "error" : null}
                type="password"
                placeholder="******** "
                name="password"
                onChange={this.handleChange}
              />
              {loginErrors.password.length > 0 && (
                <span className="errorMessage">{loginErrors.password}</span>
              )}
            </div>
            <div className="login-button">
              <button type="submit">Login</button>
              <small>
                {auth.length > 0 && (
                  <span className="errorMessage">{auth}</span>
                )}
              </small>
              <a
                href="http://localhost:3000/Registration"
                className="registrationRerouting"
              >
                <small className="registration_rerouteMessage">
                  Not Registered?{" "}
                </small>
              </a>{" "}
              <button onClick={this.handleRegister.bind(this)}>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPageBody;

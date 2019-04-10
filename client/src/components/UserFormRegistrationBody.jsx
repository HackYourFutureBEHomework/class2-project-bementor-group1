import React, { Component } from "react";
import "../assets/css/registration-form.css";
import { Redirect } from "react-router-dom";
import { userRegistration } from "../api/users";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class UserFormRegistrationBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: null,
      cpassword: null,
      registrationErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      bio: "",
      interest: "",
      img: "",
      tagline: "",
      campus: "",
      userStatus: "",
      redirect: false,
      redirectUrl: "",
      registrationFail: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (
      this.state.registrationErrors.firstname.length === 0 &&
      this.state.registrationErrors.lastname.length === 0 &&
      this.state.registrationErrors.email.length === 0 &&
      this.state.registrationErrors.password.length === 0
    ) {
      console.log(" First Name: ", this.state.firstName);
      console.log(" last Name: ", this.state.lastName);
      console.log(" password : ", this.state.password);
      console.log(" email : ", this.state.email);
      const fname = this.state.firstName;
      const lname = this.state.lastName;
      const email = this.state.email;
      const pword = this.state.password;
      const bio = this.state.bio;
      const img = this.state.img;
      const tagline = this.state.tagline;
      const interest = this.state.interest;
      const campus = this.state.campus;
      const userStatus = this.state.userStatus;

      const registrationResult = await userRegistration(
        fname,
        lname,
        email,
        pword,
        bio,
        img,
        interest,
        tagline,
        campus,
        userStatus
      );

      if (registrationResult.success === true) {
        let redirectUser = "/userprofile/" + registrationResult._id;
        this.setState({
          redirect: true,
          redirectUrl: redirectUser
        });
      } else {
        this.setState({
          registrationFail: registrationResult.error
        });

        console.log("erroe while registration");
      }
      console.log("registrationresult", registrationResult);
    } else {
      console.error(
        "FORM INVALID - DISPLAY ERROR MESSAGE",
        this.state.registrationErrors
      );
    }
  };

  handleLogin = e => {
    e.preventDefault();
    let redirectLogin = "/Login";
    this.setState({
      redirect: true,
      redirectUrl: redirectLogin
    });
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let registrationErrors = this.state.registrationErrors;

    switch (name) {
      case "firstname":
        registrationErrors.firstname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        this.setState({
          firstName: value
        });

        break;
      case "lastname":
        registrationErrors.lastname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        this.setState({
          lastName: value
        });
        break;
      case "email":
        registrationErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email address";
        this.setState({
          email: value
        });
        break;
      case "password":
        if (value.length < 6) {
          registrationErrors.password = "minimum 6 characaters required";
        } else {
          if (this.state.cpassword !== value) {
            registrationErrors.password = "password does not matched";
          } else {
            registrationErrors.password = "";
          }
        }
        /*
        registrationErrors.password =
          value.length < 6 || this.state.cpassword !== value
            ? "password does not matched"
            : "";*/
        this.setState({
          password: value
        });
        break;
      case "cpassword":
        if (value.length < 6) {
          registrationErrors.password = "minimum 6 characaters required";
        } else {
          if (this.state.password !== value) {
            registrationErrors.password = "password does not matched";
          } else {
            registrationErrors.password = "";
          }
        }
        /* registrationErrors.password =
          value.length < 6 || this.state.password !== value
            ? "password does not matched"
            : "";*/
        this.setState({
          cpassword: value
        });
        break;
      case "userStatus":
        this.setState({
          userStatus: value
        });
        break;
      default:
        break;
    }

    this.setState({ registrationErrors, [name]: value }, () =>
      console.log(this.state)
    );
  };
  render() {
    let { registrationErrors, registrationFail } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to={this.state.redirectUrl} />;
    }
    return (
      <div className="wrapper-Registration">
        <div className="form-wrapper-Registration">
          <h1 className="Registration-title">Registration From</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="Registration-firstname">
              <label htmlFor="name">Firstname</label>
              <input
                type="text"
                placeholder="user firstname "
                name="firstname"
                onChange={this.handleChange}
              />
              {registrationErrors.firstname.length > 0 && (
                <span className="errorMessage">
                  {registrationErrors.firstname}
                </span>
              )}
            </div>
            <div className="Registration-lastname">
              <label htmlFor="name">Lastname</label>
              <input
                type="text"
                placeholder="user lastname "
                name="lastname"
                onChange={this.handleChange}
              />
              {registrationErrors.lastname.length > 0 && (
                <span className="errorMessage">
                  {registrationErrors.lastname}
                </span>
              )}
            </div>
            <div className="Registration-email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="user email "
                name="email"
                onChange={this.handleChange}
              />
              {registrationErrors.email.length > 0 && (
                <span className="errorMessage">{registrationErrors.email}</span>
              )}
            </div>
            <div className="Registration-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password*** "
                name="password"
                onChange={this.handleChange}
              />
              {registrationErrors.password.length > 0 && (
                <span className="errorMessage">
                  {registrationErrors.password}
                </span>
              )}
            </div>
            <div className="Registration-password">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                placeholder="password*** "
                name="cpassword"
                onChange={this.handleChange}
              />
              {registrationErrors.password.length > 0 && (
                <span className="errorMessage">
                  {registrationErrors.password}
                </span>
              )}
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="userStatus"
                  value="mentor"
                  onChange={this.handleChange}
                />
                mentor
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="userStatus"
                  value="mentee"
                  onChange={this.handleChange}
                />
                mentee
              </label>
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              {registrationFail.length > 0 && (
                <span className="errorMessage">{registrationFail}</span>
              )}
              <small>Already Registered ? </small>
              <button onClick={this.handleLogin.bind(this)}>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserFormRegistrationBody;

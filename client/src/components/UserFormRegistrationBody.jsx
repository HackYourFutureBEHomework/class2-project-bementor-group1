import React, { Component } from "react";
import "../assets/css/registration-form.css";
//import { loginuser } from "../api/users";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class UserFormRegistrationBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
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
      userStaus: ""
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
      console.log(" First Name: ", this.state.firstname);
      console.log(" last Name: ", this.state.lastname);
      console.log(" password : ", this.state.password);
      console.log(" email : ", this.state.email);

      const fname = this.state.firstname;
      const lname = this.state.lastname;
      const email = this.state.email;
      const pword = this.state.password;

      //const registrationresult = await loginuser(fname, lname, email, pword);

      //console.log("registrationresult", registrationresult);
    } else {
      console.error(
        "FORM INVALID - DISPLAY ERROR MESSAGE",
        this.state.registrationErrors
      );
    }
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
          firstname: value
        });

        break;
      case "lastname":
        registrationErrors.lastname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        this.setState({
          lastname: value
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
        registrationErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        this.setState({
          password: value
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
    return (
      <div className="wrapper-Registration">
        <div className="form-wrapper-Registration">
          <h1 className="Registration-title">Registration From</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="Registration-firstname">
              <label htmlFor="name">Firstname</label>
              <input
                type="text"
                placeholder="user firstname "
                name="firstname"
                onChange={this.handleChange}
              />
            </div>
            <div className="Registration-lastname">
              <label htmlFor="name">Lasttname</label>
              <input
                type="text"
                placeholder="user lastname "
                name="lastname"
                onChange={this.handleChange}
              />
            </div>
            <div className="Registration-email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="user email "
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="Registration-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password*** "
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="button-Login" className="Registration-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserFormRegistrationBody;

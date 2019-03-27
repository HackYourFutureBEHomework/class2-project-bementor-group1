import React, { Component } from "react";
import "../assets/css/signup.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      zipCode: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, firstName, lastName, age, zipCode } = this.state;

    fetch(`http://localhost:4000/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        age,
        zipCode
      })
    })
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          email,
          password,
          firstName,
          lastName,
          age,
          zipCode
        });
        console.log(this.state.user);
      });
  };

  render() {
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            <h1>Please fill in the below</h1>
            <fieldset>
              <div className="signup-center">
                <label>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="email: e.g. janice.dodo@bemail.com"
                  />
                </label>
                <label>
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.firstName}
                    type="text"
                    placeholder="first name: e.g. Janice"
                    required
                  />
                </label>
                <label>
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.lastName}
                    type="text"
                    placeholder="last name: e.g. Dodo"
                    required
                  />
                </label>
                <label>
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.age}
                    type="number"
                    placeholder="age: e.g. 24"
                    required
                  />
                </label>
                <label>
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.zipCode}
                    type="text"
                    placeholder="zip code: e.g. 1000"
                    required
                  />
                </label>
                <label>
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    type="password"
                    placeholder="password: e.g. ********"
                    required
                  />
                </label>
                <br />

                <label>I want to learn more about</label>
                <ul>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      value={this.state.frontEnd}
                      onChange={this.handleInputChange}
                    />
                    Front End
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      value={this.state.backEnd}
                      onChange={this.handleInputChange}
                    />
                    Back End
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      value={this.state.fullStack}
                      onChange={this.handleInputChange}
                    />
                    Full Stack
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      value={this.state.mobileApps}
                      onChange={this.handleInputChange}
                    />
                    Mobile Apps
                  </li>
                </ul>
              </div>
            </fieldset>
          </div>

          <div className="signup-center">
            <button type="submit">Sign Up!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Mentors from "./components/Mentors";
import Contact from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import LoginFailed from "./components/LoginFailed";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:path(|index|home|start)" component={Home} />

          <Route path="/mentors" component={Mentors} />
          <Route path="/userprofile/:userid" component={UserProfile} />
          <Route path="/contact" component={Contact} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/LoginFailed" component={LoginFailed} />

          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

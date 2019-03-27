import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import selectedmentor from "./components/SelectedMentor";
import Mentors from "./components/Mentors";
import Contact from "./components/ContactPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:path(|index|home|start)" component={Home} />
          <Route path="/user" component={UserProfile} />
          <Route path="/selectedmentor" component={selectedmentor} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/contact" component={Contact} />

          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

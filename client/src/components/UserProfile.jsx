import React, { Component } from "react";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";
import Header from "./Header";

class UserProfile extends Component {
  render() {
    let selecteduserprofile = this.props.match.params;

    return (
      <div>
        <Header />
        <UserProfileBody userid={selecteduserprofile} />
        <Footer />
      </div>
    );
  }
}

export default UserProfile;

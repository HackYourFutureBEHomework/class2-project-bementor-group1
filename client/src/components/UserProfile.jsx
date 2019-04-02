import React, { Component } from "react";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";
import MainHeader from "./MainHeader";

class UserProfile extends Component {
  render() {
    let selecteduserprofile = this.props.match.params;

    return (
      <div>
        <MainHeader />
        <UserProfileBody userid={selecteduserprofile} />
        <Footer />
      </div>
    );
  }
}

export default UserProfile;

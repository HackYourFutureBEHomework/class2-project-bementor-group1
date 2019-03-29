import React, { Component } from "react";
import Footer from "./Footer";
import SelectedUserBody from "../components/SelectedUserBody";
import MainHeader from "./MainHeader";

class SelectedUser extends Component {
  render() {
    let selecteduserprofile = this.props.history.location.state.selecteduser;
    return (
      <div>
        <MainHeader />
        <SelectedUserBody selecteduser={selecteduserprofile} />
        <Footer />
      </div>
    );
  }
}

export default SelectedUser;

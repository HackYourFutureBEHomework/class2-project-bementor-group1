import React, { Component } from "react";
import Footer from "../components/Footer";
import SelectedMentorBody from "../components/SelectedMentorBody";
import MainHeader from "./MainHeader";

class SelectedMentor extends Component {
  render() {
    let selecteduserprofile = this.props.history.location.state.selecteduser;
    return (
      <div>
        <MainHeader />
        <SelectedMentorBody selecteduser={selecteduserprofile} />
        <Footer />
      </div>
    );
  }
}

export default SelectedMentor;

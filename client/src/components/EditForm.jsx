import React, { Component } from "react";
import Footer from "../components/Footer";
import EditFormBody from "../components/EditFormBody";
import Header from "./Header";

class EditForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <EditFormBody />
        <Footer />
      </div>
    );
  }
}

export default EditForm;

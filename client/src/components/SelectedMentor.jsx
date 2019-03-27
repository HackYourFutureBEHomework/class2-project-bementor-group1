import React from "react";
import Footer from "../components/Footer";
import SelectedMentorBody from "../components/SelectedMentorBody";
import MainHeader from "./MainHeader";

const SelectedMentor = props => {
  return (
    <div>
      <MainHeader />
      <SelectedMentorBody />
      <Footer />
    </div>
  );
};

export default SelectedMentor;

import React from "react";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";
import MainHeader from "./MainHeader";

const UserProfile = props => {
  return (
    <div>
      <MainHeader />
      <UserProfileBody />
      <Footer />
    </div>
  );
};

export default UserProfile;

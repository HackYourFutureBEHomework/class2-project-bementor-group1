import React from "react";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";
import Header from "./Header";

const UserProfile = props => {
  return (
    <div>
      <Header />
      <UserProfileBody />
      <Footer />
    </div>
  );
};

export default UserProfile;

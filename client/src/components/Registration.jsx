import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import UserFormRegistrationBody from "./UserFormRegistrationBody";

const UserFormRegistration = props => {
  return (
    <div>
      <Header />
      <UserFormRegistrationBody />
      <Footer />
    </div>
  );
};

export default UserFormRegistration;

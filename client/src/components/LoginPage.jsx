import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LoginPageBody from "./LoginPageBody";

const LoginPage = props => {
  return (
    <div>
      <Header />
      <LoginPageBody />
      <Footer />
    </div>
  );
};

export default LoginPage;

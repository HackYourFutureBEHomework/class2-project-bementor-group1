import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const LoginFailed = props => {
  return (
    <div>
      <Header />
      <p>LOGIN FAILED User not found Please register ...</p>
      <Footer />
    </div>
  );
};

export default LoginFailed;

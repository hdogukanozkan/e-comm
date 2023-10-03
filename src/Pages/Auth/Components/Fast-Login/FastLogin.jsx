import React from "react";
import "./fastLogin.css";
import FacebookIcon from "../../../../Assets/Social-icon/facebook.png";
import GoogleIcon from "../../../../Assets/Social-icon/google.png";

const fastLogin = () => {
  return (
    <div className="fast-login">
      <div className="header">
        <span></span>
        <p>Fast Login</p>
        <span></span>
      </div>
      <div className="social-button">
        <a href="#">
          <img src={GoogleIcon} />
        </a>
        <a href="#">
          <img src={FacebookIcon} />
        </a>
      </div>
    </div>
  );
};

export default fastLogin;

import React from "react";
import okBeLogo from "../assets/images/open-knowledge-belgium.svg";
import beCentralLogo from "../assets/images/becentral.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__socials">
        <i>
          <FontAwesomeIcon icon={faTwitter} />
        </i>
        <i>
          <FontAwesomeIcon icon={faGithub} />
        </i>
        <i>
          <FontAwesomeIcon icon={faLinkedin} />
        </i>
      </div>
      <div className="app-footer__logos">
        <a
          href="https://openknowledge.be"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={okBeLogo}
            alt="Open Knowledge Belgium logo"
            rel="noopener noreferrer"
          />
        </a>
        <a
          href="https://becentral.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={beCentralLogo} alt="BeCentral logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

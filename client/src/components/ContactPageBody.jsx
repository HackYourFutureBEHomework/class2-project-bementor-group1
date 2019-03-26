import React from "react";
import "../assets/css/contact-page.css";

const ContactPageBody = props => {
  return (
    <div className="contact-info">
      <h2>BeMentor.</h2>
      <div className="contact-info-address">
        <i className="fas fa-map-marker" />
        <span>
          <p>adresss aaaaa adresss aaaaa </p>
          <p>adresss aaaaa adresss aaaaa adresss aaaa</p>
        </span>
      </div>

      <div className="contact-info-email">
        <i className="fas fa-envelope-square" />
        <a href="mailto:info@bementor.be">
          <span>info@bementor.be</span>
        </a>
      </div>

      <div className="contact-infos-tel">
        <i className="fas fa-phone" />
        <a href="tel:+32 (0)xxx xx xx xx;">+32 (0)xxx xx xx xx</a>
      </div>
    </div>
  );
};

export default ContactPageBody;

import React from "react";
import "../assets/css/contact-page.css";

const ContactPageBody = props => {
  return (
    <div className="wrapper-contact">
      <div className="form-wrapper-contact">
        <h1 className="contact-title">BeMentor</h1>
        <div className="contact-info-address">
          <i className="fa fa-map-marker" />
          <span>&nbsp;&nbsp;BeCentral, Cantersteen 12, 1000 Bruxelles</span>
          <br />
          <i className="fas fa-envelope-square" />
          <a href="mailto:info@bementor.be">
            <span>&nbsp;&nbsp;info@bementor.be</span>
          </a>
          <br />

          <i className="fas fa-phone" />
          <a href="tel:+32 (0)xxx xx xx xx;">&nbsp;&nbsp;+32 (0)X XXX XX XX</a>
        </div>

        <div className="openStreetMap">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.356269538402558%2C50.84478366215189%2C4.358683526515962%2C50.84615377213845&amp;layer=mapnik&amp;marker=50.8454687221748%2C4.357476532459259"
            width="600"
            height="450"
            frameborder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPageBody;

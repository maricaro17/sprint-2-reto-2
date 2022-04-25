import React from "react";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer">
      <div className="containerLogos">
        <FontAwesomeIcon icon={faFacebookSquare}  className="logos"/>
        <FontAwesomeIcon icon={faPinterest} className="logos"/>
        <FontAwesomeIcon icon={faInstagram} className="logos"/>
      </div>
    </div>
  );
};

export default Footer;

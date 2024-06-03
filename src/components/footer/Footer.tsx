import React from "react";
import footerIcon from "../../assets/images/FooterIcon.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>© Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <img src={footerIcon} alt="stuol-icon" />
      </div>
    </footer>
  );
};

export default Footer;

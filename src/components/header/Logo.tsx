import React from "react";
import logoHeader from "../../assets/images/LogoHeader.png";
import logoBottom from "../../assets/images/LogoBottom.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-header">
        <img src={logoHeader} alt="stuol-logo" />
      </div>
      <div className="logo-bottom">
        <img src={logoBottom} alt="stuol-logo" />
      </div>
    </div>
  );
};

export default Logo;

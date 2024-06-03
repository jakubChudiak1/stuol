import React from "react";
import headerStrip from "../../assets/images/HeaderStrip.png";
import bottomStrip from "../../assets/images/BottomStrip.png";
import weAreIcon from "../../assets/images/WeAreIcon.png";

const AboutUsContent = () => {
  return (
    <div className="about-us-content">
      <img src={headerStrip} alt="header-strip" />
      <div className="about-us-text">
        <h1>we are:</h1>
        <h2>
          your personal{" "}
          <span className="line-break">smart gastro concierge</span>
        </h2>
        <div className="about-us-icon">
          <img src={weAreIcon} alt="about-us-icon" />
        </div>
        <p>
          AIntelligent platform, that doesn’t only inspire and gives{" "}
          <span className="line-break">
            advice but also does the shopping, delivers, and helps
          </span>{" "}
          <span className="line-break">
            to prepare meals. Basically, everything from
          </span>{" "}
          <span className="line-break">
            the question “What do I feel like eating today?”{" "}
          </span>
          <span className="line-break"> to the final meal on the table.</span>
        </p>
      </div>
      <img src={bottomStrip} alt="header-strip" className="bottom-strip" />
    </div>
  );
};

export default AboutUsContent;

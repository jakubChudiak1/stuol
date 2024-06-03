import React from "react";
import line from "../../assets/images/Line.png";
import soon from "../../assets/images/Soon.png";
import SoonItem from "./SoonItem";

const LandingSectionRight = () => {
  return (
    <div className="landing-section-right">
      <div className="landing-section-right-text">
        <p>
          The future <span className="line-break">of Shop’n’cook</span>
          <span className="line-break">
            begins{" "}
            <span className="line-wrapper">
              <span className="line-throught">
                now <img src={line} alt="line" className="line" />
              </span>
            </span>
          </span>
        </p>
        <SoonItem />
      </div>
    </div>
  );
};

export default LandingSectionRight;

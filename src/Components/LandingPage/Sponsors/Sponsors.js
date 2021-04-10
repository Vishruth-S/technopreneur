import React from "react";
import microsoft from "../../../Assets/sponsors/microsoft.png";
import uber from "../../../Assets/sponsors/Uber.png";
import cognizant from "../../../Assets/sponsors/Cognizant.png";
import tcs from "../../../Assets/sponsors/tcs.png";
import ebay from "../../../Assets/sponsors/ebay.png";
import itc from "../../../Assets/sponsors/ITC.png";
import tick from "../../../Assets/Saly-26.png";
import downWave from "../../../Assets/Vector-3.png";
import upWave from "../../../Assets/Vector-2.png";
import upWaves from "../../../Assets/Group-5.png";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div>
      <div className="sponsor-container" id="sponsors">
        <p className="headings">
          OUR <br /> PARTNERS
        </p>
        <div className="content">
          <div className="row">
            <div id="first">
              <img
                src={microsoft}
                alt="first "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="second">
              <img
                src={uber}
                alt="second "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="third">
              <img
                src={cognizant}
                alt="third "
                className="placeholder partner-image"
              ></img>
            </div>

            <div id="fourth">
              <img
                src={ebay}
                alt="fourth "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="fifth">
              <img
                src={tcs}
                alt="fourth "
                className="placeholder partner-image"
              ></img>
            </div>
            <div id="sixth">
              <img
                src={itc}
                alt="fourth "
                className="placeholder partner-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

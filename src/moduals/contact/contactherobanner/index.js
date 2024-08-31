import React from "react";
import "./contactherobanner.scss";
import Ship from '../../../assests/icons/ship.svg'
export default function Contactherobanner() {
  return (
    <div>
      <div className="contact-herobanner-main">
        <div className="contact-herobanner">
          <div className="container">
            <h1>Contact & locations</h1>
            <div className="contact-herobanner-textgrid">
              <div className="contact-herobanner-textitems">
                <div className="contact-herobanner-icon"></div>
              </div>
              <div className="contact-herobanner-textitems">
                <span>
                  Global Reach, Local Expertise. Connect with us to explore our
                  service locations and get in touch today.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolldown">
        <div className="container">
            <div className="scrolldown-content">
                <div className="scrolldown-iconcenter">
                    <img src={Ship} alt="shipIcon"/>
                </div>
                <span>Scroll down</span>
            </div>
        </div>
      </div>
    </div>
  );
}

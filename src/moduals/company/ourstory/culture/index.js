import React from "react";
import "./culture.scss";
import Culturewave from "../../../../assests/icons/wave.svg";
import Cultureimg from "../../../../assests/images/team-culture.png";
export default function Culture(){
    return(
        <div>
            <div className="container">
                <div className="culture-details">
                    <div className="culture-title">
                        <span>OUR DYNAMIC TEAM</span>
                        <div className="culture-title-flex">
                            <div>
                                <h2>TEAM & CULTURE</h2>
                            </div>
                            <div className="culture-title-flex-border">
                                <p>1.3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="culture-information">
                    <div className="culture-sub-details">
                        <h4>Our Journey Since 1999</h4>
                        <p>At Master Systems, we foster a culture of teamwork 
                            and innovation. Our diverse team brings together 
                            expertise from various disciplines, collaborating 
                            to deliver exceptional solutions. We value growth, 
                            transparency, and a supportive work environment that 
                            encourages creativity, personal development, and a 
                            shared commitment to maritime excellence.</p>
                        <div className="culture-details-icon">
                            <img src={Culturewave}></img>
                        </div>
                    </div>
                    <div className="culture-img">
                        <img src={Cultureimg}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import "./herobanner.scss";
export default function Herobanner(){
    return(
        <div className="herobanner-img">
            <div className="herobanner-flex">
                <div className="container">
                    <div className="herobanner-items">
                        <div className="herobanner-title">
                            <h1>OUR STORY</h1>
                        </div>
                        <div className="herobanner-information">
                            <div className="herobanner-dot"></div>
                            <p>Journey of Excellence: Navigating the Maritime Industry with 
                                Unwavering Commitment and Innovation.</p>
                        </div>
                        <div className="herobanner-circal">
                            <div className="herobanner-circal-border">
                                <div>
                                    <div>
                                        <span>Get</span>
                                    </div>
                                    <div>
                                        <p>in touch</p>
                                    </div>
                                </div>
                                <div className="herobanner-circal-animation"></div>
                                <div className="herobanner-circal-animation-two">
                                    <div>
                                        <div>
                                            <span>Get</span>
                                        </div>
                                        <div>
                                            <p>in touch</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
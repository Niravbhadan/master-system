import React from "react";
import "./evolution.scss";
import Evolutionshiplogo from "../../../../assests/icons/ship.svg";
import Evolutionimf from "../../../../assests/images/continiousen.png";
import Evolutionicon from "../../../../assests/icons/wave.svg";
import Evolutionimf2 from "../../../../assests/images/brand.png";

export default function Evolution(){
    return(
        <div>
            <div className="container">
                <div className="evolution-mobileview-section">
                    <div className="evolution-mobileview-alignment">
                        <div className="evolution-mobileview-alignment-items">
                            <div className="evolution-mobileview-alignment-img">
                                <img src={Evolutionshiplogo}></img>
                            </div>
                            <div className="evolution-mobileview-alignment-scroll-down">
                                <span>Scroll down</span>
                            </div>
                        </div>
                        <div className="evolution-mobileview-alignment-circal">
                            <div className="evolution-mobileview-alignment-circal-border">
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
                <div className="evolution-details">
                    <div className="evolution-title">
                        <span>ADAPTING, GROWING, INNOVATING, SUCCEEDING, THRIVING.</span>
                        <div className="evolution-title-flex">
                            <div>
                                <h2>CONTINIOUS EVOLUTION</h2>
                            </div>
                            <div className="evolution-title-flex-border">
                                <p>1.1</p>
                            </div>
                        </div>
                    </div>
                    <div className="evolution-details-grid">
                        <div className="evolution-details-grid-img">
                            <img src={Evolutionimf}></img>
                        </div>
                        <div className="evolution-details-grid-details">
                            <h4>Our Journey Since 1999</h4>
                            <p>Founded in 1999 in Abu Dhabi, UAE, we have been dedicated 
                                to delivering exceptional maritime solutions, shaping the 
                                industry's future, and fostering excellence through our 
                                unwavering commitment to innovation, expertise, and customer 
                                satisfaction.</p>
                            <div className="evolution-details-grid-details-icon">
                                <img src={Evolutionicon}></img>
                            </div>
                        </div>
                    </div>
                    <div className="evolution-title">
                        <span>REFLECTING EXCELLENCE, TRUST, AND INNOVATION</span>
                        <div className="evolution-title-flex">
                            <div>
                                <h2>BRAND IDENTITY</h2>
                            </div>
                            <div className="evolution-title-flex-border">
                                <p>1.2</p>
                            </div>
                        </div>
                    </div>
                    <div className="evolution-details-grid-second">
                        <div className="evolution-details-grid-details">
                            <div className="evolution-details-grid-details-items">
                                <h4>Crafting a Distinctive Presence in the Maritime Industry</h4>
                                <p>At Master Systems, we understand the power of a strong brand. 
                                    Our brand identity reflects our commitment to excellence and 
                                    reliability. We strive to create lasting impressions, foster 
                                    trust, and stand out as a trusted partner in the maritime 
                                    industry. Through meticulous attention to detail and a focus 
                                    on delivering exceptional value, we continuously shape our 
                                    brand to align with our core values and resonate with our 
                                    customers.</p>
                                <div className="evolution-details-grid-details-icon">
                                    <img src={Evolutionicon}></img>
                                </div>
                            </div>
                        </div>
                        <div className="evolution-details-grid-img">
                            <img src={Evolutionimf2}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="evolution-business-color">
                <div className="container">
                    <div className="evolution-business-details">
                        <div className="evolution-business-details-items">
                            <h4>4,997+</h4>
                            <p>Happy clients</p>
                        </div>
                        <div className="evolution-business-details-items">
                            <h4>22</h4>
                            <p>Years in business</p>
                        </div>
                        <div className="evolution-business-details-items">
                            <h4>60+</h4>
                            <p>Partners</p>
                        </div>
                        <div className="evolution-business-details-items">
                            <h4>15</h4>
                            <p>Locations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
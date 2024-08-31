import React from "react";
import "./footer.scss"
import MobileRight from "../../../assests/icons/mobile-right.svg";
export default function Footer(){
    return(
        <div>
            <div className="footer-color">
                <div className="container">
                    <footer>
                        <div className="footer-contactus">
                            <h2>Contact us.</h2>
                        </div>
                        <div className="footer-items">
                            <div className="footer-navigation">
                                <h5>Navigation</h5>
                                <a>Company</a>
                                <a>Products</a>
                                <a>Services</a>
                                <a>Achievements & certificates</a>
                                <a>Partners</a>
                                <a>Careers</a>
                                <a>Gallery</a>
                            </div>
                            <div className="footer-social-media"> 
                                <h5>Social Media</h5>
                                <a>Facebook</a>
                                <a>LinkedIn</a>
                                <a>YouTube</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className="footer-corporate-office">
                            <h4>Corporate Office</h4>
                            <span className="footer-corporate-office-phone">Phone: Undefind</span>
                            <span>Fax:</span>
                            <span>Mail:</span>
                            <div className="footer-corporate-office-btn">
                                <button>
                                    <span>Find your local contact</span>
                                    <img src={MobileRight} alt="MobileRight" />
                                </button>
                            </div>
                        </div>
                        <div className="footer-letstalk">
                            <h2>Lets talk!</h2>
                            <div className="footer-letstalk-btn">
                                <button>
                                    <span>Write to us</span>
                                    <img src={MobileRight} alt="MobileRight" />
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
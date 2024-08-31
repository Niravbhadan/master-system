import React from "react";
import "./header.scss";
import Headerlogo from "../../../assests/logos/black-logo (1).png";
import whitelogo from "../../../assests/logos/white-new.png";
import Facebook from "../../../assests/icons/Facebook1.svg";
import LinkdIn from "../../../assests/icons/new-icon.svg";
import Youtube from "../../../assests/icons/linkdin1.svg";
import Twitter from "../../../assests/icons/new-icon2.svg";
export default function Header() {
    return (
        <div className="header-color">
            <div className="container">
                <header>
                    <div className="header-logo">
                        <a href="/">
                            <img src={Headerlogo} className="black-logo"></img>
                            <img src={whitelogo} className="white-logo"></img>
                        </a>
                    </div>
                    <div className="header-items">
                        <div className="compny-hover">
                            <a href="/company">Company</a>
                            <div className="compny-dropdown">
                                <div className="containermd-7">
                                    <div className="blackheader-height-box">
                                        <div className="compny-dropdown-grid">
                                            <a href="/company/ourstory">
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>Our Story</span>
                                                        <div className="blackheader-count">
                                                            01
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Our journey,
                                                            passion, and
                                                            dedication.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>QHSE</span>
                                                        <div className="blackheader-count">
                                                            02
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Safety and
                                                            excellence woven
                                                            into everything.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>Our values</span>
                                                        <div className="blackheader-count">
                                                            03
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Aiming high, shaping
                                                            maritime excellence.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>Careers</span>
                                                        <div className="blackheader-count">
                                                            04
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Join us and make
                                                            waves in your
                                                            career.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>
                                                            Achievements &
                                                            certificates
                                                        </span>
                                                        <div className="blackheader-count">
                                                            05
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Recognitions and
                                                            milestones we
                                                            cherish.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blackheader-box-footer">
                                    <a href="tel: +919 89 8144191">
                                        +919 89 8144191
                                    </a>
                                    <a href="mailto: info@mastersystem.com">
                                        info@mastersystem.com
                                    </a>
                                    <div className="blackheader-box-footer-social-icons">
                                        <img src={LinkdIn} alt="linkdin" />
                                        <img src={Youtube} alt="linkdin" />
                                        <img src={Facebook} alt="linkdin" />
                                        <img src={Twitter} alt="linkdin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a>Product</a>
                        <div className="solution-hover">
                            <a>Solution</a>
                            <div className="compny-dropdown">
                                <div className="containermd-7">
                                    <div className="blackheader-height-box">
                                        <div className="compny-dropdown-grid">
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>Automation</span>
                                                        <div className="blackheader-count">
                                                            01
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Streamlined
                                                            Efficiency, Enhanced
                                                            Performance
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>
                                                            FIRE & SAFETY
                                                        </span>
                                                        <div className="blackheader-count">
                                                            02
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Safety at the
                                                            Forefront
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>OIL & GAS</span>
                                                        <div className="blackheader-count">
                                                            03
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Tailored Solutions
                                                            for Oil & Gas
                                                            Industry
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>
                                                            CALIBRATION &
                                                            INSTRUMENTATION
                                                        </span>
                                                        <div className="blackheader-count">
                                                            04
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Precision through
                                                            Calibration and
                                                            Instrumentation
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>
                                                            COMMUNICATION
                                                        </span>
                                                        <div className="blackheader-count">
                                                            05
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Seamless Guidance,
                                                            Uninterrupted
                                                            Connection
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a>
                                                <div className="blackheader-box">
                                                    <div className="blackheader-box-first-alimenet">
                                                        <span>Navigation</span>
                                                        <div className="blackheader-count">
                                                            06
                                                        </div>
                                                    </div>
                                                    <div className="balackheader-detail">
                                                        <p>
                                                            Connectivity Beyond
                                                            Boundaries
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blackheader-box-footer">
                                    <a href="tel: +919 89 8144191">
                                        +919 89 8144191
                                    </a>
                                    <a href="mailto: info@mastersystem.com">
                                        info@mastersystem.com
                                    </a>
                                    <div className="blackheader-box-footer-social-icons">
                                        <img src={LinkdIn} alt="linkdin" />
                                        <img src={Youtube} alt="linkdin" />
                                        <img src={Facebook} alt="linkdin" />
                                        <img src={Twitter} alt="linkdin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a>partner</a>
                        <a>Contact</a>
                    </div>
                    <div className="header-btn">
                        <button>
                            Enquiry
                            <div className="header-btn-animation"></div>
                            <div className="header-btn-animation-two">
                                Enquiry
                            </div>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}

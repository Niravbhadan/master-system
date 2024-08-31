import React from "react";
import "./common.scss";
import MobileRight from "../../../assests/icons/mobile-right.svg";
export function LearnMore() {
    return (
        <div className="learn-more-btn">
            <button>
                Learn more
                <div className="learn-more-btn"></div>
                <div className="learn-more-btn-animation">Learn more</div>
            </button>
        </div>
    );
}

export function Explore() {
    return (
        <div className="explore-more-btn">
            <button>
                Explore
                <div className="explore-more-btn"></div>
                <div className="explore-more-btn-animation">Explore</div>
            </button>
        </div>
    );
}

export function View() {
    return (
        <div className="view-more-btn">
            <button>
                View
                <div className="view-more-btn"></div>
                <div className="view-more-btn-animation">View</div>
            </button>
        </div>
    );
}

export function GetInTouchWhite() {
    return (
        <div className="get-in-touch-circal-border">
            <div>
                <div>
                    <span>Get</span>
                    <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 4C3.483 4 5.345 1 5.345 1C5.345 1 7.207 4 9.69 4C12.172 4 14.655 1 14.655 1C14.655 1
                      17.138 4 19 4M1 11C3.483 11 5.345 8 5.345 8C5.345 8 7.207 11 9.69 11C12.172 11 14.655 8 14.655
                      8C14.655 8 17.138 11 19 11"
                            stroke="#292929"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </div>
                <div>
                    <p>in touch</p>
                </div>
            </div>
            <div className="get-in-touch-circal-animation"></div>
            <div className="get-in-touch-circal-animation-two">
                <div>
                    <div>
                        <span>Get</span>
                        <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 4C3.483 4 5.345 1 5.345 1C5.345 1 7.207 4 9.69 4C12.172 4 14.655 1 14.655 1C14.655 1
                      17.138 4 19 4M1 11C3.483 11 5.345 8 5.345 8C5.345 8 7.207 11 9.69 11C12.172 11 14.655 8 14.655
                      8C14.655 8 17.138 11 19 11"
                                stroke="#292929"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p>in touch</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GetInTouchBlack() {
    return (
        <div className="get-in-touch-black-circal-border">
            <div>
                <div>
                    <span>Get</span>
                    <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 4C3.483 4 5.345 1 5.345 1C5.345 1 7.207 4 9.69 4C12.172 4 14.655 1 14.655 1C14.655 1
                      17.138 4 19 4M1 11C3.483 11 5.345 8 5.345 8C5.345 8 7.207 11 9.69 11C12.172 11 14.655 8 14.655
                      8C14.655 8 17.138 11 19 11"
                            stroke="#292929"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </div>
                <div>
                    <p>in touch</p>
                </div>
            </div>
            <div className="get-in-touch-black-circal-animation"></div>
            <div className="get-in-touch-black-circal-animation-two">
                <div>
                    <div>
                        <span>Get</span>
                        <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 4C3.483 4 5.345 1 5.345 1C5.345 1 7.207 4 9.69 4C12.172 4 14.655 1 14.655 1C14.655 1
                      17.138 4 19 4M1 11C3.483 11 5.345 8 5.345 8C5.345 8 7.207 11 9.69 11C12.172 11 14.655 8 14.655
                      8C14.655 8 17.138 11 19 11"
                                stroke="#292929"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p>in touch</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Submit() {
    return (
        <div className="submit">
            <button>
                <span>Submit</span>
                <img src={MobileRight} alt="MobileRight" />
            </button>
        </div>
    );
}

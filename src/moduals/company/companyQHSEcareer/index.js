import React from 'react';
import './companyQHSECareer.scss';
import WaveImg from '../../../assests/icons/wave.svg';
import CareersImg from '../../../assests/images/Careers.png';

export default function CompanyQHSECareer() {
    return (
        <div>
            <div className='qhse-carrer-section'>
                <div className='container'>
                    <div className="company-qhse-career-title">
                        <span>CAREERS</span>
                        <div className="company-qhse-career-title-flex">
                            <div>
                                <h2>QHSE</h2>
                            </div>
                            <div className="company-qhse-career-title-flex-border">
                                <p>05</p>
                            </div>
                        </div>
                    </div>
                    <div className='company-qhse-career-subgrid'>
                        <div className="company-qhse-career-details-grid">
                            <div className="company-qhse-career-details-grid-img">
                                <img src={CareersImg}></img>
                            </div>
                            <div className="company-qhse-career-details-grid-details">
                                <h4>Our Commitment to QHSE Standards</h4>
                                <p>At Master Systems, we uphold stringent QHSE practices to ensure the well-being of our workforce
                                    , protect the environment, and deliver exceptional services with unwavering dedication to
                                    quality and safety.</p>
                                <div className="company-qhse-career-details-grid-details-icon">
                                    <img src={WaveImg}></img>
                                </div>
                            </div>
                        </div>
                        <div className="company-herobanner-circal">
                            <div className="company-herobanner-circal-border">
                                <div>
                                    <div>
                                        <span>Get</span>
                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4C3.483 4 5.345 1 5.345 1C5.345 1 7.207 4 9.69 4C12.172 4 14.655 1 14.655 1C14.655 1
                                                    17.138 4 19 4M1 11C3.483 11 5.345 8 5.345 8C5.345 8 7.207 11 9.69 11C12.172 11 14.655 8 14.655
                                                    8C14.655 8 17.138 11 19 11" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p>in touch</p>
                                    </div>
                                </div>
                                <div className="company-herobanner-circal-animation"></div>
                                {/* <div className="company-herobanner-circal-animation-two">
                                            <div>
                                                <div>
                                                    <span>Get</span>
                                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 4C3.483 4 5.345 1 5.345 1C5.345 1 7.207 4 9.69 4C12.172 4 14.655 1 14.655 1C14.655 1
                                                    17.138 4 19 4M1 11C3.483 11 5.345 8 5.345 8C5.345 8 7.207 11 9.69 11C12.172 11 14.655 8 14.655
                                                    8C14.655 8 17.138 11 19 11" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p>in touch</p>
                                                </div>
                                            </div>
                                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

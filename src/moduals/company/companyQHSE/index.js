import React from 'react';
import './companyQHSE.scss';
import QHSEImg from '../../../assests/images/qhse.png';
import WaveImg from '../../../assests/icons/wave.svg';

export default function CompanyQHSE() {
    return (
        <div>
            <div className='container'>
                <div className="company-qhse-title">
                    <span>PRIORITIZING SAFETY AND EXCELLENCE</span>
                    <div className="company-qhse-title-flex">
                        <div>
                            <h2>QHSE</h2>
                        </div>
                        <div className="company-qhse-title-flex-border">
                            <p>04</p>
                        </div>
                    </div>
                </div>
                <div className="company-qhse-details-grid">
                    <div className="company-qhse-details-grid-img">
                        <img src={QHSEImg}></img>
                    </div>
                    <div className="company-qhse-details-grid-details">
                        <h4>Our Commitment to QHSE Standards</h4>
                        <p>At Master Systems, we uphold stringent QHSE practices to ensure the well-being of our workforce
                            , protect the environment, and deliver exceptional services with unwavering dedication to
                            quality and safety.</p>
                        <div className="company-qhse-details-grid-details-icon">
                            <img src={WaveImg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

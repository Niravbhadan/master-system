import React from 'react';
import './companyachievements.scss';
import certificatesImg from '../../../assests/images/Certificates.png';
import achievementsImg from '../../../assests/images/achivevements.png';
import waveIconImg from '../../../assests/icons/wave.svg';

export default function CompanyAchievements() {
    return (
        <div>
            <div className='company-achievements'>
                <div className='container'>
                    <div className="story-title">
                        <span>MILESTONES OF EXCELLENCE</span>
                        <div className="story-title-flex">
                            <div>
                                <h2>ACHIEVEMENTS & CERTIFICATES</h2>
                            </div>
                            <div className="story-title-flex-border">
                                <p>03</p>
                            </div>
                        </div>
                    </div>
                    <div className='achievements-certificate-detailes'>
                        <div>
                            <div className='achivements-certificate-image'>
                                <img src={achievementsImg} />
                            </div>
                            <div className='achivements-certificate-detailes'>
                                <h2>Achievements</h2>
                                <p>Celebrating our remarkable achievements and industry recognition,
                                    showcasing our commitment to delivering superior maritime solutions
                                    and driving industry advancement.</p>
                                <div className="wave-img">
                                    <img src={waveIconImg}></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='achivements-certificate-image'>
                                <img src={certificatesImg} />
                            </div>
                            <div className='achivements-certificate-detailes'>
                                <h2>Certificates</h2>
                                <p>Our extensive range of industry certifications showcases our dedication to
                                    delivering superior products and services, ensuring the highest standards
                                    of quality, safety, and compliance.</p>
                                <div className="wave-img">
                                    <img src={waveIconImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

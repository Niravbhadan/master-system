import React from 'react';
import './companystory.scss';
import scrollDownShipImg from '../../../assests/icons/ship.svg';
import Evolutionimf from '../../../assests/images/continiousen.png'
import Evolutionicon from '../../../assests/icons/wave.svg';
import companyVisionImg from '../../../assests/images/vision.png';
import companyMissionImg from '../../../assests/images/mission.png';

export default function CompanyStory() {
    return (
        <div>
            <div className='scrolldown-btn'>
                <div className='scrolldown-ship-img'>
                    <img src={scrollDownShipImg} />
                </div>
                <p>Scroll down</p>
            </div>
            <div>
                <div className="container">
                    <div className="story-details">
                        <div className="story-title">
                            <span>OUR JOURNEY, PASSION, AND DEDICATION.</span>
                            <div className="story-title-flex">
                                <div>
                                    <h2>OUR STORY</h2>
                                </div>
                                <div className="story-title-flex-border">
                                    <p>01</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-details-grid">
                            <div className="story-details-grid-img">
                                <img src={Evolutionimf}></img>
                            </div>
                            <div className="story-details-grid-details">
                                <h4>Our Journey Since 1999</h4>
                                <p>Founded in 1999 in Abu Dhabi, UAE, we have been dedicated
                                    to delivering exceptional maritime solutions, shaping the
                                    industry's future, and fostering excellence through our
                                    unwavering commitment to innovation, expertise, and customer
                                    satisfaction.</p>
                                <div className="story-details-grid-details-icon">
                                    <img src={Evolutionicon}></img>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <div className="story-title">
                                <span>CHARTING THE COURSE TOWARDS MARITIME EXCELLENCE</span>
                                <div className="story-title-flex">
                                    <div>
                                        <h2>OUR VALUES</h2>
                                    </div>
                                    <div className="story-title-flex-border">
                                        <p>02</p>
                                    </div>
                                </div>
                            </div>
                            <div className='company-vision-values-flex'>
                                <div className="story-details-grid-second">
                                    <div className="story-details-grid-details">
                                        <div className="story-details-grid-details-items">
                                            <h4>Our Vision</h4>
                                            <p>Driven by a relentless pursuit of excellence, our vision is to become the leading
                                                supplier and service provider for the maritime, oil & gas, and industrial sectors,
                                                delivering navigation, communication , automation, instrumentation, and safety
                                                solutions at competitive prices.</p>
                                            <div className="story-details-grid-details-icon">
                                                <img src={Evolutionicon}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="story-details-grid-img">
                                        <img src={companyVisionImg}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='company-mission-values-flex'>
                                <div className="story-details-grid-second">
                                    <div className="story-details-grid-img">
                                        <img src={companyMissionImg}></img>
                                    </div>
                                    <div className="story-details-grid-details">
                                        <div className="story-details-grid-details-items">
                                            <h4>Our Mission</h4>
                                            <p>Dedicated to exceeding quality, safety, and environmental standards,
                                                our mission is to provide top-notch marine services and supply solutions. We aim to fulfill
                                                our customers' needs in the maritime, oil & gas, and industrial sectors through personalized
                                                and reliable services, ensuring their success and satisfaction.</p>
                                            <div className="story-details-grid-details-icon">
                                                <img src={Evolutionicon}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-business-color">
                    <div className="container">
                        <div className="story-business-details">
                            <div className="story-business-details-items">
                                <h4>4,997+</h4>
                                <p>Happy clients</p>
                            </div>
                            <div className="story-business-details-items">
                                <h4>22</h4>
                                <p>Years in business</p>
                            </div>
                            <div className="story-business-details-items">
                                <h4>60+</h4>
                                <p>Partners</p>
                            </div>
                            <div className="story-business-details-items">
                                <h4>15</h4>
                                <p>Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

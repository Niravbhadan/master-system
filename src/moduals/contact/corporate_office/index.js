import React from "react";
import './corporate_office.scss';
export default function Corporate_office(){
    return(
        <div>
            <div className="office-information-grid">
                <div className="office-information-item">
                    <div className="office-leftcontent">
                        <h6>Corporate Office</h6>
                        <div className="office-information-location">
                            <h5>Dubai</h5>
                            <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music.</p>
                        </div>
                        <div className="office-information-alignment">
                            <div>
                                <a href="mailto:dubai@mastersystems.com">
                                    <span>Email :</span>
                                    dubai@mastersystems.com
                                </a>
                                <a>
                                    <span>Phone: </span>
                                    +97145519370
                                </a>
                                <a>
                                    <span>Mobile: </span>
                                    +971559931140
                                </a>
                            </div>
                            <div>
                                <a>
                                    <span>Fax: </span>
                                    +97167411427
                                </a>
                                <a><span>PO box: </span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="office-information-item-two">
                    <div className="office-information-item-two-child"></div>
                </div>
            </div>
        </div>
    )
}
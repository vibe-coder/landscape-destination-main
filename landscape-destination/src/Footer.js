import React from "react";
import twitterIcon from "./icons8-twitter.svg"
import facebookIcon from "./icons8-facebook.svg"
import instagramIcon from "./icons8-instagram.svg"
import picture1 from "./images/david-billings-U6pLKRSQLis-unsplash.jpg"
import picture2 from "./images/denny-ryanto-naOfJ3DlfPM-unsplash.jpg"
import picture3 from "./images/toby-elliott-Nqdx6-LW4VE-unsplash.jpg"
import arrowButton from "./icons8-slide-up-32.png"

function Footer(){
  return(
    <div className="footer-wrapper">
      <div className="social-wrapper">
        <div className="social-wrapper-2">
        <img src={twitterIcon} alt="icon" className="social-icon" />
        <img src={instagramIcon} alt="icon" className="social-icon"/>
        <img src={facebookIcon} alt="icon" className="social-icon"/>
        </div>

        <div className="social-line">.</div>
      </div>

      <div className="popular-destination">
        <div className="popular-line">
          <h3>Popular</h3>
          <div>.</div>
        </div>
        <div className="location">
          <img src= {picture1} className="location-image" alt="location img"/>
          <img src= {picture2} className="location-image" alt="location img"/>
          <img src= {picture3} className="location-image" alt="location img"/>
        </div>
        <div className="arrow-wrapper">
          <img src={arrowButton} alt="aroow button" className="arrow-button-1" />
          <img src={arrowButton} alt="aroow button" className="arrow-button-2" />
        </div>
      </div>
    </div>
  )
}

export default Footer;
import React from "react";
import twitterIcon from "./icons8-twitter.svg"
import facebookIcon from "./icons8-facebook.svg"
import instagramIcon from "./icons8-instagram.svg"

function Footer(){
  return(
    <div className="footer-wrapper">
      <div className="social-wrapper">
        <div>
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
          Pictures
        </div>
        <div className="arrow-button">
          left and right
        </div>
      </div>
    </div>
  )
}

export default Footer;
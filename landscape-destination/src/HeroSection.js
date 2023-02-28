import React from "react";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function HeroSection(){
  return(
    <div className="hero-section">
      <Header/>
      <Body />
      <Footer/>
    </div>
  )
}

export default HeroSection;
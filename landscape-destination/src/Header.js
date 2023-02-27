import React from "react";
import "./App.css"
import searcIcon from "./icons8-search-50.png"
import userIcon from"./icons8-male-user-50.png"

function Header(){
  return(
    <div className="header-wrapper">
      <h1 className="logo">S<span className="logo-p">q.</span></h1>
      <div className="link-wrapper">
        <a href="www.google.com">Home</a>
        <a href="www.google.com">About</a>
        <a href="www.google.com">Destinations</a>
        <a href="www.google.com">Contact</a>
        
      </div>

      <div className="icon-wrapper">
        <img src={searcIcon} alt="icon" />
        <img src={userIcon} alt="icon" />
      </div>
    </div>
  )
}

export default Header
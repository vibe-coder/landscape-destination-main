import React from "react";
import "./App.css"


function Body(){
  return(
    <div className="body-wrapper">
      <div className="line">
        <div className="circle">.</div>
        <div className="circle">.</div>
        <div className="circle">.</div>
      </div>

      <div className="hero-wrapper">
        <h1 className="hero-header">INDONESIA</h1>
        <p className="hero-paragraph">Anim sit qui occaecat excepteur Lorem nostrud nostrud veniam. Proident enim duis duis pariatur ut dolore laboris. Fugiat proident voluptate occaecat aliqua duis ad deserunt ipsum enim.  </p>
        <a href="www.youtube.com" className="hero-button"> Explore <span className="arrow">&#10095;</span></a>
      </div>
    </div>
  )
}

export default Body;
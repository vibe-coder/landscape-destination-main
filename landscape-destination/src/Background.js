import React from "react";
import "./App.css"
import bgImage from "./david-billings-U6pLKRSQLis-unsplash.jpg"

function Background(){
  return (
    <img src={bgImage} className="bg-image" alt='backgrond-img' />
  )
}

export default Background;
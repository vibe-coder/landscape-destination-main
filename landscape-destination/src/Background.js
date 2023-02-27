import React from "react";
import "./App.css"
import bgImage from "./david-billings-U6pLKRSQLis-unsplash.jpg"

function Background(){
  return (
    <div>
      <img src={bgImage} className="bg-image" alt='backgrond-img' />
    </div>
  )
}

export default Background;
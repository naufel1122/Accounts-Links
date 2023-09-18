import React from "react";
import  ReactDOM from "react-dom";
import './index.css'
import image1 from './MyImage.png'; 

function Hi() {
  return (<div className="main">
    <div className="container">
      <div className="content">
        <img src={image1} alt="" />
        <h1>Muhammad Naufel</h1>
        <div className="github"></div>
        <div className="linkedin"></div>
        <div className="instagram"></div>
        <div className="Facebook"></div>
        <div className="Resume"></div>
      </div>
    </div>
  </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
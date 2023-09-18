import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import image1 from './MyImage.png';
import github from './github.svg';
import linkedin from './linkedin.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import whatsapp from './whatsapp.svg';

function Hi() {
  return (<div className="main">
    <div className="container">
      <div className="content">
        <img src={image1} alt="" />
        <h1>Muhammad Naufel</h1>
        <div className="github">
          <p>  <img src={github} alt="" /> Github</p>
        </div>
        <div className="linkedin">
          <p><img src={linkedin} alt="" />Linkedin</p>
        </div>
        <div className="instagram">
          <p><img src={instagram} alt="" />Instagram</p>
        </div>
        <div className="Facebook">
          <p><img src={facebook} alt="" />Facebook</p>
        </div>
        <div className="Resume">
          <p><img src={whatsapp} alt="" />WhatsApp</p></div>
      </div>
    </div>
  </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
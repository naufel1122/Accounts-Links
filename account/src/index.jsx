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
        <p>Developer Who has passion for web and app technologies. Always ready to learn new technologies and to work in them. my first priority is to given my best in terms of what i have and indulge you at every level. </p>
        <div className="github">
          <a href="https://github.com/naufel1122">  <img src={github} alt="" /> Github</a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/muhammad-nofil-629766261/"><img src={linkedin} alt="" />Linkedin</a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/muhammad_naufel/"><img src={instagram} alt="" />Instagram</a>
        </div>
        <div className="Facebook">
          <a href="https://www.facebook.com/profile.php?id=100010828694071"><img src={facebook} alt="" />Facebook</a>
        </div>
        <div className="Resume">
          <a href="https://wa.me/923240539139"><img src={whatsapp} alt="" />WhatsApp</a>
        </div>
      </div>
    </div>
  </div>)
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
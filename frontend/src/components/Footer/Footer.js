import React from "react";
import "./Footer.css";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import pic from '../navBar/logo.png'
import { GoMail } from "react-icons/go";
export default function Footer() {
  return (
    <>
      <div className="Footer-main">

        <div className="Footer-start">
          <div className="containment">   <img src={pic} alt="" srcset="" className="containment-pic" /></div>
       
          <div className="footer-allin" >
            <a href="https://www.instagram.com/rotaractclubofbit/"  target="blank">  <BsInstagram color="white" size={"40px"} className="spacing" /></a>
          
            <a href="https://twitter.com/RotaractBIT"  target="blank"><BsTwitter color="white" size={"40px"} className="spacing" /></a>
            
            <a href="https://www.linkedin.com/company/rotaractclubofbit/mycompany/"  target="blank"><BsLinkedin color="white" size={"40px"} className="spacing" /></a>
            
            <a href="mailto:rotaract@bit-bangalore.edu.in">  <GoMail color="white" size={"40px"} className="spacing" /></a>
          
          </div>
        </div>
        <div className="copyrights">
          Rotaract Club of BIT,All Rights Reserved @{new Date().getFullYear()}
        </div>
      </div>
    </>
  );
}
